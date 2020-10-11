import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiResponse: ''
        }

    }


    componentDidMount() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }



    render() {
        return (
            <div className='home-container' style={this.state}>
                {this.state.apiResponse}

            </div>
        )
    }

}

export default Home;