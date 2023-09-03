import React from 'react'
import './widgetlg.css'
export default function Widgetlarge() {
    const Button=({type})=>{
        return <button className={'widgetLgButton '+type}>{type}</button>
    }
  return (
    <div className='widgetlg'>
<h3 className='widgetLgtext'>Latest Transaction</h3>
      <table className='widgetTable'>
    <tr className='tr'>
<th className="widgetLgTh">Customer</th>
<th className="widgetLgTh">Date</th>
<th className="widgetLgTh">Amount</th>
<th className="widgetLgTh">Status</th>
    </tr>
    <tr className="tr">
        <td className="wigdetlguser">
           
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="img large" className="widgetlgImg" />
            <span className="widgetLgName">Abcd def</span>

        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$2220.79</td>
        <td className='widgetLgstatus'><Button type="Approved"/></td>
    </tr>
    <tr className="tr">
        <td className="wigdetlguser">
           
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="img large" className="widgetlgImg" />
            <span className="widgetLgName">Abcd def</span>

        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$2220.79</td>
        <td className='widgetLgstatus'><Button type="Decline"/></td>
    </tr>
    <tr className="tr">
        <td className="wigdetlguser">
           
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="img large" className="widgetlgImg" />
            <span className="widgetLgName">Abcd def</span>

        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$2220.79</td>
        <td className='widgetLgstatus'><Button type="Pending"/></td>
    </tr>
      </table>
    </div>
  )
}
