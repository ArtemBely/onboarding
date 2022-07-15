import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

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
  check11: boolean,
  check12: boolean,
  check13: boolean,
  check14: boolean,
  check15: boolean,
  check16: boolean,
  check17: boolean,
  check18: boolean,
  check19: boolean,
  profession: string
}

class Employment extends Component<{}, iState> {

  private dateInput = React.createRef<HTMLInputElement>();
  private prof1 = React.createRef<HTMLParagraphElement>();
  private prof2 = React.createRef<HTMLParagraphElement>();

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
        check6: false,
        check7: true,
        check8: false,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
        check13: false,
        check14: true,
        check15: false,
        check16: false,
        check17: false,
        check18: true,
        check19: false,
        profession: "Profession"
    }

  }

changeInputColor = () => {
  this.setState({ check1: true, check2: false, check3: false, check4: false, check5: false, check6: false });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[0].classList.add('choosen_type_blue');
  document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
  document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Function/position';
  this.setState({ profession: "Profession" });
}

changeInputColor2 = () => {
  this.setState({ check1: false, check2: true, check3: false, check4: false, check5: false, check6: false });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[1].classList.add('choosen_type_blue');
  document.querySelectorAll('.extraInfo')[0].classList.remove('dispNone');
  document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Function/position';
  this.setState({ profession: "Profession" });
}

changeInputColor3 = () => {
  this.setState({ check1: false, check2: false, check3: true, check4: false, check5: false, check6: false });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[2].classList.add('choosen_type_blue');
  document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
  document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Last profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Last function/position';
  this.setState({ profession: "Last profession" });
}

changeInputColor4 = () => {
  this.setState({ check1: false, check2: false, check3: false, check4: true, check5: false, check6: false });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[3].classList.add('choosen_type_blue');
  document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
  document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Last profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Last function/position';
  this.setState({ profession: "Last profession" });
}

changeInputColor5 = () => {
  this.setState({ check1: false, check2: false, check3: false, check4: false, check5: true, check6: false });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.remove('dispNone');
  document.querySelectorAll('.main_info')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[4].classList.add('choosen_type_blue');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Function/position';
  this.setState({ profession: "Profession" });
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.add('switch_buttons_margin2');
}

changeInputColor6 = () => {
  this.setState({ check1: false, check2: false, check3: false, check4: false, check5: false, check6: true });
  document.querySelectorAll('.each_empl').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.for_student')[0].classList.add('dispNone');
  document.querySelectorAll('.each_empl')[5].classList.add('choosen_type_blue');
  document.querySelectorAll('.main_info')[0].classList.add('dispNone');
  const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
  element.innerHTML = 'Profession';
  const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
  element2.innerHTML = 'Function/position';
  this.setState({ profession: "Profession" });
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
  document.querySelectorAll('.wrap_next_buttons2')[0].classList.add('switch_buttons_margin');
}

changeInputColor7 = () => {
  this.setState({ check7: true, check8: false, check9: false, check10: false, check11: false, check12: false });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[0].classList.add('choosen_type_blue');
}

changeInputColor8 = () => {
  this.setState({ check7: false, check8: true, check9: false, check10: false, check11: false, check12: false });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[1].classList.add('choosen_type_blue');
}

changeInputColor9 = () => {
  this.setState({ check7: false, check8: false, check9: true, check10: false, check11: false, check12: false });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[2].classList.add('choosen_type_blue');
}

changeInputColor10 = () => {
  this.setState({ check7: false, check8: false, check9: false, check10: true, check11: false, check12: false });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[3].classList.add('choosen_type_blue');
}

changeInputColor11 = () => {
  this.setState({ check7: false, check8: false, check9: false, check10: false, check11: true, check12: false });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[4].classList.add('choosen_type_blue');
}

changeInputColor12 = () => {
  this.setState({ check7: false, check8: false, check9: false, check10: false, check11: false, check12: true });
  document.querySelectorAll('.each_empl2').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl2')[5].classList.add('choosen_type_blue');
}

