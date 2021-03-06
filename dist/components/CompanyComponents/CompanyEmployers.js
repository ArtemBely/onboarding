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
        this.asAnAuthor = React.createRef();
        this.sameCorrespondenceCompany = React.createRef();
        this.noTransfer3 = React.createRef();
        this.noTransfer4 = React.createRef();
        this.changeInputColor1 = () => {
            this.setState({ check1: true, check2: false, check3: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[0].classList.add('choosen_type_blue');
            document.getElementById('emplOfCompanyHid').value = "1 - 25";
        };
        this.changeInputColor2 = () => {
            this.setState({ check1: false, check2: true, check3: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[1].classList.add('choosen_type_blue');
            document.getElementById('emplOfCompanyHid').value = "25 - 100";
        };
        this.changeInputColor3 = () => {
            this.setState({ check1: false, check2: false, check3: true });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[2].classList.add('choosen_type_blue');
            document.getElementById('emplOfCompanyHid').value = "> 100";
        };
        this.changeInputColor4 = () => {
            this.setState({ check4: true, check5: false, check6: false, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
            document.getElementById('turnoverCompanyHid').value = "< CHF 5 m";
        };
        this.changeInputColor5 = () => {
            this.setState({ check4: false, check5: true, check6: false, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
            document.getElementById('turnoverCompanyHid').value = "CHF 5 m - CHF 10 m";
        };
        this.changeInputColor6 = () => {
            this.setState({ check4: false, check5: false, check6: true, check7: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
            document.getElementById('turnoverCompanyHid').value = "CHF 10 m - CHF 25 m";
        };
        this.changeInputColor7 = () => {
            this.setState({ check4: false, check5: false, check6: false, check7: true });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
            document.getElementById('turnoverCompanyHid').value = "> CHF 25 m";
        };
        this.changeInputColor8 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            e.target.checked ?
                ((_a = this.asAnAuthor) === null || _a === void 0 ? void 0 : _a.current).value = 'As an authorized signatory of legal entity, I declare that funds that will be transferred to PI Digital are: (i) of legal origin and therefore not derived from any illicit activity and (ii) fully tax compliant according to the laws and regulations applicable in the country of incorporation/existence of the company.' :
                ((_b = this.asAnAuthor) === null || _b === void 0 ? void 0 : _b.current).value = 'I do not declare';
            if ((_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.contains('blueCheckBox')) {
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('blueCheckBox');
                document.getElementById('asAnAuthorHid').value = e.target.checked.toString();
            }
            else {
                (_h = (_g = this.thirdBlue) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.add('blueCheckBox');
                document.getElementById('asAnAuthorHid').value = e.target.checked.toString();
            }
        };
        this.changeInputColor9 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            e.target.checked ?
                ((_g = this.sameCorrespondenceCompany) === null || _g === void 0 ? void 0 : _g.current).value = 'Same as office address' :
                ((_h = this.sameCorrespondenceCompany) === null || _h === void 0 ? void 0 : _h.current).value = 'Not the same address';
        };
        this.changeOneTitle = () => {
            var _a, _b;
            this.setState({ check8: true, check9: false, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            document.getElementById('fiatCompanyCurrencyHid').value = "CHF";
        };
        this.changeTwoTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: true, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            document.getElementById('fiatCompanyCurrencyHid').value = "EUR";
        };
        this.changeThreeTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: false, check10: true, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            document.getElementById('fiatCompanyCurrencyHid').value = "USD";
        };
        this.changeFourthTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: false, check10: false, check11: true });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fourthTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            document.getElementById('fiatCompanyCurrencyHid').value = "SGD";
        };
        this.changeInputColor21 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            ((_b = (_a = this.firstBlue2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue2) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue2) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            e.target.checked ?
                ((_g = this.noTransfer3) === null || _g === void 0 ? void 0 : _g.current).value = 'No transfer' :
                ((_h = this.noTransfer3) === null || _h === void 0 ? void 0 : _h.current).value = 'Transfer';
        };
        this.changeInputColor22 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            e.target.checked ?
                ((_g = this.noTransfer4) === null || _g === void 0 ? void 0 : _g.current).value = 'No transfer' :
                ((_h = this.noTransfer4) === null || _h === void 0 ? void 0 : _h.current).value = 'Transfer';
        };
        this.changeWhite1 = () => {
            this.setState({ check12: true, check13: false });
            document.querySelectorAll('.each_agree_block')[0].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[1].classList.remove('blue_each_white_per');
            document.getElementById('agreeRecieveCompanyHid').value = "I agree to receive updates and news from PI Digital via email";
        };
        this.changeWhite2 = () => {
            this.setState({ check12: false, check13: true });
            document.querySelectorAll('.each_agree_block')[1].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[0].classList.remove('blue_each_white_per');
            document.getElementById('agreeRecieveCompanyHid').value = "I do not agree to receive updates and news from PI Digital via email";
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
            check11: false,
            check12: true,
            check13: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_companyEmployers' },
            React.createElement("div", { className: 'companyEmployers' },
                React.createElement("p", { className: 'title_salut' }, "Employees of the company"),
                React.createElement("div", { className: 'wrap_comp_status' },
                    React.createElement("p", { className: 'each_empl31 choosen_type_blue' },
                        "1 - 25",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeInputColor1, className: 'allCheckBoxes6' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check1 ? 'emplOfCompany' : '', form: 'checkPersonal3', value: '1 - 25' })),
                    React.createElement("p", { className: 'each_empl31' },
                        "25 - 100",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeInputColor2, className: 'allCheckBoxes6' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check2 ? 'emplOfCompany' : '', form: 'checkPersonal3', value: '25 - 100 ' })),
                    React.createElement("p", { className: 'each_empl31' },
                        " ",
                        `> 100`,
                        React.createElement("input", { type: 'checkbox', checked: this.state.check3, onChange: this.changeInputColor3, className: 'allCheckBoxes6' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check3 ? 'emplOfCompany' : '', form: 'checkPersonal3', value: `> 100` }))),
                React.createElement("p", { className: 'title_salut', id: 'line2' }, "Line of business or industry (NOGA code)"),
                React.createElement("select", { id: 'selectCode2', name: 'lineOfCompanyHid', required: true, form: 'checkPersonal3', className: 'com_input' },
                    React.createElement("option", { value: "", disabled: true, selected: true }, "Code"),
                    React.createElement("option", { value: "hurr" }, "Durr")),
                React.createElement("p", { className: 'title_salut', id: 'turnover2' }, "Company turnover"),
                React.createElement("div", { className: 'wrap_turn_status' },
                    React.createElement("p", { className: 'each_empl4' },
                        `< CHF 5 m`,
                        React.createElement("input", { type: 'checkbox', checked: this.state.check4, onChange: this.changeInputColor4, className: 'allCheckBoxes8' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check4 ? 'turnoverCompany' : '', form: 'checkPersonal3', value: `< CHF 5 m` })),
                    React.createElement("p", { className: 'each_empl4' },
                        "CHF 5 m - CHF 10 m",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check5, onChange: this.changeInputColor5, className: 'allCheckBoxes8' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check5 ? 'turnoverCompany' : '', form: 'checkPersonal3', value: 'CHF 5 m - CHF 10 m' })),
                    React.createElement("p", { className: 'each_empl4 choosen_type_blue' },
                        "CHF 10 m - CHF 25 m",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check6, onChange: this.changeInputColor6, className: 'allCheckBoxes8' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check6 ? 'turnoverCompany' : '', form: 'checkPersonal3', value: 'CHF 10 m - CHF 25 m ' })),
                    React.createElement("p", { className: 'each_empl4' },
                        " ",
                        `> CHF 25 m`,
                        React.createElement("input", { type: 'checkbox', checked: this.state.check7, onChange: this.changeInputColor7, className: 'allCheckBoxes8' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check7 ? 'turnoverCompany' : '', form: 'checkPersonal3', value: `> CHF 25 m` }))),
                React.createElement("div", { className: 'wrap_transfer3' },
                    React.createElement("p", { className: 'corr_text4' },
                        "As an authorized signatory of legal entity, I declare that ",
                        React.createElement("span", { className: 'width_font' }, "funds that will be transferred to PI Digital are: (i) of legal origin"),
                        " and therefore not derived from any illicit activity ",
                        React.createElement("span", { className: 'width_font' }, "and (ii) fully tax compliant"),
                        " according to the laws and regulations applicable in the country of incorporation/existence of the company."),
                    React.createElement("p", { className: 'wrap_main_checkbox2', id: 'tablet_cb2', ref: this.thirdBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor8, className: 'main_checkbox' }),
                        React.createElement("input", { type: 'hidden', name: 'asAnAuthor', ref: this.asAnAuthor, form: 'checkPersonal3', value: 'I do not declare' }))),
                React.createElement("p", { className: 'us_title', id: 'company_reg_txt' }, "Registered office address at the place of incorporation"),
                React.createElement("p", { className: 'title_salut' }, "Street, No."),
                React.createElement("p", { className: 'title_salut' }, "City/State"),
                React.createElement("input", { type: 'text', form: 'checkPersonal3', name: 'companyRegAddress', required: true, placeholder: 'Street, No.', id: 'alter4', className: 'alternative_inputs' }),
                React.createElement("input", { type: 'text', form: 'checkPersonal3', name: 'companyRegCity', required: true, placeholder: 'City/State', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut' }, "Mailbox"),
                React.createElement("p", { className: 'title_salut' }, "Country of residence"),
                React.createElement("input", { type: 'text', form: 'checkPersonal3', name: 'companyMailBox', required: true, placeholder: 'Mailbox', id: 'alter5', className: 'alternative_inputs' }),
                React.createElement("input", { type: 'text', form: 'checkPersonal3', name: 'countryOfCompany2', required: true, placeholder: 'Country of residence', className: 'alternative_inputs' }),
                React.createElement("p", { className: 'title_salut', id: 'company_postal' }, "Postal code"),
                React.createElement("input", { type: 'text', form: 'checkPersonal3', name: 'postalCompanyCode', required: true, placeholder: 'Postal code', className: 'alternative_inputs' }),
                React.createElement("div", { className: 'wrap_office_address' },
                    React.createElement("p", { className: 'us_title' }, "Correspondence address"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor9, className: 'main_checkbox' }),
                        React.createElement("input", { type: 'hidden', name: 'sameCorrespondenceCompany', ref: this.sameCorrespondenceCompany, form: 'checkPersonal3', value: 'Not the same address' })),
                    React.createElement("p", { className: 'corr_text' }, "Same as office address")),
                React.createElement("p", { className: 'us_title pi_title', id: 'company_fiat_txt' }, "Fiat accounts"),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Reference currency"),
                React.createElement("div", { className: 'wrap_title_yours' },
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.firstTitle },
                        "CHF",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check8, onChange: this.changeOneTitle, className: 'allCheckBoxes7' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check8 ? 'fiatCompanyCurrency' : '', form: 'checkPersonal3', value: 'CHF' })),
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.secondTitle },
                        "EUR",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check9, onChange: this.changeTwoTitle, className: 'allCheckBoxes7' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check9 ? 'fiatCompanyCurrency' : '', form: 'checkPersonal3', value: 'EUR' })),
                    React.createElement("p", { className: 'each_title_yours_currency choosen_type_blue', ref: this.thirdTitle },
                        "USD",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check10, onChange: this.changeThreeTitle, className: 'allCheckBoxes7' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check10 ? 'fiatCompanyCurrency' : '', form: 'checkPersonal3', value: 'USD' })),
                    React.createElement("p", { className: 'each_title_yours_currency', ref: this.fourthTitle },
                        "SGD",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check11, onChange: this.changeFourthTitle, className: 'allCheckBoxes7' }),
                        React.createElement("input", { type: 'hidden', name: this.state.check11 ? 'fiatCompanyCurrency' : '', form: 'checkPersonal3', value: 'SGD' }))),
                React.createElement("p", { className: 'title_salut title_fiat' }, "Amount of first transfer to account at PI Digital in CHF"),
                React.createElement("input", { type: 'text', name: 'ammountOfCompany', form: 'checkPersonal3', required: true, className: 'com_input', id: 'alter6', placeholder: 'Ammount' }),
                React.createElement("p", { className: 'title_salut title_fiat' }, "Bank and country of origin of the assets to be transferred to PI Digital"),
                React.createElement("input", { type: 'text', name: 'bankOfCompany', form: 'checkPersonal3', required: true, placeholder: 'Bank', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("div", { className: 'wrap_transfer', id: 'alter7' },
                    React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue2 },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor21, className: 'main_checkbox' }),
                        React.createElement("input", { type: 'hidden', name: 'noTransfer3', ref: this.noTransfer3, form: 'checkPersonal3', value: 'Transfer' }))),
                React.createElement("p", { className: 'us_title pi_title' }, "PI Digital wallets"),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Indicative initial BTC transfer to PI Digital wallet"),
                React.createElement("input", { type: 'text', name: 'btcCompany1', form: 'checkPersonal3', required: true, placeholder: 'Indicative initial BTC transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "BTC wallet address used for the transfer"),
                React.createElement("input", { type: 'text', name: 'btcCompany2', form: 'checkPersonal3', required: true, placeholder: 'BTC wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "Indicative initial ETH transfer to PI Digital wallet"),
                React.createElement("input", { type: 'text', name: 'ethCompany1', form: 'checkPersonal3', required: true, placeholder: 'Indicative initial ETH transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("p", { className: 'title_salut ref_curr_title' }, "ETH wallet address used for the transfer"),
                React.createElement("input", { type: 'text', name: 'ethCompany2', form: 'checkPersonal3', required: true, placeholder: 'ETH wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                React.createElement("div", { className: 'wrap_transfer', id: 'alter8' },
                    React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                    React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.secondBlue },
                        React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor22, className: 'main_checkbox' }),
                        React.createElement("input", { type: 'hidden', name: 'noTransfer4', ref: this.noTransfer4, form: 'checkPersonal3', value: 'Transfer' }))),
                React.createElement("p", { className: 'us_title pi_title' }, "Declarations / Disclaimers"),
                React.createElement("div", { className: 'wrap_company_disclaimer' },
                    React.createElement("p", { className: 'case2 case2_id margin0' }, "PI Digital would like to send you updates and news regarding its services and PI Digital itself by email. By signing up, you agree to PI Digital using your personal data in accordance with our Privacy Policy. You can unsubscribe at any time by clicking on the \u00ABUnsubscribe\u00BB link at the bottom of your email. For further information please see our Privacy Policy."),
                    React.createElement("div", { className: 'wrap_white_agree_block', id: 'alter9' },
                        React.createElement("div", { className: 'white_agree_block' },
                            React.createElement("p", { className: 'each_agree_block blue_each_white_per' },
                                React.createElement("input", { type: 'checkbox', checked: this.state.check12, onChange: this.changeWhite1, className: 'allCheckBoxes8' }),
                                "I agree to receive updates and news from PI Digital via email",
                                React.createElement("input", { type: 'hidden', name: this.state.check12 ? 'agreeRecieveCompany' : '', form: 'checkPersonal3', value: 'I agree to receive updates and news from PI Digital via email' })),
                            React.createElement("p", { className: 'each_agree_block' },
                                React.createElement("input", { type: 'checkbox', checked: this.state.check13, onChange: this.changeWhite2, className: 'allCheckBoxes8' }),
                                "I do not agree to receive updates and news from PI Digital via email",
                                React.createElement("input", { type: 'hidden', name: this.state.check13 ? 'agreeRecieveCompany' : '', form: 'checkPersonal3', value: 'I do not agree to receive updates and news from PI Digital via email' })))),
                    React.createElement("div", { className: 'wrap_case2_id' },
                        React.createElement("p", { className: 'case2 case2_id' }, "Through the completion of this questionnaire no contract or legal binding relationship between you and PI Digital will be concluded. Furthermore, the completion of the questionnaire is no contract request and is no guarantee that a contractual relationship between you and PI Digital will ever be concluded."),
                        React.createElement("p", { className: 'case2 case2_id' }, "Any dispute, controversy or claim arising out of or relating to the completion, interpretation, performance or invalidity of this questionnaire shall be decided by the competent courts in the Canton of Zug, Switzerland."),
                        React.createElement("p", { className: 'case2 case2_id' }, "This questionnaire shall be governed by and construed in accordance with the laws of Switzerland, without giving effect to any choice or conflict of law provision or rule."),
                        React.createElement("p", { className: 'case2 case2_id' }, "Please note that it is not possible to completely opt out of receiving email from PI Digital, as performing certain transactions would require email approval from the client. The above option only applies to receiving news and promotional updates via email."))),
                React.createElement("div", { className: 'wrap_next_buttons5' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: '/', className: 'back_button' }, "Back"),
                        React.createElement("button", { type: 'submit', form: 'checkPersonal3', className: 'next_button' }, "Next"))))));
    }
}
export default CompanyEmployers;
