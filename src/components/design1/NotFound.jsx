import React from "react";
import { Text } from "./Text";
import style from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={style.contenedor}>
      <header>
        <h2>404 Not Found</h2>
      </header>
      <img className={style.img}
        src="https://res.cloudinary.com/dpz8r2olk/image/upload/v1751141576/Scarecrow_efzfe8.png"
        alt="Scarecrow"
      />
      <Text></Text>
    </div>
  );
};

// Scarecrow URL:
// https://res.cloudinary.com/dpz8r2olk/image/upload/v1751141576/Scarecrow_efzfe8.png
