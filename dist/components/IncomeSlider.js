import React, { Component } from 'react';
class IncomeSlider extends Component {
    constructor(state) {
        super(state);
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_slider2' },
            React.createElement("div", { className: 'slider' },
                React.createElement("div", { className: 'each_wrap_slider' },
                    React.createElement("p", { className: 'title_salut income' }, "Yearly income (in CHF)"),
                    React.createElement("div", { className: 'common_slider' }),
                    React.createElement("input", { type: 'text', form: 'checkFinancial', required: true, onChange: (e) => { document.getElementById('yearlyIncome1Hid').value = e.target.value; }, className: 'number_qty' }),
                    React.createElement("input", { type: 'text', form: 'checkFinancial', required: true, onChange: (e) => { document.getElementById('yearlyIncome2Hid').value = e.target.value; }, className: 'number_qty2' })),
                React.createElement("div", { className: 'each_wrap_slider' },
                    React.createElement("p", { className: 'title_salut income' }, "Net wealth (in CHF)"),
                    React.createElement("div", { className: 'common_slider' }),
                    React.createElement("input", { type: 'text', form: 'checkFinancial', required: true, onChange: (e) => { document.getElementById('netWealth1Hid').value = e.target.value; }, className: 'number_qty' }),
                    React.createElement("input", { type: 'text', form: 'checkFinancial', required: true, onChange: (e) => { document.getElementById('netWealth2Hid').value = e.target.value; }, className: 'number_qty2' })))));
    }
}
export default IncomeSlider;
