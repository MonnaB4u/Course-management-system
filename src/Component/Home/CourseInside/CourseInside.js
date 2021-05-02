import React from 'react';
import {useParams} from 'react-router-dom';
import FakeData from '../../FakeData/FakeData'
import Navbar2 from './Navbar2/Navbar2';
import './CourseInside.css'
import DashBoard from './DashBoard/DashBoard';
import Classes from './Classes/Classes';

const CourseInside = () => {

    const {id} = useParams()
    const data = FakeData.find(FakeData => FakeData.id == id);

    return (
    
    <div className="row">

        <div className="col-md-3 m-3">
            <Navbar2></Navbar2>
            <DashBoard></DashBoard>
        </div>

        <div className="col-md-3 m-5 mt-5 card2">
        
                        <div class="card-body">
                            <h5 class="card-title">Teacher Name: {
                                data.teachersName
                            }</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Course name: {
                                data.name
                            }</h6>
                        </div>
            
            </div>
        </div>
        );
        };
        
        export default CourseInside;
