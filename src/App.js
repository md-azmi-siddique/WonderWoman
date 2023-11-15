import './App.css';
import Hero from './Components/Hero';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Home></Home> */}
      <Navbar></Navbar>
      <Hero></Hero>
    </Router>
  );
}

export default App;
