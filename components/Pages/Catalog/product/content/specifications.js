import React  from "react";
import ProgressBar from "../../../../ProgressBar";
import Tooltip from "../../../../Tooltip";

const ProductSpecifications = () => {
    return(
        <div className="mb-40">
            <div className="font-muller font-bold text-gray-80 text-20">Характеристики</div>

            <ul className="font-ptsans text-14 text-gray-80">
                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Обработка</div>
                    </div>
                    <div className="w-full px-16">
                        <div>Натуральная</div>
                    </div>
                </li>

                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Оценка зерна</div>
                    </div>
                    <div className="w-full px-16">
                        <div className="flex items-center">
                            87,53
                            <Tooltip direction={'right'} className="ml-4 hidden lg:block">Оценка по результатам каппинга СЗКК</Tooltip>
                        </div>
                    </div>
                </li>

                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Арабика</div>
                    </div>
                    <div className="w-full px-16">
                        <div>80%</div>
                    </div>
                </li>

                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Робуста</div>
                    </div>
                    <div className="w-full px-16">
                        <div>20%</div>
                    </div>
                </li>

                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>География</div>
                    </div>
                    <div className="w-full px-16">
                        <div>Эфиопия</div>
                    </div>
                </li>

                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Обжарка</div>
                    </div>
                    <div className="w-full px-16">
                        <ProgressBar percent={80}/>
                    </div>
                </li>


                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Сладость</div>
                    </div>
                    <div className="w-full px-16">
                        <ProgressBar percent={20}/>
                    </div>
                </li>


                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Кислотность</div>
                    </div>
                    <div className="w-full px-16">
                        <ProgressBar percent={40}/>
                    </div>
                </li>


                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Горечь</div>
                    </div>
                    <div className="w-full px-16">
                        <ProgressBar percent={80}/>
                    </div>
                </li>


                <li className="flex items-center  -mx-16 mb-6">
                    <div className="max-w-[200px] w-full px-16">
                        <div>Метод заваривания</div>
                    </div>
                    <div className="w-full px-16">
                        <div className="flex items-center">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.08603 6.04279C2.00314 6.04279 1.125 6.86004 1.125 7.86785C1.125 8.87566 2.00314 9.69185 3.08603 9.69185C4.16892 9.69185 5.04592 8.87566 5.04592 7.86785C5.04592 6.86004 4.16892 6.04279 3.08603 6.04279ZM6.14246 7.69371H9.72327L12.9822 1.96773C13.0686 1.75299 13.055 1.51954 12.9435 1.33633C12.8309 1.15213 12.633 1.04279 12.4112 1.04279H3.4705C3.24755 1.04279 3.05077 1.15213 2.93816 1.33633C2.82668 1.51954 2.81303 1.75299 2.89948 1.96773L6.14246 7.69371ZM12.683 13.1774C12.8388 13.6 12.7933 14.06 12.5533 14.4185C12.3111 14.783 11.8993 14.9997 11.442 14.9997H4.43964C3.98237 14.9997 3.5706 14.783 3.32718 14.4185C3.08717 14.06 3.04167 13.6 3.19864 13.1774L6.14587 7.69371H9.71986L12.683 13.1774Z" fill="#333333"/>
                            </svg>
                            Фильтр
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProductSpecifications;