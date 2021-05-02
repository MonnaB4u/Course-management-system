import React from 'react';
import DashBoard from '../Home/CourseInside/DashBoard/DashBoard';
import Navbar2 from '../Home/CourseInside/Navbar2/Navbar2';
import SendSMSMain from './SendSMSMain';

const SendSMS = () => {
    return (
        <div className="row">
        <div className="col-md-3 ml-5 m-3">
            <Navbar2></Navbar2>
            <DashBoard></DashBoard>
        </div>

        <div className="col-md-7 ml-5 m-3 mt-5">
          <SendSMSMain></SendSMSMain>
        </div>
    </div>
    );
};

export default SendSMS;