import React from 'react';
import ProductItem from '../../../ProductItem';
import ProductData from '../../../../fakeData/products.json';
const SimilarProduct = () => {
    
    return(
        <div className=''>
            <div className='container'>
                <h3 className='font-kazimir text-32 mb-40 text-left lg:text-center'>С этим товаром приобретают</h3>
            </div>
            <div className='overflow-auto'>
                <div className='flex'>
            {   
                    ProductData.map((product,i)=>{
                        return(
                            <div className={`w-full max-w-[255px] lg:max-w-[460px]`} key={i}>
                                <ProductItem data={product} type={'grid'} hoverAction={false}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default SimilarProduct;