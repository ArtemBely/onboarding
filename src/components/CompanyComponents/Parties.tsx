import React from 'react';
import Header from '../Header';
import CompanySlide from './CompanySlide';
import EachParty from './EachParty';
import { useHistory } from "react-router-dom";

function Parties(){
  const history = useHistory();
    return(
      <p className='wrap_components'>
          <form action='/companyParties' method='POST' id='companyParties' onSubmit={(e:any) => {
            e.preventDefault();
            history.push('/company_documents');
          }}></form>
          <Header />
          <CompanySlide />
          <EachParty />
      </p>
    )
}

export default Parties;
