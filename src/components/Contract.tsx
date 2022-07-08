import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import file from '../../public/images/file.svg';
//@ts-ignore
import download from '../../public/images/download.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class Contract extends Component{


  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
        check1: false,
        check2: false
    }

  }

render() {

			return (
				<div className='wrap_contract'>
  					<div className='contract'>
                  <p className='us_title'>Your contract documents</p>
                  <p className='title_salut' id='contract_txt'>You will have to sign the documents below.
                   Please check each one of the documents and then continue with the video identification.</p>
                   <div className='wrap_docs'>
                        <div className='each_doc'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>Basic Client Contract (02_01_basic_client_contract_Mr_Name_Lastname.pdf)</p>
                            <p className='not_agree'>not yet agreed</p>
                            <img src={download} className='down_img'/>
                        </div>
                        <div className='each_doc'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>FATCA and AEOI/CRS Self-Certification Individual (04/01_fatca_aia_Mr_Name_Lastname.pdf)</p>
                            <p className='not_agree'>not yet agreed</p>
                            <img src={download} className='down_img'/>
                        </div>
                        <div className='each_doc'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>Form A - Determination of the Beneficial Owner (05/01_forma_a_Mr_Name_Lastname.pdf)</p>
                            <p className='not_agree'>not yet agreed</p>
                            <img src={download} className='down_img'/>
                        </div>
                   </div>

                   <div className='wrap_next_buttons3'>
                     <div className='first_next_buttons'>
                         <NavLink to={typeof window != "undefined" && window.location.pathname == '/company_documents' ? '/parties' : '/financial_situation'} className='back_button'>Back</NavLink>
                         <NavLink to={typeof window != "undefined" && window.location.pathname == '/company_documents' ? '/company_verification' : '/verification'} className='next_button'>Next</NavLink>
                     </div>
                   </div>
  					</div>
				</div>
			)
		}

}

export default Contract;
