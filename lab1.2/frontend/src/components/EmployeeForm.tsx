import { useState, useEffect } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { employeeService } from '../services/employeeService';
import type { Department } from '../../../frontend/src/data';

interface EmployeeFormProps {
departments: Department[];
setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

function EmployeeForm({ departments, setDepartments }: EmployeeFormProps) {

const [selectedDepartment, setSelectedDepartment] = useState('');
const [departmentError, setDepartmentError] = useState('');

const firstName = useFormInput('');
const lastName = useFormInput('');

// Load departments from backend
useEffect(() => {
const loadDepartments = async () => {
try {
const deptData = await employeeService.getDepartments();
setDepartments(deptData);
} catch (error) {
console.error("Error loading departments:", error);
}
};


loadDepartments();


}, [setDepartments]);

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setDepartmentError('');


let isValid = true;

if (!selectedDepartment) {
  setDepartmentError('Please select a department.');
  isValid = false;
}

const isFirstNameValid = firstName.validate(
  (value: string) => value.length >= 3,
  'First Name must be at least 3 characters.'
);

if (!isValid || !isFirstNameValid) {
  return;
}

const newEmployee = {
  firstName: firstName.value,
  lastName: lastName.value || undefined
};

try {

  const result = await employeeService.createEmployee(
    selectedDepartment,
    newEmployee
  );

  if (result) {
    setDepartments(result);
    firstName.reset();
    lastName.reset();
    setSelectedDepartment('');
  }

} catch (error) {
  console.error("Error creating employee:", error);
  firstName.setError("Error creating employee");
}


};

return ( <section className="employee-form"> <h2>Add New Employee</h2>


  <form onSubmit={handleSubmit}>

    <label>
      First Name:
      <input
        type="text"
        value={firstName.value}
        onChange={(e) => firstName.setValue(e.target.value)}
        name="firstName"
        required
      />
      {firstName.error && <span className="error">{firstName.error}</span>}
    </label>

    <hr />

    <label>
      Last Name (Optional):
      <input
        type="text"
        value={lastName.value}
        onChange={(e) => lastName.setValue(e.target.value)}
        name="lastName"
      />
    </label>

    <hr />

    <p>
      Department:
      <label>
        <select
          name="department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>

          {departments.map((dept) => (
            <option key={dept.name} value={dept.name}>
              {dept.name}
            </option>
          ))}

        </select>
      </label>

      {departmentError && <span className="error">{departmentError}</span>}
    </p>

    <button type="submit">Add Employee</button>

  </form>
</section>

);
}

export default EmployeeForm;
