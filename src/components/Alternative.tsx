import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Alternative extends Component{


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
				<div className='wrap_alternative'>
              <div className='alternative'>
                  <p className='title_salut' id='alter'>Alternative e-mail address for correspondence with PI Digital</p>
                  <p className='title_salut'>Phone (prepend country code)</p>
                  <input type='email' placeholder='Email' className='alternative_inputs'/>
                  <input type='tel' placeholder='Phone' className='alternative_inputs'/>
                  <p className='us_title'>Domicile address</p>
                  <p className='title_salut'>Street, No.</p>
                  <p className='title_salut'>City/State</p>
                  <input type='text' placeholder='Street, No.' className='alternative_inputs'/>
                  <input type='text' placeholder='City/State' className='alternative_inputs'/>
                  <p className='title_salut'>Mailbox</p>
                  <p className='title_salut'>Country of residence</p>
                  <input type='text' placeholder='Mailbox' className='alternative_inputs'/>
                  <input type='text' placeholder='Country of residence' className='alternative_inputs'/>
                  <p className='title_salut'>Postal code</p>
                  <p className='title_salut'>Сorrespondence address</p>
                  <input type='text' placeholder='Postal code' className='alternative_inputs'/>
                  <input type='text' placeholder='Address' className='alternative_inputs'/>
              </div>
				</div>
			)
		}

}

export default Alternative;
