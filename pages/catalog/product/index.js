import React from 'react';
import Layout from '../../../components/Layouts/mainLayout';
import Breadcrumb from '../../../components/Breadcrumb';
import ProductCarousel from '../../../components/Pages/Catalog/product/Carousel';
import ProductContent from '../../../components/Pages/Catalog/product/Content';

import SimilarProduct from '../../../components/Pages/Catalog/product/SimilarProduct';
import PolarChart from '../../../components/Pages/Catalog/product/PolarChart';
import Link from 'next/link';
import MethodCard from '../../../components/Pages/Catalog/product/MethodCard';
const ProductPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Каталог',
            url:'/catalog'
        },
        {
            name:'Фильтр',
            url:'/',
        },
        {
            name:'Crazy Barista Ethiopia'
        }
    ]

    const methods = [
        {
            title:'Воронка Hario V60',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]
           
        },
        {
            title:'Аэропресс',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]
        },
        {
            title:'Эспрессо',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]
        }
    ]
    return (
        <>
       <div className='container'>
            <Breadcrumb routes={breadcrumb}/>
            <div className='-mx-16 flex flex-wrap'>
                <div className='w-full lg:w-6/12 exlg:w-4/12 xl:w-4/12 px-16'>
                    <ProductCarousel/>
                </div>
                {/* /.w-full */}
                <div className='w-full lg:w-6/12 exlg:w-8/12  xl:w-8/12 px-16'>
                   <ProductContent/>

                   <div className='pt-32'>
                        
                        <div className='flex flex-wrap -mx-16 mb-56'>
                            <div className='w-full exlg:w-6/12 xl:w-7/12 px-16 mb-32'>
                                <h3 className='font-muller font-bold'>Паутина вкуса</h3>
                                <PolarChart/>
                            </div>
                            <div className='w-full exlg:w-6/12  xl:w-5/12 px-16'>
                                <div className='bg-pattern-black py-28 px-28 mb-36 hidden lg:block'>
                                    <div className="font-muller font-bold text-14 text-white mb-10">Заголовок попапа</div>
                                    <div className='text-white font-ptsans text-14 max-w-[200px] mb-16'>Текст попапа в несколько строк, информация о товаре и пр.</div>
                                    <div className='pb-36 exlg:pb-16'>
                                        <Link href={'/'} className="underline text-white text-14">www.coffeescouts.ru</Link>
                                    </div>
                                </div>
                                {/* /.card */}
                                <div className=''>
                                    <h3 className='font-muller font-bold text-18 mb-12'>Описание</h3>
                                    <div className='text-14 text-gray-80 leading-6 '>
                                        Лимитированная линейка моносортов кофе класса «Speciality». Это зерно мы находим в самых экзотических уголках нашей планеты. Его по праву можно назвать произведением искусства наших roast-мастеров. Бережная «светлая» обжарка и благородные вкусы приятно удивят даже самых взыскательных кофеманов. Предназначены в первую очередь для альтернативных методов заваривания, таких как V60, aeropress, chemex/kalita, но не менее ярко «прозвучат» и в эспрессо-машине
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:block lg:mb-96'>
                       
                            <h3 className='font-muller font-bold'>Способы заваривания</h3>
                            <div className='bg-gray-0  p-24 overflow-auto'>
                                <div className='-mx-10  flex '>
                                    {
                                        methods.map((method,i)=>{
                                            return (
                                                <div key={i} className="px-10">
                                                    <MethodCard data={method}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                               
                            </div>
                        </div>
                   </div>
                </div>
            </div>
       </div>
       
       <SimilarProduct/>
       
       </>
    )
}

export default ProductPage;
ProductPage.getLayout = (page) => {
    return <Layout meta={{title:'', description:''}}>{page}</Layout>
}