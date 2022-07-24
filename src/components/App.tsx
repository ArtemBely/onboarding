import React, { Component, forwardRef } from 'react';
import  { Switch, Route } from 'react-router-dom';
import routes from './routes';
import '../../public/styles/style1.css';
import '../../public/styles/style2.css';
import '../../public/styles/style3.css';
import '../../public/styles/style4.css';
import '../../public/styles/style5.css';
import '../../public/styles/style6.css';
import '../../public/styles/style7.css';
import '../../public/styles/style8.css';
import '../../public/styles/style9.css';
import '../../public/styles/style10.css';
import '../../public/styles/planchet1.css';
import '../../public/styles/planchet2.css';
import '../../public/styles/phone1.css';
import '../../public/styles/phone2.css';
import '../../public/styles/phone3.css';
import '../../public/styles/phone4.css';
import '../../public/styles/phone5.css';
import { MainHiddenInputsForRegistration } from './MainHiddenInputsForRegistration';

export class App extends Component<any> {

  render() {
    return (
      <div className='main_wrap'>
          <MainHiddenInputsForRegistration />
          <Switch>
            {routes.map((route:any, i:number) => (
              <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
              />
            ))}
          </Switch>
      </div>
    )
  }
}
