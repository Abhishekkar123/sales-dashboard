import React from 'react'
import './newuser.css'
export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form  className="newUserForm">
        <div className="newUserItem">
            <label >UserName</label>
            <input type='text' placeholder='abc'/>
        </div>
        <div className="newUserItem">
            <label >full name</label>
            <input type='text' placeholder='abc def'/>
        </div>
        <div className="newUserItem">
            <label >Email</label>
            <input type='email' placeholder='abc@gmail.com'/>
        </div>
        <div className="newUserItem">
            <label >password</label>
            <input type='password' placeholder='password'/>

        </div>
        <div className="newUserItem">
            <label >Phone</label>
            <input type='text' placeholder='+1 3457 3457'/>
        </div>
        <div className="newUserItem">
            <label >Address</label>
            <input type='text' placeholder='nyc'/>
        </div>
        <div className="newUserItem">
            <label >gender</label>
            <div className="newUserGender">
        <input type='radio' name="gender" id="male" value="male"/>
             <label htmlFor="male">Male</label>
             <input type='radio' name="gender" id="female" value="female"/>
             <label htmlFor="female">Female</label>
             <input type='radio' name="gender" id="other" value="other"/>
             <label htmlFor="other">Other</label>
             </div>
        </div>
        <div className="newUserItem">
        <label >Active</label>  
        <select name="active" id="active" className="newUserSelect">
           <option value="yes">Yes</option>
           <option value="no">No</option>
        </select>
        </div>
         
      </form>
      <button className="newUserButton">Create</button>     
    </div>
  )
}
