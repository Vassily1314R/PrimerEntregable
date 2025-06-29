import style from "./CardStar.module.css";
import { TextCard } from "./TextCard.jsx";

export const CardStar = () => {
  const usuarios = [
    {
      pfp: "https://i.pravatar.cc/150",
      nombre: "Juan Perez",
      calificacion: "⭐️⭐️⭐️⭐️⭐️",
      descripcion: "Aprende React paso a paso",
    },
    {
      pfp: "https://i.pravatar.cc/150",
      nombre: "Armando Paredes",
      calificacion: "⭐️⭐️⭐️",
      descripcion: "Framework completo de Google",
    },
    {
      pfp: "https://i.pravatar.cc/150",
      nombre: "Vassily",
      calificacion: "⭐️⭐️⭐️⭐️⭐️",
      descripcion: "Fácil de aprender y progresivo",
    },
    {
      pfp: "https://i.pravatar.cc/150",
      nombre: "Astrid",
      calificacion: "⭐️⭐️⭐️",
      descripcion: "Accesible, facil, escalable",
    },
  ];

  return (
    <>
      {usuarios.map((elem) => {
        return (
          <div className={style.contenedor} key={elem.nombre}>
            <img src={elem.pfp} alt="random image" />
            <TextCard
              nombre={elem.nombre}
              calificacion={elem.calificacion}
              descripcion={elem.descripcion}
            />
          </div>
        );
      })}
    </>
  );
};
