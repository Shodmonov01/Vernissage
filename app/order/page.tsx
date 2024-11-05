"use client";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "./order.css";
import { toast } from "react-toastify";
const Page = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    country: 1,
    address: "",
    city: "",
    region: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "country/");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the products from local storage
    const products = JSON.parse(localStorage.getItem("cart") || "[]");

    const price = products.reduce(
      (acc: number, item: { price: number }) => acc + item.price,
      0
    );
    const productForSending = products.map((item: { id: string }) => {
      return { product: item.id };
    });

    const orderData = {
      first_name: formData.name,
      last_name: formData.surname,
      company: "",
      country: formData.country,
      addres: formData.address,
      locality: formData.city,
      region: formData.region,
      pochta_index: formData.postalCode,
      phone: formData.phone,
      email: formData.email,
      product: productForSending,
      price,
    };
    const postData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API + "basket/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        if (response.ok) {
          localStorage.removeItem("cart");

          setFormData({
            name: "",
            surname: "",
            company: "",
            country: 1,
            address: "",
            city: "",
            region: "",
            postalCode: "",
            phone: "",
            email: "",
          });
          toast.success(
            "Спасибо за ваш заказ! Он отправлен в обработку, скоро с вами свяжутся для подтверждения доставки"
          );
        } else {
          toast.error("Произошла ошибка при оформлении заказа");
        }
      } catch (error) {
        toast.error("Произошла ошибка при оформлении заказа");
      }
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API + "create-payment/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: price,
          }),
        }
      );
      const data = await response.json();

      if (data.confirmationUrl) {
        postData();
        window.location.href = data.confirmationUrl;
      } else {
        alert("Payment failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
    }
  };
  // const handlePayment = async () => {
  //   try {
  //     const response = await fetch("https://api.yookassa.ru/v3/payments", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Idempotence-Key": crypto.randomUUID(),
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_YOOMONEY_API_KEY}`,
  //       },
  //       body: JSON.stringify({
  //         amount: {
  //           value: 1000,
  //           currency: "RUB",
  //         },
  //         confirmation: {
  //           type: "redirect",
  //           return_url: `${window.location.origin}?payment=success`,
  //         },
  //         description: "Payment for services",
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     if (!response.ok) {
  //       throw new Error(data.description || "Failed to create payment");
  //     }

  //     if (data.confirmation && data.confirmation.confirmation_url) {
  //       window.location.href = data.confirmation.confirmation_url;
  //     } else {
  //       throw new Error("No confirmation URL in the payment response");
  //     }
  //   } catch (error) {
  //     console.error("Payment creation failed:", error);
  //   }
  // };
  return (
    <div className="order">
      <Banner text="оформление заказа" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="orderMain">
        <h2>Детали оплаты</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formGroup">
            <div>
              <label htmlFor="name">
                Имя<span>*</span>
              </label>
              <input
                required
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="surname">
                Фамилия<span>*</span>
              </label>
              <input
                required
                id="surname"
                type="text"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="formRow">
            <label htmlFor="country">
              Страна/регион<span>*</span>
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              {countries.length > 0 &&
                countries.map((country: { id: string; name: string }) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="formRow">
            <label htmlFor="address">
              Адрес <span>*</span>
            </label>
            <input
              required
              id="address"
              type="text"
              placeholder="Номер дома и название улицы"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="city">
              Населенный пункт<span>*</span>
            </label>
            <input
              required
              id="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="region">
              Область / район<span>*</span>
            </label>
            <input
              required
              id="region"
              type="text"
              value={formData.region}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="postalCode">
              Почтовый индекс<span>*</span>
            </label>
            <input
              required
              id="postalCode"
              type="number"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="phone">
              Телефон<span>*</span>
            </label>
            <input
              id="phone"
              type="number"
              placeholder="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="email">
              E-mail<span>*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button
            style={{ cursor: "pointer" }}
            className="button"
            type="submit"
          >
            Подтвердить заказ
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
