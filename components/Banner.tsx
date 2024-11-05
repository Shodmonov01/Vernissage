"use client";
import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";
import { useRouter } from "next/navigation";

const Banner = ({ text }: { text: string }) => {
  const router = useRouter();
  return (
    <div
      style={{ cursor: "pointer" }}
      className={styles.banner}
      onClick={() => router.push("/")}
    >
      <Image
        className={styles.bannerImage}
        src={"/main-logo.png"}
        alt="bannerImage"
        width={440}
        height={45}
      />
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default Banner;
