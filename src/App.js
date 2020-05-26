import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import InstructorsComponent from "./Components/instructors.component";
import BisiComponent from "./Components/bisi.component";
import HomeComponent from "./Components/home.component";

function App() {
  return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/instructors" component={InstructorsComponent}/>
              <Route exact path="/bisi" component={BisiComponent}/>
              <Route exact path="/" component={HomeComponent}/>
            </Switch>
          </Router>

        </Provider>
      </React.Fragment>
  );
}

export default App;
