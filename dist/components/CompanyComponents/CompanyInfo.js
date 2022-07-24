import React, { Component } from 'react';
class CompanyInfo extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.dateInput = React.createRef();
        this.uploadExtract = React.createRef();
        this.changeOneTitle = () => {
            var _a, _b, _c, _d, _e, _f;
            this.setState({ check1: true, check2: false });
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.secondTitle) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('choosen_type_blue');
            (_f = (_e = this.uploadExtract) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
            document.getElementById('stockExchangeHid').value = "Yes";
        };
        this.changeTwoTitle = () => {
            var _a, _b, _c, _d, _e, _f;
            this.setState({ check1: false, check2: true });
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
            (_d = (_c = this.firstTitle) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('choosen_type_blue');
            (_f = (_e = this.uploadExtract) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('dispNone');
            document.getElementById('stockExchangeHid').value = "No";
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            check1: true,
            check2: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'wrap_companyInfo' },
            React.createElement("div", { className: 'companyInfo' },
                React.createElement("div", { className: 'first_part_company' },
                    React.createElement("div", { className: 'first_part_inside', id: 'company_txt' },
                        React.createElement("p", { className: 'title_yours' }, "Is the company publicly listed on a stock exchange?"),
                        React.createElement("div", { className: 'wrap_title_yours_company' },
                            React.createElement("p", { className: 'each_title_yours choosen_type_blue', ref: this.firstTitle },
                                "Yes ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeOneTitle, className: 'allCheckBoxes' })),
                            React.createElement("p", { className: 'each_title_yours', ref: this.secondTitle },
                                "No",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeTwoTitle, className: 'allCheckBoxes' })))),
                    React.createElement("div", { className: 'upload_extract dispNone', ref: this.uploadExtract },
                        React.createElement("p", { className: 'title_yours' }, "Please upload an extract from commercial register"),
                        React.createElement("div", { className: 'dashed_block' },
                            React.createElement("input", { type: 'file', onChange: (e) => document.getElementById('noExchangeFileHid').value = e.target.value, id: 'download_extract' }),
                            React.createElement("p", { className: 'title_yours' }, "Company register or similar"),
                            React.createElement("p", { className: 'extract_inside', id: 'drop_txt' }, "Drop file here or click to select a file to upload (please note, only PDF, PNG and JPG documents are accepted)"),
                            React.createElement("p", { className: 'extract_inside' }, "Evidence of incorporation \u2013 certified copy of certificate of incorporation and constitutive documents, if applicable extract of commercial register, trade license"),
                            React.createElement("p", { className: 'extract_inside' }, "Certified copy of articles of association or statutes"),
                            React.createElement("p", { className: 'extract_inside' }, "If corporate documents older than 12 months: Certificate of Incumbency and if applicable Certificate of Good Standing"))),
                    React.createElement("p", { className: 'title_salut' }, "Entity name"),
                    React.createElement("p", { className: 'title_salut' }, "Tax identification number"),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, onChange: (e) => document.getElementById('entityNameHid').value = e.target.value, placeholder: 'Entity name', className: 'alternative_inputs', id: 'alter1' }),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, onChange: (e) => document.getElementById('taxOfIDHid').value = e.target.value, placeholder: 'Tax identification number', className: 'alternative_inputs' }),
                    React.createElement("p", { className: 'title_salut' }, "Country of registration"),
                    React.createElement("p", { className: 'title_salut' }, "Entity type (beneficial ownership)"),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, onChange: (e) => document.getElementById('countryOfRegHid').value = e.target.value, placeholder: 'Germany', id: 'alter2', className: 'alternative_inputs' }),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, onChange: (e) => document.getElementById('entityTypeHid').value = e.target.value, placeholder: 'Foundation', className: 'alternative_inputs' }),
                    React.createElement("p", { className: 'title_salut' }, "Date of incorporation"),
                    React.createElement("p", { className: 'title_salut' }, "Website"),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, onChange: (e) => document.getElementById('dateOfIncorpHid').value = e.target.value, ref: this.dateInput, placeholder: 'DD/MM/YYYY', id: 'alter3', onFocus: () => {
                            if (this.dateInput.current != null) {
                                this.dateInput.current.type = "date";
                            }
                        }, className: 'com_input' }),
                    React.createElement("input", { type: 'text', form: 'companyForm', required: true, name: 'websiteOfComp', placeholder: 'www.', className: 'alternative_inputs' })))));
    }
}
export default CompanyInfo;
