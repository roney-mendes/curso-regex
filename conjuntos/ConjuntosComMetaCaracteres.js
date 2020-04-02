const texto = '.$+*?-'
//. metacaracter que pode representar qualquer cacacter dentro de uma string, coringa
console.log(texto.match(/[+.?*$]/g))

console.log(texto.match(/[+.?*$]./g)) // não precisao de escape ou \ dentro do conjunto para a maior parte de metacaracteres
console.log(texto.match(/[$-?]/g)) // - usado como metacaractere para definir intervalo (range)

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g)) // escape '\' anula o metacaracter '-' tratando-o como literal dentro da expressão
console.log(texto.match(/[-?]/g)) // Apenas dois elementos

//Pode precisar de escape dentro do conjunto: - [ ] ^






