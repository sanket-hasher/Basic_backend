import express from 'express';
//const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Server is Ready ! !')
})
app.get('/sanket',(req,res) => {
    const jokes=[
        {
          "id": 1,
          "title": "Math Joke",
          "content": "Why was the math book sad? Because it had too many problems."
        },
        {
          "id": 2,
          "title": "Computer Joke",
          "content": "Why don't programmers like nature? It has too many bugs."
        },
        {
          "id": 3,
          "title": "Animal Joke",
          "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
          "id": 4,
          "title": "Food Joke",
          "content": "Why don't eggs tell jokes? Because they might crack up."
        },
        {
          "id": 5,
          "title": "Music Joke",
          "content": "Why did the musician get locked out of his house? Because he left his keys on the piano."
        },
        {
          "id": 6,
          "title": "Science Joke",
          "content": "Why can't you trust an atom? Because they make up everything."
        },
        {
          "id": 7,
          "title": "History Joke",
          "content": "Why did the archaeologist go bankrupt? Because his career was in ruins."
        },
        {
          "id": 8,
          "title": "Sport Joke",
          "content": "Why was Cinderella so bad at soccer? She kept running away from the ball."
        },
        {
          "id": 9,
          "title": "Library Joke",
          "content": "Why did the librarian get kicked off the plane? Because it was overbooked."
        },
        {
          "id": 10,
          "title": "Ghost Joke",
          "content": "Why do ghosts love elevators? Because it lifts their spirits."
        }
      ]
      
        res.send(jokes)
      
        
})


const port=process.env.Port||4000

app.listen(port, () => {
  console.log(`server at localhost:${port}`)
});