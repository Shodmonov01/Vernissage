import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import PageClient from "./page.client";

export async function generateStaticParams() {
  try {
    // Make sure your environment variable is properly set
    if (!process.env.NEXT_PUBLIC_API) {
      throw new Error("API URL not configured");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}product`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const data = await res.json();
    if (!data?.results?.length) {
      throw new Error("No products returned from API");
    }
    console.log("Products fetched:", data.results);
    const productIds = data.results.map((item: any) => ({
      productId: item.id.toString(),
    }));
    const requiredIds = ["38"]; // Add any other required IDs
    const existingIds = productIds.map((p: any) => p.productId);

    requiredIds.forEach((id) => {
      if (!existingIds.includes(id)) {
        productIds.push({ productId: id });
      }
    });

    return productIds;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);

    return [{ productId: "38" }];
  }
}

const Page = () => {
  return (
    <div className="card">
      <PageClient />
      <ContactForm />
    </div>
  );
};

export default Page;
