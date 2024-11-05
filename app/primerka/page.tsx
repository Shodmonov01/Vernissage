import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./primerka.module.css";
const Page = () => {
  return (
    <div className={styles.page}>
      <Banner text="Примерить в своем интерьере" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <p className={styles.p}>
          Примерка: для примерки гравюры (картины) в своем интерьере мы готовы
          дать работу (или привезти ее самим) под полную стоимость на 1-2 дня.
          Если гравюру (или картину) не возвращают в салон до указанного времени
          - сделка считется совершенной и пробивается чек. Если клиент
          возвращает работу (без повреждений) до указанного времени, то денежные
          средства возвращаются.
        </p>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
