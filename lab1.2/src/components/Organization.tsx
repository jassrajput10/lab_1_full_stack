import { leadershipRoles } from '../data';

function Organization() {
  return (
    <section className="organization">
      <h2>Leadership and Management</h2>
      {leadershipRoles.map((role, index) => (
        <div key={index} className="organization-row">
          <span className="person-name">{role.person}</span>
          <span className="person-role">{role.role}</span>
        </div>
      ))}
    </section>
  );
}

export default Organization;