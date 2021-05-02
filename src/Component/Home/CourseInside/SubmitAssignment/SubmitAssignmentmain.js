import React from 'react';
import './SubmitAssignmentMain.css'

const SubmitAssignmentMain = () => {
    return (
        <div>
             <div class="card-body">
                            <h5 class="card-title">Submit Your Assignment</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Before Time up</h6>
                        </div>

            <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" name="myfile"/>
            </div>
        </div>
    );
};

export default SubmitAssignmentMain;
