import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Verification extends Component {
    constructor(props) {
        super(props);
        this.fourthBlue = React.createRef();
        this.fithBlue = React.createRef();
        this.sixthBlue = React.createRef();
        this.changeInputColor24 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.fourthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.fourthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.fourthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor25 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.fithBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.fithBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.fithBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor26 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.sixthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.sixthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.sixthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_verification' },
            React.createElement("div", { className: 'verification' },
                React.createElement("p", { className: 'us_title' }, "Please have your ID card or passport ready and keep your mobile phone within reach. "),
                React.createElement("p", { className: 'us_title' }, "Supported languages: German, English, French, Italian "),
                React.createElement("div", { className: 'wrap_transfer3' },
                    React.createElement("p", { className: 'corr_text3' }, "I/we declare that the information and/or documents provided during this KYC-AML process is true and correct according to my/our best knowledge."),
                    React.createElement("p", { className: 'wrap_main_checkbox4', ref: this.fourthBlue },
                        React.createElement("input", { type: 'checkbox', form: 'registrationForm', onChange: this.changeInputColor24, className: 'main_checkbox' })),
                    React.createElement("p", { className: 'corr_text3' }, "I/we hereby fully understand that providing false information is treated as a criminal offence (article 251 of the Swiss Penal Code, document forgery)"),
                    React.createElement("p", { className: 'wrap_main_checkbox4', ref: this.fithBlue },
                        React.createElement("input", { type: 'checkbox', form: 'registrationForm', onChange: this.changeInputColor25, className: 'main_checkbox' })),
                    React.createElement("p", { className: 'corr_text3' }, "I/we agree to start video identification procedure"),
                    React.createElement("p", { className: 'wrap_main_checkbox4', ref: this.sixthBlue, id: 'thirdCheckBox' },
                        React.createElement("input", { type: 'checkbox', form: 'registrationForm', onChange: this.changeInputColor26, className: 'main_checkbox' }))),
                React.createElement("div", { className: 'wrap_next_buttons4' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: typeof window != "undefined" && window.location.pathname == '/company_verification' ? '/company_documents' : '/documents', className: 'back_button' }, "Back"),
                        React.createElement(NavLink, { to: typeof window != "undefined" && window.location.pathname == '/company_verification' ? '/company_finish' : '/finish', className: 'next_button' }, "Next"))))));
    }
}
export default Verification;
