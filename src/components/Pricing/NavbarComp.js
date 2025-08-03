import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Seo from "../Seo";

function NavbarComp() {
    const location = useLocation();

    let seoProps = {
        title: "ConnectMyVA",
        description: "Explore our pricing and subscription options.",
        path: location.pathname
    };

    if (location.pathname === "/pricing-plans") {
        seoProps = {
            title: "Pricing Plans | ConnectMyVA",
            description: "Check out our pricing plans for virtual assistant services.",
            path: "/pricing-plans"
        };
    } else if (location.pathname === "/monthly-subscription-plans") {
        seoProps = {
            title: "Monthly Subscription Plans | ConnectMyVA",
            description: "Discover our monthly virtual assistant subscription plans.",
            path: "/monthly-subscription-plans"
        };
    }

    return (
        <>
            <Seo {...seoProps} />

            <div id="services" className="pricing">
                <div className="container">
                    <div className="page">
                        <nav className="page__menu menu" style={{ backgroundColor: "#fff" }}>
                            <ol className="menu__list r-list">
                                <li className="menu__group">
                                    <Link to="/pricing-plans" className="menu__link r-link text-underlined">
                                        <CategoryTabNav />
                                    </Link>
                                </li>
                                <li className="menu__group">
                                    <Link to="/monthly-subscription-plans" className="menu__link r-link text-underlined">
                                        <CategoryTabNav1 />
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarComp;



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
