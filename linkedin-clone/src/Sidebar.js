import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="syed-foyez-uddin-HpZnPSLI_MQ-unsplash.jpg" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                {user.email[0]}
                </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statnumber'>2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statnumber'>2,543</p>
                </div>
                </div>
                <div className="sidebar_bottom">
                    <p>Recent</p>
                    {recentItem("reactjs")}
                    {recentItem("programming")}
                    {recentItem("softwareengineering")}
                    {recentItem("Development")}
                    {recentItem("design")}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
