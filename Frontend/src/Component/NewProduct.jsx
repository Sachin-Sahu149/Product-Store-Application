

import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useProductStore } from '../ProductStore/product.js';

function NewProduct({ setsuccessToast, seterrorToast, settoastInfo }) {
    const navigate = useNavigate();

    const [newProduct, setnewProduct] = useState({
        name: "",
        image: "",
        price: ""
    });

    const { createProduct } = useProductStore();

    // Add product handler
    const addProduct = async (e) => {
        e.preventDefault();

        // Simple validation for price and image URL
        if (newProduct.price <= 0 || isNaN(newProduct.price)) {
            seterrorToast(true);
            settoastInfo((prev) => ({ ...prev, error: "Price must be a positive number." }));
            return;
        }
        
        if (!newProduct.image.startsWith('http')) {
            seterrorToast(true);
            settoastInfo((prev) => ({ ...prev, error: "Invalid image URL." }));
            return;
        }

        const { success, message } = await createProduct(newProduct);
        if (success) {
            setsuccessToast(true);
            settoastInfo((prev) => ({ ...prev, success: message }));
            navigate('/');  // Redirect after success
            setisScroll(true);
        } else {
            seterrorToast(true);
            settoastInfo((prev) => ({ ...prev, error: message }));
        }

        // Reset form after submission
        setnewProduct({
            name: "",
            image: "",
            price: ""
        });
    };

    const[isScroll,setisScroll] = useState(false);

    useEffect(()=>{

        document.querySelector('body').className = isScroll?"":'overflow-hidden';
    },[isScroll])

    const isClose = ()=>{
        navigate('/');
        setisScroll(true);
    }

    return (
        <>
            <div className="w-screen h-screen border-box fixed top-0 left-0 flex justify-center items-center">
                <div className="absolute w-full h-full bg-black opacity-40"></div>

                <div onClick={(e) => e.stopPropagation()} className="py-2 px-3 w-full rounded-xl xs:w-[400px] bg-gray-200 z-50 dark:bg-[#041C32] dark:text-gray-200 border">                    
                    <div className="flex justify-between font-normal w-full text-lg">
                        <h2 className="font-semibold">Add New Product</h2>
                        <button className="text-gray font-semibold rounded-full p-2 hover:bg-gray-300 dark:hover:text-black" onClick={isClose}>
                            <IoClose size={20} />
                        </button>
                    </div>
                    <form onSubmit={addProduct}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="leading-10 font-semibold">Title</label>
                            <input
                                value={newProduct.name}
                                onChange={(e) => setnewProduct({ ...newProduct, name: e.target.value })}
                                required
                                className="h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="image" className="leading-10 font-semibold">Image URL</label>
                            <input
                                value={newProduct.image}
                                onChange={(e) => setnewProduct({ ...newProduct, image: e.target.value })}
                                required
                                className="h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200"
                                type="text"
                                name="image"
                                id="image"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="price" className="leading-10 font-semibold">Price</label>
                            <input
                                value={newProduct.price}
                                onChange={(e) => setnewProduct({ ...newProduct, price: e.target.value })}
                                required
                                className="h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200"
                                type="number"
        
                                name="price"
                                id="price"
                                placeholder="Enter price"
                            />
                        </div>
                        <div className="xs:flex-row justify-between my-3">
                            <button
                                type="submit"
                                className="w-full text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-500 bg-blue-600"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewProduct;
