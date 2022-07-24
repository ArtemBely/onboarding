import React from 'react';
import { NavLink } from 'react-router-dom';
import Alternative from '../Alternative';
import Correspondence from '../Correspondence';
import FirstPartForm from '../FirstPartForm';
import Header from '../Header';
import PERPerson from '../PERPerson';
import USPerson from '../USPerson';
import CompanySlide from './CompanySlide';
import { useHistory } from "react-router-dom";

function CompanyPersonal(){
  const history = useHistory();
    return(
      <p className='wrap_components'>
        <form action='/checkPersonal' method='POST' onSubmit={(e:any) => {
          e.preventDefault();
          history.push('/parties');
        }} id='checkPersonal'></form>
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
                <button type='submit' form='checkPersonal' className='next_button'>Next</button>
            </div>
          </div>
      </p>
    )
}

export default CompanyPersonal;
