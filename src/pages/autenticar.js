
export default function Autenticar() {


    return (
        <div className="relative w-full flex flex-col p-8 px-14">

            <p>
                Autenticar Certificado
            </p>


            <div className="mt-3">
                <span className="text-sm">RA</span>

                <input type="text" placeholder="Digite o RA" className="w-full h-10 mb-4 p-2 px-4 text-zinc-800 border rounded" />


                <span className="text-sm">Código autenticador</span>

                <input type="text" placeholder="Código autenticador" className="w-full h-10 p-2 px-4 text-zinc-800 border rounded" />

                <button className="w-full h-10 mt-4 bg-diamount-500 hover:bg-diamount-600 border border-diamount-500 text-white rounded">
                    Buscar
                </button>
            </div>
        </div>
    )
}