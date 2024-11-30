"use client";
import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import Card from "@/components/details/Card";
import { useRouter } from "next/navigation";
import Arrow from "../../../public/arrowright.png";
import Image from "next/image";

const CategoryContent = ({ categoryId, categoriesName }: any) => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState("all");
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCategoryData = async (url: string) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Failed to fetch category data");
            }
            const data = await res.json();
            setCategoryData(data.results);
            setTotalPages(Math.ceil(data.count / 12));
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    console.log(totalPages);

    // useEffect(() => {}, [categoryId]);
    useEffect(() => {
        // const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}`;
        const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}/?page=${currentPage}&limit=12`;
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
            const url = `${process.env.NEXT_PUBLIC_API}sub_categroy/product/${subcategory}/?page=${currentPage}&limit=12`;
            fetchCategoryData(url);
            // localStorage.removeItem("subcategory");
        }
    }, [categoryId, currentPage]);

    useEffect(() => {
        if (selectedSubcategory === "vse") {
            const url = `${process.env.NEXT_PUBLIC_API}category/product/${categoryId}/?page=${currentPage}&limit=12`;
            fetchCategoryData(url);
        } else if (selectedSubcategory === "all") {
            localStorage.removeItem("subcategory");
        } else if (
            selectedSubcategory !== "all" &&
            selectedSubcategory !== "vse"
        ) {
            const url = `${process.env.NEXT_PUBLIC_API}sub_categroy/product/${selectedSubcategory}/?page=${currentPage}&limit=12`;
            fetchCategoryData(url);
        }
    }, [selectedSubcategory, categoryId, currentPage]);
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

    console.log(currentPage);

    return (
        <>
            <div className={styles.categoryContent}>
                <div className={styles.ancientsFilter}>
                    <p
                        className={`${styles.ancientsFilterItem} ${
                            selectedSubcategory === "vse" ||
                            selectedSubcategory === "all"
                                ? styles.active
                                : ""
                        }`}
                        onClick={() => setSelectedSubcategory("vse")}
                    >
                        Все
                    </p>
                    {categoriesName[+categoryId - 1].sub_categor.length > 0 &&
                        categoriesName[+categoryId - 1].sub_categor.map(
                            (item: any) => (
                                <p
                                    key={item.id}
                                    className={`${styles.ancientsFilterItem} ${
                                        +selectedSubcategory === item.id
                                            ? styles.active
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedSubcategory(item.id)
                                    }
                                >
                                    {item.name}
                                </p>
                            )
                        )}
                </div>
                <div className={styles.cards}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        categoryData.map((item: any) => (
                            <div
                                key={item.id}
                                onClick={() => handleProductClick(item.id)}
                            >
                                <Card data={item} />
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.paginationContainer}>
                    <button
                        onClick={() => setCurrentPage(1)}
                        style={{
                            background: "none",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            backgroundColor: `${
                                currentPage == 1 ? "#E3C05C" : "white"
                            }`,
                            borderRadius: "2px",
                            borderWidth: "none",
                            color: `${currentPage == 1 ? "white" : "black"}`,
                            cursor: "pointer",
                        }}
                    >
                        1
                    </button>
                    <button
                        onClick={() => setCurrentPage(2)}
                        style={{
                            background: "none",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            backgroundColor: `${
                                currentPage == 2 ? "#E3C05C" : "white"
                            }`,
                            borderRadius: "2px",
                            borderWidth: "none",
                            color: `${currentPage == 2 ? "white" : "black"}`,
                            cursor: "pointer",
                        }}
                    >
                        2
                    </button>
                    <button
                        onClick={() => setCurrentPage(3)}
                        style={{
                            background: "none",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            backgroundColor: `${
                                currentPage == 3 ? "#E3C05C" : "white"
                            }`,
                            borderRadius: "2px",
                            borderWidth: "none",
                            color: `${currentPage == 3 ? "white" : "black"}`,
                            cursor: "pointer",
                        }}
                    >
                        3
                    </button>
                    <button
                        onClick={() => setCurrentPage(4)}
                        style={{
                            background: "none",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            backgroundColor: `${
                                currentPage == 4 ? "#E3C05C" : "white"
                            }`,
                            borderRadius: "2px",
                            borderWidth: "none",
                            color: `${currentPage == 4 ? "white" : "black"}`,
                            cursor: "pointer",
                        }}
                    >
                        4
                    </button>
                    <button
                        style={{
                            borderWidth: 0,
                            background: "none",
                            width: "25px",
                            height: "25px",
                        }}
                    >
                        ...
                    </button>
                    {currentPage > 4 && (
                        <button
                            style={{
                                background: "none",
                                border: "none",
                                width: "25px",
                                height: "25px",
                                backgroundColor: `#E3C05C`,
                                borderRadius: "2px",
                                borderWidth: "none",
                                color: `white`,
                                cursor: "pointer",
                            }}
                        >
                            {currentPage}
                        </button>
                    )}
                    <button
                        disabled={currentPage == totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        style={{
                            borderWidth: 0,
                            background: "none",
                            width: "25px",
                            height: "25px",
                            cursor: "pointer",
                        }}
                    >
                        <Image src={Arrow} alt="arrow" width={8} height={15} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CategoryContent;
