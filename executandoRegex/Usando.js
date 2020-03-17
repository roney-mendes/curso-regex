const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras))  // Encontra os resultados da Regex no texto
console.log(texto.search(regexLetras)) // Retorna o primeiro indice encontrado pela Regex
console.log(texto.replace(regexLetras, 'Achei')) // Substitui os que foi encontrado pela Regex, novo valor definido no segundo parâmetro
console.log(texto.split(regexLetras)) // Separa em um array os resultados encontrados