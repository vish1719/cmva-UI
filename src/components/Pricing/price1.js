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
import { useEffect } from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2f3339"
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
    textStyle: {
        color: "#42464e",
        background: "#fff",
        width: "100%"
    }
}));

export default function SimpleTabs() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
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
                <div className="container  ">
                    <div className={classes.root}>
                        {/* <BtnAppBar/> */}
                        {/* <AppBar style={{ backgroundColor: "#58b958" }}  position="static">
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="simple tabs example">
            
              <Tab  className={classes.textStyle} icon={<USA/>} {...a11yProps(0)} />
              <Tab  className={classes.textStyle} icon={<EURO/>} {...a11yProps(1)} />
              <Tab  className={classes.textStyle} icon={<AUS/>} {...a11yProps(2)} />
            </Tabs>
          </AppBar> */}
                        <div classsname="">
                            {/* <h4 className="work-title" >How it works?</h4> */}
                            <p className="work-lines padforprice mb-0">Our Virtual Personal Assistant estimating plans are exceptionally basic. We have pre-
                                characterized each hour rates for the errands that change contingent upon the volume of Virtual
                                Assistant hours you are buying.<br/><br/>

                                You can buy hours either in a mass to finish one task or you can buy in to our month to month
                                membership plan where you can profit the administrations of a Virtual Assistant for limited
                                number of hours consistently. You can utilize those hours to do any of your jobs.<br/><br/>
                                
                                Check our monthly <Link className="forLiCol" to="/pricing2"> subscription plans</Link> and <Link to={"/ad_hoc"}>ad
hoc project plans</Link> here.</p>

                                <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export const USA = () => {
    return (
        <Box className="us-flg">
            <span className={`flag-icon flag-icon-us mx-2`} ></span>
            <span>USA</span>
        </Box>
    )
}
export const EURO = () => {
    return (
        <Box className="uk-flg">
            <span className={`flag-icon flag-icon-gb mx-2`} ></span>
            <span>EURO</span>
        </Box>
    )
}
export const AUS = () => {
    return (
        <Box className="au-flg">
            <span className={`flag-icon flag-icon-au mx-2`} ></span>
            <span>AUS &amp; NZ</span>
        </Box>
    )
}
