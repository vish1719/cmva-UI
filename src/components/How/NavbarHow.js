import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';

function NavbarHow() {
    return (
        <>
            <div id="services" className="pricing" >
                {/* <div className="section-title">
        <h2>Pricing & Plans</h2>
      </div> */}
                <div className="container">
                    <div className="page"  >
                        <nav className="page__menu menu" style={{backgroundColor:"#58b958"}}>
                            <ol className="menu__list r-list">
                                <li className="menu__group"><Link to="/how-it-works" className="menu__link r-link text-underlined"><CategoryTab/></Link></li>
                                <li className="menu__group"><Link to="/process" className="menu__link r-link text-underlined"><CategoryTab1/></Link></li>
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

export default NavbarHow

export const CategoryTab = () => {
	return(
		<Box >
			<i style={{ fontSize: 40 }} className="icofont-settings-alt"></i>
			<p style={{marginTop:"14px", fontSize:"14px"}}> How It Works?</p>

		</Box>
	)
}
export const CategoryTab1 = () => {
	return(
		<Box>
			
			<i style={{ fontSize: 40, paddingBottom:"115px"}} className="icofont-cloud-refresh"></i>
			<p style={{marginTop:"14px", fontSize:"14px"}}> Our Process</p>

		</Box>
	)
}
