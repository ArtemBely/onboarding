import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Assets from './Assets';
import IncomeSlider from './IncomeSlider';
import Fiat from './Fiat';
function Financial() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        React.createElement(ShapeSlide, null),
        React.createElement(Assets, { show: 'show' }),
        React.createElement(IncomeSlider, null),
        React.createElement(Fiat, null)));
}
export default Financial;
