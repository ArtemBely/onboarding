import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined
}

class IncomeSlider extends Component<{}, iState> {



constructor(state: iState) {

  super(state)

  let user;
  if(typeof window != "undefined") {
    user = window.__INITIAL_STATE__;
  }

  this.state = {
    user
  }

}



render() {

			return (
				<div className='wrap_slider2'>
  					<div className='slider'>
                <div className='each_wrap_slider'>
                      <p className='title_salut income'>Yearly income (in CHF)</p>
                      <div className='common_slider'></div>
                      <input type='text' form='checkPersonal2' name='yearlyIncome1' required className='number_qty' />
                      <input type='text' form='checkPersonal2' name='yearlyIncome2' required  className='number_qty2' />
                </div>
                <div className='each_wrap_slider'>
                      <p className='title_salut income'>Net wealth (in CHF)</p>
                      <div className='common_slider'></div>
                      <input type='text' form='checkPersonal2' name='netWealth1' required  className='number_qty' />
                      <input type='text' form='checkPersonal2' name='netWealth2' required  className='number_qty2' />
                </div>
  					</div>
				</div>
			)
		}

}

export default IncomeSlider;
