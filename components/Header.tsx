"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "./details/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + "category");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        return err.message;
      }
    }
    fetchData();
  }, []);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}product?q=${query}`
      );
      const results = await response.json();
      setSearchResults(results.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
    const checkSavedElons = () => {
      const products = JSON.parse(localStorage.getItem("cart") || "[]");
      // console.log(products);
      setNumber(products.length);
    };
    checkSavedElons();
    const intervalId = setInterval(checkSavedElons, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (searchQuery.length > 0) {
      const debounceTimeout = setTimeout(() => {
        fetchSearchResults(searchQuery);
      }, 300);

      return () => clearTimeout(debounceTimeout);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  const handleClick = () => {
    // First, navigate to #contact
    router.push("#contact");

    // After navigation, adjust the scroll position by 100px
    if (open) {
      setOpen(false);
      setTimeout(() => {
        const yOffset = -72; // Adjust for your header height
        const y = window.scrollY + yOffset;
        window.scrollTo({ top: y });
      }, 400);
    } else {
      setTimeout(() => {
        const yOffset = -170;
        const y = window.scrollY + yOffset;
        window.scrollTo({ top: y });
      }, 400);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={styles.navbar}
      style={{ zIndex: 100, backgroundColor: isFixed ? "white" : "" }}
    >
      <div className={styles.navLeft}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск по каталогу"
            value={searchQuery}
            onChange={handleSearchInput}
          />
          <button className={styles.searchButton}>
            <Image
              className={styles.searchIcon}
              src="/search-icon.svg"
              alt="search-icon"
              width={19}
              height={19}
            />
          </button>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              className={styles.navLeftItemImagee}
              src="/location-icon.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            Санкт-Петербург, ТЦ &quot;ПАССАЖ&quot;, Невский проспект, дом 48, 1
            этаж, 37 секция.
            {/* <br /> Санкт-Петербург, ТЦ &quot;МОСКВА&quot;,
            Площадь Александра Невского, дом 2, 1 этаж, 105 секция. */}
          </p>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              src="/phone-icon.svg"
              className={styles.navLeftItemImagee}
              alt="phone"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            <span>Звоните с 9:00 до 22:00</span>
            +7 (931) 375-21-65
            {/* <br /> +8 (911) 260-61-46 */}
          </p>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              className={styles.navLeftItemImagee}
              src="/location-icon.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            Москва, Александра Невского. ТЦ &quot;МОСКВА&quot;, площадь
            Александра Невского, дом 2, 1 этаж, 105 секция
            {/* <br /> Санкт-Петербург, ТЦ &quot;МОСКВА&quot;,
            Площадь Александра Невского, дом 2, 1 этаж, 105 секция. */}
          </p>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              src="/phone-icon.svg"
              className={styles.navLeftItemImagee}
              alt="phone"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            <span>Звоните с 9:00 до 22:00</span>
            +7 (911) 260-61-46
            {/* <br /> +8 (911) 260-61-46 */}
          </p>
        </div>
      </div>
      <div className={styles.navRight}>
        <div
          onClick={() => {
            handleClick();
          }}
          className={styles.navRightItem}
        >
          <Button text="Заказать звонок" />
        </div>
        <div className={styles.cartIcon}>
          <Image
            onClick={() => {
              router.push("/cart");
            }}
            className={styles.cart}
            src="/cart-icon.svg"
            alt="cart"
            width={44}
            height={44}
          />
          <span className={styles.indicator}>{number}</span>
        </div>
        <div onClick={() => setOpen(!open)} className={styles.burger}>
          <Image src="/burger.svg" alt="burger" width={48} height={48} />
        </div>
        <div
          style={{ paddingBottom: "20px" }}
          className={`${styles.open} ${open ? styles.visible : styles.close}`}
        >
          <div className={styles.nav}>
            <Link
              className={styles.navLink}
              href="/about"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              О нас
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className={styles.navLink}
              href="/contacts"
            >
              Контакты
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className={styles.navLink}
              href="/decor"
            >
              Оформление в багет
            </Link>
            <div className={styles.navButton}>
              <p onClick={() => setOpen2(!open2)}>
                Услуги{" "}
                <Image src="/vector.svg" alt="arrow" width={13} height={7} />
              </p>

              <div
                style={{ display: open2 ? "flex" : "none" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className={styles.navSubLinks}
              >
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
            </div>
            <div className={styles.navButton}>
              <p onClick={() => setOpen3(!open3)} style={{ marginTop: "20px" }}>
                Каталог{" "}
                <Image src="/vector.svg" alt="arrow" width={13} height={7} />
              </p>

              <div
                style={{
                  display: open3 ? "flex" : "none",
                  paddingBottom: "30px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className={styles.navSubLinks}
              >
                {data.map((category: any) => (
                  <div key={category.id}>
                    <Link
                      className={styles.catalogLink}
                      href={`/category/${category.id}`}
                    >
                      <h3 className={styles.catalogName}>{category.name}</h3>
                    </Link>
                    {category.sub_categor.length > 0
                      ? category.sub_categor.map((subCategory: any) => (
                          <p
                            className={styles.catalogItem}
                            key={subCategory.id}
                          >
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  "subcategory",
                                  subCategory.id
                                );
                                // router.refresh();
                              }}
                              className={styles.catalogLink}
                              href={`/category/${category.id}`}
                            >
                              - {subCategory.name}
                            </Link>
                          </p>
                        ))
                      : ""}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.navLeft} style={{ marginTop: "20px" }}>
              <div className={styles.navLeftItem}>
                <div className={styles.navLeftItemImage}>
                  <Image
                    className={styles.navLeftItemImagee}
                    src="/location-icon.svg"
                    alt="logo"
                    width={24}
                    height={24}
                  />
                </div>
                <p className={styles.navLeftItemText}>
                  Санкт-Петербург, ТЦ &quot;ПАССАЖ&quot;, Невский проспект, дом
                  48, 1 этаж, 37 секция.
                </p>
              </div>
              <div className={styles.navLeftItem}>
                <div className={styles.navLeftItemImage}>
                  <Image
                    src="/phone-icon.svg"
                    className={styles.navLeftItemImagee}
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </div>
                <p className={styles.navLeftItemText}>
                  <span>Звоните с 9:00 до 22:00</span>
                  +7 (931) 375-21-65
                </p>
              </div>
              <div className={styles.navLeftItem}>
                <div className={styles.navLeftItemImage}>
                  <Image
                    className={styles.navLeftItemImagee}
                    src="/location-icon.svg"
                    alt="logo"
                    width={24}
                    height={24}
                  />
                </div>
                <p className={styles.navLeftItemText}>
                  Москва, Александра Невского. ТЦ &quot;МОСКВА&quot;, площадь
                  Александра Невского, дом 2, 1 этаж, 105 секция
                </p>
              </div>
              <div className={styles.navLeftItem}>
                <div className={styles.navLeftItemImage}>
                  <Image
                    src="/phone-icon.svg"
                    className={styles.navLeftItemImagee}
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </div>
                <p className={styles.navLeftItemText}>
                  <span>Звоните с 9:00 до 22:00</span>
                  +7 (911) 260-61-46
                </p>
              </div>
            </div>
            {/* <p className={styles.footerContentText}>
              Санкт-Петербург, ТД &quot;ПАССАЖ&quot;, Невский проспект, дом 48,
              1 этаж, 37 секция. с 10:00 до 22:00 <br /> <br /> Санкт-Петербург,
              ТЦ &quot;МОСКВА&quot;, Площадь Александра Невского, дом 2, 1 этаж,
              105 секция. с 10:00 до 21:00
            </p> */}
            <div
              onClick={() => {
                handleClick();
              }}
              className={styles.callBtn}
            >
              <Button text="Заказать звонок" />
            </div>
          </div>
          <Image
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            src={"/close.svg"}
            alt="close"
            width={30}
            height={30}
            className={styles.closeIcon}
          />
        </div>
      </div>
      {searchQuery && (
        <div className={styles.searchResults}>
          {searchResults.length > 0 ? (
            searchResults.map((result: any) => (
              <Link
                href={`/product/${result.id}`}
                key={result.id}
                className={styles.searchResultItem}
              >
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
    </nav>
  );
};

export default Header;
