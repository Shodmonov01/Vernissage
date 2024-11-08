// import React from "react";
// import "./card.css";
// import ContactForm from "@/components/ContactForm";
// import PageClient from "./page.client";

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(process.env.NEXT_PUBLIC_API + "product/");
//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data = await res.json();

//     const products = data.results;
//     return products.map((item: any) => ({
//       productId: item.id.toString(),
//     }));
//   } catch (error) {
//     console.error("Error fetching product ids:", error);
//     return [];
//   }
// }

// const Page = () => {
//   return (
//     <div className="card">
//       <PageClient />
//       <ContactForm />
//     </div>
//   );
// };

// export default Page;


// pages/product/[productId].tsx

import React from "react";
import ContactForm from "@/components/ContactForm";
import PageClient from "./page.client";

export async function getStaticProps({ params }: { params: { productId: string } }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}product/${params.productId}/`);
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    const productData = await res.json();

    return {
      props: { productData },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}


export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}product/`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.results;

    return products.map((item) => ({
      productId: item.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching product ids:", error);
    return [];
  }
}

const Page = ({ productData }) => {
  return (
    <div className="card">
      <PageClient productData={productData} />
      <ContactForm />
    </div>
  );
};

export default Page;
