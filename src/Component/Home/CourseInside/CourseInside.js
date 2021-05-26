import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData'
import Navbar2 from './Navbar2/Navbar2';
import './CourseInside.css'
import DashBoard from './DashBoard/DashBoard';
import Classes from './Classes/Classes';

const CourseInside = () => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/courseall')
    //         .then(res => res.json())
    //         .then(Data => setData(Data))
    // }, [])

    const { courseID } = useParams()
    const courseData = FakeData.find(data => data.id.toString() === courseID);

    // const visitePlace = PlaceInfoData.find(selectedPlace => selectedPlace.id.toString() === id);

    // console.log(data)

    return (

        <div className="row">

            <div className="col-md-3 m-3">
                <Navbar2></Navbar2>
                <DashBoard></DashBoard>
            </div>

            <div className="col-md-3 m-5 mt-5 card2">
        
                        <div class="card-body">
                            <h5 class="card-title">Teacher Name: {
                                courseData.teachersName
                            }</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Course name: {
                               courseData.name
                            }</h6>
                        </div>
            
            </div>
            {/* {
                courseData.map((each, index) =>
                    <>
                        <div className="col-md-3 m-5 mt-5 card2">

                            <div class="card-body">
                                <h5 class="card-title">Teacher Name: {
                                    each.teachersName
                                }</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Course name: {
                                    each.name
                                }</h6>
                            </div>

                        </div>

                    </>
                )
            } */}
        </div>
    );
};

export default CourseInside;
