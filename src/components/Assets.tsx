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

  private firstAsset0 = React.createRef<HTMLInputElement>();
  private firstAsset = React.createRef<HTMLInputElement>();
  private secondAsset0 = React.createRef<HTMLInputElement>();
  private secondAsset = React.createRef<HTMLInputElement>();
  private thirdAsset = React.createRef<HTMLInputElement>();
  private asset4 = React.createRef<HTMLInputElement>();
  private asset5 = React.createRef<HTMLInputElement>();
  private asset6 = React.createRef<HTMLInputElement>();
  private asset7 = React.createRef<HTMLInputElement>();
  private asset8 = React.createRef<HTMLInputElement>();
  private asset9 = React.createRef<HTMLInputElement>();
  private asset10 = React.createRef<HTMLInputElement>();
  private asset11 = React.createRef<HTMLInputElement>();
  private asset12 = React.createRef<HTMLInputElement>();
  private asset13 = React.createRef<HTMLInputElement>();
  private asset14 = React.createRef<HTMLInputElement>();
  private asset15 = React.createRef<HTMLInputElement>();


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
                          <input type='checkbox' ref={this.firstAsset0} className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[0].classList.toggle('blueCheckBox');
                            this.firstAsset0?.current?.checked ?
                            (this.firstAsset?.current as HTMLInputElement).value = 'Self-employment' :
                            (this.firstAsset?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.firstAsset} name='selfEmpl' />
                      </p>
                      <p className='corr_text corr2'>Self-employment</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' ref={this.secondAsset0} className='main_checkbox' onChange={() => {
                            document.querySelectorAll('.wrap_main_checkbox3')[1].classList.toggle('blueCheckBox');
                            this.secondAsset0?.current?.checked ?
                            (this.secondAsset?.current as HTMLInputElement).value = 'Investment earnings: cryptocurrencies' :
                            (this.secondAsset?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.secondAsset} name='investEarn' />
                      </p>
                      <p className='corr_text corr2'>Investment earnings: cryptocurrencies</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[2].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.thirdAsset?.current as HTMLInputElement).value = 'Sale of company' :
                            (this.thirdAsset?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.thirdAsset} name='saleOfComp' />
                      </p>
                      <p className='corr_text corr2'>Sale of company</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[3].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset4?.current as HTMLInputElement).value = 'Pay-off/allowance' :
                            (this.asset4?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset4} name='payOff' />
                      </p>
                      <p className='corr_text corr2'>Pay-off/allowance</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[4].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset5?.current as HTMLInputElement).value = 'Lotteries' :
                            (this.asset5?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset5} name='lotte' />
                      </p>
                      <p className='corr_text corr2'>Lotteries</p>
                  </div>

                  <div className='each_asset'>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[5].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset6?.current as HTMLInputElement).value = 'Investment earnings: financial products' :
                            (this.asset6?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset6} name='finProd' />
                      </p>
                      <p className='corr_text corr2'>Investment earnings: financial products</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[6].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset7?.current as HTMLInputElement).value = 'Investment earnings: Initial coin offerings' :
                            (this.asset7?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset7} name='initOffer' />
                      </p>
                      <p className='corr_text corr2'>Investment earnings: Initial coin offerings</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[7].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset8?.current as HTMLInputElement).value = 'Inheritance/gift' :
                            (this.asset8?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset8} name='gift' />
                      </p>
                      <p className='corr_text corr2'>Inheritance/gift</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[8].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset9?.current as HTMLInputElement).value = 'Real estate rental proceeds' :
                            (this.asset9?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset9} name='rentalProceeds' />
                      </p>
                      <p className='corr_text corr2'>Real estate rental proceeds</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[9].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset10?.current as HTMLInputElement).value = 'Pension funds' :
                            (this.asset10?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset10} name='pensionFunds' />
                      </p>
                      <p className='corr_text corr2'>Pension funds</p>
                  </div>

                  <div className='each_asset'>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[10].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset11?.current as HTMLInputElement).value = 'Salaried income' :
                            (this.asset11?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset11} name='salaryIncome' />
                      </p>
                      <p className='corr_text corr2'>Salaried income</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[11].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset12?.current as HTMLInputElement).value = 'Airdrops' :
                            (this.asset12?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset12} name='airdrops' />
                      </p>
                      <p className='corr_text corr2'>Airdrops</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox'  className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[12].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset13?.current as HTMLInputElement).value = 'Sale of real estate' :
                            (this.asset13?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset13} name='saleOfEstate' />
                      </p>
                      <p className='corr_text corr2'>Sale of real estate</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[13].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset14?.current as HTMLInputElement).value = 'Sale of valuables (art etc.)' :
                            (this.asset14?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset14} name='saleOfValuables' />
                      </p>
                      <p className='corr_text corr2'>Sale of valuables (art etc.)</p>
                      <p className='wrap_main_checkbox3'>
                          <input type='checkbox' className='main_checkbox' onChange={(e:any) => {
                            document.querySelectorAll('.wrap_main_checkbox3')[14].classList.toggle('blueCheckBox');
                            e.target.checked ?
                            (this.asset15?.current as HTMLInputElement).value = 'Other (specify)' :
                            (this.asset15?.current as HTMLInputElement).value = ''
                          }}/>
                          <input type='hidden' form='checkPersonal2' ref={this.asset15} name='saleOfOther' />
                      </p>
                      <p className='corr_text corr2'>Other (specify)</p>
                  </div>

              </div>
				</div>
			)
		}

}

export default Assets;
