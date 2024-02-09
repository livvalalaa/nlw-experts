const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função que converte uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toInteger()"
      ],
      correta: 0
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof",
        "typeOf",
        "type()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função que retorna o comprimento de uma string em JavaScript?",
      respostas: [
        "len()",
        "length()",
        "size()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// This is a comment",
        "' This is a comment",
        "/* This is a comment */"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `map()` faz em JavaScript?",
      respostas: [
        "Transforma um array em uma string",
        "Cria um novo array com o resultado de uma função aplicada a cada elemento do array original",
        "Remove elementos duplicados de um array"
      ],
      correta: 1
    },
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  
    for(let reposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = reposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(reposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  }