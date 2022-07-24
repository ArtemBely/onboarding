import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  check1: boolean,
  check2: boolean,
  allCountries: Array<object>,
  links: string
}

class YourAccount extends Component<{}, iState>{

  private checkBlue1 = React.createRef<HTMLParagraphElement>();
  private checkBlue2 = React.createRef<HTMLParagraphElement>();
  private chekBoxInside1 = React.createRef<HTMLInputElement>();
  private chekBoxInside2 = React.createRef<HTMLInputElement>();
  private wrapCompany = React.createRef<HTMLDivElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        check1: false,
        check2: false,
        allCountries: [],
        links: ''
    }

    this.checkBlue1 = React.createRef();
    this.checkBlue2 = React.createRef();
    this.chekBoxInside1 = React.createRef();
    this.chekBoxInside2 = React.createRef();

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

  changeInputColor = (e:any) => {
    this.setState({ check1: true, check2: false });
    this.checkBlue2?.current?.classList.remove('blueCheckBox');
    this.chekBoxInside1?.current?.checked ?
    this.checkBlue1?.current?.classList.add('blueCheckBox') : null;
    this.wrapCompany?.current?.classList.add('dispNone');
    (document.getElementById('indivHid') as HTMLInputElement).value = e.target.checked.toString();
    (document.getElementById('legalHid') as HTMLInputElement).value = (!e.target.checked).toString();
    document.getElementById('navBtn')?.classList.remove('unAccessBtnColor')
  }

  changeInputColor2 = (e:any) => {
    this.setState({ check1: false, check2: true });
    this.checkBlue1?.current?.classList.remove('blueCheckBox');
    this.chekBoxInside2?.current?.checked ?
    this.checkBlue2?.current?.classList.add('blueCheckBox') : null;
    this.wrapCompany?.current?.classList.remove('dispNone');
    (document.getElementById('legalHid') as HTMLInputElement).value = e.target.checked.toString();
    (document.getElementById('indivHid') as HTMLInputElement).value = (!e.target.checked).toString();
    if((document.getElementById('typeOfCompanyHid') as HTMLInputElement) && (document.getElementById('typeOfCompanyHid') as HTMLInputElement).value.length == 0 ||
       (document.getElementById('countryOfCompanyHid') as HTMLInputElement) && (document.getElementById('countryOfCompanyHid') as HTMLInputElement).value.length == 0) {
         document.getElementById('navBtn')?.classList.add('unAccessBtnColor');
       }
  }

render() {

			return (
				<div className='wrap_first_acc_checkbox'>
  					<div className='first_acc_checkbox'>
              <p className='welcome_to_acc'>I would like to onboard as:</p>
              <form action='/create_account1' method='POST' id='registrationForm'>
                <p className='wrap_main_checkbox' ref={this.checkBlue1}>
                    <input type='checkbox' checked={this.state.check1} onChange={this.changeInputColor} className='main_checkbox' ref={this.chekBoxInside1} />
                </p>
                <span className='each_type'>An individual</span>
                <p className='wrap_main_checkbox' ref={this.checkBlue2}>
                    <input type='checkbox' checked={this.state.check2} onChange={this.changeInputColor2} className='main_checkbox' ref={this.chekBoxInside2} />
                </p>
                <span className='each_type'>A legal entity</span>
              </form>

              <div className='wrap_company_type dispNone' ref={this.wrapCompany}>
                <div className='company_type'>
                  <p className='title_salut'>Country of registration</p>
                  <p className='title_salut'>Entity type (beneficial ownership)</p>
                  <select id='selectLegalCountry' onChange={(e:any) => {
                    (document.getElementById('countryOfCompanyHid') as HTMLInputElement).value = e.target.value;
                    if((document.getElementById('typeOfCompanyHid') as HTMLInputElement) && (document.getElementById('typeOfCompanyHid') as HTMLInputElement).value.length > 0) {
                      document.getElementById('navBtn')?.classList.remove('unAccessBtnColor');
                      this.setState({ links: '/company_details' });
                    }
                  }} className='com_input'>
                      {this.state.allCountries.map((item:any, key) => (
                            <option value={key==0 ? '' : item.name}
                              disabled={key==0 ? true : false}
                              selected={key==0 ? true : false}>
                            {item.name}</option>
                      ))}
                  </select>
                  <select id='selectLegalType' onChange={(e:any) => {
                    (document.getElementById('typeOfCompanyHid') as HTMLInputElement).value = e.target.value;
                    if((document.getElementById('countryOfCompanyHid') as HTMLInputElement) && (document.getElementById('countryOfCompanyHid') as HTMLInputElement).value.length > 0) {
                      document.getElementById('navBtn')?.classList.remove('unAccessBtnColor');
                      this.setState({ links: '/company_details' });
                    }
                  }} className='com_input'>
                     <option value="" disabled selected>Type</option>
                     <option value="Operative company">Operative company</option>
                     <option value="Domiciliary company">Domiciliary company</option>
                     <option value="Insurance wrapper">Insurance wrapper</option>
                     <option value="Trust">Trust</option>
                     <option value="Foundation">Foundation</option>
                     <option value="Other (e.g. charity)">Other (e.g. charity)</option>
                  </select>
                </div>
              </div>

              <p className='wrap_cases'>
                <p className='case1'>In case of questions or concerns, we kindly ask you to contact us at info@pidigital.swiss.</p>
                <p className='case1'>Yours sincerely, PI Digital</p>
              </p>
              <div className='wrap_next_buttons0'>
                <div className='first_next_buttons'>
                    <NavLink to='/registration' className='back_button'>Back</NavLink>
                    <Link to={this.state.check2 && (!document.getElementById('navBtn')?.classList.contains('unAccessBtnColor')) ?
                     this.state.links : this.state.check1 ? '/personal_details' : '#'} id='navBtn' className='next_button unAccessBtnColor'>Next</Link>
                </div>
              </div>
  					</div>
				</div>
			)
		}

}

export default YourAccount;
