import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class YourAccount extends Component{

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


render() {

			return (
				<div className='wrap_your_account'>
					<div className='your_account'>
            <p className='title_account'>Your Account</p>
            <p className='welcome_to_acc'>Welcome to the Digital Onboarding at PI Digital!</p>
            <p className='each_acc_text'>We will guide you through a questionnaire in order to collect all the data to prepare your account opening documents for you</p>
            <p className='each_acc_text'>As a last step you will go through a video identification process where you give consent to digitally sign the account opening documents</p>
            <p className='each_acc_text'>Kindly keep your passport/ identification documents ready for the identification</p>
            <p className='each_acc_text'>Please do also make sure you are using a device with a webcam and microphone and that third-party cookies are allowed</p>
            <p className='each_acc_text'>Please mind that the recommended browsers are Chrome and Firefox. Unfortunately, Identification with Safari is not possible at the
             moment as it does not fully support WebRTC</p>
            <p className='each_acc_text'>Operating hours for Video Identification are from Monday to Saturday, 7am - 10pm, CET. You can start the Onboarding right away
             and return later, at any time. Progress will be saved</p>
            <p className='each_acc_text'>Please note that completing the Digital Onboarding process does not incur any costs on your side</p>
					</div>
				</div>
			)
		}

}

export default YourAccount;
