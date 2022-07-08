import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Complete extends Component {
    constructor(props) {
        super(props);
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            check1: false,
            check2: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_complete' },
            React.createElement("div", { className: 'complete' },
                React.createElement("p", { className: 'us_title' }, "Thank you for your patience, our personnel will confirm onboarding status"),
                React.createElement("p", { className: 'wrap_nav_complete' },
                    React.createElement(NavLink, { to: '#', className: 'complete_button' }, "Complete")))));
    }
}
export default Complete;
