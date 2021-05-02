import React from 'react';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div className="col-md-3  dash"
            style={
                {
                    minHeight: '100vh',
                    minWidth: '250px'
                }
            }>
            <ul class=" mb-2">

                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/">Home</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/syllabus">Course syllabus</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/subAssign">Submit Assignment</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/GradeBook">Grade Book</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/notification">Notification</a>
                </li>
                {/* <li class="nav-item">
                    <a style={
                            {color: 'black'}
                        }
                        class="nav-link "
                        aria-current="page"
                        href="/contact">Send Message in the group</a>
                </li> */}
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/contact">Send Message in the group</a>
                </li>
            </ul>
        </div>
    );
};

export default DashBoard;
