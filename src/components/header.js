import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {

    const [loc, setLoc] = useState("");
    const [openProfile, setOpenProfile] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname);
    }, [location.pathname]);



    return (
        <header className="w-full relative z-20 h-16 bg-black flex items-center justify-between px-8">

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
                <Link to="/servicos">
                    <p className="text-zinc-300 mr-4 cursor-pointer hover:text-white">Serviços</p>
                </Link>

                <Link to="/perguntas">
                    <p className="text-zinc-300 mr-8 cursor-pointer hover:text-white">Perguntas frequentes</p>
                </Link>

                {loc === "/" &&
                    <Link to="/servicos">
                        <button className="w-40 h-10 bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                            Entrar com gov.br
                        </button>
                    </Link>
                }

                {loc != "/" &&

                    <button onClick={() => setOpenProfile(!openProfile)} className="w-10 min-w-10 h-10 bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                        <span className="text-lg font-medium">
                            L
                        </span>
                    </button>
                }


                {openProfile &&
                    <div className="absolute top-16 right-6 w-40 bg-white rounded-lg shadow-lg p-2">
                        <Link to="/perfil">
                            <p className="text-zinc-700 p-2 px-4 hover:bg-zinc-100 rounded text-sm">
                                Meu perfil
                            </p>
                        </Link>


                        <Link onClick={()=> setOpenProfile(false)} to="/">
                            <p className="text-zinc-700 p-2 px-4 hover:bg-zinc-100 rounded text-sm">
                                Sair
                            </p>
                        </Link>

                    </div>
                }
            </div>


        </header>
    );
}