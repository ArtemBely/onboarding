import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Contract from './Contract';
import CompanySlide from './CompanyComponents/CompanySlide';

function Documents(){
    return(
      <p className='wrap_components'>
          <Header />
          {typeof window != "undefined" && window.location.pathname == '/documents' ?
             <ShapeSlide /> :
             <CompanySlide />
          }
          <Contract />
      </p>
    )
}

export default Documents;
