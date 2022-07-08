import React from 'react';
import Header from '../Header';
import CompanySlide from './CompanySlide';
import EachParty from './EachParty';

function Parties(){
    return(
      <p className='wrap_components'>
          <Header />
          <CompanySlide />
          <EachParty />
      </p>
    )
}

export default Parties;
