"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import CardContent from "@/components/card/cardContent";
import "./card.css";
import Navbar from "@/components/Navbar";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Head from "next/head";
import { useParams } from "next/navigation";

const PageClient = () => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const { productId } = params;

  // Fetch product data once the productId is available
  useEffect(() => {
    const fetchProductData = async () => {
      if (!productId) return; // Guard clause if productId is undefined

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API + `product/${productId}/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data);
      } catch (err: any) {
        setError("An error occurred while fetching product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  // Set document title dynamically
  useEffect(() => {
    if (productData?.serializer?.name) {
      document.title = `"${productData.serializer.name}" купить в Санкт-Петербурге`;
    } else {
      document.title = "АРТ-ЛАВКА"; // Fallback title
    }
  }, [productData]);

  // Return loading, error or actual product data
  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{productData?.serializer?.name || "АРТ-ЛАВКА"}</title>
        <meta
          name="description"
          content={`Vernissage - ${productData?.serializer?.name} вы можете купить в нашей Арт-Лавке по приятной цене! Оставляйте заявку на сайте`}
        />
      </Head>
      {productData?.serializer && <Banner text={productData.serializer.name} />}
      <Navbar />
      <ResponsiveCatalog />
      <CardContent productId={productId} />
    </>
  );
};

export default PageClient;
