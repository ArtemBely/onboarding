import React, { Component } from 'react';
class USPerson extends Component {
    constructor(props, state) {
        super(props, state);
        this.us1 = React.createRef();
        this.us2 = React.createRef();
        this.us3 = React.createRef();
        this.firstBlue = React.createRef();
        this.secondBlue = React.createRef();
        this.thirdBlue = React.createRef();
        this.fourthBlue = React.createRef();
        this.firstCase = React.createRef();
        this.secondCase = React.createRef();
        this.thirdCase = React.createRef();
        this.main_checkbox = React.createRef();
        this.main_checkbox2 = React.createRef();
        this.main_checkbox3 = React.createRef();
        this.main_checkbox4 = React.createRef();
        this.main_checkbox5 = React.createRef();
        this.main_checkbox6 = React.createRef();
        this.main_checkbox7 = React.createRef();
        this.main_checkbox8 = React.createRef();
        this.changeTitle1 = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.setState({ check1: true, check2: false, check3: false });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us1) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.secondCase) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('dispNone');
            (_f = (_e = this.thirdCase) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
            (_h = (_g = this.firstCase) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.remove('dispNone');
            document.getElementById('usPersonHid').value = "No US person";
        };
        this.changeTitle2 = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.setState({ check1: false, check2: true, check3: false });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.firstCase) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('dispNone');
            (_f = (_e = this.thirdCase) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
            (_h = (_g = this.secondCase) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.remove('dispNone');
            document.getElementById('usPersonHid').value = "Former US person";
        };
        this.changeTitle3 = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.setState({ check1: false, check2: false, check3: true });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us3) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.firstCase) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('dispNone');
            (_f = (_e = this.secondCase) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
            (_h = (_g = this.thirdCase) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.classList.remove('dispNone');
            document.getElementById('usPersonHid').value = "US person";
        };
        this.changeInputColor1 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox7) === null || _j === void 0 ? void 0 : _j.current).value = `I declare that I was born in the U.S. (or U.S. territory) and am in possession of a Certificate of Loss of Nationality of the United States (CLN)` :
                ((_k = this.main_checkbox7) === null || _k === void 0 ? void 0 : _k.current).value = `I was not born in the U.S.`;
        };
        this.changeInputColor2 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox2) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox8) === null || _j === void 0 ? void 0 : _j.current).value = `I am a holder of either a returned or administratively or judicially revoked U.S. Green Card (irrespective expiry date)` :
                ((_k = this.main_checkbox8) === null || _k === void 0 ? void 0 : _k.current).value = `I am not a holder of either a returned or administratively or judicially revoked U.S. Green Card (irrespective expiry date)`;
        };
        this.changeInputColor3 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.thirdBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox3) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox5) === null || _j === void 0 ? void 0 : _j.current).value = `You are in possession of a U.S. Green Card (irrespective expiry date)` :
                ((_k = this.main_checkbox5) === null || _k === void 0 ? void 0 : _k.current).value = `You are not in possession of a U.S. Green Card (irrespective expiry date)`;
        };
        this.changeInputColor4 = (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            ((_b = (_a = this.fourthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.fourthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.fourthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
            ((_h = (_g = this.main_checkbox4) === null || _g === void 0 ? void 0 : _g.current) === null || _h === void 0 ? void 0 : _h.checked) ?
                ((_j = this.main_checkbox6) === null || _j === void 0 ? void 0 : _j.current).value = `You meet the Substantial Presence Test` :
                ((_k = this.main_checkbox6) === null || _k === void 0 ? void 0 : _k.current).value = `You do not meet the Substantial Presence Test`;
        };
        this.state = {
            check1: true,
            check2: false,
            check3: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_us' },
            React.createElement("div", { className: 'us' },
                React.createElement("p", { className: 'us_title' }, "US person"),
                React.createElement("p", { className: 'title_salut' }, "I declare that I am"),
                React.createElement("div", { className: 'choose_us' },
                    React.createElement("p", { className: 'each_us choosen_type_blue', ref: this.us1 },
                        "No US person ",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeTitle1, className: 'allCheckBoxes3' })),
                    React.createElement("input", { type: 'hidden', name: this.state.check1 ? 'usPerson' : '', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', value: 'No US person' }),
                    React.createElement("p", { className: 'each_us', ref: this.us2 },
                        "Former US person",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeTitle2, className: 'allCheckBoxes3' })),
                    React.createElement("input", { type: 'hidden', name: this.state.check2 ? 'usPerson' : '', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', value: 'Former US person' }),
                    React.createElement("p", { className: 'each_us', ref: this.us3 },
                        "US person",
                        React.createElement("input", { type: 'checkbox', checked: this.state.check3, onChange: this.changeTitle3, className: 'allCheckBoxes3' })),
                    React.createElement("input", { type: 'hidden', name: this.state.check3 ? 'usPerson' : '', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', value: 'US person' })),
                React.createElement("div", { className: 'case1', id: 'case11', ref: this.firstCase }, "I declare that I am no US citizen (regardless if I have any other citizenships), I do not reside in the US and have no \u00ABresident alien\u00BB status (e.g. due to long or frequent stays in the US during the last three years or due to the possession of a green card, no matter its validity), I have not been born in the USA and have no US tax obligations due to any other reasons. Further, I confirm that neither I nor any other person indicated as a beneficial owner of the account qualify as a US person."),
                React.createElement("div", { className: 'wrap_usPerson dispNone', ref: this.secondCase },
                    React.createElement("p", { className: 'each_under_us' },
                        React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue },
                            React.createElement("input", { type: 'checkbox', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', onChange: this.changeInputColor1, ref: this.main_checkbox, className: 'main_checkbox' }),
                            React.createElement("input", { type: 'hidden', name: 'bornInUs', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', ref: this.main_checkbox7, value: 'I was not born in the U.S.' })),
                        React.createElement("p", { className: 'us_born' }, "I declare that I was born in the U.S. (or U.S. territory) and am in possession of a Certificate of Loss of Nationality of the United States (CLN)")),
                    React.createElement("p", { className: 'each_under_us' },
                        React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.secondBlue },
                            React.createElement("input", { type: 'checkbox', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', onChange: this.changeInputColor2, ref: this.main_checkbox2, className: 'main_checkbox' })),
                        React.createElement("input", { type: 'hidden', name: 'greenCard', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', ref: this.main_checkbox8, value: 'I am not a holder of either a returned or administratively or judicially revoked U.S. Green Card (irrespective expiry date)' }),
                        React.createElement("p", null, "I am a holder of either a returned or administratively or judicially revoked U.S. Green Card (irrespective expiry date)"))),
                React.createElement("div", { className: 'wrap_usPerson2 dispNone', ref: this.thirdCase },
                    React.createElement("p", { className: 'case1 digital1' }, "PI Digital does not onboard US persons."),
                    React.createElement("p", { className: 'case1 digital1', id: 'digital1' }, "The onboarding process cannot be concluded if the prospect is a US person."),
                    React.createElement("p", { className: 'each_under_us' },
                        React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.thirdBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor3, ref: this.main_checkbox3, className: 'main_checkbox' })),
                        React.createElement("input", { type: 'hidden', name: 'possessionGreenCard', ref: this.main_checkbox5, form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', value: 'You are not in possession of a U.S. Green Card\u2028(irrespective expiry date)' }),
                        React.createElement("p", { className: 'greenCard' }, "You are in possession of a U.S. Green Card (irrespective expiry date)")),
                    React.createElement("p", { className: 'each_under_us' },
                        React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.fourthBlue },
                            React.createElement("input", { type: 'checkbox', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', onChange: this.changeInputColor4, ref: this.main_checkbox4, className: 'main_checkbox' })),
                        React.createElement("input", { type: 'hidden', name: 'subPresTest', form: typeof window != "undefined" && window.location.pathname == '/personal_details' ? 'checkPersonal1' : 'checkPersonal4', ref: this.main_checkbox6, value: 'You do not meet the Substantial Presence Test' }),
                        React.createElement("p", { className: 'greenCard' }, "You meet the Substantial Presence Test")),
                    React.createElement("p", { className: 'case1 digital2' }, "To meet the Substantial Presence Test, you must be physically present in the United States (U.S.) on at least: 31 days during the current year, and 183 days during the 3-year period that includes the current year and the 2 years immediately before that. Find more details under: https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test")))));
    }
}
export default USPerson;
