import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import TeamPage from "./pages/team-page";
import ServicePage from "./pages/services-page";
import { ScrollToTop } from "./utilities/scroll-to-top";
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-services" element={<ServicePage />} />
        <Route path="/meet-the-team" element={<TeamPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Contact data={JsonData.Contact} />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
