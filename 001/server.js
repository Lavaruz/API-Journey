const express = require('express')
const app = express()

app.use(express.json())

app.get('/api', (req,res)=>{
    res.json({status: 'OK'})
})
app.post('/api', (req,res)=>{
    try{
        res.status(201).json(req.body)
    }catch(err){
        res.json({message: err.message})
    }
})

app.listen(3000, ()=> console.log('server run at port 3000'))