"use client";
import Image from "next/image";
import React from "react";
import styles from "./rescatalog.module.css";
import Catalog from "../details/Catalog";
const ResponsiveCatalog = () => {
  const [catalog, setCatalog] = React.useState(false);
  return (
    <div className={styles.resCatalog}>
      <button
        className={styles.catalogButton}
        onClick={() => setCatalog(!catalog)}
      >
        Каталог{" "}
        <Image
          className={styles.catalogIcon}
          src={"/catalog_icon.svg"}
          alt="arrow"
          width={33}
          height={33}
        />
      </button>

      {catalog && (
        <div className={styles.catalogCon}>
          <Catalog />
          <Image
            onClick={() => setCatalog(false)}
            src="/close.svg"
            alt="arrow"
            width={33}
            height={33}
          />
        </div>
      )}
    </div>
  );
};

export default ResponsiveCatalog;
