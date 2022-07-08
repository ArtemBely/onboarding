import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Contract from './Contract';
import CompanySlide from './CompanyComponents/CompanySlide';
function Documents() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        typeof window != "undefined" && window.location.pathname == '/documents' ?
            React.createElement(ShapeSlide, null) :
            React.createElement(CompanySlide, null),
        React.createElement(Contract, null)));
}
export default Documents;
