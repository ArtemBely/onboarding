import React, { Component } from 'react';
//@ts-ignore
import file from '../../../public/images/file.svg';
//@ts-ignore
import download from '../../../public/images/download.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

class DocsEdit extends Component{


  constructor(props: any) {

    super(props)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

  }

render() {

			return (
				<div className='wrap_contract_docs'>
  					<div className='contract'>
                  <p className='us_title'>Documents</p>
                   <div className='wrap_docs'>
                        <div className='each_docProfile'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>Basic Client Contract (02_01_basic_client_contract_Mr_Name_Lastname.pdf)</p>
                            <img src={download} className='dispNone'/>
                            <p className='approved'>approved</p>
                        </div>
                        <div className='each_docProfile'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>FATCA and AEOI/CRS Self-Certification Individual (04/01_fatca_aia_Mr_Name_Lastname.pdf)</p>
                            <img src={download} className='dispNone'/>
                            <p className='approved'>approved</p>
                        </div>
                        <div className='each_docProfile'>
                            <p className='wrap_border_file'><img src={file} /></p>
                            <p className='title_of_doc'>Form A - Determination of the Beneficial Owner (05/01_forma_a_Mr_Name_Lastname.pdf)</p>
                            <img src={download} className='dispNone'/>
                            <p className='approved'>approved</p>
                        </div>
                   </div>
  					</div>
				</div>
			)
		}

}

export default DocsEdit;
