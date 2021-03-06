import React from 'react'
import StorefrontIcon from '@material-ui/icons/Storefront';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ComputerIcon from '@material-ui/icons/Computer';
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__category">
                <StorefrontIcon />
                <p>Clothing</p>
            </div>
            <div className="sidebar__category">
                <PhoneAndroidIcon />
                <p>Phones</p>

            </div>
            <div className="sidebar__category">
                <CameraAltIcon />
                <p>Camera</p>

            </div>
            <div className="sidebar__category">
                <ComputerIcon />
                <p>Computer</p>

            </div>
        </div>
    )
}

export default Sidebar
