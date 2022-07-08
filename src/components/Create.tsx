import React from 'react';
import FirstAccountCheckBox from './FirstAccountCheckBox';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import YourAccount from './YourAccount';

function Create(){
    return(
      <p className='wrap_components'>
          <Header />
          <ShapeSlide />
          <YourAccount />
          <FirstAccountCheckBox />
      </p>
    )
}

export default Create;
