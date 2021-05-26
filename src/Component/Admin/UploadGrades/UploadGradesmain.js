import React from 'react';
import Navbar2 from '../../Home/CourseInside/Navbar2/Navbar2';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import UploadGrades from './UploadGrades';


const UploadGradesmain = () => {
    return (
        <div className="row">
            <Navbar2></Navbar2>
            <div className="row">

                <div className=" col-md-3  m-3">

                    <AdminDashBoard></AdminDashBoard>
                </div>

                <div className="col-md-6 ml-5 m-3 mt-5">
                   <UploadGrades></UploadGrades>
                </div>

            </div>

        </div>
    );
};

export default UploadGradesmain;