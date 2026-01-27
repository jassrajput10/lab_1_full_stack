import React, { useState } from 'react';

interface Employee {
  firstName: string;
  lastName?: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

interface EmployeeFormProps {
  departments: Department[];  
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ departments, setDepartments }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (firstName.length < 3) {
      setError('First Name must be at least 3 characters.');
      return;
    }
    if (!selectedDepartment) {
      setError('Please select a department.');
      return;
    }

    const newEmployee: Employee = { firstName, lastName: lastName || undefined };
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === selectedDepartment
          ? { ...dept, employees: [...dept.employees, newEmployee] }
          : dept
      )
    );

    setFirstName('');
    setLastName('');
    setSelectedDepartment('');
  };

  return (
    <section className="employee-form">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <hr />
        <label>
          Last Name (Optional): <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <hr />
        <p>
          Department:
          <label>
            <select name="department" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} required>
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.name} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </label>
        </p>
        {error && <p className="error">{error}</p>}
        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
};

export default EmployeeForm;