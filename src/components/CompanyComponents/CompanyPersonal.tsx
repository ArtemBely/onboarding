import React from 'react';
import { NavLink } from 'react-router-dom';
import Alternative from '../Alternative';
import Correspondence from '../Correspondence';
import FirstPartForm from '../FirstPartForm';
import Header from '../Header';
import PERPerson from '../PERPerson';
import USPerson from '../USPerson';
import CompanySlide from './CompanySlide';

function CompanyPersonal(){
    return(
      <p className='wrap_components'>
          <Header />
          <CompanySlide />
          <FirstPartForm />
          <USPerson />
          <PERPerson />
          <Alternative />
          <Correspondence />
          <div className='wrap_next_buttons5'>
            <div className='first_next_buttons'>
                <NavLink to='/company_details' className='back_button'>Back</NavLink>
                <NavLink to='/parties' className='next_button'>Next</NavLink>
            </div>
          </div>
      </p>
    )
}

export default CompanyPersonal;
