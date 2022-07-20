import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {
  check1: boolean,
  check2: boolean
}

class CompanyInfo extends Component<{}, iState>{

  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private uploadExtract = React.createRef<HTMLDivElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        check1: true,
        check2: false
    }

  }

changeOneTitle = () => {
  this.setState({ check1: true, check2: false });
  this.firstTitle?.current?.classList.add('choosen_type_blue');
  this.secondTitle?.current?.classList.remove('choosen_type_blue');
  this.uploadExtract?.current?.classList.add('dispNone');
}

changeTwoTitle = () => {
  this.setState({ check1: false, check2: true });
  this.secondTitle?.current?.classList.add('choosen_type_blue');
  this.firstTitle?.current?.classList.remove('choosen_type_blue');
  this.uploadExtract?.current?.classList.remove('dispNone');
}

render() {

			return (
				<div className='wrap_companyInfo'>
  					<div className='companyInfo'>
              <div className='first_part_company'>
                  <div className='first_part_inside' id='company_txt'>
                      <p className='title_yours'>Is the company publicly listed on a stock exchange?</p>
                      <div className='wrap_title_yours_company'>
                         <p className='each_title_yours choosen_type_blue' ref={this.firstTitle}>Yes <input type='checkbox' checked={this.state.check1} value="Yes" onChange={this.changeOneTitle} className='allCheckBoxes'/></p>
                         <p className='each_title_yours' ref={this.secondTitle}>No<input type='checkbox' checked={this.state.check2} value="No" onChange={this.changeTwoTitle} className='allCheckBoxes'/></p>
                      </div>
                  </div>
                  <div className='upload_extract dispNone' ref={this.uploadExtract}>
                      <p className='title_yours'>Please upload an extract from commercial register</p>
                      <div className='dashed_block'>
                              <input type='file' id='download_extract'/>
                              <p className='title_yours'>Company register or similar</p>
                              <p className='extract_inside' id='drop_txt'>Drop file here or click to select a file to upload (please note, only PDF, PNG and JPG documents are accepted)</p>
                              <p className='extract_inside'>Evidence of incorporation – certified copy of certificate of incorporation and constitutive documents, if applicable extract of commercial register, trade license</p>
                              <p className='extract_inside'>Certified copy of articles of association or statutes</p>
                              <p className='extract_inside'>If corporate documents older than 12 months: Certificate of Incumbency and if applicable Certificate of Good Standing</p>
                      </div>
                  </div>
                  <p className='title_salut'>Entity name</p>
                  <p className='title_salut'>Tax identification number</p>
                  <input type='text' placeholder='Entity name' className='alternative_inputs' id='alter1'/>
                  <input type='text' placeholder='Tax identification number' className='alternative_inputs'/>
                  <p className='title_salut'>Country of registration</p>
                  <p className='title_salut'>Entity type (beneficial ownership)</p>
                  <input type='text' placeholder='Germany' id='alter2' className='alternative_inputs'/>
                  <input type='text' placeholder='Foundation' className='alternative_inputs'/>
                  <p className='title_salut'>Date of incorporation</p>
                  <p className='title_salut'>Website</p>
                  <input type='text' ref={this.dateInput} placeholder='DD/MM/YYYY' id='alter3' onFocus={() => {
                    if(this.dateInput.current != null) {
                      this.dateInput.current.type = "date";
                    }
                  }} className='com_input'/>
                  <input type='text' placeholder='www.' className='alternative_inputs'/>
               </div>
  					</div>
				</div>
			)
		}

}

export default CompanyInfo;
