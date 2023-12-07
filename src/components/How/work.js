import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Work() {
  const classes = useStyles();

  return (

    
    <List className={classes.root}>
        <h4 className="work-title" >How it works?</h4>
        <p className="work-lines">Hire a virtual assistant of <strong>ConnectMyVA</strong> today and obtain swift and productive business assistance.<br/>

No more hitches to get connected with your virtual or executive assistants. Connect with us in easy steps by signing up and start delegating your tasks to your virtual assistant.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            1
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="SignUp"  />
      </ListItem>
      <p className="work-li">Become a member of ConnectMyVA simply by providing basic details of your business.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            2
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Select Service Plan"  />
      </ListItem>
      <p className="work-li">Choose from the list of services we offer and select your plans as per your requirements.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            3
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt"  primary="Connect with your VA" />
      </ListItem>
      <p className="work-li"> Get connected with your personal virtual assistant via Email/Skype details sent to you after a successful registration.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            4
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary=" Assign Tasks" />
      </ListItem>
      <p className="work-li">Delegate your tasks and project details easily via Email/Skype. </p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            5
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Get your work done" />
      </ListItem>
      <p className="work-li">Assigned tasks/projects will be completed within the allocated time for your assistants.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            6
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Reviews &amp; Feedbacks" />
      </ListItem>
      <p className="work-li">Review your VA’s performance and provide feedback to improve services and to hear from us.</p>
    </List>

    
  );
}
