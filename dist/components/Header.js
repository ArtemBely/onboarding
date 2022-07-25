import React, { Component } from 'react';
//@ts-ignore
import darkLogo from '../../images/Vector-2.svg';
//@ts-ignore
import iconUser from '../../images/user.svg';
//@ts-ignore
import loginImg from '../../images/log-in.svg';
class Header extends Component {
    constructor(props) {
        super(props);
        this.centralTitle = () => {
            if (typeof window != "undefined" && window.location.pathname == '/create_account') {
                return (React.createElement("p", { className: 'centralTitle' }, "Create account"));
            }
            if (typeof window != "undefined" && (window.location.pathname == '/personal_details' || window.location.pathname == '/company_personal')) {
                return (React.createElement("p", { className: 'centralTitle' }, "Personal details"));
            }
            if (typeof window != "undefined" && window.location.pathname == '/company_details') {
                return (React.createElement("p", { className: 'centralTitle' }, "Company details"));
            }
            if (typeof window != "undefined" && window.location.pathname == '/financial_situation') {
                return (React.createElement("p", { className: 'centralTitle' }, "Financial situation and economic background"));
            }
            if (typeof window != "undefined" && (window.location.pathname == '/documents' || window.location.pathname == '/company_documents')) {
                return (React.createElement("p", { className: 'centralTitle' }, "Check documents"));
            }
            if (typeof window != "undefined" && (window.location.pathname == '/verification' || window.location.pathname == '/company_verification')) {
                return (React.createElement("p", { className: 'centralTitle' }, "Account verification"));
            }
            if (typeof window != "undefined" && (window.location.pathname == '/finish' || window.location.pathname == '/company_finish')) {
                return (React.createElement("p", { className: 'centralTitle' }, "Finish"));
            }
            if (typeof window != "undefined" && window.location.pathname == '/parties') {
                return (React.createElement("p", { className: 'centralTitle' }, "Connected parties"));
            }
            if (typeof window != "undefined" && (window.location.pathname == '/profile' || window.location.pathname == '/account_details' ||
                window.location.pathname == '/account_finances' || window.location.pathname == '/account_documents' || window.location.pathname == '/connected_parties' ||
                window.location.pathname == '/account_company_details')) {
                return (React.createElement("p", { className: 'centralTitle' }, "Settings"));
            }
            if (typeof window != "undefined" && window.location.pathname == '/admin') {
                return (React.createElement("p", { className: 'centralTitle' }, "Operator's account"));
            }
            return;
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
        return (React.createElement("div", { className: 'wrap_header' },
            React.createElement("div", { className: 'header' },
                React.createElement("p", { className: 'wrap_darkLogo' },
                    React.createElement("img", { src: darkLogo, id: 'darkLogo' })),
                this.centralTitle(),
                React.createElement("p", { className: 'wrap_login' },
                    React.createElement("img", { src: iconUser, id: 'iconUser' }),
                    React.createElement("span", { className: 'userName' }, "user 12345"),
                    React.createElement("a", { href: '/logout' },
                        React.createElement("img", { src: loginImg, id: 'loginImg' }))))));
    }
}
export default Header;
