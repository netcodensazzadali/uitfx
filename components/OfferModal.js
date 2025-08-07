import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./OfferModal.module.scss";

const OfferModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal on first load
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.imageWrapper}>
          <Image
            src="/img/offer-modal.png"
            alt="Special Offer"
            width={1200}
            height={775}
            className={styles.offerImage}
            
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
