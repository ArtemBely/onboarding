import React, { Component } from 'react';
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
                    React.createElement("button", { form: 'registrationForm1', type: 'submit', className: 'complete_button' }, "Complete")))));
    }
}
export default Complete;
