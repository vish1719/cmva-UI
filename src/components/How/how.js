/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Work from './work';
import Hyperlinks5 from '../Main-Components/Hyperlinks/Hyperlinks5';
import Video from './video';
import { useEffect } from 'react';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function How() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     

      <div id="services" className="pricing">
        <div className="container">
          <div className={classes.root}>
            <TabPanel value={value} index={0}>
              <h4 className="work-title">Our Process</h4>
              <p className="how-lines">
                ConnectMyVA virtual assistants offer a tower of strength to various 
                business activities across the globe. Although they will be working from remote locations, our 
                assistants make their presence felt by delivering premium services to our clients. And, are 
                easily accessible on phone, Emails, or Skype. Our VAs possess exceptional skills to handle 
                any tasks thrown to them &amp; work for the positive growth of the client’s business. ConnectMyVA builds 
                a distinct architecture for the efficient &amp; simultaneous working of our VAs and clients so that 
                our customer queries are resolved on time. We strive to achieve excellence as a team through strong 
                determination and patience. We always provide greater preferences to customer’s business upsurges or 
                complaints &amp; rectify them within the speculated time.
              </p>

              <p className="how-lines">
                ConnectMyVA is a team of passionate individuals with vast knowledge and experience in the virtual assistance domain. We also handle personalized tasks other than virtual assistance & possess discrete teams for the job. ConnectMyVA will be at your disposal across four different time zones across the globe. 
              </p>

              <p className="how-lines">
                <i className="icofont-rounded-right"></i> Far East shift: 10:00 – 19:00 (HK Time)<br />
                <i className="icofont-rounded-right"></i> European shift: 8:00 – 17:00 (British Summer Time)<br />
                <i className="icofont-rounded-right"></i> EST shift: 9:00 – 18:00 (Eastern Daylight Time)<br />
                <i className="icofont-rounded-right"></i> PST shift: 9:00 – 18:00 (Pacific Daylight Time)<br />
              </p>

              <p className="how-lines">
                Have a glimpse of the video below to get to know more about the process &amp; save time by getting your tasks done through ConnectMyVA virtual assistants.
              </p>

              <Video />
              <Hyperlinks5 />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}

export const CategoryTab = () => (
  <Box>
    <i style={{ fontSize: 40 }} className="icofont-settings-alt"></i>
    <p> How it works?</p>
  </Box>
);

export const CategoryTab1 = () => (
  <Box>
    <i style={{ fontSize: 40 }} className="icofont-refresh"></i>
    <p> Our Process</p>
  </Box>
);
