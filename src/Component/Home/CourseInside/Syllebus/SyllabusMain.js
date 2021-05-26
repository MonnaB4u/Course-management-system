import React, { useEffect, useState } from 'react';

const SyllabusMain = () => {

    const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/syllabusall')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])


    return (
        <div>
             <li class="list-group-item active" aria-current="true" > Syllabus for This Week</li>
            {
                Data.map((each, index) =>
                    <>
                        {/* <div className="row d-flex  p-3"> */}
                        {/* <div className="no-match text-center m-3">
                           <h4>{each.name}</h4>
                            <h5>{each.destinationName}</h5>
                            <p>{each.FeedBack}</p>
                            <div className="signuture text-right mr-5">
                            <h5>{each.email}</h5>
                            </div>
                        </div> */}
                        <ul class="list-group">
                            <li class="list-group-item" aria-current="true">{each.day} :------ {each.syllabusPlan} </li>

                        </ul>

                    </>
                )
            }


        </div>
    );
};

export default SyllabusMain;