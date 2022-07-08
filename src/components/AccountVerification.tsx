import React from 'react';
import CompanySlide from './CompanyComponents/CompanySlide';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Verification from './Verification';

function AccountVerification(){
    return(
      <p className='wrap_components'>
          <Header />
          {typeof window != "undefined" && window.location.pathname =='/verification' ?
             <ShapeSlide /> : typeof window != "undefined" && window.location.pathname =='/company_verification' ?
             <CompanySlide /> : null
          }
          <Verification />
      </p>
    )
}

export default AccountVerification;
