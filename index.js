const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/alive', (req, res) => {
    res.send('alive')
})

app.listen(PORT, () => {
    console.log('app is running')
})