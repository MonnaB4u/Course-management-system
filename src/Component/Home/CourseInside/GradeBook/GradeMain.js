import React, { useEffect, useState } from 'react';

const GradeMain = () => {
    const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/Gradeeall')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>


            <li class="list-group-item active" aria-current="true" > Grade This Week</li>

            {
                Data.map((each, index) =>
                    <>
                        <ul class="list-group">
                            
                            <li class="list-group-item" aria-current="true"> {each.assignmentNumber} you got {each.grades} out of {each.OutOfGrade} </li>

                        </ul>


                    </>
                )
            }

        </div>
    );
};

export default GradeMain;
