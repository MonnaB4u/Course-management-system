import React, { useState } from 'react';
import JoinCourses from './JoinedCourses';
import { useHistory } from 'react-router-dom';
import './JoinedCourses.css'
import { useEffect } from 'react';
const JoinedCoursesdata = () => {

    
    const [data, setData] = useState([])
    // const dataSlice = data.slice(0, 3);
    // const [sliceData, setSliceData] = useState(dataSlice[0]);

    useEffect(() => {
        fetch('http://localhost:5000/courseall')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

  

    // const handleCoure = (data) => {
    //     setSliceData(data)
    // }

    // const id = data.id
    // const history = useHistory()

    // const handelRoute = (() => {

    //     history.push(`/insidecourse/${id}`)

    // });

    // console.log(data);

    return (
        <div className="container">
            <h3 className="yac">your all courses</h3>
            <div className="row">
                {
                    data.map(data => <JoinCourses data={data}  key={data.id} ></JoinCourses>)
                } 
                </div>

        </div>
    );
};

export default JoinedCoursesdata;
