import './product.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Chart from './../../components/Chart/Chart'
import {xAxisData} from '../../Data';
import PublishIcon from '@mui/icons-material/Publish';

export default function product() {

    const filteredData = xAxisData.filter(item =>
        ['Apr', 'May', 'Jun'].includes(item.name)
    );

  return (
    <div className='Product'>
        <div className="ProductTitleContainer">
            <h1 className="ProductTitle">Product</h1>
            <Link to='/newProduct'>
                <button className="ProductAddBtn">Create</button>
            </Link>
        </div>

        <div className="ProductTop">
            <div className="ProductTopLeft">
                <Chart title='Sale in Mounth' grid data={filteredData} datakey="Sale" className='chartt'/>
            </div>
            <div className="ProductTopRight">
                <div className="ProductInfoTop">
                    <img src="/images/profile.jpg" alt="Product" className='ProductInfoImg'/>
                    <span className="ProductName">Laptop</span>
                </div>
                <div className="ProductInfoBottom">
                    <div className="ProductInfoItem">
                        <div className="ProductInfoKey">ID: </div>
                        <div className="ProductInfoValue">123</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="ProductBottom">
            <form className="ProductForm">
                <div className="ProductFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='LopTop'/>
                    <label>In Stock</label>
                    <select id="inStock">
                        <option value="yes">Yes</option>
                        <option value="NO">nO</option>
                    </select>
                    <label>Active</label>
                    <select id="inStock">
                        <option value="yes">Yes</option>
                        <option value="NO">nO</option>
                    </select>
                </div>
                <div className="ProductFormRight">
                    <div className="ProductUploader">
                        <img src="/images/profile.jpg" alt="profile" className="ProductUploaderImg"/>
                        <label>
                            <PublishIcon/>
                        </label>
                        <input type="file" style={{display: 'none'}}/>
                    </div>
                    <button className='ProductButton'>Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}
