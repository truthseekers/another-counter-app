import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        });
    }

    multiplyBy2() {
        this.setState((prevState) => {
            return {count: prevState.count * 2}
        });
    }

    decrement() {
        this.setState((prevState) => {
            return {count: prevState.count - 1}
        });
    }

    divideBy2() {
        this.setState((prevState) => {
            return {count: prevState.count / 2}
        });
    }

    squared() {
        this.setState((prevState) => {
            return {count: prevState.count * prevState.count}
        });
    }

    render() {
        return (
            <div className="Counter">
              <p>
                <button onClick={() => this.increment()}>+1</button>
                <button onClick={() => this.multiplyBy2()}>*2</button>
                Count: {this.state.count}
                <button onClick={() => this.decrement()}>-1</button>
                <button onClick={() => this.divideBy2()}>/2</button>
                <button onClick={() => this.squared()}>^2</button>
              </p>
            </div>
            
        );
    }

}

export default Counter;
