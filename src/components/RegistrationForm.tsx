import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../images/Group 12397.svg';
//@ts-ignore
import eye from '../../images/eye.svg';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined
}

class RegistrationForm extends Component<{}, iState> {

private checkBlue = React.createRef<HTMLSpanElement>();
private chekBoxInside = React.createRef<HTMLInputElement>();


constructor(state: iState) {

  super(state)

  let user;
  if(typeof window != "undefined") {
    user = window.__INITIAL_STATE__;
  }

  this.state = {
    user
  }

  this.checkBlue = React.createRef();
  this.chekBoxInside = React.createRef();
}

changeInputColor = () => {
  this.chekBoxInside?.current?.checked ?
  this.checkBlue?.current?.classList.add('blueCheckBox') :
  this.checkBlue?.current?.classList.remove('blueCheckBox')
}


render() {

			return (
				<div className='wrap_registration'>
  					<div className='registration'>
                    <p className='wrap_logo_form'><img src={logo} id='logo'/></p>
                    <p className='reg_title'>Registration</p>
                    <form action='/' method='POST' className='main_form'>
                        <p className='wrap_each_main_input'><input type='email' className='each_main_input' placeholder='E-mail' required/></p>
                        <p className='wrap_each_main_input'><input type='password' className='each_main_input' placeholder='Set Password' required/><img src={eye} className='eyes'/></p>
                        <p className='wrap_each_main_input'><input type='password' className='each_main_input' placeholder='Confirm Password' required/><img src={eye} className='eyes'/></p>
                        <p className='pass_condition'>Password must contain minimum 9 characters including at least 1 uppercase letter,
                         1 special character and 1 number</p>
                        <p className='agree_text'><span className='wrap_main_checkbox' ref={this.checkBlue} onClick={this.changeInputColor}>
                            <input type='checkbox' id='main_checkbox' ref={this.chekBoxInside} required/></span> I agree with <NavLink to='#' id='terms'> Terms of Services</NavLink></p>
                        <p className='wrap_sub_button'><button type='submit' id='sub_button'>Submit</button></p>
                    </form>
                    <p className='blue_resend reactivation'><a href='#' className='blue_resend'>Resend activation E-mail</a></p>
                    <p className='wrap_blue_resend'><a href='#' className='blue_resend'>Log in if</a> you have an account</p>
  					</div>
				</div>
			)
		}

}

export default RegistrationForm;
