import style from "./Text.module.css";

export const Text = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.Titulo}>
        Improve your front-end skills by building projects
      </h1>
      <p className={style.parrafo}>
        Scan the QR to get to my website where we can get in touch
      </p>
    </div>
  );
};
