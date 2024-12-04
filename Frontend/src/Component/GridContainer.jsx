import React, { useEffect } from 'react';
import Card from './Card';
import { useProductStore } from '../ProductStore/product';
import { Link } from 'react-router';

function GridContainer({seteditProduct,setdeleteToast,seterrorToast,settoastInfo}) {


    const { fetchProduct, products } = useProductStore();

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);
    console.log(products);


    return (
        <div className=" pt-10 flex justify-center flex-wrap pb-10 gap-2 ss:gap-4 px-4">
            {
                products.map((item, index) => {
                    return <Card key={item._id} items={item} seteditProduct={seteditProduct} setdeleteToast={setdeleteToast} seterrorToast={seterrorToast} settoastInfo={settoastInfo} />
                })
            }
            {
                products.length == 0 && <div className='h-60  flex items-center'>
                    <span className='text-xl font-semibold'>No Product Found 👉</span>
                    <Link to={'add'}><span className='text-xl font-semibold cursor-pointer hover:underline'>create new product</span></Link>
                </div>
            }
        </div>
    );
}

export default GridContainer;
