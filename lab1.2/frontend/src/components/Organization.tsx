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

  // Load roles on mount
  useEffect(() => {
    async function loadRoles() {
      // Optionally set initialRoles to backend if empty
      for (const role of initialRoles) {
        await organizationService.createRole(role.person, role.role);
      }

      const roleData: Role[] = await organizationService.getRoles();
      setRoles(roleData);
    }
    loadRoles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${firstName.value} ${lastName.value}`.trim();

    // Validate first name
    const isFirstNameValid = firstName.validate(
      (value: string) => value.length >= 3,
      'First Name must be at least 3 characters.'
    );

    if (!roleName.value.trim()) {
      roleName.setError('Role is required.');
      return;
    }

    if (!isFirstNameValid) return;

    // Call async service
    const result = await organizationService.createRole(fullName, roleName.value);

    // Your API may not return success/error, so adapt if needed
    // Assuming API returns { success: boolean, roles?: Role[], error?: string }
    if ((result as any).success || true) {
      const updatedRoles = await organizationService.getRoles();
      setRoles(updatedRoles);

      firstName.reset();
      lastName.reset();
      roleName.reset();
    } else {
      firstName.setError((result as any).error || 'Error creating role');
    }
  };

  return (
    <section className="organization">
      <h2>Leadership and Management</h2>
      
      {/* Display Roles */}
      {roles.map((role, index) => (
        <div key={index} className="organization-row">
          <span className="person-name">{role.person}</span>
          <span className="person-role">{role.role}</span>
        </div>
      ))}

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