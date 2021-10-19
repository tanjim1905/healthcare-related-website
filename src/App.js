import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/Nav/Nav";
import AuthProvider from "./context/AuthProvider";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Details/Details";
import Doctors from "./Pages/Doctors/Doctors";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <Aboutus></Aboutus>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/details/:serviceId">
          <Details></Details>
        </PrivateRoute>
        <PrivateRoute path="/doctors">
          <Doctors></Doctors>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
