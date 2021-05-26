import React from 'react';
import { useForm } from 'react-hook-form';

const UploadGrades = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/addGrades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(success => {
                if (success) {
                    alert("Uploaded successfully");
                }
            })

    }

    return (
        <div className="row ml-5">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" {...register('assignmentNumber', { required: true })} name="assignmentNumber" placeholder="input Assignment Number" className="form-control" />

                </div>

                <div className="form-group">
                    <input type="number" {...register('grades', { required: true })} name="grades" placeholder="input Gardes" className="form-control" />

                </div>

                <div className="form-group">
                    <input type="number" {...register('OutOfGrade', { required: true })} name="OutOfGrade" placeholder="input Out Of Gardes" className="form-control" />

                </div>




                <div className="form-group text-centet ml-0 mt-5">
                    <button type="submit" class="btn btn-warning">Send</button>
                </div>
                
            </form>


        </div>
    );
};

export default UploadGrades;