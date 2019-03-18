'use strict'

const express = require('express')

const { PORT = '5000' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('Hello Jack')
})

console.log("test")
app.listen(PORT)