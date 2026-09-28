import React from "react";
import { Navigation } from "../components/navigation";
import { Team } from "../components/team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const MeetTheTeam = () => {
  return (
    <div>
      <Navigation />
      <Team data={JsonData.Team} />
      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default MeetTheTeam;
