"use client";
import React from "react";
import Title from "../details/Title";
import styles from "./advantages.module.css";
import Image from "next/image";
import Button from "../details/button";
import { useRouter } from "next/navigation";

const arr = [
  {
    id: "1",
    image: "/advantages/image-1.png",
    title: "Уникальные произведения искусства",
    text: "В нашем салоне представлены редкие, антикварные карты, датированные серединой XVII века.",
  },
  {
    id: "2",
    image: "/advantages/image-2.png",
    title: "Широкий ассортимент",
    text: "В салоне представлен большой выбор работ по темам, сюжетам, различным техникам гравирования и форматам.",
  },
  {
    id: "3",
    image: "/advantages/image-4.png",
    title: "Индивидуальный подход",
    text: "Мы ценим каждого клиента и стремимся учитывать все ваши пожелания, предлагая индивидуальные решения и эксклюзивные предложения.",
  },
  {
    id: "4",
    image: "/advantages/image-6.png",
    title: "Доступные цены",
    text: "Мы предлагаем конкурентоспособные цены на все  произведения салона.",
  },
];
const Advantages = () => {
  const router = useRouter();
  return (
    <div className={styles.advantages}>
      <Title text="Наши преимущества" size={36} />
      <h3 className={styles.advantagesSubtitle}>
        Приходите в <span>&quot;ВЕРНИСАЖ&quot;</span> и откройте для себя мир
        искусства!
      </h3>
      <div className={styles.advantagesContent}>
        {arr.map((item) => (
          <div className={styles.advantagesItem} key={item.id}>
            <Image src={item.image} alt="advantages" width={50} height={50} />
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
        <div className={styles.advantagesLastItem}>
          <p>
            Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span>!{" "}
            <br /> Мы – это место, где оживает искусство. Здесь собираются все
            те, кто любит старинные гравюры, украшает ими свой дом и дарит их
            своим друзьям. Доступность и изысканность - главные характеристики
            подлинных произведений искусства, которые представлены здесь.
            <br />
            <span>ЭТО КРАСИВО, ЭТО ДОСТУПНО, ЭТО ВЕЧНО.</span>
          </p>
          <Button
            onClick={() => {
              router.push("/about");
            }}
            text="Подробнее о нас"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
