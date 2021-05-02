import React from 'react';

const SendSMSMain = () => {

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('Gmail', 'Monnab4u10', e.target, 'user_YoGbSLtUo3nhXwE92aRBE')
    //         .then((result) => {
    //             alert("success");
    //         }, (error) => {
    //             alert("error");
    //         });
    //     e.target.reset();
    // }

    return (

        <div>
        <section className="contact my-5 py-5">

            <div className="container">

                <div className="col-md-9 mx-auto">
                    <div className="d-flex">
                        <div>
                          
                                <h3 > Send Message</h3>
                     

                        </div>

                    </div>

                    <form  action="">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    </div>
);
    
};

export default SendSMSMain;