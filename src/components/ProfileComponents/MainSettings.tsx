import React, { Component } from 'react';
//@ts-ignore
import eye from '../../../images/eye.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class MainSettings extends Component{

  private passTop = React.createRef<HTMLDivElement>();
  private hideStars = React.createRef<HTMLParagraphElement>();
  private hideStarsInp = React.createRef<HTMLInputElement>();

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

showEmailEdit = () => {
  document.querySelectorAll('.wrap_edit_email')[0].classList.remove('dispNone');
}

hideEmailEdit = () => {
  document.querySelectorAll('.wrap_edit_email')[0].classList.add('dispNone');
}

showPassEdit = () => {
  document.querySelectorAll('.wrap_edit_pass')[0].classList.remove('dispNone');
  this.passTop?.current?.classList.add('pass_top');
  this.hideStars?.current?.classList.add('dispNone');
  this.hideStarsInp?.current?.classList.remove('dispNone');
}

hidePassEdit = () => {
  document.querySelectorAll('.wrap_edit_pass')[0].classList.add('dispNone');
  this.passTop?.current?.classList.remove('pass_top');
  this.hideStars?.current?.classList.remove('dispNone');
  this.hideStarsInp?.current?.classList.add('dispNone');
}

render() {

			return (
        <div className='wrap_mainSettings'>
            <div className='mainSettings'>
                  <p className='us_title'>Account</p>
                  <div className='wrap_setts'>
                       <p className='title_of_doc each_title_set' id='email_txt'>E-mail</p>
                       <p className='title_of_doc each_set' onClick={this.showEmailEdit}>belyshevartem@mail.space</p>
                       <div className='wrap_edit_email dispNone'>
                             <p className='title_of_doc each_title_set'>New E-mail</p>
                             <input type='email' placeholder='belyshevartem@mail.space' id='email_inp' className='edit_inputs'/>
                             <p className='title_of_doc each_set' id='curr_edit_pass'>Current password</p>
                             <p><input type='password' placeholder='********' id='pass_inp' className='edit_inputs'/><img src={eye} className='eyes2'/></p>
                             <p className='forgot_pass'>Forgot your password?</p>
                             <div className='wrap_action_buttons'>
                                  <div className='action_btns'>
                                      <button type='submit' id='sub_save'>Save</button>
                                      <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                  </div>
                             </div>
                       </div>
                  </div>
                  <div className='wrap_setts' ref={this.passTop}>
                       <p className='title_of_doc each_title_set'>Password</p>
                       <p className='title_of_doc each_set' onClick={this.showPassEdit} ref={this.hideStars}>*******</p>
                       <input type='text' placeholder='********' id='old_pass' ref={this.hideStarsInp} className='edit_inputs dispNone'/>
                       <div className='wrap_edit_pass dispNone'>
                             <p className='title_of_doc each_title_set' id='curr_pass2'>Current password</p>
                             <p className='grig_gap_p'><input type='password' placeholder='********' id='email_inp' className='edit_inputs'/><img src={eye} id='high_pass_eye' className='eyes2'/></p>
                             <p className='title_of_doc each_set' id='curr_edit_pass'>Confirm password</p>
                             <p><input type='password' placeholder='********' id='pass_inp' className='edit_inputs'/><img src={eye} className='eyes2'/></p>
                             <p className='forgot_pass forgot_pass2'>Forgot your password?</p>
                             <div className='wrap_action_buttons'>
                                  <div className='action_btns'>
                                      <button type='submit' id='sub_save'>Save</button>
                                      <p className='cancel_btn' onClick={this.hidePassEdit}>Cancel</p>
                                  </div>
                             </div>
                       </div>
                  </div>
                  <div className='wrap_setts last_wrap_setts'>
                       <p className='title_of_doc each_title_set'>Account</p>
                       <p className='title_of_doc each_set'>An individual</p>
                  </div>
            </div>
        </div>
			)
		}

}

export default MainSettings;
