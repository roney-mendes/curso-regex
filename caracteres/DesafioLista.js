const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(texto.match(/\.mp3/g))
var match = texto.match(/\.mp3/g)

console.log(match.length)

//No futuro

console.log(texto.match(/\w+\.mp3/g))