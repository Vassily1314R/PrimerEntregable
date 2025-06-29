import { TextProduct } from "./TextProduct";

export const CardProduct = () => {
  const productos = [
    {
      img: "",
      title: "SINGLE TOILET PAPER ROLL",
      subtitle: true,
      price: 9.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div>
        <img src={elemen.img} alt="Product" />
        <TextProduct />
      </div>
    </>
  );
};
