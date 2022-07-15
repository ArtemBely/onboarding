import React from 'react';
import Header from '../Header';
import MainSettings from './MainSettings';
import MenuBar from './MenuBar';
import PersonalEdit from './PersonalEdit';
import FinancesEdit from './FinancesEdit';
import DocsEdit from './DocsEdit';
import ChangeParties from '../ProfileComponents/ChangeParties';
import AccountCompanyDetails from './AccountCompanyDetails';
function Profile() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        React.createElement(MenuBar, null),
        typeof window != "undefined" && window.location.pathname == '/profile' ?
            React.createElement(MainSettings, null) : typeof window != "undefined" && window.location.pathname == '/account_details' ?
            React.createElement(PersonalEdit, null) : typeof window != "undefined" && window.location.pathname == '/account_finances' ?
            React.createElement(FinancesEdit, null) : typeof window != "undefined" && window.location.pathname == '/account_documents' ?
            React.createElement(DocsEdit, null) : typeof window != "undefined" && window.location.pathname == '/connected_parties' ?
            React.createElement(ChangeParties, null) : typeof window != "undefined" && window.location.pathname == '/account_company_details' ?
            React.createElement(AccountCompanyDetails, null) : null));
}
export default Profile;
