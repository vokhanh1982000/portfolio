"use client";
import { UpCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    showScrollTopButton && (
      <div className="fixed bottom-3 right-3 text-white">
        <UpCircleOutlined
          onClick={scrollTop}
          className="cursor-pointer text-[40px]"
        />
      </div>
    )
  );
};
