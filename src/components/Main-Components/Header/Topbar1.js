import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {authCheckState, authLogout} from '../../UserAuth/store/actions/auth'

class Topbar1 extends Component {

    componentDidMount(){
        this.props.onLoad()
    }
    render() {
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
                                                
                                                {/* {
                                                this.props.authenticated ? (
                                                    <Link ><button type="button" onClick={()=>this.props.logout()} className="btn btn-dark btn-sm ms-2 my-0">Logout</button></Link>)
                                                    :(
                                                        <> */}
                                                        <Link to={"/faq"}><button type="button" className="btn btn-outline-dark btn-sm my-0">FAQ</button></Link>
                                                <Link to={"/refer"}><button type="button" className="btn btn-outline-dark btn-sm mx-2 my-0">Refer</button></Link>
                                                   {/* <Link to={"/login"}><button type="button" className="btn btn-dark btn-sm ms-2 my-0">Login</button></Link>
                                                    <Link to={"/signup"}><button type="button" className="btn btn-dark btn-sm mx-1 my-0">Sign up</button></Link>
                                                     </>
                                                    )
                                                }
                                                */}
                                            </p>

                                        </div>
                                        {this.props.children}
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
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.token !== null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(authCheckState()), 
        logout: () => dispatch(authLogout()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (Topbar1);
