import React, { Component } from 'react';

interface MyState {
  name: string;
}

export default class Ch extends Component<{},  MyState > {

  constructor(state: MyState) {
    super(state)

    this.state = {
      name: "State Component"
    }

  }

  render() {
    return(
      <div className='sssssuper'>
        <div className='container'>
            {this.state.name}
        </div>
      </div>
    )
  }


}
