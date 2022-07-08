import React from 'react';
import CompanySlide from './CompanyComponents/CompanySlide';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Verification from './Verification';
function AccountVerification() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        typeof window != "undefined" && window.location.pathname == '/verification' ?
            React.createElement(ShapeSlide, null) : typeof window != "undefined" && window.location.pathname == '/company_verification' ?
            React.createElement(CompanySlide, null) : null,
        React.createElement(Verification, null)));
}
export default AccountVerification;
