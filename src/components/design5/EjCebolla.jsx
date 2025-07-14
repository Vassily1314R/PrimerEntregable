import React, { useEffect, useState } from "react";
import styles from "./EjCebolla.module.css";

export const EjCebolla = () => {
  const [Clock, setClock] = useState("");

  // useEffect para actualizar la hora cada segundo
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setClock(timeString);
    };

    updateClock(); // Llamada inicial
    const interval = setInterval(updateClock, 1000); // Actualiza cada 1s

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  const Cebolla = "cebolla";

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const heart = "🤍";
  const redHeart = "❤️";

  const [heartState, setHeartState] = useState(false);

  const handleHeart = () => {
    setHeartState(!heartState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Bienvenido al ejercicio Onion alert</h1>
        <textarea
          className={styles.textarea}
          name=""
          id=""
          cols="50"
          rows="10"
          placeholder="Escribe aqui"
          onChange={handleChange}
        ></textarea>
      </div>
      <footer className={styles.footer}>
        <p>Hora actual: {Clock} </p>
      </footer>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          src="https://i.pravatar.cc/80"
          alt="album"
        />
        <h1 className={styles.title}>Rozes</h1>
        <h5 className={styles.subtitle}>Solista</h5>
        <p className={styles.song}>under the grave</p>
        <span className={styles.genre}>dance</span>
        <br />

        <span className={styles.heart} onClick={handleHeart}>
          {heartState ? redHeart : heart}
        </span>
      </div>
    </div>
  );
};
