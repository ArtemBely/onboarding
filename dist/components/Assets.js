import React, { Component } from 'react';
class Assets extends Component {
    constructor(props, state) {
        super(props, state);
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
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[0].classList.toggle('blueCheckBox');
                                document.getElementById('selfEmplHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Self-employment"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[1].classList.toggle('blueCheckBox');
                                document.getElementById('investEarnHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: cryptocurrencies"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[2].classList.toggle('blueCheckBox');
                                document.getElementById('saleOfCompHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of company"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[3].classList.toggle('blueCheckBox');
                                document.getElementById('payOffHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Pay-off/allowance"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[4].classList.toggle('blueCheckBox');
                                document.getElementById('lotteHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Lotteries")),
                React.createElement("div", { className: 'each_asset' },
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[5].classList.toggle('blueCheckBox');
                                document.getElementById('finProdHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: financial products"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[6].classList.toggle('blueCheckBox');
                                document.getElementById('initOfferHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Investment earnings: Initial coin offerings"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[7].classList.toggle('blueCheckBox');
                                document.getElementById('giftHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Inheritance/gift"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[8].classList.toggle('blueCheckBox');
                                document.getElementById('rentalProceedsHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Real estate rental proceeds"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[9].classList.toggle('blueCheckBox');
                                document.getElementById('pensionFundsHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Pension funds")),
                React.createElement("div", { className: 'each_asset' },
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[10].classList.toggle('blueCheckBox');
                                document.getElementById('salaryIncomeHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Salaried income"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[11].classList.toggle('blueCheckBox');
                                document.getElementById('airdropsHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Airdrops"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[12].classList.toggle('blueCheckBox');
                                document.getElementById('saleOfEstateHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of real estate"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[13].classList.toggle('blueCheckBox');
                                document.getElementById('saleOfValuablesHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Sale of valuables (art etc.)"),
                    React.createElement("p", { className: 'wrap_main_checkbox3' },
                        React.createElement("input", { type: 'checkbox', className: 'main_checkbox', onChange: (e) => {
                                document.querySelectorAll('.wrap_main_checkbox3')[14].classList.toggle('blueCheckBox');
                                document.getElementById('saleOfOtherHid').value = e.target.checked.toString();
                            } })),
                    React.createElement("p", { className: 'corr_text corr2' }, "Other (specify)")))));
    }
}
export default Assets;
