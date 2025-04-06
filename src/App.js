// import AboutSec from "./components/Home/AboutSec";
// import ContactSec from "./components/Home/ContactSec";
import IndustrySec from "./components/Home/IndustrySec";
// import FaqSec from "./components/Home/FaqSec";
import Footer from "./components/Main-Components/Footer";
import Header2 from "./components/Main-Components/Header/Header2";
import HeroSec from "./components/Home/HeroSec";
import PricingHomeSec from "./components/Home/PricingHomeSec";
// import PortfolioSec from "./components/Home/PortfolioSec";
// import ServicesSec from "./components/Home/ServicesSec";
// import TeamSec from "./components/Home/TeamSec";
import Topbar1 from "./components/Main-Components/Header/Topbar1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact5 from "./components/Contact/Contact";
// import { Redirect } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import Ad_hoc from "./components/Pricing/ad_hoc";
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





class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }


  render() {


    return (
      <>

        <Router >

        <Header2 />



          <Switch>
            <Route exact path="/" render={() => {
              return (
                <>
                  <HeroSec />
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



            <Route exact path="/about">
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


            <Route exact path="/contact">
              <Contact5 />
            </Route>
            <Route exact path="/contact2">
              <ShowContacts />
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

            <Route exact path="/pricing">
              {/* <PriceBanner/>
           <PricingComp/>
          <Pricing />
          <PriceSec1/>  */}

            </Route>
            <Route exact path="/pricing1">
              <PriceBanner />
              <NavbarComp />
              <Price1 />
              {/* <Pricing /> */}


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
            <Route exact path="/pricing2">
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

            <Route exact path="/how">
              <HowBanner />
              <NavbarHow />
              <How1 />
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
            <Route exact path="/bookkeeping">
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

            <Route exact path="/linkedin">
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
            <Route exact path="/realEstate">
              <RealEstate />
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
            <Route exact path="/business">
              <Business />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                  {/*<Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/executive">
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

            <Route exact path="/digital">
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
            <Route exact path="/website">
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
            <Route exact path="/staff">
              <Staff />
              <>
                <div className="quote-grp">
                  <Link to={"/quote"} className="quote"><span>Get a free quote</span></Link>
                {/*  <Link to={{ pathname: " tel:+917829800669" }} target="_blank" className="cold-call"><span className="round-bgnd"><i className="icofont-ui-call"></i></span></Link>*/}
                </div>
                <div className="quote-grp">

                {/* <Link to={{ pathname: " https://wa.me/917829800669" }} target="_blank" className="wchat"><span>Lets have a chat <i class="icofont-chat"></i></span></Link>*/}
                </div>
              </>
            </Route>
            <Route exact path="/customerServices">
              <Customer />
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
            <Route exact path="/travel">
              <Travel />
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


            <Route exact path="/refer">
              <Refer />
            </Route>
            <Route exact path="/refund">
              <Refund />
            </Route>

            <Route exact path="/ad_hoc">
              <Ad_hoc />
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
            <Route exact path="/privacy">
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




          </Switch>


          {
            this.props.authenticated ? (<Footer2 />) : (<Footer />)}




          <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

        </Router>
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
