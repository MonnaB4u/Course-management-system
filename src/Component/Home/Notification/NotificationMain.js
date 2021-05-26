import React, { useEffect, useState } from 'react';
import './Notification.css'

const NotificationMain = () => {

    const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allNotification')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])



    return (
        // <div className="col-md-3 m-5 mt-5 card2">
        
        //                 <div class="card-body">
        //                     <h5 class="card-title">No Notification Yet</h5>
        //                     <h6 class="card-subtitle mb-2 text-muted">No available notifications yet</h6>
        //                 </div>
            
        //     </div>
        <div className="container mt-5">
        {
            Data.map((each, index) =>
                <>
                    {/* <div className="row d-flex  p-3"> */}
                    <div className="row  no-match text-center">
                       <h4>{each.message}</h4>
                       
                        {/* <h5>{each.ClassName}</h5>
                        <p>{each.FeedBack}</p> */}
                        <div className="signuture text-right mr-5">
                        <h5>{each.name}</h5>
                        </div>
                    </div>
                

                </>
            )
        }
    </div>

    );
};

export default NotificationMain;