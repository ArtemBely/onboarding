import React from 'react';
import Header from '../Header';
import CompanyEmployers from './CompanyEmployers';
import CompanyInfo from './CompanyInfo';
import CompanySlide from './CompanySlide';

function Company(){

    return(
      <p className='wrap_components'>
          <form action='/company_details/firstForm' method='POST' id='checkPersonal3'></form>
          <Header />
          <CompanySlide />
          <CompanyInfo />
          <CompanyEmployers />
      </p>
    )
}

export default Company;
