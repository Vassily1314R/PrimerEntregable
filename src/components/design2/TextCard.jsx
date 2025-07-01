import style from "./TextCard.module.css";

export const TextCard = ({ nombre, calificacion, descripcion }) => {
  return (
    <div className={style.contenedor}>
      <h4 className={style.nombre}>{nombre}</h4>
      <h6 className={style.estrellas}>{calificacion}</h6>
      <p className={style.descripcion}>{descripcion} </p>
      <button className={style.readm}>Read More</button>
      <button className={style.contact}>Contact</button>
    </div>
  );
};
