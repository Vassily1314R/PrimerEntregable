import { TextProduct } from "./TextProduct";

export const CardProduct = () => {
  const productos = [
    {
      img: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1751237282/R_n0rez2.png",
      title: "SINGLE TOILET PAPER ROLL",
      subtitle: true,
      price: 9.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      like: "Like",
      addcart: "Add to Cart",
    },
    {
      img: "https://res.cloudinary.com/dpz8r2olk/image/upload/v1751141576/Scarecrow_efzfe8.png",
      title: "SINGLE SCARECROW",
      subtitle: false,
      price: 19.99,
      description:
        "Simple scarecrow to keep your garden safe from pests. Made with durable materials.",
      like: "Like",
      addcart: "Add to Cart",
    },
  ];

  return (
    <>
      {productos.map((elemen) => (
        <div key={elemen.title}>
          <img src={elemen.img} alt="Product" />
          <TextProduct
            title={elemen.title}
            subtitle={elemen.subtitle}
            price={elemen.price}
            description={elemen.description}
            like={elemen.like}
            addcart={elemen.addcart}
          />
        </div>
      ))}
      ;
    </>
  );
};
