import React, { Component } from 'react';
class MenuBar extends Component {
    constructor(state) {
        super(state);
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_partiesAll' },
            React.createElement("div", { className: 'partiesAll' },
                React.createElement("p", { className: 'us_title' }, "Connected parties"))));
    }
}
export default MenuBar;
