import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class CompanyEmployers extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.thirdTitle = React.createRef();
        this.fourthTitle = React.createRef();
        this.firstBlue = React.createRef();
        this.firstBlue2 = React.createRef();
        this.secondBlue = React.createRef();
        this.thirdBlue = React.createRef();
        this.changeInputColor1 = () => {
            this.setState({ check1: true, check2: false, check3: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor2 = () => {
            this.setState({ check1: false, check2: true, check3: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor3 = () => {
            this.setState({ check1: false, check2: false, check3: true });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor4 = () => {
            this.setState({ check4: true, check5: false, check6: false, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor5 = () => {
            this.setState({ check4: false, check5: true, check6: false, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor6 = () => {
            this.setState({ check4: false, check5: false, check6: true, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor7 = () => {
            this.setState({ check4: false, check5: false, check6: false, check7: true });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
        };
        this.changeInputColor8 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.thirdBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor9 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeOneTitle = () => {
            var _a, _b;
            this.setState({ check8: true, check9: false, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTwoTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: true, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeThreeTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: false, check10: true, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFourthTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: false, check10: false, check11: true });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fourthTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeInputColor21 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.firstBlue2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue2) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue2) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor22 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: true,
            check7: false,
            check8: false,
            check9: false,
            check10: true,
            check11: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_companyEmployers' },
            React.createElement("div", { className: 'companyEmployers' },
                React.createElement("p", { className: 'title_salut' }, "Employees of the company"),
                React.createElement("div", { className: 'wrap_comp_status' },
                    React.createElement("p", { className: 'each_empl31 choosen_type_blue' },
                        "1 - 25 ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeInputColor1, value: '1 - 25', className: 'allCheckBoxes6' })),
                    React.createElement("p", { className: 'each_empl31' },
                        "25 - 100 ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeInputColor2, value: '25 - 100', className: 'allCheckBoxes6' })),
                    React.createElement("p", { className: 'each_empl31' },
                        " ",
                        `> 100`,
                        " ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeInputColor3, value: '> 100', className: 'allCheckBoxes6' }))),
                React.createElement("p", { className: 'title_salut', id: 'line2' }, "Line of business or industry (NOGA code)"),
                React.createElement("select", { id: 'selectCode2', className: 'com_input' },
                    React.createElement("option", { value: "", disabled: true, selected: true }, "Code"),
                    React.createElement("option", { value: "hurr" }, "Durr")),
                React.createElement("p", { className: 'title_salut', id: 'turnover2' }, "Company turnover"),
                React.createElement("div", { className: 'wrap_turn_status' },
                    React.createElement("p", { className: 'each_empl4' },
                        `< CHF 5 m`,
                        React.createElement("input", { type: 'checkbox', checked: this.state.check4, onChange: this.changeInputColor4, value: '< CHF 5 m', className: 'allCheckBoxes8' })),
                    React.createElement("p", { className: 'each_empl4' },
                        "CHF 5 m - CHF 5 m ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check5, onChange: this.changeInputColor5, value: 'CHF 5 m - CHF 5 m', className: 'allCheckBoxes8' })),
                    React.createElement("p", { className: 'each_empl4 choosen_type_blue' },
                        "CHF 10 m - CHF 25 m ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check6, onChange: this.changeInputColor6, value: 'CHF 10 m - CHF 25 m', className: 'allCheckBoxes8' })),
                    React.createElement("p", { className: 'each_empl4' },
                        " ",
                        `> CHF 25 m`,
                        " ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check7, onChange: this.changeInputColor7, value: '> CHF 25 m', className: 'allCheckBoxes8' }))),
                React.createElement("div", { className: 'wrap_transfer3' },
                    React.createElement("p", { className: 'corr_text4' },
                        "As an authorized signatory of legal entity, I declare that ",
                        React.createElement("span", { className: 'width_font' }, "funds that will be transferred to PI Digital are: (i) of legal origin"),
                        " and therefore not derived from any illicit activity ",
                        React.createElement("span", { className: 'width_font' }, "and (ii) fully tax compliant"),
                        " according to the laws and regulations applicable in the country of incorporation/existence of the company."),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.thirdBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor8, className: 'main_checkbox' }))),
                React.createElement("p", { className: 'us_title', id: 'company_reg_txt' }, "Registered office address at the place of incorporation"),
                React.createElement("p", { className: 'title_salut' }, "Street, No."),
                React.createElement("p", { className: 'title_salut' }, "City/State"),
                React.createElement("input", { type: 'text', placeholder: 'Street, No.', className: 'alternative_inputs' }),
                React.createElement("input", { type: 'text', placeholder: 'City/State', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut' }, "Mailbox"),
                React.createElement("p", { className: 'title_salut' }, "Country of residence"),
                React.createElement("input", { type: 'text', placeholder: 'Mailbox', className: 'alternative_inputs' }),
                React.createElement("input", { type: 'text', placeholder: 'Country of residence', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut', id: 'company_postal' }, "Postal code"),
                React.createElement("input", { type: 'text', placeholder: 'Postal code', className: 'alternative_inputs' }),
                React.createElement("div", { className: 'wrap_office_address' },
                    React.createElement("p", { className: 'us_title' }, "Correspondence address"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor9, className: 'main_checkbox' })),
                    React.createElement("p", { className: 'corr_text' }, "Same as office address")),
                React.createElement("p", { className: 'us_title pi_title', id: 'company_fiat_txt' }, "Fiat accounts"),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Reference currency"),
                React.createElement("div", { className: 'wrap_title_yours' },
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.firstTitle },
                        "CHF ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check8, value: "CHF", onChange: this.changeOneTitle, className: 'allCheckBoxes7' })),
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.secondTitle },
                        "EUR ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check9, value: "EUR", onChange: this.changeTwoTitle, className: 'allCheckBoxes7' })),
                    React.createElement("p", { className: 'each_title_yours_currency choosen_type_blue', ref: this.thirdTitle },
                        "USD",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check10, value: "USD", onChange: this.changeThreeTitle, className: 'allCheckBoxes7' })),
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.fourthTitle },
                        "SGD",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check11, value: "SGD", onChange: this.changeFourthTitle, className: 'allCheckBoxes7' }))),
                React.createElement("p", { className: 'title_salut title_fiat' }, "Amount of first transfer to account at PI Digital in CHF"),
                React.createElement("input", { type: 'text', name: 'ammount', className: 'com_input', placeholder: 'Ammount' }),
                React.createElement("p", { className: 'title_salut title_fiat' }, "Bank and country of origin of the assets to be transferred to PI Digital"),
                React.createElement("input", { type: 'text', placeholder: 'Bank', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("div", { className: 'wrap_transfer' },
                    React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue2 },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor21, className: 'main_checkbox' }))),
                React.createElement("p", { className: 'us_title pi_title' }, "PI Digital wallets"),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Indicative initial BTC transfer to PI Digital wallet"),
                React.createElement("input", { type: 'text', placeholder: 'Indicative initial BTC transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "BTC wallet address used for the transfer"),
                React.createElement("input", { type: 'text', placeholder: 'BTC wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Indicative initial ETH transfer to PI Digital wallet"),
                React.createElement("input", { type: 'text', placeholder: 'Indicative initial ETH transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "ETH wallet address used for the transfer"),
                React.createElement("input", { type: 'text', placeholder: 'ETH wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("div", { className: 'wrap_transfer' },
                    React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.secondBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor22, className: 'main_checkbox' }))),
                React.createElement("div", { className: 'wrap_next_buttons5' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: '/', className: 'back_button' }, "Back"),
                        React.createElement(NavLink, { to: '/company_personal', className: 'next_button' }, "Next"))))));
    }
}
export default CompanyEmployers;
