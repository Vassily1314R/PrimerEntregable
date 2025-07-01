import style from "./Text.module.css";
export const Text = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.title}>I have bad news for you</h1>
      <p className={style.p}>
        The page you are looking for might be removed or is temporaly
        unavailable
      </p>
      <button className={style.button}>BACK TO HOMEPAGE</button>
    </div>
  );
};
