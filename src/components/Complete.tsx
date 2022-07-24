import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Complete extends Component{


  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        check1: false,
        check2: false
    }

  }

render() {

			return (
				<div className='wrap_complete'>
  					<div className='complete'>
                  <p className='us_title'>Thank you for your patience, our personnel will confirm onboarding status</p>
                  <p className='wrap_nav_complete'>
                    <button form='registrationForm1' type='submit' className='complete_button'>Complete</button>
                  </p>
  					</div>
				</div>
			)
		}

}

export default Complete;
