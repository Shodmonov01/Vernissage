"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Catalog from "./details/Catalog";
import Arrow from "../public/vector.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [catalog, setCatalog] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const uslugRef = useRef<HTMLDivElement>(null);
  const handleDocumentClick = (event: MouseEvent) => {
    // Close catalog if clicked outside
    if (catalogRef.current && !catalogRef.current?.contains(event.target as Node) && catalog) {
      setCatalog(false);
    }
    // Close uslugi if clicked outside
    if (uslugRef.current && !uslugRef.current?.contains(event.target as Node) && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog, open]);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}product?q=${query}`);
      const results = await response.json();
      setSearchResults(results.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Effect to fetch search results when search query changes
  useEffect(() => {
    if (searchQuery.length > 0) {
      const debounceTimeout = setTimeout(() => {
        fetchSearchResults(searchQuery);
      }, 300); // Debounce time in ms

      return () => clearTimeout(debounceTimeout);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY); // Log the current scroll position
      if (window.scrollY > 275) {
        setIsFixed(true); // Make navbar fixed after 200px scroll
      } else {
        setIsFixed(false); // Revert to relative before 200px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div style={{ display: isFixed ? "block" : "none", height: "100px" }}></div>
      <div
        // style={{ position: isFixed ? "fixed" : "relative", top: "100px" }}
        className={`${styles.navbar} ${isFixed ? styles.navbarFixed : ""}`}
      >
        <div className={styles.navContent}>
          <div className={styles.navLinks}>
            <Link className={styles.navLink} href="/about">
              О нас
            </Link>
            <div ref={catalogRef}>
              <div
                ref={catalogRef}
                onClick={() => {
                  setOpen(false);
                  setCatalog(!catalog);
                }}
                className={styles.navLink}
              >
                Каталог{" "}
                <Image
                  className={`${styles.navArrow} ${!catalog ? "" : styles.rotate}`}
                  src={Arrow}
                  alt="arrow"
                  width={13}
                  height={7}
                />
              </div>
              <div
                style={{
                  height: "500px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                }}
                className={`${styles.catalog} ${catalog ? "" : styles.catalogHidden}`}
              >
                <Catalog title={true} />
              </div>
            </div>

            <div className={styles.navButton} ref={uslugRef}>
              <p
                className={styles.navLink}
                onClick={() => {
                  setCatalog(false);
                  setOpen(!open);
                }}
              >
                Услуги{" "}
                <Image
                  className={`${styles.navArrow} ${!open ? "" : styles.rotate}`}
                  src={Arrow}
                  alt="arrow"
                  width={13}
                  height={7}
                />
              </p>
              {open && (
                <div className={styles.navSubLinks}>
                  <Link className={styles.navSubLink} href="/decor">
                    Оформление в багет
                  </Link>
                  <Link className={styles.navSubLink} href="/primerka">
                    Примерить в интерьере
                  </Link>
                  <Link className={styles.navSubLink} href="/payment">
                    Оплата
                  </Link>
                  <Link className={styles.navSubLink} href="/delivery">
                    Доставка
                  </Link>
                  <Link className={styles.navSubLink} href="/upakovka">
                    Упаковка
                  </Link>
                </div>
              )}
            </div>
            <Link className={styles.navLink} href="/contacts">
              Контакты
            </Link>
          </div>
          <div className={styles.searchBox}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Поиск по каталогу"
              value={searchQuery}
              onChange={handleSearchInput}
            />
            <button className={styles.searchButton}>
              <Image className={styles.searchIcon} src="/search-icon.svg" alt="search-icon" width={22} height={22} />
            </button>
          </div>
        </div>
        {searchQuery && (
          <div className={styles.searchResults}>
            {searchResults.length > 0 ? (
              searchResults.map((result: any) => (
                <Link href={`/product/${result.id}`} key={result.id} className={styles.searchResultItem}>
                  <Image
                    width={100}
                    height={100}
                    src={result.images[0].image}
                    alt={result.name}
                    className={styles.searchResultImage}
                  />
                  <p>{result.name}</p>
                </Link>
              ))
            ) : (
              <div className={styles.searchResultItem}>No results found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
