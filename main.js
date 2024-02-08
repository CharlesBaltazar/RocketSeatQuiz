const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável imutável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "<!-- Comentário -->",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método `parseInt()` em JavaScript?",
        respostas: [
            "Converte uma string para um número inteiro",
            "Converte um número inteiro para uma string",
            "Retorna a parte decimal de um número",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador `===` verifica em JavaScript?",
        respostas: [
            "Somente valor",
            "Valor e tipo",
            "Somente tipo",
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i < 5; i++)",
            "for (i < 5; i++)",
            "loopfor (i = 0; i < 5)",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método `addEventListener` em JavaScript?",
        respostas: [
            "Remove um ouvinte de eventos de um elemento",
            "Executa uma função imediatamente",
            "Adiciona um ouvinte de eventos a um elemento",
        ],
        correta: 2
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "var minhaFuncao = function() {}",
            "ambas a e b",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
        respostas: [
            "Remove variáveis não utilizadas do código",
            "Eleva as declarações de variáveis e funções durante a fase de compilação",            
            "Converte código JavaScript para código de máquina",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do método `querySelector` em JavaScript?",
        respostas: [
            "Seleciona o primeiro elemento que corresponde a um seletor CSS",
            "Adiciona um novo elemento ao DOM",
            "Remove um elemento do DOM",
        ],
        correta: 0
    },
    {
        pergunta: "Como você converte uma string para minúsculas em JavaScript?",
        respostas: [
            "lowerCase()",
            "toLowerCase()",            
            "convertLowerCase()",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas 

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas 
        }



        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    quiz.appendChild(quizItem)
}