

export default function Header() {
    return (
        <header className="w-full h-16 bg-black flex items-center justify-between px-8">
            <div className="flex items-center">
                <img src="/favicon.ico" alt="Logo" className="w-6 h-6 rounded-sm mr-4" />

                <p className="text-white">
                    Alistamento Militar
                </p>

                <div className="hidden md:flex ml-2 px-2 rounded bg-white text-xs">
                    online
                </div>
            </div>

            <div className="flex items-center text-xs">
                <p className="text-zinc-300 mr-4 cursor-pointer hover:text-white">Serviços</p>
                <p className="text-zinc-300 mr-8 cursor-pointer hover:text-white">Perguntas frequentes</p>

                <button className="w-40 h-10 bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                    Entrar com gov.br
                </button>
            </div>


        </header>
    );
}