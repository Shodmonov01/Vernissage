"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FixedContacts() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  return (
    <div className="fixedContact">
      <div className="fixedIcon">
        <Link
          className="fixIcon"
          href="https://t.me/+79112606146"
          target="_blank"
          style={{ top: visible ? "-75%" : "0" }}
        >
          <Image
            className="fixIconImage"
            src="/fixed-tg.svg"
            alt="decor"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="fixIcon"
          href="https://wa.me/+79112606146"
          target="_blank"
          style={{ top: visible ? "-150%" : "0" }}
        >
          <Image
            className="fixIconImage"
            src="/fixed-whatsapp.svg"
            alt="decor"
            width={300}
            height={300}
          />
        </Link>

        <Image
          className="mainIcon"
          src="/fixed-close.svg"
          alt="decor"
          width={300}
          height={300}
          style={{ transform: visible ? "rotate(0deg)" : "rotate(45deg)" }}
          onClick={() => setVisible(!visible)}
        />
      </div>
    </div>
  );
}
