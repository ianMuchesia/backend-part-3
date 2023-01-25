import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { v2 as cloudinary } from "cloudinary";

import Post from "../model/post.js";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  

router.get('/', (req,res)=>{
    
    res.send("hello frm Dalle")

});

router.post('/',async(req, res)=>

{

   try {
        const { prompt } = req.body;
        console.log(prompt)
        console.log("yess_1")
         const response = await openai.createImage({
            prompt,
            n: 1,
            size: '512x512',
            
        })
        console.log("yess_1.5")
        const image = response.data.data[0].url; 
        console.log("yess_2")
       res.status(200).json({photo:image})
       console.log("yess_3")
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }  
}) 



export default router;