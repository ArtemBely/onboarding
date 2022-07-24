import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../images/Group 12397.svg';
//@ts-ignore
import eye from '../../images/eye.svg';

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined,
  disFunction: boolean
}

class RegistrationForm extends Component<{}, iState> {

private checkBlue = React.createRef<HTMLSpanElement>();
private chekBoxInside = React.createRef<HTMLInputElement>();
private correctBlue = React.createRef<HTMLButtonElement>();
private pass = React.createRef<HTMLInputElement>();
private passConfirm = React.createRef<HTMLInputElement>();
private emailCorrect = React.createRef<HTMLInputElement>();


constructor(state: iState) {

  super(state)

  let user;
  if(typeof window != "undefined") {
    user = window.__INITIAL_STATE__;
  }

  this.state = {
    user,
    disFunction: true
  }

  this.checkBlue = React.createRef();
  this.chekBoxInside = React.createRef();
}

changeInputColor = () => {
  this.chekBoxInside?.current?.checked ?
  this.checkBlue?.current?.classList.add('blueCheckBox') :
  this.checkBlue?.current?.classList.remove('blueCheckBox')
}

checkCorrectData = () => {
  if(typeof window != "undefined" && window.location.pathname == '/signin') {
    return;
  }
  if((this.pass?.current as HTMLInputElement).value == (this.passConfirm?.current as HTMLInputElement).value &&
        (this.pass?.current as HTMLInputElement).value.length >= 9 && /\d/.test((this.pass?.current as HTMLInputElement).value) &&
        /[A-Z]/.test((this.pass?.current as HTMLInputElement).value) &&
        specialChars.test((this.pass?.current as HTMLInputElement).value) &&
        (this.emailCorrect?.current as HTMLInputElement).value.indexOf('@') !== -1) {
    this.correctBlue?.current?.classList.add('activeRegButton');
    this.setState({ disFunction: false });
  }
  else {
    this.correctBlue?.current?.classList.remove('activeRegButton');
    this.setState({ disFunction: true });
  }
}

changeTypeOfPass1 = () => {
  if(this.pass.current != null && this.pass.current.type == "password") {
    this.pass.current.type = "text";
  }
  else if(this.pass.current != null) {
    this.pass.current.type = 'password'
  }
}

changeTypeOfPass2 = () => {
  if(this.passConfirm.current != null && this.passConfirm.current.type == "password") {
    this.passConfirm.current.type = "text";
  }
  else if(this.passConfirm.current != null) {
    this.passConfirm.current.type = 'password'
  }
}

componentDidMount() {
  if(typeof window != "undefined" && window.location.pathname == '/signin') {
    this.setState({ disFunction: false });
    this.correctBlue?.current?.classList.add('activeRegButton');
  }
}

render() {

			return (
				<div className='wrap_registration'>
  					<div className='registration'>
                    <p className='wrap_logo_form'><img src={logo} id='logo'/></p>
                    <p className='reg_title'>{typeof window != "undefined" && window.location.pathname == '/registration' ? "Registration" : "Log In"}</p>
                    <form action={typeof window != "undefined" && window.location.pathname == '/registration' ? '/registration' : '/registration/signin'} method='POST' className='main_form'>
                        <p className='wrap_each_main_input'><input type='email' name='email' className='each_main_input' ref={this.emailCorrect} placeholder='E-mail' onChange={this.checkCorrectData} required/></p>
                        <p className='wrap_each_main_input'><input type='password' name='password' className='each_main_input' ref={this.pass} placeholder='Set Password' onChange={this.checkCorrectData} required/><img src={eye} onClick={this.changeTypeOfPass1} className='eyes'/></p>
                        <p className='wrap_each_main_input' style={{display: typeof window != "undefined" && window.location.pathname == '/registration' ? 'grid' : 'none'}}><input type='password' className='each_main_input' ref={this.passConfirm} placeholder='Confirm Password'
                        onChange={this.checkCorrectData} required={typeof window != "undefined" && window.location.pathname == '/registration' ? true : false}/>
                        <img src={eye} onClick={this.changeTypeOfPass2} className='eyes'/></p>
                        <p className='pass_condition'>Password must contain minimum 9 characters including at least 1 uppercase letter,
                         1 special character and 1 number</p>
                        <p className='agree_text'><span className='wrap_main_checkbox' id='wrap_main_c' ref={this.checkBlue} onClick={this.changeInputColor}>
                            <input type='checkbox' id='main_checkbox' ref={this.chekBoxInside} required/></span> I agree with <NavLink to='#' id='terms'> Terms of Services</NavLink></p>
                        <p className='wrap_sub_button'>
                          <button type='submit' id='sub_button' disabled={this.state.disFunction} ref={this.correctBlue}>Submit</button>
                        </p>
                    </form>
                    <p className='blue_resend reactivation'><a href='#' className='blue_resend'>Resend activation E-mail</a></p>
                    <p className='wrap_blue_resend'><a href={typeof window != "undefined" && window.location.pathname == '/registration' ? '/signin' : '/registration'}
                     className='blue_resend'>{typeof window != "undefined" && window.location.pathname == '/registration' ? `Log in if ` : `Registrate if `}</a>
                     you have {typeof window != "undefined" && window.location.pathname == '/registration' ? '' : 'not'} an account</p>
  					</div>
				</div>
			)
		}

}

export default RegistrationForm;
