const express = require('express');
const morgan = require('morgan');
require("dotenv").config()


const PORT = process.env.PORT ||3000

const app = express();

app.use(express.json())

app.get("/",(req, res) => {
    res.status(200).json({
        SlackUsername: "TochiN",
        backend: true,
        age: 40,
        bio: "A curious mind always eager to learn"
    })
    
})


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})