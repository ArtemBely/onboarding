import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Correspondence extends Component{

  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private main_checkbox1 = React.createRef<HTMLInputElement>();
  private main_checkbox2 = React.createRef<HTMLInputElement>();
  private main_checkbox3 = React.createRef<HTMLInputElement>();
  private main_checkbox4 = React.createRef<HTMLInputElement>();

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

changeInputColor11 = (e:any) => {
  this.firstBlue?.current?.classList.contains('blueCheckBox') ?
  this.firstBlue?.current?.classList.remove('blueCheckBox') :
  this.firstBlue?.current?.classList.add('blueCheckBox');
  this.main_checkbox1?.current?.checked ?
  (this.main_checkbox3?.current as HTMLInputElement).value = 'Same as domicile address' :
  (this.main_checkbox3?.current as HTMLInputElement).value = 'Another address'
}

changeInputColor22 = (e:any) => {
  this.secondBlue?.current?.classList.contains('blueCheckBox') ?
  this.secondBlue?.current?.classList.remove('blueCheckBox') :
  this.secondBlue?.current?.classList.add('blueCheckBox');
  this.main_checkbox2?.current?.checked ?
  (this.main_checkbox4?.current as HTMLInputElement).value = 'I agree that my data will be processed' :
  (this.main_checkbox4?.current as HTMLInputElement).value = ''
}

render() {

			return (
				<div className='wrap_correspondence'>
              <div className='correspondence'>
                      <p className='us_title' id='corr_txt2'>Correspondence address</p>
                      <p className='wrap_main_checkbox2' ref={this.firstBlue}>
                          <input type='checkbox' onChange={this.changeInputColor11} ref={this.main_checkbox1} className='main_checkbox'/>
                          <input type='hidden' name='corrAddressAsDom' ref={this.main_checkbox3} form='checkPersonal1' value='Another address' />
                      </p>
                      <p className='corr_text'>Same as domicile address</p>
                      <p className='wrap_main_checkbox2' ref={this.secondBlue}>
                          <input type='checkbox' onChange={this.changeInputColor22} ref={this.main_checkbox2} className='main_checkbox'/>
                          <input type='hidden' name='dataProcessed' ref={this.main_checkbox4} form='checkPersonal1' required />
                      </p>
                      <p className='corr_text'>I agree that my data will be processed</p>
              </div>
				</div>
			)
		}

}

export default Correspondence;
