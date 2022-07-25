import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../images/Group 12397.svg';
//@ts-ignore
import eye from '../../images/eye.svg';
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
class RegistrationForm extends Component {
    constructor(state) {
        super(state);
        this.checkBlue = React.createRef();
        this.chekBoxInside = React.createRef();
        this.correctBlue = React.createRef();
        this.pass = React.createRef();
        this.passConfirm = React.createRef();
        this.emailCorrect = React.createRef();
        this.changeInputColor = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.chekBoxInside) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.checked) ?
                (_d = (_c = this.checkBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('blueCheckBox') :
                (_f = (_e = this.checkBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('blueCheckBox');
        };
        this.checkCorrectData = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (typeof window != "undefined" && window.location.pathname == '/signin') {
                return;
            }
            if (((_a = this.pass) === null || _a === void 0 ? void 0 : _a.current).value == ((_b = this.passConfirm) === null || _b === void 0 ? void 0 : _b.current).value &&
                ((_c = this.pass) === null || _c === void 0 ? void 0 : _c.current).value.length >= 9 && /\d/.test(((_d = this.pass) === null || _d === void 0 ? void 0 : _d.current).value) &&
                /[A-Z]/.test(((_e = this.pass) === null || _e === void 0 ? void 0 : _e.current).value) &&
                specialChars.test(((_f = this.pass) === null || _f === void 0 ? void 0 : _f.current).value) &&
                ((_g = this.emailCorrect) === null || _g === void 0 ? void 0 : _g.current).value.indexOf('@') !== -1) {
                (_j = (_h = this.correctBlue) === null || _h === void 0 ? void 0 : _h.current) === null || _j === void 0 ? void 0 : _j.classList.add('activeRegButton');
                this.setState({ disFunction: false });
            }
            else {
                (_l = (_k = this.correctBlue) === null || _k === void 0 ? void 0 : _k.current) === null || _l === void 0 ? void 0 : _l.classList.remove('activeRegButton');
                this.setState({ disFunction: true });
            }
        };
        this.changeTypeOfPass1 = () => {
            if (this.pass.current != null && this.pass.current.type == "password") {
                this.pass.current.type = "text";
            }
            else if (this.pass.current != null) {
                this.pass.current.type = 'password';
            }
        };
        this.changeTypeOfPass2 = () => {
            if (this.passConfirm.current != null && this.passConfirm.current.type == "password") {
                this.passConfirm.current.type = "text";
            }
            else if (this.passConfirm.current != null) {
                this.passConfirm.current.type = 'password';
            }
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user,
            disFunction: true
        };
        this.checkBlue = React.createRef();
        this.chekBoxInside = React.createRef();
    }
    componentDidMount() {
        var _a, _b;
        if (typeof window != "undefined" && window.location.pathname == '/signin') {
            this.setState({ disFunction: false });
            (_b = (_a = this.correctBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('activeRegButton');
        }
    }
    render() {
        return (React.createElement("div", { className: 'wrap_registration' },
            React.createElement("div", { className: 'registration' },
                React.createElement("p", { className: 'wrap_logo_form' },
                    React.createElement("img", { src: logo, id: 'logo' })),
                React.createElement("p", { className: 'reg_title' }, typeof window != "undefined" && window.location.pathname == '/registration' ? "Registration" : "Log In"),
                React.createElement("form", { action: typeof window != "undefined" && window.location.pathname == '/registration' ? '/registration' : '/registration/signin', method: 'POST', className: 'main_form' },
                    React.createElement("p", { className: 'wrap_each_main_input' },
                        React.createElement("input", { type: 'email', name: 'email', className: 'each_main_input', ref: this.emailCorrect, placeholder: 'E-mail', onChange: this.checkCorrectData, required: true })),
                    React.createElement("p", { className: 'wrap_each_main_input' },
                        React.createElement("input", { type: 'password', name: 'password', className: 'each_main_input', ref: this.pass, placeholder: 'Set Password', onChange: this.checkCorrectData, required: true }),
                        React.createElement("img", { src: eye, onClick: this.changeTypeOfPass1, className: 'eyes' })),
                    React.createElement("p", { className: 'wrap_each_main_input', style: { display: typeof window != "undefined" && window.location.pathname == '/registration' ? 'grid' : 'none' } },
                        React.createElement("input", { type: 'password', className: 'each_main_input', ref: this.passConfirm, placeholder: 'Confirm Password', onChange: this.checkCorrectData, required: typeof window != "undefined" && window.location.pathname == '/registration' ? true : false }),
                        React.createElement("img", { src: eye, onClick: this.changeTypeOfPass2, className: 'eyes' })),
                    React.createElement("p", { className: 'pass_condition' }, "Password must contain minimum 9 characters including at least 1 uppercase letter, 1 special character and 1 number"),
                    React.createElement("p", { className: 'agree_text' },
                        React.createElement("span", { className: 'wrap_main_checkbox', id: 'wrap_main_c', ref: this.checkBlue, onClick: this.changeInputColor },
                            React.createElement("input", { type: 'checkbox', id: 'main_checkbox', ref: this.chekBoxInside, required: true })),
                        " I agree with ",
                        React.createElement(NavLink, { to: '#', id: 'terms' }, " Terms of Services")),
                    React.createElement("p", { className: 'wrap_sub_button' },
                        React.createElement("button", { type: 'submit', id: 'sub_button', disabled: this.state.disFunction, ref: this.correctBlue }, "Submit"))),
                React.createElement("p", { className: 'blue_resend reactivation' },
                    React.createElement("a", { href: '#', className: 'blue_resend' }, "Resend activation E-mail")),
                React.createElement("p", { className: 'wrap_blue_resend' },
                    React.createElement("a", { href: typeof window != "undefined" && window.location.pathname == '/registration' ? '/signin' : '/registration', className: 'blue_resend' }, typeof window != "undefined" && window.location.pathname == '/registration' ? `Log in if ` : `Registrate if `),
                    "you have ",
                    typeof window != "undefined" && window.location.pathname == '/registration' ? '' : 'not',
                    " an account"))));
    }
}
export default RegistrationForm;
