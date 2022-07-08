import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Assets from './Assets';
import IncomeSlider from './IncomeSlider';
import Fiat from './Fiat';

function Financial(){
    return(
      <p className='wrap_components'>
          <Header />
          <ShapeSlide />
          <Assets />
          <IncomeSlider />
          <Fiat />
      </p>
    )
}

export default Financial;
