import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Assets from './Assets';
import IncomeSlider from './IncomeSlider';
import Fiat from './Fiat';

function Financial(){

    return(
      <p className='wrap_components'>
      <form action='/financial_situation/firstForm' method='POST' id='checkPersonal2'></form>
          <Header />
          <ShapeSlide />
          <Assets show={'show'} />
          <IncomeSlider />
          <Fiat />
      </p>
    )
}

export default Financial;
