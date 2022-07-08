import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import trash from '../../../public/images/trash.svg';
var arr = [1];
var incr = 1;
class EachParty extends Component {
    constructor(props, state) {
        super(props, state);
        this.all_parties = React.createRef();
        this.each_party = React.createRef();
        this.inp = React.createRef();
        this.inp2 = React.createRef();
        this.removeParty = (e) => {
            var _a, _b;
            if (((_b = (_a = this.all_parties) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.children[1]) && e.target.nodeName == 'IMG') {
                this.setState(prevState => ({ increment: prevState.increment - 1 }));
                Array.from(document.getElementsByClassName('alternative_inputs special_inputs')).forEach(inps => (inps.value = ''));
                arr.pop();
            }
        };
        this.addParties = () => {
            if (this.state.increment) {
                return (React.createElement("div", { className: 'all_parties', ref: this.all_parties }, arr.map((item, key) => (React.createElement("div", { className: 'each_party', ref: this.each_party, onClick: this.removeParty },
                    React.createElement("p", { className: 'title_salut connect_party' }, `Connected party #${key + 1}`),
                    React.createElement("p", { className: 'trash' },
                        React.createElement("img", { src: trash })),
                    React.createElement("p", { className: 'title_salut' }, "Full name"),
                    React.createElement("p", { className: 'title_salut' }, "E-mail"),
                    React.createElement("input", { type: 'text', ref: this.inp, name: `partyName` + (key + 1), placeholder: 'Full name', className: 'alternative_inputs special_inputs' }),
                    React.createElement("input", { type: 'text', ref: this.inp2, name: `partyEmail` + (key + 1), placeholder: 'E-mail', className: 'alternative_inputs special_inputs' }),
                    React.createElement("p", { className: 'each_blue_bottom' }))))));
            }
            return;
        };
        this.incrementParty = () => {
            this.setState(prevState => ({ increment: prevState.increment + 1 }));
            incr++;
            arr.push(incr);
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            increment: 1,
            val: ''
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_parties' },
            React.createElement("div", { className: 'parties' },
                React.createElement("p", { className: 'us_title' }, "Please list additional authorized signatories of the legal entity. Once added, the person will receive an email invitation with a link for online onboarding "),
                this.addParties(),
                React.createElement("p", { className: 'blue_add', onClick: this.incrementParty }, "+ Add additional authorized signatory"),
                React.createElement("div", { className: 'wrap_next_buttons6' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: '/company_personal', className: 'back_button' }, "Back"),
                        React.createElement(NavLink, { to: '/company_documents', className: 'next_button' }, "Next"))))));
    }
}
export default EachParty;
