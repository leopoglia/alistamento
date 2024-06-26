import React from "react";


import Header from "../components/header";
import Footer from "../components/footer";


export default function Alistamento() {


    const services = [
        {
            name: "Alistamento Militar",
            description: "Realize o seu alistamento militar",
            link: "/alistamento"
        },
        {
            name: "Acompanhar Alistamento",
            description: "Verifique a sua situação atual",
            link: "/acompanhar"
        },
        {
            name: "Locais de atendimento",
            description: "Encontre um local próximo de você",
            link: "/locais"
        },
        {
            name: "Requer certificado de dispensa",
            description: "Solicitar um certificado ou verificar a situação do requerimento",
            link: "/dispensa"
        },
        {
            name: "Certificados militares",
            description: "CDI /Reservista / 2ª via",
            link: "/certificados"
        },
        {
            name: "Autenticar certificado",
            description: "Verificar a validade do documento militar",
            link: "/autenticar"
        }
    ]


    return (
        <div className="h-screen md:overflow-hidden">
            <Header />

            <div className="relative w-full flex flex-col p-2 px-8">
                <div className="w-full rounded p-2 px-6">

                    <p>
                        Serviços Disponíveis
                    </p>

                    <div className="flex flex-col md:flex-row justify-between md:flex-wrap mt-4 mb-4">

                        {services.map((item) => {
                            return (
                                <button className="w-full md:w-[48%] bg-diamount-500 hover:bg-diamount-600 p-3 text-white rounded mb-4">
                                    <p>{item.name}</p>

                                    <span className="text-xs font-light text-zinc-200">
                                        {item.description}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    <hr />
                </div>



                <div className="w-full rounded p-4 px-6">

                    <p>
                        Outros serviços
                    </p>
                    <div className="flex flex-col md:flex-row justify-between md:flex-wrap mt-6 mb-4">
                        <button className="w-full md:w-[48%] bg-diamount-500 hover:bg-diamount-600 p-3 text-white rounded mb-4">
                            <p>Entrar em contato</p>
                        </button>

                        <button className="w-full md:w-[48%] bg-diamount-500 hover:bg-diamount-600 p-3 text-white rounded mb-4">
                            <p>Diretória de Serviço Militar</p>
                        </button>

                        <button className="w-full md:w-[48%] bg-diamount-500 hover:bg-diamount-600 p-3 text-white rounded mb-4">
                            <p>Acessar informações</p>
                        </button>

                        <button className="w-full md:w-[48%] bg-diamount-500 hover:bg-diamount-600 p-3 text-white rounded mb-4">
                            <p>Editar informações</p>
                        </button>
                    </div>


                </div>


            </div>

            <Footer style="black" />
        </div>
    );
}