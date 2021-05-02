import React, { useState, useParams } from 'react';
import { useHistory } from 'react-router-dom';
import './JoinedCourses.css'

const JoinCourses = (props) => {
    const { name, id, teachersName, semesterYears } = props.data

    const history = useHistory()

    const handelRoute = (() => {

        history.push(`/insidecourse/${id}`)

    });
  
    return (
      

        <div class="cards card1 mt-4">
            <div className="img">
                <img className="img-fluid" src="" alt="" />
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    {name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Teacher:- {teachersName}</h6>
                <p class="card-text">Year: {semesterYears}</p>
                <button onClick={() => handelRoute()} class="btn btn-primary">start</button>
                
            </div>
            
        </div>


    );
};

export default JoinCourses;
