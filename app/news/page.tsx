"use client";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
const Page = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "blog");
      const data = await response.json();
      setNews(data.results);
    };
    fetchNews();
  }, []);
  return (
    <div className={styles.news}>
      <Banner text="НОВОСТИ" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.newsMain}>
        {news.map(
          (item: {
            id: string;
            title: string;
            content: string;
            image: string;
          }) => (
            <div key={item.id} className={styles.newsItem}>
              <Image
                className={styles.newsItemImage}
                src={item.image}
                alt="decor"
                width={500}
                height={335}
              />
              <div className={styles.newsItemContent}>
                <h2 className={styles.newsItemTitle}>{item.title}</h2>
                <p className={styles.newsItemText}>{item.content}</p>
              </div>
            </div>
          )
        )}
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
