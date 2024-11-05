"use client";
import React, { useEffect, useState } from "react";
import Title from "../details/Title";
import styles from "./newitems.module.css";
import Card from "../details/Card";

const NewItems = () => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(process.env.NEXT_PUBLIC_API + "product/");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const newData = await res.json();
        setData(newData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.newItems}>
      <Title text="Новинки" size={36} />
      <div className={styles.newItemsContent}>
        {loading && <p>Loading...</p>}
        {data.results.slice(0, 12).map((item: any) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewItems;
