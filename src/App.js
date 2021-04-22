
// import './App.css';

// import { Route, Switch } from "react-router";
import HeaderComponent from "./Components/Home/Header/HeaderComponent";
import NavbarComponent from "./Components/Home/Navbar/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./Navbar";

function App() {
  return (
    <div>
   <NavbarComponent/>
  
   <Switch>
          <Route exact path="/" component={HeaderComponent} />
          {/* <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/solutions" component={Services} />
          <Route exact path="/contact-us" component={ContactComponent} /> */}
        </Switch>
  

    </div>

 )
};

export default App;
