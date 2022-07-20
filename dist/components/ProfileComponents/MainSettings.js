import React, { Component } from 'react';
//@ts-ignore
import eye from '../../../images/eye.svg';
class MainSettings extends Component {
    constructor(props) {
        super(props);
        this.passTop = React.createRef();
        this.hideStars = React.createRef();
        this.hideStarsInp = React.createRef();
        this.showEmailEdit = () => {
            document.querySelectorAll('.wrap_edit_email')[0].classList.remove('dispNone');
        };
        this.hideEmailEdit = () => {
            document.querySelectorAll('.wrap_edit_email')[0].classList.add('dispNone');
        };
        this.showPassEdit = () => {
            var _a, _b, _c, _d, _e, _f;
            document.querySelectorAll('.wrap_edit_pass')[0].classList.remove('dispNone');
            (_b = (_a = this.passTop) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.add('pass_top');
            (_d = (_c = this.hideStars) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.add('dispNone');
            (_f = (_e = this.hideStarsInp) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.remove('dispNone');
        };
        this.hidePassEdit = () => {
            var _a, _b, _c, _d, _e, _f;
            document.querySelectorAll('.wrap_edit_pass')[0].classList.add('dispNone');
            (_b = (_a = this.passTop) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.classList.remove('pass_top');
            (_d = (_c = this.hideStars) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.classList.remove('dispNone');
            (_f = (_e = this.hideStarsInp) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.classList.add('dispNone');
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
        return (React.createElement("div", { className: 'wrap_mainSettings' },
            React.createElement("div", { className: 'mainSettings' },
                React.createElement("p", { className: 'us_title' }, "Account"),
                React.createElement("div", { className: 'wrap_setts' },
                    React.createElement("p", { className: 'title_of_doc each_title_set', id: 'email_txt' }, "E-mail"),
                    React.createElement("p", { className: 'title_of_doc each_set', onClick: this.showEmailEdit }, "belyshevartem@mail.space"),
                    React.createElement("div", { className: 'wrap_edit_email dispNone' },
                        React.createElement("p", { className: 'title_of_doc each_title_set' }, "New E-mail"),
                        React.createElement("input", { type: 'email', placeholder: 'belyshevartem@mail.space', id: 'email_inp', className: 'edit_inputs' }),
                        React.createElement("p", { className: 'title_of_doc each_set', id: 'curr_edit_pass' }, "Current password"),
                        React.createElement("p", null,
                            React.createElement("input", { type: 'password', placeholder: '********', id: 'pass_inp', className: 'edit_inputs' }),
                            React.createElement("img", { src: eye, className: 'eyes2' })),
                        React.createElement("p", { className: 'forgot_pass' }, "Forgot your password?"),
                        React.createElement("div", { className: 'wrap_action_buttons' },
                            React.createElement("div", { className: 'action_btns' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hideEmailEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_setts', ref: this.passTop },
                    React.createElement("p", { className: 'title_of_doc each_title_set' }, "Password"),
                    React.createElement("p", { className: 'title_of_doc each_set', onClick: this.showPassEdit, ref: this.hideStars }, "*******"),
                    React.createElement("input", { type: 'text', placeholder: '********', id: 'old_pass', ref: this.hideStarsInp, className: 'edit_inputs dispNone' }),
                    React.createElement("div", { className: 'wrap_edit_pass dispNone' },
                        React.createElement("p", { className: 'title_of_doc each_title_set', id: 'curr_pass2' }, "Current password"),
                        React.createElement("p", { className: 'grig_gap_p' },
                            React.createElement("input", { type: 'password', placeholder: '********', id: 'email_inp', className: 'edit_inputs' }),
                            React.createElement("img", { src: eye, id: 'high_pass_eye', className: 'eyes2' })),
                        React.createElement("p", { className: 'title_of_doc each_set', id: 'curr_edit_pass' }, "Confirm password"),
                        React.createElement("p", null,
                            React.createElement("input", { type: 'password', placeholder: '********', id: 'pass_inp', className: 'edit_inputs' }),
                            React.createElement("img", { src: eye, className: 'eyes2' })),
                        React.createElement("p", { className: 'forgot_pass forgot_pass2' }, "Forgot your password?"),
                        React.createElement("div", { className: 'wrap_action_buttons' },
                            React.createElement("div", { className: 'action_btns' },
                                React.createElement("button", { type: 'submit', id: 'sub_save' }, "Save"),
                                React.createElement("p", { className: 'cancel_btn', onClick: this.hidePassEdit }, "Cancel"))))),
                React.createElement("div", { className: 'wrap_setts last_wrap_setts' },
                    React.createElement("p", { className: 'title_of_doc each_title_set' }, "Account"),
                    React.createElement("p", { className: 'title_of_doc each_set' }, "An individual")))));
    }
}
export default MainSettings;
