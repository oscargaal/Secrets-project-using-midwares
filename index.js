import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url"

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    if(req.body.password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html")
    }
})

app.listen(3000, () => {
})