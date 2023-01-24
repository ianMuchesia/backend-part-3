import express from 'express'
import * as dotenv from 'dotenv'
import cors from "cors"
import connectDB from './db/connectDB.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from "./routes/dalleRoutes.js"
dotenv.config();


const app = express()

app.use(cors())


//middleware
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


const port = 3000
app.use(express.json({ limit: '50mb'}))


app.get('/', async(req, res)=>{
    res.send("Hello from me")
})


const start= async()=>{

    try {
     connectDB(process.env.MONGO_URI)
     app.listen(port, ()=>{
        console.log(`server has started at port ${port}`)
    })
    } catch (error) {
       console.log(error) 
    }
   
}

start()
