const express = require('express')  //importando o express
app = express()  //instância do express (new)

app.get('/clientes', (req, res) => {
    res.send("João, José, Tiago")
})

app.get('/produtos', (req, res) => {
    res.send("Caneta, Caderno, Carteira")
})

app.get('/pagina', (req, res) => {
    res.send("<html><head><title>Exemplo</title></head><body><h1>Ola Mundo</h1><h3>Você Está Num Exemplo de Página</h3><button>Clique Aqui</button></body></html>")
})



app.listen(8080)



