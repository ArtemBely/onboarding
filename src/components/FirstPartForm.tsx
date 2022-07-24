import React, { Component } from 'react';
import axios from 'axios';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  user: object | undefined,
  allCountries: Array<object>,
  check1: boolean,
  check2: boolean,
  check3: boolean,
  check4: boolean,
  check21: boolean,
  check22: boolean,
  check23: boolean,
  check31: boolean,
  check32: boolean,
  check33: boolean,
  check34: boolean,
  check35: boolean,
  check36: boolean,
}

class FirstPartForm extends Component<{}, iState>{

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private fiveTitle = React.createRef<HTMLParagraphElement>();
  private sixTitle = React.createRef<HTMLParagraphElement>();
  private sevenTitle = React.createRef<HTMLParagraphElement>();
  private eightTitle = React.createRef<HTMLParagraphElement>();
  private nineTitle = React.createRef<HTMLParagraphElement>();
  private tenTitle = React.createRef<HTMLParagraphElement>();
  private elevenTitle = React.createRef<HTMLParagraphElement>();
  private twelveTitle = React.createRef<HTMLParagraphElement>();
  private thirtheenTitle = React.createRef<HTMLParagraphElement>();
  private dateInput = React.createRef<HTMLInputElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        user,
        allCountries: [],
        check1: true,
        check2: false,
        check3: false,
        check4: false,
        check21: false,
        check22: true,
        check23: false,
        check31: true,
        check32: false,
        check33: false,
        check34: false,
        check35: false,
        check36: false,
    }

    this.firstTitle = React.createRef();
    this.secondTitle = React.createRef();
    this.thirdTitle = React.createRef();
    this.fourthTitle = React.createRef();
    this.fiveTitle = React.createRef();
    this.sixTitle = React.createRef();
    this.sevenTitle = React.createRef();
    this.eightTitle = React.createRef();
    this.nineTitle = React.createRef();
    this.tenTitle = React.createRef();
    this.elevenTitle = React.createRef();
    this.twelveTitle = React.createRef();
    this.thirtheenTitle = React.createRef();
    this.dateInput = React.createRef();
  }

  componentDidMount () {
   const start = async () => {
      await axios.get('countries.json')
      .then((res) => {
          this.setState({ allCountries: res.data });
        }
      )
      .catch(err => console.log(err));
    }
    start();
  }

changeOneTitle = (e:any) => {
  this.setState({ check1: true, check2: false, check3: false, check4: false });
  document.querySelectorAll('.each_title_yours').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.firstTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('titleHid') as HTMLInputElement).value = "None.";
}

changeTwoTitle = () => {
  this.setState({ check1: false, check2: true, check3: false, check4: false });
  document.querySelectorAll('.each_title_yours').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.secondTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('titleHid') as HTMLInputElement).value = "Prof.";
}

changeThreeTitle = () => {
  this.setState({ check1: false, check2: false, check3: true, check4: false });
  document.querySelectorAll('.each_title_yours').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.thirdTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('titleHid') as HTMLInputElement).value = "Dr.";
}

changeFourthTitle = () => {
  this.setState({ check1: false, check2: false, check3: false, check4: true });
  document.querySelectorAll('.each_title_yours').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.fourthTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('titleHid') as HTMLInputElement).value = "PhD.";
}

changeFiveTitle = () => {
  this.setState({ check21: true, check22: false, check23: false });
  document.querySelectorAll('.each_title_salut').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.fiveTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('salutationHid') as HTMLInputElement).value = "Mr";
}

changeSixTitle = () => {
  this.setState({ check21: false, check22: true, check23: false });
  document.querySelectorAll('.each_title_salut').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.sixTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('salutationHid') as HTMLInputElement).value = "Mrs";
}

changeSevenTitle = () => {
  this.setState({ check21: false, check22: false, check23: true });
  document.querySelectorAll('.each_title_salut').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.sevenTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('salutationHid') as HTMLInputElement).value = "Ms";
}

changeEightTitle = () => {
  this.setState({ check31: true, check32: false, check33: false, check34: false, check35: false, check36: false });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.eightTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "0";
}

changeNineTitle = () => {
  this.setState({ check31: false, check32: true, check33: false, check34: false, check35: false, check36: false });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.nineTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "1";
}

changeTenTitle = () => {
  this.setState({ check31: false, check32: false, check33: true, check34: false, check35: false, check36: false });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.tenTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "2";
}

changeElevenTitle = () => {
  this.setState({ check31: false, check32: false, check33: false, check34: true, check35: false, check36: false });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.elevenTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "3";
}

changeTwelveTitle = () => {
  this.setState({ check31: false, check32: false, check33: false, check34: false, check35: true, check36: false });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.twelveTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "4";
}

