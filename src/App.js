/* eslint-disable */
import React from 'react'; 
// import AboutSec from "./components/Home/AboutSec";
// import ContactSec from "./components/Home/ContactSec";
import IndustrySec from "./components/Home/IndustrySec";
// import FaqSec from "./components/Home/FaqSec";
import Footer from "./components/Main-Components/Footer";
import Header2 from "./components/Main-Components/Header/Header2";
import HeroSec from "./components/Home/HeroSec";
import PricingHomeSec from "./components/Home/PricingHomeSec";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from "./components/TestimonialSlider";
// import PortfolioSec from "./components/Home/PortfolioSec";
// import ServicesSec from "./components/Home/ServicesSec";
// import TeamSec from "./components/Home/TeamSec";
import Topbar1 from "./components/Main-Components/Header/Topbar1";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Contact5 from "./components/Contact/Contact";

// import { Redirect } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Navigate,
  withRouter,
  Link
} from "react-router-dom";
import HomeSec1 from "./components/Home/HomeSec1";
import HomeSec2 from "./components/Home/HomeSec2";
import HowWeWorkSec from "./components/Home/HowWeWorkSec";

import ShowContacts from "./components/Contact/contact2";
//import Hyperlinks2 from "./components/Main-Components/Hyperlinks/Hyperlinks2"; 
import AboutSec1 from "./components/About-components/AboutSec1";
import DiffSec from "./components/About-components/DiffSec";
import HireSec from "./components/About-components/HireSec";
import Banner from "./components/Main-Components/Banner";
import TradeSec from "./components/About-components/TradeSec";
import Faq from "./components/FAQ/Faq";

import Pricing from "./components/Pricing/Pricing";
//import PriceSec1 from "./components/Pricing/PriceSec1";

import How from "./components/How/how";
import BookKeeping from "./components/Services/BookKeeping";
import LinkedIn from "./components/Services/Linkedin";
import RealEstate from "./components/Industry/RealEstate";
import PriceBanner from "./components/Pricing/PricingBanner";
import Business from "./components/BusinessSupport/Business";
import Executive from "./components/Services/Executive";
import Digital from "./components/Services/Digital";

import Website from "./components/Services/Website";
import Staff from "./components/Industry/Staff";
import Customer from "./components/Industry/Customer";
import Travel from "./components/Industry/Travel";
import Event from "./components/Industry/Event";
import Ecommerce from "./components/Industry/Ecommerce";
import Personal from "./components/Services/Personal";
import Education from "./components/Industry/Education";
import Healthcare from "./components/Industry/Healthcare";
import Sales from "./components/Industry/Sales";
import Refund from "./components/Policy/Refund";

//import PricingComp from "./components/Pricing/PricingComp";
//import ContactBanner from "./components/Contact/ContactBanner";

import NavbarComp from "./components/Pricing/NavbarComp";
import SubsBanner from "./components/Pricing/SubsBanner";
import How1 from "./components/How/how1";
import NavbarHow from "./components/How/NavbarHow";
import ProcessBanner from "./components/How/ProcessBanner";
import HowBanner from "./components/How/HowBanner";
//import ContactForm from "./components/Home/ContactForm";
import Hyperlinks3 from "./components/Main-Components/Hyperlinks/Hyperlinks3";
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import Paypal from "./components/UserAuth/Paypal";
import Quote from "./components/Contact/quote";
import Copyright from "./components/Policy/Copyright";
import Privacy from "./components/Policy/Privacy";
import Price1 from "./components/Pricing/price1";
import AdHoc from "./components/Pricing/AdHoc";
import Refer from "./components/Refer/Refer";
import Sign_up from "./components/Pricing/Sign_up";
import { Component } from "react";
import { connect } from "react-redux";

import { authCheckState } from "./components/UserAuth/store/actions/auth";
import Header3 from "./components/Main-Components/Header/Header3";
import Footer2 from "./components/Main-Components/Footer2";
import Top2 from "./components/Main-Components/Header/Top2";
import Chat from "./components/Contact/Chat";
import Callback from "./components/Contact/Callback";
import Emailsent from "./components/UserAuth/Emailsent";
import Emailconfirm from "./components/UserAuth/Emailconfirm";
import ViewContacts from "./components/Profile/ViewContacts";
// import New from "./components/Contact/new";

