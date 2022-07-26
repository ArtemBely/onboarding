import React from 'react';
import Header from '../Header';
import CompanyEmployers from './CompanyEmployers';
import CompanyInfo from './CompanyInfo';
import CompanySlide from './CompanySlide';
function Company() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/company_details/firstForm', method: 'POST', id: 'checkPersonal3' }),
        React.createElement(Header, null),
        React.createElement(CompanySlide, null),
        React.createElement(CompanyInfo, null),
        React.createElement(CompanyEmployers, null)));
}
export default Company;
