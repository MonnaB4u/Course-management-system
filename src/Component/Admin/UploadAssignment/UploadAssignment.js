import React from 'react';
import { useForm } from 'react-hook-form';

const UploadAssignment = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/addAssignments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            
            .then(success => {
                if (success) {
                    alert("Uploaded successfully");
                }
            })

    }
    return (
        <div className="row ml-5">

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                        <input type="text" {...register('ChapterName', { required: true })} name="ChapterName" placeholder="input Chapter Name/Number" className="form-control" />
                       
                    </div>
                    

                <div className="form-group">
                    <textarea name="Description" placeholder="Please input your Assignment Plan" name="assignmentPlan" className="form-control" id="exampleFormControlTextarea1" {...register('assignmentPlan', { required: true })} rows="3"></textarea>
                </div>

                <div className="form-group text-centet ml-0 mt-5">
                    <button type="submit" class="btn btn-warning">Send</button>
                </div>
            </form>


        </div>
    );
};

export default UploadAssignment;