import React, { Component } from 'react';
export default class Ch extends Component {
    constructor(state) {
        super(state);
        this.state = {
            name: "State Component"
        };
    }
    render() {
        return (React.createElement("div", { className: 'sssssuper' },
            React.createElement("div", { className: 'container' }, this.state.name)));
    }
}
