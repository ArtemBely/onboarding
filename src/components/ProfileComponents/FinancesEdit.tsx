import React, { Component } from 'react';
import Assets from '../Assets';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  count1: number
  check1: boolean,
  check2: boolean,
  check3: boolean,
  check4: boolean,
  check5: boolean,
  check6: boolean
}

class FinancesEdit extends Component <{}, iState> {

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        count1: 0,
        check1: false,
        check2: false,
        check3: true,
        check4: false,
        check5: true,
        check6: false
    }

  }

  showHiddenEdit = () => {
      document.querySelectorAll('.hiddenEdit3').forEach(item => ( item.classList.add('dispNone') ));
      document.querySelectorAll('.each_personalEdit3').forEach(item => ( item.classList.remove('extraMarginTop') ));
      document.querySelectorAll('.indicateChange2').forEach(item => ( item.classList.remove('dispNone') ));
      document.querySelectorAll('.hiddenEdit3')[this.state.count1].classList.remove('dispNone');
      document.querySelectorAll('.indicateChange2')[this.state.count1].classList.add('dispNone');
      document.querySelectorAll('.each_personalEdit3').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
      document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.remove('whiteFone');
      document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.add('extraMarginTop');
  }

  hideEmailEdit = () => {
    document.querySelectorAll('.hiddenEdit3')[this.state.count1].classList.add('dispNone');
    document.querySelectorAll('.indicateChange2')[this.state.count1].classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.remove('extraMarginTop');
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
        <div className='wrap_personalEdit'>
            <div className='personalEdit'>

                  <p className='us_title personal_det_title'>Financial situation</p>

                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Origin of assets   </p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 0 })}
                        onMouseUp={this.showHiddenEdit}>Self-employment, Investment earnings: cryptocurrencies,
                         Sale of company, Pay-off/allowance, Lotteries, Investment earnings: financial products,
                         Investment earnings: Initial coin offerings, Inheritance/gift, Real estate rental proceeds,
                         Pension funds, Salaried income, Airdrops, Sale of real estate, Sale of valuables (art etc.), Other (specify)</p>

                         <div className='hiddenEdit3 fullScreen extraMarginTop dispNone'>
                             <Assets show={'hide'} />
                             <div className='wrap_action_buttons22'>
                                  <div className='action_btns2'>
                                      <button type='submit' id='sub_save'>Save</button>
                                      <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                  </div>
                             </div>
                         </div>
                  </div>

                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Yearly income (in CHF)</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 1 })}
                        onMouseUp={this.showHiddenEdit}>100 000-1 000 000</p>

                        <div className='hiddenEdit3 dispNone'>
                            <div className='each_wrap_slider'>
                                  <p className='title_salut income'>Yearly income (in CHF)</p>
                                  <div className='common_slider'></div>
                                  <input type='text' className='number_qty' />
                                  <input type='text' className='number_qty2' />
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>

                  </div>

                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Net wealth (in CHF)</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 2 })}
                        onMouseUp={this.showHiddenEdit}>500 000-25 000 000</p>

                        <div className='hiddenEdit3 dispNone'>
                            <div className='each_wrap_slider'>
                                  <p className='title_salut income'>Net wealth (in CHF)</p>
                                  <div className='common_slider'></div>
                                  <input type='text' className='number_qty' />
                                  <input type='text' className='number_qty2' />
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>


                  <p className='us_title personal_det_title'>Fiat accounts</p>

                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Reference currency</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 3 })}
                        onMouseUp={this.showHiddenEdit}>USD</p>

                        <div className='hiddenEdit3 dispNone'>
                            <div className='wrap_title_yours'>
                               <p className='each_title_yours_currency' ref={this.firstTitle}>CHF <input type='checkbox' checked={this.state.check1} value="CHF" onChange={this.changeOneTitle} className='allCheckBoxes7'/></p>
                               <p className='each_title_yours_currency' ref={this.secondTitle}>EUR <input type='checkbox' checked={this.state.check2} value="EUR" onChange={this.changeTwoTitle} className='allCheckBoxes7'/></p>
                               <p className='each_title_yours_currency choosen_type_blue' ref={this.thirdTitle}>USD<input type='checkbox' checked={this.state.check3} value="USD" onChange={this.changeThreeTitle} className='allCheckBoxes7'/></p>
                               <p className='each_title_yours_currency' ref={this.fourthTitle}>SGD<input type='checkbox' checked={this.state.check4} value="SGD" onChange={this.changeFourthTitle} className='allCheckBoxes7'/></p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>

                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='ammount_finance_title'>Amount of first transfer to account at PI Digital in CHF</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 4 })}
                        onMouseUp={this.showHiddenEdit}>Amount</p>

                        <div className='hiddenEdit3 dispNone'>
                            <input type='text' name='ammount' className='com_input' placeholder='Ammount'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='bank_finance_title'>Bank and country of origin of the assets to be transferred to PI Digital</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 5 })}
                        onMouseUp={this.showHiddenEdit}>Bank</p>

                        <div className='hiddenEdit3 dispNone'>
                            <input type='text' placeholder='Bank' id='' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Transfer</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 6 })}
                        onMouseUp={this.showHiddenEdit}>No</p>

                        <div className='hiddenEdit3 dispNone'>
                            <div className='wrap_transfer2'>
                                <p className='corr_text2'>No transfer</p>
                                <p className='wrap_main_checkbox2' ref={this.firstBlue}>
                                    <input type='checkbox' onChange={this.changeInputColor21} className='main_checkbox'/>
                                </p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='wrap_change_requestBtn'>
                        <button type='submit' className='change_requestBtn'>Submit a request for data change</button>
                  </div>

                  <p className='us_title personal_det_title'>PI Digital wallets</p>

                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='ind_edit_txt'>Indicative initial BTC transfer to PI Digital wallet</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 7 })}
                        onMouseUp={this.showHiddenEdit}>Indicative initial BTC transfer to PI Digital wallet </p>

                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <input type='text' placeholder='Indicative initial BTC transfer to PI Digital wallet ' id='' className='alternative_inputs2 long_input'/>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='ammount_finance_title'>BTC wallet address used for the transfer</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 8 })}
                        onMouseUp={this.showHiddenEdit}>BTC wallet address used for the transfer </p>

                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <input type='text' placeholder='BTC wallet address used for the transfer' id='' className='alternative_inputs2 long_input'/>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='bank_finance_title'>Indicative initial ETH transfer to PI Digital wallet</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 9 })}
                        onMouseUp={this.showHiddenEdit}>Indicative initial ETH transfer to PI Digital wallet </p>

                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <input type='text' placeholder='Indicative initial ETH transfer to PI Digital wallet ' id='' className='alternative_inputs2 long_input'/>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person' id='bank_finance_title'>ETH wallet address used for the transfer</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 10 })}
                        onMouseUp={this.showHiddenEdit}>ETH wallet address used for the transfer  </p>

                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <input type='text' placeholder='ETH wallet address used for the transfer   ' id='' className='alternative_inputs2 long_input'/>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit3 whiteFone'>
                        <p className='each_edit_person'>Transfer</p>
                        <p className='each_edit_person indicateChange2' onMouseDown={() => this.setState({ count1: 11 })}
                        onMouseUp={this.showHiddenEdit}>No</p>

                        <div className='hiddenEdit3 dispNone'>
                            <div className='wrap_transfer2'>
                                <p className='corr_text2'>No transfer</p>
                                <p className='wrap_main_checkbox2' ref={this.secondBlue}>
                                    <input type='checkbox' onChange={this.changeInputColor22} className='main_checkbox'/>
                                </p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='wrap_change_requestBtn'>
                        <button type='submit' className='change_requestBtn'>Submit a request for data change</button>
                  </div>

                  <p className='us_title personal_det_title'>Declaration of beneficial ownership</p>

                  <div className='each_personalEdit3 whiteFone spec_declare'>
                        <p className='each_edit_person indicateChange2' id='declare_txt' onMouseDown={() => this.setState({ count1: 12 })}
                        onMouseUp={this.showHiddenEdit}>I declare that I am the beneficial owner of all the fiat as well as digital assets involved in the business relationship</p>
                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <div className='wrap_transfer4'>
                                <p className='corr_text2'>I declare that I am the beneficial owner of all the fiat as well as digital assets involved in the business relationship.</p>
                                <p className='wrap_main_checkbox2' ref={this.thirdBlue}>
                                    <input type='checkbox' onChange={this.changeInputColor23} className='main_checkbox'/>
                                </p>
                            </div>
                            <div className='wrap_action_buttons22_declare'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <p className='us_title personal_det_title'>Declarations / Disclaimers</p>

                  <div className='each_personalEdit3 whiteFone last_wrap_setts spec_declare'>
                        <p className='each_edit_person declare_txt2'>Declarations / Disclaimers</p>
                        <p className='each_edit_person declare_txt2 indicateChange2' onMouseDown={() => this.setState({ count1: 13 })}
                        onMouseUp={this.showHiddenEdit}>I agree to receive updates and news from PI Digital via email</p>

                        <div className='hiddenEdit3 fullScreen dispNone'>
                            <div className='wrap_white_agree_block'>
                               <div className='white_agree_block'>
                                   <p className='each_agree_block blue_each_white_per'><input type='checkbox' checked={this.state.check5} onChange={this.changeWhite1} className='allCheckBoxes8'/>I agree to receive updates and news from PI Digital via email</p>
                                   <p className='each_agree_block'><input type='checkbox' checked={this.state.check6} onChange={this.changeWhite2} className='allCheckBoxes8'/>I do not agree to receive updates and news from PI Digital via email</p>
                               </div>
                            </div>

                            <div className='wrap_case3_id'>
                                 <p className='case2 case2_id'>Through the completion of this questionnaire no contract or legal binding relationship between you and PI Digital will be concluded. Furthermore,
                                 the completion of the questionnaire is no contract request and is no guarantee that a contractual relationship between you and PI Digital will ever be concluded.</p>
                                 <p className='case2 case2_id'>Any dispute, controversy or claim arising out of or relating to the completion, interpretation, performance or invalidity of this questionnaire shall
                                  be decided by the competent courts in the Canton of Zug, Switzerland.</p>
                                 <p className='case2 case2_id'>This questionnaire shall be governed by and construed in accordance with the laws of Switzerland, without giving effect to any choice or conflict of law provision or rule.</p>
                                 <p className='case2 case2_id'>Please note that it is not possible to completely opt out of receiving email from PI Digital, as performing certain transactions would require email approval from the client.
                                   The above option only applies to receiving news and promotional updates via email.</p>
                             </div>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
			)
		}

}

export default FinancesEdit;
