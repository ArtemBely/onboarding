import React, { Component } from 'react';
class Assets extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstAsset0 = React.createRef();
        this.firstAsset = React.createRef();
        this.secondAsset0 = React.createRef();
        this.secondAsset = React.createRef();
        this.thirdAsset = React.createRef();
        this.asset4 = React.createRef();
        this.asset5 = React.createRef();
        this.asset6 = React.createRef();
        this.asset7 = React.createRef();
        this.asset8 = React.createRef();
        this.asset9 = React.createRef();
        this.asset10 = React.createRef();
        this.asset11 = React.createRef();
        this.asset12 = React.createRef();
        this.asset13 = React.createRef();
        this.asset14 = React.createRef();
        this.asset15 = React.createRef();
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_assets' },
            React.createElement("div", { className: 'assets' },
                React.createElement("p", { className: 'us_title', style: { display: this.props.show && this.props.show == 'hide' ? "none" : "block" }, id: 'orig_asset_title' }, "Origin of assets"),
                React.createElement("div", { className: 'each_asset' },
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', ref: this.firstAsset0, className: 'main_checkbox', onChange: () => {
                                var _a, _b, _c, _d;
                                document.querySelectorAll('.wrap_main_checkbox3')[0].classList.toggle('blueCheckBox');
                                ((_b = (_a = this.firstAsset0) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.checked) ?
                                    ((_c = this.firstAsset) === null || _c === void 0 ? void 0 : _c.current).value = 'Self-employment' :
                                    ((_d = this.firstAsset) === null || _d === void 0 ? void 0 : _d.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.firstAsset, name: 'selfEmpl' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Self-employment"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', ref: this.secondAsset0, className: 'main_checkbox', onChange: () => {
                                var _a, _b, _c, _d;
                                document.querySelectorAll('.wrap_main_checkbox3')[1].classList.toggle('blueCheckBox');
                                ((_b = (_a = this.secondAsset0) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.checked) ?
                                    ((_c = this.secondAsset) === null || _c === void 0 ? void 0 : _c.current).value = 'Investment earnings: cryptocurrencies' :
                                    ((_d = this.secondAsset) === null || _d === void 0 ? void 0 : _d.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.secondAsset, name: 'investEarn' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: cryptocurrencies"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[2].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.thirdAsset) === null || _a === void 0 ? void 0 : _a.current).value = 'Sale of company' :
                                    ((_b = this.thirdAsset) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.thirdAsset, name: 'saleOfComp' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of company"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[3].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset4) === null || _a === void 0 ? void 0 : _a.current).value = 'Pay-off/allowance' :
                                    ((_b = this.asset4) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset4, name: 'payOff' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Pay-off/allowance"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[4].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset5) === null || _a === void 0 ? void 0 : _a.current).value = 'Lotteries' :
                                    ((_b = this.asset5) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset5, name: 'lotte' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Lotteries")),
                React.createElement("div", { className: 'each_asset' },
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[5].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset6) === null || _a === void 0 ? void 0 : _a.current).value = 'Investment earnings: financial products' :
                                    ((_b = this.asset6) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset6, name: 'finProd' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: financial products"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[6].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset7) === null || _a === void 0 ? void 0 : _a.current).value = 'Investment earnings: Initial coin offerings' :
                                    ((_b = this.asset7) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset7, name: 'initOffer' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: Initial coin offerings"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[7].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset8) === null || _a === void 0 ? void 0 : _a.current).value = 'Inheritance/gift' :
                                    ((_b = this.asset8) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset8, name: 'gift' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Inheritance/gift"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[8].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset9) === null || _a === void 0 ? void 0 : _a.current).value = 'Real estate rental proceeds' :
                                    ((_b = this.asset9) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset9, name: 'rentalProceeds' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Real estate rental proceeds"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[9].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset10) === null || _a === void 0 ? void 0 : _a.current).value = 'Pension funds' :
                                    ((_b = this.asset10) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset10, name: 'pensionFunds' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Pension funds")),
                React.createElement("div", { className: 'each_asset' },
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[10].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset11) === null || _a === void 0 ? void 0 : _a.current).value = 'Salaried income' :
                                    ((_b = this.asset11) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset11, name: 'salaryIncome' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Salaried income"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[11].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset12) === null || _a === void 0 ? void 0 : _a.current).value = 'Airdrops' :
                                    ((_b = this.asset12) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset12, name: 'airdrops' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Airdrops"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[12].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset13) === null || _a === void 0 ? void 0 : _a.current).value = 'Sale of real estate' :
                                    ((_b = this.asset13) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset13, name: 'saleOfEstate' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of real estate"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[13].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset14) === null || _a === void 0 ? void 0 : _a.current).value = 'Sale of valuables (art etc.)' :
                                    ((_b = this.asset14) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset14, name: 'saleOfValuables' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of valuables (art etc.)"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                var _a, _b;
                                document.querySelectorAll('.wrap_main_checkbox3')[14].classList.toggle('blueCheckBox');
                                e.target.checked ?
                                    ((_a = this.asset15) === null || _a === void 0 ? void 0 : _a.current).value = 'Other (specify)' :
                                    ((_b = this.asset15) === null || _b === void 0 ? void 0 : _b.current).value = '';
                            } }),
                        React.createElement("input", { type: 'hidden', form: 'checkPersonal2', ref: this.asset15, name: 'saleOfOther' })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Other (specify)")))));
    }
}
export default Assets;
