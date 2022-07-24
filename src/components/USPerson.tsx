import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  check1: boolean,
  check2: boolean,
  check3: boolean
}

class USPerson extends Component<{}, iState>{


  private us1 = React.createRef<HTMLParagraphElement>();
  private us2 = React.createRef<HTMLParagraphElement>();
  private us3 = React.createRef<HTMLParagraphElement>();
  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();
  private fourthBlue = React.createRef<HTMLParagraphElement>();
  private firstCase = React.createRef<HTMLDivElement>();
  private secondCase = React.createRef<HTMLDivElement>();
  private thirdCase = React.createRef<HTMLDivElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    this.state = {
        check1: true,
        check2: false,
        check3: false
    }

  }

changeTitle1 = () => {
  this.setState({ check1: true, check2: false, check3: false });
  document.querySelectorAll('.each_us').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.us1?.current?.classList.add('choosen_type_blue');
  this.secondCase?.current?.classList.add('dispNone');
  this.thirdCase?.current?.classList.add('dispNone');
  this.firstCase?.current?.classList.remove('dispNone');
  (document.getElementById('usPersonHid') as HTMLInputElement).value = "No US person";
}

changeTitle2 = () => {
  this.setState({ check1: false, check2: true, check3: false });
  document.querySelectorAll('.each_us').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.us2?.current?.classList.add('choosen_type_blue');
  this.firstCase?.current?.classList.add('dispNone');
  this.thirdCase?.current?.classList.add('dispNone');
  this.secondCase?.current?.classList.remove('dispNone');
  (document.getElementById('usPersonHid') as HTMLInputElement).value = "Former US person";
}

changeTitle3 = () => {
  this.setState({ check1: false, check2: false, check3: true });
  document.querySelectorAll('.each_us').forEach(item => (
    item.classList.remove('choosen_type_blue')
  ));
  this.us3?.current?.classList.add('choosen_type_blue');
  this.firstCase?.current?.classList.add('dispNone');
  this.secondCase?.current?.classList.add('dispNone');
  this.thirdCase?.current?.classList.remove('dispNone');
  (document.getElementById('usPersonHid') as HTMLInputElement).value = "US person";
}

changeInputColor1 = (e:any) => {
  this.firstBlue?.current?.classList.contains('blueCheckBox') ?
  this.firstBlue?.current?.classList.remove('blueCheckBox') :
  this.firstBlue?.current?.classList.add('blueCheckBox');
  (document.getElementById('bornInUsHid') as HTMLInputElement).value = e.target.checked.toString();
}

changeInputColor2 = (e:any) => {
  this.secondBlue?.current?.classList.contains('blueCheckBox') ?
  this.secondBlue?.current?.classList.remove('blueCheckBox') :
  this.secondBlue?.current?.classList.add('blueCheckBox');
  (document.getElementById('greenCardHid') as HTMLInputElement).value = e.target.checked.toString();
}

changeInputColor3 = (e:any) => {
  this.thirdBlue?.current?.classList.contains('blueCheckBox') ?
  this.thirdBlue?.current?.classList.remove('blueCheckBox') :
  this.thirdBlue?.current?.classList.add('blueCheckBox');
  (document.getElementById('possessionGreenCardHid') as HTMLInputElement).value = e.target.checked.toString();
}

changeInputColor4 = (e:any) => {
  this.fourthBlue?.current?.classList.contains('blueCheckBox') ?
  this.fourthBlue?.current?.classList.remove('blueCheckBox') :
  this.fourthBlue?.current?.classList.add('blueCheckBox');
  (document.getElementById('subPresTestHid') as HTMLInputElement).value = e.target.checked.toString();
}

render() {

			return (
				<div className='wrap_us'>
					<div className='us'>
          <p className='us_title'>US person</p>
          <p className='title_salut'>I declare that I am</p>
          <div className='choose_us'>
              <p className='each_us choosen_type_blue' ref={this.us1}>No US person <input type='checkbox'  checked={this.state.check1} onChange={this.changeTitle1} className='allCheckBoxes3'/></p>
              <p className='each_us' ref={this.us2}>Former US person<input type='checkbox'  checked={this.state.check2}  onChange={this.changeTitle2} className='allCheckBoxes3'/></p>
              <p className='each_us' ref={this.us3}>US person<input type='checkbox'  checked={this.state.check3}  onChange={this.changeTitle3} className='allCheckBoxes3'/></p>
          </div>

            <div className='case1' id='case11' ref={this.firstCase}>I declare that I am no US citizen (regardless if I have any other citizenships), I do not reside in the US and have no «resident alien» status (e.g. due to long or frequent stays in the US during the last
               three years or due to the possession of a green card, no matter its validity), I have not been born in the USA and have no US tax obligations due to any other reasons. Further, I confirm that neither
               I nor any other person indicated as a beneficial owner of the account qualify as a US person.
            </div>

            <div className='wrap_usPerson dispNone' ref={this.secondCase}>
               <p className='each_under_us'>
                    <p className='wrap_main_checkbox2' ref={this.firstBlue}><input type='checkbox'  onChange={this.changeInputColor1}  className='main_checkbox'/></p>
                    <p className='us_born'>I declare that I was born in the U.S. (or U.S. territory) and am in possession of a Certificate of Loss of Nationality of the United States (CLN)</p></p>
                    <p className='each_under_us'><p className='wrap_main_checkbox2' ref={this.secondBlue}><input type='checkbox'  onChange={this.changeInputColor2}  className='main_checkbox'/></p>
               <p>I am a holder of either a returned or administratively or judicially revoked U.S. Green Card (irrespective expiry date)</p></p>
            </div>

            <div className='wrap_usPerson2 dispNone' ref={this.thirdCase}>
              <p className='case1 digital1'>PI Digital does not onboard US persons.</p>
              <p className='case1 digital1' id='digital1'> The onboarding process cannot be concluded if the prospect is a US person.</p>
               <p className='each_under_us'>
                    <p className='wrap_main_checkbox2' ref={this.thirdBlue}><input type='checkbox'  onChange={this.changeInputColor3}  className='main_checkbox'/></p>
                    <p className='greenCard'>You are in possession of a U.S. Green Card (irrespective expiry date)</p></p>
                    <p className='each_under_us'><p className='wrap_main_checkbox2' ref={this.fourthBlue}><input type='checkbox'  onChange={this.changeInputColor4}  className='main_checkbox'/></p>
               <p className='greenCard'>You meet the Substantial Presence Test</p></p>
               <p className='case1 digital2'>To meet the Substantial Presence Test, you must be physically present in the United States (U.S.) on at least: 31 days during the current year, and 183 days during the 3-year period
               that includes the current year and the 2 years immediately before that. Find more details under: https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test</p>
            </div>
            </div>
				</div>
			)
		}

}

export default USPerson;
