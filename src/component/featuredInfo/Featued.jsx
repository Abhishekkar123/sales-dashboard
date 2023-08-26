import React from 'react'
import './featured.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from '@mui/icons-material';
export default function Featued() {
  return (
    <div className='featured'>
        <div className="featureItem">
            <span className="featuredtitle">Revenue</span>
            <div className="featuremoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">
                compare to last month
            </span>
        </div>
        
        <div className="featureItem">
            <span className="featuredtitle">Sales</span>
            <div className="featuremoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>  
            <span className="featuredSub">
                compare to last month
            </span>
        </div>
        <div className="featureItem">
            <span className="featuredtitle">Cost</span>
            <div className="featuremoneyContainer">
                <span className="featuredMoney">$2,215</span>
                <span className="featuredMoneyRate">+11.4 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">
                compare to last month
            </span>
        </div>
      
    </div>
  )
}
