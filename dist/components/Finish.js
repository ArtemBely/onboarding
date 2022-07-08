import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Complete from './Complete';
import CompanySlide from './CompanyComponents/CompanySlide';
function Finish() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        typeof window != "undefined" && window.location.pathname == '/finish' ?
            React.createElement(ShapeSlide, null) :
            React.createElement(CompanySlide, null),
        React.createElement(Complete, null)));
}
export default Finish;
