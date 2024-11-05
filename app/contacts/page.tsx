import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./style.module.css";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Контактная информация | Vernissage",
  description:
    "Vernissage - Контактная информация для связи с нами! Большой выбор антиквариата по приятной цене.",
};
const page = () => {
  return (
    <div className={styles.contactContainer}>
      <Banner text="КОНТАКТЫ" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <p className={styles.mainText}>
            <span className={styles.mainSpan}>Адрес </span> Санкт-Петербург, ТЦ
            &quot;ПАССАЖ&quot;, Невский проспект, дом 48, 1 этаж, 37 секция. с
            10:00 до 22:00
            <br />
            Санкт-Петербург, ТЦ &quot;МОСКВА&quot;, Площадь Александра Невского,
            дом 2, 1 этаж, 105 секция. с 10:00 до 21:00
          </p>
          <div className={styles.contactDiv}>
            <div>
              <p className={styles.mainText}>
                <span className={styles.mainSpan}>Телефон </span> +7 (911)
                260-61-46 <br />
                +7 (931) 375-21-65
              </p>
              <p className={styles.mainText}>
                <span className={styles.mainSpan}>E-mail </span>{" "}
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="mailto:flora_t@mail.ru"
                >
                  flora_t@mail.ru
                </a>
              </p>
              <p className={styles.mainText}>
                <span className={styles.mainSpan}>Режим работы </span>Пн-Пт с
                10:00 до 22:00
              </p>
            </div>
            <div>
              ООО &quot;Аллан Бенджамин Компани&quot; <br />
              ИНН/КПП: 7842342008/784101001; <br /> ОГРН: 5067847327950 <br />{" "}
              ОКПО: 96763004 <br /> ОКАТО: 40298564000 <br /> ОКТМО: 40911000
            </div>
          </div>
          <div className={styles.footerSocials}>
            <Link
              className={styles.footerLink}
              href="https://wa.me/+79112606146"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footerLinkIcon}
                src="/whatsapp-logo.svg"
                alt="whatsapp-icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              className={styles.footerLink}
              href="https://t.me/+79112606146"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footerLinkIcon}
                src="/telegram-logo.svg"
                alt="telegram-icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.uz/maps/org/passage/1037956855/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Пассаж
            </a>
            <a
              href="https://yandex.uz/maps/2/saint-petersburg/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Торговый центр в Санкт‑Петербурге
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=30.334447%2C59.935270&mode=search&oid=1037956855&ol=biz&sll=30.334447%2C59.935270&sspn=0.022573%2C0.006192&text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A2%D0%94%20%22%D0%9F%D0%90%D0%A1%D0%A1%D0%90%D0%96%22%2C%20%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%20%D0%B4%D0%BE%D0%BC%2048%2C%201%20%D1%8D%D1%82%D0%B0%D0%B6%2C&z=16"
              width="100%"
              height="400"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
