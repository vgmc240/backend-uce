import express from "express"

const app = express();

app.get("/", (req, res)=>{
    return res.json({message:"To funcionando"})
})

app.get("/rota-teste", (req, res)=>{
    return res.json({message:"To funcionando"})
})


app.get("/rota-teste2", (req, res)=>{
    return res.json({message:"To funcionando"})
})

app.listen(3333)