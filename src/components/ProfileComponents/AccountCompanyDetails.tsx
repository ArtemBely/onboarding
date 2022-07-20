import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined,
  count1: number,
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
  check11: boolean,
  check12: boolean,
  check13: boolean,
  check14: boolean,
  check15: boolean
}

class AccountCompanyDetails extends Component<{}, iState>{

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private firstBlue2 = React.createRef<HTMLParagraphElement>();
  private firstBlue3 = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();
  private uploadExtract = React.createRef<HTMLDivElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private thirdTitle0 = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle0 = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private first_ammount = React.createRef<HTMLParagraphElement>();

  constructor(state: iState) {

    super(state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_STATE__;
    }

    this.state = {
      user,
      count1: 0,
      check1: false,
      check2: true,
      check3: true,
      check4: false,
      check5: false,
      check6: true,
      check7: false,
      check8: false,
      check9: false,
      check10: true,
      check11: false,
      check12: false,
      check13: false,
      check14: true,
      check15: false
    }
  }

  showHiddenEdit = () => {
    this.state.count1 == 18 ? this.first_ammount?.current?.classList.add('for_ammount') :
    this.first_ammount?.current?.classList.remove('for_ammount');
    document.querySelectorAll('.hiddenEditSpec').forEach(item => ( item.classList.add('dispNone') ));
    document.querySelectorAll('.each_personalEdit4').forEach(item => ( item.classList.remove('extraMarginTop') ));
    document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
    document.querySelectorAll('.hiddenEditSpec')[this.state.count1].classList.remove('dispNone');
    document.querySelectorAll('.indicateChange')[this.state.count1].classList.add('dispNone');
    document.querySelectorAll('.each_personalEdit4').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
    document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.remove('whiteFone');
    document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.add('extraMarginTop');
  }

  hideEmailEdit = () => {
    this.first_ammount?.current?.classList.remove('for_ammount');
    document.querySelectorAll('.hiddenEditSpec')[this.state.count1].classList.add('dispNone');
    document.querySelectorAll('.indicateChange')[this.state.count1].classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.remove('extraMarginTop');
  }

  changeOneTitle = () => {
    this.setState({ check1: true, check2: false });
    this.firstTitle?.current?.classList.add('choosen_type_blue');
    this.secondTitle?.current?.classList.remove('choosen_type_blue');
    this.uploadExtract?.current?.classList.add('dispNone');
  }

  changeTwoTitle = () => {
    this.setState({ check1: false, check2: true });
    this.secondTitle?.current?.classList.add('choosen_type_blue');
    this.firstTitle?.current?.classList.remove('choosen_type_blue');
    this.uploadExtract?.current?.classList.remove('dispNone');
  }

  changeInputColor1 = () => {
    this.setState({ check3: true, check4: false, check5: false});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[0].classList.add('choosen_type_blue');
  }

  changeInputColor2 = () => {
    this.setState({ check3: false, check4: true, check5: false});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[1].classList.add('choosen_type_blue');
  }

  changeInputColor3 = () => {
    this.setState({ check3: false, check4: false, check5: true});
    document.querySelectorAll('.each_empl31').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl31')[2].classList.add('choosen_type_blue');
  }

