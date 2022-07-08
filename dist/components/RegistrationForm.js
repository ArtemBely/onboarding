import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../images/Group 12397.svg';
//@ts-ignore
import eye from '../../images/eye.svg';
class RegistrationForm extends Component {
    constructor(state) {
        super(state);
        this.checkBlue = React.createRef();
        this.chekBoxInside = React.createRef();
        this.changeInputColor = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.chekBoxInside) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.checked) ?
                (_d = (_c = this.checkBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('blueCheckBox') :
                (_f = (_e = this.checkBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('blueCheckBox');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user
        };
        this.checkBlue = React.createRef();
        this.chekBoxInside = React.createRef();
    }
    render() {
        return (React.createElement("div", { className: 'wrap_registration' },
            React.createElement("div", { className: 'registration' },
                React.createElement("p", { className: 'wrap_logo_form' },
                    React.createElement("img", { src: logo, id: 'logo' })),
                React.createElement("p", { className: 'reg_title' }, "Registration"),
                React.createElement("form", { action: '/', method: 'POST', className: 'main_form' },
                    React.createElement("p", { className: 'wrap_each_main_input' },
                        React.createElement("input", { type: 'email', className: 'each_main_input', placeholder: 'E-mail', required: true })),
                    React.createElement("p", { className: 'wrap_each_main_input' },
                        React.createElement("input", { type: 'password', className: 'each_main_input', placeholder: 'Set Password', required: true }),
                        React.createElement("img", { src: eye, className: 'eyes' })),
                    React.createElement("p", { className: 'wrap_each_main_input' },
                        React.createElement("input", { type: 'password', className: 'each_main_input', placeholder: 'Confirm Password', required: true }),
                        React.createElement("img", { src: eye, className: 'eyes' })),
                    React.createElement("p", { className: 'pass_condition' }, "Password must contain minimum 9 characters including at least 1 uppercase letter, 1 special character and 1 number"),
                    React.createElement("p", { className: 'agree_text' },
                        React.createElement("span", { className: 'wrap_main_checkbox', ref: this.checkBlue, onClick: this.changeInputColor },
                            React.createElement("input", { type: 'checkbox', id: 'main_checkbox', ref: this.chekBoxInside, required: true })),
                        " I agree with ",
                        React.createElement(NavLink, { to: '#', id: 'terms' }, " Terms of Services")),
                    React.createElement("p", { className: 'wrap_sub_button' },
                        React.createElement("button", { type: 'submit', id: 'sub_button' }, "Submit"))),
                React.createElement("p", { className: 'blue_resend reactivation' },
                    React.createElement("a", { href: '#', className: 'blue_resend' }, "Resend activation E-mail")),
                React.createElement("p", { className: 'wrap_blue_resend' },
                    React.createElement("a", { href: '#', className: 'blue_resend' }, "Log in if"),
                    " you have an account"))));
    }
}
export default RegistrationForm;
