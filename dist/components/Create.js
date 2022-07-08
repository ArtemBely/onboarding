import React from 'react';
import FirstAccountCheckBox from './FirstAccountCheckBox';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import YourAccount from './YourAccount';
function Create() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        React.createElement(ShapeSlide, null),
        React.createElement(YourAccount, null),
        React.createElement(FirstAccountCheckBox, null)));
}
export default Create;
