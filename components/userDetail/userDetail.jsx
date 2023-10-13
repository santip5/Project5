import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './userDetail.css';
import TopBar from '../topBar/TopBar';
import fetchModel from "../../lib/fetchModelData";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: true,
        };
    }

    // Initial data fetch when the component is mounted
    componentDidMount() {
        this.fetchUserData();
    }

    // Fetch user data when the route parameters change
    componentDidUpdate(prevProps) {
        const { userId } = this.props.match.params;
        const prevUserId = prevProps.match.params.userId;

        // Check if userId has changed
        if (userId !== prevUserId) {
            this.fetchUserData();
        }
    }

    // Function to fetch user data
    fetchUserData() {
        const { userId } = this.props.match.params;
        fetchModel(`/user/${userId}`)
            .then(response => {
                this.setState({ user: response.data, isLoading: false });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                this.setState({ isLoading: false });
            });
    }



    render() {
        const { user, isLoading } = this.state;

        if (isLoading) {
            return <div>Loading...</div>; // You can show a loading indicator while data is being fetched
        }

        if (!user) {
            return <div>User not found</div>; // Handle the case when user data is not available
        }

        return (
            <div className="user-detail">
                <TopBar name={`${user.first_name} ${user.last_name}`} context="User Details" />
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