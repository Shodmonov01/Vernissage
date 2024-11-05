import React from "react";
import "../decor.css";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Title from "@/components/details/Title";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Пластиковый багет в Санкт-Петербурге",
  description:
    "Vernissage - Пластиковые багеты для оформления ваших произведенний исскуства! Оставляйте заявку на сайте",
};
const arr = [
  {
    id: "1",
    image: "/advantages/image-3.png",
    title: "Доступная стоимость",
    text: "Пластиковые багеты являются более экономичным вариантом по сравнению с деревянными, что позволяет оформить больше работ за меньшие деньги.",
  },
  {
    id: "2",
    image: "/advantages/image-11.png",
    title: "Качество и долговечность",
    text: "Пластиковые багеты легкие по весу, но при этом достаточно прочные и устойчивые к механическим повреждениям и воздействию влаги.",
  },
  {
    id: "3",
    image: "/advantages/image-12.png",
    title: "Эстетическая ценность",
    text: "Пластиковые багеты доступны в широком ассортименте цветов, текстур и стилей, что позволяет найти оптимальное решение для любого произведения искусства и интерьера.",
  },
  {
    id: "3",
    image: "/advantages/image-13.png",
    title: "Эстетическая ценность",
    text: "Пластиковые багеты легко чистить и поддерживать в отличном состоянии, что обеспечивает их долгий срок службы.",
  },
];
const arr2 = [
  {
    id: "1",
    title: "Выбор багета",
    text: "Наши специалисты помогут вам выбрать пластиковый багет, который наилучшим образом подчеркнет особенности вашего произведения. Мы предлагаем разнообразные образцы, чтобы вы могли найти идеальный вариант.",
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
    text: "Пластиковый багет придает картинам и постерам современный и стильный вид, делая их ярким акцентом в интерьере.",
  },
  {
    id: "2",
    image: "/advantages/image-9.png",
    title: "Фотографии",
    text: "Оформленные в пластиковый багет фотографии выглядят элегантно и современно, подчеркивая важные моменты и воспоминания.",
  },
  {
    id: "3",
    image: "/advantages/image-14.png",
    title: "Сертификаты и дипломы",
    text: "Пластиковые багеты отлично подходят для оформления сертификатов и дипломов, придавая им презентабельный и официальный вид.",
  },
];
const page = () => {
  return (
    <div className="decorContainer">
      <Banner text="пластиковый багет" />
      <ResponsiveCatalog />
      <Navbar />
      <main className="mainContent">
        <div>
          <p className="text">
            Оформление ваших произведений искусства в пластикового багет – это
            современное и доступное решение, которое идеально подходит для
            различных типов работ, включая картины, фотографии, постеры и другие
            художественные произведения. Пластиковые багеты предлагают широкий
            ассортимент стилей и цветов, что позволяет подобрать идеальный
            вариант для вашего интерьера.
          </p>
          <div className="images">
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic1-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic2-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic3-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic4-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic5-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic6-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic7-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
            <div className="imageContainer">
              <Image
                className="image"
                src="/decor/plastic8-min.png"
                alt="decor"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="why">
          <Title text="Преимущества пластикового багета" size={36} />
          <div className="whyContent whyContent2">
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
          <Title text="Примеры использования пластикового багета" size={36} />
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
