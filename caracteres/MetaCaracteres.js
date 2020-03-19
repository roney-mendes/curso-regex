// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g // A '\.' nesse caso serve para interpretar o . como literal e não como um meta caracter
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))