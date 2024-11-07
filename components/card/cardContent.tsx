"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./cardContent.css";
import Similars from "./Similars";
import { toast } from "react-toastify";
import Modal from "@/components/Modal"; // Import the modal component
import { IProduct } from "@/types/data.models";

const CardContent = ({ productId }: any) => {
  const [productData, setProductData] = useState<IProduct | null>(null);
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
      (item: any) => item.id === productData?.id
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

  function getRutubeVideoId(url: string) {
    const match = url.match(/video\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  }
  console.log(productData);

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
                <div className="price-cart">
                  <h3 className="price">{productData.price} руб.</h3>
                  <button className="btn to-cart" onClick={handleAddToCart}>
                    В корзину
                  </button>
                </div>
                {productData?.year && (
                  <p className="title-text">
                    <span>Год: </span>
                    {productData.year}
                  </p>
                )}
                {productData?.engraver && (
                  <p className="title-text">
                    <span>Гравер: </span>
                    {productData.engraver}
                  </p>
                )}
                {productData?.technique && (
                  <p className="title-text">
                    <span>Техника: </span>
                    {productData.technique}
                  </p>
                )}
                {productData?.county && (
                  <p className="title-text">
                    <span>Страна: </span>
                    {productData.county}
                  </p>
                )}
                {productData?.city && (
                  <p className="title-text">
                    <span>Город: </span>
                    {productData.city}
                  </p>
                )}
                {productData?.publisher && (
                  <p className="title-text">
                    <span>Выполнено для: </span>
                    {productData.publisher}
                  </p>
                )}
                {productData?.size && (
                  <p className="title-text">
                    <span>Размер (см): </span>
                    {productData.size}
                  </p>
                )}
                {productData?.image_size && (
                  <p className="title-text">
                    <span>Размер изображения: </span>
                    {productData.image_size}
                  </p>
                )}
                {productData?.orginal_title && (
                  <p className="title-text">
                    <span>Оригинальное название: </span>
                    <div>{productData.orginal_title}</div>
                  </p>
                )}
                {productData?.language && (
                  <p className="title-text">
                    <span>Язык: </span>
                    {productData.language}
                  </p>
                )}
              </div>

              <div className="more-images">
                {/* {productData.video && (
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    width="560"
                    height="315"
                    src={`https://youtube.com/embed/${getYouTubeVideoId(
                      productData.video
                    )}?si=-G5TBQuFmu63onhd`}
                    // title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )} */}

                {productData.video && (
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    width="560"
                    height="315"
                    src={`https://rutube.ru/play/embed/${getRutubeVideoId(
                      productData.video
                    )}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}

                {/* https://rutube.ru/video/cb48515b2d7f6fe38c72b72bd4e6d3c0/?r=plemwd */}
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
            {productData?.description && (
              <p
                className="cardDesc"
                dangerouslySetInnerHTML={{
                  __html: productData.description,
                }}
              />
            )}
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
