import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        return (React.createElement("div", { className: 'wrap_menuBar' },
            React.createElement("div", { className: this.state.user && Object.values(this.state.user)[0] == "admin" ? "menuBarCompany" : "menuBar" },
                React.createElement(NavLink, { to: '/profile', exact: true, className: 'menuBar_navLinks', activeClassName: 'menuBar_activeLinks' }, "Account"),
                React.createElement(NavLink, { to: '/account_company_details', className: 'menuBar_navLinks', style: { display: this.state.user && Object.values(this.state.user)[0] == "admin" ? "flex" : "none" }, activeClassName: 'menuBar_activeLinks' }, "Company details"),
                React.createElement(NavLink, { to: '/account_details', className: 'menuBar_navLinks', activeClassName: 'menuBar_activeLinks' }, "Personal details"),
                React.createElement(NavLink, { to: this.state.user && Object.values(this.state.user)[0] == "admin" ? '/connected_parties' : '/account_finances', className: 'menuBar_navLinks', activeClassName: 'menuBar_activeLinks' }, this.state.user && Object.values(this.state.user)[0] == "admin" ? "Connected parties" : "Financial situation"),
                React.createElement(NavLink, { to: '/account_documents', className: 'menuBar_navLinks', activeClassName: 'menuBar_activeLinks' }, "Documents"))));
    }
}
export default MenuBar;
