import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Navbar2 from '../Navbar2/Navbar2';
import Assignment from './Assignment';

const AssignmentMain = () => {
    return (
        <div className="row">
            <div className="col-md-3 ml-5 m-3">
                <Navbar2></Navbar2>
                <DashBoard></DashBoard>
            </div>

            <div className="col-md-7 ml-5 m-3 mt-5">
               <Assignment></Assignment>
            </div>
        </div>
    );
};

export default AssignmentMain;