changeThirtheenTitle = () => {
  this.setState({ check31: false, check32: false, check33: false, check34: false, check35: false, check36: true });
  document.querySelectorAll('.each_title_nation').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.thirtheenTitle?.current?.classList.add('choosen_type_blue');
  (document.getElementById('nationalitiesHid') as HTMLInputElement).value = "5";
}

render() {

			return (
				<div className='wrap_first_part'>
					<div className='first_part'>
              <div className='first_part_inside'>
                  <p className='title_yours'>Title</p>
                  <div className='wrap_title_yours'>
                     <p className='each_title_yours choosen_type_blue' ref={this.firstTitle}>None <input type='checkbox'  checked={this.state.check1} onChange={this.changeOneTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_yours' ref={this.secondTitle}>Prof. <input type='checkbox'  checked={this.state.check2} onChange={this.changeTwoTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_yours' ref={this.thirdTitle}>Dr. <input type='checkbox'  checked={this.state.check3} onChange={this.changeThreeTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_yours' ref={this.fourthTitle}>PhD <input type='checkbox'  checked={this.state.check4} onChange={this.changeFourthTitle} className='allCheckBoxes'/></p>
                  </div>
              </div>
              <div className='second_part_inside'>
                  <p className='title_salut'>Salutation</p>
                  <div className='wrap_title_salut'>
                     <p className='each_title_salut choosen_type_blue' ref={this.fiveTitle}>Mr<input type='checkbox' checked={this.state.check21} onChange={this.changeFiveTitle} className='allCheckBoxes2'/></p>
                     <p className='each_title_salut' ref={this.sixTitle}>Mrs<input type='checkbox' checked={this.state.check22} onChange={this.changeSixTitle} className='allCheckBoxes2'/></p>
                     <p className='each_title_salut' ref={this.sevenTitle}>Ms<input type='checkbox' checked={this.state.check23} onChange={this.changeSevenTitle} className='allCheckBoxes2'/></p>
                  </div>
              </div>
              <div className='name_part_inside'>
                  <p className='title_salut'>Given names as per passport/ identification document</p>
                  <input type='text' form='checkPersonal' required onChange={(e:any) => (document.getElementById('nameHid') as HTMLInputElement).value = e.target.value} className='com_input' placeholder='Name'/>
              </div>
              <div className='surname_part_inside'>
                  <p className='title_salut'>Last name</p>
                  <input type='text' form='checkPersonal' required onChange={(e:any) => (document.getElementById('lastnameHid') as HTMLInputElement).value = e.target.value} className='com_input' placeholder='Last name'/>
              </div>
              <div className='third_part_inside'>
                  <p className='title_salut'>Date of birth</p>
                  <input type='text' form='checkPersonal' required onChange={(e:any) => (document.getElementById('dateHid') as HTMLInputElement).value = e.target.value} ref={this.dateInput} placeholder='DD/MM/YYYY' onFocus={() => {
                    if(this.dateInput.current != null) {
                      this.dateInput.current.type = "date";
                    }
                  }} className='com_input'/>
              </div>
              <div className='country_part_inside'>
                  <p className='title_salut'>Country of origin (Nationality)</p>
                  <select id='selectCountry' onChange={(e:any) => (document.getElementById('countryHid') as HTMLInputElement).value = e.target.value} className='com_input'>
                      {this.state.allCountries.map((item:any, key) => (
                            <option value={key==0 ? '' : item.name}
                              disabled={key==0 ? true : false}
                              selected={key==0 ? true : false}>
                            {item.name}</option>
                      ))}
                  </select>
              </div>
              <div className='five_part_inside'>
                  <p className='title_yours'>Please enter how many other nationalities you have</p>
                  <div className='wrap_title_nation'>
                     <p className='each_title_nation choosen_type_blue' ref={this.eightTitle}>0 <input type='checkbox' checked={this.state.check31} onChange={this.changeEightTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_nation' ref={this.nineTitle}>1 <input type='checkbox'  checked={this.state.check32} onChange={this.changeNineTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_nation' ref={this.tenTitle}>2 <input type='checkbox' checked={this.state.check33} onChange={this.changeTenTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_nation' ref={this.elevenTitle}>3 <input type='checkbox'  checked={this.state.check34} onChange={this.changeElevenTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_nation' ref={this.twelveTitle}>4 <input type='checkbox'  checked={this.state.check35} onChange={this.changeTwelveTitle} className='allCheckBoxes'/></p>
                     <p className='each_title_nation' ref={this.thirtheenTitle}>5 <input type='checkbox'  checked={this.state.check36} onChange={this.changeThirtheenTitle} className='allCheckBoxes'/></p>
                  </div>
              </div>
					</div>
				</div>
			)
		}

}

export default FirstPartForm;