import Protected from "./components/Main-Components/Header/Protected";
import Public from "./components/Main-Components/Header/Public";
import Update from "./components/Profile/Update";
import Plans from "./components/Profile/Plans";
import Dashboard from "./components/Profile/Dashboard";
// import * as actions from "./components/UserAuth/store/actions/auth"
import { Helmet } from "react-helmet";
import { AuthProvider } from './context/authcontext';
import NotFound from "./components/NotFound";
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogLogin from './components/Blog/BlogLogin';
import BlogAdmin from './components/Blog/BlogAdmin';
import BlogEditor from './components/Blog/BlogEditor';
import AuthRoute from './components/AuthRoute';
import GuestPostForm from './components/Blog/GuestPostForm';






const RemoveTrailingSlash = withRouter(({ location }) => {
  if (location.pathname !== "/" && location.pathname.endsWith("/")) {
    const newPath = location.pathname.slice(0, -1);
    return <Redirect to={newPath + location.search} />;
  }
  return null;
});





class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }


  render() {


    return (
      <>
       
       <AuthProvider>
        <Router >
       
        <Route component={RemoveTrailingSlash} />
        <Header2 />


        
          <Switch>
          <Route exact path="/blog" component={BlogList} />
<Route exact path="/blog/login" component={BlogLogin} />
<AuthRoute exact path="/blog/admin" component={BlogAdmin} />
<AuthRoute exact path="/blog/create" component={BlogEditor} />
<AuthRoute exact path="/blog/:slug/edit" component={BlogEditor} />
<Route exact path="/blog/guest-post" component={GuestPostForm} />
<Route exact path="/blog/:slug" component={BlogPost} />


        
          


            <Route exact path="/" render={() => {
              return (
                <>
                  <HeroSec />
                  <TestimonialSlider />
                  <main id="main">
                    <HomeSec1 />
                    <HomeSec2 />
                    {/* <AboutSec /> */}
                    {/* <ListsSec /> */}
                    <IndustrySec />
                    <HowWeWorkSec />
                    <PricingHomeSec />
                   {/* <ContactForm />
                     <ServicesSec />
                <PortfolioSec />
                <TeamSec />
                <FaqSec />
                <ContactSec /> */}
                    <div className="quote-grp">
                      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                      {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                    </div>
                    <div className="quote-grp">

                     {/* <Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                    </div>
                  </main>
                </>)
            }}>
            </Route>
            
            



            <Redirect from="/about" to="/about-us" />
            <Route exact path="/about-us">
              {/* <Template/> */}
              <Banner />
              <AboutSec1 />
              <TradeSec />
              <HireSec />
              <DiffSec />
              <Hyperlinks3 />

              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                 {/* <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>

            </Route>
           



            {/* <Route exact path="/contact"> */}
             
            {/* </Route> */}
            <Redirect from="/contact2" to="/contact-us" />
            <Route exact path="/contact-us">
  <Contact5 />
  {/* <ShowContacts /> */}
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
    </div>
    <div className="quote-grp">
      {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
    </div>
  </>
</Route>



            <Route exact path="/faq">
              <Faq />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>

            
            <Redirect from="/pricing1" to="/pricing-plans" />
            <Route exact path="/pricing-plans">
  <PriceBanner />
  <NavbarComp />
  <Price1 />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/* <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link> */}
    </div>
    <div className="quote-grp">
      {/* <Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link> */}
    </div>
  </>
</Route>


<Redirect from="/pricing2" to="/monthly-subscription-plans" />
<Route exact path="/monthly-subscription-plans">
  <SubsBanner />
  {/* <ContactBanner /> */}
  <NavbarComp />
  <Pricing />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
    </div>
    <div className="quote-grp">
      {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
    </div>
  </>
</Route>


<Redirect from="/how" to="/how-it-works" />
            <Route exact path="/how-it-works">
  <HowBanner />
  <NavbarHow />
  <How1 />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/* <Link to={{ pathname: "tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link> */}
    </div>
    <div className="quote-grp">
      {/* <Link to={{ pathname: "https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link> */}
    </div>
  </>
</Route>




            <Route exact path="/process">
              <ProcessBanner />
              <NavbarHow />
              <How />
              {/* <How1 /> */}
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>

            </Route>
            <Redirect from="/bookkeeping" to="/bookkeeping-services" />
            <Route exact path="/bookkeeping-services">
              <BookKeeping />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            

            <Redirect from="/linkedin" to="/linkedin-assistance" />
            <Route exact path="/linkedin-assistance">

              <LinkedIn />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            
            <Redirect from="/realEstate" to="/real-estate-services" />
            <Route exact path="/real-estate-services">
  <RealEstate />
  <>
    <div className="quote-grp">
      <Link to="/quote" className="quote"><span>Get a free quote</span></Link>
      {/*<Link to={{ pathname: "tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
    </div>
    <div className="quote-grp">
      {/*<Link to={{ pathname: "https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link>*/}
    </div>
  </>
</Route>



<Redirect from="/business" to="/business-services" />

            <Route exact path="/business-services">

              <Business />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Redirect from="/executive" to="/executive-secretarial-task" />
            <Route exact path="/executive-secretarial-task">
              <Executive />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            
            <Redirect from="/digital" to="/digital-services" />
            <Route exact path="/digital-services">

              <Digital />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            
           
            <Redirect from="/website" to="/website-services" />
            <Route exact path="/website-services">
              <Website />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Redirect from="/staff" to="/staffing-recruitment-service" />
            <Route exact path="/staffing-recruitment-service">
  <Staff />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/* <Link to={{ pathname: "tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link> */}
    </div>
    <div className="quote-grp">
      {/* <Link to={{ pathname: "https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link> */}
    </div>
  </>
</Route>


<Redirect from="/customerServices" to="/customer-services" />
<Route exact path="/customer-services">
  <Customer />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/* <Link to={{ pathname: "tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link> */}
    </div>
    <div className="quote-grp">
      {/* <Link to={{ pathname: "https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link> */}
    </div>
  </>
</Route>


<Redirect from="/travel" to="/travel-vacation-rentals-service" />
            <Route exact path="/travel-vacation-rentals-service">
  <Travel />
  <>
    <div className="quote-grp">
      <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
      {/* <Link to={{ pathname: "tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link> */}
    </div>
    <div className="quote-grp">
      {/* <Link to={{ pathname: "https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i className="icofont-chat"></i></span></Link> */}
    </div>
  </>
</Route>



            <Route exact path="/entertainment-and-event-management">
              <Event />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                {/*  <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                {/*  <Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/retail-and-ecommerce">
              <Ecommerce />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                 {/* <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                 {/* <Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/personal-tasks">
              <Personal />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                 {/* <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/education-and-training">
              <Education />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/healthcare-and-fitness">
              <Healthcare />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/sales-and-marketing">
              <Sales />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                  {/*<Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>

            <Redirect from="/refer" to="/refer-a-friend" />
            <Route exact path="/refer-a-friend">
  <Refer />
</Route>


<Redirect from="/refund" to="/refund-policy" />
<Route exact path="/refund-policy">
  <Refund />
</Route>




            <Route exact path="<AdHoc />">
              <AdHoc />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>
            {/* <Route exact path="/signup">
              <Sign_up />
            </Route> */}
            <Route exact path="/signup">
              <Public Cmpo={Sign_up} />
            </Route>

            <Route exact path="/login">
              <Public Cmpo={Login} />
            </Route>

            <Route exact path="/quote">
              <Quote />
            </Route>

            <Route exact path="/emailsent">
              <Emailsent />
            </Route>
            <Route exact path="/emailconfirm">
              <Emailconfirm />
            </Route>

            <Route exact path="/chat">
              <Chat />
            </Route>

            <Route exact path="/callback">
              <Callback />
            </Route>

            <Route exact path="/paypal">
              <Paypal />
            </Route>
            <Route exact path="/copyright">
              <Copyright />
            </Route>
            <Redirect from="/privacy" to="/privacy-policy" />

            <Route exact path="/privacy-policy">
  <Privacy />
</Route>





            {/* below structure will help to not access module after logged in */}

            {/* {
            this.props.authenticated ? (<Redirect to="/"/>) : (<><Route exact path="/viewcontacts">
            <ViewContacts />
          </Route></>)
              } */}


            {/* {
            this.props.notauth ? (<Redirect to="/"/>) : (<><Route exact path="/viewcontacts">
            <ViewContacts />
          </Route></>)
              } */}

            <Route exact path="/viewcontacts">
              <Protected Cmp={ViewContacts} />
            </Route>
            <Route exact path="/update">
              <Protected Cmp={Update} />
            </Route>
            <Route exact path="/plans">
              <Protected Cmp={Plans} />
            </Route>
            <Route exact path="/dashboard">
              <Protected Cmp={Dashboard} />
            </Route>
            <Route component={NotFound} />




          </Switch>


          {
            this.props.authenticated ? (<Footer2 />) : (<Footer />)}




          <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

        </Router>
        </AuthProvider>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    authenticated: state.token !== null,
    notauth: state.token === null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(authCheckState()),
    // logout: () => dispatch(authLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
