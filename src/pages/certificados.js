
export default function Certificados() {


    return (
        <div className="relative w-full flex flex-col p-8 px-14">

            <div className="w-full flex justify-between">
                <p>
                    Certificados Militares
                </p>
            </div>

            <div className="flex w-full items-center justify-center">
                <button className="w-10 h-10 text-sm flex items-center justify-center bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <img className="h-[calc(100vh-210px)]" src="/certificado.png"></img>

                <button className="w-10 h-10 text-sm flex items-center justify-center bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                <div className="absolute bottom-0">
                    <button className="w-72 h-10 text-sm bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                        Baixar Certificado
                    </button>
                </div>
            </div>

        </div>
    )
}