import React from "react";
import { Link } from "react-router-dom"



export default function Inicio() {
  return (
    <>
      <img src="/walppaper.png" className="fixed w-screen  object-cover"></img>


      <div className="relative w-full h-screen flex flex-col items-center p-8">
        <h1 className="text-3xl text-white w-fit">
          Alistamento Online
        </h1>



        <div className="mt-14">
          <Link to="/servicos">
            <button className="w-40 h-10 mr-10 text-xs bg-green-800 hover:bg-green-700 text-white rounded-full">
              Quero me alistar
            </button>
          </Link>

          <Link to="/servicos">
            <button className="w-40 h-10 text-xs bg-green-800 hover:bg-green-700 text-white rounded-full">
              Já me alistei
            </button>
          </Link>
        </div>
      </div>



    </>
  );
}