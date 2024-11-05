import React from "react";
import styles from "./payment.module.css";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Способы оплаты в нашей Арт-Лавке",
  description:
    "Vernissage - Ознакомьтесь с способами оплаты наших антикварных произведений исскуства! Оставляйте заявку на сайте",
};
const page = () => {
  return (
    <div className={styles.container}>
      <Banner text="Оплата" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <p className={styles.text}>
          Вы можете выбрать один из трёх вариантов оплаты:
        </p>
        <h3 className={styles.title}>Оплата наличными</h3>
        <p className={styles.text}>
          При выборе оплаты наличными, вы ждёте приезда курьера и передаёте ему
          сумму за товар в рублях. Курьер предоставляет товар, который можно
          осмотреть на наличие повреждений и соответствие указанным условиям.
          Покупатель подписывает документы, вносит оплату и получает чек.
        </p>
        <p className={styles.text}>
          Также оплата наличными доступна при самовывозе из магазина.
        </p>
        <h3 className={styles.title}>Безналичный расчёт банковской картой</h3>
        <p className={styles.text}>
          При оформлении заказа в корзине вы можете выбрать вариант безналичной
          оплаты. Для этого на соответствующей странице нужно нажать кнопку
          &quot;Оплата заказа банковской картой&quot;.
        </p>
        <p className={styles.text}>
          Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт
          следующих платёжных систем: 
        </p>
        <div className={styles.cardsContainer}>
          <Image
            className={styles.cards}
            src={"/cards.png"}
            alt="cards"
            width={700}
            height={100}
          />
        </div>
        <h3 className={styles.title}>
          Безналичный расчёт: перечисление оплаты на р/с
        </h3>
        <p className={styles.text}>
          Вы можете оформить покупку на юридическое лицо. Присылайте нам
          реквизиты организации, мы выставляем счет, получаем оплату и
          предоставляем все закрывающие документы. Работаем без НДС.
        </p>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
