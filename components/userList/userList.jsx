import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';
import './userList.css';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], // Initialize users as an empty array
        };
    }

    componentDidMount() {
        // Fetch users from the server when the component is mounted
        fetchModel('/user/list')
            .then((response) => {
                // Update the component state with fetched users
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }

    render() {
        const { users } = this.state; // Destructure users from state

        return (
            <div>
                {/* Header */}
                <Typography variant="body1" className="user-list-container">
                    User List
                </Typography>

                {/* User List */}
                <List component="nav">
                    {/* Map through the fetched users and create list items with links */}
                    {users.map((user) => (
                        <React.Fragment key={user._id}>
                            <ListItem component={Link} to={`/users/${user._id}`} className="user-list-item">
                                <div className="user-name">
                                    {user.first_name} {user.last_name}
                                </div>
                            </ListItem>
                            <Divider /> {/* Divider between list items */}
                        </React.Fragment>
                    ))}
                </List>
            </div>
        );
    }
}

export default UserList;
