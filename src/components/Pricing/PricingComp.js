/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComp from './NavbarComp'
import Pricing from './Pricing'
import PriceBanner from './PricingBanner'
import Contact from '../Contact/Contact'
import ContactBanner from '../Contact/ContactBanner'
import Seo from "../Seo";

function PricingComp() {
  return (
    <>
    
      <Router>
        <Switch>
          <Route exact path="/pricing-plans">
            <PriceBanner />
            <NavbarComp/>
            <Pricing />
          </Route>
          
          
          

          
          <Route exact path="/monthly-subscription-plans">
            <ContactBanner />
            <NavbarComp/>
            <Contact />
          </Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default PricingComp
