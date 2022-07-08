import React from 'react';
import Header from '../Header';
import CompanyEmployers from './CompanyEmployers';
import CompanyInfo from './CompanyInfo';
import CompanySlide from './CompanySlide';

function Company(){
    return(
      <p className='wrap_components'>
          <Header />
          <CompanySlide />
          <CompanyInfo />
          <CompanyEmployers />
      </p>
    )
}

export default Company;
