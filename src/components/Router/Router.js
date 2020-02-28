import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from '../../module/Form';
//import List from '../../module/List';
import Edit from '../../module/List';
import App from "../../App";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/form" component={Form} />
          <Route path="/edit/:employeeId" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;