"use client";

import React, { useEffect } from "react";

const Snow = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    
    const createSnow = () => {
        const snow = document.createElement('span')
        snow.className = 'snow'

        const minSize = 5
        const maxSize = 10

        let snowSize = Math.random() * (maxSize - minSize) + minSize

        snow.style.width = snowSize + 'px'
        snow.style.height = snowSize + 'px'

        snow.style.left = Math.random() * 100 - minSize + '%'

        container.appendChild(snow)

        setTimeout(() => {
            snow.remove()
        }, 10000)
    }

    setInterval(createSnow, 100)
  }, []);

  return <div className="container"></div>;
};

export default Snow;
