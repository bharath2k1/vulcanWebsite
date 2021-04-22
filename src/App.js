// import './App.css';


import HeaderComponent from "./Components/Home/Header/HeaderComponent";
import NavbarComponent from "./Components/Home/Navbar/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductComponent from "./Components/Products/ProductComponent";
// import NavBar from "./Navbar";

function App() {
  return (
    <Router>
   
 
      <NavbarComponent />
      <Switch>

      
        <Route exact path="/" component={HeaderComponent} />
      <Route exact path="/products" component={ProductComponent} /> 
          {/* <Route exact path="/solutions" component={Services} />
          <Route exact path="/contact-us" component={ContactComponent} /> */}
      </Switch>

    
    </Router>
  );
}

export default App;
