# 🤸‍♀️ Notas de Atletas - Ginástica Artística

## Resumo do Projeto

Este projeto consiste em uma aplicação JavaScript desenvolvida para calcular a média de notas de atletas em uma competição de ginástica artística. O cálculo segue uma regra específica: a média é determinada a partir das notas atribuídas por cinco jurados, **desconsiderando-se a maior e a menor nota**.

## 📐 Regra de Avaliação

A competição utiliza uma banca de cinco jurados, cada um fornecendo uma nota de 1 a 10. A média final (Média Válida) do atleta é calculada da seguinte forma:

> A média é calculada com base nas **três notas do meio**, desconsiderando a nota mais alta e a nota mais baixa atribuídas.

## 🛠️ Tecnologias Utilizadas

*   **JavaScript (ES6+):** Linguagem de programação principal.
*   **Node.js:** Ambiente de execução para rodar o script.

## 📂 Estrutura do Projeto

.
└── notas-atletas.js

## 🚀 Como Executar

Para executar o projeto, você precisa ter o Node.js instalado em sua máquina.

1.  Salve o conteúdo do arquivo `notas_atletas_solucao_unica.js` em um arquivo local.
2.  Abra o terminal na pasta onde o arquivo foi salvo.
3.  Execute o script com o comando `node`:

          node notas-atletas.js

O resultado será exibido diretamente no console.

## 📊 Dados de Entrada

O script utiliza a seguinte matriz de objetos como dados de entrada:

```  const atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
]; 
```
## 📋 Exemplo de Saída

A saída esperada no console, formatada para cada atleta, é a seguinte:

``` --- Resultados da Competição de Ginástica Artística ---
Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida: 9,2533333333

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida: 9,11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9,8333333333 ```
-------------------------------------------------------
