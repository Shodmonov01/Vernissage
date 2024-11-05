// components/Modal.tsx
import React from "react";
import Image from "next/image";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageSrc}
          alt="Full Screen Image"
          layout="fill"
          objectFit="contain"
        />
        <button className={styles.closeButton} onClick={onClose}>
          <Image
            src="/close.svg"
            alt="close"
            width={33}
            height={33}
            style={{ backgroundColor: "white" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
