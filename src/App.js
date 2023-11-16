import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import NavItem from './Components/NavItem/NavItem';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourType from './Components/TourType/TourType';
import TourPlanBanner from './Components/TourPlanBanner/TourPlanBanner';


function App() {
  return (
    <Router>
      <Routes>
      <Route
          exact
          path="/"
          element={
            <>
              <NavItem></NavItem>
              <Hero></Hero>
              <TourType></TourType>
              <TourPlanBanner></TourPlanBanner>
            </>
          }
        />
      </Routes>
    </Router>
  );
}


export default App;
