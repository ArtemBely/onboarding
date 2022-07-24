import React from 'react';
import { NavLink } from 'react-router-dom';
import Alternative from '../Alternative';
import Correspondence from '../Correspondence';
import FirstPartForm from '../FirstPartForm';
import Header from '../Header';
import PERPerson from '../PERPerson';
import USPerson from '../USPerson';
import CompanySlide from './CompanySlide';
import { useHistory } from "react-router-dom";
function CompanyPersonal() {
    const history = useHistory();
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/checkPersonal', method: 'POST', onSubmit: (e) => {
                e.preventDefault();
                history.push('/parties');
            }, id: 'checkPersonal' }),
        React.createElement(Header, null),
        React.createElement(CompanySlide, null),
        React.createElement(FirstPartForm, null),
        React.createElement(USPerson, null),
        React.createElement(PERPerson, null),
        React.createElement(Alternative, null),
        React.createElement(Correspondence, null),
        React.createElement("div", { className: 'wrap_next_buttons5' },
            React.createElement("div", { className: 'first_next_buttons' },
                React.createElement(NavLink, { to: '/company_details', className: 'back_button' }, "Back"),
                React.createElement("button", { type: 'submit', form: 'checkPersonal', className: 'next_button' }, "Next")))));
}
export default CompanyPersonal;
