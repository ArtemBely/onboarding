import React, { Component } from 'react';
//@ts-ignore
import trash from '../../../public/images/trash.svg';

var arr:Array<number> = [];
var incr: number = 1;

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined,
  increment: number,
  val: string
}

class ChangeParties extends Component<{}, iState>{

  private all_parties = React.createRef<HTMLDivElement>();
  private each_party = React.createRef<HTMLDivElement>();
  private inp = React.createRef<HTMLInputElement>();
  private inp2 = React.createRef<HTMLInputElement>();

  constructor(state: iState) {

    super(state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_STATE__;
    }

    this.state = {
      user,
      increment: 0,
      val: ''
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
                            <input type='text' ref={this.inp} name={`partyName` + (key + 1)} placeholder='Full name' className='alternative_inputs special_inputs'/>
                            <input type='text' ref={this.inp2} name={`partyEmail` + (key + 1)} placeholder='E-mail' className='alternative_inputs special_inputs'/>
                        </div>
                      ))}
            </div>
          )
      }
      return
  }

  removeParty = (e:any) => {

      if(this.all_parties?.current?.children[0] && e.target.nodeName == 'IMG') {
        this.setState(prevState => ({ increment: prevState.increment - 1 }));
        Array.from(document.getElementsByClassName('alternative_inputs special_inputs') as HTMLCollectionOf<HTMLElement>).forEach(inps => (
            (inps as HTMLInputElement).value = '' ));
        arr.pop();
    }
  }

  incrementParty = () => {
    this.setState(prevState => ({ increment: prevState.increment + 1 }));
    incr ++;
    arr.push(incr);
  }

  render() {
    return(
        <p className='wrap_partiesAll'>
            <div className='partiesAll'>
                  <p className='us_title'>Connected parties</p>
                  <div className='wrap_each_comp_party'>
                      <div className='each_comp_party_inside'>
                          <p className='title_salut connect_party'>Connected party #1</p>
                          <p className='trash'><img src={trash} /></p>
                          <p className='title_salut'>Full name</p>
                          <p className='title_salut'>E-mail</p>
                          <input type='text' placeholder='Full name' value='Full name' className='alternative_inputs3 special_inputs'/>
                          <input type='text' placeholder='E-mail' value='Email' className='alternative_inputs3 special_inputs'/>

                      </div>
                  </div>
                  <div className='wrap_allNew'>
                        {this.addParties()}
                        <p className='each_blue_bottom'></p>
                  </div>
                  <p className='blue_add' onClick={this.incrementParty}>+ Add additional authorized signatory</p>
            </div>
        </p>
    )
  }
}

export default ChangeParties;
