import style from "./CardStar.module.css";
import { TextCard } from "./TextCard.jsx";

export const CardStar = () => {
  const usuarios = [
    {
      pfp: "https://i.pravatar.cc/300",
      nombre: "Juan Perez",
      calificacion: "⭐️⭐️⭐️⭐️⭐️",
      descripcion: "Aprende React paso a paso",
    },
    {
      pfp: "https://i.pravatar.cc/300",
      nombre: "Armando Paredes",
      calificacion: "⭐️⭐️⭐️",
      descripcion: "Framework completo de Google",
    },
    {
      pfp: "https://i.pravatar.cc/300",
      nombre: "Vassily",
      calificacion: "⭐️⭐️⭐️⭐️⭐️",
      descripcion: "Fácil de aprender y progresivo",
    },
  ];

  return (
    <>
      {usuarios.map((elem) => {
        return (
          <div className={style.contenedor}>
            <img src="" alt="random image" />
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
