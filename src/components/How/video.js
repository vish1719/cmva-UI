import React from 'react'
import ReactPlayer from 'react-player';

function Video() {
    return (
        <>
           <section id="about" className="video" styles="padding:0px 0px">
                <div className="container">
                

                    <div className="row ">
                    <div className="col-lg-2 ">
                    

                    </div>
                        <div className="col-lg-8 video-box iframe-container1">
                            {/* <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            <a href="https://youtu.be/ql3FC0bEAbw" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ql3FC0bEAbw" title="YouTube video player" SameSite="Lax" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            {/* <ReactPlayer url="https://youtu.be/ql3FC0bEAbw" controls={true} /> */}
                            <div className='player-wrapper player-wrapper1'>
                                <ReactPlayer
                                    className='react-player'
                                    url='https://youtu.be/ql3FC0bEAbw'
                                    width='100%'
                                    height='100%'
                                    controls={true}
                                />
                            </div>
                        </div>

                        <div className="col-lg-2 ">

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Video
