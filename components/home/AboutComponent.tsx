"use client";
import React, { useState } from "react";
import styles from "./aboutComponent.module.css";
import Image from "next/image";
import Button from "../details/button";
import Title from "../details/Title";
import { useRouter } from "next/navigation";

const AboutComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/about-1.png", alt: "about1" },
    { src: "/about-2.png", alt: "about2" },
    { src: "/about-3.png", alt: "about3" },
  ];

  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const getSlideClass = (index: number) => {
    const diff = (index - currentSlide + images.length) % images.length;
    if (diff === 0) return styles.big;
    if (diff === 1) return styles.medium;
    return styles.small;
  };

  return (
    <div className={styles.aboutHome}>
      <div className={styles.top}>
        <Title text="О нас" size={32} />
        <div className={styles.pagination}>
          <button onClick={prevSlide} className={styles.button}>
            <Image src={"/arrow.svg"} alt="arrow" width={30} height={18} />
          </button>
          <button onClick={nextSlide} className={styles.button}>
            <Image
              src={"/arrow.svg"}
              style={{ transform: "rotate(180deg)" }}
              alt="arrow"
              width={30}
              height={18}
            />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <p>
            Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span> !{" "}
            <br />
            Мы – это место, где оживает искусство. Здесь собираются все те, кто
            любит старинные гравюры, украшает ими свой дом и дарит их своим
            друзьям. Доступность и изысканность - главные характеристики
            подлинных произведений искусства, которые представлены здесь.
            <br />
            <span>ЭТО КРАСИВО, ЭТО ДОСТУПНО, ЭТО ВЕЧНО.</span>
          </p>
          <Button
            onClick={() => {
              router.push("/about");
            }}
            text={"Подробнее о нас"}
          />
        </div>
        <div className={styles.pagination2}>
          <button onClick={prevSlide} className={styles.button}>
            <Image src={"/arrow.svg"} alt="arrow" width={30} height={18} />
          </button>
          <button onClick={nextSlide} className={styles.button}>
            <Image
              src={"/arrow.svg"}
              style={{ transform: "rotate(180deg)" }}
              alt="arrow"
              width={30}
              height={18}
            />
          </button>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.slider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${getSlideClass(index)}`}
              >
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
