import { Text } from "./Text";
import style from "./Card.module.css";
export const Card = () => {
  return (
    <div className={style.contenedorCard}>
      <div className={style.card}>
        <div className={style.divIMG}>
          <img
            className={style.img}
            src="https://res.cloudinary.com/dpz8r2olk/image/upload/v1750989477/QR_valqqu.png"
            alt="QR"
          />
        </div>
        <Text />
      </div>
    </div>
  );
};
