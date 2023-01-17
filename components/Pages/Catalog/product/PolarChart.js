import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const PolarChart  = () => {
    // const data = [
    //     {
    //       subject: "Послевкусие",
    //       amount: 90
  
    //     },
    //     {
    //         subject: "Сладкий",
    //         amount: 10
    
    //       },
    //       {
    //         subject: "Сладкий",
    //         amount: 100
    
    //       },
    //       {
    //         subject: "Кислотный",
    //         amount: 30
    
    //       },
    //       {
    //         subject: "Тело",
    //         amount: 60
    
    //       },
    //       {
    //         subject: "Цветочный",
    //         amount: 20
    
    //       },
    //       {
    //         subject: "Чистый",
    //         amount: 70
    
    //       },
    //       {
    //         subject: "Пряный",
    //         amount: 75
    
    //       },
    //       {
    //         subject: "Горький",
    //         amount: 110
    
    //       },
    //       {
    //         subject: "Солёный",
    //         amount: 15
    
    //       },
    //       {
    //         subject: "Карамельный",
    //         amount: 65
    
    //       },
    //       {
    //         subject: "Ягодный",
    //         amount: 45
    
    //       },
    //       {
    //         subject: "Шоколадный",
    //         amount: 90
    
    //       },
    //       {
    //         subject: "Косточковый",
    //         amount: 80
    
    //       },
    //       {
    //         subject: "Цитрусовый",
    //         amount: 55
    
    //       },
        
    //   ];
    const data = [
        { name: 'Послевкусие', x: 21 },
        { name: 'Сладкий', x: 22 },
        { name: 'Кислотный', x: -32 },
        { name: 'Тело', x: -14 },
        { name: 'Цветочный', x: -51 },
        { name: 'Чистый', x: 16 },
        { name: 'Пряный', x: 7 },
        { name: 'Горький', x: -8 },
        { name: 'Солёный', x: 9 },
        { name: 'Карамельный', x: 9 },
        { name: 'Ягодный', x: 9 },
        { name: 'Шоколадный', x: 9 },
        { name: 'Косточковый', x: 9 },
        { name: 'Цитрусовый', x: 9 },
    ];
    return(
        <div className='h-[274px]  lg:h-[372px] exlg:h-[400px]'>
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart  innerRadius={40} className="h-[274px] w-[374px] lg:h-[372px] lg:w-[472px] exlg:h-[400px]" 
            outerRadius="80%" data={data}>
            <PolarGrid  gridType='circle'/>
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 11 }} />
            {/* <PolarRadiusAxis /> */}
            <Radar dataKey="x" stroke="#000" 
                fill="green" dot="true" activeDot="true" fillOpacity={0} />
        </RadarChart>
        </ResponsiveContainer>  
      </div>
    )
}

export default PolarChart;