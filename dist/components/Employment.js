var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class Employment extends Component {
    constructor(props, state) {
        super(props, state);
        this.dateInput = React.createRef();
        this.prof1 = React.createRef();
        this.prof2 = React.createRef();
        this.changeInputColor = () => {
            this.setState({ check1: true, check2: false, check3: false, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[0].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
            document.getElementById('employmentStatusHid').value = "Employed";
        };
        this.changeInputColor2 = () => {
            this.setState({ check1: false, check2: true, check3: false, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[1].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.remove('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
            document.getElementById('employmentStatusHid').value = "Self-Employed";
        };
        this.changeInputColor3 = () => {
            this.setState({ check1: false, check2: false, check3: true, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[2].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Last profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Last function/position';
            this.setState({ profession: "Last profession" });
            document.getElementById('employmentStatusHid').value = "Retired (Pensioner)";
        };
        this.changeInputColor4 = () => {
            this.setState({ check1: false, check2: false, check3: false, check4: true, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[3].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Last profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Last function/position';
            this.setState({ profession: "Last profession" });
            document.getElementById('employmentStatusHid').value = "Unemployed";
        };
        this.changeInputColor5 = () => {
            this.setState({ check1: false, check2: false, check3: false, check4: false, check5: true, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.remove('dispNone');
            document.querySelectorAll('.main_info')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[4].classList.add('choosen_type_blue');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.add('switch_buttons_margin2');
            document.getElementById('employmentStatusHid').value = "Student";
        };
        this.changeInputColor6 = () => {
            this.setState({ check1: false, check2: false, check3: false, check4: false, check5: false, check6: true });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[5].classList.add('choosen_type_blue');
            document.querySelectorAll('.main_info')[0].classList.add('dispNone');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.remove('switch_buttons_margin2');
            document.querySelectorAll('.wrap_next_buttons2')[0].classList.add('switch_buttons_margin');
            document.getElementById('employmentStatusHid').value = "Not Working";
        };
        this.changeInputColor7 = () => {
            this.setState({ check7: true, check8: false, check9: false, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[0].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Staff";
        };
        this.changeInputColor8 = () => {
            this.setState({ check7: false, check8: true, check9: false, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[1].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Low Management";
        };
        this.changeInputColor9 = () => {
            this.setState({ check7: false, check8: false, check9: true, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[2].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Middle Management";
        };
        this.changeInputColor10 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: true, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[3].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Upper Management";
        };
        this.changeInputColor11 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: false, check11: true, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[4].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Board";
        };
        this.changeInputColor12 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: false, check11: false, check12: true });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[5].classList.add('choosen_type_blue');
            document.getElementById('functionEmplHid').value = "Executive Board";
        };
        this.changeInputColor13 = () => {
            this.setState({ check13: true, check14: false, check15: false });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[0].classList.add('choosen_type_blue');
            document.getElementById('companyEmplHid').value = "1 - 25";
        };
        this.changeInputColor14 = () => {
            this.setState({ check13: false, check14: true, check15: false });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[1].classList.add('choosen_type_blue');
            document.getElementById('companyEmplHid').value = "25 - 100";
        };
        this.changeInputColor15 = () => {
            this.setState({ check13: false, check14: false, check15: true });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[2].classList.add('choosen_type_blue');
            document.getElementById('companyEmplHid').value = "> 100";
        };
        this.changeInputColor16 = () => {
            this.setState({ check16: true, check17: false, check18: false, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
            document.getElementById('companyEmplTurnoverHid').value = "< CHF 5 m";
        };
        this.changeInputColor17 = () => {
            this.setState({ check16: false, check17: true, check18: false, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
            document.getElementById('companyEmplTurnoverHid').value = "CHF 5 m - CHF 10 m";
        };
        this.changeInputColor18 = () => {
            this.setState({ check16: false, check17: false, check18: true, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
            document.getElementById('companyEmplTurnoverHid').value = "CHF 10 m - CHF 25 m";
        };
        this.changeInputColor19 = () => {
            this.setState({ check16: false, check17: false, check18: false, check19: true });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
            document.getElementById('companyEmplTurnoverHid').value = "> CHF 25 m";
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            allCountries: [],
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            check7: true,
            check8: false,
            check9: false,
            check10: false,
            check11: false,
            check12: false,
            check13: false,
            check14: true,
            check15: false,
            check16: false,
            check17: false,
            check18: true,
            check19: false,
            profession: "Profession"
        };
    }
    componentDidMount() {
        const start = () => __awaiter(this, void 0, void 0, function* () {
            yield axios.get('countries.json')
                .then((res) => {
                this.setState({ allCountries: res.data });
            })
                .catch(err => console.log(err));
        });
        start();
    }
    render() {
        return (React.createElement("div", { className: 'wrap_Employment' },
            React.createElement("div", { className: 'employment' },
                React.createElement("div", { className: 'wrap_titles_empl' },
                    React.createElement("p", { className: 'us_title' }, "Please select Employment Status"),
                    React.createElement("p", { className: 'title_salut', id: 'business_title' }, "Business activity"),
                    React.createElement("div", { className: 'wrap_empl_status' },
                        React.createElement("p", { className: 'each_empl choosen_type_blue' },
                            "Employed ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check1, onChange: this.changeInputColor, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check1 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Employed' }),
                        React.createElement("p", { className: 'each_empl' },
                            "Self-Employed ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check2, onChange: this.changeInputColor2, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check2 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Self-Employed' }),
                        React.createElement("p", { className: 'each_empl' },
                            "Retired (Pensioner) ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check3, onChange: this.changeInputColor3, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check3 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Retired (Pensioner)' }),
                        React.createElement("p", { className: 'each_empl' },
                            "Unemployed ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check4, onChange: this.changeInputColor4, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check4 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Unemployed' }),
                        React.createElement("p", { className: 'each_empl' },
                            "Student ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check5, onChange: this.changeInputColor5, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check5 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Student' }),
                        React.createElement("p", { className: 'each_empl' },
                            "Not Working ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check6, onChange: this.changeInputColor6, className: 'allCheckBoxes4' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check6 ? 'employmentStatus' : '', form: 'checkPersonal1', value: 'Not Working' }))),
                React.createElement("div", { className: 'for_student dispNone' },
                    React.createElement("p", { className: 'title_salut', id: 'student_title' }, "University"),
                    React.createElement("input", { type: 'text', form: 'checkPersonal1', name: 'university', required: this.state.check5, placeholder: 'University', onChange: (e) => document.getElementById('universityHid').value = e.target.value, className: 'alternative_inputs long_input' }),
                    React.createElement("p", { className: 'title_salut' }, "Faculty/course"),
                    React.createElement("input", { type: 'text', form: 'checkPersonal1', name: 'faculty', required: this.state.check5, placeholder: 'Faculty/course', onChange: (e) => document.getElementById('facultyHid').value = e.target.value, className: 'alternative_inputs long_input' })),
                React.createElement("div", { className: 'main_info' },
                    React.createElement("p", { className: 'title_salut' }, "Company name"),
                    React.createElement("p", { className: 'title_salut' }, "Company address"),
                    React.createElement("input", { type: 'text', name: 'companyEmplName', form: 'checkPersonal1', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, placeholder: 'Company name', onChange: (e) => document.getElementById('companyEmplNameHid').value = e.target.value, id: 'spec_inp5', className: 'alternative_inputs' }),
                    React.createElement("input", { type: 'text', name: 'companyEmplAddress', form: 'checkPersonal1', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, placeholder: 'Company address', onChange: (e) => document.getElementById('companyEmplAddressHid').value = e.target.value, className: 'alternative_inputs' }),
                    React.createElement("p", { className: 'title_salut' }, "Since"),
                    React.createElement("p", { className: 'title_salut', id: 'spec_inp7' }, "Country of (main) business activity"),
                    React.createElement("input", { type: 'text', name: 'companyEmplDate', form: 'checkPersonal1', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, ref: this.dateInput, onChange: (e) => document.getElementById('companyEmplDateHid').value = e.target.value, placeholder: 'DD/MM/YYYY', id: 'spec_inp6', onFocus: () => {
                            if (this.dateInput.current != null) {
                                this.dateInput.current.type = "date";
                            }
                        }, className: 'com_input' }),
                    React.createElement("select", { id: 'selectCountrLow', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, name: 'companyEmplCountry', form: 'checkPersonal1', onChange: (e) => document.getElementById('companyEmplCountryHid').value = e.target.value, className: 'com_input' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                    React.createElement("p", { className: 'title_salut', id: 'tit_website' }, "Website"),
                    React.createElement("input", { type: 'text', name: 'companyEmplWebsite', form: 'checkPersonal1', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, placeholder: 'Website', onChange: (e) => document.getElementById('companyEmplWebsiteHid').value = e.target.value, className: 'alternative_inputs', id: 'website' }),
                    React.createElement("p", { className: 'title_salut' }, "Line of business or industry (NOGA code)"),
                    React.createElement("select", { id: 'selectCode', name: 'companyEmplCode', form: 'checkPersonal1', onChange: (e) => document.getElementById('companyEmplCodeHid').value = e.target.value, className: 'com_input' },
                        React.createElement("option", { value: "", disabled: true, selected: true }, "Code"),
                        React.createElement("option", { value: "hurr" }, "Durr")),
                    React.createElement("p", { className: 'title_salut', id: 'profession_title', ref: this.prof1 }, "Profession"),
                    React.createElement("input", { type: 'text', name: 'companyEmplProfession', form: 'checkPersonal1', required: this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4, placeholder: this.state.profession, onChange: (e) => document.getElementById('companyEmplProfessionHid').value = e.target.value, id: 'profession_title_input', className: 'alternative_inputs long_input' }),
                    React.createElement("p", { className: 'title_salut', id: 'last_func', ref: this.prof2 }, "Function/position"),
                    React.createElement("div", { className: 'wrap_prof_status' },
                        React.createElement("p", { className: 'each_empl2 choosen_type_blue' },
                            "Staff ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check7, onChange: this.changeInputColor7, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check7 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Staff' }),
                        React.createElement("p", { className: 'each_empl2' },
                            "Lower Management ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check8, onChange: this.changeInputColor8, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check8 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Lower Management' }),
                        React.createElement("p", { className: 'each_empl2' },
                            "Middle Management ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check9, onChange: this.changeInputColor9, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check9 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Middle Management' }),
                        React.createElement("p", { className: 'each_empl2' },
                            "Upper Management ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check10, onChange: this.changeInputColor10, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check10 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Upper Management' }),
                        React.createElement("p", { className: 'each_empl2' },
                            "Board ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check11, onChange: this.changeInputColor11, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check11 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Board' }),
                        React.createElement("p", { className: 'each_empl2' },
                            "Executive Board ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check12, onChange: this.changeInputColor12, className: 'allCheckBoxes5' })),
                        React.createElement("input", { type: 'hidden', name: this.state.check12 ? 'functionEmpl' : '', form: 'checkPersonal1', value: 'Executive Board ' })),
                    React.createElement("div", { className: 'extraInfo dispNone' },
                        React.createElement("p", { className: 'title_salut', id: 'employ_title' }, "Employees of the company"),
                        React.createElement("div", { className: 'wrap_comp_status' },
                            React.createElement("p", { className: 'each_empl3 choosen_type_blue' },
                                "1 - 25 ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check13, onChange: this.changeInputColor13, className: 'allCheckBoxes6' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check13 ? 'companyEmpl' : '', form: 'checkPersonal1', value: '1 - 25' }),
                            React.createElement("p", { className: 'each_empl3' },
                                "25 - 100 ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check14, onChange: this.changeInputColor14, className: 'allCheckBoxes6' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check14 ? 'companyEmpl' : '', form: 'checkPersonal1', value: '25 - 100' }),
                            React.createElement("p", { className: 'each_empl3' },
                                " ",
                                `> 100`,
                                " ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check15, onChange: this.changeInputColor15, className: 'allCheckBoxes6' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check15 ? 'companyEmpl' : '', form: 'checkPersonal1', value: '> 100' })),
                        React.createElement("p", { className: 'title_salut', id: 'turnover' }, "Company turnover"),
                        React.createElement("div", { className: 'wrap_turn_status' },
                            React.createElement("p", { className: 'each_empl4' },
                                `< CHF 5 m`,
                                React.createElement("input", { type: 'checkbox', checked: this.state.check16, onChange: this.changeInputColor16, className: 'allCheckBoxes7' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check16 ? 'companyEmplTurnover' : '', form: 'checkPersonal1', value: '< CHF 5 m' }),
                            React.createElement("p", { className: 'each_empl4' },
                                "CHF 5 m - CHF 10 m ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check17, onChange: this.changeInputColor17, className: 'allCheckBoxes7' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check17 ? 'companyEmplTurnover' : '', form: 'checkPersonal1', value: 'CHF 5 m - CHF 10 m' }),
                            React.createElement("p", { className: 'each_empl4 choosen_type_blue' },
                                "CHF 10 m - CHF 25 m ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check18, onChange: this.changeInputColor18, className: 'allCheckBoxes7' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check18 ? 'companyEmplTurnover' : '', form: 'checkPersonal1', value: 'CHF 10 m - CHF 25 m ' }),
                            React.createElement("p", { className: 'each_empl4' },
                                " ",
                                `> CHF 25 m`,
                                " ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check19, onChange: this.changeInputColor19, className: 'allCheckBoxes7' })),
                            React.createElement("input", { type: 'hidden', name: this.state.check19 ? 'companyEmplTurnover' : '', form: 'checkPersonal1', value: '> CHF 25 m' })))),
                React.createElement("div", { className: 'wrap_next_buttons2' },
                    React.createElement("div", { className: 'first_next_buttons' },
                        React.createElement(NavLink, { to: '/create_account', className: 'back_button' }, "Back"),
                        React.createElement("button", { type: 'submit', form: 'checkPersonal1', className: 'next_button' }, "Next"))))));
    }
}
export default Employment;
