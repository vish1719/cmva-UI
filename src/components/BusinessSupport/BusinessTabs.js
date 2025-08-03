import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useEffect } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  useEffect(() => {
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
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
}));

export default function BusinessTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="services" className="pricing">

      {/* <div className="container"> */}
      <div className={classes.root}>
        <AppBar style={{ backgroundColor: "#58b958" }} position="static">
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="simple tabs example">
            <Tab label="Overview" {...a11yProps(0)} />
            {/* <Tab label="Why Us" {...a11yProps(1)} /> */}
            {/* <Tab label="AUS & NZ" {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <div className="row d-flex align-items-stretch">
        <div className="col-lg-12 faq-item" data-aos="fade-up">
        <h1> Improve Business Efficiency with Tailored Solutions </h1>
        
           <br/>
           <p>
           All entrepreneurs aim to <strong>Improve Business Efficiency</strong>, although various operators do not
            possess enough time or staff to achieve this outcome. Our organization provides assistance 
            services to clients looking for help. Customized service solutions from our company allow businesses
             to eliminate administrative work while optimizing office functions, which generates time for crucial high-priority activities.<br/>
             Implementing automated systems made possible by professional help lets organizations decrease manual tasks so workers can dedicate
             themselves to vital assignments through enhanced communication systems. Our operational streamlining solutions help clients stay focused
             on critical tasks and handle their scheduling tasks, document oversight, and service response requirements.<br/>
             Your business operations will <strong>improve business efficiency</strong> by choosing the appropriate support solution despite the absence of permanent
             personnel or expensive hardware.
           </p>
           </div>
          </div> 
          <br/>
        <div className="row d-flex align-items-stretch">
        <div className="col-lg-12 faq-item" data-aos="fade-up">
        <h2> Online Business Support for Seamless Daily Operations </h2>
        <br/>
        <p>
        The <strong>Online Business Support</strong> platform delivers complete commercial management procedures, ensuring continuous business operations. The remote office system performs
        data entry tasks and addresses customer support concerns while managing research needs and calendar functions. Support is available whenever you make a request.<br/>
        Reliable <strong>Online Business Support</strong> forever eliminates late work assignments, data loss, and data disorganization. The virtual team provides your business with enduring 
        support to understand operational needs and promote organizational objectives.<br/>
        The system behind our services applies framework principles to scale up capabilities based on your business expansion. Our virtual support structure adjusts its operations
        to match your staffing requirements, whether you have single entrepreneurs or early-stage teams, without needing to expand costs or cut workforce levels.
        </p>
        </div>
        </div>


        </TabPanel>
        {/* <TabPanel value={value} index={1}>
        Why Us
        </TabPanel> */}
  
      </div>
      {/* </div> */}
    </div>
  );
}
