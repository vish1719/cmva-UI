import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Seo from "../Seo";

function NavbarComp() {
    return (
        <>
        <Seo
                path="/pricing-plans"
        />
            <div id="services" className="pricing" >
                {/* <div className="section-title">
        <h2>Pricing & Plans</h2>
      </div> */}
                <div className="container">
                    <div className="page"  >
                        <nav className="page__menu menu" style={{backgroundColor:"#fff"}}>
                            <ol className="menu__list r-list">
                                <li className="menu__group"><Link to="/pricing-plans" className="menu__link r-link text-underlined"><CategoryTabNav/></Link></li>
                                <li className="menu__group"><Link to="/monthly-subscription-plans" className="menu__link r-link text-underlined"><CategoryTabNav1/></Link></li>
                                {/* <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #3</a></li> */}
                            </ol>
                        </nav>
                        {/* <nav className="page__menu page__custom-settings menu">
                            <ul className="menu__list r-list">
                                <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #1</a></li>
                                <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #2</a></li>
                                <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #3</a></li>
                            </ul>
                        </nav>  */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default NavbarComp

export const CategoryTabNav = () => {
	return(
		<Box >
			<i style={{ fontSize: 40}} className="icofont-prescription"></i>
			<p style={{marginTop:"14px", fontSize:"14px"}}> Pricing &amp; Plans</p>

		</Box>
	)
}
export const CategoryTabNav1 = () => {
	return(
		<Box>
			
			<i style={{ fontSize: 40, paddingBottom:"115px"}} className="icofont-ui-calendar cal"></i>
			<p style={{marginTop:"14px", fontSize:"14px"}}> Monthly Subscription Plans</p>

		</Box>
	)
}
