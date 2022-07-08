import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Complete from './Complete';
import CompanySlide from './CompanyComponents/CompanySlide';

function Finish(){
    return(
      <p className='wrap_components'>
          <Header />
          {typeof window != "undefined" && window.location.pathname == '/finish' ?
             <ShapeSlide /> :
             <CompanySlide />
          }
          <Complete />
      </p>
    )
}

export default Finish;
