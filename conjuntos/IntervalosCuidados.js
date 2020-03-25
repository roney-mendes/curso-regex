const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //não define um range

console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela ASCII/UNICODE
//https://unicode-table.com/pt/#control-character

console.log(texto.match(/[a-zA-Z]/g)) // Forma correta para não pegar caracteres entre os intervalos das letras maiúsculas e minusculas 

// intervalos tem que respeitar ordem das tabelas UNICODE/ASCII

//console.log(texto.match(/[a-Z]/g)) // Não funciona por estar fora de ordem
//console.log(texto.match(/[4-1]/g)) // Não funciona por estar fora de ordem



