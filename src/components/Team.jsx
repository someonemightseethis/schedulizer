import MemberCard from "./MemberCard";
import teamData from "../data/teamData"; // Import your team data

function Team() {
  return (
    <div className="container mx-auto md:px-6 py-20 border-b-2 border-black">
      <section className="text-center">
        <h2 className="mb-12 text-8xl font-semibold">Meet the team</h2>
        <div className="grid grid-cols-3 justify-center space-x-2">
          {teamData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
