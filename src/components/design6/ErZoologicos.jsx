import { useState } from "react";
import styles from "./ErZoologicos.module.css";

const diagramas = [
  {
    nombre: "Zoológicos",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752519798/Diagrama_ER_Zoologicos_animales_1_xjj8ol.svg",
  },
  {
    nombre: "Gabinete abogados",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752710736/Diagrama_ER_Gabinete_abogados_jt0pis.svg",
  },
  {
    nombre: "Sistema de ventas",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752521010/Diagrama_ER_Sistema_ventas_cnel3f.svg",
  },
  {
    nombre: "Universidad Virtual Internacional",
    url: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1752704796/Modelo_ER_Universidad_1_ndaqus.png",
  },
];

export const ErZoologicos = () => {
  const [diagramaActivo, setDiagramaActivo] = useState(diagramas[0]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Diagramas ER</h1>

      <nav className={styles.nav}>
        {diagramas.map((diagrama, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${
              diagrama.url === diagramaActivo.url ? styles.active : ""
            }`}
            onClick={() => setDiagramaActivo(diagrama)}
          >
            {diagrama.nombre}
          </button>
        ))}
      </nav>

      <img
        className={styles.diagram}
        src={diagramaActivo.url}
        alt={`Diagrama ER - ${diagramaActivo.nombre}`}
      />
    </div>
  );
};
