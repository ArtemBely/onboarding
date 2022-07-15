import React from 'react';
import Header from '../Header';
import MainSettings from './MainSettings';
import MenuBar from './MenuBar';
import PersonalEdit from './PersonalEdit';
import FinancesEdit from './FinancesEdit';
import DocsEdit from './DocsEdit';
import ChangeParties from '../ProfileComponents/ChangeParties';
import AccountCompanyDetails from './AccountCompanyDetails';

function Profile(){
    return(
      <p className='wrap_components'>
          <Header />
          <MenuBar />
          {typeof window != "undefined" && window.location.pathname == '/profile' ?
              <MainSettings /> : typeof window != "undefined" && window.location.pathname == '/account_details' ?
              <PersonalEdit /> : typeof window != "undefined" && window.location.pathname == '/account_finances' ?
              <FinancesEdit /> : typeof window != "undefined" && window.location.pathname == '/account_documents' ?
              <DocsEdit /> : typeof window != "undefined" && window.location.pathname == '/connected_parties' ?
              <ChangeParties /> : typeof window != "undefined" && window.location.pathname == '/account_company_details' ?
              <AccountCompanyDetails /> : null
          }
      </p>
    )
}

export default Profile;
