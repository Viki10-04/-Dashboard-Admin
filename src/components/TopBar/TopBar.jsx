import './TopBar.css';
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';




export default function TopBar() {
  return (
    <div>
      <div className="topBar">
        <div className="topBarWrapper">
          
          <div className="topLeft">
            <span className="logo">Admin Panel</span>
          </div>

          <div className="topRight">
            <div className="topBarIconsContainer">
              <div className="notificationsIcon">
                <NotificationsIcon />
                <span className="topIconBadge">2</span>
              </div>
              
              <div className="notificationsIcon">
                <LanguageIcon />
                <span className="topIconBadge">2</span>
              </div>

              <div className="notificationsIcon">
                <SettingsIcon />
              </div>
              <img src="/images/profile.jpg" alt="profile" className='topAvatar'/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
