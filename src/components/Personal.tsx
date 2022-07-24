import React from 'react';
import Alternative from './Alternative';
import FirstPartForm from './FirstPartForm';
import Header from './Header';
import PERPerson from './PERPerson';
import ShapeSlide from './ShapeSlide';
import USPerson from './USPerson';
import Correspondence from './Correspondence';
import Employment from './Employment';
import { useHistory } from "react-router-dom";

function Personal(){

  const history = useHistory();
    return(
      <p className='wrap_components'>
      <form action='/checkPersonal' method='POST' onSubmit={(e:any) => {
        e.preventDefault();
        history.push('/financial_situation');
      }} id='checkPersonal'></form>
          <Header />
          <ShapeSlide />
          <FirstPartForm />
          <USPerson />
          <PERPerson />
          <Alternative />
          <Correspondence />
          <Employment />
      </p>
    )
}

export default Personal;
