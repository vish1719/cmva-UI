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


          <p>
            
            <br/>
            Business process is the structural activities to achieve commercial results in the highly
competitive business world. Every business are under pressure to improve their operating
efficiencies in order to deliver the quality services and to attain the better margins. The best way
to achieve this is by outsourcing to troubleshot your issues at affordable cost. Cost is not only the
factor for outsourcing but also quality services, dedicated expert, flexibility to adapt the process

and contribute best practices. <strong>ConnectMyVA</strong> assist clients on critical business processes with
strategic planning to ensure that the maximum benefit is achieved through outsourcing. We just
don’t manage our clients but work with them towards refining projects to significantly improve
accuracy, productivity. <br/> <br/>
There is an increase in small scale online businesses where individuals are taking their career
initiative as entrepreneurs. The rise in competition calls for more management proficiency on the
part of business owners to streamline their work process. Business people understand that
outsourcing some mundane or break off particular tasks can help them gain a competitive
advantage in the market place. <strong>ConnectMyVA</strong> assistance is a great long-term solution to lighten
your workload and able to complete tasks tirelessly around the clock. Below is some of key
aspects that helps you to choose best assistant from <strong>ConnectMyVA</strong>
          </p>

          <ul>
            <li> Expertise in managing business processes across industries</li>
            <li> Dedicated assistants with deep domain knowledge to handle any kind of tasks</li>
            <li> Access to a range of skill sets and talent under a single roof</li>
            <li> Flexibility in resource usage, adapt to seasonal demands</li>
            <li> Adhere to company policies and follow the timelines</li>
            <li> 100% Security on handling client data.</li>
            <li> Affordable cost compare to the traditional employees and we provide backup in case of
assistant absence.</li>
            <li> We build healthy relationship with our clients by enhancing their business value</li>
            
          </ul>


        </TabPanel>
        {/* <TabPanel value={value} index={1}>
        Why Us
        </TabPanel> */}
  
      </div>
      {/* </div> */}
    </div>
  );
}
