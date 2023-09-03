import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarwrapper">
           <div className="sidebarmenu">
                <h3 className='sidebartitle'>DashBoard</h3>
                <ul className="sidebarlist">
                        <li className="sidebarlistItem active">
                                <LineStyleIcon className='sidebarIcon'/>
                                home
                        </li>
                        <li className="sidebarlistItem">
                                <TimelineIcon className='sidebarIcon'/>
                                Analtyics
                        </li>
                        <li className="sidebarlistItem">
                                <TrendingUpIcon className='sidebarIcon'/>
                                Sales
                        </li>
                </ul>
           </div>
           <div className="sidebarmenu">
                <h3 className='sidebartitle'>Quick Menu</h3>
                <ul className="sidebarlist">
                        <Link to="/sales-dashboard/users" className='Link'>
                <li className="sidebarlistItem ">
                        <GroupIcon  className='sidebarIcon'/>
                               Users
                        </li>
                        </Link>
                        <Link to="/products" className='Link'>
                        <li className="sidebarlistItem">
                          <CategoryIcon  className='sidebarIcon'/>
                                products
                        </li>
                        </Link>
                        <li className="sidebarlistItem">
                           <AccountBalanceIcon  className='sidebarIcon'/>
                                transaction
                        </li>
                        <li className="sidebarlistItem">
                          <AssessmentIcon  className='sidebarIcon'/>
                                Report
                        </li>
                </ul>
           </div>
           <div className="sidebarmenu">
                <h3 className='sidebartitle'>Notification</h3>
                <ul className="sidebarlist">
                        <li className="sidebarlistItem ">
                        <MailIcon  className='sidebarIcon'/>
                               Mail
                        </li>
                        <li className="sidebarlistItem">
                       <FeedbackIcon  className='sidebarIcon'/>
                             Feedbacks
                        </li>
                        <li className="sidebarlistItem">
                     <MessageIcon  className='sidebarIcon'/>
                               Messages
                        </li>
                        
                </ul>
           </div>
           <div className="sidebarmenu">
                <h3 className='sidebartitle'>Staff</h3>
                <ul className="sidebarlist">
                        <li className="sidebarlistItem ">
                                <ManageAccountsIcon  className='sidebarIcon'/>
                               Manage 
                        </li>
                        <li className="sidebarlistItem">
                        <TimelineIcon className='sidebarIcon'/>
                               Analytics
                        </li>
                        <li className="sidebarlistItem">
                        <AssessmentIcon  className='sidebarIcon'/>
                              Reports
                        </li>
                </ul>
           </div>
       </div>
    </div>
  )
}
