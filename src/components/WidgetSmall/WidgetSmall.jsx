import './WidgetSmall.css'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function WidgetSmall() {
  return (
    <div className="WidgetSmall">
        <spa className="WidgetSmallTitlte">New Join Members</spa>
        <ul className="WidgetSmallList">
            <li className="WidgetSmallItem">
                <img src="./images/profile.jpg" alt="profile" className='WidgetSmallImg'/>
                <div className="WidgetSmallUser">
                  <span className="WidgetSmallUserName">Vida</span>
                  <spam className="WidgetSmallUserTitle">web developer</spam>
                </div>
                <button className="WidgetSmallBtn"><VisibilityIcon className='WidgetSmallIcon'/></button>
            </li>
        </ul>
    </div>
  )
}
