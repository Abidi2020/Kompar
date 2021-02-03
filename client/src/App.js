import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import store from "./store";
import { loadUser } from "./actions/auth";

import "./style/css/style.css";
import Landing from "./component/layouts/Landing";
import ButtonAppBar from './component/layouts/AppBarMenu' 
import { ButtonGroup } from "@material-ui/core";
import Form from "./component/Form";
import Offer from "./component/Offer";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ButtonAppBar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/add-form" component={Form} />
            <Route exact path="/offer/:id" component={Offer} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
