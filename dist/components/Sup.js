import React, { Component } from 'react';
export class Sup extends Component {
    constructor(state) {
        super(state);
        this.state = {
            name: "hello"
        };
    }
    render() {
        return (React.createElement("div", { className: 'sssssuper', style: { width: '1000px', height: '1000px', backgroundColor: 'blue' } },
            React.createElement("div", { className: 'container' }, this.state.name)));
    }
}
