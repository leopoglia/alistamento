import { useState, useEffect } from "react"


export default function Locais() {


    const initLocals = [
        {
            jsm: "16/036 - JARAGUA DO SUL",
            address: "RUA ANTONIO CUNHA, Nº 160 - SALA 22 - PISO SUPERIOR DA RODOVIARIA - BAEPENDI",
            phone: "47 3371-5714",
            email: "jsm36@jaraguadosul.sc.gov.br"
        },
        {
            jsm: "16/052 - JOINVILLE",
            address: "RUA PARAIBA, 769 (ANEXO A RODOVIARIA) - ANITA GARIBALDI",
            phone: "47 3422-6041",
            email: "jsm052@joinville.sc.gov.br"
        }
    ]


    const [search, setSearch] = useState("");
    const [locals, setLocals] = useState(initLocals);


    function searchLocal(){
        if(search === "") return setLocals(initLocals);
        const local = initLocals.filter((local) => local.jsm.toUpperCase().includes(search.toUpperCase()));
        setLocals(local);
    }


    return (
        <div className="relative w-full flex flex-col p-8 px-14">

            <p>
                Locais de atendimentos
            </p>


            <div className="mt-3">
                <span className="text-sm">Nome do municipio</span>

                <div className="flex">
                    <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="" className="w-full h-10 bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                    <button onClick={()=> searchLocal()} className="w-40 h-10 ml-2 bg-diamount-500 hover:bg-diamount-600 border border-diamount-500 text-white rounded">
                        Buscar
                    </button>
                </div>
            </div>


            <td className="w-full h-[calc(100vh-280px)] rounded mt-4 border">
                <table className="w-full">
                    <tbody>
                        <tr className="h-10">
                            <th className="w-2/12 text-center">JSM</th>
                            <th className="w-4/12 text-center">Endereço</th>
                            <th className="w-2/12 text-center">Telefone</th>
                            <th className="w-4/12 text-center">E-mail</th>
                        </tr>

                        {
                            locals.map((local) => (
                                <tr className="w-full h-10 bg-zinc-100 hover:bg-zinc-200">
                                    <td className="text-center">{local.jsm}</td>
                                    <td className="text-center">{local.address}</td>
                                    <td className="text-center">{local.phone}</td>
                                    <td className="text-center">{local.email}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </td>
        </div>
    )
}