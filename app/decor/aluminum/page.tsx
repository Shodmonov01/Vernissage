import React from "react";
import "../decor.css";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Title from "@/components/details/Title";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Алюминиевый багет в Санкт-Петербурге",
  description:
    "Vernissage - Предлагаем большой выбор алюминиевых багетов для оформления ваших произведений исскуства! Оставляйте заявку на сайте",
};
const arr = [
  {
    id: "1",
    image: "/advantages/image-15.png",
    title: "Современный вид",
    text: "Алюминиевые багеты придают произведениям искусства стильный и современный вид, идеально подходящий для современных и минималистичных интерьеров.",
  },
  {
    id: "2",
    image: "/advantages/image-11.png",
    title: "Прочность и долговечность",
    text: "Оформленные в пластиковый багет фотографии выглядят элегантно и современно, подчеркивая важные моменты и воспоминания.",
  },
  {
    id: "3",
    image: "/advantages/image-16.png",
    title: "Легкость",
    text: "Алюминиевые багеты легкие по весу, что облегчает их установку и транспортировку.",
  },
  {
    id: "4",
    image: "/advantages/image-2.png",
    title: "Широкий выбор дизайнов",
    text: "Алюминиевые багеты доступны в различных цветах и отделках, что позволяет подобрать идеальный вариант для вашего произведения и интерьера.",
  },
  {
    id: "5",
    image: "/advantages/image-13.png",
    title: "Простота ухода",
    text: "Пластиковые багеты легко чистить и поддерживать в отличном состоянии, что обеспечивает их долгий срок службы.",
  },
];
const arr2 = [
  {
    id: "1",
    title: "Выбор багета",
    text: "Наши специалисты помогут вам выбрать алюминиевый багет, который наилучшим образом подчеркнет особенности вашего произведения. Мы предлагаем разнообразные образцы, чтобы вы могли найти идеальный вариант.",
  },
  {
    id: "2",
    title: "Изготовление и подгонка",
    text: "После выбора багета, мы приступаем к его изготовлению и подгонке под размеры вашего произведения. Мы учитываем все детали, чтобы багет идеально подошел и обеспечил надежную фиксацию.",
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
    title: "Картины и постеры",
    text: "Алюминиевый багет придает картинам и постерам современный и стильный вид, делая их ярким акцентом в интерьере.",
  },
  {
    id: "2",
    image: "/advantages/image-9.png",
    title: "Фотографии",
    text: "Оформленные в алюминиевый багет фотографии выглядят элегантно и современно, подчеркивая важные моменты и воспоминания.",
  },
  {
    id: "3",
    image: "/advantages/image-14.png",
    title: "Сертификаты и дипломы",
    text: "Алюминиевые багеты отлично подходят для оформления сертификатов и дипломов, придавая им презентабельный и официальный вид.",
  },
  {
    id: "4",
    image: "/advantages/image-10.png",
    title: "Зеркала",
    text: "Алюминиевые багеты могут использоваться для оформления зеркал, добавляя им шарма и утонченности.",
  },
];
const page = () => {
  return (
    <div className="decorContainer">
      <Banner text="алюминиевый багет" />
      <ResponsiveCatalog />
      <Navbar />
      <main className="mainContent">
        <div>
          <p className="text">
            Оформление ваших произведений искусства в алюминиевый багет – это
            современное и стильное решение, идеально подходящее для различных
            типов работ, таких как картины, фотографии, постеры и другие
            художественные произведения. Алюминиевые багеты отличаются
            прочностью, легкостью и элегантностью, что делает их популярным
            выбором для оформления интерьера.
          </p>
          <div className="images">
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin1-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin2-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin3-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin4-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin5-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin6-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin7-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/alumin8-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="why">
          <Title text="Преимущества алюминиевого багета" size={36} />
          <div className="whyContent ">
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
          <Title text="Примеры использования алюминиевого багета" size={36} />
          <div className="whyContent whyContent2">
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
      <ContactForm />
    </div>
  );
};

export default page;
