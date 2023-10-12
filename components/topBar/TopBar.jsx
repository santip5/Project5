import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@mui/material';
import './TopBar.css';

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, context } = this.props;
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" style={{flexGrow: 1}}>
            [Group 5]
          </Typography>
          <Typography variant="h6" >
            {context ? `${context}${name ? ': ' + name : ''}` : 'Welcome to PhotoShare!'}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
