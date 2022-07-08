import React from 'react';
import Alternative from './Alternative';
import FirstPartForm from './FirstPartForm';
import Header from './Header';
import PERPerson from './PERPerson';
import ShapeSlide from './ShapeSlide';
import USPerson from './USPerson';
import Correspondence from './Correspondence';
import Employment from './Employment';

function Personal(){
    return(
      <p className='wrap_components'>
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
