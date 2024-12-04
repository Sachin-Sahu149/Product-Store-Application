
import {create} from 'zustand'
import mongoose from 'mongoose'
import { FaSadCry } from 'react-icons/fa';

export const useProductStore = create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProduct:async (newProduct)=>{
        
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false,message:"Please fill appropriate value in all fields."}
        }
        const res = await fetch("/api/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state)=>({products:[...state.products,data.data]}))
        return {success:true,message:"Product created successfully"};
    },
    fetchProduct:async ()=>{
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products:data.data});
    },

    deleteProduct:async (id)=>{

        if(!mongoose.Types.ObjectId.isValid(id)){
            return {success:false,message:"Id in not correct"};
        }

        const res = await fetch(`/api/products/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        if(!data.success){
            return {success:false,message:"Something went wrong"};
        }
        
        set((state)=>({products:state.products.filter((product)=>product._id!=id)}))

        return {success:true,message:"Product deleted successfully"}
        
    },

    updateProducts:async (pid,updatedProduct)=>{

        const res = await fetch(`/api/products/${pid}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedProduct)
        });

        const data = await res.json();
        if(!data.success)return{success:false,message:'Somthing went wrong'}

        set((state)=>({products:state.products.map((product)=>(product._id==pid?data.data:product))}));

        return{success:true,message:'Product updated successfully'}

    }
}))