import React, { useState } from 'react'
import './user.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {userRows} from '../../Dummy'
import { Link } from 'react-router-dom';
export default function UserList() {

  const [data,setData]=useState(userRows);
  const handleDelete=(id)=>{
    const update=(data.filter(item=>item.id!==id));
   console.log(update)//[{t},{t},{f},{t}]
    for (let i=0;i<update.length;i++){//1 to update-delete
      
      update[i].id=i+1;// id of 2 will get from 3
      
    }

   setData(update)

  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 150,renderCell:(params)=>{
      return(
        <div className="userListUser" >
          <img  className="userImg" src={params.row.avatar} alt="img"/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    }, {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 200,
    },{
      field:"active",
      headerName:"Active",
      width:150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
          <button className='userButton'>Edit</button>
          </Link>
          
          <DeleteIcon  className='userDelete' onClick={()=>{handleDelete(params.row.id)}}/>
          </>
        )
    
      }
    
    }
    
    
  ];
  
 
  return(
    <div className='userlist'>
    <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
       
        checkboxSelection
      />

    </div>
  )
}
