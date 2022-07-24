import React from 'react';
import Header from './Header';
import ShapeSlide from './ShapeSlide';
import Assets from './Assets';
import IncomeSlider from './IncomeSlider';
import Fiat from './Fiat';
import { useHistory } from 'react-router-dom';
function Financial() {
    const history = useHistory();
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement("form", { action: '/checkFinancial', method: 'POST', id: 'checkFinancial', onSubmit: (e) => {
                e.preventDefault();
                history.push('/documents');
            } }),
        React.createElement(Header, null),
        React.createElement(ShapeSlide, null),
        React.createElement(Assets, { show: 'show' }),
        React.createElement(IncomeSlider, null),
        React.createElement(Fiat, null)));
}
export default Financial;
