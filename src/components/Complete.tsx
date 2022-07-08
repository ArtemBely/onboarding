import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                  <p className='wrap_nav_complete'><NavLink to='#' className='complete_button'>Complete</NavLink></p>
  					</div>
				</div>
			)
		}

}

export default Complete;
