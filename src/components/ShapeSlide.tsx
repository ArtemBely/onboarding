import React, { Component } from 'react';
//@ts-ignore
import ok from '../../images/ok.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class ShapeSlide extends Component{

  private firstStep = React.createRef<HTMLParagraphElement>();
  private secondStep = React.createRef<HTMLParagraphElement>();

  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        user
    }

    this.firstStep = React.createRef();

  }

mainSlider = () => {
  if(typeof window != "undefined") {
    return (
      <div className='main_slider'>

          <p ref={this.firstStep} className={window.location.pathname == '/create_account' ?
              "slider_number grey_shape_border" : "slider_number blue_border"}>
              <p className="number_inside blue_fone">
              {window.location.pathname == '/create_account' ?
              "1" : <img src={ok} />}</p></p>
          <p className='green_line'></p>

          <p ref={this.secondStep} className={ window.location.pathname == '/personal_details' ?
              "slider_number grey_shape_border" :  (window.location.pathname == '/financial_situation' ||
            window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
              "slider_number blue_border" : "slider_number"}>
              <p className={ (window.location.pathname == '/personal_details' ||
               window.location.pathname == '/financial_situation' || window.location.pathname == '/documents') ||
               window.location.pathname == '/verification' || window.location.pathname == '/finish' ?
                  "number_inside blue_fone" : "number_inside"}>
                  { window.location.pathname == '/personal_details' ?
                  "2" :  (window.location.pathname == '/financial_situation' ||
                window.location.pathname == '/documents') || window.location.pathname == '/verification' || window.location.pathname == '/finish' ?
                  <img src={ok} /> : "2"}</p></p>
          <p className='green_line'></p>

          <p className={ window.location.pathname == '/financial_situation' ?
              "slider_number grey_shape_border" : (window.location.pathname == '/financial_situation' ||
            window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
              "slider_number blue_border" : "slider_number"}>
              <p className={ (window.location.pathname == '/financial_situation' ||
            window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                  "number_inside blue_fone" : "number_inside"}>
                  { window.location.pathname == '/financial_situation' ?
                  "3" :  (window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                  <img src={ok} /> : "3"}</p></p>
          <p className='green_line'></p>

          <p className={window.location.pathname == '/documents' ?
              "slider_number grey_shape_border" : (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
              "slider_number blue_border" : "slider_number"}>
              <p className={ (window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                  "number_inside blue_fone" : "number_inside"}>
                  { window.location.pathname == '/documents' ?
                  "4" :  (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                  <img src={ok} /> : "4"}</p></p>
          <p className='green_line'></p>

          <p className={window.location.pathname == '/verification' ?
              "slider_number grey_shape_border" : (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
              "slider_number blue_border" : "slider_number"}>
              <p className={ (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                  "number_inside blue_fone" : "number_inside"}>
                  { window.location.pathname == '/verification' ?
                  "5" :  window.location.pathname == '/finish' ?
                  <img src={ok} /> : "5"}</p>
          </p>
          <p className='green_line'></p>

          <p className={window.location.pathname == '/finish' ?
              "slider_number grey_shape_border" : "slider_number"}>
              <p className={window.location.pathname == '/finish' ?
                  "number_inside blue_fone" : "number_inside"}>6</p>
          </p>
      </div>
    )
  }
  return
}

render() {

			return (
				<div className='wrap_slider'>
          {this.mainSlider()}
          <div className='wrap_text_bellowSlider'>
              <p className='text_bellowSlider'>Account</p>
              <p className='text_bellowSlider'>Personal details</p>
              <p className='text_bellowSlider'>Financial situation</p>
              <p className='text_bellowSlider'>Check documents</p>
              <p className='text_bellowSlider'>Verification</p>
              <p className='text_bellowSlider'>Finish</p>
          </div>
				</div>
			)
		}

}

export default ShapeSlide;
