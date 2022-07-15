import React, { Component } from 'react';
//@ts-ignore
import file from '../../../public/images/file.svg';
//@ts-ignore
import download from '../../../public/images/download.svg';
class DocsEdit extends Component {
    constructor(props) {
        super(props);
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
    }
    render() {
        return (React.createElement("div", { className: 'wrap_contract_docs' },
            React.createElement("div", { className: 'contract' },
                React.createElement("p", { className: 'us_title' }, "Documents"),
                React.createElement("div", { className: 'wrap_docs' },
                    React.createElement("div", { className: 'each_docProfile' },
                        React.createElement("p", { className: 'wrap_border_file' },
                            React.createElement("img", { src: file })),
                        React.createElement("p", { className: 'title_of_doc' }, "Basic Client Contract (02_01_basic_client_contract_Mr_Name_Lastname.pdf)"),
                        React.createElement("img", { src: download, className: 'dispNone' }),
                        React.createElement("p", { className: 'approved' }, "approved")),
                    React.createElement("div", { className: 'each_docProfile' },
                        React.createElement("p", { className: 'wrap_border_file' },
                            React.createElement("img", { src: file })),
                        React.createElement("p", { className: 'title_of_doc' }, "FATCA and AEOI/CRS Self-Certification Individual (04/01_fatca_aia_Mr_Name_Lastname.pdf)"),
                        React.createElement("img", { src: download, className: 'dispNone' }),
                        React.createElement("p", { className: 'approved' }, "approved")),
                    React.createElement("div", { className: 'each_docProfile' },
                        React.createElement("p", { className: 'wrap_border_file' },
                            React.createElement("img", { src: file })),
                        React.createElement("p", { className: 'title_of_doc' }, "Form A - Determination of the Beneficial Owner (05/01_forma_a_Mr_Name_Lastname.pdf)"),
                        React.createElement("img", { src: download, className: 'dispNone' }),
                        React.createElement("p", { className: 'approved' }, "approved"))))));
    }
}
export default DocsEdit;
