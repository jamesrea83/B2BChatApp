import React, { Component } from 'react';
import '../css/user.css';
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:9000";

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            connectionStatus: 'Not connected',
            username: this.props.username,
            chatLog: [],
            messageToSend: ''
        }

        this.socket = socketIOClient(ENDPOINT);



    }

    componentDidUpdate () {
        this.scrollToBottom()
    }

    componentDidMount() {
        this.socket.on('connectionStatus', status => {
            let connectionStatus = status ? 'Connected' : 'Not Connected';
            this.setState({ connectionStatus });
        })

        this.socket.on('serverMessage', message => {
            console.log('serverMessage received by client');
            this.addToChatLog(message);
        })

        this.chatEndRef = React.createRef();
    }

    addToChatLog(message) {
        let newLog = this.state.chatLog.map(entry => entry);
        newLog.push(message);

        this.setState({
            chatLog: newLog
        });
    }

    onInputChange(input) {
        this.setState({
            messageToSend: input.currentTarget.value
        });
    }

    sendMessage() {

        if (this.state.messageToSend.length === 0) return;

        let message = {
            text: this.state.messageToSend,
            user:this.state.username
        };

        this.socket.emit('clientMessage', message);
        this.setState({ messageToSend: '' });
    }

    onSendButtonClick() {
        this.sendMessage();
    }

    onKeyDown(event) {
        if (event.keyCode !== 13) return;
        this.sendMessage();
    }

    scrollToBottom() {
        this.chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    render() {
        return (
            <div className='user-container'>

                <div className='username-container'>
                    <h3>{this.state.username}</h3>
                </div>

                <div className='status-container'>
                    <h5>{this.state.connectionStatus}</h5>
                </div>

                <h5>Chat Log</h5>
                <div className='chat-log-container'>
                    {this.state.chatLog.map((entry, index) => {
                        return (
                        <div className='chat-log-entry' key={index}>
                                <div className={`chat-log-entry-${entry.user === this.state.username ? 'right' : 'left'}`}>
                                    <div className='chat-log-header'>{entry.time} - {entry.user}</div>
                                    <div className='chat-log-body'>{entry.text}</div>
                                </div>
                        </div>
                        )
                    })}
                    <div ref={this.chatEndRef}></div>
                </div>

                <h5>Input box</h5>
                <div className='input-box-container'>
                    <input className='input-box'
                           value={this.state.messageToSend}
                           onChange={this.onInputChange.bind(this)}
                           onKeyDown={this.onKeyDown.bind(this)}
                           >
                    </input>
                </div>

                <div className='send-button-container'>
                    <button className='send-button' onClick={this.onSendButtonClick.bind(this)}>Send</button>
                </div>
            </div>
        )
    }

}

export default User;