import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';
import './userList.css';
import {Link} from "react-router-dom"; // Import the CSS file

const UserList = () => {
    const users = window.models.userListModel();

    return (
        <div>
            <Typography variant="body1" className="user-list-container">
                User List
            </Typography>
            <List component="nav">
                {users.map((user) => (
                    <React.Fragment key={user._id}>
                        <ListItem component={Link} to={`/users/${user._id}`} className="user-list-item">
                            <div className="user-name">
                                {user.first_name} {user.last_name}
                            </div>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};

export default UserList;
