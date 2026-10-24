import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Services } from "../components/services";
import JsonData from "../data/data.json";

const HomePage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // Scroll to section when arriving from another page via /#about, etc.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash;
    const timer = setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <About data={landingPageData.About} /> */}
      {/* <MissionVision data={landingPageData.MissionVision} /> */}
      <Services data={landingPageData.Services} />
    </div>
  );
};

export default HomePage;
