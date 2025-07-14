import styles from "./ErZoologicos.module.css";

export const ErZoologicos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido</h1>
      <img
        className={styles.diagram}
        src="https://res.cloudinary.com/dpz8r2olk/image/upload/v1752519798/Diagrama_ER_Zoologicos_animales_1_xjj8ol.svg"
        alt="Diagrama ER Zoo"
      />
    </div>
  );
};
