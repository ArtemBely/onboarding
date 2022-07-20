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
                  <input type='email' placeholder='Email' name='alterEmail' className='alternative_inputs' id='spec_inp1'/>
                  <input type='tel' placeholder='Phone' name='codePhone' className='alternative_inputs'/>
                  <p className='us_title' id='home_address_txt'>Domicile address</p>
                  <p className='title_salut'>Street, No.</p>
                  <p className='title_salut'>City/State</p>
                  <input type='text' placeholder='Street, No.' name='streetNo' className='alternative_inputs' id='spec_inp2'/>
                  <input type='text' placeholder='City/State' name='cityState' className='alternative_inputs'/>
                  <p className='title_salut'>Mailbox</p>
                  <p className='title_salut'>Country of residence</p>
                  <input type='text' placeholder='Mailbox' name='mailBox' className='alternative_inputs' id='spec_inp3'/>
                  <input type='text' placeholder='Country of residence' name='resedenceCountry' className='alternative_inputs'/>
                  <p className='title_salut'>Postal code</p>
                  <p className='title_salut'>Сorrespondence address</p>
                  <input type='text' placeholder='Postal code' name='postalCode' className='alternative_inputs' id='spec_inp4'/>
                  <input type='text' placeholder='Address' name='domAddress' className='alternative_inputs'/>
              </div>
				</div>
			)
		}

}

export default Alternative;
