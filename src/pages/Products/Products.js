import * as React from 'react';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';
import './Products.css';
import { useState } from 'react';
import { products } from './../../Data';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function UserList() {

  const [ProductsDatas, setProductsDatas] = useState(products)

  const ProductsDelete = userID => {
    setProductsDatas(ProductsDatas.filter(user => user.id != userID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      width: 90,
    },{
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        console.log(params);
          return (
            <Link to='' >
              <div className="userListUser">
                <img src={params.row.Avatar} alt="profile" className='userListImg'/>
                {params.row.title}
              </div>
            </Link>
          )
      }
    },{
      field: 'price',
      header: 'price',
      width: 120,
    },{
      filed: 'action',
      header: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/Product/${params.row.id}`} className='link'><button className="userListEdit">Edit</button></Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => ProductsDelete(params.row.id)}/>
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows = {ProductsDatas}
        columns = {columns}
        disableSelectionOneClick
        pageSize={2}
        checkboxSelection
      />
    </div>
  )
}

