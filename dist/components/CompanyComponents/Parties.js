import React from 'react';
import Header from '../Header';
import CompanySlide from './CompanySlide';
import EachParty from './EachParty';
import { useHistory } from "react-router-dom";
function Parties() {
    const history = useHistory();
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/companyParties', method: 'POST', id: 'companyParties', onSubmit: (e) => {
                e.preventDefault();
                history.push('/company_documents');
            } }),
        React.createElement(Header, null),
        React.createElement(CompanySlide, null),
        React.createElement(EachParty, null)));
}
export default Parties;
