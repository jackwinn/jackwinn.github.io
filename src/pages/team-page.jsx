import { Team } from "../components/team";
import JsonData from "../data/data.json";

const TeamPage = () => {
  return (
    <div>
      <Team data={JsonData.Team} />
    </div>
  );
};

export default TeamPage;
