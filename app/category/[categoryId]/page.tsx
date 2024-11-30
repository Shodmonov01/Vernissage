// app/category/[id]/page.js
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./category.module.css";
import CategoryContent from "./CategoryContent";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";

const CategoryPage = async ({ params }: any) => {
    const { categoryId } = params;
    try {
        const categoriesRes = await fetch(
            process.env.NEXT_PUBLIC_API + "category"
        );
        if (!categoriesRes.ok) {
            throw new Error("Failed to fetch categories");
        }
        const categoriesName = await categoriesRes.json();
        return (
            <div className={styles.category}>
                <Banner text={categoriesName[+categoryId - 1].name} />
                <Navbar />
                <ResponsiveCatalog />
                <CategoryContent
                    categoryId={categoryId}
                    categoriesName={categoriesName}
                />
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error loading category data:</div>;
    }
};

export default CategoryPage;
