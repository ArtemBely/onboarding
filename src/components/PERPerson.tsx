import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class PERPerson extends Component{

  private firstWhite = React.createRef<HTMLDivElement>();
  private secondWhite = React.createRef<HTMLDivElement>();
  private extra_name_input = React.createRef<HTMLInputElement>();

  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        user
    }

  }

changeFirstWhite = () => {
  this.firstWhite?.current?.classList.remove('blue_each_white_per');
  this.secondWhite?.current?.classList.add('blue_each_white_per');
  document.querySelectorAll('.green_text').forEach(item => (
    item.classList.add('dispNone')
  ));
  document.querySelectorAll('.extra_name').forEach(item => (
    item.classList.remove('dispNone')
  ));
  this.extra_name_input?.current?.classList.remove('dispNone');
}

changeSecondWhite = () => {
  this.secondWhite?.current?.classList.remove('blue_each_white_per');
  this.firstWhite?.current?.classList.add('blue_each_white_per');
  document.querySelectorAll('.green_text').forEach(item => (
    item.classList.remove('dispNone')
  ));
  document.querySelectorAll('.extra_name').forEach(item => (
    item.classList.add('dispNone')
  ));
  this.extra_name_input?.current?.classList.add('dispNone');
}

render() {

			return (
				<div className='wrap_PerPerson'>
              <div className='perPerson'>
                <p className='us_title'>PEP person</p>
                <div className='wrap_each_per'>
                    <div className='each_white_per blue_each_white_per' ref={this.firstWhite} onClick={this.changeSecondWhite}>
                        I declare that I am not and I was never qualified as a politically
                         exposed person (PEP), or a family member or close associate of a PEP
                    </div>
                    <div className='each_white_per' ref={this.secondWhite} onClick={this.changeFirstWhite}>
                        I declare that I am a politically exposed person or a family member or
                        close associate of a politically exposed person: indicate the executed
                        function or the name/function of the affiliated person.
                    </div>
                    <p className='green_text' id='politicalPerson'>Politically exposed persons in terms of the Swiss Anti-Money Laundering Act are:
                     individuals who are or have been entrusted with prominent public functions by a foreign country,
                     such as heads of state or of government, senior politicians at national level, members of the board
                     or individuals who have been entrusted with equivalent functions, (PEP in international organizations).
                    </p>
                    <p className='green_text'>International sports associations are the International Olympic Committee and the non-governmental
                     organizations it recognizes that regulate one or more official sports at global level.
                    </p>
                    <p className='green_text'>The family members and close associates of PEP are individuals who are closely connected to persons
                     who qualify as PEP, either through their family or for social or professional reasons.
                    </p>

                    <p className='extra_name dispNone'>Name/Function</p>
                    <input type='text' placeholder='Name/Function' ref={this.extra_name_input} className='extra_name_input dispNone' />
                </div>
              </div>
				</div>
			)
		}

}

export default PERPerson;
