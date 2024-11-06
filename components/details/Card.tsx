import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Card = ({ data }: { data: any }) => {
  // const [existingCart, setxistingCart] = useState([]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = existingCart.findIndex((item: any) => item.id === data.id);
    if (itemIndex === -1) {
      toast.success("Товар добавлен в корзину");
      existingCart.push(data);

      localStorage.setItem("cart", JSON.stringify(existingCart));
    } else {
      toast.error("Товар уже добавлен в корзину");
    }
    // Save updated cart to local storage
  };
  return (
    <Link href={`/product/${data?.id}`} className={styles.card}>
      <Image className={styles.cardImage} src={data?.images[0]?.image || ""} alt="cardImage" width={250} height={280} />
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p className={styles.cardCategory}>{data.category.name}</p>
          <h3 className={styles.cardTitle}>{data.name}</h3>
        </div>
        <div className={styles.cardAction}>
          <div className={styles.cardLine}>
            <p className={styles.cardPrice}>{data.price} руб</p>
            <p className={styles.linkButton}>
              Смотреть
              <Image src={"/grey-arrow.svg"} alt="arrow" width={23} height={20} />
            </p>
          </div>
          <button style={{ color: "#000" }} onClick={handleAddToCart} className={styles.addButton}>
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
