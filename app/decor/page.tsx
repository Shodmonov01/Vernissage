import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./decor.css";
import Image from "next/image";
import Title from "@/components/details/Title";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Оформление багета в СПБ",
  description:
    "Vernissage - У нас вы можете приобрести оформление багета по приятной цене! Оставляйте заявку на сайте",
};
const arr = [
  {
    id: "01",
    text: "Эстетика - подчеркнуть всю красоту работы. Сделаем визуализацию работы в багете.",
  },
  {
    id: "02",
    text: "Сохранность работы и защита от внешней среды (защита от ультрафиолета, пыли, влажности, механического повреждения).",
  },
  {
    id: "03",
    text: "Подбор качественных материалов для оформления.",
  },
  {
    id: "04",
    text: "Сроки оформления - возможен срочный заказ до 3-х дней оформления.",
  },
];
const page = () => {
  return (
    <div className="decor">
      <Banner text=" Оформление гравюр, картин, акварелей, вышивок, гобеленов, фото и зеркал" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="content">
        <div className="types">
          <h3 className="title">Выбор багета</h3>
          <div className="typeCards">
            <Link href="/decor/wood" className="typeCard">
              <p>Деревянный багет</p>
              <Image
                src={"/type-1.png"}
                className="typeCardImage"
                alt="type-1"
                width={390}
                height={380}
              />
            </Link>
            <Link href="/decor/plastic" className="typeCard">
              <p>Пластиковый багет</p>
              <Image
                src={"/type-2.png"}
                className="typeCardImage"
                alt="type-1"
                width={390}
                height={380}
              />
            </Link>
            <Link href="/decor/aluminum" className="typeCard">
              <p>Алюминиевый багет</p>
              <Image
                className="typeCardImage"
                src={"/type-3.png"}
                alt="type-1"
                width={390}
                height={380}
              />
            </Link>
          </div>
        </div>
        <div className="examples">
          <h3 className="title">Примеры оформленных нами картин в багет</h3>
          <div className="exampleContent">
            <div className="exampleImages">
              <div className="exampleImageGroup">
                <Image
                  className="exampleImage"
                  src={"/decor/image1-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
                <Image
                  className="exampleImage"
                  src={"/decor/image2-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
              </div>
              <Image
                className="exampleImage"
                src={"/decor/image3-min.png"}
                alt="example-1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="exampleImages">
              <Image
                className="exampleImage"
                src={"/decor/image6-min.png"}
                alt="example-1"
                width={1000}
                height={1000}
              />
              <div className="exampleImageGroup">
                <Image
                  className="exampleImage"
                  src={"/decor/image4-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
                <Image
                  className="exampleImage"
                  src={"/decor/image5-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="exampleImages">
              <div className="exampleImageGroup">
                <Image
                  className="exampleImage"
                  src={"/decor/image7-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
                <Image
                  className="exampleImage"
                  src={"/decor/image8-min.png"}
                  alt="example-1"
                  width={500}
                  height={500}
                />
              </div>
              <Image
                className="exampleImage"
                src={"/decor/image9-min.png"}
                alt="example-1"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <p className="text">
            Оформление картин и других предметов интерьера в багет. Благодаря
            такому оформлению интерьер дома приобретает неповторимый стиль и
            законченность. Выбирая определенную раму, хозяин дома сможет
            продемонстрировать свой характер и эстетические вкусы. Мастера с
            художественным образованием компании <span>«ВЕРНИСАЖ»</span>,
            занимающиеся оформлением картин в багет, сделают все, чтобы помочь
            Вам создать уют в собственном доме.
          </p>
          <p className="exampleLastText">
            Звоните и заказывайте по телефону в Санкт-Петербурге +7 (911)
            260-61-46, <br />в Москве +7 (931) 375-21-65
          </p>
        </div>
        <div>
          <h2 className="title">Оформление картин и фото в багет с паспарту</h2>
          <p className="text">
            Оформление картины играет важную роль: оно не только завершает
            произведение, но и гармонично связывает его с интерьером. Правильно
            подобранная рама усиливает общее впечатление от картины, делая её
            органичной частью любого пространства. Стиль оформления зависит от
            сюжета картины и личных предпочтений, а выбор багета определяется
            техникой исполнения, поскольку живопись и графика требуют различного
            подхода.
          </p>
          <p className="text">
            Рама является одним из самых популярных способов оформления картин.
            Для её изготовления используются багеты из дерева, металла или
            пластика. Выбор багета зависит от содержания картины: простые рамы
            хорошо подходят для произведений с плавными линиями, а для картин с
            обилием деталей и завитков уместны фигурные рамы.
          </p>
        </div>
        <div>
          <h2 className="title">Как выбрать цвет рамы?</h2>
          <p className="text">
            Оформление картины играет важную роль: оно не только завершает
            произведение, но и гармонично связывает его с интерьером. Правильно
            подобранная рама усиливает общее впечатление от картины, делая её
            органичной частью любого пространства. Стиль оформления зависит от
            сюжета картины и личных предпочтений, а выбор багета определяется
            техникой исполнения, поскольку живопись и графика требуют различного
            подхода.
          </p>
          <p className="text">
            Рама является одним из самых популярных способов оформления картин.
            Для её изготовления используются багеты из дерева, металла или
            пластика. Выбор багета зависит от содержания картины: простые рамы
            хорошо подходят для произведений с плавными линиями, а для картин с
            обилием деталей и завитков уместны фигурные рамы.
          </p>
        </div>
        <div>
          <h2 className="title">Особенности подбора багета по ширине</h2>
          <p className="text">
            Золотая рама, выполненная в классическом стиле, прекрасно подходит
            для академической живописи. Она не только дополняет картину, но и
            усиливает впечатление от неё, так как сама по себе является
            произведением искусства.
          </p>
          <Image
            className="decorBigImage"
            src={"/big-decor.png"}
            alt="decor"
            width={2000}
            height={1000}
          />
          <p className="text">
            Оформление картин в багет с использованием контрастных рам требует
            осторожного подхода. Обычно для создания интересного визуального
            эффекта используется несколько рам. Это позволяет изображению
            аккуратно сливаться с обрамлением, создавая эффект
            &quot;растекания&quot; в деталях. Такой метод не только подчеркивает
            глубину произведения, но и делает его центральным элементом
            композиции.
          </p>
          <p className="text">
            Плоскостная живопись также требует определенного оформления. Для
            картин небольших размеров следует выбирать широкие рамы, которые
            помогут визуально расширить картину.
          </p>
          <div className="twoImages">
            <Image
              className="twoImage"
              src={"/decor1.png"}
              alt="decor"
              width={500}
              height={500}
            />
            <Image
              className="twoImage"
              src={"/decor2.png"}
              alt="decor"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <Title
            text="Основные преимущества оформления работ в багет:"
            size={36}
          />
          <div className="adv">
            <p className="text">
              <span>Оформление в багет</span> имеет несколько весомых
              достоинств:
            </p>
            <div className={"advContent"}>
              {arr.map((item) => (
                <div className={"advItem"} key={item.id}>
                  <h3 className="itemTitle">{item.id}</h3>
                  <p className={"text"}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text">
            Обратившись к нам, каждый покупатель сможет подобрать для себя
            оптимальные решения по демократичной стоимости, учитывая собственные
            пожелания и индивидуальные предпочтения.
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
