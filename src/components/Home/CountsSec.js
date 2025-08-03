import React from 'react'

function CountsSec() {
    return (
        <>
            <section className="counts section-bg">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                            <div className="count-box">
                                <i className="icofont-simple-smile" styles="color: #20b38e;"></i>
                                <span data-toggle="counter-up">232</span>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <i className="icofont-document-folder" styles="color: #c042ff;"></i>
                                <span data-toggle="counter-up">521</span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
                            <div className="count-box">
                                <i className="icofont-live-support" styles="color: #46d1ff;"></i>
                                <span data-toggle="counter-up">1,463</span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <div className="count-box">
                                <i className="icofont-users-alt-5" styles="color: #ffb459;"></i>
                                <span data-toggle="counter-up">15</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </section>
        </>
    )
}

export default CountsSec
