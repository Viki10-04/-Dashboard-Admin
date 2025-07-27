import './WidgetSmall.css'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {NewMembers} from './../../Data'


export default function WidgetSmall() {
  return (
    <div className="WidgetSmall">
        <spa className="WidgetSmallTitlte">New Join Members</spa>
        <ul className="WidgetSmallList">
          {NewMembers.map(user => (
            <li className="WidgetSmallItem" key={user.key}>
                <img src={user.img} alt="profile" className='WidgetSmallImg'/>
                <div className="WidgetSmallUser">
                  <span className="WidgetSmallUserName">{user.username}</span>
                  <spam className="WidgetSmallUserTitle">{user.title}</spam>
                </div>
                <button className="WidgetSmallBtn"><VisibilityIcon className='WidgetSmallIcon'/></button>
            </li>
          ))}
        </ul>
    </div>
  )
}
