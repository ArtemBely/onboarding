import React, { Component } from 'react';
class AccountCompanyDetails extends Component {
    constructor(state) {
        super(state);
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.firstBlue2 = React.createRef();
        this.firstBlue3 = React.createRef();
        this.secondBlue = React.createRef();
        this.thirdBlue = React.createRef();
        this.uploadExtract = React.createRef();
        this.dateInput = React.createRef();
        this.thirdTitle0 = React.createRef();
        this.thirdTitle = React.createRef();
        this.fourthTitle0 = React.createRef();
        this.fourthTitle = React.createRef();
        this.first_ammount = React.createRef();
        this.showHiddenEdit = () => {
            var _a, _b, _c, _d;
            this.state.count1 == 18 ? (_b = (_a = this.first_ammount) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('for_ammount') :
                (_d = (_c = this.first_ammount) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('for_ammount');
            document.querySelectorAll('.hiddenEditSpec').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit4').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEditSpec')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.indicateChange')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit4').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.add('extraMarginTop');
        };
        this.hideEmailEdit = () => {
            var _a, _b;
            (_b = (_a = this.first_ammount) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('for_ammount');
            document.querySelectorAll('.hiddenEditSpec')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.indicateChange')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit4')[this.state.count1].classList.remove('extraMarginTop');
        };
        this.changeOneTitle = () => {
            var _a, _b, _c, _d, _e, _f;
            this.setState({ check1: true, check2: false });
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.secondTitle) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('choosen_type_blue');
            (_f = (_e = this.uploadExtract) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
        };
        this.changeTwoTitle = () => {
            var _a, _b, _c, _d, _e, _f;
            this.setState({ check1: false, check2: true });
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.firstTitle) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('choosen_type_blue');
            (_f = (_e = this.uploadExtract) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('dispNone');
        };
        this.changeInputColor1 = () => {
            this.setState({ check3: true, check4: false, check5: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor2 = () => {
            this.setState({ check3: false, check4: true, check5: false });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor3 = () => {
            this.setState({ check3: false, check4: false, check5: true });
            document.querySelectorAll('.each_empl31').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl31')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor4 = () => {
            this.setState({ check6: true, check7: false, check8: false, check9: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor5 = () => {
            this.setState({ check6: false, check7: true, check8: false, check9: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor6 = () => {
            this.setState({ check6: false, check7: false, check8: true, check9: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor7 = () => {
            this.setState({ check6: false, check7: false, check8: false, check9: true });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
        };
        this.changeInputColor8 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.thirdBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.thirdBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.thirdBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeInputColor222 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeThreeTitle = () => {
            var _a, _b;
            this.setState({ check8: true, check9: false, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle0) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFourthTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: true, check10: false, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fourthTitle0) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFithTitle = () => {
            var _a, _b;
            this.setState({ check8: false, check9: false, check10: true, check11: false });
            document.querySelectorAll('.each_title_yours_currency').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeSixthTitle = () => {
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
            ((_b = (_a = this.firstBlue3) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.firstBlue3) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.firstBlue3) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        this.changeWhite1 = () => {
            this.setState({ check14: true, check15: false });
            document.querySelectorAll('.each_agree_block')[0].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[1].classList.remove('blue_each_white_per');
        };
        this.changeWhite2 = () => {
            this.setState({ check14: false, check15: true });
            document.querySelectorAll('.each_agree_block')[1].classList.add('blue_each_white_per');
            document.querySelectorAll('.each_agree_block')[0].classList.remove('blue_each_white_per');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user,
            count1: 0,
            check1: false,
            check2: true,
            check3: true,
            check4: false,
            check5: false,
            check6: true,
            check7: false,
            check8: false,
            check9: false,
            check10: true,
            check11: false,
            check12: false,
            check13: false,
            check14: true,
            check15: false
        };
    }
    render() {
        return (React.createElement("p", { className: 'wrap_accCompDet' },
            React.createElement("div", { className: 'accCompDet' },
                React.createElement("p", { className: 'us_title' }, "Company details"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone', id: 'edit1' },
                    React.createElement("p", { className: 'each_edit_person' }, "Is the company publicly listed on a stock exchange?"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 0 }), onMouseUp: this.showHiddenEdit }, "No"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone', id: 'editSpec1' },
                        React.createElement("div", { className: 'wrap_title_yours_company', id: 'edit2' },
                            React.createElement("p", { className: 'each_title_yours choosen_type_blue', ref: this.firstTitle },
                                "Yes ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check1, value: "Yes", onChange: this.changeOneTitle, className: 'allCheckBoxes' })),
                            React.createElement("p", { className: 'each_title_yours', ref: this.secondTitle },
                                "No",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check2, value: "No", onChange: this.changeTwoTitle, className: 'allCheckBoxes' }))),
                        React.createElement("div", { className: 'upload_extract dispNone', id: 'upload_extract1', ref: this.uploadExtract },
                            React.createElement("p", { className: 'title_yours_extra' }, "Please upload an extract from commercial register"),
                            React.createElement("div", { className: 'dashed_block2' },
                                React.createElement("input", { type: 'file', id: 'download_extract' }),
                                React.createElement("p", { className: 'title_yours' }, "Company register or similar"),
                                React.createElement("p", { className: 'extract_inside', id: 'drop_txt' }, "Drop file here or click to select a file to upload (please note, only PDF, PNG and JPG documents are accepted)"),
                                React.createElement("p", { className: 'extract_inside' }, "Evidence of incorporation \u2013 certified copy of certificate of incorporation and constitutive documents, if applicable extract of commercial register, trade license"),
                                React.createElement("p", { className: 'extract_inside' }, "Certified copy of articles of association or statutes"),
                                React.createElement("p", { className: 'extract_inside' }, "If corporate documents older than 12 months: Certificate of Incumbency and if applicable Certificate of Good Standing"))),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Entity name"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 1 }), onMouseUp: this.showHiddenEdit }, "Entity name"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Entity name', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Tax identification number"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 2 }), onMouseUp: this.showHiddenEdit }, "Tax identification number"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Tax identification number', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Country of registration"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 3 }), onMouseUp: this.showHiddenEdit }, "Country of registration"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Finland', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Entity type (beneficial ownership)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 4 }), onMouseUp: this.showHiddenEdit }, "Foundation"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Foundation', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Date of incorporation"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 5 }), onMouseUp: this.showHiddenEdit }, "DD/MM/YYYY"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', ref: this.dateInput, placeholder: 'DD/MM/YYYY', onFocus: () => {
                                if (this.dateInput.current != null) {
                                    this.dateInput.current.type = "date";
                                }
                            }, className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Entity type (beneficial ownership)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 6 }), onMouseUp: this.showHiddenEdit }, "Foundation"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'www.', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Employees of the company"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 7 }), onMouseUp: this.showHiddenEdit }, "25 - 100"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("div", { className: 'wrap_comp_status' },
                            React.createElement("p", { className: 'each_empl31 choosen_type_blue' },
                                "1 - 25 ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check3, onChange: this.changeInputColor1, value: '1 - 25', className: 'allCheckBoxes6' })),
                            React.createElement("p", { className: 'each_empl31' },
                                "25 - 100 ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check4, onChange: this.changeInputColor2, value: '25 - 100', className: 'allCheckBoxes6' })),
                            React.createElement("p", { className: 'each_empl31' },
                                " ",
                                `> 100`,
                                " ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check5, onChange: this.changeInputColor3, value: '> 100', className: 'allCheckBoxes6' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Line of business or industry (NOGA code)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 8 }), onMouseUp: this.showHiddenEdit }, "Code"),
                    React.createElement("div", { className: 'hiddenEditSpec fullScreen dispNone', id: 'hiddenEditSpec1' },
                        React.createElement("select", { id: 'selectCode2', className: 'com_input' },
                            React.createElement("option", { value: "", disabled: true, selected: true }, "Code"),
                            React.createElement("option", { value: "hurr" }, "Durr")),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Company turnover"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 9 }), onMouseUp: this.showHiddenEdit }, "CHF 10 m - CHF 25 m"),
                    React.createElement("div", { className: 'hiddenEditSpec fullScreen dispNone', id: 'hiddenEditSpec2' },
                        React.createElement("div", { className: 'wrap_turn_status' },
                            React.createElement("p", { className: 'each_empl4' },
                                `< CHF 5 m`,
                                React.createElement("input", { type: 'checkbox', checked: this.state.check6, onChange: this.changeInputColor4, value: '< CHF 5 m', className: 'allCheckBoxes8' })),
                            React.createElement("p", { className: 'each_empl4' },
                                "CHF 5 m - CHF 5 m ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check7, onChange: this.changeInputColor5, value: 'CHF 5 m - CHF 5 m', className: 'allCheckBoxes8' })),
                            React.createElement("p", { className: 'each_empl4 choosen_type_blue' },
                                "CHF 10 m - CHF 25 m ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check8, onChange: this.changeInputColor6, value: 'CHF 10 m - CHF 25 m', className: 'allCheckBoxes8' })),
                            React.createElement("p", { className: 'each_empl4' },
                                " ",
                                `> CHF 25 m`,
                                " ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check9, onChange: this.changeInputColor7, value: '> CHF 25 m', className: 'allCheckBoxes8' }))),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone', id: 'spec_eachEdit1' },
                    React.createElement("p", { className: 'each_edit_person fullScreen', id: 'spec_an', onMouseDown: () => this.setState({ count1: 10 }), onMouseUp: this.showHiddenEdit }, "As an authorized signatory of legal entity, I declare that funds that will be transferred to PI Digital are: (i) of legal origin and therefore not derived from any illicit activity and (ii) fully tax compliant according to the laws and regulations applicable in the country of incorporation/existence of the company."),
                    React.createElement("p", { className: 'each_edit_person indicateChange', id: 'spec_an_below' }),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone', id: 'spec_eachEdit2' },
                        React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.thirdBlue, id: 'spec4' },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor8, className: 'main_checkbox' })),
                        React.createElement("div", { className: 'wrap_action_buttons2', id: 'spec3' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("p", { className: 'us_title reg_change_txt' }, "Registered office address at the place of incorporation"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Street, No."),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 11 }), onMouseUp: this.showHiddenEdit }, "Street, No."),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Street, No.', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "City/State"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 12 }), onMouseUp: this.showHiddenEdit }, "City/State"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'City/State', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Mailbox"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 13 }), onMouseUp: this.showHiddenEdit }, "Mailbox"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Mailbox', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Country"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 14 }), onMouseUp: this.showHiddenEdit }, "Country"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Country', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Postal code"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 15 }), onMouseUp: this.showHiddenEdit }, "Postal code"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Postal code', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("p", { className: 'us_title reg_change_txt' }, "Correspondence address"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Correspondence address"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 16 }), onMouseUp: this.showHiddenEdit }, "Same as domicile address"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("p", { className: 'corr_text' }, "Same as domicile address"),
                        React.createElement("p", { className: 'wrap_main_checkbox42', ref: this.secondBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor222, className: 'main_checkbox' })),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("p", { className: 'us_title reg_change_txt' }, "Fiat accounts"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Reference currency"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 17 }), onMouseUp: this.showHiddenEdit }, "USD"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("div", { className: 'wrap_title_yours' },
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.thirdTitle0 },
                                "CHF ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check10, value: "CHF", onChange: this.changeThreeTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.fourthTitle0 },
                                "EUR ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check11, value: "EUR", onChange: this.changeFourthTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency choosen_type_blue', ref: this.thirdTitle },
                                "USD",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check12, value: "USD", onChange: this.changeFithTitle, className: 'allCheckBoxes7' })),
                            React.createElement("p", { className: 'each_title_yours_currency', ref: this.fourthTitle },
                                "SGD",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check13, value: "SGD", onChange: this.changeSixthTitle, className: 'allCheckBoxes7' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person', ref: this.first_ammount }, "Amount of first transfer to account at PI Digital in CHF"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 18 }), onMouseUp: this.showHiddenEdit }, "Amount"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("input", { type: 'text', name: 'ammount', className: 'com_input', placeholder: 'Ammount' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Bank and country of origin of the assets to be transferred to PI Digital"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 19 }), onMouseUp: this.showHiddenEdit }, "Amount"),
                    React.createElement("div", { className: 'hiddenEditSpec longSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Bank', id: '', className: 'com_input long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2 longSpecBtns' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "No transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 20 }), onMouseUp: this.showHiddenEdit }, "No transfer"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("div", { className: 'wrap_transfer spec5Class' },
                            React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                            React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue2 },
                                React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor21, className: 'main_checkbox' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_change_requestBtn' },
                    React.createElement("button", { type: 'submit', className: 'change_requestBtn' }, "Submit a request for data change")),
                React.createElement("p", { className: 'us_title reg_change_txt' }, "PI Digital wallets"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Indicative initial BTC transfer to PI Digital wallet"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 21 }), onMouseUp: this.showHiddenEdit }, "Indicative initial BTC transfer to PI Digital wallet"),
                    React.createElement("div", { className: 'hiddenEditSpec longSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Indicative initial BTC transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2 longSpecBtns' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "BTC wallet address used for the transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 22 }), onMouseUp: this.showHiddenEdit }, "BTC wallet address used for the transfer"),
                    React.createElement("div", { className: 'hiddenEditSpec longSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'BTC wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2 longSpecBtns' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Indicative initial ETH transfer to PI Digital wallet"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 23 }), onMouseUp: this.showHiddenEdit }, "Indicative initial ETH transfer to PI Digital wallet"),
                    React.createElement("div", { className: 'hiddenEditSpec longSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Indicative initial ETH transfer to PI Digital wallet', id: '', className: 'alternative_inputs long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2 longSpecBtns' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "ETH wallet address used for the transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 24 }), onMouseUp: this.showHiddenEdit }, "ETH wallet address used for the transfer"),
                    React.createElement("div", { className: 'hiddenEditSpec longSpec dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'ETH wallet address used for the transfer', id: '', className: 'alternative_inputs long_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2 longSpecBtns' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "No transfer"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 25 }), onMouseUp: this.showHiddenEdit }, "No transfer"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone' },
                        React.createElement("div", { className: 'wrap_transfer spec5Class' },
                            React.createElement("p", { className: 'corr_text2' }, "No transfer"),
                            React.createElement("p", { className: 'wrap_main_checkbox2', ref: this.firstBlue3 },
                                React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor22, className: 'main_checkbox' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_change_requestBtn' },
                    React.createElement("button", { type: 'submit', className: 'change_requestBtn' }, "Submit a request for data change")),
                React.createElement("p", { className: 'us_title reg_change_txt' }, "Declarations / Disclaimers"),
                React.createElement("div", { className: 'each_personalEdit4 whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Declarations / Disclaimers"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 26 }), onMouseUp: this.showHiddenEdit }, "I agree to receive updates and news from PI Digital via email"),
                    React.createElement("div", { className: 'hiddenEditSpec dispNone', id: 'hiddenEditSpec4' },
                        React.createElement("p", { className: 'case2 case2_id' }, "PI Digital would like to send you updates and news regarding its services and PI Digital itself by email. By signing up, you agree to PI Digital using your personal data in accordance with our Privacy Policy. You can unsubscribe at any time by clicking on the \u00ABUnsubscribe\u00BB link at the bottom of your email. For further information please see our Privacy Policy."),
                        React.createElement("div", { className: 'wrap_white_agree_block' },
                            React.createElement("div", { className: 'white_agree_block' },
                                React.createElement("p", { className: 'each_agree_block blue_each_white_per' },
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check14, onChange: this.changeWhite1, className: 'allCheckBoxes8' }),
                                    "I agree to receive updates and news from PI Digital via email"),
                                React.createElement("p", { className: 'each_agree_block' },
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check15, onChange: this.changeWhite2, className: 'allCheckBoxes8' }),
                                    "I do not agree to receive updates and news from PI Digital via email"))),
                        React.createElement("div", { className: 'wrap_case2_id' },
                            React.createElement("p", { className: 'case2 case2_id' }, "Through the completion of this questionnaire no contract or legal binding relationship between you and PI Digital will be concluded. Furthermore, the completion of the questionnaire is no contract request and is no guarantee that a contractual relationship between you and PI Digital will ever be concluded."),
                            React.createElement("p", { className: 'case2 case2_id' }, "Any dispute, controversy or claim arising out of or relating to the completion, interpretation, performance or invalidity of this questionnaire shall be decided by the competent courts in the Canton of Zug, Switzerland."),
                            React.createElement("p", { className: 'case2 case2_id' }, "This questionnaire shall be governed by and construed in accordance with the laws of Switzerland, without giving effect to any choice or conflict of law provision or rule."),
                            React.createElement("p", { className: 'case2 case2_id' }, "Please note that it is not possible to completely opt out of receiving email from PI Digital, as performing certain transactions would require email approval from the client. The above option only applies to receiving news and promotional updates via email.")),
                        React.createElement("div", { className: 'wrap_action_buttons2', id: 'specButtons1' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))))));
    }
}
export default AccountCompanyDetails;
