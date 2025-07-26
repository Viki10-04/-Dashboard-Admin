import './SidBar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

export default function SidBar() {
  return (
    <div className="SideBar">
      <div className="SideBarWrapper">
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Dashboard</h3>
          <ul className="SideBarList">
            <Link to='/' className='Link'><li className="SideBarListItem"><LineStyleIcon className="SideBarIcon" /> Home</li></Link>
            <li className="SideBarListItem"><TimelineIcon  className="SideBarIcon" /> Analytics</li>
            <li className="SideBarListItem"><TrendingUpIcon className="SideBarIcon" /> Sales</li>
          </ul>
        </div>

        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Quick Menu</h3>
          <ul className="SideBarList">
            <Link to='/Users' className='Link'><li className="SideBarListItem"><PermIdentityIcon className="SideBarIcon" /> Users</li></Link>
            <Link to='/NewUser' className='Link'><li className="SideBarListItem"><PermIdentityIcon  className="SideBarIcon" /> New Users</li></Link>
            <Link to='/Products' className='Link'><li className="SideBarListItem"><StorefrontIcon className="SideBarIcon" /> Products</li></Link>
            <li className="SideBarListItem"><AttachMoneyIcon className="SideBarIcon" /> Transactons</li>
            <li className="SideBarListItem"><BarChartIcon className="SideBarIcon" /> Reports</li>
          </ul>
        </div>

        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Notifications</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem"><MailOutlineIcon className="SideBarIcon" /> Mail</li>
            <li className="SideBarListItem"><DynamicFeedIcon  className="SideBarIcon" /> Feedback</li>
            <li className="SideBarListItem"><ChatBubbleOutlineIcon className="SideBarIcon" /> Messages</li>
          </ul>
        </div>

        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Staff</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem"><WorkOutlineIcon className="SideBarIcon" /> Manage</li>
            <li className="SideBarListItem"><TimelineIcon  className="SideBarIcon" /> Analytics</li>
            <li className="SideBarListItem"><ReportIcon className="SideBarIcon" /> Reports</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
