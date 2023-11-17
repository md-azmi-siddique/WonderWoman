import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import NavItem from './Components/NavItem/NavItem';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourType from './Components/TourType/TourType';
import TourPlanBanner from './Components/TourPlanBanner/TourPlanBanner';
import TopDestination from './Components/TopDestination/TopDestination';
import FeaturedTour from './Components/FeaturedTour/FeaturedTour';
import KeepThingsFlexible from './Components/KeepThingsFlexible/KeepThingsFlexible';
import Testimonial from './Components/Testimonial/Testimonial';


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
              <TopDestination></TopDestination>
              <FeaturedTour></FeaturedTour>
              <KeepThingsFlexible></KeepThingsFlexible>
              <Testimonial></Testimonial>
            </>
          }
        />
      </Routes>
    </Router>
  );
}


export default App;
