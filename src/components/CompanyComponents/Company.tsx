import React from 'react';
import Header from '../Header';
import CompanyEmployers from './CompanyEmployers';
import CompanyInfo from './CompanyInfo';
import CompanySlide from './CompanySlide';
import { useHistory } from 'react-router-dom';

function Company(){
  const history = useHistory();
    return(
      <p className='wrap_components'>
          <form action='/companyForm' method='POST' id='companyForm' onSubmit={(e:any) => {
            e.preventDefault();
            history.push('/company_personal');
          }}></form>
          <Header />
          <CompanySlide />
          <CompanyInfo />
          <CompanyEmployers />
      </p>
    )
}

export default Company;
