
import { useState, useEffect } from "react"

export default function Perguntas() {

    const [category, setCategory] = useState("Serviço Militar");
    const [index, setIndex] = useState();


    const questions = [
        {
            category: "Serviço Militar",
            question: "1. O QUE É O SERVIÇO MILITAR?",
            answer: "É o exercício de atividades específicas desempenhadas por militares da Marinha, Exército ou Aeronáutica."
        },
        {
            category: "Serviço Militar",
            question: "2. O QUE É O SERVIÇO MILITAR INICIAL OBRIGATÓRIO?",
            answer: "É o período em que o brasileiro recebe instrução militar em um quartel da Marinha, Exército ou Aeronáutica, destinada à formação de reservista de 1ª ou 2ª categoria, visando à defesa da Pátria."
        },
        {
            category: "Serviço Militar",
            question: "3. O QUE REPRESENTA O SERVIÇO MILITAR INICIAL OBRIGATÓRIO?",
            answer: "Representa a oportunidade do brasileiro exercer o ato de cidadania de servir e defender a Pátria."
        },
        {
            category: "Serviço Militar",
            question: "4. O QUE É SERVIR A PÁTRIA?",
            answer: "É prestar um compromisso de defender a soberania da Pátria e a integridade de seu povo."
        },
        {
            category: "Serviço Militar",
            question: "5. O QUE É A CONVOCAÇÃO PARA O SERVIÇO MILITAR INICIAL OBRIGATÓRIO?",
            answer: "É quando o brasileiro é chamado a realizar o alistamento militar, a fim de concorrer à seleção para servir em um quartel da Marinha, Exército ou Aeronáutica por um período determinado."
        },
        {
            category: "Serviço Militar",
            question: "6. O QUE É CLASSE CONVOCADA PARA O SERVIÇO MILITAR INICIAL OBRIGATÓRIO?",
            answer: "É o conjunto dos brasileiros nascidos em um mesmo ano chamados a realizar o alistamento militar, a fim de concorrer à seleção para servir o quartel da Marinha, Exército ou Aeronáutica por um período determinado."
        },
        {
            category: "Serviço Militar",
            question: "7. O QUE É SERVIÇO MILITAR ALTERNATIVO?",
            answer: "É o exercício de atividades de caráter administrativo, assistencial, filantrópico ou mesmo produtivo, em substituição às atividades de caráter essencialmente militar."
        },
        {
            category: "Serviço Militar",
            question: "8. QUEM PODE OPTAR PELO SERVIÇO MILITAR ALTERNATIVO?",
            answer: "O cidadão que, após alistado, alegar imperativo de consciência, decorrente de crença religiosa ou de convicção filosófica ou política para se eximir de atividades de caráter essencialmente militar."
        },
        {
            category: "Serviço Militar",
            question: "9. COMO OPTAR PELO SERVIÇO MILITAR ALTERNATIVO?",
            answer: "O cidadão deve apresentar apenas uma declaração de imperativo de consciência redigida de próprio punho ou 'a rogo', contendo as razões de sua objeção em prestar o Serviço Militar Obrigatório em virtude de sua crença religiosa, linha filosófica ou partido político, bem como sua opção pelo Serviço Alternativo ao Serviço Militar Obrigatório. Vale lembrar que as informações prestadas implicam a imediata inclusão do jovem no processo seletivo ao Serviço Militar Alternativo ao Serviço Militar Obrigatório - SASMO, bem como a aceitação de todas as exigências e condições previstas em lei. Por sua vez, a identificação de informações inconsistentes, acarretará a abertura de processo para averiguação das declarações prestadas e possível enquadramento no prescrito no Art. 299 do Código Penal - Decreto-Lei nº 2.848, de 7 de dezembro de 1940: 'Art. 299 - Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita, com o fim de prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante: Pena - reclusão, de um a cinco anos, e multa, se o documento é público, e reclusão de um a três anos, e multa, se o documento é particular.'"
        },

        {
            category: "Alistamento Militar",
            question: "Quem é obrigado a prestar o serviço militar?",
            answer: "Todo cidadão brasileiro do sexo masculino é obrigado a prestar o serviço militar a partir dos 18 anos de idade, exceto os que se encontram nas situações previstas no art. 6º da Lei do Serviço Militar."
        },
        {
            category: "Dispensa",
            question: "Quem é dispensado do serviço militar?",
            answer: "São dispensados do serviço militar os cidadãos que se encontram nas situações previstas no art. 4º da Lei do Serviço Militar."
        }
    ]



    return (
        <div className="relative w-full flex flex-col p-8 px-14">
            <p>Perguntas frequentes</p>
            <div className="w-full h-[calc(100vh-200px)] mt-2 border rounded overflow-hidden">
                <div className="w-full h-14 flex items-center px-6 border-b">
                    <div onClick={() => setCategory("Serviço Militar")} className="p-4 px-6 hover:bg-zinc-200 border-t cursor-pointer">
                        Serviço Militar
                    </div>

                    <div onClick={() => setCategory("Alistamento Militar")} className="p-4 px-6 hover:bg-zinc-200 border-t cursor-pointer">
                        Alistamento Militar
                    </div>

                    <div onClick={() => setCategory("Dispensa")} className="p-4 px-6 hover:bg-zinc-200 border-t cursor-pointer">
                        Dispensa
                    </div>

                </div>

                <div className="h-[calc(100%-50px)] overflow-auto">
                    <div className="m-4 mx-6">

                        {
                            questions.map(function (question, i) {

                                if (question.category == category) {
                                    return (
                                        <div onClick={() => setIndex(index == i ? null : i)} className="flex flex-col w-full cursor-pointer text-stone-800 p-4 mb-2 border bg-zinc-100 rounded">
                                            <div className="flex items-center justify-between">
                                                {question.question}

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>

                                            </div>

                                            {index == i ?
                                                <div className="mt-2 text-sm">{question.answer}</div>
                                                : ""}

                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}