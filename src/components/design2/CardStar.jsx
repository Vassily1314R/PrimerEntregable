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
      descripcion: "Fácil de aprender, exclente metodologia, excelentes clases",
    },
    {
      pfp: "https://i.pravatar.cc/150",
      nombre: "Astrid",
      calificacion: "⭐️⭐️⭐️",
      descripcion: "Accesible, facil, escalable",
    },
  ];

  return (
    <div className={style.contenedor}>
      {usuarios.map((elem) => {
        return (
          <div className={style.contenedorCardStar} key={elem.nombre}>
            <img className={style.img} src={elem.pfp} alt="random image" />
            <TextCard
              nombre={elem.nombre}
              calificacion={elem.calificacion}
              descripcion={elem.descripcion}
            />
          </div>
        );
      })}
    </div>
  );
};
