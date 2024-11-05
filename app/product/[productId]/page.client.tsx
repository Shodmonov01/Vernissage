"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import CardContent from "@/components/card/cardContent";
import "./card.css";
import Navbar from "@/components/Navbar";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Head from "next/head";

const PageClient = ({ productId }: { productId: string }) => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API + `product/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  useEffect(() => {
    if (productData?.serializer?.name) {
      document.title = `"${productData.serializer.name}" купить в Санкт-Петербурге`;
    }
  }, [productData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
