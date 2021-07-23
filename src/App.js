import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/users/page/:currentPage" component={ContactList} />
        <Route exact path="/user/:id" component={Contact} />
        <Redirect from='/' to='/users/page/1'/>
      </Switch>
    </div>
  );
}

export default App;
