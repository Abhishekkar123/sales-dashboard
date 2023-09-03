import React from 'react'
import './Userid.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';
export default function User() {
  return (
    <div className='userDetail'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit USer</h1>
          <Link to="/newuser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
      <div className="userContainerTable">
        <div className="userShow"> 
        <div className="userShowTop">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="img" className="userShowImg" />
            <div className="userShowTopTitle">
                <span className="userShowUsername">  Abc def </span>
                <span className="userShowUserTitle">   software Engineer  </span>
            </div>
        </div>
        <div className="userShowBottom">
            <span className="userShowTitle">Account Detail</span>
            <div className="userShowInfo">
            <PermIdentityIcon className='userShowIcon'/>
            <span className="userShowInfoTitle">Abc@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <CalendarTodayIcon className='userShowIcon'/>
            <span className="userShowInfoTitle">10.12.1667</span>
            </div>
            <span className="userShowTitle">Contact</span>
            <div className="userShowInfo">
            <PhoneIcon className='userShowIcon'/>
            <span className="userShowInfoTitle">+1 356 456 679</span>
            </div>
            <div className="userShowInfo">
            <LocationCityIcon className='userShowIcon'/>
            <span className="userShowInfoTitle">nyc</span>
            </div>
        </div>
        
         </div>
        <div className="userUpdate">
            <span className="userUpdateProfile">Edit</span>
            <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                       <div className="userUpdatetem">
                        <label>userName</label>
                        <input type='text' placeholder='enter the name' className='userUpdateInput'/>
                       </div>
                       <div className="userUpdatetem">
                        <label>Full Name</label>
                        <input type='text' placeholder='abc' className='userUpdateInput'/>
                       </div>
                       <div className="userUpdatetem">
                        <label>Email</label>
                        <input type='text' placeholder='Abc@gmail.com' className='userUpdateInput'/>
                       </div>
                       <div className="userUpdatetem">
                        <label>phone</label>
                        <input type='text' placeholder='+1 356 456 679' className='userUpdateInput'/>
                       </div>
                       <div className="userUpdatetem">
                        <label>Address</label>
                        <input type='text' placeholder='nyc' className='userUpdateInput'/>
                       </div>
                       
                       
                    </div>
                    <div className="userUpdateRight">
                         <div className="userUpdateUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="img"  className='userUpdateImg'/>
                            <label htmlFor='file'> <PublishIcon className='userUpdateIcon'/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                         </div>
                         <button className="userUpdateButton">Update</button>
                    </div>

            </form>

        </div>
      </div>
    </div>
  )
}
