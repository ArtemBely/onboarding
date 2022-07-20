import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iProps {
  show: string
}

class Assets extends Component<iProps, {}>{


  constructor(props: iProps, state: any) {

    super(props, state)

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
				<div className='wrap_assets'>
              <div className='assets'>
                  <p className='us_title' style={{ display: this.props.show && this.props.show == 'hide' ? "none" : "block" }}
                   id='orig_asset_title'>Origin of assets</p>

                  <div className='each_asset'>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='selfEmpl' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[0].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Self-employment</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='investEarn' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[1].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Investment earnings: cryptocurrencies</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='saleOfComp' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[2].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Sale of company</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='payOff' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[3].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Pay-off/allowance</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='lotte' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[4].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Lotteries</p>
                  </div>

                  <div className='each_asset'>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='finProd' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[5].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Investment earnings: financial products</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='initOffer' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[6].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Investment earnings: Initial coin offerings</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='gift' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[7].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Inheritance/gift</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='rentalProceeds' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[8].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Real estate rental proceeds</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='pensionFunds' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[9].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Pension funds</p>
                  </div>

                  <div className='each_asset'>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='salaryIncome' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[10].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Salaried income</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='airdrops' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[11].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Airdrops</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='saleOfEstate' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[12].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Sale of real estate</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='saleOfValuables' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[13].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Sale of valuables (art etc.)</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' name='saleOfOther' className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[14].classList.toggle('blueCheckBox');
                          }}/>
                      </p>
                      <p className='corr_text corr2'>Other (specify)</p>
                  </div>

              </div>
				</div>
			)
		}

}

export default Assets;
