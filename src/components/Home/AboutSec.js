import React from 'react'

function AboutSec() {
    return (
        <>

            <section id="about" className="about">
                <div className="container">

                    <div className="row no-gutters">
                        <div className="col-lg-6 video-box">
                            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-start about-content">

                            <div className="section-title">
                                <h2>About Us</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-gift"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default AboutSec
