import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useProductStore } from '../ProductStore/product';


function Card({ margin, items, seteditProduct, setdeleteToast, seterrorToast, settoastInfo }) {

    const navigate = useNavigate();

    const { deleteProduct, fetchProduct } = useProductStore();

    const handleProductDeletion = async () => {
        const { success, message } = await deleteProduct(items._id);

        console.log('success :', success, message);
        if (success) {
            setdeleteToast(true);
            settoastInfo((prev) => ({ ...prev, delete: message }));
        } else {
            seterrorToast(true);
            settoastInfo((prev) => ({ ...prev, error: message }));
        }
    }

    //update product details

    const handleProductUpdate = () => {

        seteditProduct((prevItems) => ({ ...prevItems, ...items }));
        console.log(items, 'reserved');
    }

    const [isHovered, setisHovered] = useState(false);

    const boxShadow = {
        // boxShadow: isHovered ? 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' : "",
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    }

// 
    return (
        <div 
        className={` dark:text-gray-300 w-[250px]  mt-4 mb-4  bg-gray-100  rounded-t-lg rounded-b ${margin} dark:bg-gradient-to-r dark:from-teal-700 dark:to-blue-900 `} 
        style={boxShadow} onMouseOver={() => setisHovered(true)} onMouseOut={() => setisHovered(false)}>
 
            <img className="object-cover w-full h-36 rounded-t-lg" src={items.image} alt='' />

            <div className='py-2 px-2'>
                <h1 className='text-lg font-semibold py-1'>{items.name}</h1>
                <span className='block font-semibold leading-6 pb-2'>Price: &#8377; {items.price}</span>
                <div className='flex justify-between '>
                    <Link to={'/edit'}><button
                        className={`bg-[#1877F2] rounded hover:bg-[#1877F2]/80 dark:bg-[#144272]  duration-300 transition-colors border border-transparent px-4 py-1 text-white dark:bg-gradient-to-l dark:from-gray-600 dark:to-blue-900 hover:scale-90`}
                        onClick={handleProductUpdate}
                    >Edit</button></Link>

                    <button
                        className={`bg-[#1877F2] rounded hover:bg-[#1877F2]/80 dark:bg-[#144272] dark:hover:bg-[#dark:bg-[#144230]] 
                            duration-300 transition-colors border border-transparent px-4 py-1 text-white dark:bg-gradient-to-l dark:from-gray-600 dark:to-blue-900 hover:scale-90`}
                        onClick={handleProductDeletion}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card;