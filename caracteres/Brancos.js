const texto = `
ca	r
r	o s!
`
console.log(texto.match(/ca/))
console.log(texto.match(/ca\tr\nr\to\ss!/))

// \t representa o tab
// \s representa o espaço em branco
// \n representa a quebra de linha