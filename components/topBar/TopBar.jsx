import React from 'react';
import {
  AppBar, Toolbar, Typography, Box
} from '@mui/material';
import './TopBar.css';
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: null
    };
  }

  componentDidMount() {
    this.fetchAppVersion();
  }

  fetchAppVersion() {
    fetchModel("/test/info")
        .then((response) => {
          const version = response.data.__v;
          const formattedVersion = `${version}`;
          this.setState({
            version: formattedVersion
          });
        })
        .catch((error) => {
          console.error('Error fetching app version:', error);
        });
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
            {this.state.version && (
                <Box marginLeft={2}>
                  <Typography variant="h6">
                    V{this.state.version}
                  </Typography>
                </Box>
            )}
          </Toolbar>
        </AppBar>
    );
  }
}

export default TopBar;
