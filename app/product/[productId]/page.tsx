import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import PageClient from "./page.client";



const Page = () => {
  return (
    <div className="card">
      <PageClient />
      <ContactForm />
    </div>
  );
};

export default Page;
