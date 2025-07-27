import * as React from 'react';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';
import './UserList.css';
import { useState } from 'react';
import { userRows } from './../../Data';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = userID => {
    setUserDatas(userDatas.filter(user => user.id != userID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      width: 90,
    },{
      field: 'user',
      headerName: 'UserName',
      width: 200,
      renderCell: (params) => {
        console.log(params);
          return (
            <Link to=''>
              <div className="userListUser">
                <img src={params.row.profile} alt="profile" className='userListImg'/>
                {params.row.username}
              </div>
            </Link>
          )
      }
    },{
      field: 'email',
      header: 'Email',
      width: 200
    },{
      field: 'status',
      header: 'status',
      width: 120,
    },{
      field: 'transaction',
      header: 'Transaction',
      width: 120,
    },{
      filed: 'action',
      header: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'><button className="userListEdit">Edit</button></Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => userDelete(params.row.id)}/>
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows = {userDatas}
        columns = {columns}
        disableSelectionOneClick
        pageSize={2}
      />
    </div>
  )
}

