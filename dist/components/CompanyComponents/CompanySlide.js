import React, { Component } from 'react';
//@ts-ignore
import ok from '../../../images/ok.svg';
class CompanySlide extends Component {
    constructor(props) {
        super(props);
        this.firstStep = React.createRef();
        this.secondStep = React.createRef();
        this.mainSlider = () => {
            if (typeof window != "undefined") {
                return (React.createElement("div", { className: 'main_slider_company' },
                    React.createElement("p", { ref: this.firstStep, className: window.location.pathname == '/create_account' ?
                            "slider_number grey_shape_border" : "slider_number blue_border" },
                        React.createElement("p", { className: "number_inside blue_fone" }, window.location.pathname == '/create_account' ?
                            "1" : React.createElement("img", { src: ok }))),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { ref: this.secondStep, className: window.location.pathname == '/company_details' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/company_personal' || window.location.pathname == '/company_documents' ||
                            window.location.pathname == '/documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' ||
                            window.location.pathname == '/parties') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/company_details' || window.location.pathname == '/company_documents' ||
                                window.location.pathname == '/company_personal' || window.location.pathname == '/documents') ||
                                window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/parties' ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/company_details' ?
                            "2" : (window.location.pathname == '/company_personal' ||
                            window.location.pathname == '/company_documents') || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish'
                            || window.location.pathname == '/parties' ?
                            React.createElement("img", { src: ok }) : "2")),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { className: window.location.pathname == '/company_personal' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/financial_situation' ||
                            window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                            window.location.pathname == '/parties' ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/company_personal' ||
                                window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                                window.location.pathname == '/parties' ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/company_personal' ?
                            "3" : (window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ||
                            window.location.pathname == '/parties' ?
                            React.createElement("img", { src: ok }) : "3")),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { className: window.location.pathname == '/parties' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/parties' || window.location.pathname == '/company_documents' || window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/parties' ?
                            "4" : (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                            React.createElement("img", { src: ok }) : "4")),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { className: window.location.pathname == '/company_documents' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish' || window.location.pathname == '/company_documents') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/company_documents' ?
                            "5" : window.location.pathname == '/company_finish' || window.location.pathname == '/company_verification' ?
                            React.createElement("img", { src: ok }) : "5")),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { className: window.location.pathname == '/company_verification' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/company_finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/company_verification' || window.location.pathname == '/company_finish') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/company_verification' ?
                            "6" : window.location.pathname == '/company_finish' ?
                            React.createElement("img", { src: ok }) : "6")),
                    React.createElement("p", { className: 'green_line_company' }),
                    React.createElement("p", { className: window.location.pathname == '/company_finish' ?
                            "slider_number grey_shape_border" : "slider_number" },
                        React.createElement("p", { className: window.location.pathname == '/company_finish' ?
                                "number_inside blue_fone" : "number_inside" }, "7"))));
            }
            return;
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
        this.firstStep = React.createRef();
    }
    render() {
        return (React.createElement("div", { className: 'wrap_slider' },
            this.mainSlider(),
            React.createElement("div", { className: 'wrap_text_bellowCompanySlider' },
                React.createElement("p", { className: 'text_bellowSlider' }, "Account"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Company details"),
                React.createElement("p", { className: 'text_bellowSlider', id: 'pd_text' }, "Personal details"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Connected parties"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Check Documents"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Verification"),
                React.createElement("p", { className: 'text_bellowSlider', id: 'fn_text' }, "Finish"))));
    }
}
export default CompanySlide;
