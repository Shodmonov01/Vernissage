"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./cardContent.css";
import Similars from "./Similars";
import { toast } from "react-toastify";
import Modal from "@/components/Modal"; // Import the modal component

const CardContent = ({ productId }: any) => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similars, setSimilars] = useState([]);
  const [amount, setAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}product/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data.serializer);
        setSimilars(data.product);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart?.findIndex(
      (item: any) => item.id === productData.id
    );

    if (productIndex > -1) {
      toast.error("Товар добавлен в корзину");
    } else {
      cart.push(productData);
      toast.success("Товар добавлен в корзину");
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const openModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  // function getYouTubeVideoId(url: string | null | undefined): string | null {
  //   if (typeof url !== "string" || !url) {
  //     return null;
  //   }

  //   let videoId: string | null = null;

  //   if (url.includes("youtu.be")) {
  //     // Handle shortened youtu.be links
  //     videoId = url.split("/").pop()?.split("?")[0] || null;
  //   } else if (url.includes("youtube.com")) {
  //     const urlObj = new URL(url);
  //     const path = urlObj.pathname;

  //     if (urlObj.searchParams.has("v")) {
  //       // Handle standard youtube.com links
  //       videoId = urlObj.searchParams.get("v");
  //     } else if (path.includes("/live/")) {
  //       // Handle youtube.com/live/ links
  //       videoId = path.split("/live/")[1].split("?")[0];
  //     } else if (path.includes("/shorts/")) {
  //       // Handle youtube.com/shorts/ links
  //       videoId = path.split("/shorts/")[1].split("?")[0];
  //     }
  //   }

  //   return videoId;
  // }
  return (
    <main className="mainContents">
      <button className="backButton" onClick={() => window.history.back()}>
        <Image src="/arrow.svg" alt="arrow" width={20} height={20} /> Назад
      </button>
      {productData && (
        <>
          <div className="cardContent">
            <Image
              className="mainImage"
              src={productData.images[0].image || "/example-product2.png"}
              alt="card"
              width={610}
              height={712}
              onClick={() =>
                openModal(
                  productData.images[0].image || "/example-product2.png"
                )
              } // Add onClick to open modal
            />
            <div className="cardInfo">
              <div className="cardTop">
                <p>
                  <span>Контакты:</span>
                  {productData.contact}
                </p>
                <p>
                  <span>Город:</span>
                  {productData.city}
                </p>
                <p>
                  <span>Издатель:</span>
                  {productData.publisher}
                </p>
                <p>
                  <span>Оригинальное название:</span>
                  {productData.orginal_title}
                </p>
                <p>
                  <span>Язык:</span>
                  {productData.language}
                </p>
                <div className="btn-group">
                  <h3 className="price">{productData.price} руб.</h3>
                  <button className="btn to-cart" onClick={handleAddToCart}>
                    В корзину
                  </button>
                </div>
              </div>

              <div className="more-images">
  
                {productData.images.map((image: any, index: any) => (
                  <Image
                    key={index}
                    className="moreImages"
                    src={image.image}
                    alt="card"
                    width={190}
                    height={190}
                    onClick={() => openModal(image.image)} // Add onClick to open modal
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: productData.description }} />
          </div>
        </>
      )}
      {similars.length > 0 && <Similars cards={similars} />}
      <Modal
        isOpen={isModalOpen}
        imageSrc={modalImageSrc}
        onClose={closeModal}
      />
    </main>
  );
};

export default CardContent;


