import { useState, useEffect } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { employeeService } from '../services/employeeService';
import type { Department } from '../data';

interface EmployeeFormProps {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

function EmployeeForm({ departments, setDepartments }: EmployeeFormProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  
  const firstName = useFormInput('');
  const lastName = useFormInput('');

  useEffect(function() {
    const deptData = employeeService.getDepartments();
    setDepartments(deptData);
  }, []);

  const handleSubmit = function(e: React.FormEvent) {
    e.preventDefault();
    setDepartmentError('');

    let isValid = true;
    if (!selectedDepartment) {
      setDepartmentError('Please select a department.');
      isValid = false;
    }

    const isFirstNameValid = firstName.validate(
      function(value: string) { return value.length >= 3; },
      'First Name must be at least 3 characters.'
    );

    if (!isValid || !isFirstNameValid) {
      return;
    }

    const newEmployee = { 
      firstName: firstName.value, 
      lastName: lastName.value || undefined 
    };

    const result = employeeService.createEmployee(selectedDepartment, newEmployee);

    if (result.success && result.departments) {
      setDepartments(result.departments);
      firstName.reset();
      lastName.reset();
      setSelectedDepartment('');
    } else {
      firstName.setError(result.error || 'Error creating employee');
    }
  };

  return (
    <section className="employee-form">
      <h2>Add New Employee</h2>
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
              {departments.map(dept => (
                <option key={dept.name} value={dept.name}>{dept.name}</option>
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