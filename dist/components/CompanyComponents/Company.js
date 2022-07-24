import React from 'react';
import Header from '../Header';
import CompanyEmployers from './CompanyEmployers';
import CompanyInfo from './CompanyInfo';
import CompanySlide from './CompanySlide';
import { useHistory } from 'react-router-dom';
function Company() {
    const history = useHistory();
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/companyForm', method: 'POST', id: 'companyForm', onSubmit: (e) => {
                e.preventDefault();
                history.push('/company_personal');
            } }),
        React.createElement(Header, null),
        React.createElement(CompanySlide, null),
        React.createElement(CompanyInfo, null),
        React.createElement(CompanyEmployers, null)));
}
export default Company;
