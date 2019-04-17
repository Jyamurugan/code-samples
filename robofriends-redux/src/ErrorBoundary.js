import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // Try Catch  Method
    componentDidCatch(error, info) {
        console.warn(error, info);
        this.setState({
            hasError: true
        });
    }
    
    render() {
        if (this.state.hasError) {
            return <p>Some Error Occured</p>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;