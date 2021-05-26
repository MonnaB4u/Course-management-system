import React, { useEffect, useState } from 'react';

const Assignment = () => {

    const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allAssignments')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>


            <li class="list-group-item active" aria-current="true" > Assignment for This Week</li>

            {
                Data.map((each, index) =>
                    <>
                         <ul class="list-group">
                            <li class="list-group-item" aria-current="true">{each.ChapterName} :------ {each.assignmentPlan} </li>

                        </ul>


                    </>
                )
            }

        </div>
    );
};

export default Assignment;