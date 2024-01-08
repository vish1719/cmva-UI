import React from 'react'

function Topbar1() {
    return (
        <>
            <header >
                <div className="header-area ">
                    <div className="header-top_area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header_top_wrap d-flex justify-content-between align-items-center">
                                        <div className="text_wrap">
                                            {/* <p><span><button type="button" class="btn btn-dark btn-sm mb-1">Refer a Friend</button></span> <span></span></p> */}
                                        </div>
                                        <div className="text_wrap">

                                            <p>
                                                <a href="/faq"><button type="button" className="btn btn-outline-dark btn-sm my-0">FAQ</button></a>
                                                <a href="#"><button type="button" className="btn btn-outline-dark btn-sm mx-2 my-0">Refer</button></a>
                                               {/* <a href="#"><button type="button" className="btn btn-dark btn-sm ms-2 my-0">Login</button></a>
                                                <a href="#"><button type="button" className="btn btn-dark btn-sm mx-1 my-0">Sign up</button></a>*/}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Topbar1
