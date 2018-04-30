import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job_title: 'programmer',
            fav_hobby: 'all the things'
        }
    }

    increment() {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        });
    }

    decrement() {
        this.setState((prevState) => {
            return {count: prevState.count - 1}
        });
    }


    render() {
        return (
            <div className="App">
              <p>I am a: {this.state.job_title}</p>
              <p>My favorite hobby is: {this.state.fav_hobby}</p>
            </div>
            
        );
    }
}

export default App;
