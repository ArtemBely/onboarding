import React, { Component } from 'react';
class PERPerson extends Component {
    constructor(props) {
        super(props);
        this.firstWhite = React.createRef();
        this.secondWhite = React.createRef();
        this.extra_name_input = React.createRef();
        this.changeFirstWhite = () => {
            var _a, _b, _c, _d, _e, _f;
            (_b = (_a = this.firstWhite) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('blue_each_white_per');
            (_d = (_c = this.secondWhite) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('blue_each_white_per');
            document.querySelectorAll('.green_text').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.extra_name').forEach(item => (item.classList.remove('dispNone')));
            (_f = (_e = this.extra_name_input) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('dispNone');
        };
        this.changeSecondWhite = () => {
            var _a, _b, _c, _d, _e, _f;
            (_b = (_a = this.secondWhite) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('blue_each_white_per');
            (_d = (_c = this.firstWhite) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('blue_each_white_per');
            document.querySelectorAll('.green_text').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.extra_name').forEach(item => (item.classList.add('dispNone')));
            (_f = (_e = this.extra_name_input) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_PerPerson' },
            React.createElement("div", { className: 'perPerson' },
                React.createElement("p", { className: 'us_title' }, "PEP person"),
                React.createElement("div", { className: 'wrap_each_per' },
                    React.createElement("div", { className: 'each_white_per blue_each_white_per', ref: this.firstWhite, onClick: this.changeSecondWhite }, "I declare that I am not and I was never qualified as a politically exposed person (PEP), or a family member or close associate of a PEP"),
                    React.createElement("div", { className: 'each_white_per', ref: this.secondWhite, onClick: this.changeFirstWhite }, "I declare that I am a politically exposed person or a family member or close associate of a politically exposed person: indicate the executed function or the name/function of the affiliated person."),
                    React.createElement("p", { className: 'green_text', id: 'politicalPerson' }, "Politically exposed persons in terms of the Swiss Anti-Money Laundering Act are: individuals who are or have been entrusted with prominent public functions by a foreign country, such as heads of state or of government, senior politicians at national level, members of the board or individuals who have been entrusted with equivalent functions, (PEP in international organizations)."),
                    React.createElement("p", { className: 'green_text' }, "International sports associations are the International Olympic Committee and the non-governmental organizations it recognizes that regulate one or more official sports at global level."),
                    React.createElement("p", { className: 'green_text' }, "The family members and close associates of PEP are individuals who are closely connected to persons who qualify as PEP, either through their family or for social or professional reasons."),
                    React.createElement("p", { className: 'extra_name dispNone' }, "Name/Function"),
                    React.createElement("input", { type: 'text', placeholder: 'Name/Function', ref: this.extra_name_input, className: 'extra_name_input dispNone' })))));
    }
}
export default PERPerson;
