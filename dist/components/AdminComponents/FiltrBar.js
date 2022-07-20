import React, { Component } from 'react';
//@ts-ignore
import circle from '../../../public/images/ci_settings-filled.svg';
//@ts-ignore
import filtrImg from '../../../public/images/ci_filter.svg';
//@ts-ignore
import searchLoop from '../../../public/images/bx_search.svg';
//@ts-ignore
import arrow1 from '../../../public/images/arrow1.svg';
class FiltrBar extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstBlue = React.createRef();
        this.secondBlue = React.createRef();
        this.thirdBlue = React.createRef();
        this.fourthBlue = React.createRef();
        this.fithBlue = React.createRef();
        this.sixthBlue = React.createRef();
        this.seventhBlue = React.createRef();
        this.eigthBlue = React.createRef();
        this.rotateArrow = (e) => {
            e.target.classList.toggle('rotateArrow');
        };
        this.showBlackFiltrWindow = () => {
            document.querySelectorAll('.wrap_black_filtr')[0].classList.add('dispFlex');
        };
        this.hideBlackFiltrWindow = () => {
            document.querySelectorAll('.wrap_black_filtr')[0].classList.remove('dispFlex');
        };
        this.showBlackParametrsWindow = () => {
            document.querySelectorAll('.wrap_black_filtr')[1].classList.add('dispFlex');
        };
        this.hideBlackParametrWindow = () => {
            document.querySelectorAll('.wrap_black_filtr')[1].classList.remove('dispFlex');
        };
        this.changeInputColor = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.firstBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor2 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor3 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.thirdBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor4 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.fourthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.fourthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.fourthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor5 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.fithBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.fithBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.fithBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor6 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.sixthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.sixthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.sixthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor7 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.seventhBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.seventhBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.seventhBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor8 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.eigthBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.eigthBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.eigthBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
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
        return (React.createElement("div", { className: 'wrap_filtrBar' },
            React.createElement("div", { className: 'wrap_black_filtr' },
                React.createElement("div", { className: 'window_filtr' },
                    React.createElement("p", { className: 'txt_filtr', id: 'txtFilter' }, "Filter"),
                    React.createElement("select", { id: 'selectFilter', className: 'com_input' },
                        React.createElement("option", { value: "E-mail", disabled: true, selected: true }, "E-mail include"),
                        React.createElement("option", { value: "hurr" }, "Reg. date include"),
                        React.createElement("option", { value: "hurr" }, "Entry date include"),
                        React.createElement("option", { value: "hurr" }, "Exit date include"),
                        React.createElement("option", { value: "hurr" }, "Status include"),
                        React.createElement("option", { value: "hurr" }, "Person name include"),
                        React.createElement("option", { value: "hurr" }, "Company name include"),
                        React.createElement("option", { value: "hurr" }, "Country include")),
                    React.createElement("input", { type: 'text', name: 'name', className: 'com_input', id: 'searchFilter2', placeholder: 'Search' }),
                    React.createElement("button", { type: 'submit', className: 'saveFilter' }, "Save"),
                    React.createElement("p", { className: 'resetFilter', onClick: this.hideBlackFiltrWindow }, "Reset"))),
            React.createElement("div", { className: 'wrap_black_filtr' },
                React.createElement("div", { className: 'window_parametrs' },
                    React.createElement("p", { className: 'txt_filtr', id: 'txtColumns' }, "Columns"),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.firstBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Reg. date")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.secondBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor2, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Person name")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.thirdBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor3, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Company name")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.fourthBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor4, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Country")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.fithBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor5, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "E-mail")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.sixthBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor6, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Verification status")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.seventhBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor7, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Approved date / Entry date")),
                    React.createElement("div", { className: 'wrap_inside_parametrs' },
                        React.createElement("p", { className: 'wrap_main_checkboxFilter', ref: this.eigthBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor8, className: 'main_checkbox' })),
                        React.createElement("p", { className: 'wrap_each_filter_inside' }, "Exit date")),
                    React.createElement("button", { type: 'submit', className: 'saveFilter', id: 'saveBtn1', onClick: this.hideBlackParametrWindow }, "Save"))),
            React.createElement("div", { className: 'filtrBar' },
                React.createElement("div", { className: 'filtrSlide' },
                    React.createElement("p", { className: 'us_title' }, "Clients"),
                    React.createElement("p", { className: 'wrap_each_filtr' },
                        React.createElement("img", { src: circle, onClick: this.showBlackParametrsWindow })),
                    React.createElement("p", { className: 'wrap_each_filtr', id: 'alter27' },
                        React.createElement("img", { src: filtrImg, onClick: this.showBlackFiltrWindow })),
                    React.createElement("p", { className: 'wrap_search_field' },
                        React.createElement("img", { src: searchLoop, id: 'searchLoop' }),
                        React.createElement("input", { type: 'text', placeholder: 'Search', className: 'search_field_input' }))),
                React.createElement("div", { className: 'filtrArrows' },
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Reg. date")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Approved date / Entry date")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Exit date")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "E-mail")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Verification status")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Person name")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Company name")),
                    React.createElement("p", { className: 'wrap_each_arrow' },
                        React.createElement("img", { src: arrow1, className: 'each_arrow', onClick: this.rotateArrow }),
                        React.createElement("span", { className: 'txt_filtr' }, "Country"))),
                React.createElement("div", null,
                    React.createElement("div", { className: 'filtrArrows each_filtrArrows' },
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.10.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.11.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "johnsmith@companyname.com"),
                        React.createElement("p", { className: 'each_filtered_person verif' }, "Verified"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022")),
                    React.createElement("div", { className: 'filtrArrows each_filtrArrows' },
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.10.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.11.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "johnsmith@companyname.com"),
                        React.createElement("p", { className: 'each_filtered_person verif' }, "Not Verified"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022")),
                    React.createElement("div", { className: 'filtrArrows each_filtrArrows' },
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.10.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "30.11.2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "johnsmith@companyname.com"),
                        React.createElement("p", { className: 'each_filtered_person verif' }, "Client update needs approval"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"),
                        React.createElement("p", { className: 'each_filtered_person' }, "31 Jun 2022"))))));
    }
}
export default FiltrBar;
