// import './App.css';


import HeaderComponent from "./Components/Home/Header/HeaderComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductComponent from "./Components/Products/ProductItems/ProductComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import NavBar from "./Navbar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Router>
   
 
      <NavbarComponent />
      {/* <DemoNavbar/> */}
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
