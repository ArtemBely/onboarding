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
import axios from 'axios';
class PersonalEdit extends Component {
    constructor(props, state) {
        super(props, state);
        this.us1 = React.createRef();
        this.us2 = React.createRef();
        this.us3 = React.createRef();
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
        this.dateInput2 = React.createRef();
        this.dateInput3 = React.createRef();
        this.dr = React.createRef();
        this.dr2 = React.createRef();
        this.dr3 = React.createRef();
        this.dr4 = React.createRef();
        this.dr5 = React.createRef();
        this.dr6 = React.createRef();
        this.dr7 = React.createRef();
        this.firstWhite = React.createRef();
        this.secondBlue = React.createRef();
        this.secondWhite = React.createRef();
        this.extra_name_input = React.createRef();
        this.prof1 = React.createRef();
        this.prof2 = React.createRef();
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
        this.changeTitle1 = () => {
            var _a, _b;
            this.setState({ check5: true, check6: false, check7: false });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us1) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTitle2 = () => {
            var _a, _b;
            this.setState({ check5: false, check6: true, check7: false });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.changeTitle3 = () => {
            var _a, _b;
            this.setState({ check5: false, check6: false, check7: true });
            document.querySelectorAll('.each_us').forEach(item => (item.classList.remove('choosen_type_blue')));
            (_b = (_a = this.us3) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('choosen_type_blue');
        };
        this.showHiddenEdit = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[0].classList.remove('dispNone');
            (_b = (_a = this.dr) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[0].classList.remove('whiteFone');
        };
        this.showHiddenEdit2 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[1].classList.remove('dispNone');
            (_b = (_a = this.dr2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[1].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[1].classList.add('extraMarginTop');
        };
        this.showHiddenEdit3 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[2].classList.remove('dispNone');
            (_b = (_a = this.dr3) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[2].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[2].classList.add('extraMarginTop');
        };
        this.showHiddenEdit4 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[3].classList.remove('dispNone');
            (_b = (_a = this.dr4) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[3].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[3].classList.add('extraMarginTop');
        };
        this.showHiddenEdit5 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[4].classList.remove('dispNone');
            (_b = (_a = this.dr5) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[4].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[4].classList.add('extraMarginTop');
        };
        this.showHiddenEdit6 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[5].classList.remove('dispNone');
            (_b = (_a = this.dr6) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[5].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[5].classList.add('extraMarginTop');
        };
        this.showHiddenEdit7 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[6].classList.remove('dispNone');
            (_b = (_a = this.dr7) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[6].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[6].classList.add('extraMarginTop');
        };
        this.showHiddenEdit8 = () => {
            document.querySelectorAll('.hiddenEdit').forEach(item => (item.classList.add('dispNone')));
            document.querySelectorAll('.each_personalEdit').forEach(item => (item.classList.remove('extraMarginTop')));
            document.querySelectorAll('.indicateChange').forEach(item => (item.classList.remove('dispNone')));
            document.querySelectorAll('.hiddenEdit')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.indicateChange')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.each_personalEdit').forEach(item => (!item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
            document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.remove('whiteFone');
            document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.add('extraMarginTop');
        };
        this.hideEmailEdit = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[0].classList.add('dispNone');
            (_b = (_a = this.dr) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[0].classList.add('whiteFone');
        };
        this.hideEmailEdit2 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[1].classList.add('dispNone');
            (_b = (_a = this.dr2) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[1].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[1].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit3 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[2].classList.add('dispNone');
            (_b = (_a = this.dr3) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[2].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[2].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit4 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[3].classList.add('dispNone');
            (_b = (_a = this.dr4) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[3].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[3].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit5 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[4].classList.add('dispNone');
            (_b = (_a = this.dr5) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[4].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[4].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit6 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[5].classList.add('dispNone');
            (_b = (_a = this.dr6) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[5].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[5].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit7 = () => {
            var _a, _b;
            document.querySelectorAll('.hiddenEdit')[6].classList.add('dispNone');
            (_b = (_a = this.dr7) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[6].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[6].classList.remove('extraMarginTop');
        };
        this.hideEmailEdit8 = () => {
            document.querySelectorAll('.hiddenEdit')[this.state.count1].classList.add('dispNone');
            document.querySelectorAll('.indicateChange')[this.state.count1].classList.remove('dispNone');
            document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.add('whiteFone');
            document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.remove('extraMarginTop');
        };
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
        this.changeInputColor = () => {
            this.setState({ check1: true, check2: false, check3: false, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[0].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
        };
        this.changeInputColor2 = () => {
            this.setState({ check1: false, check2: true, check3: false, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[1].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.remove('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Function/position';
            this.setState({ profession: "Profession" });
        };
        this.changeInputColor3 = () => {
            this.setState({ check1: false, check2: false, check3: true, check4: false, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[2].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Last profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Last function/position';
            this.setState({ profession: "Last profession" });
        };
        this.changeInputColor4 = () => {
            this.setState({ check1: false, check2: false, check3: false, check4: true, check5: false, check6: false });
            document.querySelectorAll('.each_empl').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.for_student')[0].classList.add('dispNone');
            document.querySelectorAll('.each_empl')[3].classList.add('choosen_type_blue');
            document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
            document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
            const element = document.getElementById('profession_title');
            element.innerHTML = 'Last profession';
            const element2 = document.getElementById('last_func');
            element2.innerHTML = 'Last function/position';
            this.setState({ profession: "Last profession" });
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
        };
        this.changeInputColor7 = () => {
            this.setState({ check14: true, check8: false, check9: false, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor8 = () => {
            this.setState({ check7: false, check8: true, check9: false, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor9 = () => {
            this.setState({ check7: false, check8: false, check9: true, check10: false, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor10 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: true, check11: false, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[3].classList.add('choosen_type_blue');
        };
        this.changeInputColor11 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: false, check11: true, check12: false });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[4].classList.add('choosen_type_blue');
        };
        this.changeInputColor12 = () => {
            this.setState({ check7: false, check8: false, check9: false, check10: false, check11: false, check12: true });
            document.querySelectorAll('.each_empl2').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl2')[5].classList.add('choosen_type_blue');
        };
        this.changeInputColor13 = () => {
            this.setState({ check13: true, check14: false, check15: false });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor14 = () => {
            this.setState({ check13: false, check14: true, check15: false });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor15 = () => {
            this.setState({ check13: false, check14: false, check15: true });
            document.querySelectorAll('.each_empl3').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl3')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor16 = () => {
            this.setState({ check16: true, check17: false, check18: false, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor17 = () => {
            this.setState({ check16: false, check17: true, check18: false, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor18 = () => {
            this.setState({ check16: false, check17: false, check18: true, check19: false });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor19 = () => {
            this.setState({ check16: false, check17: false, check18: false, check19: true });
            document.querySelectorAll('.each_empl4').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
        };
        this.changeInputColor20 = () => {
            this.setState({ check43: true, check44: false, check45: false, check46: false, check47: false, check48: false });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[0].classList.add('choosen_type_blue');
        };
        this.changeInputColor21 = () => {
            this.setState({ check43: false, check44: true, check45: false, check46: false, check47: false, check48: false });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[1].classList.add('choosen_type_blue');
        };
        this.changeInputColor22 = () => {
            this.setState({ check43: false, check44: false, check45: true, check46: false, check47: false, check48: false });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[2].classList.add('choosen_type_blue');
        };
        this.changeInputColor23 = () => {
            this.setState({ check43: false, check44: false, check45: false, check46: true, check47: false, check48: false });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[3].classList.add('choosen_type_blue');
        };
        this.changeInputColor24 = () => {
            this.setState({ check43: false, check44: false, check45: false, check46: false, check47: true, check48: false });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[4].classList.add('choosen_type_blue');
        };
        this.changeInputColor25 = () => {
            this.setState({ check43: false, check44: false, check45: false, check46: false, check47: false, check48: true });
            document.querySelectorAll('.each_empl22').forEach(item => (item.classList.remove('choosen_type_blue')));
            document.querySelectorAll('.each_empl22')[5].classList.add('choosen_type_blue');
        };
        this.changeInputColor222 = () => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.secondBlue) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.contains('blueCheckBox')) ?
                (_d = (_c = this.secondBlue) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('blueCheckBox') :
                (_f = (_e = this.secondBlue) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('blueCheckBox');
        };
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_STATE__;
        }
        this.state = {
            user,
            allCountries: [],
            count1: 0,
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check5: true,
            check6: false,
            check7: false,
            check8: true,
            check9: false,
            check10: false,
            check11: false,
            check12: false,
            check13: false,
            check14: true,
            check15: false,
            check16: false,
            check17: false,
            check18: false,
            check19: false,
            check20: true,
            check21: false,
            check22: true,
            check23: false,
            check31: true,
            check32: false,
            check33: false,
            check34: false,
            check35: false,
            check36: false,
            check37: true,
            check38: false,
            check39: false,
            check40: false,
            check41: false,
            check42: true,
            check43: true,
            check44: false,
            check45: false,
            check46: false,
            check47: false,
            check48: false,
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
        return (React.createElement("div", { className: 'wrap_personalEdit' },
            React.createElement("div", { className: 'personalEdit' },
                React.createElement("p", { className: 'us_title personal_det_title' }, "Personal details"),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Title"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit, ref: this.dr }, "Dr"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
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
                                React.createElement("input", { type: 'checkbox', checked: this.state.check4, value: "PhD", onChange: this.changeFourthTitle, className: 'allCheckBoxes' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Salutation"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit2, ref: this.dr2 }, "Mrs"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("div", { className: 'wrap_title_yours' },
                            React.createElement("p", { className: 'each_title_salut choosen_type_blue', ref: this.fiveTitle },
                                "Mr",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check21, value: "Mr", onChange: this.changeFiveTitle, className: 'allCheckBoxes2' })),
                            React.createElement("p", { className: 'each_title_salut', ref: this.sixTitle },
                                "Mrs",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check22, value: "Mrs", onChange: this.changeSixTitle, className: 'allCheckBoxes2' })),
                            React.createElement("p", { className: 'each_title_salut', ref: this.sevenTitle },
                                "Ms",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check23, value: "Ms", onChange: this.changeSevenTitle, className: 'allCheckBoxes2' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit2 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Given names as per passport/ identification document"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit3, ref: this.dr3 }, "Klode"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', name: 'name', className: 'com_input', placeholder: 'Name' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit3 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Last name"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit4, ref: this.dr4 }, "Jan"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', name: 'lastname', className: 'com_input', placeholder: 'Last name' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit4 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Date of birth"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit5, ref: this.dr5 }, "14. 05. 1996"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', ref: this.dateInput, placeholder: 'DD/MM/YYYY', onFocus: () => {
                                if (this.dateInput.current != null) {
                                    this.dateInput.current.type = "date";
                                }
                            }, className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit5 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Country of origin (Nationality)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit6, ref: this.dr6 }, "Dominicana"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("select", { id: 'selectCountry', className: 'com_input' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit6 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Please enter how many other nationalities you have"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onClick: this.showHiddenEdit7, ref: this.dr7 }, "1"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
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
                                React.createElement("input", { type: 'checkbox', checked: this.state.check36, value: "5", onChange: this.changeThirtheenTitle, className: 'allCheckBoxes' }))),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit7 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "US person"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 7 }), onMouseUp: this.showHiddenEdit8 }, "No US person"),
                    React.createElement("div", { className: 'hiddenEdit fullScreen specFullScreen dispNone' },
                        React.createElement("div", { className: 'choose_us' },
                            React.createElement("p", { className: 'each_us choosen_type_blue', ref: this.us1 },
                                "No US person ",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check5, value: "No US person", onChange: this.changeTitle1, className: 'allCheckBoxes3' })),
                            React.createElement("p", { className: 'each_us', ref: this.us2 },
                                "Former US person",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check6, value: "Former US person", onChange: this.changeTitle2, className: 'allCheckBoxes3' })),
                            React.createElement("p", { className: 'each_us', ref: this.us3 },
                                "US person",
                                React.createElement("input", { type: 'checkbox', checked: this.state.check7, value: "US person", onChange: this.changeTitle3, className: 'allCheckBoxes3' }))),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "PEP person"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 8 }), onMouseUp: this.showHiddenEdit8 }, "I declare that I am not and I was never qualified as a politically exposed person (PEP), or a family member or close associate of a PEP"),
                    React.createElement("div", { className: 'hiddenEdit fullScreen specFullScreen dispNone' },
                        React.createElement("div", { className: 'wrap_each_per' },
                            React.createElement("div", { className: 'each_white_per blue_each_white_per', ref: this.firstWhite, onClick: this.changeSecondWhite }, "I declare that I am not and I was never qualified as a politically exposed person (PEP), or a family member or close associate of a PEP"),
                            React.createElement("div", { className: 'each_white_per', ref: this.secondWhite, onClick: this.changeFirstWhite }, "I declare that I am a politically exposed person or a family member or close associate of a politically exposed person: indicate the executed function or the name/function of the affiliated person."),
                            React.createElement("p", { className: 'green_text', id: 'politicalPerson' }, "Politically exposed persons in terms of the Swiss Anti-Money Laundering Act are: individuals who are or have been entrusted with prominent public functions by a foreign country, such as heads of state or of government, senior politicians at national level, members of the board or individuals who have been entrusted with equivalent functions, (PEP in international organizations)."),
                            React.createElement("p", { className: 'green_text' }, "International sports associations are the International Olympic Committee and the non-governmental organizations it recognizes that regulate one or more official sports at global level."),
                            React.createElement("p", { className: 'green_text' }, "The family members and close associates of PEP are individuals who are closely connected to persons who qualify as PEP, either through their family or for social or professional reasons."),
                            React.createElement("p", { className: 'extra_name dispNone' }, "Name/Function"),
                            React.createElement("input", { type: 'text', placeholder: 'Name/Function', ref: this.extra_name_input, className: 'extra_name_input dispNone' })),
                        React.createElement("div", { className: 'wrap_action_buttons22' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Alternative e-mail address for correspondence with PI Digital"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 9 }), onMouseUp: this.showHiddenEdit8 }, "email"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'email', placeholder: 'Alternative Email', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Phone (prepend country code)"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 10 }), onMouseUp: this.showHiddenEdit8 }, "Phone"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'tel', placeholder: 'Phone', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("p", { className: 'us_title personal_det_title garBellow' }, "Domicile address"),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Street, No."),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 11 }), onMouseUp: this.showHiddenEdit8 }, "Street, No."),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Street, No.', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "City/State"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 12 }), onMouseUp: this.showHiddenEdit8 }, "City/State"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'City/State.', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Mailbox"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 13 }), onMouseUp: this.showHiddenEdit8 }, "Mailbox"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'email', placeholder: 'Email', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Country of residence"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 14 }), onMouseUp: this.showHiddenEdit8 }, "Country of residence"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Country of residence', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "Postal code"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 15 }), onMouseUp: this.showHiddenEdit8 }, "Postal code"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', placeholder: 'Postal code', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "\u0421orrespondence address"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 16 }), onMouseUp: this.showHiddenEdit8 }, "\u0421orrespondence address"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("input", { type: 'text', placeholder: '\u0421orrespondence address', className: 'com_input' }),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("p", { className: 'us_title personal_det_title garBellow' }, "\u0421orrespondence address"),
                React.createElement("div", { className: 'each_personalEdit whiteFone' },
                    React.createElement("p", { className: 'each_edit_person' }, "\u0421orrespondence address"),
                    React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 17 }), onMouseUp: this.showHiddenEdit8 }, "Same as domicile address"),
                    React.createElement("div", { className: 'hiddenEdit dispNone' },
                        React.createElement("p", { className: 'corr_text' }, "Same as domicile address"),
                        React.createElement("p", { className: 'wrap_main_checkbox32', ref: this.secondBlue },
                            React.createElement("input", { type: 'checkbox', onChange: this.changeInputColor222, className: 'main_checkbox' })),
                        React.createElement("div", { className: 'wrap_action_buttons2' },
                            React.createElement("div", { className: 'action_btns2' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                React.createElement("div", { id: 'specFullScreen', style: { display: this.state.user && Object.values(this.state.user)[0] == 'admin' ? 'none' : 'block' } },
                    React.createElement("p", { className: 'us_title personal_det_title' }, "Employment status"),
                    React.createElement("div", { className: 'each_personalEdit' },
                        React.createElement("p", { className: 'each_edit_person' }, "Business activity"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 18 }), onMouseUp: this.showHiddenEdit8 }, "Employed"),
                        React.createElement("div", { className: 'hiddenEdit fullScreen specFullScreen dispNone' },
                            React.createElement("div", { className: 'wrap_empl_status' },
                                React.createElement("p", { className: 'each_empl choosen_type_blue' },
                                    "Employed ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check8, onChange: this.changeInputColor, value: 'Employed', className: 'allCheckBoxes4' })),
                                React.createElement("p", { className: 'each_empl' },
                                    "Self-Employed ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check9, onChange: this.changeInputColor2, value: 'Self-Employed', className: 'allCheckBoxes4' })),
                                React.createElement("p", { className: 'each_empl' },
                                    "Retired (Pensioner) ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check10, onChange: this.changeInputColor3, value: 'Retired (Pensioner)', className: 'allCheckBoxes4' })),
                                React.createElement("p", { className: 'each_empl' },
                                    "Unemployed ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check11, onChange: this.changeInputColor4, value: 'Unemployed', className: 'allCheckBoxes4' })),
                                React.createElement("p", { className: 'each_empl' },
                                    "Student ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check12, onChange: this.changeInputColor5, value: 'Student', className: 'allCheckBoxes4' })),
                                React.createElement("p", { className: 'each_empl' },
                                    "Not Working ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check13, onChange: this.changeInputColor6, value: 'Not Working', className: 'allCheckBoxes4' }))),
                            React.createElement("div", { className: 'for_student dispNone', id: 'forStudent' },
                                React.createElement("p", { className: 'title_salut', id: 'student_title' }, "University"),
                                React.createElement("input", { type: 'text', placeholder: 'University', className: 'alternative_inputs long_input' }),
                                React.createElement("p", { className: 'title_salut' }, "Faculty/course"),
                                React.createElement("input", { type: 'text', placeholder: 'Faculty/course', className: 'alternative_inputs long_input' })),
                            React.createElement("div", { className: 'main_info personal_main_info', id: 'mainInfo' },
                                React.createElement("p", { className: 'title_salut' }, "Company name"),
                                React.createElement("p", { className: 'title_salut' }, "Company address"),
                                React.createElement("input", { type: 'text', placeholder: 'Company name', id: 'alter14', className: 'alternative_inputs' }),
                                React.createElement("input", { type: 'text', placeholder: 'Company address', className: 'alternative_inputs' }),
                                React.createElement("p", { className: 'title_salut' }, "Since"),
                                React.createElement("p", { className: 'title_salut' }, "Country of (main) business activity"),
                                React.createElement("input", { type: 'text', ref: this.dateInput2, id: 'alter15', placeholder: 'DD/MM/YYYY', onFocus: () => {
                                        if (this.dateInput2.current != null) {
                                            this.dateInput2.current.type = "date";
                                        }
                                    }, className: 'com_input' }),
                                React.createElement("select", { id: 'selectCountry', className: 'com_input alter16' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                                React.createElement("p", { className: 'title_salut', id: 'tit_website' }, "Website"),
                                React.createElement("input", { type: 'text', placeholder: 'Website', className: 'alternative_inputs', id: 'website' }),
                                React.createElement("p", { className: 'title_salut' }, "Line of business or industry (NOGA code)"),
                                React.createElement("select", { id: 'selectCode', className: 'com_input' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                                React.createElement("p", { className: 'title_salut', id: 'profession_title', ref: this.prof1 }, "Profession"),
                                React.createElement("input", { type: 'text', placeholder: this.state.profession, id: 'profession_title_input', className: 'alternative_inputs long_input' }),
                                React.createElement("p", { className: 'title_salut', id: 'last_func', ref: this.prof2 }, "Function/position"),
                                React.createElement("div", { className: 'wrap_prof_status' },
                                    React.createElement("p", { className: 'each_empl2 choosen_type_blue' },
                                        "Staff ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check14, onChange: this.changeInputColor7, value: 'Staff', className: 'allCheckBoxes5' })),
                                    React.createElement("p", { className: 'each_empl2' },
                                        "Lower Management ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check15, onChange: this.changeInputColor8, value: 'Lower Management', className: 'allCheckBoxes5' })),
                                    React.createElement("p", { className: 'each_empl2' },
                                        "Middle Management ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check16, onChange: this.changeInputColor9, value: 'Middle Management', className: 'allCheckBoxes5' })),
                                    React.createElement("p", { className: 'each_empl2' },
                                        "Upper Management ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check17, onChange: this.changeInputColor10, value: 'Upper Management', className: 'allCheckBoxes5' })),
                                    React.createElement("p", { className: 'each_empl2' },
                                        "Board ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check18, onChange: this.changeInputColor11, value: 'Board', className: 'allCheckBoxes5' })),
                                    React.createElement("p", { className: 'each_empl2' },
                                        "Executive Board ",
                                        React.createElement("input", { type: 'checkbox', checked: this.state.check19, onChange: this.changeInputColor12, value: 'Executive Board', className: 'allCheckBoxes5' }))),
                                React.createElement("div", { className: 'extraInfo dispNone' },
                                    React.createElement("p", { className: 'title_salut', id: 'employ_title' }, "Employees of the company"),
                                    React.createElement("div", { className: 'wrap_comp_status' },
                                        React.createElement("p", { className: 'each_empl3 choosen_type_blue' },
                                            "1 - 25 ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check20, onChange: this.changeInputColor13, value: '1 - 25', className: 'allCheckBoxes6' })),
                                        React.createElement("p", { className: 'each_empl3' },
                                            "25 - 100 ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check37, onChange: this.changeInputColor14, value: '25 - 100', className: 'allCheckBoxes6' })),
                                        React.createElement("p", { className: 'each_empl3' },
                                            " ",
                                            `> 100`,
                                            " ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check38, onChange: this.changeInputColor15, value: '> 100', className: 'allCheckBoxes6' }))),
                                    React.createElement("p", { className: 'title_salut', id: 'turnover' }, "Company turnover"),
                                    React.createElement("div", { className: 'wrap_turn_status' },
                                        React.createElement("p", { className: 'each_empl4' },
                                            `< CHF 5 m`,
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check39, onChange: this.changeInputColor16, value: '< CHF 5 m', className: 'allCheckBoxes7' })),
                                        React.createElement("p", { className: 'each_empl4' },
                                            "CHF 5 m - CHF 5 m ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check40, onChange: this.changeInputColor17, value: 'CHF 5 m - CHF 5 m', className: 'allCheckBoxes7' })),
                                        React.createElement("p", { className: 'each_empl4 choosen_type_blue' },
                                            "CHF 10 m - CHF 25 m ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check41, onChange: this.changeInputColor18, value: 'CHF 10 m - CHF 25 m', className: 'allCheckBoxes7' })),
                                        React.createElement("p", { className: 'each_empl4' },
                                            " ",
                                            `> CHF 25 m`,
                                            " ",
                                            React.createElement("input", { type: 'checkbox', checked: this.state.check42, onChange: this.changeInputColor19, value: '> CHF 25 m', className: 'allCheckBoxes7' }))))),
                            React.createElement("div", { className: 'wrap_action_buttons22' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Company name"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 19 }), onMouseUp: this.showHiddenEdit8 }, "Company name"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("input", { type: 'text', placeholder: 'Company name', className: 'com_input' }),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Company address"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 20 }), onMouseUp: this.showHiddenEdit8 }, "Company address"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("input", { type: 'text', placeholder: 'Company address', className: 'com_input' }),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Since"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 21 }), onMouseUp: this.showHiddenEdit8 }, "DD/MM/YYYY"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("input", { type: 'text', ref: this.dateInput3, placeholder: 'DD/MM/YYYY', onFocus: () => {
                                    if (this.dateInput3.current != null) {
                                        this.dateInput3.current.type = "date";
                                    }
                                }, className: 'com_input' }),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Country of (main) business activity"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 22 }), onMouseUp: this.showHiddenEdit8 }, "Country"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("select", { id: 'selectCountry', className: 'com_input' }, this.state.allCountries.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: key == 0 ? true : false }, item.name)))),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Website"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 23 }), onMouseUp: this.showHiddenEdit8 }, "Google"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("input", { type: 'text', placeholder: 'Website', className: 'com_input' }),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Line of business or industry (NOGA code)"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 24 }), onMouseUp: this.showHiddenEdit8 }, "Code"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("select", { id: 'selectCode3', className: 'com_input' },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Code"),
                                React.createElement("option", { value: "hurr" }, "Durr")),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone' },
                        React.createElement("p", { className: 'each_edit_person' }, "Profession"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 25 }), onMouseUp: this.showHiddenEdit8 }, "Profession"),
                        React.createElement("div", { className: 'hiddenEdit dispNone' },
                            React.createElement("input", { type: 'text', placeholder: this.state.profession, id: 'profession_title_input', className: 'com_input' }),
                            React.createElement("div", { className: 'wrap_action_buttons2' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel"))))),
                    React.createElement("div", { className: 'each_personalEdit whiteFone last_wrap_setts' },
                        React.createElement("p", { className: 'each_edit_person' }, "Function/position"),
                        React.createElement("p", { className: 'each_edit_person indicateChange', onMouseDown: () => this.setState({ count1: 26 }), onMouseUp: this.showHiddenEdit8 }, "Staff"),
                        React.createElement("div", { className: 'hiddenEdit fullScreen specFullScreen dispNone' },
                            React.createElement("div", { className: 'wrap_prof_status' },
                                React.createElement("p", { className: 'each_empl22 choosen_type_blue' },
                                    "Staff ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check43, onChange: this.changeInputColor20, value: 'Staff', className: 'allCheckBoxes5' })),
                                React.createElement("p", { className: 'each_empl22' },
                                    "Lower Management ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check44, onChange: this.changeInputColor21, value: 'Lower Management', className: 'allCheckBoxes5' })),
                                React.createElement("p", { className: 'each_empl22' },
                                    "Middle Management ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check45, onChange: this.changeInputColor22, value: 'Middle Management', className: 'allCheckBoxes5' })),
                                React.createElement("p", { className: 'each_empl22' },
                                    "Upper Management ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check46, onChange: this.changeInputColor23, value: 'Upper Management', className: 'allCheckBoxes5' })),
                                React.createElement("p", { className: 'each_empl22' },
                                    "Board ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check47, onChange: this.changeInputColor24, value: 'Board', className: 'allCheckBoxes5' })),
                                React.createElement("p", { className: 'each_empl22' },
                                    "Executive Board ",
                                    React.createElement("input", { type: 'checkbox', checked: this.state.check48, onChange: this.changeInputColor25, value: 'Executive Board', className: 'allCheckBoxes5' }))),
                            React.createElement("div", { className: 'wrap_action_buttons22' },
                                React.createElement("div", { className: 'action_btns2' },
                                    React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                    React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit8 }, "Cancel")))))))));
    }
}
export default PersonalEdit;
