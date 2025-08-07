import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div
        className={`back-to-top ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp className="icon" color="white" />
      </div>
      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background-color: #007bff; /* Blue background */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          z-index: 1000;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .icon {
          font-size: 20px;
          transition: transform 0.3s ease-in-out;
        }

        .icon.animate {
          transform: rotate(360deg); /* Example animation */
        }
      `}</style>
    </>
  );
};

export default BackToTopButton;
