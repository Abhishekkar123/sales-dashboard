import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topLeft"> 
            <span className='logo'>Admin</span></div>
            <div className='topRight'>

                <div className="topbarIcon">
    <NotificationsNoneIcon/>
    <span className="icconBadge"> 2 </span>
                </div>
                <div className="topbarIcon">
    <LanguageIcon/>
    <span className="icconBadge"> 2 </span>
                </div>
                <div className="topbarIcon">
    <SettingsIcon/>
                </div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="" className="Avatar" />

            </div>
        </div>
      
    </div>
  )
}
