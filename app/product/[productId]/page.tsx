// // import React from "react";
// // import "./card.css";
// // import ContactForm from "@/components/ContactForm";
// // import PageClient from "./page.client";

// // export async function generateStaticParams() {
// //   try {
// //     const res = await fetch(process.env.NEXT_PUBLIC_API + "product/");
// //     if (!res.ok) {
// //       throw new Error("Failed to fetch products");
// //     }

// //     const data = await res.json();

// //     const products = data.results;
// //     return products.map((item: any) => ({
// //       productId: item.id.toString(),
// //     }));
// //   } catch (error) {
// //     console.error("Error fetching product ids:", error);
// //     return [];
// //   }
// // }

// // const Page = () => {
// //   return (
// //     <div className="card">
// //       <PageClient />
// //       <ContactForm />
// //     </div>
// //   );
// // };

// // export default Page;

// // app/product/[productId]/page.tsx

// import React from "react";
// import ContactForm from "@/components/ContactForm";
// import PageClient from "./page.client";

// // Типизация для params
// interface ProductPageParams {
//   productId: string;
// }

// // Тип для данных о продукте
// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   // Добавьте другие свойства по мере необходимости
// }

// // Страница товара
// export default async function ProductPage({ params }: { params: ProductPageParams }) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API}product/${params.productId}`, {
//     next: { revalidate: 60 }, // Обновляет кеш продукта каждые 60 секунд
//   });
//   const product: Product = await res.json();

//   return (
//     <div className="card">
//       {/* @ts-ignore */}
//       <PageClient product={product} />
//       <ContactForm />
//     </div>
//   );
// }


// app/product/[productId]/page.tsx

import React from "react";
import ContactForm from "@/components/ContactForm";
import PageClient from "./page.client";

// Типизация для params
interface ProductPageParams {
  productId: string;
}

// Тип для данных о продукте
interface Product {
  id: string;
  name: string;
  price: number;
  // Добавьте другие свойства по мере необходимости
}

// Функция для генерации статических параметров
export async function generateStaticParams() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API + "product/");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data.results.map((item: any) => ({
      productId: item.id.toString(),  // Возвращаем объект с параметром productId
    }));
  } catch (error) {
    console.error("Error fetching product ids:", error);
    return [];  // Возвращаем пустой массив в случае ошибки
  }
}

// Страница товара
export default async function ProductPage({ params }: { params: ProductPageParams }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}product/${params.productId}`, {
    next: { revalidate: 60 }, // Обновляет кеш продукта каждые 60 секунд
  });
  const product: Product = await res.json();

  return (
    <div className="card">
      {/* @ts-ignore */}
      <PageClient product={product} />
      <ContactForm />
    </div>
  );
}
