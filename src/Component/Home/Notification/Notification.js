import React from 'react';
import DashBoard from '../CourseInside/DashBoard/DashBoard';
import Navbar2 from '../CourseInside/Navbar2/Navbar2';
import NotificationMain from './NotificationMain';

const Notification = () => {
    return (
        <div className="row">
        <div className="col-md-3 ml-5 m-3">
            <Navbar2></Navbar2>
            <DashBoard></DashBoard>
        </div>

        <div className="col-md-7 ml-5 m-3 mt-5">
           <NotificationMain></NotificationMain>
        </div>
    </div>
    );
};

export default Notification;