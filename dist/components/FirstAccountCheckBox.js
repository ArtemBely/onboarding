var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class YourAccount extends Component {
    constructor(props, state) {
        super(props, state);
        this.checkBlue1 = React.createRef();
        this.checkBlue2 = React.createRef();
        this.chekBoxInside1 = React.createRef();
        this.chekBoxInside2 = React.createRef();
        this.wrapCompany = React.createRef();
        this.changeInputColor = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.setState({ check1: true, check2: false });
            (_b = (_a = this.checkBlue2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('blueCheckBox');
            ((_d = (_c = this.chekBoxInside1) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.checked) ?
                (_f = (_e = this.checkBlue1) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox') : null;
            (_h = (_g = this.wrapCompany) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.add('dispNone');
        };
        this.changeInputColor2 = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.setState({ check1: false, check2: true });
            (_b = (_a = this.checkBlue1) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('blueCheckBox');
            ((_d = (_c = this.chekBoxInside2) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.checked) ?
                (_f = (_e = this.checkBlue2) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox') : null;
            (_h = (_g = this.wrapCompany) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.remove('dispNone');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            check1: false,
            check2: false,
            allCountries: []
        };
        this.checkBlue1 = React.createRef();
        this.checkBlue2 = React.createRef();
        this.chekBoxInside1 = React.createRef();
        this.chekBoxInside2 = React.createRef();
    }
    componentDidMount() {
        const start = () => __awaiter(this, void 0, void 0, function* () {
            yield axios.get('countries.json')
                .then((res) => {
                this.setState({ allCountries: res.data });
            })
                .catch(err => console.log(err));
        });
        start();
    }
    render() {
        return (React.createElement("div", { className: 'wrap_first_acc_checkbox' },
            React.createElement("div", { className: 'first_acc_checkbox' },
                React.createElement("p", { className: 'welcome_to_acc' }, "I would like to onboard as:"),
                React.createElement("form", { id: 'main_form' },
                    React.createElement("span", { className: 'wrap_main_checkbox', ref: this.checkBlue1 },
                        React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeInputColor, className: 'main_checkbox', ref: this.chekBoxInside1, required: true })),
                    React.createElement("span", { className: 'each_type' }, "An individual"),
                    React.createElement("span", { className: 'wrap_main_checkbox', ref: this.checkBlue2 },
                        React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeInputColor2, className: 'main_checkbox', ref: this.chekBoxInside2, required: true })),
                    React.createElement("span", { className: 'each_type' }, "A legal entity")),
                React.createElement("div", { className: 'wrap_company_type dispNone', ref: this.wrapCompany },
                    React.createElement("div", { className: 'company_type' },
                        React.createElement("p", { className: 'title_salut' }, "Country of registration"),
                        React.createElement("p", { className: 'title_salut' }, "Entity type (beneficial ownership)"),
                        React.createElement("select", { id: 'selectLegalCountry', className: 'com_input' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                        React.createElement("select", { id: 'selectLegalType', className: 'com_input' },
                            React.createElement("option", { value: "", disabled: true, selected: true }, "Type"),
                            React.createElement("option", { value: "Operative company" }, "Operative company"),
                            React.createElement("option", { value: "Domiciliary company" }, "Domiciliary company"),
                            React.createElement("option", { value: "Insurance wrapper" }, "Insurance wrapper"),
                            React.createElement("option", { value: "Trust" }, "Trust"),
                            React.createElement("option", { value: "Foundation" }, "Foundation"),
                            React.createElement("option", { value: "Other (e.g. charity)" }, "Other (e.g. charity)")))),
                React.createElement("p", { className: 'wrap_cases' },
                    React.createElement("p", { className: 'case1' }, "In case of questions or concerns, we kindly ask you to contact us at info@pidigital.swiss."),
                    React.createElement("p", { className: 'case1' }, "Yours sincerely, PI Digital")),
                React.createElement("div", { className: 'wrap_next_buttons0' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: '#', className: 'back_button' }, "Back"),
                        React.createElement(NavLink, { to: this.state.check2 ? '/company_details' : '/personal_details', className: 'next_button' }, "Next"))))));
    }
}
export default YourAccount;
