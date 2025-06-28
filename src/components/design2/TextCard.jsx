import style from "./TextCard.module.css";

export const TextCard = ({ nombre, calificacion, descripcion }) => {
  return (
    <div className={style.contenedor}>
      <h4>{nombre}</h4>
      <h6>{calificacion}</h6>
      <p>{descripcion} </p>
    </div>
  );
};
