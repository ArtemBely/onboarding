import React from 'react';
import Alternative from './Alternative';
import FirstPartForm from './FirstPartForm';
import Header from './Header';
import PERPerson from './PERPerson';
import ShapeSlide from './ShapeSlide';
import USPerson from './USPerson';
import Correspondence from './Correspondence';
import Employment from './Employment';
function Personal() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        React.createElement(ShapeSlide, null),
        React.createElement(FirstPartForm, null),
        React.createElement(USPerson, null),
        React.createElement(PERPerson, null),
        React.createElement(Alternative, null),
        React.createElement(Correspondence, null),
        React.createElement(Employment, null)));
}
export default Personal;
