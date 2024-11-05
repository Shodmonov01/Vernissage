import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Metadata } from "next";
const arr = [
  {
    id: "1",
    image: "/delivery/delivery.svg",
    title: "Быстрая доставка",
    text: "По Санкт-Петербургу курьерской службой (дату и время по согласованию) - по тарифам доставки.",
  },
  {
    id: "2",
    image: "/delivery/delivery-2.svg",
    title: "Удобное время доставки",
    text: "Самовывоз из салона (в этот же день или по согласованию, бесплатно).",
  },
  {
    id: "3",
    image: "/delivery/delivery-3.svg",
    title: "Осмотр товара при доставке",
    text: "Курьерские службы доставки (CDEK) по всей России (от 1-х суток, по тарифам службы доставки), а    также Почтой России.",
  },
];
export const metadata: Metadata = {
  title: "Доставка | Vernissage",
  description:
    "Vernissage - Условия доставки антиквариата в Санкт-Петербурге! Приятные цены, быстрая доставка. Оставляйте заявку на сайте",
};
const Page = () => {
  return (
    <div className={styles.delivery}>
      <Banner text="Доставка" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <p className={`${styles.text} ${styles.mainText}`}>
          Мы предлогаем вам несколько вариантов доставки:
        </p>
        <div className={styles.whyContent}>
          {arr.map((item) => (
            <div className={styles.whyItem} key={item.id}>
              <Image src={item.image} alt="advantages" width={60} height={60} />
              {/* <p className={styles.cardId}>{item.id}</p> */}
              {/* <h4 className={styles.whyCardTitle}>{item.title}</h4> */}
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
        {/* <div>
          <h2 className={styles.title}>Преимущества</h2>
          <p className={styles.text}>
            Мы предоставляет высококачественные услуги по доставке, обеспечивая
            клиентам множество преимуществ:
          </p>
        </div> */}
        {/* <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>01</h3>
            <p className={styles.cardText}>
              По Санкт-Петербургу курьерской службой (дату и время по
              согласованию) - по тарифам доставки.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>02</h3>
            <p className={styles.cardText}>
              Самовывоз из салона (в этот же день или по согласованию,
              бесплатно).
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>03</h3>
            <p className={styles.cardText}>
              Курьерские службы доставки (CDEK) по всей России (от 1-х суток, по
              тарифам службы доставки), а также Почтой России.
            </p>
          </div>
        </div> */}
        <div>
          <h2 className={styles.title}>
            Доставка по Санкт-Петербургу курьером галереи
          </h2>
          <p className={styles.text}>
            Вы можете заказать доставку товара курьером по указанному адресу.
            После оформления заказа наш администратор свяжется с вами для
            уточнения адреса и выбора удобного времени доставки.
          </p>
          <p className={styles.text}>
            При получении товара вы вскрываете упаковку при курьере и проверяете
            её на целостность и соответствие комплектации.{" "}
          </p>
          {/* <p className={styles.text}>
            <b>Бесплатная доставка при заказе</b>{" "}
            <span className={styles.span}>от 10000 рублей.</span>
          </p> */}
        </div>
        <div>
          <h2 className={styles.title}>Самовывоз из магазина</h2>
          <p className={styles.text}>
            Вы можете забрать товар у нас в галерее по адресу Санкт-Петербург,
            Невский проспект, дом 48, заранее предупредив администратора. 
          </p>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
