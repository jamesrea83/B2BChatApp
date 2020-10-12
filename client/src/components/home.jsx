import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:9000";
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            connectionStatus: 'Not Connected'
        }

        this.socket = socketIOClient(ENDPOINT);

        this.socket.on('connectionStatus', status => {
            let connectionStatus = status ? 'Connected' : 'Not Connected';
            this.setState({ connectionStatus });
        })
    }

    render() {
        return (
            <div className='home-container'>
                <h1>Browser to browser chat app demo</h1>

                <div className='api-status-container'>
                    <h3>{this.state.connectionStatus}</h3>
                </div>
                <p>
                    Click the links below to open client chats in a new tab.
                </p>
                <div className='user-link-container'>
                    <a href='/user1' target='_blank'>Click for user 1</a>
                    <br />
                    <a href='/user2' target='_blank'>Click for user 2</a>
                </div>
            </div>
        )
    }

}

export default Home;