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
      <h1>{title}</h1>
      {subtitle && <h5>POPULAR SELLER</h5>}
      <h2>{price}</h2>
      <p>{description}</p>
      <button>{like}</button>
      <button>{addcart}</button>
    </div>
  );
};
