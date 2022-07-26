import React from 'react';
import Header from '../Header';
import CompanySlide from './CompanySlide';
import EachParty from './EachParty';

function Parties(){

    return(
      <p className='wrap_components'>
          <form action='/parties/firstForm' method='POST' id='checkPersonal5'></form>
          <Header />
          <CompanySlide />
          <EachParty />
      </p>
    )
}

export default Parties;
