import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BtnAppBar from './BtnAppbar';
import { Avatar } from '@material-ui/core';
// import { createTheme } from '@material-ui/core/styles';
import { Us } from 'react-flags-select';
import 'flag-icon-css/css/flag-icon.min.css'
import { Link } from 'react-router-dom';


const theme= createMuiTheme({
  palette:{
    primary:{
      main:"#2f3339"
    }
  },
  indicator: {
    backgroundColor: 'white',
  },
})

// const styles = theme => ({
//   indicator: {
//     backgroundColor: 'white',
//   },
// })

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  textStyle:{
    color:"#42464e",
    background:"#fff",
    width:"100%"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div id="services" className="pricing">
      {/* <div className="section-title">
        <h2>Pricing & Plans</h2>
      </div> */}
      <div className="container tabing">
        <div className={classes.root}>
          <BtnAppBar/>
          <AppBar style={{ backgroundColor: "#58b958" }}  position="static">
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="simple tabs example">
            {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
              <Tab  className={classes.textStyle} style={{minWidth:"33%"}} icon={<USA/>} {...a11yProps(0)} />
              <Tab  className={classes.textStyle} style={{minWidth:"34%"}} icon={<EURO/>} {...a11yProps(1)} />
              <Tab  className={classes.textStyle} style={{minWidth:"33.2%"}} icon={<AUS/>} {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="row">

              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up">
                <div className="packages_item">
                  <div className="pack_head">
                    {/* <i className="icofont-paper-plane"></i> */}
                    <i class="icofont-runner-alt-1"></i>
                    <h3>Tiptoe-1</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list" >
                      <li>Hours Included -    1hr</li>
                      <li>Hourly Rate	-   $15</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  NA</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$15/Mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                    {/* <i className="icofont-airplane-alt"></i> */}
                    <i class='bx bx-cycling'></i>
                    <h3>Begin-10</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    10hrs</li>
                      <li>Hourly Rate	-   $9</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$90/Mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-motor-bike-alt"></i>
                    <h3>Experiment-20</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    20hr</li>
                      <li>Hourly Rate	-   $8.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$170/Mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-car-alt-3"></i>
                    <h3>Grow-40</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    40hrs</li>
                      <li>Hourly Rate	-   $8</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$320/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-bus-alt-1"></i>
                    <h3>Leapfrog-60</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    60hrs</li>
                      <li>Hourly Rate	-   $7.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$450/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class='bx bxs-train' ></i>
                    <h3>Dominate-80</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    80hrs</li>
                      <li>Hourly Rate	-   $7</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$560/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                    <i className="icofont-airplane-alt"></i>
                    <h3>Proficient-120</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    120hrs</li>
                      <li>Hourly Rate	-   $6.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$780/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i className="icofont-rocket-alt-2"></i>
                    <h3>Genius-160+</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    160hrs</li>
                      <li>Hourly Rate	-   $6</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>$960/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>


            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="row">

              
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class='bx bx-cycling'></i>
                    <h3>Begin-10</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    10hrs</li>
                      <li>Hourly Rate	-   €7.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€75/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-motor-bike-alt"></i>
                    <h3>Experiment-20</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    20hr</li>
                      <li>Hourly Rate	-   €7</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€140/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-car-alt-3"></i>
                    <h3>Grow-40</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    40hrs</li>
                      <li>Hourly Rate	-   €6.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€260/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-bus-alt-1"></i>
                    <h3>Leapfrog-60</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    60hrs</li>
                      <li>Hourly Rate	-   €6</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€360/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class='bx bxs-train' ></i>
                    <h3>Dominate-80</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    80hrs</li>
                      <li>Hourly Rate	-   €5.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€440/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                    <i className="icofont-airplane-alt"></i>
                    <h3>Proficient-120</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    120hrs</li>
                      <li>Hourly Rate	-   €5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€600/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i className="icofont-rocket-alt-2"></i>
                    <h3>Genius-160+</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    160hrs</li>
                      <li>Hourly Rate	-   €4.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>€720/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>


            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="row">

              

              
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  {/* <i class="icofont-runner-alt-1"></i> */}
                  <i class='bx bx-cycling'></i>
                    <h3>Begin-10</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    10hrs</li>
                      <li>Hourly Rate	-   AUD 13</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 130/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-motor-bike-alt"></i>
                    <h3>Experiment-20</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    20hr</li>
                      <li>Hourly Rate	-   AUD 11</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 220/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-car-alt-3"></i>
                    <h3>Grow-40</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    40hrs</li>
                      <li>Hourly Rate	-   AUD 9.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 380/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class="icofont-bus-alt-1"></i>
                    <h3>Leapfrog-60</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    60hrs</li>
                      <li>Hourly Rate	-   AUD 9</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 540/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                <div className="packages_item">
                  <div className="pack_head">
                  <i class='bx bxs-train' ></i>
                    <h3>Dominate-80</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    80hrs</li>
                      <li>Hourly Rate	-   AUD 8.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 680/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                    <i className="icofont-airplane-alt"></i>
                    <h3>Proficient-120</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    120hrs</li>
                      <li>Hourly Rate	-   AUD 8</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 960/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="100">
                <div className="packages_item">
                  <div className="pack_head">
                  <i className="icofont-rocket-alt-2"></i>
                    <h3>Genius-160+</h3>
                    {/* <p>For the individuals</p> */}
                  </div>
                  <div className="pack_body">
                    <ul className="list">
                      <li>Hours Included -    160hrs</li>
                      <li>Hourly Rate	-   AUD  7.5</li>
                      <li>Additional Hour Rate -  Flat charges</li>
                      <li>Rollover -  All Unused hrs*</li>
                    </ul>
                  </div>
                  <div className="pack_footer">
                    <h4>AUD 1200/mo</h4>
                    <Link className="main_btn" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>


            </div>
          </TabPanel>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export const USA = () => {
	return(
		<Box className="us-flg">
			<span className={`flag-icon flag-icon-us mx-2`} ></span>
      <span>USA</span>
		</Box>
	)
}
export const EURO = () => {
	return(
		<Box className="uk-flg">
			<span className={`flag-icon flag-icon-gb mx-2`} ></span>
      <span>EURO</span>
		</Box>
	)
}
export const AUS = () => {
	return(
		<Box className="au-flg">
			<span className={`flag-icon flag-icon-au mx-2`} ></span>
      <span>AUS &amp; NZ</span>
		</Box>
	)
}
