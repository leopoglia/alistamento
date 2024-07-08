
export default function Perfil() {


    return (
        <div className="relative w-full flex flex-col p-8 px-14">
            <div className="w-full rounded">

                <p>
                    Perfil
                </p>
            </div>

            <div>
                <div className="mt-3">
                    <span className="text-sm">Nome</span>
                    <input type="text" placeholder="Leonardo Heitor Poglia" className="w-full bg-zinc-50 placeholder:text-zinc-800 p-2 px-4 text-zinc-800 border rounded" disabled="true"/>
                </div>

                <div className="mt-3">
                    <span className="text-sm">RA</span>
                    <input type="text" placeholder="320007159661" className="w-full bg-zinc-50 placeholder:text-zinc-800 p-2 px-4 text-zinc-800 border rounded" disabled="true"/>
                </div>

                <div className="mt-3">
                    <span className="text-sm">Data de nascimento</span>
                    <input type="text" placeholder="27/12/2004" className="w-full bg-zinc-50 placeholder:text-zinc-800 p-2 px-4 text-zinc-800 border rounded" disabled="true"/>
                </div>

                <div className="mt-3">
                    <span className="text-sm">Data de alistamento</span>
                    <input type="text" placeholder="22/01/2022" className="w-full bg-zinc-50 placeholder:text-zinc-800 p-2 px-4 text-zinc-800 border rounded" disabled="true"/>
                </div>
            </div>
        </div>

    )
}