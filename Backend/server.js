import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./Config/db.js";
import productRoutes from "./routes/product.route.js";
import path from 'path'

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname,"/Frontend/dist")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("server started st http://localhost:"+PORT);
})

