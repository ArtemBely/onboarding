import React, { Component } from 'react';
//@ts-ignore
import ok from '../../images/ok.svg';
class ShapeSlide extends Component {
    constructor(props) {
        super(props);
        this.firstStep = React.createRef();
        this.secondStep = React.createRef();
        this.mainSlider = () => {
            if (typeof window != "undefined") {
                return (React.createElement("div", { className: 'main_slider' },
                    React.createElement("p", { ref: this.firstStep, className: window.location.pathname == '/create_account' ?
                            "slider_number grey_shape_border" : "slider_number blue_border" },
                        React.createElement("p", { className: "number_inside blue_fone" }, window.location.pathname == '/create_account' ?
                            "1" : React.createElement("img", { src: ok }))),
                    React.createElement("p", { className: 'green_line' }),
                    React.createElement("p", { ref: this.secondStep, className: window.location.pathname == '/personal_details' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/financial_situation' ||
                            window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/personal_details' ||
                                window.location.pathname == '/financial_situation' || window.location.pathname == '/documents') ||
                                window.location.pathname == '/verification' || window.location.pathname == '/finish' ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/personal_details' ?
                            "2" : (window.location.pathname == '/financial_situation' ||
                            window.location.pathname == '/documents') || window.location.pathname == '/verification' || window.location.pathname == '/finish' ?
                            React.createElement("img", { src: ok }) : "2")),
                    React.createElement("p", { className: 'green_line' }),
                    React.createElement("p", { className: window.location.pathname == '/financial_situation' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/financial_situation' ||
                            window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/financial_situation' ||
                                window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/financial_situation' ?
                            "3" : (window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            React.createElement("img", { src: ok }) : "3")),
                    React.createElement("p", { className: 'green_line' }),
                    React.createElement("p", { className: window.location.pathname == '/documents' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/documents' || window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/documents' ?
                            "4" : (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            React.createElement("img", { src: ok }) : "4")),
                    React.createElement("p", { className: 'green_line' }),
                    React.createElement("p", { className: window.location.pathname == '/verification' ?
                            "slider_number grey_shape_border" : (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                            "slider_number blue_border" : "slider_number" },
                        React.createElement("p", { className: (window.location.pathname == '/verification' || window.location.pathname == '/finish') ?
                                "number_inside blue_fone" : "number_inside" }, window.location.pathname == '/verification' ?
                            "5" : window.location.pathname == '/finish' ?
                            React.createElement("img", { src: ok }) : "5")),
                    React.createElement("p", { className: 'green_line' }),
                    React.createElement("p", { className: window.location.pathname == '/finish' ?
                            "slider_number grey_shape_border" : "slider_number" },
                        React.createElement("p", { className: window.location.pathname == '/finish' ?
                                "number_inside blue_fone" : "number_inside" }, "6"))));
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
            React.createElement("div", { className: 'wrap_text_bellowSlider' },
                React.createElement("p", { className: 'text_bellowSlider' }, "Account"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Personal details"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Financial situation"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Check documents"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Verification"),
                React.createElement("p", { className: 'text_bellowSlider' }, "Finish"))));
    }
}
export default ShapeSlide;
