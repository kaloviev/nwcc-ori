import React from 'react';
import ProductSpecifications from './content/specifications';
import CartForm from './content/cartForm';
import ProductObserves from './content/observes';

const ProductContent = () => {
    return(
        <div className='pt-56'>
             <h2 className='font-kazimir text-36 italic mb-14'>Etiopia Aramo</h2>
             <div className='-mx-16 flex flex-wrap exlg:justify-between mb-36'>
                <div className='px-16 w-full exlg:w-5/12'>
                    <ProductSpecifications/>
                </div>
                <div className='px-16 w-full exlg:w-6/12 xl:w-5/12'>
                    <CartForm/>
                </div>
             </div>
             <div>
                <ProductObserves/>
             </div>
        </div>
    )
}
export default ProductContent;