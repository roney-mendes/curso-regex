const texto = 'Bom\ndia'
console.log(texto.match(/..../gi)) // O ponto não engloba o /n

//dotall é implementado em algumas linguagens e tem uma flag /exp/s, mas JS não!