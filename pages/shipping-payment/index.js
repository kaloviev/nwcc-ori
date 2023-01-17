import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layouts/mainLayout';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Доставка и оплата'
    }
]
const ShippingPaymentPage = () => {
    const items = [
        {
            title:"Оформление заказа",
            description:(
                <div>
                    <p>Вы можете оформить заказ на нашем сайте в любое время. Обработка заказов производится в будние дни с 10:00 до 18:00.</p>
                    <p>Ваш заказ будет готов через 1 рабочий день с момента подтверждения заказа электронным письмом.</p>
                    <p>Обратите внимание! CoffeeScout обжаривается 1 раз в неделю и заказы на него принимаются в понедельник до 17:00.</p>
                </div>
            )
        },
        {
            title:"Доставка",
            description:(
                <div>
                    <div className='mb-40'>
                        <h4>Самовывоз</h4>
                        <p>Вы сможете бесплатно забрать Ваш заказ у нас в офисе, по адресу: г.Санкт-Петербург, Лиговский проспект 50, корпус 16. Ваш заказ будет готов через 1 рабочий день после 14:00, с момента подтверждения заказа электронным письмом.</p>
                    </div>
                    <div className='mb-40'>
                        <h4>Доставка по Санкт-Петербургу</h4>
                        <p>Стоимость доставки в пределах КАД составляет 350 ₽, при стоимости заказа более 5000 ₽ — доставка бесплатная. Доставка осуществляется в будние дни, через 1 рабочий день после подтверждения заказа.</p>
                    </div>
                    <div className='mb-40'>
                        <h4>Доставка по России</h4>
                        <p>Мы осуществляем доставку по всей России при помощи курьерской компании СДЭК. Доставка в СДЭК осуществляется через 1 рабочий день с момента подтверждения заказа. Стоимость и ориентировочное время доставки рассчитывается автоматически при оформлении заказа.</p>
                    </div>
                </div>
            )
        },
        {
            title:"Оплата",
            description:(
                <div>
                    <div className='mb-24'>
                        <h4>Оплата наличными</h4>
                        <p>
                            Оплату наличными возможно произвести курьеру при доставка или при получении заказа в нашем офисе.
                        </p>
                    </div>
                    <div className='mb-24'>
                        <h4>Оплата банковской картой</h4>
                        <p>
                            Вы можете оплатить банковской картой на нашем сайте при оформлении заказа. Вы будете автоматически направлены на защищенный сервер платежного сервиса Яндекс Касса для завершения оплаты.
                        </p>
                    </div>
                    <div className='mb-24'>
                        <h4>Безналичный перевод</h4>
                        <p>
                            ООО «Кофе Трейд»<br/>
                            ОГРН 1157847423612<br/>
                            ИНН 7842080560<br/>
                            КПП 784201001<br/>
                            Юридический и фактический адрес:<br/>
                            191040, г.Санкт-Петербург, Лиговский пр-кт, д.50,<br/>
                            корп.16, литер У<br/>
                            р/сч 4070 2810 2030 0001 7678<br/>
                            к/сч 3010 1810 1000 0000 0723<br/>
                            в Филиал «Северная столица» АО «Райффайзенбанк», г.Санкт-Петербург<br/>
                            БИК 044030723<br/>
                            ОКПО 35440089<br/>
                            Генеральный директор Носенко Д.Ф.
                        </p>
                    </div>
                </div>
            )
        }
    ]
    return(
        <div className='container'>
            <Breadcrumb routes={breadcrumb}/>
            <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36'>Доставка и оплата</h2>
            <div className='pt-80 md:pb-80 lg:pb-96'>
                {items.map((item,i)=>{
                    return(
                    <div key={i} className={`${items.length - 1 === i?'mb-0 lg:pb-32':'mb-32  border-b border-gray-40 lg:pb-56'}`}>
                        <div className='flex -mx-16 flex-wrap'>
                            <div className='w-full md:w-6/12 px-16'>
                                <h3 className='text-28 font-muller font-medium mb-20 leading-none'>{item.title}</h3>
                            </div>
                            <div className='w-full md:w-6/12 px-16'>
                                <div className='post post-type-2'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ShippingPaymentPage;

ShippingPaymentPage.getLayout = (page) => {
    return(
        <Layout meta={{title:'Shipping and Payment', description:'Shipping and Payment Page'}}>{page}</Layout>
    )
}