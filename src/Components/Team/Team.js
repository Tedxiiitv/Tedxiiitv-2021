import "./Team.css";
import { teamData } from "./utils/TeamData";
import TeamName from "./TeamNames/TeamName";
import TeamMember from "./TeamMembers/TeamMember";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(Object.keys(teamData)[0]);

  const updateSelectedTeam = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="team__container">
      <Navbar />
      <div className="team">
        <TeamName
          selectedTeam={selectedTeam}
          updateSelectedTeam={updateSelectedTeam}
        />
        <TeamMember selectedTeam={selectedTeam} />
        {/* <div className="side-border"></div> */}
      </div>
      <div className="lineDivider">
        <div className="lineW"></div>
        <div className="lineR"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
