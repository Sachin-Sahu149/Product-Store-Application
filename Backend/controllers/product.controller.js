import mongoose from "mongoose";
import Product from "../Models/product.model.js";

export const getProducts = async (req, res) => {

    try {
        const prodcuts = await Product.find({});
        res.status(200).json({ success: true, data: prodcuts });
    } catch (error) {
        console.log("error in fetching products", error.message);
    }
}


export const createProduct = async (req, res) => {
    const product = req.body;
    console.log(product);
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }
    catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log("id:", id);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"});
    }
    
    try {
        await Product.findByIdAndDelete(id);
        return res.status(201).json({ success: true, message: "product deleted" });
    } catch (error) {
        console.log("error in deleting produts", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const updateProduct = async(req,res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"});
    }
}
