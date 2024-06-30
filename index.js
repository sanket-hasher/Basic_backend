require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sanket',(req,res) => {
    res.send("<h2> This is Sanket's Server </h2> \n  <a href='https://www.google.com' target='_blank' >My google</a> ")
})



app.listen(process.env.Port, () => {
  console.log(`Example app listening on port ${port}`)
})