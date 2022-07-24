import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Assets from './Assets';
import IncomeSlider from './IncomeSlider';
import Fiat from './Fiat';
import { useHistory } from 'react-router-dom';

function Financial(){
  const history = useHistory();
    return(
      <p className='wrap_components'>
      <form action='/checkFinancial' method='POST' id='checkFinancial' onSubmit={(e:any) => {
        e.preventDefault();
        history.push('/documents');
      }}></form>
          <Header />
          <ShapeSlide />
          <Assets show={'show'} />
          <IncomeSlider />
          <Fiat />
      </p>
    )
}

export default Financial;
