import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./style.css";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./styles.module.css";
const arr = [
  {
    id: "1",
    image: "/upakovka-1.png",
    // title: "Быстрая доставка",
    text: "Качественная, надежная упаковка для транспортировки в другие города России.",
  },
  {
    id: "2",
    image: "/upakovka-2.png",
    // title: "Удобное время доставки",
    text: "Подарочная упаковка для работы - упаковка гравюр, картин в подарочную, бумажную упаковку (цена 1000 р).",
  },
];
export const metadata: Metadata = {
  title: "Упаковка наших антикварных изделий!",
  description:
    "Vernissage - Мы чательно и аккуратно упаковываем наш товар! Ознакомиться с примерами упаковки, можно у нас на сайте!",
};
const Page = () => {
  return (
    <div className="page">
      <Banner text="Оформление гравюр, картин, акварелей, вышивок, гобеленов, фото и зеркал" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="upakovka">
        <p className="text">
          Упаковка: мы гарантируем качественную упаковку для транспортировки
          работы в другие города России.
        </p>
        {/*
        <p>
          Подарочная упаковка для работы - упаковка гравюр, картин в подарочную,
          бумажную упаковку. Цвет упаковочной бумаги зависит от имеющихся в
          наличии упаковочных материалов. Упаковка данного типа осуществляется в
          салоне (на доставке не упаковываем), заказ вручается адресату в
          упакованном виде. Работы до 55×65 см комплектуются фирменным пакетом.
        </p> */}
        <div className="images">
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka1.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka2.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka3.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka4.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={styles.whyContent}>
          {arr.map((item) => (
            <div className={styles.whyItem} key={item.id}>
              <Image src={item.image} alt="advantages" width={50} height={50} />
              {/* <h3 className={styles.cardId}>{item.id}</h3> */}
              {/* <h4 className={styles.whyCardTitle}>{item.title}</h4> */}
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
        <p>
          Цвет упаковочной бумаги зависит от имеющихся в наличии упаковочных
          материалов.
        </p>
        <p>
          Упаковка данного типа осуществляется в салоне (на доставке не
          упаковываем), заказ вручается адресату в упакованном виде.
        </p>
        <p>Работы до 55×65 см комплектуются фирменным пакетом.</p>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