changeInputColor13 = () => {
  this.setState({ check13: true, check14: false, check15: false});
  document.querySelectorAll('.each_empl3').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl3')[0].classList.add('choosen_type_blue');
}

changeInputColor14 = () => {
  this.setState({ check13: false, check14: true, check15: false});
  document.querySelectorAll('.each_empl3').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl3')[1].classList.add('choosen_type_blue');
}

changeInputColor15 = () => {
  this.setState({ check13: false, check14: false, check15: true});
  document.querySelectorAll('.each_empl3').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl3')[2].classList.add('choosen_type_blue');
}

changeInputColor16 = () => {
  this.setState({ check16: true, check17: false, check18: false, check19: false});
  document.querySelectorAll('.each_empl4').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
}

changeInputColor17 = () => {
  this.setState({ check16: false, check17: true, check18: false, check19: false});
  document.querySelectorAll('.each_empl4').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
}

changeInputColor18 = () => {
  this.setState({ check16: false, check17: false, check18: true, check19: false});
  document.querySelectorAll('.each_empl4').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
}

changeInputColor19 = () => {
  this.setState({ check16: false, check17: false, check18: false, check19: true});
  document.querySelectorAll('.each_empl4').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
}

render() {

			return (
				<div className='wrap_Employment'>
              <div className='employment'>
                   <div className='wrap_titles_empl'>
                      <p className='us_title'>Please select Employment Status</p>
                      <p className='title_salut' id='business_title'>Business activity</p>
                      <div className='wrap_empl_status'>
                          <p className='each_empl choosen_type_blue'>Employed <input type='checkbox' checked={this.state.check1} onChange={this.changeInputColor} value='Employed' className='allCheckBoxes4'/></p>
                          <p className='each_empl'>Self-Employed <input type='checkbox' checked={this.state.check2} onChange={this.changeInputColor2} value='Self-Employed' className='allCheckBoxes4'/></p>
                          <p className='each_empl'>Retired (Pensioner) <input type='checkbox' checked={this.state.check3} onChange={this.changeInputColor3} value='Retired (Pensioner)' className='allCheckBoxes4'/></p>
                          <p className='each_empl'>Unemployed <input type='checkbox' checked={this.state.check4} onChange={this.changeInputColor4} value='Unemployed' className='allCheckBoxes4'/></p>
                          <p className='each_empl'>Student <input type='checkbox' checked={this.state.check5} onChange={this.changeInputColor5} value='Student' className='allCheckBoxes4'/></p>
                          <p className='each_empl'>Not Working <input type='checkbox' checked={this.state.check6} onChange={this.changeInputColor6} value='Not Working' className='allCheckBoxes4'/></p>
                      </div>
                   </div>

                   <div className='for_student dispNone'>
                       <p className='title_salut' id='student_title'>University</p>
                       <input type='text' placeholder='University' className='alternative_inputs long_input'/>

                       <p className='title_salut'>Faculty/course</p>
                       <input type='text' placeholder='Faculty/course'  className='alternative_inputs long_input'/>
                   </div> 

                   <div className='main_info'>
                          <p className='title_salut'>Company name</p>
                          <p className='title_salut'>Company address</p>
                          <input type='text' placeholder='Company name' className='alternative_inputs'/>
                          <input type='text' placeholder='Company address' className='alternative_inputs'/>
                          <p className='title_salut'>Since</p>
                          <p className='title_salut'>Country of (main) business activity</p>
                          <input type='text' ref={this.dateInput} placeholder='DD/MM/YYYY' onFocus={() => {
                            if(this.dateInput.current != null) {
                              this.dateInput.current.type = "date";
                            }
                          }} className='com_input'/>
                          <select id='selectCountry' className='com_input'>
                             <option value="" disabled selected>Country</option>
                             <option value="hurr">Durr</option>
                          </select>
                          <p className='title_salut' id='tit_website'>Website</p>
                          <input type='text' placeholder='Website' className='alternative_inputs' id='website'/>
                          <p className='title_salut'>Line of business or industry (NOGA code)</p>
                          <select id='selectCode' className='com_input'>
                             <option value="" disabled selected>Code</option>
                             <option value="hurr">Durr</option>
                          </select>

                          <p className='title_salut' id='profession_title' ref={this.prof1}>Profession</p>
                          <input type='text' placeholder={this.state.profession} id='profession_title_input' className='alternative_inputs long_input'/>

                          <p className='title_salut' id='last_func' ref={this.prof2}>Function/position</p>
                          <div className='wrap_prof_status'>
                              <p className='each_empl2 choosen_type_blue'>Staff <input type='checkbox' checked={this.state.check7} onChange={this.changeInputColor7} value='Staff' className='allCheckBoxes5'/></p>
                              <p className='each_empl2'>Lower Management <input type='checkbox' checked={this.state.check8} onChange={this.changeInputColor8} value='Lower Management' className='allCheckBoxes5'/></p>
                              <p className='each_empl2'>Middle Management <input type='checkbox' checked={this.state.check9} onChange={this.changeInputColor9} value='Middle Management' className='allCheckBoxes5'/></p>
                              <p className='each_empl2'>Upper Management <input type='checkbox' checked={this.state.check10} onChange={this.changeInputColor10} value='Upper Management' className='allCheckBoxes5'/></p>
                              <p className='each_empl2'>Board <input type='checkbox' checked={this.state.check11} onChange={this.changeInputColor11} value='Board' className='allCheckBoxes5'/></p>
                              <p className='each_empl2'>Executive Board <input type='checkbox' checked={this.state.check12} onChange={this.changeInputColor12} value='Executive Board' className='allCheckBoxes5'/></p>
                          </div>

                          <div className='extraInfo dispNone'>
                              <p className='title_salut' id='employ_title'>Employees of the company</p>
                              <div className='wrap_comp_status'>
                                  <p className='each_empl3 choosen_type_blue'>1 - 25 <input type='checkbox' checked={this.state.check13} onChange={this.changeInputColor13} value='1 - 25' className='allCheckBoxes6'/></p>
                                  <p className='each_empl3'>25 - 100 <input type='checkbox' checked={this.state.check14} onChange={this.changeInputColor14} value='25 - 100' className='allCheckBoxes6'/></p>
                                  <p className='each_empl3'> {`> 100`} <input type='checkbox' checked={this.state.check15} onChange={this.changeInputColor15} value='> 100' className='allCheckBoxes6'/></p>
                              </div>

                              <p className='title_salut' id='turnover'>Company turnover</p>
                              <div className='wrap_turn_status'>
                                  <p className='each_empl4'>{`< CHF 5 m`}<input type='checkbox' checked={this.state.check16} onChange={this.changeInputColor16} value='< CHF 5 m' className='allCheckBoxes7'/></p>
                                  <p className='each_empl4'>CHF 5 m - CHF 5 m <input type='checkbox' checked={this.state.check17} onChange={this.changeInputColor17} value='CHF 5 m - CHF 5 m' className='allCheckBoxes7'/></p>
                                  <p className='each_empl4 choosen_type_blue'>CHF 10 m - CHF 25 m <input type='checkbox' checked={this.state.check18} onChange={this.changeInputColor18} value='CHF 10 m - CHF 25 m' className='allCheckBoxes7'/></p>
                                  <p className='each_empl4'> {`> CHF 25 m`} <input type='checkbox' checked={this.state.check19} onChange={this.changeInputColor19} value='> CHF 25 m' className='allCheckBoxes7'/></p>
                              </div>
                          </div>
                   </div>

                   <div className='wrap_next_buttons2'>
                     <div className='first_next_buttons'>
                         <NavLink to='/create_account' className='back_button'>Back</NavLink>
                         <NavLink to='/financial_situation' className='next_button'>Next</NavLink>
                     </div>
                   </div>
              </div>
				</div>
			)
		}

}

export default Employment;
