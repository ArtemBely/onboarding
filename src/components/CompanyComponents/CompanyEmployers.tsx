import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  check1: boolean,
  check2: boolean,
  check3: boolean,
  check4: boolean,
  check5: boolean,
  check6: boolean,
  check7: boolean,
  check8: boolean,
  check9: boolean,
  check10: boolean,
  check11: boolean
}

class CompanyEmployers extends Component<{}, iState>{

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private firstBlue = React.createRef<HTMLParagraphElement>();
  private firstBlue2 = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        check1: true,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: true,
        check7: false,
        check8: false,
        check9: false,
        check10: true,
        check11: false
    }

  }

  changeInputColor1 = () => {
    this.setState({ check1: true, check2: false, check3: false});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[0].classList.add('choosen_type_blue');
  }

  changeInputColor2 = () => {
    this.setState({ check1: false, check2: true, check3: false});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[1].classList.add('choosen_type_blue');
  }

  changeInputColor3 = () => {
    this.setState({ check1: false, check2: false, check3: true});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[2].classList.add('choosen_type_blue');
  }

  changeInputColor4 = () => {
    this.setState({ check4: true, check5: false, check6: false, check7: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
  }

  changeInputColor5 = () => {
    this.setState({ check4: false, check5: true, check6: false, check7: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
  }

  changeInputColor6 = () => {
    this.setState({ check4: false, check5: false, check6: true, check7: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
  }

  changeInputColor7 = () => {
    this.setState({ check4: false, check5: false, check6: false, check7: true});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
  }

  changeInputColor8 = () => {
    this.thirdBlue?.current?.classList.contains('blueCheckBox') ?
    this.thirdBlue?.current?.classList.remove('blueCheckBox') :
    this.thirdBlue?.current?.classList.add('blueCheckBox');
  }

  changeInputColor9 = () => {
    this.firstBlue?.current?.classList.contains('blueCheckBox') ?
    this.firstBlue?.current?.classList.remove('blueCheckBox') :
    this.firstBlue?.current?.classList.add('blueCheckBox');
  }

  changeOneTitle = () => {
    this.setState({ check8: true, check9: false, check10: false, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.firstTitle?.current?.classList.add('choosen_type_blue');
  }

  changeTwoTitle = () => {
    this.setState({ check8: false, check9: true, check10: false, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.secondTitle?.current?.classList.add('choosen_type_blue');
  }

  changeThreeTitle = () => {
    this.setState({ check8: false, check9: false, check10: true, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.thirdTitle?.current?.classList.add('choosen_type_blue');
  }

  changeFourthTitle = () => {
    this.setState({ check8: false, check9: false, check10: false, check11: true });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.fourthTitle?.current?.classList.add('choosen_type_blue');
  }

  changeInputColor21 = () => {
    this.firstBlue2?.current?.classList.contains('blueCheckBox') ?
    this.firstBlue2?.current?.classList.remove('blueCheckBox') :
    this.firstBlue2?.current?.classList.add('blueCheckBox');
  }

  changeInputColor22 = () => {
    this.secondBlue?.current?.classList.contains('blueCheckBox') ?
    this.secondBlue?.current?.classList.remove('blueCheckBox') :
    this.secondBlue?.current?.classList.add('blueCheckBox');
  }

render() {

			return (
				<div className='wrap_companyEmployers'>
  					<div className='companyEmployers'>

              <p className='title_salut'>Employees of the company</p>
              <div className='wrap_comp_status'>
                  <p className='each_empl31 choosen_type_blue'>1 - 25 <input type='checkbox' checked={this.state.check1} onChange={this.changeInputColor1} value='1 - 25' className='allCheckBoxes6'/></p>
                  <p className='each_empl31'>25 - 100 <input type='checkbox' checked={this.state.check2} onChange={this.changeInputColor2} value='25 - 100' className='allCheckBoxes6'/></p>
                  <p className='each_empl31'> {`> 100`} <input type='checkbox' checked={this.state.check2} onChange={this.changeInputColor3} value='> 100' className='allCheckBoxes6'/></p>
              </div>

              <p className='title_salut' id='line2'>Line of business or industry (NOGA code)</p>
              <select id='selectCode2' className='com_input'>
                 <option value="" disabled selected>Code</option>
                 <option value="hurr">Durr</option>
              </select>

              <p className='title_salut' id='turnover2'>Company turnover</p>
              <div className='wrap_turn_status'>
                  <p className='each_empl4'>{`< CHF 5 m`}<input type='checkbox' checked={this.state.check4} onChange={this.changeInputColor4} value='< CHF 5 m' className='allCheckBoxes8'/></p>
                  <p className='each_empl4'>CHF 5 m - CHF 5 m <input type='checkbox' checked={this.state.check5} onChange={this.changeInputColor5} value='CHF 5 m - CHF 5 m' className='allCheckBoxes8'/></p>
                  <p className='each_empl4 choosen_type_blue'>CHF 10 m - CHF 25 m <input type='checkbox' checked={this.state.check6} onChange={this.changeInputColor6} value='CHF 10 m - CHF 25 m' className='allCheckBoxes8'/></p>
                  <p className='each_empl4'> {`> CHF 25 m`} <input type='checkbox' checked={this.state.check7} onChange={this.changeInputColor7} value='> CHF 25 m' className='allCheckBoxes8'/></p>
              </div>

              <div className='wrap_transfer3'>
                  <p className='corr_text4'>As an authorized signatory of legal entity, I declare that <span className='width_font'>funds that will be transferred to PI Digital are: (i) of legal origin</span> and
                   therefore not derived from any illicit activity <span className='width_font'>and (ii) fully tax compliant</span> according to the laws and regulations applicable in the country of incorporation/existence of the company.</p>
                  <p className='wrap_main_checkbox2' ref={this.thirdBlue}>
                      <input type='checkbox' onChange={this.changeInputColor8} className='main_checkbox'/>
                  </p>
              </div>

              <p className='us_title' id='company_reg_txt'>Registered office address at the place of incorporation</p>
              <p className='title_salut'>Street, No.</p>
              <p className='title_salut'>City/State</p>
              <input type='text' placeholder='Street, No.' className='alternative_inputs'/>
              <input type='text' placeholder='City/State' className='alternative_inputs'/>
              <p className='title_salut'>Mailbox</p>
              <p className='title_salut'>Country of residence</p>
              <input type='text' placeholder='Mailbox' className='alternative_inputs'/>
              <input type='text' placeholder='Country of residence' className='alternative_inputs'/>
              <p className='title_salut' id='company_postal'>Postal code</p>
              <input type='text' placeholder='Postal code' className='alternative_inputs'/>

              <div className='wrap_office_address'>
                <p className='us_title'>Correspondence address</p>
                <p className='wrap_main_checkbox2' ref={this.firstBlue}>
                    <input type='checkbox' onChange={this.changeInputColor9} className='main_checkbox'/>
                </p>
                <p className='corr_text'>Same as office address</p>
              </div>

              <p className='us_title pi_title' id='company_fiat_txt'>Fiat accounts</p>
              <p className='title_salut ref_curr_title'>Reference currency</p>
              <div className='wrap_title_yours'>
                 <p className='each_title_yours_currency' ref={this.firstTitle}>CHF <input type='checkbox' checked={this.state.check8} value="CHF" onChange={this.changeOneTitle} className='allCheckBoxes7'/></p>
                 <p className='each_title_yours_currency' ref={this.secondTitle}>EUR <input type='checkbox' checked={this.state.check9} value="EUR" onChange={this.changeTwoTitle} className='allCheckBoxes7'/></p>
                 <p className='each_title_yours_currency choosen_type_blue' ref={this.thirdTitle}>USD<input type='checkbox' checked={this.state.check10} value="USD" onChange={this.changeThreeTitle} className='allCheckBoxes7'/></p>
                 <p className='each_title_yours_currency' ref={this.fourthTitle}>SGD<input type='checkbox' checked={this.state.check11} value="SGD" onChange={this.changeFourthTitle} className='allCheckBoxes7'/></p>
              </div>
              <p className='title_salut title_fiat'>Amount of first transfer to account at PI Digital in CHF</p>
              <input type='text' name='ammount' className='com_input' placeholder='Ammount'/>
              <p className='title_salut title_fiat'>Bank and country of origin of the assets to be transferred to PI Digital</p>
              <input type='text' placeholder='Bank' id='' className='alternative_inputs long_input'/>

              <div className='wrap_transfer'>
                  <p className='corr_text2'>No transfer</p>
                  <p className='wrap_main_checkbox2' ref={this.firstBlue2}>
                      <input type='checkbox' onChange={this.changeInputColor21} className='main_checkbox'/>
                  </p>
              </div>

              <p className='us_title pi_title'>PI Digital wallets</p>
              <p className='title_salut ref_curr_title'>Indicative initial BTC transfer to PI Digital wallet</p>
              <input type='text' placeholder='Indicative initial BTC transfer to PI Digital wallet' id='' className='alternative_inputs long_input'/>
              <p className='title_salut ref_curr_title'>BTC wallet address used for the transfer</p>
              <input type='text' placeholder='BTC wallet address used for the transfer' id='' className='alternative_inputs long_input'/>
              <p className='title_salut ref_curr_title'>Indicative initial ETH transfer to PI Digital wallet</p>
              <input type='text' placeholder='Indicative initial ETH transfer to PI Digital wallet' id='' className='alternative_inputs long_input'/>
              <p className='title_salut ref_curr_title'>ETH wallet address used for the transfer</p>
              <input type='text' placeholder='ETH wallet address used for the transfer' id='' className='alternative_inputs long_input'/>

              <div className='wrap_transfer'>
                  <p className='corr_text2'>No transfer</p>
                  <p className='wrap_main_checkbox2' ref={this.secondBlue}>
                      <input type='checkbox' onChange={this.changeInputColor22} className='main_checkbox'/>
                  </p>
              </div>

              <div className='wrap_next_buttons5'>
                <div className='first_next_buttons'>
                    <NavLink to='/' className='back_button'>Back</NavLink>
                    <NavLink to='/company_personal' className='next_button'>Next</NavLink>
                </div>
              </div>
  					</div>
				</div>
			)
		}

}

export default CompanyEmployers;
