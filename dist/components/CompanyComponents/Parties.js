import React from 'react';
import Header from '../Header';
import CompanySlide from './CompanySlide';
import EachParty from './EachParty';
function Parties() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/parties/firstForm', method: 'POST', id: 'checkPersonal5' }),
        React.createElement(Header, null),
        React.createElement(CompanySlide, null),
        React.createElement(EachParty, null)));
}
export default Parties;
