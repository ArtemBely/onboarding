import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Verification extends Component{

  private fourthBlue = React.createRef<HTMLParagraphElement>();
  private fithBlue = React.createRef<HTMLParagraphElement>();
  private sixthBlue = React.createRef<HTMLParagraphElement>();

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


  changeInputColor24 = () => {
    this.fourthBlue?.current?.classList.contains('blueCheckBox') ?
    this.fourthBlue?.current?.classList.remove('blueCheckBox') :
    this.fourthBlue?.current?.classList.add('blueCheckBox');
  }

  changeInputColor25 = () => {
    this.fithBlue?.current?.classList.contains('blueCheckBox') ?
    this.fithBlue?.current?.classList.remove('blueCheckBox') :
    this.fithBlue?.current?.classList.add('blueCheckBox');
  }

  changeInputColor26 = () => {
    this.sixthBlue?.current?.classList.contains('blueCheckBox') ?
    this.sixthBlue?.current?.classList.remove('blueCheckBox') :
    this.sixthBlue?.current?.classList.add('blueCheckBox');
  }

render() {

			return (
				<div className='wrap_verification'>
  					<div className='verification'>
                  <p className='us_title'>Please have your ID card or passport ready and keep your mobile phone within reach. </p>
                  <p className='us_title'>Supported languages: German, English, French, Italian </p>

                  <div className='wrap_transfer3'>
                      <p className='corr_text3'>I/we declare that the information and/or documents provided during this KYC-AML process is
                       true and correct according to my/our best knowledge.</p>
                      <p className='wrap_main_checkbox4' ref={this.fourthBlue}>
                          <input type='checkbox' onChange={this.changeInputColor24} className='main_checkbox'/>
                      </p>

                      <p className='corr_text3'>I/we hereby fully understand that providing false information is treated as a criminal
                       offence (article 251 of the Swiss Penal Code, document forgery)</p>
                      <p className='wrap_main_checkbox4' ref={this.fithBlue}>
                          <input type='checkbox' onChange={this.changeInputColor25} className='main_checkbox'/>
                      </p>

                      <p className='corr_text3'>I/we agree to start video identification procedure</p>
                      <p className='wrap_main_checkbox4' ref={this.sixthBlue} id='thirdCheckBox'>
                          <input type='checkbox' onChange={this.changeInputColor26} className='main_checkbox'/>
                      </p>
                  </div>

                   <div className='wrap_next_buttons4'>
                     <div className='first_next_buttons'>
                         <NavLink to={typeof window != "undefined" && window.location.pathname == '/company_verification' ? '/company_documents' : '/documents'} className='back_button'>Back</NavLink>
                         <NavLink to={typeof window != "undefined" && window.location.pathname == '/company_verification' ? '/company_finish' : '/finish'} className='next_button'>Next</NavLink>
                     </div>
                   </div>
  					</div>
				</div>
			)
		}

}

export default Verification;
