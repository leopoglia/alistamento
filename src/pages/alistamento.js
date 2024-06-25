import React from "react";


import Header from "../components/header";
import Footer from "../components/footer";


export default function Alistamento() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />


      <img src="/walppaper.png" className="fixed w-full h-screen object-cover"></img>


      <div className="relative w-full h-screen flex justify-center p-8">
        <h1 className="text-3xl text-white w-fit">
          ALISTAMENTO MILITAR ONLINE
        </h1>



      </div>

      <Footer />
    </div>
  );
}