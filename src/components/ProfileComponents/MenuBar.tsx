import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined
}
class MenuBar extends Component<{}, iState>{

  constructor(state: iState) {

    super(state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_STATE__;
    }

    this.state = {
      user
    }
  }

  render() {
    return(
        <div className='wrap_menuBar'>
            <div className={this.state.user && Object.values(this.state.user)[0] == "admin" ? "menuBarCompany" : "menuBar"}>
                  <NavLink to='/profile' exact={true} className='menuBar_navLinks' activeClassName='menuBar_activeLinks'>Account</NavLink>
                  <NavLink to='/account_company_details' className='menuBar_navLinks' style={{display: this.state.user && Object.values(this.state.user)[0] == "admin" ? "flex" : "none"}} activeClassName='menuBar_activeLinks'>Company details</NavLink>
                  <NavLink to='/account_details' className='menuBar_navLinks' activeClassName='menuBar_activeLinks'>Personal details</NavLink>
                  <NavLink to={this.state.user && Object.values(this.state.user)[0] == "admin" ? '/connected_parties' : '/account_finances'} className='menuBar_navLinks' activeClassName='menuBar_activeLinks'>
                    {this.state.user && Object.values(this.state.user)[0] == "admin" ? "Connected parties" : "Financial situation"}
                  </NavLink>
                  <NavLink to='/account_documents' className='menuBar_navLinks' activeClassName='menuBar_activeLinks'>Documents</NavLink>
            </div>
        </div>
    )
  }
}

export default MenuBar;
