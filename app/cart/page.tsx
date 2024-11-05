"use client";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Button from "@/components/details/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(existingCart);
    console.log(existingCart);
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = cart.filter((item: any) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger custom event for cart update
    const event = new Event("cartUpdate");
    window.dispatchEvent(event);
  };

  return (
    <div className="cart">
      <Banner text="Корзина" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="cart_main">
        <div className="cart_products">
          {cart.length > 0 ? (
            cart.map((item: any) => (
              <div key={item.id} className="cart_product">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="product_left"
                >
                  <Image
                    src={item.images[0].image}
                    alt="decor"
                    width={251}
                    height={196}
                    className="product_image"
                  />
                  <div className="product_infos">
                    <h3 className="product_name">Наименование:</h3>
                    <p className="product_title">{item.name}</p>
                    <h3 className="responsive_price">{item.price} ₽</h3>
                  </div>
                </div>
                <div className="product_right">
                  <h3 className="product_price">{item.price} ₽</h3>
                  <span onClick={() => handleDelete(item.id)}>
                    <Button text="Удалить с корзины" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h3>Корзина пуста</h3>
          )}
        </div>
        <div className="sum">
          <div>
            <p>СУММА ЗАКАЗА:</p>
            <h3>
              {cart &&
                cart.length > 0 &&
                cart.reduce(
                  (acc, item: { price: number }) => acc + item.price,
                  0
                )}
              ₽
            </h3>
          </div>
          <div
            className="orderButton"
            onClick={() => {
              if (cart.length > 0) {
                router.push("/order");
              }
            }}
          >
            <Button text="Оформить заказ" />
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
