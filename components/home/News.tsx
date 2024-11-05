"use client";
import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import Title from "../details/Title";
import Image from "next/image";
import Button from "../details/button";
import { useRouter } from "next/navigation";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "blog");
      const data = await response.json();
      setNews(data.results);
    };
    fetchNews();
  }, []);
  const router = useRouter();
  return (
    <section className={styles.news}>
      <Title text="Новости" size={36} />
      <h3 className={styles.newsSubtitle}>
        Следите за нашими новостями, чтобы быть в курсе всех событий и акций
        арт-лавки <span>&quot;ВЕРНИСАЖ&quot;</span>!
      </h3>
      <div className={styles.newsContent}>
        {news.map(
          (item: {
            id: string;
            title: string;
            content: string;
            image: string;
          }) => (
            <div key={item.id} className={styles.newsItem}>
              <div className={styles.newsItemContent}>
                <h4 className={styles.newsItemTitle}>{item.title}</h4>
                <p className={styles.newsItemText}>
                  {item.content.slice(0, 200)}...
                </p>
                <Button
                  text="Смотреть больше"
                  onClick={() => router.push("/news")}
                />
              </div>
              <div className={styles.newsItemImage}>
                <Image
                  className={styles.newsItemImagee}
                  src={item.image}
                  alt="news-image"
                  width={600}
                  height={320}
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default News;
