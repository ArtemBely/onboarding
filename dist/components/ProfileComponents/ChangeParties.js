import React, { Component } from 'react';
//@ts-ignore
import trash from '../../../public/images/trash.svg';
var arr = [];
var incr = 1;
class ChangeParties extends Component {
    constructor(state) {
        super(state);
        this.all_parties = React.createRef();
        this.each_party = React.createRef();
        this.inp = React.createRef();
        this.inp2 = React.createRef();
        this.addParties = () => {
            if (this.state.increment) {
                return (React.createElement("div", { className: 'all_parties', ref: this.all_parties }, arr.map((item, key) => (React.createElement("div", { className: 'each_party', ref: this.each_party, onClick: this.removeParty },
                    React.createElement("p", { className: 'title_salut connect_party' }, `Connected party #${key + 1}`),
                    React.createElement("p", { className: 'trash' },
                        React.createElement("img", { src: trash })),
                    React.createElement("p", { className: 'title_salut' }, "Full name"),
                    React.createElement("p", { className: 'title_salut' }, "E-mail"),
                    React.createElement("input", { type: 'text', ref: this.inp, name: `partyName` + (key + 1), placeholder: 'Full name', id: 'alter13', className: 'alternative_inputs special_inputs' }),
                    React.createElement("input", { type: 'text', ref: this.inp2, name: `partyEmail` + (key + 1), placeholder: 'E-mail', className: 'alternative_inputs special_inputs' }))))));
            }
            return;
        };
        this.removeParty = (e) => {
            var _a, _b;
            if (((_b = (_a = this.all_parties) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.children[0]) && e.target.nodeName == 'IMG') {
                this.setState(prevState => ({ increment: prevState.increment - 1 }));
                Array.from(document.getElementsByClassName('alternative_inputs special_inputs')).forEach(inps => (inps.value = ''));
                arr.pop();
            }
        };
        this.incrementParty = () => {
            this.setState(prevState => ({ increment: prevState.increment + 1 }));
            incr++;
            arr.push(incr);
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user,
            increment: 0,
            val: ''
        };
    }
    render() {
        return (React.createElement("p", { className: 'wrap_partiesAll' },
            React.createElement("div", { className: 'partiesAll' },
                React.createElement("p", { className: 'us_title' }, "Connected parties"),
                React.createElement("div", { className: 'wrap_each_comp_party' },
                    React.createElement("div", { className: 'each_comp_party_inside' },
                        React.createElement("p", { className: 'title_salut connect_party' }, "Connected party #1"),
                        React.createElement("p", { className: 'trash' },
                            React.createElement("img", { src: trash })),
                        React.createElement("p", { className: 'title_salut' }, "Full name"),
                        React.createElement("p", { className: 'title_salut' }, "E-mail"),
                        React.createElement("input", { type: 'text', placeholder: 'Full name', value: 'Full name', id: 'alter11', className: 'alternative_inputs3 special_inputs' }),
                        React.createElement("input", { type: 'text', placeholder: 'E-mail', value: 'Email', id: 'alter12', className: 'alternative_inputs3 special_inputs' }))),
                React.createElement("div", { className: 'wrap_allNew' },
                    this.addParties(),
                    React.createElement("p", { className: 'each_blue_bottom spec_blue_bottom' })),
                React.createElement("p", { className: 'blue_add', id: 'spec_blue_add', onClick: this.incrementParty }, "+ Add additional authorized signatory"))));
    }
}
export default ChangeParties;
