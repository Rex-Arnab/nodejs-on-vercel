const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from vercel")
})

app.get('/test', (req, res) => {
    res.send("this is a test on vercel deployment")
})

app.listen(PORT, () => console.log("listening on http://localhost:3000"))