"use client";
import React, { useState } from "react";
import styles from "./contactForm.module.css";
import Image from "next/image";
import Button from "./details/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}faadback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Заявка успешно отправлена!");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setErrorMessage("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.contactTitle}>Обратная связь</h1>
      <Image
        className={styles.contactImage}
        src="/contact-image.png"
        alt="contactImage"
        width={600}
        height={500}
      />
      <div className={styles.contactForm}>
        <h1>Обратная связь</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className={styles.contactInput}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Телефон"
            className={styles.contactInput}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.contactInput}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p className={styles.contactText}>
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных
          </p>
          <Button text={isSubmitting ? "Отправка..." : "Оставить заявку"} />
        </form>
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
