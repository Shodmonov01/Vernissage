import React from "react";
import "../decor.css";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Title from "@/components/details/Title";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Деревянный багет для оформления",
  description:
    "Vernissage - Предлагаем деревянные багеты для оформление картин, фотографий! Оставляйте заявку на сайте",
};
const arr = [
  {
    id: "1",
    image: "/advantages/image-3.png",
    title: "Эстетическая ценность",
    text: "Дерево обладает естественной красотой, которая делает его идеальным выбором для оформления. Его текстура и цветовая палитра могут варьироваться, что позволяет подобрать багет, идеально сочетающийся с вашим произведением.",
  },
  {
    id: "2",
    image: "/advantages/image-7.png",
    title: "Качество и долговечность",
    text: "Деревянные багеты изготавливаются из высококачественных пород древесины, таких как дуб, бук, сосна и другие. Они прочны и устойчивы к воздействию времени, что гарантирует долгий срок службы и сохранение первозданного вида.",
  },
  {
    id: "3",
    image: "/advantages/image-2.png",
    title: "Эстетическая ценность",
    text: "Дерево обладает естественной красотой, которая делает его идеальным выбором для оформления. Его текстура и цветовая палитра могут варьироваться, что позволяет подобрать багет, идеально сочетающийся с вашим произведением.",
  },
];
const arr2 = [
  {
    id: "1",
    title: "Выбор багета",
    text: "Наши специалисты помогут вам подобрать деревянный багет, который подчеркнет красоту и особенности вашего произведения. Мы предлагаем разнообразные образцы, чтобы вы могли выбрать идеальный вариант.",
  },
  {
    id: "2",
    title: "Изготовление и подгонка",
    text: "После выбора багета, мы приступаем к его изготовлению и подгонке под размеры вашего произведения. Мы учитываем все нюансы, чтобы багет идеально подошел и обеспечил надежную фиксацию.",
  },
  {
    id: "3",
    title: "Монтаж и защита",
    text: "Ваше произведение искусства монтируется в багет с использованием высококачественных материалов и технологий. Мы также можем предложить дополнительные защитные элементы, такие как стекло с UV-защитой, чтобы сохранить яркость красок и предотвратить выцветание.",
  },
  {
    id: "4",
    title: "Завершающие штрихи",
    text: "Мы уделяем внимание каждому элементу, чтобы ваш багет выглядел безупречно. Проверка качества и аккуратная упаковка завершают процесс оформления.",
  },
];
const arr3 = [
  {
    id: "1",
    image: "/advantages/image-8.png",
    title: "Картины и гравюры",
    text: "Деревянный багет придает картинам и гравюрам законченный и элегантный вид, делая их центральным элементом интерьера.",
  },
  {
    id: "2",
    image: "/advantages/image-9.png",
    title: "Фотографии",
    text: "Оформленные в деревянный багет фотографии выглядят более выразительно и стильно, сохраняя при этом тепло и личные воспоминания.",
  },
  {
    id: "3",
    image: "/advantages/image-10.png",
    title: "Зеркала",
    text: "Деревянные багеты могут использоваться для оформления зеркал, добавляя им шарма и утонченности.",
  },
];
const page = () => {
  return (
    <div className="decorContainer">
      <Banner text="Деревянный багет" />
      <ResponsiveCatalog />
      <Navbar />
      <main className="mainContent">
        <div>
          <p className="text">
            Деревянный багет – это не просто элемент декора, а важный компонент,
            который может значительно усилить визуальное воздействие вашего
            произведения искусства. Он создает рамку, которая подчеркивает стиль
            и уникальность картины, фотографии или другого художественного
            произведения.
          </p>
          <div className="images">
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood1-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood2-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood3-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood4-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood5-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood6-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood7-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/wood8-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="why">
          <Title text="Почему выбирают деревянный багет?" size={36} />
          <div className="whyContent">
            {arr.map((item) => (
              <div className={"whyItem"} key={item.id}>
                <Image
                  src={item.image}
                  alt="advantages"
                  width={50}
                  height={50}
                />
                <h4 className={"cardTitle"}>{item.title}</h4>
                <p className={"itemText"}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="why">
          <Title text="Процесс оформления" size={36} />
          <div className="whyContent whyContent2">
            {arr2.map((item) => (
              <div className={"whyItem whyItem2"} key={item.id}>
                <span className={"cardId"}>{item.id}</span>
                <h4 className={"cardTitle"}>{item.title}</h4>
                <p className={"itemText"}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="why">
          <Title text="Примеры использования деревянного багета" size={36} />
          <div className="whyContent">
            {arr3.map((item) => (
              <div className={"whyItem"} key={item.id}>
                <Image
                  src={item.image}
                  alt="advantages"
                  width={50}
                  height={50}
                />
                <h4 className={"cardTitle"}>{item.title}</h4>
                <p className={"itemText"}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
