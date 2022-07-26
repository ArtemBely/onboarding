import React, { Component } from 'react';
class Alternative extends Component {
    constructor(props) {
        super(props);
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_alternative' },
            React.createElement("div", { className: 'alternative' },
                React.createElement("p", { className: 'title_salut', id: 'alter' }, "Alternative e-mail address for correspondence with PI Digital"),
                React.createElement("p", { className: 'title_salut' }, "Phone (prepend country code)"),
                React.createElement("input", { type: 'email', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'alterEmail', required: true, placeholder: 'Email', className: 'alternative_inputs', id: 'spec_inp1' }),
                React.createElement("input", { type: 'tel', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'codePhone', required: true, placeholder: 'Phone', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'us_title', id: 'home_address_txt' }, "Domicile address"),
                React.createElement("p", { className: 'title_salut' }, "Street, No."),
                React.createElement("p", { className: 'title_salut' }, "City/State"),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'streetNo', required: true, placeholder: 'Street, No.', className: 'alternative_inputs', id: 'spec_inp2' }),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'cityState', required: true, placeholder: 'City/State', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut' }, "Mailbox"),
                React.createElement("p", { className: 'title_salut' }, "Country of residence"),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'mailBox', required: true, placeholder: 'Mailbox', className: 'alternative_inputs', id: 'spec_inp3' }),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'resedenceCountry', required: true, placeholder: 'Country of residence', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut' }, "Postal code"),
                React.createElement("p", { className: 'title_salut' }, "\u0421orrespondence address"),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'postalCode', required: true, placeholder: 'Postal code', className: 'alternative_inputs', id: 'spec_inp4' }),
                React.createElement("input", { type: 'text', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', name: 'domAddress', required: true, placeholder: 'Address', className: 'alternative_inputs' }))));
    }
}
export default Alternative;
