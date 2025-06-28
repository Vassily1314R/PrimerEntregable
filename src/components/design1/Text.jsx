import style from "./Text.module.css"
export const Text = () => {
  return (
    <div className={style.contenedor}>
      <h1>I have bad news for you</h1>
      <p>
        The page you are looking for might be removed or is temproarily
        unavailable
      </p>
      <button>Back To Homepage</button>
    </div>
  );
};
