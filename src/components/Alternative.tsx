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
                  <input type='email' form='checkPersonal' required placeholder='Email' onChange={(e:any) => (document.getElementById('alterEmailHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs' id='spec_inp1'/>
                  <input type='tel' form='checkPersonal' required placeholder='Phone' onChange={(e:any) => (document.getElementById('codePhoneHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs'/>
                  <p className='us_title' id='home_address_txt'>Domicile address</p>
                  <p className='title_salut'>Street, No.</p>
                  <p className='title_salut'>City/State</p>

                  <input type='text' form='checkPersonal' required  placeholder='Street, No.' onChange={(e:any) => (document.getElementById('streetNoHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs' id='spec_inp2'/>
                  <input type='text' form='checkPersonal' required  placeholder='City/State' onChange={(e:any) => (document.getElementById('cityStateHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs'/>
                  <p className='title_salut'>Mailbox</p>
                  <p className='title_salut'>Country of residence</p>
                  <input type='text' form='checkPersonal' required  placeholder='Mailbox' name='mailBox' onChange={(e) => (document.getElementById('mailBoxHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs' id='spec_inp3'/>
                  <input type='text' form='checkPersonal' required  placeholder='Country of residence' onChange={(e) => (document.getElementById('resedenceCountryHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs'/>
                  <p className='title_salut'>Postal code</p>
                  <p className='title_salut'>Сorrespondence address</p>
                  <input type='text' form='checkPersonal' required  placeholder='Postal code' onChange={(e) => (document.getElementById('postalCodeHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs' id='spec_inp4'/>
                  <input type='text' form='checkPersonal' required  placeholder='Address' onChange={(e) => (document.getElementById('domAddressHid') as HTMLInputElement).value = e.target.value} className='alternative_inputs'/>
              </div>
				</div>
			)
		}

}

export default Alternative;
