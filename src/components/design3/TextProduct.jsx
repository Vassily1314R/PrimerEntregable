import style from "./TextProduct.module.css";

export const TextProduct = ({
  title,
  subtitle,
  price,
  description,
  like,
  addcart,
}) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {subtitle && <h5 className={style.subtitle}>POPULAR SELLER</h5>}
      <h2 className={style.price}>€{price}</h2>
      <p className={style.descripcion}>{description}</p>
      <button className={style.like}>{like}</button>
      <button className={style.addcart}>{addcart}</button>
    </div>
  );
};
