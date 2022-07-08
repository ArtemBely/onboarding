import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Correspondence extends Component{

  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();


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

changeInputColor11 = () => {
  this.firstBlue?.current?.classList.contains('blueCheckBox') ?
  this.firstBlue?.current?.classList.remove('blueCheckBox') :
  this.firstBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor22 = () => {
  this.secondBlue?.current?.classList.contains('blueCheckBox') ?
  this.secondBlue?.current?.classList.remove('blueCheckBox') :
  this.secondBlue?.current?.classList.add('blueCheckBox');
}

render() {

			return (
				<div className='wrap_correspondence'>
              <div className='correspondence'>
                      <p className='us_title'>Correspondence address</p>
                      <p className='wrap_main_checkbox2' ref={this.firstBlue}>
                          <input type='checkbox' onChange={this.changeInputColor11} className='main_checkbox'/>
                      </p>
                      <p className='corr_text'>Same as domicile address</p>
                      <p className='wrap_main_checkbox2' ref={this.secondBlue}>
                          <input type='checkbox' onChange={this.changeInputColor22} className='main_checkbox'/>
                      </p>
                      <p className='corr_text'>I agree that my data will be processed</p>
              </div>
				</div>
			)
		}

}

export default Correspondence;
