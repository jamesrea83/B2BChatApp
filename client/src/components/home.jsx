import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiResponse: 'API not responding, please check it is running.'
        }

    }


    componentDidMount() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }



    render() {
        return (
            <div className='home-container'>
                <h2>Browser to browser chat app demo</h2>

                <div className='api-status-container'>
                    {this.state.apiResponse}
                </div>

                <div className='user-link-container'>
                    <a href='/user1' target='blank'>Click for user 1</a>
                    <a href='/user2' target='blank'>Click for user 2</a>
                </div>
            </div>
        )
    }

}

export default Home;