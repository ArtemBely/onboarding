import React, { Component } from 'react';

declare global {
    interface Window {
        __INITIAL_STATE__:object | undefined;
    }
}

interface iState {
  user: object | undefined,
  count1: number,
  check1: boolean,
  check2: boolean,
  check3: boolean,
  check4: boolean,
  check5: boolean,
  check6: boolean,
  check7: boolean,
  check8: boolean,
  check9: boolean,
  check10: boolean,
  check11: boolean,
  check12: boolean,
  check13: boolean,
  check14: boolean,
  check15: boolean,
  check16: boolean,
  check17: boolean,
  check18: boolean,
  check19: boolean,
  check20: boolean,
  check21: boolean,
  check22: boolean,
  check23: boolean,
  check31: boolean,
  check32: boolean,
  check33: boolean,
  check34: boolean,
  check35: boolean,
  check36: boolean,
  check37: boolean,
  check38: boolean,
  check39: boolean,
  check40: boolean,
  check41: boolean,
  check42: boolean,
  check43: boolean,
  check44: boolean,
  check45: boolean,
  check46: boolean,
  check47: boolean,
  check48: boolean,
  profession: string
}

class PersonalEdit extends Component<{}, iState>{

  private us1 = React.createRef<HTMLParagraphElement>();
  private us2 = React.createRef<HTMLParagraphElement>();
  private us3 = React.createRef<HTMLParagraphElement>();
  private firstTitle = React.createRef<HTMLParagraphElement>();
  private secondTitle = React.createRef<HTMLParagraphElement>();
  private thirdTitle = React.createRef<HTMLParagraphElement>();
  private fourthTitle = React.createRef<HTMLParagraphElement>();
  private fiveTitle = React.createRef<HTMLParagraphElement>();
  private sixTitle = React.createRef<HTMLParagraphElement>();
  private sevenTitle = React.createRef<HTMLParagraphElement>();
  private eightTitle = React.createRef<HTMLParagraphElement>();
  private nineTitle = React.createRef<HTMLParagraphElement>();
  private tenTitle = React.createRef<HTMLParagraphElement>();
  private elevenTitle = React.createRef<HTMLParagraphElement>();
  private twelveTitle = React.createRef<HTMLParagraphElement>();
  private thirtheenTitle = React.createRef<HTMLParagraphElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private dateInput2 = React.createRef<HTMLInputElement>();
  private dateInput3 = React.createRef<HTMLInputElement>();
  private dr = React.createRef<HTMLParagraphElement>();
  private dr2 = React.createRef<HTMLParagraphElement>();
  private dr3 = React.createRef<HTMLParagraphElement>();
  private dr4 = React.createRef<HTMLParagraphElement>();
  private dr5 = React.createRef<HTMLParagraphElement>();
  private dr6 = React.createRef<HTMLParagraphElement>();
  private dr7 = React.createRef<HTMLParagraphElement>();
  private firstWhite = React.createRef<HTMLDivElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private secondWhite = React.createRef<HTMLDivElement>();
  private extra_name_input = React.createRef<HTMLInputElement>();
  private prof1 = React.createRef<HTMLParagraphElement>();
  private prof2 = React.createRef<HTMLParagraphElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_STATE__;
    }

    this.state = {
      user,
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
    }

  }

  changeOneTitle = () => {
    this.setState({ check1: true, check2: false, check3: false, check4: false });
    document.querySelectorAll('.each_title_yours').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.firstTitle?.current?.classList.add('choosen_type_blue');
  }

  changeTwoTitle = () => {
    this.setState({ check1: false, check2: true, check3: false, check4: false });
    document.querySelectorAll('.each_title_yours').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.secondTitle?.current?.classList.add('choosen_type_blue');
  }

  changeThreeTitle = () => {
    this.setState({ check1: false, check2: false, check3: true, check4: false });
    document.querySelectorAll('.each_title_yours').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.thirdTitle?.current?.classList.add('choosen_type_blue');
  }

  changeFourthTitle = () => {
    this.setState({ check1: false, check2: false, check3: false, check4: true });
    document.querySelectorAll('.each_title_yours').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.fourthTitle?.current?.classList.add('choosen_type_blue');
  }

  changeFiveTitle = () => {
    this.setState({ check21: true, check22: false, check23: false });
    document.querySelectorAll('.each_title_salut').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.fiveTitle?.current?.classList.add('choosen_type_blue');
  }

  changeSixTitle = () => {
    this.setState({ check21: false, check22: true, check23: false });
    document.querySelectorAll('.each_title_salut').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.sixTitle?.current?.classList.add('choosen_type_blue');
  }

  changeSevenTitle = () => {
    this.setState({ check21: false, check22: false, check23: true });
    document.querySelectorAll('.each_title_salut').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.sevenTitle?.current?.classList.add('choosen_type_blue');
  }

  changeEightTitle = () => {
    this.setState({ check31: true, check32: false, check33: false, check34: false, check35: false, check36: false });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.eightTitle?.current?.classList.add('choosen_type_blue');
  }

  changeNineTitle = () => {
    this.setState({ check31: false, check32: true, check33: false, check34: false, check35: false, check36: false });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.nineTitle?.current?.classList.add('choosen_type_blue');
  }

  changeTenTitle = () => {
    this.setState({ check31: false, check32: false, check33: true, check34: false, check35: false, check36: false });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.tenTitle?.current?.classList.add('choosen_type_blue');
  }

  changeElevenTitle = () => {
    this.setState({ check31: false, check32: false, check33: false, check34: true, check35: false, check36: false });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.elevenTitle?.current?.classList.add('choosen_type_blue');
  }

  changeTwelveTitle = () => {
    this.setState({ check31: false, check32: false, check33: false, check34: false, check35: true, check36: false });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.twelveTitle?.current?.classList.add('choosen_type_blue');
  }

  changeThirtheenTitle = () => {
    this.setState({ check31: false, check32: false, check33: false, check34: false, check35: false, check36: true });
    document.querySelectorAll('.each_title_nation').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.thirtheenTitle?.current?.classList.add('choosen_type_blue');
  }

  changeTitle1 = () => {
    this.setState({ check5: true, check6: false, check7: false });
    document.querySelectorAll('.each_us').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.us1?.current?.classList.add('choosen_type_blue');
  }

  changeTitle2 = () => {
    this.setState({ check5: false, check6: true, check7: false });
    document.querySelectorAll('.each_us').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.us2?.current?.classList.add('choosen_type_blue');
  }

  changeTitle3 = () => {
    this.setState({ check5: false, check6: false, check7: true });
    document.querySelectorAll('.each_us').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    this.us3?.current?.classList.add('choosen_type_blue');
  }

  showHiddenEdit = () => {
    document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
    document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
    document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
    document.querySelectorAll('.hiddenEdit')[0].classList.remove('dispNone');
    this.dr?.current?.classList.add('dispNone');
    document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
    document.querySelectorAll('.each_personalEdit')[0].classList.remove('whiteFone');
  }

  showHiddenEdit2 = () => {
    document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
    document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
    document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
    document.querySelectorAll('.hiddenEdit')[1].classList.remove('dispNone');
    this.dr2?.current?.classList.add('dispNone');
    document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
    document.querySelectorAll('.each_personalEdit')[1].classList.remove('whiteFone');
    document.querySelectorAll('.each_personalEdit')[1].classList.add('extraMarginTop');
  }

  showHiddenEdit3 = () => {
    document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
    document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
    document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
    document.querySelectorAll('.hiddenEdit')[2].classList.remove('dispNone');
    this.dr3?.current?.classList.add('dispNone');
    document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
    document.querySelectorAll('.each_personalEdit')[2].classList.remove('whiteFone');
    document.querySelectorAll('.each_personalEdit')[2].classList.add('extraMarginTop');
  }

  showHiddenEdit4 = () => {
    document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
    document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
    document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
    document.querySelectorAll('.hiddenEdit')[3].classList.remove('dispNone');
    this.dr4?.current?.classList.add('dispNone');
    document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
    document.querySelectorAll('.each_personalEdit')[3].classList.remove('whiteFone');
    document.querySelectorAll('.each_personalEdit')[3].classList.add('extraMarginTop');
  }

  showHiddenEdit5 = () => {
      document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
      document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
      document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
      document.querySelectorAll('.hiddenEdit')[4].classList.remove('dispNone');
      this.dr5?.current?.classList.add('dispNone');
      document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
      document.querySelectorAll('.each_personalEdit')[4].classList.remove('whiteFone');
      document.querySelectorAll('.each_personalEdit')[4].classList.add('extraMarginTop');
  }

  showHiddenEdit6 = () => {
      document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
      document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
      document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
      document.querySelectorAll('.hiddenEdit')[5].classList.remove('dispNone');
      this.dr6?.current?.classList.add('dispNone');
      document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
      document.querySelectorAll('.each_personalEdit')[5].classList.remove('whiteFone');
      document.querySelectorAll('.each_personalEdit')[5].classList.add('extraMarginTop');
  }

  showHiddenEdit7 = () => {
      document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
      document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
      document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
      document.querySelectorAll('.hiddenEdit')[6].classList.remove('dispNone');
      this.dr7?.current?.classList.add('dispNone');
      document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
      document.querySelectorAll('.each_personalEdit')[6].classList.remove('whiteFone');
      document.querySelectorAll('.each_personalEdit')[6].classList.add('extraMarginTop');
  }

  showHiddenEdit8 = () => {
      document.querySelectorAll('.hiddenEdit').forEach(item => ( item.classList.add('dispNone') ));
      document.querySelectorAll('.each_personalEdit').forEach(item => ( item.classList.remove('extraMarginTop') ));
      document.querySelectorAll('.indicateChange').forEach(item => ( item.classList.remove('dispNone') ));
      document.querySelectorAll('.hiddenEdit')[this.state.count1].classList.remove('dispNone');
      document.querySelectorAll('.indicateChange')[this.state.count1].classList.add('dispNone');
      document.querySelectorAll('.each_personalEdit').forEach(item => ( !item.classList.contains('whiteFone') ? item.classList.add('whiteFone') : null));
      document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.remove('whiteFone');
      document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.add('extraMarginTop');
  }

  hideEmailEdit = () => {
    document.querySelectorAll('.hiddenEdit')[0].classList.add('dispNone');
    this.dr?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[0].classList.add('whiteFone');
  }

  hideEmailEdit2 = () => {
    document.querySelectorAll('.hiddenEdit')[1].classList.add('dispNone');
    this.dr2?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[1].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[1].classList.remove('extraMarginTop');
  }

  hideEmailEdit3 = () => {
    document.querySelectorAll('.hiddenEdit')[2].classList.add('dispNone');
    this.dr3?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[2].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[2].classList.remove('extraMarginTop');
  }

  hideEmailEdit4 = () => {
    document.querySelectorAll('.hiddenEdit')[3].classList.add('dispNone');
    this.dr4?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[3].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[3].classList.remove('extraMarginTop');
  }

  hideEmailEdit5 = () => {
    document.querySelectorAll('.hiddenEdit')[4].classList.add('dispNone');
    this.dr5?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[4].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[4].classList.remove('extraMarginTop');
  }

  hideEmailEdit6 = () => {
    document.querySelectorAll('.hiddenEdit')[5].classList.add('dispNone');
    this.dr6?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[5].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[5].classList.remove('extraMarginTop');
  }

  hideEmailEdit7 = () => {
    document.querySelectorAll('.hiddenEdit')[6].classList.add('dispNone');
    this.dr7?.current?.classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[6].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[6].classList.remove('extraMarginTop');
  }

  hideEmailEdit8 = () => {
    document.querySelectorAll('.hiddenEdit')[this.state.count1].classList.add('dispNone');
    document.querySelectorAll('.indicateChange')[this.state.count1].classList.remove('dispNone');
    document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.add('whiteFone');
    document.querySelectorAll('.each_personalEdit')[this.state.count1].classList.remove('extraMarginTop');
  }

  changeFirstWhite = () => {
    this.firstWhite?.current?.classList.remove('blue_each_white_per');
    this.secondWhite?.current?.classList.add('blue_each_white_per');
    document.querySelectorAll('.green_text').forEach(item => (
      item.classList.add('dispNone')
    ));
    document.querySelectorAll('.extra_name').forEach(item => (
      item.classList.remove('dispNone')
    ));
    this.extra_name_input?.current?.classList.remove('dispNone');
  }

  changeSecondWhite = () => {
    this.secondWhite?.current?.classList.remove('blue_each_white_per');
    this.firstWhite?.current?.classList.add('blue_each_white_per');
    document.querySelectorAll('.green_text').forEach(item => (
      item.classList.remove('dispNone')
    ));
    document.querySelectorAll('.extra_name').forEach(item => (
      item.classList.add('dispNone')
    ));
    this.extra_name_input?.current?.classList.add('dispNone');
  }

  changeInputColor = () => {
    this.setState({ check1: true, check2: false, check3: false, check4: false, check5: false, check6: false });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[0].classList.add('choosen_type_blue');
    document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
    document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Function/position';
    this.setState({ profession: "Profession" });
  }

  changeInputColor2 = () => {
    this.setState({ check1: false, check2: true, check3: false, check4: false, check5: false, check6: false });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[1].classList.add('choosen_type_blue');
    document.querySelectorAll('.extraInfo')[0].classList.remove('dispNone');
    document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Function/position';
    this.setState({ profession: "Profession" });
  }

  changeInputColor3 = () => {
    this.setState({ check1: false, check2: false, check3: true, check4: false, check5: false, check6: false });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[2].classList.add('choosen_type_blue');
    document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
    document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Last profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Last function/position';
    this.setState({ profession: "Last profession" });
  }

  changeInputColor4 = () => {
    this.setState({ check1: false, check2: false, check3: false, check4: true, check5: false, check6: false });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[3].classList.add('choosen_type_blue');
    document.querySelectorAll('.extraInfo')[0].classList.add('dispNone');
    document.querySelectorAll('.main_info')[0].classList.remove('dispNone');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Last profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Last function/position';
    this.setState({ profession: "Last profession" });
  }

  changeInputColor5 = () => {
    this.setState({ check1: false, check2: false, check3: false, check4: false, check5: true, check6: false });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.remove('dispNone');
    document.querySelectorAll('.main_info')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[4].classList.add('choosen_type_blue');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Function/position';
    this.setState({ profession: "Profession" });
  }

  changeInputColor6 = () => {
    this.setState({ check1: false, check2: false, check3: false, check4: false, check5: false, check6: true });
    document.querySelectorAll('.each_empl').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.for_student')[0].classList.add('dispNone');
    document.querySelectorAll('.each_empl')[5].classList.add('choosen_type_blue');
    document.querySelectorAll('.main_info')[0].classList.add('dispNone');
    const element: HTMLElement = document.getElementById('profession_title') as HTMLElement
    element.innerHTML = 'Profession';
    const element2: HTMLElement = document.getElementById('last_func') as HTMLElement
    element2.innerHTML = 'Function/position';
    this.setState({ profession: "Profession" });
  }

  changeInputColor7 = () => {
    this.setState({ check14: true, check8: false, check9: false, check10: false, check11: false, check12: false });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[0].classList.add('choosen_type_blue');
  }

  changeInputColor8 = () => {
    this.setState({ check7: false, check8: true, check9: false, check10: false, check11: false, check12: false });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[1].classList.add('choosen_type_blue');
  }

  changeInputColor9 = () => {
    this.setState({ check7: false, check8: false, check9: true, check10: false, check11: false, check12: false });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[2].classList.add('choosen_type_blue');
  }

  changeInputColor10 = () => {
    this.setState({ check7: false, check8: false, check9: false, check10: true, check11: false, check12: false });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[3].classList.add('choosen_type_blue');
  }

  changeInputColor11 = () => {
    this.setState({ check7: false, check8: false, check9: false, check10: false, check11: true, check12: false });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[4].classList.add('choosen_type_blue');
  }

  changeInputColor12 = () => {
    this.setState({ check7: false, check8: false, check9: false, check10: false, check11: false, check12: true });
    document.querySelectorAll('.each_empl2').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl2')[5].classList.add('choosen_type_blue');
  }

  changeInputColor13 = () => {
    this.setState({ check13: true, check14: false, check15: false});
    document.querySelectorAll('.each_empl3').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl3')[0].classList.add('choosen_type_blue');
  }

  changeInputColor14 = () => {
    this.setState({ check13: false, check14: true, check15: false});
    document.querySelectorAll('.each_empl3').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl3')[1].classList.add('choosen_type_blue');
  }

  changeInputColor15 = () => {
    this.setState({ check13: false, check14: false, check15: true});
    document.querySelectorAll('.each_empl3').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl3')[2].classList.add('choosen_type_blue');
  }

  changeInputColor16 = () => {
    this.setState({ check16: true, check17: false, check18: false, check19: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[0].classList.add('choosen_type_blue');
  }

  changeInputColor17 = () => {
    this.setState({ check16: false, check17: true, check18: false, check19: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[1].classList.add('choosen_type_blue');
  }

  changeInputColor18 = () => {
    this.setState({ check16: false, check17: false, check18: true, check19: false});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[2].classList.add('choosen_type_blue');
  }

  changeInputColor19 = () => {
    this.setState({ check16: false, check17: false, check18: false, check19: true});
    document.querySelectorAll('.each_empl4').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl4')[3].classList.add('choosen_type_blue');
  }

  changeInputColor20 = () => {
    this.setState({ check43: true, check44: false, check45: false, check46: false, check47: false, check48: false });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[0].classList.add('choosen_type_blue');
  }

  changeInputColor21 = () => {
    this.setState({ check43: false, check44: true, check45: false, check46: false, check47: false, check48: false });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[1].classList.add('choosen_type_blue');
  }

  changeInputColor22 = () => {
    this.setState({ check43: false, check44: false, check45: true, check46: false, check47: false, check48: false });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[2].classList.add('choosen_type_blue');
  }

  changeInputColor23 = () => {
    this.setState({ check43: false, check44: false, check45: false, check46: true, check47: false, check48: false });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[3].classList.add('choosen_type_blue');
  }

  changeInputColor24 = () => {
    this.setState({ check43: false, check44: false, check45: false, check46: false, check47: true, check48: false });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[4].classList.add('choosen_type_blue');
  }

  changeInputColor25 = () => {
    this.setState({ check43: false, check44: false, check45: false, check46: false, check47: false, check48: true });
    document.querySelectorAll('.each_empl22').forEach(item => (
      item.classList.remove('choosen_type_blue')
    ));
    document.querySelectorAll('.each_empl22')[5].classList.add('choosen_type_blue');
  }

  changeInputColor222 = () => {
    this.secondBlue?.current?.classList.contains('blueCheckBox') ?
    this.secondBlue?.current?.classList.remove('blueCheckBox') :
    this.secondBlue?.current?.classList.add('blueCheckBox');
  }




render() {

			return (
        <div className='wrap_personalEdit'>
            <div className='personalEdit'>

                  <p className='us_title personal_det_title'>Personal details</p>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Title</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit} ref={this.dr}>Dr</p>
                        <div className='hiddenEdit dispNone'>
                            <div className='wrap_title_yours'>
                               <p className='each_title_yours choosen_type_blue' ref={this.firstTitle}>None <input type='checkbox' checked={this.state.check1} value="None" onChange={this.changeOneTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_yours' ref={this.secondTitle}>Prof. <input type='checkbox' checked={this.state.check2} value="Prof." onChange={this.changeTwoTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_yours' ref={this.thirdTitle}>Dr. <input type='checkbox' checked={this.state.check3} value="Dr." onChange={this.changeThreeTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_yours' ref={this.fourthTitle}>PhD <input type='checkbox' checked={this.state.check4} value="PhD" onChange={this.changeFourthTitle} className='allCheckBoxes'/></p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Salutation</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit2} ref={this.dr2}>Mrs</p>
                        <div className='hiddenEdit dispNone'>
                            <div className='wrap_title_yours'>
                                <p className='each_title_salut choosen_type_blue' ref={this.fiveTitle}>Mr<input type='checkbox' checked={this.state.check21} value="Mr" onChange={this.changeFiveTitle} className='allCheckBoxes2'/></p>
                                <p className='each_title_salut' ref={this.sixTitle}>Mrs<input type='checkbox' checked={this.state.check22} value="Mrs" onChange={this.changeSixTitle} className='allCheckBoxes2'/></p>
                                <p className='each_title_salut' ref={this.sevenTitle}>Ms<input type='checkbox' checked={this.state.check23} value="Ms" onChange={this.changeSevenTitle} className='allCheckBoxes2'/></p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit2}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Given names as per passport/ identification document</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit3} ref={this.dr3}>Klode</p>
                        <div className='hiddenEdit dispNone'>
                            <input type='text' name='name' className='com_input' placeholder='Name'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit3}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Last name</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit4} ref={this.dr4}>Jan</p>
                        <div className='hiddenEdit dispNone'>
                            <input type='text' name='lastname' className='com_input' placeholder='Last name'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit4}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Date of birth</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit5} ref={this.dr5}>14. 05. 1996</p>
                        <div className='hiddenEdit dispNone'>
                        <input type='text' ref={this.dateInput} placeholder='DD/MM/YYYY' onFocus={() => {
                          if(this.dateInput.current != null) {
                            this.dateInput.current.type = "date";
                          }
                        }} className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit5}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Country of origin (Nationality)</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit6} ref={this.dr6}>Dominicana</p>
                        <div className='hiddenEdit dispNone'>
                            <select id='selectCountry' className='com_input'>
                               <option value="" disabled selected>Country</option>
                               <option value="hurr">Durr</option>
                            </select>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit6}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Please enter how many other nationalities you have</p>
                        <p className='each_edit_person indicateChange' onClick={this.showHiddenEdit7} ref={this.dr7}>1</p>

                        <div className='hiddenEdit dispNone'>
                            <div className='wrap_title_nation'>
                               <p className='each_title_nation choosen_type_blue' ref={this.eightTitle}>0 <input type='checkbox' checked={this.state.check31} value="0" onChange={this.changeEightTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_nation' ref={this.nineTitle}>1 <input type='checkbox' checked={this.state.check32} value="1" onChange={this.changeNineTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_nation' ref={this.tenTitle}>2 <input type='checkbox' checked={this.state.check33} value="2" onChange={this.changeTenTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_nation' ref={this.elevenTitle}>3 <input type='checkbox' checked={this.state.check34} value="3" onChange={this.changeElevenTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_nation' ref={this.twelveTitle}>4 <input type='checkbox' checked={this.state.check35} value="4" onChange={this.changeTwelveTitle} className='allCheckBoxes'/></p>
                               <p className='each_title_nation' ref={this.thirtheenTitle}>5 <input type='checkbox' checked={this.state.check36} value="5" onChange={this.changeThirtheenTitle} className='allCheckBoxes'/></p>
                            </div>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit7}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>US person</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 7 })}
                        onMouseUp={this.showHiddenEdit8}>No US person</p>

                        <div className='hiddenEdit fullScreen dispNone'>
                          <div className='choose_us'>
                              <p className='each_us choosen_type_blue' ref={this.us1}>No US person <input type='checkbox' checked={this.state.check5} value="No US person" onChange={this.changeTitle1} className='allCheckBoxes3'/></p>
                              <p className='each_us' ref={this.us2}>Former US person<input type='checkbox' checked={this.state.check6} value="Former US person" onChange={this.changeTitle2} className='allCheckBoxes3'/></p>
                              <p className='each_us' ref={this.us3}>US person<input type='checkbox' checked={this.state.check7} value="US person" onChange={this.changeTitle3} className='allCheckBoxes3'/></p>
                          </div>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>

                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>PEP person </p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 8 })}
                        onMouseUp={this.showHiddenEdit8}>I declare that I am not and I was never qualified as a politically exposed person (PEP), or a family member or close associate of a PEP</p>

                        <div className='hiddenEdit fullScreen dispNone'>
                        <div className='wrap_each_per'>
                            <div className='each_white_per blue_each_white_per' ref={this.firstWhite} onClick={this.changeSecondWhite}>
                                I declare that I am not and I was never qualified as a politically
                                 exposed person (PEP), or a family member or close associate of a PEP
                            </div>
                            <div className='each_white_per' ref={this.secondWhite} onClick={this.changeFirstWhite}>
                                I declare that I am a politically exposed person or a family member or
                                close associate of a politically exposed person: indicate the executed
                                function or the name/function of the affiliated person.
                            </div>
                            <p className='green_text' id='politicalPerson'>Politically exposed persons in terms of the Swiss Anti-Money Laundering Act are:
                             individuals who are or have been entrusted with prominent public functions by a foreign country,
                             such as heads of state or of government, senior politicians at national level, members of the board
                             or individuals who have been entrusted with equivalent functions, (PEP in international organizations).
                            </p>
                            <p className='green_text'>International sports associations are the International Olympic Committee and the non-governmental
                             organizations it recognizes that regulate one or more official sports at global level.
                            </p>
                            <p className='green_text'>The family members and close associates of PEP are individuals who are closely connected to persons
                             who qualify as PEP, either through their family or for social or professional reasons.
                            </p>

                            <p className='extra_name dispNone'>Name/Function</p>
                            <input type='text' placeholder='Name/Function' ref={this.extra_name_input} className='extra_name_input dispNone' />
                        </div>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>

                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Alternative e-mail address for correspondence with PI Digital</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 9 })}
                        onMouseUp={this.showHiddenEdit8}>email</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='email' placeholder='Alternative Email' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Phone (prepend country code)</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 10 })}
                        onMouseUp={this.showHiddenEdit8}>Phone</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='tel' placeholder='Phone' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <p className='us_title personal_det_title'>Domicile address</p>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Street, No.</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 11 })}
                        onMouseUp={this.showHiddenEdit8}>Street, No.</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Street, No.' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>City/State</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 12 })}
                        onMouseUp={this.showHiddenEdit8}>City/State</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='City/State.' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Mailbox</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 13 })}
                        onMouseUp={this.showHiddenEdit8}>Mailbox</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='email' placeholder='Email' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Country of residence</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 14 })}
                        onMouseUp={this.showHiddenEdit8}>Country of residence</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Country of residence' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Postal code</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 15 })}
                        onMouseUp={this.showHiddenEdit8}>Postal code</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Postal code' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Сorrespondence address</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 16 })}
                        onMouseUp={this.showHiddenEdit8}>Сorrespondence address</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Сorrespondence address' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <p className='us_title personal_det_title'>Сorrespondence address</p>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Сorrespondence address</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 17 })}
                        onMouseUp={this.showHiddenEdit8}>Same as domicile address</p>

                        <div className='hiddenEdit dispNone'>
                            <p className='corr_text'>Same as domicile address</p>
                            <p className='wrap_main_checkbox32' ref={this.secondBlue}>
                                <input type='checkbox' onChange={this.changeInputColor222} className='main_checkbox'/>
                            </p>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                <div style={{ display: this.state.user && Object.values(this.state.user)[0] == 'admin' ? 'none' : 'block' }}>
                  <p className='us_title personal_det_title'>Employment status</p>

                  <div className='each_personalEdit'>
                        <p className='each_edit_person'>Business activity</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 18 })}
                        onMouseUp={this.showHiddenEdit8}>Employed</p>

                        <div className='hiddenEdit fullScreen dispNone'>
                            <div className='wrap_empl_status'>
                                <p className='each_empl choosen_type_blue'>Employed <input type='checkbox' checked={this.state.check8} onChange={this.changeInputColor} value='Employed' className='allCheckBoxes4'/></p>
                                <p className='each_empl'>Self-Employed <input type='checkbox' checked={this.state.check9} onChange={this.changeInputColor2} value='Self-Employed' className='allCheckBoxes4'/></p>
                                <p className='each_empl'>Retired (Pensioner) <input type='checkbox' checked={this.state.check10} onChange={this.changeInputColor3} value='Retired (Pensioner)' className='allCheckBoxes4'/></p>
                                <p className='each_empl'>Unemployed <input type='checkbox' checked={this.state.check11} onChange={this.changeInputColor4} value='Unemployed' className='allCheckBoxes4'/></p>
                                <p className='each_empl'>Student <input type='checkbox' checked={this.state.check12} onChange={this.changeInputColor5} value='Student' className='allCheckBoxes4'/></p>
                                <p className='each_empl'>Not Working <input type='checkbox' checked={this.state.check13} onChange={this.changeInputColor6} value='Not Working' className='allCheckBoxes4'/></p>
                            </div>
                            <div className='for_student dispNone' id='forStudent'>
                                <p className='title_salut' id='student_title'>University</p>
                                <input type='text' placeholder='University' className='alternative_inputs long_input'/>

                                <p className='title_salut'>Faculty/course</p>
                                <input type='text' placeholder='Faculty/course'  className='alternative_inputs long_input'/>
                            </div>

                            <div className='main_info personal_main_info' id='mainInfo'>
                                   <p className='title_salut'>Company name</p>
                                   <p className='title_salut'>Company address</p>
                                   <input type='text' placeholder='Company name' className='alternative_inputs'/>
                                   <input type='text' placeholder='Company address' className='alternative_inputs'/>
                                   <p className='title_salut'>Since</p>
                                   <p className='title_salut'>Country of (main) business activity</p>
                                   <input type='text' ref={this.dateInput2} placeholder='DD/MM/YYYY' onFocus={() => {
                                     if(this.dateInput2.current != null) {
                                       this.dateInput2.current.type = "date";
                                     }
                                   }} className='com_input'/>
                                   <select id='selectCountry' className='com_input'>
                                      <option value="" disabled selected>Country</option>
                                      <option value="hurr">Durr</option>
                                   </select>
                                   <p className='title_salut' id='tit_website'>Website</p>
                                   <input type='text' placeholder='Website' className='alternative_inputs' id='website'/>
                                   <p className='title_salut'>Line of business or industry (NOGA code)</p>
                                   <select id='selectCode' className='com_input'>
                                      <option value="" disabled selected>Code</option>
                                      <option value="hurr">Durr</option>
                                   </select>

                                   <p className='title_salut' id='profession_title' ref={this.prof1}>Profession</p>
                                   <input type='text' placeholder={this.state.profession} id='profession_title_input' className='alternative_inputs long_input'/>

                                   <p className='title_salut' id='last_func' ref={this.prof2}>Function/position</p>
                                   <div className='wrap_prof_status'>
                                       <p className='each_empl2 choosen_type_blue'>Staff <input type='checkbox' checked={this.state.check14} onChange={this.changeInputColor7} value='Staff' className='allCheckBoxes5'/></p>
                                       <p className='each_empl2'>Lower Management <input type='checkbox' checked={this.state.check15} onChange={this.changeInputColor8} value='Lower Management' className='allCheckBoxes5'/></p>
                                       <p className='each_empl2'>Middle Management <input type='checkbox' checked={this.state.check16} onChange={this.changeInputColor9} value='Middle Management' className='allCheckBoxes5'/></p>
                                       <p className='each_empl2'>Upper Management <input type='checkbox' checked={this.state.check17} onChange={this.changeInputColor10} value='Upper Management' className='allCheckBoxes5'/></p>
                                       <p className='each_empl2'>Board <input type='checkbox' checked={this.state.check18} onChange={this.changeInputColor11} value='Board' className='allCheckBoxes5'/></p>
                                       <p className='each_empl2'>Executive Board <input type='checkbox' checked={this.state.check19} onChange={this.changeInputColor12} value='Executive Board' className='allCheckBoxes5'/></p>
                                   </div>

                                   <div className='extraInfo dispNone'>
                                       <p className='title_salut' id='employ_title'>Employees of the company</p>
                                       <div className='wrap_comp_status'>
                                           <p className='each_empl3 choosen_type_blue'>1 - 25 <input type='checkbox' checked={this.state.check20} onChange={this.changeInputColor13} value='1 - 25' className='allCheckBoxes6'/></p>
                                           <p className='each_empl3'>25 - 100 <input type='checkbox' checked={this.state.check37} onChange={this.changeInputColor14} value='25 - 100' className='allCheckBoxes6'/></p>
                                           <p className='each_empl3'> {`> 100`} <input type='checkbox' checked={this.state.check38} onChange={this.changeInputColor15} value='> 100' className='allCheckBoxes6'/></p>
                                       </div>

                                       <p className='title_salut' id='turnover'>Company turnover</p>
                                       <div className='wrap_turn_status'>
                                           <p className='each_empl4'>{`< CHF 5 m`}<input type='checkbox' checked={this.state.check39} onChange={this.changeInputColor16} value='< CHF 5 m' className='allCheckBoxes7'/></p>
                                           <p className='each_empl4'>CHF 5 m - CHF 5 m <input type='checkbox' checked={this.state.check40} onChange={this.changeInputColor17} value='CHF 5 m - CHF 5 m' className='allCheckBoxes7'/></p>
                                           <p className='each_empl4 choosen_type_blue'>CHF 10 m - CHF 25 m <input type='checkbox' checked={this.state.check41} onChange={this.changeInputColor18} value='CHF 10 m - CHF 25 m' className='allCheckBoxes7'/></p>
                                           <p className='each_empl4'> {`> CHF 25 m`} <input type='checkbox' checked={this.state.check42} onChange={this.changeInputColor19} value='> CHF 25 m' className='allCheckBoxes7'/></p>
                                       </div>
                                   </div>
                            </div>


                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Company name</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 19 })}
                        onMouseUp={this.showHiddenEdit8}>Company name</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Company name' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Company address</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 20 })}
                        onMouseUp={this.showHiddenEdit8}>Company address</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Company address' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Since</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 21 })}
                        onMouseUp={this.showHiddenEdit8}>DD/MM/YYYY</p>
                        <div className='hiddenEdit dispNone'>
                        <input type='text' ref={this.dateInput3} placeholder='DD/MM/YYYY' onFocus={() => {
                          if(this.dateInput3.current != null) {
                            this.dateInput3.current.type = "date";
                          }
                        }} className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Country of (main) business activity</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 22 })}
                        onMouseUp={this.showHiddenEdit8}>Country</p>

                        <div className='hiddenEdit dispNone'>
                            <select id='selectCountry' className='com_input'>
                               <option value="" disabled selected>Country</option>
                               <option value="hurr">Durr</option>
                            </select>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Website</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 23 })}
                        onMouseUp={this.showHiddenEdit8}>Google</p>

                        <div className='hiddenEdit dispNone'>
                            <input type='text' placeholder='Website' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Line of business or industry (NOGA code)</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 24 })}
                        onMouseUp={this.showHiddenEdit8}>Code</p>

                        <div className='hiddenEdit dispNone'>
                            <select id='selectCode3' className='com_input'>
                               <option value="" disabled selected>Code</option>
                               <option value="hurr">Durr</option>
                            </select>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>

                  <div className='each_personalEdit whiteFone'>
                        <p className='each_edit_person'>Profession</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 25 })}
                        onMouseUp={this.showHiddenEdit8}>Profession</p>

                        <div className='hiddenEdit dispNone'>
                        <input type='text' placeholder={this.state.profession} id='profession_title_input' className='com_input'/>
                            <div className='wrap_action_buttons2'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>
                  </div>
                  <div className='each_personalEdit whiteFone last_wrap_setts'>
                        <p className='each_edit_person'>Function/position</p>
                        <p className='each_edit_person indicateChange' onMouseDown={() => this.setState({ count1: 26 })}
                        onMouseUp={this.showHiddenEdit8}>Staff</p>

                        <div className='hiddenEdit fullScreen dispNone'>
                            <div className='wrap_prof_status'>
                                <p className='each_empl22 choosen_type_blue'>Staff <input type='checkbox' checked={this.state.check43} onChange={this.changeInputColor20} value='Staff' className='allCheckBoxes5'/></p>
                                <p className='each_empl22'>Lower Management <input type='checkbox' checked={this.state.check44} onChange={this.changeInputColor21} value='Lower Management' className='allCheckBoxes5'/></p>
                                <p className='each_empl22'>Middle Management <input type='checkbox' checked={this.state.check45} onChange={this.changeInputColor22} value='Middle Management' className='allCheckBoxes5'/></p>
                                <p className='each_empl22'>Upper Management <input type='checkbox' checked={this.state.check46} onChange={this.changeInputColor23} value='Upper Management' className='allCheckBoxes5'/></p>
                                <p className='each_empl22'>Board <input type='checkbox' checked={this.state.check47} onChange={this.changeInputColor24} value='Board' className='allCheckBoxes5'/></p>
                                <p className='each_empl22'>Executive Board <input type='checkbox' checked={this.state.check48} onChange={this.changeInputColor25} value='Executive Board' className='allCheckBoxes5'/></p>
                            </div>
                            <div className='wrap_action_buttons22'>
                                 <div className='action_btns2'>
                                     <button type='submit' id='sub_save'>Save</button>
                                     <p className='cancel_btn' onClick={this.hideEmailEdit8}>Cancel</p>
                                 </div>
                            </div>
                        </div>

                  </div>
                  </div>
            </div>
        </div>
			)
		}

}

export default PersonalEdit;
