import './EmployeeList.css';

interface EmployeeListProps {
  departments: { name: string; employees: { firstName: string; lastName?: string; }[] }[];
}

function EmployeeList({ departments }: EmployeeListProps) {
  return (
    <section className="employee-list">
      <h2>All Employees by Department</h2>
      {departments.map(dept => (
        <div key={dept.name}>
          <h3>{dept.name}</h3>
          <ul>
            {dept.employees.map(emp => (
              <li key={`${dept.name}-${emp.firstName}`}>
                {emp.lastName ? `${emp.firstName} ${emp.lastName}` : emp.firstName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default EmployeeList;