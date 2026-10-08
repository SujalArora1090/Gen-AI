const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!..........hdjhdjcd backenedrs')
})
app.get('/api/test', (req, res) => {
    res.json({
        message: "AI Interview Generator Backend is working"
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})