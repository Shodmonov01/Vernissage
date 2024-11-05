import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import styles from "./about.module.css";
import Image from "next/image";
import Title from "@/components/details/Title";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import { Metadata } from "next";
// HEAD for SEO
export const metadata: Metadata = {
  title: "О нашей Арт-Лавке!",
  description:
    "Vernissage - Вся актуальная информация о нашей Арт-Лавке! Продажа антикварных изделий в СПБ",
};

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
];
const page = () => {
  return (
    <div className={styles.about}>
      <Banner text="Немного о нашей компании" />
      <Navbar />
      <ResponsiveCatalog />

      <div className={styles.aboutContent}>
        <p>
          Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span>! <br />{" "}
          Мы – это место, где оживает искусство. Здесь собираются все те, кто
          любит старинные гравюры, украшает ими свой дом и дарит их своим
          друзьям. Доступность и изысканность - главные характеристики подлинных
          произведений искусства, которые представлены здесь.
        </p>
        <p>
          {" "}
          <span>ЭТО КРАСИВО, ЭТО ДОСТУПНО, ЭТО ВЕЧНО.</span>
        </p>
        <p>
          Наша миссия – объединить художников, мастеров и ценителей прекрасного
          в одном пространстве, где каждый сможет найти что-то особенное для
          себя.
        </p>
        <p>
          В нашем салоне представлены антикварные гравюры, редкие издания,
          современные работы петербургских художников, изделия из фарфора и
          керамики.
        </p>
        <h3>
          Приходите к нам и погрузитесь в атмосферу творчества и вдохновения.
        </h3>
        <h3>
          <span>&quot;ВЕРНИСАЖ&quot;</span> – это место, где искусство
          становится частью вашей жизни!
        </h3>
        <div className={styles.aboutImages}>
          <div className={styles.aboutImages1}>
            <Image
              className={styles.aboutImage1}
              src="/about/about1.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage2}
              src="/about/about3.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage3}
              src="/about/about3.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.aboutImages2}>
            <Image
              className={styles.aboutImage4}
              src="/about/about4.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage5}
              src="/about/about5.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage6}
              src="/about/about6.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <div className={styles.aboutAdvantages}>
          <Title text="Преимущества" size={36} />
          <p className={styles.aboutSubtitle}>
            <span>&quot;ВЕРНИСАЖ&quot;</span> — это уникальное место, где каждый
            найдет что-то особенное для себя. Вот основные преимущества нашей
            арт-лавки:
          </p>
          <div className={styles.advantagesContent}>
            {arr.map((item) => (
              <div className={styles.advantagesItem} key={item.id}>
                <Image
                  src={item.image}
                  alt="advantages"
                  width={50}
                  height={50}
                />
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
