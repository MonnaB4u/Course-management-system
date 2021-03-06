import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import './Navbar.css'


const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-faded">
                <h4 className="h-2" style={{'color':"white"}}>Course Master</h4>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="w-100">
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item mr-4">
                                <a class="nav-link mr-5 active" style={{'color':"white"}} aria-current="page" href="#">Home</a>
                            </li>                           
                            <li class="nav-item mr-4">
                                <a class="nav-link mr-5 navcolour" style={{'color':"white"}}  href="/notification">Notification</a>
                            </li>
                            <li class="nav-item mr-4">
                                <a class="nav-link mr-5 navcolour"  style={{'color':"white"}} href="https://vigorous-archimedes-915bbb.netlify.app/">Course List</a>
                            </li>
                            <li class="nav-item mr-3">
                                <a class="nav-link mr-5 adminbtn navcolour" style={{'color':"white"}}  href="/login">{loggedInUser.name}</a>
                            </li>
                            <li class="nav-item mr-4">
                                <a class="nav-link mr-5 navcolour adminbtn" style={{'color':"white"}}  href="/admin">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
