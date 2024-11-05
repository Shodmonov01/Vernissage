"use client";
import React, { useEffect, useState } from "react";
import styles from "./catalog.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Catalog({ title }: { title?: boolean }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [opensub, setOpensub] = useState([false]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + "category");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
        const arr = [];
        for (let i = 0; i < result.length; i++) {
          if (result[i].sub_categor.length > 0) {
            arr.push(true);
          } else {
            arr.push(false);
          }
        }
        setOpensub(arr);
        // console.log(opensub);
        // console.log(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.catalog}>
      {!title ? <h2 className={styles.catalogTitle}>Каталог</h2> : ""}
      <div className={styles.catalogItems}>
        {data.map((category: any, index: number) => (
          <div key={category.id}>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className={styles.catalogLink}
            >
              <h3
                onClick={() => router.push(`/category/${category.id}`)}
                className={styles.catalogName}
              >
                {category.name}
              </h3>{" "}
              {category.sub_categor.length > 0 ? (
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: "32px",
                    padding: "",
                    lineHeight: "0.7",
                    color: "grey",
                  }}
                  onClick={() => {
                    setOpensub((prev) => {
                      const newArr = [...prev];
                      newArr[index] = !newArr[index];
                      return newArr;
                    });
                  }}
                >
                  ▾
                </p>
              ) : (
                ""
              )}
            </div>
            <div style={{ display: opensub[index] ? "" : "none" }}>
              {category.sub_categor.length > 0
                ? category.sub_categor.map((subCategory: any) => (
                    <p className={styles.catalogItem} key={subCategory.id}>
                      <Link
                        onClick={() => {
                          localStorage.setItem("subcategory", subCategory.id);
                        }}
                        className={styles.catalogLink}
                        href={`/category/${category.id}`}
                      >
                        - {subCategory.name}
                      </Link>
                    </p>
                  ))
                : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
