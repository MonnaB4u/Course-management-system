import React from 'react';
import './AdminDashBoard.css'

const AdminDashBoard = () => {
    return (
        <div className="col-md-3 dash"
            style={
                {
                    minHeight: '100vh',
                    minWidth: '260px'
                }
            }>
            <ul class="mb-2">

                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link mt-5"
                        aria-current="page"
                        href="/">Home</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/upload-Sullabus">Update syllabus</a>
                </li>

                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/upload-assignment">Upload Assignment</a>
                </li>
                
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/upload-grades">Upload Students Grade</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/upload-notification">Give your Notification</a>
                </li>
                {/* <li class="nav-item">
                    <a style={
                            {color: 'black'}
                        }
                        class="nav-link "
                        aria-current="page"
                        href="/contact">Send Message to the syudents Email</a>
                </li> */}

                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="//contact">Send Message to the syudents Email</a>
                </li>

            </ul>
        </div>
    );
};

export default AdminDashBoard;