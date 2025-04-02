import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
    res.send('<h2>My About Page</h2>')
  })

app.listen(8080,function(){
    console.log("Server Runniong at 3K")
})