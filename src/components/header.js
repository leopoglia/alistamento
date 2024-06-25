import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Header() {

    const [link, setLink] = useState("");

    useEffect(() => {
        setLink(window.location.pathname);        

    }, [window.location.pathname]);


    return (
        <header className="w-full h-16 bg-black flex items-center justify-between px-8">

            <Link to="/">
                <div className="flex items-center">
                    <img src="/favicon.ico" alt="Logo" className="w-6 h-6 rounded-sm mr-4" />

                    <p className="text-white">
                        Alistamento Militar
                    </p>

                    <div className="hidden md:flex ml-2 px-2 rounded bg-white text-xs">
                        online
                    </div>
                </div>
            </Link>

            <div className="flex items-center text-xs">
                <p className="text-zinc-300 mr-4 cursor-pointer hover:text-white">Serviços</p>
                <p className="text-zinc-300 mr-8 cursor-pointer hover:text-white">Perguntas frequentes</p>

                {link == "/" &&
                    <Link to="/home">
                        <button className="w-40 h-10 bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                            Entrar com gov.br
                        </button>
                    </Link>
                }
            </div>


        </header>
    );
}