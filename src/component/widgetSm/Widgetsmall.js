import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './widgetsm.css'
export default function Widgetsmall() {
  return (
    <div className='widgetsm'>
     <span className='widgettitle'>New Join Member</span>
      <ul className='widgetlist'>
        <li className='widgetlistItem'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s' alt='img' className='widgetImg'/>
            <div className='widgetSmUser'>
                <span className='widgetUserName'>Abc</span>
                <span className='widgetUserProfile'>Software Engineer</span>
            </div>
            <button className='widgetButton'><VisibilityIcon className='widgetIcon'/>Display</button>
        </li>
        <li className='widgetlistItem'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s' alt='img' className='widgetImg'/>
            <div className='widgetSmUser'>
                <span className='widgetUserName'>Abc</span>
                <span className='widgetUserProfile'>Software Engineer</span>
            </div>
            <button className='widgetButton'><VisibilityIcon className='widgetIcon'/>Display</button>
        </li>
        <li className='widgetlistItem'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s' alt='img' className='widgetImg'/>
            <div className='widgetSmUser'>
                <span className='widgetUserName'>Abc</span>
                <span className='widgetUserProfile'>Software Engineer</span>
            </div>
            <button className='widgetButton'><VisibilityIcon  className='widgetIcon'/>Display</button>
        </li>

      </ul>
    </div>
  )
}
