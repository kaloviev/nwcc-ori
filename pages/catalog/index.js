import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layouts/mainLayout';
import ProductItem from '../../components/ProductItem';
import Filter from '../../components/Pages/Catalog/filter';

import ProductData from '../../fakeData/products.json';
import Image from 'next/image';
import CloseIcon from '../../assets/images/icon-close.svg';

const Catalog = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Каталог'
        }
    ]
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [filter1, setFilter1] = useState([
        'Для эспрессо',
        'Для фильтра',
        'Капсулы',
        'Дрипы',
        'Аксессуары',
        'Чистящие средства'
    ])


    const filters = [
        "Бренд",
        "Страны",
        "Фасовка",
        "Обработка",
        "Новинки",
        "Скидки"
    ]

    const [viewType, setViewType] = useState('grid');

    const [selectedFilter1, setSelectedFilter1]=useState('Для фильтра');


    return(
        <div className=''>
            <div className='container'>
                <Breadcrumb routes={breadcrumb}/>
                <h2 className='font-kazimir text-28 mb-40 lg:mt-16 lg:mb-6'>Каталог</h2>
                {filter1 && 
                <div className='overflow-auto lg:overflow-hidden pb-16 lg:pb-24 lg:px-0'>
                    <ul className='-mx-10 flex lg:flex-wrap items-center'>
                        {filter1.map((filter,i)=>{
                            return(
                                <li key={i} className={`cursor-pointer text-14 lg:text font-ptsans px-10 whitespace-nowrap ${selectedFilter1 === filter?'underline':''}`}>{filter}</li>
                            )
                        })}
                    </ul>
                </div>
                }
            </div>
            <div className='bg-gray-0 p-16 py-8 lg:py-20'>
                {/* for mobile */}
                <div className='flex -mx-16 lg:hidden'>
                    <div className='flex-1 border-r border-gray-40  flex items-center justify-center font-muller font-medium text-14 text-center cursor-pointer' onClick={()=>setShowFilterModal(true)}>
                        Фильтр 

                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className='ml-6 mt-2'>
                            <path d="M1 9L5 5L1 1" stroke="#333333" strokeWidth="2"/>
                        </svg>

                    </div>

                    <div className='flex-1 flex items-center justify-center font-muller font-medium text-14 text-center cursor-pointer'>
                         Детализация 

                        <div className='flex items-center pl-10'>
                            <div className={`px-4 py-2 flex flex-1 items-center rounded-sm h-24 w-24 justify-center ${viewType === 'grid'?'bg-gray-80':''}`}  onClick={()=>setViewType('grid')}>
                                <svg width="15" height="12" viewBox="0 0 15 12" className={`${viewType === 'grid'?'fill-white':'fill-gray-80'} `}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.49992 0.666504H0.833252V2.19031H3.49992V0.666504ZM3.49992 5.23793H0.833252V6.76174H3.49992V5.23793ZM0.833252 9.80936H3.49992V11.3332H0.833252V9.80936ZM14.1666 0.666504H4.83325V2.19031H14.1666V0.666504ZM4.83325 5.23793H14.1666V6.76174H4.83325V5.23793ZM14.1666 9.80936H4.83325V11.3332H14.1666V9.80936Z" />
                                </svg>
                            </div>
                            <div className={`px-6 py-2 flex flex-1 items-center  rounded-sm h-24 w-24 justify-center ${viewType === 'list'?'bg-gray-80':''}`}  onClick={()=>setViewType('list')}>
                                <svg width="9" height="14" viewBox="0 0 9 14" className={`${viewType === 'list'?'fill-white':'fill-gray-80'} `}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.333496H8.5V8.3335H0.5V0.333496ZM0.5 9.66683H8.5V11.0002H0.5V9.66683ZM8.5 12.3335H0.5V13.6668H8.5V12.3335Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.flex */}
                {/* for desktop */}
                <div className='container mx-auto hidden lg:block'>
                    <div className=' border-gray-40 border-b pb-8'>
                        <div className=' -mx-16 hidden lg:flex'>
                            <div className='w-5/12 px-16'>
                                <h3 className='font-muller font-medium text-14 mb-4'>Фильтр</h3>
                                <ul className='flex items-center -mx-10'>
                                    {filters.map((filter,i)=>{
                                        return (
                                            <li key={i} className="font-ptsans text-14 px-10">{filter}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className='w-4/12 px-16'>
                                <h3 className='font-muller font-medium text-14 mb-4'>Сортировка</h3>
                                <ul className='flex items-center -mx-10'>
                                    
                                    <li className="font-ptsans text-14 px-10">Популярность</li>
                                    <li className="font-ptsans text-14 px-10">Цена</li>
                                </ul>
                            </div>

                            <div className='w-3/12 px-16 text-right'>
                                <span className='underline font-muller font-medium text-14'>Сбросить фильтр</span>
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 flex -mx-6'>
                        <div className='px-6'>
                            <div className='bg-black px-10 py-4 text-white text-14 pr-24 relative'>
                                Бурунди

                                <Image src={CloseIcon} alt="close" className='cursor-pointer absolute w-8 top-[11px] right-10'/>
                            </div>
                        </div>

                        <div className='px-6'>
                            <div className='bg-black px-10 py-4 text-white text-14 pr-24 relative'>
                                Эфиопия
                                <Image src={CloseIcon} alt="close" className='cursor-pointer absolute w-8 top-[11px] right-10'/>
                            </div>
                        </div>

                        <div className='px-6'>
                            <div className='bg-black px-10 py-4 text-white text-14 pr-24 relative'>
                                250 г
                                <Image src={CloseIcon} alt="close" className='cursor-pointer absolute w-8 top-[11px] right-10'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap bg-white'>
                {
                    ProductData.map((product,i)=>{
                        return(
                            <div className={`lg:w-4/12 ${viewType === 'list'?'w-full':'w-6/12'}`} key={i}>
                                <ProductItem data={product} type={viewType}/>
                            </div>
                        )
                    })
                }
                
            </div>

            <Filter open={showFilterModal} onClose={()=>setShowFilterModal(false)}/>
           
        </div>

    )
}

export default Catalog;

Catalog.getLayout = (page) => {
    return(
        <Layout meta={{title:'Catalog', description:'Product Catalog'}}>{page}</Layout>
    )
}