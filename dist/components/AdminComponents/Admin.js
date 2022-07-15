import React from 'react';
import Header from '../Header';
import FiltrBar from './FiltrBar';
function Admin() {
    return (React.createElement("p", { className: 'wrap_components' },
        React.createElement(Header, null),
        React.createElement(FiltrBar, null)));
}
export default Admin;
