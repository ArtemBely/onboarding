import React, { Component } from 'react';
//@ts-ignore
import ok from '../../../images/ok.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class CompanySlide extends Component{

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
      <div className='main_slider_company'>

                <p ref={this.firstStep} className={window.location.pathname == '/create_account' ?
                    "slider_number grey_shape_border" : "slider_number blue_border"}>
                    <p className="number_inside blue_fone">
                    {window.location.pathname == '/create_account' ?
                    "1" : <img src={ok} />}</p></p>
                <p className='green_line_company'></p>

                <p ref={this.secondStep} className={ window.location.pathname == '/company_details' ?
                    "slider_number grey_shape_border" :  (window.location.pathname == '/company_personal' || window.location.pathname == '/company_documents' ||
                  window.location.pathname == '/documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' ||
                  window.location.pathname == '/parties') ?
                    "slider_number blue_border" : "slider_number"}>
                    <p className={ (window.location.pathname == '/company_details' || window.location.pathname == '/company_documents' ||
                     window.location.pathname == '/company_personal' || window.location.pathname == '/documents') ||
                     window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/parties' ?
                        "number_inside blue_fone" : "number_inside"}>
                        { window.location.pathname == '/company_details' ?
                        "2" :  (window.location.pathname == '/company_personal' ||
                      window.location.pathname == '/company_documents') || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish'
                      || window.location.pathname == '/parties' ?
                        <img src={ok} /> : "2"}</p></p>
                <p className='green_line_company'></p>

                <p className={ window.location.pathname == '/company_personal' ?
                    "slider_number grey_shape_border" : (window.location.pathname == '/financial_situation' ||
                  window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                  window.location.pathname == '/parties' ?
                    "slider_number blue_border" : "slider_number"}>
                    <p className={ (window.location.pathname == '/company_personal' ||
                  window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                  window.location.pathname == '/parties' ?
                        "number_inside blue_fone" : "number_inside"}>
                        { window.location.pathname == '/company_personal' ?
                        "3" :  (window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                        window.location.pathname == '/parties' ?
                        <img src={ok} /> : "3"}</p></p>
                <p className='green_line_company'></p>

                <p className={window.location.pathname == '/parties' ?
                    "slider_number grey_shape_border" : (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                    "slider_number blue_border" : "slider_number"}>
                    <p className={ (window.location.pathname == '/parties' || window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                        "number_inside blue_fone" : "number_inside"}>
                        { window.location.pathname == '/parties' ?
                        "4" :  (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                        <img src={ok} /> : "4"}</p></p>
                <p className='green_line_company'></p>

                <p className={window.location.pathname == '/company_documents' ?
                    "slider_number grey_shape_border" : (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                    "slider_number blue_border" : "slider_number"}>
                    <p className={ (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                        "number_inside blue_fone" : "number_inside"}>
                        { window.location.pathname == '/company_documents' ?
                        "5" :  window.location.pathname == '/company_finish' || window.location.pathname == '/company_verification' ?
                        <img src={ok} /> : "5"}</p>
                </p>
                <p className='green_line_company'></p>

                <p className={window.location.pathname == '/company_verification' ?
                    "slider_number grey_shape_border" : (window.location.pathname == '/company_finish') ?
                    "slider_number blue_border" : "slider_number"}>
                    <p className={ (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                        "number_inside blue_fone" : "number_inside"}>
                        { window.location.pathname == '/company_verification' ?
                        "6" :  window.location.pathname == '/company_finish' ?
                        <img src={ok} /> : "6"}</p>
                </p>
                <p className='green_line_company'></p>

                <p className={window.location.pathname == '/company_finish' ?
                    "slider_number grey_shape_border" : "slider_number"}>
                    <p className={window.location.pathname == '/company_finish' ?
                        "number_inside blue_fone" : "number_inside"}>7</p>
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
          <div className='wrap_text_bellowCompanySlider'>
              <p className='text_bellowSlider'>Account</p>
              <p className='text_bellowSlider'>Company details</p>
              <p className='text_bellowSlider' id='pd_text'>Personal details</p>
              <p className='text_bellowSlider'>Connected parties</p>
              <p className='text_bellowSlider'>Check Documents</p>
              <p className='text_bellowSlider'>Verification</p>
              <p className='text_bellowSlider' id='fn_text'>Finish</p>
          </div>
				</div>
			)
		}

}

export default CompanySlide;
