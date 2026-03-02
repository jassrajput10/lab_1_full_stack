import { useState, useEffect } from 'react';
import { useOrgFormInput } from '../hooks/useOrgFormInput';
import { organizationService } from '../services/organizationService';
import { initialRoles, type Role } from '../data';
import './Organization.css';

function Organization() {
  const [roles, setRoles] = useState<Role[]>([]);
  
  const firstName = useOrgFormInput('');
  const lastName = useOrgFormInput('');
  const roleName = useOrgFormInput('');

  useEffect(function() {
    organizationService.setRoles(initialRoles);
    const roleData = organizationService.getRoles();
    setRoles(roleData);
  }, []);

  const handleSubmit = function(e: React.FormEvent) {
    e.preventDefault();

    const fullName = `${firstName.value} ${lastName.value}`.trim();

    // Validate first name
    const isFirstNameValid = firstName.validate(
      function(value: string) { return value.length >= 3; },
      'First Name must be at least 3 characters.'
    );

    // Validate role is provided
    if (!roleName.value.trim()) {
      roleName.setError('Role is required.');
      return;
    }

    if (!isFirstNameValid) {
      return;
    }

    // Use service to create role
    const result = organizationService.createRole(fullName, roleName.value);

    if (result.success && result.roles) {
      setRoles(result.roles);
      firstName.reset();
      lastName.reset();
      roleName.reset();
    } else {
      firstName.setError(result.error || 'Error creating role');
    }
  };

  return (
    <section className="organization">
      <h2>Leadership and Management</h2>
      
      {/* Display Roles */}
      {roles.map(function(role, index) {
        return (
          <div key={index} className="organization-row">
            <span className="person-name">{role.person}</span>
            <span className="person-role">{role.role}</span>
          </div>
        );
      })}

      {/* Add New Role Form */}
      <h3>Add New Role</h3>
      <form onSubmit={handleSubmit} className="org-form">
        <label>
          First Name: 
          <input 
            type="text"
            value={firstName.value} 
            onChange={(e) => firstName.setValue(e.target.value)}
          />
          {firstName.error && <span className="error">{firstName.error}</span>}
        </label>
        
        <label>
          Last Name: 
          <input 
            type="text"
            value={lastName.value} 
            onChange={(e) => lastName.setValue(e.target.value)}
          />
        </label>
        
        <label>
          Role: 
          <input 
            type="text"
            value={roleName.value} 
            onChange={(e) => roleName.setValue(e.target.value)}
          />
          {roleName.error && <span className="error">{roleName.error}</span>}
        </label>
        
        <button type="submit">Add Role</button>
      </form>
    </section>
  );
}

export default Organization;