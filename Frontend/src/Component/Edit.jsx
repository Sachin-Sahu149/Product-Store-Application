

import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useProductStore } from '../ProductStore/product';

function Edit({ setsuccessToast, editProduct, settoastInfo,seterrorToast }) {
    const navigate = useNavigate();

    const[isScroll,setisScroll] = useState(true);

    const [updateProduct, setupdateProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    useEffect(() => {
        if (editProduct) {
            setupdateProduct({
                name: editProduct.name || "",
                price: editProduct.price || "",
                image: editProduct.image || "",
            });
        }
        setisScroll(false);
    }, [editProduct]);

    useEffect(()=>{
        document.querySelector('body').className =  isScroll?"": 'overflow-hidden';
    },[isScroll])

    const { updateProducts } = useProductStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!updateProduct.price || updateProduct.price <= 0) {
            settoastInfo((prev) => ({ ...prev, error: "Price must be greater than 0." }));
            seterrorToast(true);
            return;
        }
        if (!updateProduct.image.startsWith('http')) {
            settoastInfo((prev) => ({ ...prev, error: "Invalid image URL." }));
            seterrorToast(true);
            return;
        }

        const { success, message } = await updateProducts(editProduct._id, updateProduct);
        if (success) {
            setsuccessToast(true);
            settoastInfo((prev) => ({ ...prev, success: message }));
            navigate('/');
            setisScroll(true);
        } else {
            settoastInfo((prev) => ({ ...prev, error: "Failed to update product." }));
        }
    };

    const isClose = ()=>{
        navigate('/');
        setisScroll(true);
    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed w-full h-full bg-black opacity-40"></div>

            <div className="py-4 px-6 w-full max-w-md bg-gray-200 dark:bg-[#041C32] dark:text-gray-100 rounded-xl z-50 dark:border">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">Edit Product Details</h2>
                    <button onClick={isClose} className="text-gray-500 p-2 hover:bg-gray-300 rounded-full">
                        <IoClose size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="leading-10 font-semibold">Product Name</label>
                        <input
                            value={updateProduct.name}
                            onChange={(e) => setupdateProduct({ ...updateProduct, name: e.target.value })}
                            required
                            className="h-10 bg-gray-700 rounded p-3 text-white focus:outline-none focus:ring focus:ring-gray-400"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter product name"
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="image" className="leading-10 font-semibold">Image URL</label>
                        <input
                            value={updateProduct.image}
                            onChange={(e) => setupdateProduct({ ...updateProduct, image: e.target.value })}
                            required
                            className="h-10 bg-gray-700 rounded p-3 text-white focus:outline-none focus:ring focus:ring-gray-400"
                            type="text"
                            name="image"
                            id="image"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price" className="leading-10 font-semibold">Price</label>
                        <input
                            value={updateProduct.price}
                            onChange={(e) => setupdateProduct({ ...updateProduct, price: e.target.value })}
                            required
                            className="h-10 bg-gray-700 rounded p-3 text-white focus:outline-none focus:ring focus:ring-gray-400"
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Enter price"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
