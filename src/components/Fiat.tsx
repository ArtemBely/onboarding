import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  check1: boolean,
  check2: boolean,
  check3: boolean,
  check4: boolean,
  check5: boolean,
  check6: boolean
}

class Fiat extends Component<{}, iState> {

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();

constructor(state: iState) {

  super(state)

  let user;
  if(typeof window != "undefined") {
    user = window.__INITIAL_STATE__;
  }

  this.state = {
    check1: false,
    check2: false,
    check3: true,
    check4: false,
    check5: true,
    check6: false,
  }

}

changeOneTitle = () => {
  this.setState({ check1: true, check2: false, check3: false, check4: false });
  document.querySelectorAll('.each_title_yours_currency').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.firstTitle?.current?.classList.add('choosen_type_blue');
}

changeTwoTitle = () => {
  this.setState({ check1: false, check2: true, check3: false, check4: false });
  document.querySelectorAll('.each_title_yours_currency').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.secondTitle?.current?.classList.add('choosen_type_blue');
}

changeThreeTitle = () => {
  this.setState({ check1: false, check2: false, check3: true, check4: false });
  document.querySelectorAll('.each_title_yours_currency').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.thirdTitle?.current?.classList.add('choosen_type_blue');
}

changeFourthTitle = () => {
  this.setState({ check1: false, check2: false, check3: false, check4: true });
  document.querySelectorAll('.each_title_yours_currency').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.fourthTitle?.current?.classList.add('choosen_type_blue');
}

changeInputColor21 = () => {
  this.firstBlue?.current?.classList.contains('blueCheckBox') ?
  this.firstBlue?.current?.classList.remove('blueCheckBox') :
  this.firstBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor22 = () => {
  this.secondBlue?.current?.classList.contains('blueCheckBox') ?
  this.secondBlue?.current?.classList.remove('blueCheckBox') :
  this.secondBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor23 = () => {
  this.thirdBlue?.current?.classList.contains('blueCheckBox') ?
  this.thirdBlue?.current?.classList.remove('blueCheckBox') :
  this.thirdBlue?.current?.classList.add('blueCheckBox');
}

changeWhite1 = () => {
  this.setState({ check5: true, check6: false });
  document.querySelectorAll('.each_agree_block')[0].classList.add('blue_each_white_per');
  document.querySelectorAll('.each_agree_block')[1].classList.remove('blue_each_white_per');
}

changeWhite2 = () => {
  this.setState({ check5: false, check6: true });
  document.querySelectorAll('.each_agree_block')[1].classList.add('blue_each_white_per');
  document.querySelectorAll('.each_agree_block')[0].classList.remove('blue_each_white_per');
}

render() {

			return (
				<div className='wrap_fiat'>
  					<div className='fiat'>
                <p className='us_title pi_title'>Fiat accounts</p>
                <p className='title_salut ref_curr_title'>Reference currency</p>
                <div className='wrap_title_yours'>
                   <p className='each_title_yours_currency' ref={this.firstTitle}>CHF <input type='checkbox' checked={this.state.check1} value="CHF" onChange={this.changeOneTitle} className='allCheckBoxes7'/></p>
                   <p className='each_title_yours_currency' ref={this.secondTitle}>EUR <input type='checkbox' checked={this.state.check2} value="EUR" onChange={this.changeTwoTitle} className='allCheckBoxes7'/></p>
                   <p className='each_title_yours_currency choosen_type_blue' ref={this.thirdTitle}>USD<input type='checkbox' checked={this.state.check3} value="USD" onChange={this.changeThreeTitle} className='allCheckBoxes7'/></p>
                   <p className='each_title_yours_currency' ref={this.fourthTitle}>SGD<input type='checkbox' checked={this.state.check4} value="SGD" onChange={this.changeFourthTitle} className='allCheckBoxes7'/></p>
                </div>
                <p className='title_salut title_fiat'>Amount of first transfer to account at PI Digital in CHF</p>
                <input type='text' name='ammount' className='com_input' placeholder='Ammount'/>
                <p className='title_salut title_fiat'>Bank and country of origin of the assets to be transferred to PI Digital</p>
                <input type='text' placeholder='Profession' id='' className='alternative_inputs long_input'/>

                <div className='wrap_transfer'>
                    <p className='corr_text2'>No transfer</p>
                    <p className='wrap_main_checkbox2' ref={this.firstBlue}>
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

                <p className='us_title pi_title'>Declaration of beneficial ownership</p>
                <div className='wrap_transfer2'>
                    <p className='corr_text2'>I declare that I am the beneficial owner of all the fiat as well as digital assets involved in the business relationship.</p>
                    <p className='wrap_main_checkbox2' ref={this.thirdBlue} id='tablet_cb'>
                        <input type='checkbox' onChange={this.changeInputColor23} className='main_checkbox'/>
                    </p>
                </div>
                <p className='case2'>If you intend to transfer Bitcoin (BTC) or Ether (ETH) to your PI Digital wallet from a private wallet,
                 you will be asked to confirm your beneficial ownership by demonstrating access and control of your digital assets</p>

                 <p className='us_title pi_title'>Declarations / Disclaimers</p>
                 <p className='case2 case2_id'>PI Digital would like to send you updates and news regarding its services and PI Digital itself by email.
                  By signing up, you agree to PI Digital using your personal data in accordance with our Privacy Policy. You can unsubscribe at any time by
                  clicking on the «Unsubscribe» link at the bottom of your email. For further information please see our Privacy Policy.</p>

                 <div className='wrap_white_agree_block'>
                    <div className='white_agree_block'>
                        <p className='each_agree_block blue_each_white_per'><input type='checkbox' checked={this.state.check5} onChange={this.changeWhite1} className='allCheckBoxes8'/>I agree to receive updates and news from PI Digital via email</p>
                        <p className='each_agree_block'><input type='checkbox' checked={this.state.check6} onChange={this.changeWhite2} className='allCheckBoxes8'/>I do not agree to receive updates and news from PI Digital via email</p>
                    </div>
                 </div>

                 <div className='wrap_case2_id'>
                      <p className='case2 case2_id'>Through the completion of this questionnaire no contract or legal binding relationship between you and PI Digital will be concluded. Furthermore,
                      the completion of the questionnaire is no contract request and is no guarantee that a contractual relationship between you and PI Digital will ever be concluded.</p>
                      <p className='case2 case2_id'>Any dispute, controversy or claim arising out of or relating to the completion, interpretation, performance or invalidity of this questionnaire shall
                       be decided by the competent courts in the Canton of Zug, Switzerland.</p>
                      <p className='case2 case2_id'>This questionnaire shall be governed by and construed in accordance with the laws of Switzerland, without giving effect to any choice or conflict of law provision or rule.</p>
                      <p className='case2 case2_id'>Please note that it is not possible to completely opt out of receiving email from PI Digital, as performing certain transactions would require email approval from the client.
                        The above option only applies to receiving news and promotional updates via email.</p>
                  </div>

                  <div className='wrap_next_buttons03'>
                    <div className='first_next_buttons'>
                        <NavLink to='/personal_details' className='back_button'>Back</NavLink>
                        <NavLink to='/documents' className='next_button'>Next</NavLink>
                    </div>
                  </div>

  					</div>
				</div>
			)
		}

}

export default Fiat;
