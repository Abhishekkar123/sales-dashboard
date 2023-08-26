import React from 'react'
import './home.css'
import Featued from '../../component/featuredInfo/Featued'
import Chart from '../../component/charts/Chart'
import {data}from '../../Dummy'
export default function Home() {
  return (
    <div className='home'>
        <Featued/>
        <Chart data={data} title="user Analytics" grid dataKey="Active User"/>
        <div className='homeWidget'>
         <div className='small'>Small</div>
         <div className='large'>Large</div>   

        </div>
    </div>
  )
}
