import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './userDetail.css';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = window.models.userModel(this.props.match.params.userId);
    
    return (
      <div className="user-detail">
        <Typography variant="h4">{user.first_name} {user.last_name}</Typography>
        <Typography variant="body1">Location: {user.location}</Typography>
        <Typography variant="body1">Description: {user.description}</Typography>
        <Typography variant="body1">Occupation: {user.occupation}</Typography>
     
     
        <Button variant="contained" color="primary" component={Link} to={`/photos/${user._id}`}>
          View Photos
        </Button>
      </div>
    );
  }
}

export default UserDetail;
