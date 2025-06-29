export const TextProduct = ({ title, subtitle, price, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h5>POPULAR SELLER</h5>}
    </div>
  );
};
