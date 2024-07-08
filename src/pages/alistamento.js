import { useState } from 'react'

export default function Alistamento() {


    const data = {
        date: "1999-01-01",
        cpf: "062.114.839-39",
        name: "Roberto da Silva Nobrega",
        mother: "Maria da Silva Nobrega",
        city: "SC | Jaraguá do Sul",
        local: "SC | Jaraguá do Sul"
    }

    return (
        <div className="relative w-full flex flex-col p-8 px-14">


            <div className='mb-20 flex items-center'>
                <div className='w-20 min-w-20 h-20 bg-lime-700 text-white rounded-full text-xs flex items-center justify-center'>
                    Alistamento
                </div>
                <div className='w-1/4 h-1 bg-lime-700'></div>
                <div className='w-20 min-w-20 h-20 bg-zinc-300 rounded-full text-xs flex items-center justify-center text-center'>
                    Pagamento taxa
                </div>
                <div className='w-1/4 h-1 bg-zinc-300'></div>
                <div className='w-20 min-w-20 h-20 bg-zinc-300 rounded-full text-xs flex items-center justify-center text-center'>
                    Jurar bandeira
                </div>
                <div className='w-1/4 h-1 bg-zinc-300'></div>
                <div className='w-20 min-w-20 h-20 bg-zinc-300 rounded-full text-xs flex items-center justify-center text-center'>
                    Dispensado
                </div>
            </div>

            <div className="w-full flex justify-between">
                <p>
                    Informações iniciais
                </p>

                <div className="flex">


                    <button className="w-40 h-10 bg-diamount-500 hover:bg-diamount-600 text-white rounded-full">
                        Enviar
                    </button>
                </div>
            </div>


            <form className='mb-10'>


                <div className="mt-3">
                    <span className="text-sm">Data de nascimento</span>
                    <input type="date" placeholder="dd/mm/yyyy" value={data?.date} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>

                <div className="mt-3">
                    <span className="text-sm">CPF</span>
                    <input type="text" placeholder="000.000.000-00" value={data?.cpf} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>

                <div className="mt-3">
                    <span className="text-sm">Nome</span>
                    <input type="text" placeholder="XXXXXX XXXXXX XXXXXX" value={data?.name} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>

                <div className="mt-3">
                    <span className="text-sm">Mãe</span>
                    <input type="text" placeholder="XXXXXX XXXXXX XXXXXX" value={data?.mother} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>

                <div className="mt-3">
                    <span className="text-sm">Municipio</span>
                    <input type="text" placeholder="XX | XXXXXXXXXXXXXXXX" value={data?.city} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>

                <div className="mt-3">
                    <span className="text-sm">Local do Alistamento</span>
                    <input type="text" placeholder="XX | XXXXXXXXXXXXXXXX" value={data?.local} className="w-full bg-zinc-50 p-2 px-4 text-zinc-800 border rounded" />
                </div>
            </form>
        </div>
    )
}