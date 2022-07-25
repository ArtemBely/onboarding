import React, { Component } from 'react';
//@ts-ignore
import darkLogo from '../../images/Vector-2.svg';
//@ts-ignore
import iconUser from '../../images/user.svg';
//@ts-ignore
import loginImg from '../../images/log-in.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Header extends Component{

  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        user
    }

  }

centralTitle = () => {
    if(typeof window != "undefined" && window.location.pathname == '/create_account') {
      return (
        <p className='centralTitle'>Create account</p>
      )
    }
    if(typeof window != "undefined" && (window.location.pathname == '/personal_details' || window.location.pathname == '/company_personal')) {
      return (
        <p className='centralTitle'>Personal details</p>
      )
    }
    if(typeof window != "undefined" && window.location.pathname == '/company_details') {
      return (
        <p className='centralTitle'>Company details</p>
      )
    }
    if(typeof window != "undefined" && window.location.pathname == '/financial_situation') {
      return (
        <p className='centralTitle'>Financial situation and economic background</p>
      )
    }
    if(typeof window != "undefined" && (window.location.pathname == '/documents' || window.location.pathname == '/company_documents')) {
      return (
        <p className='centralTitle'>Check documents</p>
      )
    }
    if(typeof window != "undefined" && (window.location.pathname == '/verification' || window.location.pathname == '/company_verification')) {
      return (
        <p className='centralTitle'>Account verification</p>
      )
    }
    if(typeof window != "undefined" && (window.location.pathname == '/finish' || window.location.pathname == '/company_finish')) {
      return (
        <p className='centralTitle'>Finish</p>
      )
    }
    if(typeof window != "undefined" && window.location.pathname == '/parties') {
      return (
        <p className='centralTitle'>Connected parties</p>
      )
    }
    if(typeof window != "undefined" && (window.location.pathname == '/profile' || window.location.pathname == '/account_details' ||
        window.location.pathname == '/account_finances' || window.location.pathname == '/account_documents' || window.location.pathname == '/connected_parties' ||
        window.location.pathname == '/account_company_details')) {
      return (
        <p className='centralTitle'>Settings</p>
      )
    }
    if(typeof window != "undefined" && window.location.pathname == '/admin') {
      return (
        <p className='centralTitle'>Operator's account</p>
      )
    }

    return
}

render() {

			return (
				<div className='wrap_header'>
					<div className='header'>
              <p className='wrap_darkLogo'><img src={darkLogo} id='darkLogo'/></p>
              {this.centralTitle()}
              <p className='wrap_login'>
                 <img src={iconUser} id='iconUser'/>
                 <span className='userName'>user 12345</span>
                 <a href='/logout'><img src={loginImg} id='loginImg'/></a>
              </p>
					</div>
				</div>
			)
		}

}

export default Header;
