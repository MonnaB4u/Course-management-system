import React from 'react';
import JoinedCourses from './JoinedCourses/JoinedCourses';
import JoinedCoursesdata from './JoinedCourses/JoinedCoursesdata';
import Navbar from './Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div >
            <Navbar></Navbar>
            <JoinedCoursesdata></JoinedCoursesdata>
        </div>
    );
};

export default Header;