  changeInputColor4 = () => {
    this.setState({ check6: true, check7: false, check8: false, check9: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
  }

  changeInputColor5 = () => {
    this.setState({ check6: false, check7: true, check8: false, check9: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
  }

  changeInputColor6 = () => {
    this.setState({ check6: false, check7: false, check8: true, check9: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
  }

  changeInputColor7 = () => {
    this.setState({ check6: false, check7: false, check8: false, check9: true});
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

  changeInputColor222 = () => {
    this.secondBlue?.current?.classList.contains('blueCheckBox') ?
    this.secondBlue?.current?.classList.remove('blueCheckBox') :
    this.secondBlue?.current?.classList.add('blueCheckBox');
  }

  changeThreeTitle = () => {
    this.setState({ check8: true, check9: false, check10: false, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.thirdTitle0?.current?.classList.add('choosen_type_blue');
  }

  changeFourthTitle = () => {
    this.setState({ check8: false, check9: true, check10: false, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.fourthTitle0?.current?.classList.add('choosen_type_blue');
  }

  changeFithTitle = () => {
    this.setState({ check8: false, check9: false, check10: true, check11: false });
    document.querySelectorAll('.each_title_yours_currency').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.thirdTitle?.current?.classList.add('choosen_type_blue');
  }

  changeSixthTitle = () => {
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
    this.firstBlue3?.current?.classList.contains('blueCheckBox') ?
    this.firstBlue3?.current?.classList.remove('blueCheckBox') :
    this.firstBlue3?.current?.classList.add('blueCheckBox');
  }

  changeWhite1 = () => {
    this.setState({ check14: true, check15: false });
    document.querySelectorAll('.each_agree_block')[0].classList.add('blue_each_white_per');
    document.querySelectorAll('.each_agree_block')[1].classList.remove('blue_each_white_per');
  }

  changeWhite2 = () => {
    this.setState({ check14: false, check15: true });
    document.querySelectorAll('.each_agree_block')[1].classList.add('blue_each_white_per');
    document.querySelectorAll('.each_agree_block')[0].classList.remove('blue_each_white_per');
  }

  render() {
    return(
        <p className='wrap_accCompDet'>
            <div className='accCompDet'>

                <p className='us_title' id='cd_1'>Company details</p>

                <div className='each_personalEdit4 whiteFone' id='edit1'>
                      <p className='each_edit_person'>Is the company publicly listed on a stock exchange?</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 0 })}
                      onMouseUp={this.showHiddenEdit}>No</p>

                      <div className='hiddenEditSpec dispNone' id='editSpec1'>
                          <div className='wrap_title_yours_company' id='edit2'>
                             <p className='each_title_yours choosen_type_blue' ref={this.firstTitle}>Yes <input type='checkbox' checked={this.state.check1} value="Yes" onChange={this.changeOneTitle} className='allCheckBoxes'/></p>
                             <p className='each_title_yours' ref={this.secondTitle}>No<input type='checkbox' checked={this.state.check2} value="No" onChange={this.changeTwoTitle} className='allCheckBoxes'/></p>
                          </div>
                          <div className='upload_extract dispNone' id='upload_extract1' ref={this.uploadExtract}>
                              <p className='title_yours_extra'>Please upload an extract from commercial register</p>
                              <div className='dashed_block2'>
                                      <input type='file' id='download_extract'/>
                                      <p className='title_yours'>Company register or similar</p>
                                      <p className='extract_inside' id='drop_txt'>Drop file here or click to select a file to upload (please note, only PDF, PNG and JPG documents are accepted)</p>
                                      <p className='extract_inside'>Evidence of incorporation – certified copy of certificate of incorporation and constitutive documents, if applicable extract of commercial register, trade license</p>
                                      <p className='extract_inside'>Certified copy of articles of association or statutes</p>
                                      <p className='extract_inside'>If corporate documents older than 12 months: Certificate of Incumbency and if applicable Certificate of Good Standing</p>
                              </div>
                          </div>
                          <div className='wrap_action_buttons22'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Entity name</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 1 })}
                      onMouseUp={this.showHiddenEdit}>Entity name</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Entity name' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Tax identification number</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 2 })}
                      onMouseUp={this.showHiddenEdit}>Tax identification number</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Tax identification number' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Country of registration</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 3 })}
                      onMouseUp={this.showHiddenEdit}>Country of registration</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Finland' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Entity type (beneficial ownership)</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 4 })}
                      onMouseUp={this.showHiddenEdit}>Foundation</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Foundation' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Date of incorporation</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 5 })}
                      onMouseUp={this.showHiddenEdit}>DD/MM/YYYY</p>

                      <div className='hiddenEditSpec dispNone'>
                      <input type='text' ref={this.dateInput} placeholder='DD/MM/YYYY' onFocus={() => {
                        if(this.dateInput.current != null) {
                          this.dateInput.current.type = "date";
                        }
                      }} className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Entity type (beneficial ownership)</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 6 })}
                      onMouseUp={this.showHiddenEdit}>Foundation</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='www.' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Employees of the company</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 7 })}
                      onMouseUp={this.showHiddenEdit}>25 - 100</p>

                      <div className='hiddenEditSpec dispNone'>
                          <div className='wrap_comp_status'>
                              <p className='each_empl31 choosen_type_blue'>1 - 25 <input type='checkbox' checked={this.state.check3} onChange={this.changeInputColor1} value='1 - 25' className='allCheckBoxes6'/></p>
                              <p className='each_empl31'>25 - 100 <input type='checkbox' checked={this.state.check4} onChange={this.changeInputColor2} value='25 - 100' className='allCheckBoxes6'/></p>
                              <p className='each_empl31'> {`> 100`} <input type='checkbox' checked={this.state.check5} onChange={this.changeInputColor3} value='> 100' className='allCheckBoxes6'/></p>
                          </div>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Line of business or industry (NOGA code)</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 8 })}
                      onMouseUp={this.showHiddenEdit}>Code</p>

                      <div className='hiddenEditSpec fullScreen dispNone' id='hiddenEditSpec1'>
                          <select id='selectCode2' className='com_input'>
                             <option value="" disabled selected>Code</option>
                             <option value="hurr">Durr</option>
                          </select>
                          <div className='wrap_action_buttons22'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Company turnover</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 9 })}
                      onMouseUp={this.showHiddenEdit}>CHF 10 m - CHF 25 m</p>

                      <div className='hiddenEditSpec fullScreen dispNone' id='hiddenEditSpec2'>
                          <div className='wrap_turn_status'>
                              <p className='each_empl4'>{`< CHF 5 m`}<input type='checkbox' checked={this.state.check6} onChange={this.changeInputColor4} value='< CHF 5 m' className='allCheckBoxes8'/></p>
                              <p className='each_empl4'>CHF 5 m - CHF 5 m <input type='checkbox' checked={this.state.check7} onChange={this.changeInputColor5} value='CHF 5 m - CHF 5 m' className='allCheckBoxes8'/></p>
                              <p className='each_empl4 choosen_type_blue'>CHF 10 m - CHF 25 m <input type='checkbox' checked={this.state.check8} onChange={this.changeInputColor6} value='CHF 10 m - CHF 25 m' className='allCheckBoxes8'/></p>
                              <p className='each_empl4'> {`> CHF 25 m`} <input type='checkbox' checked={this.state.check9} onChange={this.changeInputColor7} value='> CHF 25 m' className='allCheckBoxes8'/></p>
                          </div>
                          <div className='wrap_action_buttons22'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone' id='spec_eachEdit1'>
                      <p className='each_edit_person fullScreen' id='spec_an' onMouseDown={() => this.setState({ count1: 10 })}
                      onMouseUp={this.showHiddenEdit}>As an authorized signatory of legal entity, I declare that funds
                       that will be transferred to PI Digital are: (i) of legal origin and therefore not derived from
                       any illicit activity and (ii) fully tax compliant according to the laws and regulations applicable
                       in the country of incorporation/existence of the company.</p>
                      <p className='each_edit_person indicateChange' id='spec_an_below'></p>

                      <div className='hiddenEditSpec dispNone' id='spec_eachEdit2'>
                          <p className='wrap_main_checkbox2' ref={this.thirdBlue} id='spec4'>
                              <input type='checkbox' onChange={this.changeInputColor8} className='main_checkbox'/>
                          </p>
                          <div className='wrap_action_buttons2' id='spec3'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <p className='us_title reg_change_txt'>Registered office address at the place of incorporation</p>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Street, No.</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 11 })}
                      onMouseUp={this.showHiddenEdit}>Street, No.</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Street, No.' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>City/State</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 12 })}
                      onMouseUp={this.showHiddenEdit}>City/State</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='City/State' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Mailbox</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 13 })}
                      onMouseUp={this.showHiddenEdit}>Mailbox</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Mailbox' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Country</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 14 })}
                      onMouseUp={this.showHiddenEdit}>Country</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Country' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Postal code</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 15 })}
                      onMouseUp={this.showHiddenEdit}>Postal code</p>

                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' placeholder='Postal code' className='com_input'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <p className='us_title reg_change_txt'>Correspondence address</p>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Correspondence address</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 16 })}
                      onMouseUp={this.showHiddenEdit}>Same as domicile address</p>

                      <div className='hiddenEditSpec dispNone'>
                          <p className='corr_text'>Same as domicile address</p>
                          <p className='wrap_main_checkbox42' ref={this.secondBlue}>
                              <input type='checkbox' onChange={this.changeInputColor222} className='main_checkbox'/>
                          </p>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <p className='us_title reg_change_txt'>Fiat accounts</p>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Reference currency</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 17 })}
                      onMouseUp={this.showHiddenEdit}>USD</p>
                      <div className='hiddenEditSpec dispNone'>
                          <div className='wrap_title_yours'>
                             <p className='each_title_yours_currency' ref={this.thirdTitle0}>CHF <input type='checkbox' checked={this.state.check10} value="CHF" onChange={this.changeThreeTitle} className='allCheckBoxes7'/></p>
                             <p className='each_title_yours_currency' ref={this.fourthTitle0}>EUR <input type='checkbox' checked={this.state.check11} value="EUR" onChange={this.changeFourthTitle} className='allCheckBoxes7'/></p>
                             <p className='each_title_yours_currency choosen_type_blue' ref={this.thirdTitle}>USD<input type='checkbox' checked={this.state.check12} value="USD" onChange={this.changeFithTitle} className='allCheckBoxes7'/></p>
                             <p className='each_title_yours_currency' ref={this.fourthTitle}>SGD<input type='checkbox' checked={this.state.check13} value="SGD" onChange={this.changeSixthTitle} className='allCheckBoxes7'/></p>
                          </div>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person' ref={this.first_ammount}>Amount of first transfer to account at PI Digital in CHF</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 18 })}
                      onMouseUp={this.showHiddenEdit}>Amount</p>
                      <div className='hiddenEditSpec dispNone'>
                          <input type='text' name='ammount' className='com_input' placeholder='Ammount'/>
                          <div className='wrap_action_buttons2'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Bank and country of origin of the assets to be transferred to PI Digital</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 19 })}
                      onMouseUp={this.showHiddenEdit}>Amount</p>
                      <div className='hiddenEditSpec longSpec dispNone'>
                          <input type='text' placeholder='Bank' id='bank_spec' className='com_input long_input'/>
                          <div className='wrap_action_buttons2 longSpecBtns'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>No transfer</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 20 })}
                      onMouseUp={this.showHiddenEdit}>No transfer</p>
                      <div className='hiddenEditSpec dispNone'>
                          <div className='wrap_transfer spec5Class'>
                              <p className='corr_text2'>No transfer</p>
                              <p className='wrap_main_checkbox2' ref={this.firstBlue2}>
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

                <p className='us_title reg_change_txt'>PI Digital wallets</p>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Indicative initial BTC transfer to PI Digital wallet</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 21 })}
                      onMouseUp={this.showHiddenEdit}>Indicative initial BTC transfer to PI Digital wallet</p>
                      <div className='hiddenEditSpec longSpec dispNone'>
                          <input type='text' placeholder='Indicative initial BTC transfer to PI Digital wallet' id='' className='alternative_inputs long_input spec_inputs1'/>
                          <div className='wrap_action_buttons2 longSpecBtns'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>BTC wallet address used for the transfer</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 22 })}
                      onMouseUp={this.showHiddenEdit}>BTC wallet address used for the transfer</p>
                      <div className='hiddenEditSpec longSpec dispNone'>
                          <input type='text' placeholder='BTC wallet address used for the transfer' id='' className='alternative_inputs long_input spec_inputs1'/>
                          <div className='wrap_action_buttons2 longSpecBtns'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>Indicative initial ETH transfer to PI Digital wallet</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 23 })}
                      onMouseUp={this.showHiddenEdit}>Indicative initial ETH transfer to PI Digital wallet</p>
                      <div className='hiddenEditSpec longSpec dispNone'>
                          <input type='text' placeholder='Indicative initial ETH transfer to PI Digital wallet' id='' className='alternative_inputs long_input spec_inputs1'/>
                          <div className='wrap_action_buttons2 longSpecBtns'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>ETH wallet address used for the transfer</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 24 })}
                      onMouseUp={this.showHiddenEdit}>ETH wallet address used for the transfer</p>
                      <div className='hiddenEditSpec longSpec dispNone'>
                          <input type='text' placeholder='ETH wallet address used for the transfer' id='' className='alternative_inputs long_input spec_inputs1'/>
                          <div className='wrap_action_buttons2 longSpecBtns'>
                               <div className='action_btns2'>
                                   <button type='submit' id='sub_save'>Save</button>
                                   <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                               </div>
                          </div>
                      </div>
                </div>

                <div className='each_personalEdit4 whiteFone'>
                      <p className='each_edit_person'>No transfer</p>
                      <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 25 })}
                      onMouseUp={this.showHiddenEdit}>No transfer</p>
                      <div className='hiddenEditSpec dispNone'>
                          <div className='wrap_transfer spec5Class'>
                              <p className='corr_text2'>No transfer</p>
                              <p className='wrap_main_checkbox2' ref={this.firstBlue3}>
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

                <p className='us_title reg_change_txt'>Declarations / Disclaimers</p>

                    <div className='each_personalEdit4 whiteFone'>
                          <p className='each_edit_person'>Declarations / Disclaimers</p>
                          <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 26 })}
                          onMouseUp={this.showHiddenEdit}>I agree to receive updates and news from PI Digital via email</p>
                          <div className='hiddenEditSpec dispNone' id='hiddenEditSpec4'>
                          <p className='case2 case2_id'>PI Digital would like to send you updates and news regarding its services and PI Digital itself by email.
                           By signing up, you agree to PI Digital using your personal data in accordance with our Privacy Policy. You can unsubscribe at any time by
                           clicking on the «Unsubscribe» link at the bottom of your email. For further information please see our Privacy Policy.</p>

                          <div className='wrap_white_agree_block'>
                             <div className='white_agree_block'>
                                 <p className='each_agree_block blue_each_white_per'><input type='checkbox' checked={this.state.check14} onChange={this.changeWhite1} className='allCheckBoxes8'/>I agree to receive updates and news from PI Digital via email</p>
                                 <p className='each_agree_block'><input type='checkbox' checked={this.state.check15} onChange={this.changeWhite2} className='allCheckBoxes8'/>I do not agree to receive updates and news from PI Digital via email</p>
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

                            <div className='wrap_action_buttons2' id='specButtons1'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                      </div>
                </div>

            </div>
        </p>
    )
  }
}

export default AccountCompanyDetails;
