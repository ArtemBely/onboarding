import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import trash from '../../../public/images/trash.svg';

var arr:Array<number> = [1];
var incr: number = 1;

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  increment: number,
  val: string
}

class EachParty extends Component<{}, iState>{

  private all_parties = React.createRef<HTMLDivElement>();
  private each_party = React.createRef<HTMLDivElement>();
  private inp = React.createRef<HTMLInputElement>();
  private inp2 = React.createRef<HTMLInputElement>();


  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        increment: 1,
        val: ''
    }

  }

removeParty = (e:any) => {

    if(this.all_parties?.current?.children[1] && e.target.nodeName == 'IMG') {
      this.setState(prevState => ({ increment: prevState.increment - 1 }));
      Array.from(document.getElementsByClassName('alternative_inputs special_inputs') as HTMLCollectionOf<HTMLElement>).forEach(inps => (
          (inps as HTMLInputElement).value = '' ));
      arr.pop();
  }
}

addParties = () => {
    if(this.state.increment) {
      return (
          <div className='all_parties' ref={this.all_parties}>
                {arr.map((item, key) => (
                      <div className='each_party' ref={this.each_party} onClick={this.removeParty}>
                          <p className='title_salut connect_party'>{`Connected party #${key+1}`}</p>
                          <p className='trash'><img src={trash} /></p>
                          <p className='title_salut'>Full name</p>
                          <p className='title_salut'>E-mail</p>
                          <input type='hidden' form='checkPersonal5' value='' name='parties' />
                          <input type='text' form='checkPersonal5' required ref={this.inp} name='partyName' placeholder='Full name' id='alter10' className='alternative_inputs special_inputs'/>
                          <input type='email' form='checkPersonal5' required ref={this.inp2} name='partyEmail' placeholder='E-mail' className='alternative_inputs special_inputs'/>
                          <p className='each_blue_bottom'></p>
                      </div>
                    ))}
          </div>
        )
    }
    return
}

incrementParty = () => {
  this.setState(prevState => ({ increment: prevState.increment + 1 }));
  incr ++;
  arr.push(incr);
}

render() {

			return (
				<div className='wrap_parties'>
  					<div className='parties'>
                    <p className='us_title'>Please list additional authorized signatories of the legal entity.
                     Once added, the person will receive an email invitation with a link for online onboarding </p>
                     {this.addParties()}
                     <p className='blue_add' onClick={this.incrementParty}>+ Add additional authorized signatory</p>

                     <div className='wrap_next_buttons6'>
                       <div className='first_next_buttons'>
                           <NavLink to='/company_personal' className='back_button'>Back</NavLink>
                           <button type='submit' form='checkPersonal5' className='next_button'>Next</button>
                       </div>
                     </div>
  					</div>
				</div>
			)
		}

}

export default EachParty;
