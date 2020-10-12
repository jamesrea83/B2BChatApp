import React, { Component } from 'react';
import '../css/user.css';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            connectionStatus: 'Not connected',
            username: this.props.username,
            messageToSend: ''
        }

    }

    onInputChange(input) {
        this.setState({
            messageToSend: input.currentTarget.value
        });
    }

    onSendButtonClick() {
        console.log(this.state.messageToSend);

        /**
         * 1) Send message to API
         * 2) Add message to sender's chat log
         * 3) setState messageToSend blank
         */

    }

    render() {
        return (
            <div className='user-container'>

                <div className='username-container'>
                    <h1>{this.state.username}</h1>
                </div>

                <div className='status-container'>
                    <h3>{this.state.connectionStatus}</h3>
                </div>

                <h3>Chat Log</h3>
                <div className='chat-log-container'></div>

                <h3>Input box</h3>
                <div className='input-box-container'>
                    <input className='input-box' onChange={this.onInputChange.bind(this)}></input>
                </div>

                <div className='send-button-container'>
                    <button className='send-button' onClick={this.onSendButtonClick.bind(this)}>Send</button>
                </div>
            </div>
        )
    }

}

export default User;