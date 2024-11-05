"use client";
import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import Card from "@/components/details/Card";
import { useRouter } from "next/navigation";

const CategoryContent = ({ categoryId, categoriesName }: any) => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const router = useRouter();

  const fetchCategoryData = async (url: string) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await res.json();
      setCategoryData(data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // useEffect(() => {}, [categoryId]);
  useEffect(() => {
    // const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}`;
    const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}`;
    fetchCategoryData(url);
    // fetchCategoryData(url);

    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      const { x, y } = JSON.parse(scrollPosition);

      window.scrollTo(x, y);
    }
    const subcategory = localStorage.getItem("subcategory");
    if (subcategory) {
      setSelectedSubcategory(subcategory);
      const url = `${process.env.NEXT_PUBLIC_API}sub_categroy/product/${subcategory}`;
      fetchCategoryData(url);
      // localStorage.removeItem("subcategory");
    }
  }, [categoryId]);

  useEffect(() => {
    if (selectedSubcategory === "vse") {
      // console.log("nima gap");

      const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}`;
      fetchCategoryData(url);
    } else if (selectedSubcategory === "all") {
      localStorage.removeItem("subcategory");
    } else if (selectedSubcategory !== "all" && selectedSubcategory !== "vse") {
      const url = `${process.env.NEXT_PUBLIC_API}sub_categroy/product/${selectedSubcategory}`;
      fetchCategoryData(url);
    }
  }, [selectedSubcategory, categoryId]);
  const handleProductClick = (productId: number) => {
    // Save scroll position before navigating
    sessionStorage.setItem(
      "scrollPosition",
      JSON.stringify({ x: window.scrollX, y: window.scrollY })
    );
    router.push(`/product/${productId}`);
  };
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={styles.categoryContent}>
        <div className={styles.ancientsFilter}>
          <p
            className={`${styles.ancientsFilterItem} ${
              selectedSubcategory === "vse" || selectedSubcategory === "all"
                ? styles.active
                : ""
            }`}
            onClick={() => setSelectedSubcategory("vse")}
          >
            Все
          </p>
          {categoriesName[+categoryId - 1].sub_categor.length > 0 &&
            categoriesName[+categoryId - 1].sub_categor.map((item: any) => (
              <p
                key={item.id}
                className={`${styles.ancientsFilterItem} ${
                  +selectedSubcategory === item.id ? styles.active : ""
                }`}
                onClick={() => setSelectedSubcategory(item.id)}
              >
                {item.name}
              </p>
            ))}
        </div>
        <div className={styles.cards}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            categoryData.map((item: any) => (
              <div key={item.id} onClick={() => handleProductClick(item.id)}>
                <Card data={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
