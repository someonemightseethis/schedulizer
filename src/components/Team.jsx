import MemberCard from "./MemberCard";
import teamData from "../data/teamData"; // Import your team data

function Team() {
  return (
    <div className="py-12">
      <section className="text-center">
        <div className="grid xl:lg:grid-cols-2 md:grid-cols-1 justify-center px-2 gap-32">
          {teamData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
