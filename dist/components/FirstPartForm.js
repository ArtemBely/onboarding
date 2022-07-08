import React, { Component } from 'react';
class FirstPartForm extends Component {
    constructor(props, state) {
        super(props, state);
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.thirdTitle = React.createRef();
        this.fourthTitle = React.createRef();
        this.fiveTitle = React.createRef();
        this.sixTitle = React.createRef();
        this.sevenTitle = React.createRef();
        this.eightTitle = React.createRef();
        this.nineTitle = React.createRef();
        this.tenTitle = React.createRef();
        this.elevenTitle = React.createRef();
        this.twelveTitle = React.createRef();
        this.thirtheenTitle = React.createRef();
        this.dateInput = React.createRef();
        this.changeOneTitle = () => {
            var _a, _b;
            this.setState({ check1: true, check2: false, check3: false, check4: false });
            document.querySelectorAll('.each_title_yours').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.firstTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTwoTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: true, check3: false, check4: false });
            document.querySelectorAll('.each_title_yours').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.secondTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeThreeTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: false, check3: true, check4: false });
            document.querySelectorAll('.each_title_yours').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirdTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFourthTitle = () => {
            var _a, _b;
            this.setState({ check1: false, check2: false, check3: false, check4: true });
            document.querySelectorAll('.each_title_yours').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fourthTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeFiveTitle = () => {
            var _a, _b;
            this.setState({ check21: true, check22: false, check23: false });
            document.querySelectorAll('.each_title_salut').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.fiveTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeSixTitle = () => {
            var _a, _b;
            this.setState({ check21: false, check22: true, check23: false });
            document.querySelectorAll('.each_title_salut').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.sixTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeSevenTitle = () => {
            var _a, _b;
            this.setState({ check21: false, check22: false, check23: true });
            document.querySelectorAll('.each_title_salut').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.sevenTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeEightTitle = () => {
            var _a, _b;
            this.setState({ check31: true, check32: false, check33: false, check34: false, check35: false, check36: false });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.eightTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeNineTitle = () => {
            var _a, _b;
            this.setState({ check31: false, check32: true, check33: false, check34: false, check35: false, check36: false });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.nineTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTenTitle = () => {
            var _a, _b;
            this.setState({ check31: false, check32: false, check33: true, check34: false, check35: false, check36: false });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.tenTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeElevenTitle = () => {
            var _a, _b;
            this.setState({ check31: false, check32: false, check33: false, check34: true, check35: false, check36: false });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.elevenTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTwelveTitle = () => {
            var _a, _b;
            this.setState({ check31: false, check32: false, check33: false, check34: false, check35: true, check36: false });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.twelveTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeThirtheenTitle = () => {
            var _a, _b;
            this.setState({ check31: false, check32: false, check33: false, check34: false, check35: false, check36: true });
            document.querySelectorAll('.each_title_nation').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.thirtheenTitle) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user,
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check21: false,
            check22: true,
            check23: false,
            check31: true,
            check32: false,
            check33: false,
            check34: false,
            check35: false,
            check36: false,
        };
        this.firstTitle = React.createRef();
        this.secondTitle = React.createRef();
        this.thirdTitle = React.createRef();
        this.fourthTitle = React.createRef();
        this.fiveTitle = React.createRef();
        this.sixTitle = React.createRef();
        this.sevenTitle = React.createRef();
        this.eightTitle = React.createRef();
        this.nineTitle = React.createRef();
        this.tenTitle = React.createRef();
        this.elevenTitle = React.createRef();
        this.twelveTitle = React.createRef();
        this.thirtheenTitle = React.createRef();
        this.dateInput = React.createRef();
    }
    render() {
        return (React.createElement("div", { className: 'wrap_first_part' },
            React.createElement("div", { className: 'first_part' },
                React.createElement("div", { className: 'first_part_inside' },
                    React.createElement("p", { className: 'title_yours' }, "Title"),
                    React.createElement("div", { className: 'wrap_title_yours' },
                        React.createElement("p", { className: 'each_title_yours choosen_type_blue', ref: this.firstTitle },
                            "None ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check1, value: "None", onChange: this.changeOneTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_yours', ref: this.secondTitle },
                            "Prof. ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check2, value: "Prof.", onChange: this.changeTwoTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_yours', ref: this.thirdTitle },
                            "Dr. ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check3, value: "Dr.", onChange: this.changeThreeTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_yours', ref: this.fourthTitle },
                            "PhD ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check4, value: "PhD", onChange: this.changeFourthTitle, className: 'allCheckBoxes' })))),
                React.createElement("div", { className: 'second_part_inside' },
                    React.createElement("p", { className: 'title_salut' }, "Salutation"),
                    React.createElement("div", { className: 'wrap_title_salut' },
                        React.createElement("p", { className: 'each_title_salut choosen_type_blue', ref: this.fiveTitle },
                            "Mr",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check21, value: "Mr", onChange: this.changeFiveTitle, className: 'allCheckBoxes2' })),
                        React.createElement("p", { className: 'each_title_salut', ref: this.sixTitle },
                            "Mrs",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check22, value: "Mrs", onChange: this.changeSixTitle, className: 'allCheckBoxes2' })),
                        React.createElement("p", { className: 'each_title_salut', ref: this.sevenTitle },
                            "Ms",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check23, value: "Ms", onChange: this.changeSevenTitle, className: 'allCheckBoxes2' })))),
                React.createElement("div", { className: 'name_part_inside' },
                    React.createElement("p", { className: 'title_salut' }, "Given names as per passport/ identification document"),
                    React.createElement("input", { type: 'text', name: 'name', className: 'com_input', placeholder: 'Name' })),
                React.createElement("div", { className: 'surname_part_inside' },
                    React.createElement("p", { className: 'title_salut' }, "Last name"),
                    React.createElement("input", { type: 'text', name: 'lastname', className: 'com_input', placeholder: 'Last name' })),
                React.createElement("div", { className: 'third_part_inside' },
                    React.createElement("p", { className: 'title_salut' }, "Date of birth"),
                    React.createElement("input", { type: 'text', ref: this.dateInput, placeholder: 'DD/MM/YYYY', onFocus: () => {
                            if (this.dateInput.current != null) {
                                this.dateInput.current.type = "date";
                            }
                        }, className: 'com_input' })),
                React.createElement("div", { className: 'country_part_inside' },
                    React.createElement("p", { className: 'title_salut' }, "Country of origin (Nationality)"),
                    React.createElement("select", { id: 'selectCountry', className: 'com_input' },
                        React.createElement("option", { value: "", disabled: true, selected: true }, "Country"),
                        React.createElement("option", { value: "hurr" }, "Durr"))),
                React.createElement("div", { className: 'five_part_inside' },
                    React.createElement("p", { className: 'title_yours' }, "Please enter how many other nationalities you have"),
                    React.createElement("div", { className: 'wrap_title_nation' },
                        React.createElement("p", { className: 'each_title_nation choosen_type_blue', ref: this.eightTitle },
                            "0 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check31, value: "0", onChange: this.changeEightTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_nation', ref: this.nineTitle },
                            "1 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check32, value: "1", onChange: this.changeNineTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_nation', ref: this.tenTitle },
                            "2 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check33, value: "2", onChange: this.changeTenTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_nation', ref: this.elevenTitle },
                            "3 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check34, value: "3", onChange: this.changeElevenTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_nation', ref: this.twelveTitle },
                            "4 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check35, value: "4", onChange: this.changeTwelveTitle, className: 'allCheckBoxes' })),
                        React.createElement("p", { className: 'each_title_nation', ref: this.thirtheenTitle },
                            "5 ",
                            React.createElement("input", { type: 'checkbox', checked: this.state.check36, value: "5", onChange: this.changeThirtheenTitle, className: 'allCheckBoxes' })))))));
    }
}
export default FirstPartForm;
