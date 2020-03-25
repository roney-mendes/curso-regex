const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // (números) \d sigfica que virão todos os dígitos no match [0-9]
console.log(texto.match(/\D/g)) // valores não numéricos [^0-9]


console.log(texto.match(/\w/g)) // shorthand que representa os caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // [^a-zA-Z0-9_] negação

console.log(texto.match(/\s/g)) // espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)) // Tudo o que não é espaço [^ \t\n\r\f]

// \b \B