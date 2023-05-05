import React from "react";
import imgHome1 from "../../assets/img/img-home1.png";
import imgHome2 from "../../assets/img/img-home2.png";
import imgHome3 from "../../assets/img/img-home3.png";
const Home = () => {
  return (
    <div className=" bg-neutral-800 mt-[87px] pb-4">
      <div className="text-center bg-neutral-300 p-3 font-bold text-lg">
        <p>
          Bienvenido/a a nuestra tienda , aqui encontraras prodcuctos de la NBA
          , encontraras las{" "}
          <span className=" uppercase font-extrabold text-red-500">
            camisetas
          </span>
          de tus jugadores favoritos , sus{" "}
          <span className="uppercase font-extrabold text-red-500">
            zapatillas
          </span>{" "}
          con las cuales juegan en la NBA ,{" "}
          <span className="uppercase font-extrabold text-red-500">balones</span>{" "}
          de la NBA y{" "}
          <span className="uppercase font-extrabold text-red-500">gorras</span>{" "}
          de la mayoria de equipos para que alientes a tu equipo favorito.
        </p>
      </div>
      <div className="w-11/12 m-auto">
        <img className=" w-full rounded-2xl" src={imgHome1} alt="fondo" />
        <img className="w-full rounded-2xl mt-5" src={imgHome3} alt="fondo" />
        <img className="w-full rounded-2xl mt-5" src={imgHome2} alt="fondo" />
      </div>
    </div>
  );
};

export default Home;
