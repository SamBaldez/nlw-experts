const perguntas = [
    {
      pergunta: "Qual é a função utilizada para exibir uma mensagem de alerta em JavaScript?",
      respostas: [
        "showMessage()", 
        "alert()", 
        "displayAlert()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;", 
        "let myVar;", 
        "const myVar;"
      ],
      correta: 1
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
      pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
      respostas: [
        "log()", 
        "print()", 
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "O que a função 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte um valor para inteiro", 
        "Converte um valor para string", 
        "Converte um valor para booleano"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      respostas: [
        "function", 
        "def", 
        "func"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de adição em JavaScript?",
      respostas: [
        "&", 
        "+", 
        "++"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Este é um comentário */", 
        "// Este é um comentário", 
        "<!-- Este é um comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona todos os elementos com a classe especificada", 
        "Seleciona o primeiro elemento com a classe especificada", 
        "Seleciona um elemento pelo ID especificado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=", 
        "==", 
        ":="
      ],
      correta: 0
    }
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
  
  // laço ou loop de repetição
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if (estaCorreta) {
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
     quizItem.querySelector('dl').appendChild(dt)
   }
  
  quizItem.querySelector('dl dt').remove()
  
  
  // mostra o texto na tela
   quiz.appendChild(quizItem)
  }
  