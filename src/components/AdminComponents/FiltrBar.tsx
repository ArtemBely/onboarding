import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import circle from '../../../public/images/ci_settings-filled.svg';
//@ts-ignore
import filtrImg from '../../../public/images/ci_filter.svg';
//@ts-ignore
import searchLoop from '../../../public/images/bx_search.svg';
//@ts-ignore
import arrow1 from '../../../public/images/arrow1.svg';

declare global {
    interface Window {
        __INITIAL_DATA__:object;
    }
}

interface iState {

}

class FiltrBar extends Component<{}, iState>{

  private firstBlue = React.createRef<HTMLParagraphElement>();
  private secondBlue = React.createRef<HTMLParagraphElement>();
  private thirdBlue = React.createRef<HTMLParagraphElement>();
  private fourthBlue = React.createRef<HTMLParagraphElement>();
  private fithBlue = React.createRef<HTMLParagraphElement>();
  private sixthBlue = React.createRef<HTMLParagraphElement>();
  private seventhBlue = React.createRef<HTMLParagraphElement>();
  private eigthBlue = React.createRef<HTMLParagraphElement>();

  constructor(props: any, state: iState) {

    super(props, state)

    let user;

    if(typeof window != "undefined") {
      user = window.__INITIAL_DATA__;
    }

    this.state = {
          user
    }

  }

rotateArrow = (e: any) => {
  e.target.classList.toggle('rotateArrow');
}

showBlackFiltrWindow = () => {
  document.querySelectorAll('.wrap_black_filtr')[0].classList.add('dispFlex');
}

hideBlackFiltrWindow = () => {
  document.querySelectorAll('.wrap_black_filtr')[0].classList.remove('dispFlex');
}

showBlackParametrsWindow = () => {
  document.querySelectorAll('.wrap_black_filtr')[1].classList.add('dispFlex');
}

hideBlackParametrWindow = () => {
  document.querySelectorAll('.wrap_black_filtr')[1].classList.remove('dispFlex');
}

changeInputColor = () => {
  this.firstBlue?.current?.classList.contains('blueCheckBox') ?
  this.firstBlue?.current?.classList.remove('blueCheckBox') :
  this.firstBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor2 = () => {
  this.secondBlue?.current?.classList.contains('blueCheckBox') ?
  this.secondBlue?.current?.classList.remove('blueCheckBox') :
  this.secondBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor3 = () => {
  this.thirdBlue?.current?.classList.contains('blueCheckBox') ?
  this.thirdBlue?.current?.classList.remove('blueCheckBox') :
  this.thirdBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor4 = () => {
  this.fourthBlue?.current?.classList.contains('blueCheckBox') ?
  this.fourthBlue?.current?.classList.remove('blueCheckBox') :
  this.fourthBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor5 = () => {
  this.fithBlue?.current?.classList.contains('blueCheckBox') ?
  this.fithBlue?.current?.classList.remove('blueCheckBox') :
  this.fithBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor6 = () => {
  this.sixthBlue?.current?.classList.contains('blueCheckBox') ?
  this.sixthBlue?.current?.classList.remove('blueCheckBox') :
  this.sixthBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor7 = () => {
  this.seventhBlue?.current?.classList.contains('blueCheckBox') ?
  this.seventhBlue?.current?.classList.remove('blueCheckBox') :
  this.seventhBlue?.current?.classList.add('blueCheckBox');
}

changeInputColor8 = () => {
  this.eigthBlue?.current?.classList.contains('blueCheckBox') ?
  this.eigthBlue?.current?.classList.remove('blueCheckBox') :
  this.eigthBlue?.current?.classList.add('blueCheckBox');
}

render() {

			return (
				<div className='wrap_filtrBar'>

          <div className='wrap_black_filtr'>
              <div className='window_filtr'>
                  <p className='txt_filtr' id='txtFilter'>Filter</p>
                  <select id='selectFilter' className='com_input'>
                     <option value="E-mail" disabled selected>E-mail include</option>
                     <option value="hurr">Reg. date include</option>
                     <option value="hurr">Entry date include</option>
                     <option value="hurr">Exit date include</option>
                     <option value="hurr">Status include</option>
                     <option value="hurr">Person name include</option>
                     <option value="hurr">Company name include</option>
                     <option value="hurr">Country include</option>
                  </select>
                  <input type='text' name='name' className='com_input' placeholder='Search'/>
                  <button type='submit' className='saveFilter'>Save</button>
                  <p className='resetFilter' onClick={this.hideBlackFiltrWindow}>Reset</p>
              </div>
          </div>

          <div className='wrap_black_filtr'>
               <div className='window_parametrs'>
                    <p className='txt_filtr' id='txtColumns'>Columns</p>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.firstBlue}>
                            <input type='checkbox' onChange={this.changeInputColor} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Reg. date</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.secondBlue}>
                            <input type='checkbox' onChange={this.changeInputColor2} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Person name</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.thirdBlue}>
                            <input type='checkbox' onChange={this.changeInputColor3} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Company name</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.fourthBlue}>
                            <input type='checkbox' onChange={this.changeInputColor4} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Country</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.fithBlue}>
                            <input type='checkbox' onChange={this.changeInputColor5} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>E-mail</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.sixthBlue}>
                            <input type='checkbox' onChange={this.changeInputColor6} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Verification status</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.seventhBlue}>
                            <input type='checkbox' onChange={this.changeInputColor7} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Approved date / Entry date</p>
                    </div>
                    <div className='wrap_inside_parametrs'>
                        <p className='wrap_main_checkboxFilter' ref={this.eigthBlue}>
                            <input type='checkbox' onChange={this.changeInputColor8} className='main_checkbox'/>
                        </p>
                        <p className='wrap_each_filter_inside'>Exit date</p>
                    </div>

                    <button type='submit' className='saveFilter' id='saveBtn1' onClick={this.hideBlackParametrWindow}>Save</button>
               </div>
          </div>

  					<div className='filtrBar'>
               <div className='filtrSlide'>
                  <p className='us_title'>Clients</p>
                  <p className='wrap_each_filtr'><img src={circle} onClick={this.showBlackParametrsWindow}/></p>
                  <p className='wrap_each_filtr'><img src={filtrImg} onClick={this.showBlackFiltrWindow}/></p>
                  <p className='wrap_search_field'>
                      <img src={searchLoop} id='searchLoop'/>
                      <input type='text' placeholder='Search' className='search_field_input'/>
                  </p>
                </div>
                <div className='filtrArrows'>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Reg. date</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Approved date / Entry date</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Exit date</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>E-mail</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Verification status</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Person name</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Company name</span></p>
                    <p className='wrap_each_arrow'><img src={arrow1} className='each_arrow' onClick={this.rotateArrow}/><span className='txt_filtr'>Country</span></p>
                </div>
                <div>
                  <div className='filtrArrows each_filtrArrows'>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>30.10.2022</p>
                      <p className='each_filtered_person'>30.11.2022</p>
                      <p className='each_filtered_person'>johnsmith@companyname.com</p>
                      <p className='each_filtered_person verif'>Verified</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                  </div>
                  <div className='filtrArrows each_filtrArrows'>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>30.10.2022</p>
                      <p className='each_filtered_person'>30.11.2022</p>
                      <p className='each_filtered_person'>johnsmith@companyname.com</p>
                      <p className='each_filtered_person verif'>Not Verified</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                  </div>
                  <div className='filtrArrows each_filtrArrows'>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>30.10.2022</p>
                      <p className='each_filtered_person'>30.11.2022</p>
                      <p className='each_filtered_person'>johnsmith@companyname.com</p>
                      <p className='each_filtered_person verif'>Client update needs approval</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                      <p className='each_filtered_person'>31 Jun 2022</p>
                  </div>
                </div>
  					</div>
				</div>
			)
		}

}

export default FiltrBar;
