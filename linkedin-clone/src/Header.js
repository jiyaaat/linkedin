import React from 'react';
import"./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user =useSelector(selectUser);
  const dispatch=useDispatch();
  const logoutOfApp= () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      
      <div className="header_left">
        <img src={"174857.png"}alt=""/>
        <div className="header_search">
            <SearchIcon/>
            <input placeholder='Search' type="text"/>
        </div>

      </div>
      <div className="header_right">
        <Headeroption Icon={HomeIcon} title="Home"/>
        <Headeroption Icon={SupervisorAccountIcon} title="My Network"/>
        <Headeroption Icon={BusinessCenterIcon} title="Jobs"/>
        <Headeroption Icon={ChatIcon} title="Messaging"/>
        <Headeroption Icon={NotificationsIcon} title="Notification"/>
        <Headeroption avatar='{user.photoUrl}' title="me" onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header; 