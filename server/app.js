import express from 'express'
import * as dotenv from 'dotenv'
import cors from "cors"

dotenv.config();


const app = express()

app.use(cors())

const port = 3000
app.use(express.json({ limit: '50mb'}))


app.get('/', async(req, res)=>{
    res.send("Hello from me")
})


const start= async()=>{
    app.listen(port, ()=>{
        console.log(`server has started at port ${port}`)
    })
}

start()
