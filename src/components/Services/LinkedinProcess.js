import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: "#f5f9fc",
  },
}));

export default function LinkedinProcess() {
  const classes = useStyles();

  return (

    
    <List className={classes.root}>
        
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            1
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Profile Enhancement"  />
      </ListItem>
      <p className="work-li">Enhancing profiles with timely updates shows active involvement on the LinkedIn platform. Our VAs will help you create unique exclusive profiles on LinkedIn & make it stand apart on the search list.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            2
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Reach Target Audience"  />
      </ListItem>
      <p className="work-li">ConnectMyVA will aid you to build your global network and to come up with distinctive brand strategies in reaching your target audience.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            3
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt"  primary="Content Writing" />
      </ListItem>
      <p className="work-li">LinkedIn is a remarkable global broadcasting platform for professional blogs, content, and case studies. Our assistants are well versed in developing quality content for any business & maintain your global reach with appealing content. </p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            4
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary=" Aid Job Seekers" />
      </ListItem>
      <p className="work-li">LinkedIn has grown up to be the leading network for job-seeking students & professionals by establishing direct communication with HR managers & recruiters. We offer freshers & job changing professionals by building up universal profiles & keep them in harmony to find best-suited jobs. </p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            5
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Manage Sales Navigator" />
      </ListItem>
      <p className="work-li">Sales navigator is a social selling forum(paid tool) on LinkedIn which helps you to target the right people with key leads & achieve the right prospects for your branding.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            6
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="Personal Branding" />
      </ListItem>
      <p className="work-li">Our VAs use LinkedIn unique features to aid you in setting up your branding with elaborate posts, articles, and videos for navigating more traffic & expanding business opportunities.</p>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#58b958"}}>
            7
          </Avatar>
        </ListItemAvatar>
        <ListItemText className="work-txt" primary="LinkedIn Engagement" />
      </ListItem>
      <p className="work-li">ConnectMyVA makes sure you keep in touch with your audiences by replying, sharing posts and engaging in group chats, etc.,</p>
    </List>

    
  );
}
