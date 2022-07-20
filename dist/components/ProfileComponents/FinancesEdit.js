import React, { Component } from 'react';
import Assets from '../Assets';
class FinancesEdit extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.thirdTitle = React.createRef();
        this.fourthTitle = React.createRef();
        this.firstBlue = React.createRef();
        this.secondBlue = React.createRef();
        this.thirdBlue = React.createRef();
        this.showHiddenEdit = () => {
            document.querySelectorAll('.hiddenEdit3').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit3').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange2').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit3')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.indicateChange2')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit3').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.add('extraMarginTop');
        };
        this.hideEmailEdit = () => {
            document.querySelectorAll('.hiddenEdit3')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.indicateChange2')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit3')[this.state.count1].classList.remove('extraMarginTop');
        };
        this.changeOneTitle = () => {
            var _a, _b;
            this.setState({ check1: true, check2: false, check3: false, check4: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTwoTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: true, check3: false, check4: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeThreeTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: false, check3: true, check4: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFourthTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: false, check3: false, check4: true });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fourthTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeInputColor21 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor22 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor23 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.thirdBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeWhite1 = () => {
            this.setState({ check5: true, check6: false });
            document.querySelectorAll('.each_agree_block')[0].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[1].classList.remove('blue_each_white_per');
        };
        this.changeWhite2 = () => {
            this.setState({ check5: false, check6: true });
            document.querySelectorAll('.each_agree_block')[1].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[0].classList.remove('blue_each_white_per');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            count1: 0,
            check1: false,
            check2: false,
            check3: true,
            check4: false,
            check5: true,
            check6: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_personalEdit' },
            React.createElement("div", { className: 'personalEdit' },
                React.createElement("p", { className: 'us_title personal_det_title', id: 'alter18' }, "Financial situation"),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Origin of assets"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 0 }), onMouseUp: this.showHiddenEdit }, "Self-employment, Investment earnings: cryptocurrencies, Sale of company, Pay-off/allowance, Lotteries, Investment earnings: financial products, Investment earnings: Initial coin offerings, Inheritance/gift, Real estate rental proceeds, Pension funds, Salaried income, Airdrops, Sale of real estate, Sale of valuables (art etc.), Other (specify)"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen extraMarginTop dispNone' },
                        React.createElement(Assets, { show: 'hide' }),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Yearly income (in CHF)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 1 }), onMouseUp: this.showHiddenEdit }, "100 000-1 000 000"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("div", { className: 'each_wrap_slider' },
                            React.createElement("p", { className: 'title_salut income' }, "Yearly income (in CHF)"),
                            React.createElement("div", { className: 'common_slider' }),
                            React.createElement("input", { type: 'text', className: 'number_qty' }),
                            React.createElement("input", { type: 'text', className: 'number_qty2 number_qty22' })),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Net wealth (in CHF)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 2 }), onMouseUp: this.showHiddenEdit }, "500 000-25 000 000"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("div", { className: 'each_wrap_slider' },
                            React.createElement("p", { className: 'title_salut income' }, "Net wealth (in CHF)"),
                            React.createElement("div", { className: 'common_slider' }),
                            React.createElement("input", { type: 'text', className: 'number_qty' }),
                            React.createElement("input", { type: 'text', className: 'number_qty2 number_qty22' })),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("p", { className: 'us_title personal_det_title', id: 'alter17' }, "Fiat accounts"),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Reference currency"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 3 }), onMouseUp: this.showHiddenEdit }, "USD"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("div", { className: 'wrap_title_yours' },
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.firstTitle },
                                "CHF ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check1, value: "CHF", onChange: this.changeOneTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.secondTitle },
                                "EUR ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check2, value: "EUR", onChange: this.changeTwoTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency choosen_type_blue', ref: this.thirdTitle },
                                "USD",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check3, value: "USD", onChange: this.changeThreeTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.fourthTitle },
                                "SGD",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check4, value: "SGD", onChange: this.changeFourthTitle, className: 'allCheckBoxes7' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'ammount_finance_title' }, "Amount of first transfer to account at PI Digital in CHF"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 4 }), onMouseUp: this.showHiddenEdit }, "Amount"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("input", { type: 'text', name: 'ammount', className: 'com_input', placeholder: 'Ammount' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'bank_finance_title' }, "Bank and country of origin of the assets to be transferred to PI Digital"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 5 }), onMouseUp: this.showHiddenEdit }, "Bank"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Bank', id: 'alter19', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 6 }), onMouseUp: this.showHiddenEdit }, "No"),
                    React.createElement("div", { className: 'hiddenEdit3 hiddenEditSpec33 dispNone' },
                        React.createElement("div", { className: 'wrap_transfer2', id: 'alter23' },
                            React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                            React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue },
                                React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor21, className: 'main_checkbox' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_change_requestBtn' },
                    React.createElement("button", { type: 'submit', className: 'change_requestBtn' }, "Submit a request for data change")),
                React.createElement("p", { className: 'us_title personal_det_title' }, "PI Digital wallets"),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'ind_edit_txt' }, "Indicative initial BTC transfer to PI Digital wallet"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 7 }), onMouseUp: this.showHiddenEdit }, "Indicative initial BTC transfer to PI Digital wallet"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Indicative initial BTC transfer to PI Digital wallet\u2028', id: '', className: 'alternative_inputs2 long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'ammount_finance_title' }, "BTC wallet address used for the transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 8 }), onMouseUp: this.showHiddenEdit }, "BTC wallet address used for the transfer"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'BTC wallet address used for the transfer', id: '', className: 'alternative_inputs2 long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'bank_finance_title' }, "Indicative initial ETH transfer to PI Digital wallet"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 9 }), onMouseUp: this.showHiddenEdit }, "Indicative initial ETH transfer to PI Digital wallet"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Indicative initial ETH transfer to PI Digital wallet\u2028', id: '', className: 'alternative_inputs2 long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', id: 'bank_finance_title' }, "ETH wallet address used for the transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 10 }), onMouseUp: this.showHiddenEdit }, "ETH wallet address used for the transfer"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'ETH wallet address used for the transfer\u2028\u2028\u2028', id: '', className: 'alternative_inputs2 long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange2', onMouseDown: () => this.setState({ count1: 11 }), onMouseUp: this.showHiddenEdit }, "No"),
                    React.createElement("div", { className: 'hiddenEdit3 dispNone', id: 'alter25' },
                        React.createElement("div", { className: 'wrap_transfer2', id: 'alter26' },
                            React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                            React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.secondBlue },
                                React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor22, className: 'main_checkbox' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_change_requestBtn' },
                    React.createElement("button", { type: 'submit', className: 'change_requestBtn' }, "Submit a request for data change")),
                React.createElement("p", { className: 'us_title personal_det_title alter20', id: 'alter24' }, "Declaration of beneficial ownership"),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone spec_declare' },
                    React.createElement("p", { className: 'each_edit_person indicateChange2', id: 'declare_txt', onMouseDown: () => this.setState({ count1: 12 }), onMouseUp: this.showHiddenEdit }, "I declare that I am the beneficial owner of all the fiat as well as digital assets involved in the business relationship"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("div", { className: 'wrap_transfer4 alter21' },
                            React.createElement("p", { className: 'corr_text2' }, "I declare that I am the beneficial owner of all the fiat as well as digital assets involved in the business relationship."),
                            React.createElement("p", { className: 'wrap_main_checkbox2 alter21', ref: this.thirdBlue },
                                React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor23, className: 'main_checkbox' }))),
                        React.createElement("div", { className: 'wrap_action_buttons22_declare' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("p", { className: 'us_title personal_det_title alter20' }, "Declarations / Disclaimers"),
                React.createElement("div", { className: 'each_personalEdit3 whiteFone last_wrap_setts spec_declare', id: 'alter22' },
                    React.createElement("p", { className: 'each_edit_person declare_txt2' }, "Declarations / Disclaimers"),
                    React.createElement("p", { className: 'each_edit_person declare_txt2 indicateChange2', onMouseDown: () => this.setState({ count1: 13 }), onMouseUp: this.showHiddenEdit }, "I agree to receive updates and news from PI Digital via email"),
                    React.createElement("div", { className: 'hiddenEdit3 fullScreen dispNone' },
                        React.createElement("div", { className: 'wrap_white_agree_block' },
                            React.createElement("div", { className: 'white_agree_block' },
                                React.createElement("p", { className: 'each_agree_block blue_each_white_per' },
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check5, onChange: this.changeWhite1, className: 'allCheckBoxes8' }),
                                    "I agree to receive updates and news from PI Digital via email"),
                                React.createElement("p", { className: 'each_agree_block' },
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check6, onChange: this.changeWhite2, className: 'allCheckBoxes8' }),
                                    "I do not agree to receive updates and news from PI Digital via email"))),
                        React.createElement("div", { className: 'wrap_case3_id' },
                            React.createElement("p", { className: 'case2 case2_id' }, "Through the completion of this questionnaire no contract or legal binding relationship between you and PI Digital will be concluded. Furthermore, the completion of the questionnaire is no contract request and is no guarantee that a contractual relationship between you and PI Digital will ever be concluded."),
                            React.createElement("p", { className: 'case2 case2_id' }, "Any dispute, controversy or claim arising out of or relating to the completion, interpretation, performance or invalidity of this questionnaire shall be decided by the competent courts in the Canton of Zug, Switzerland."),
                            React.createElement("p", { className: 'case2 case2_id' }, "This questionnaire shall be governed by and construed in accordance with the laws of Switzerland, without giving effect to any choice or conflict of law provision or rule."),
                            React.createElement("p", { className: 'case2 case2_id' }, "Please note that it is not possible to completely opt out of receiving email from PI Digital, as performing certain transactions would require email approval from the client. The above option only applies to receiving news and promotional updates via email.")),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))))));
    }
}
export default FinancesEdit;
