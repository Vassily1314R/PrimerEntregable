import React, { useEffect, useState } from "react";

export const EjCebolla = () => {
  const [Clock, setClock] = useState("");

  // useEffect para actualizar la hora cada segundo
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setClock(timeString);
    };

    updateClock(); // Llamada inicial
    const interval = setInterval(updateClock, 1000); // Actualiza cada 1s

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  const Cebolla = "cebolla";

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const heart = "🤍";
  const redHeart = "❤️";

  const [heartState, setHeartState] = useState(false);

  const handleHeart = () => {
    setHeartState(!heartState);
  };

  return (
    <>
      <div>
        <h1>Bienvenido al ejercicio Onion alert</h1>
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          placeholder="Escribe aqui"
          onChange={handleChange}
        ></textarea>
      </div>
      <footer>
        <p>Hora actual: {Clock} </p>
      </footer>
      <div style={{ background: "grey" }}>
        <img src="https://i.pravatar.cc/80" alt="album" />
        <h1>Rozes</h1>
        <h5>Solista</h5>
        <br />
        <p>under the grave</p>
        <span>dance</span>
        <span onClick={handleHeart}>{heartState ? heart : redHeart}</span>
      </div>
    </>
  );
};
