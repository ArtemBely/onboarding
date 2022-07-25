import React, { Component } from 'react';
class Correspondence extends Component {
    constructor(props) {
        super(props);
        this.firstBlue = React.createRef();
        this.secondBlue = React.createRef();
        this.main_checkbox1 = React.createRef();
        this.main_checkbox2 = React.createRef();
        this.main_checkbox3 = React.createRef();
        this.main_checkbox4 = React.createRef();
        this.changeInputColor11 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox1) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox3) === null || _j === void 0 ? void 0 : _j.current).value = 'Same as domicile address' :
                ((_k = this.main_checkbox3) === null || _k === void 0 ? void 0 : _k.current).value = 'Another address';
        };
        this.changeInputColor22 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox2) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox4) === null || _j === void 0 ? void 0 : _j.current).value = 'I agree that my data will be processed' :
                ((_k = this.main_checkbox4) === null || _k === void 0 ? void 0 : _k.current).value = '';
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
        return (React.createElement("div", { className: 'wrap_correspondence' },
            React.createElement("div", { className: 'correspondence' },
                React.createElement("p", { className: 'us_title', id: 'corr_txt2' }, "Correspondence address"),
                React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue },
                    React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor11, ref: this.main_checkbox1, className: 'main_checkbox' }),
                    React.createElement("input", { type: 'hidden', name: 'corrAddressAsDom', ref: this.main_checkbox3, form: 'checkPersonal1', value: 'Another address' })),
                React.createElement("p", { className: 'corr_text' }, "Same as domicile address"),
                React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.secondBlue },
                    React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor22, ref: this.main_checkbox2, className: 'main_checkbox' }),
                    React.createElement("input", { type: 'hidden', name: 'dataProcessed', ref: this.main_checkbox4, form: 'checkPersonal1', required: true })),
                React.createElement("p", { className: 'corr_text' }, "I agree that my data will be processed"))));
    }
}
export default Correspondence;
