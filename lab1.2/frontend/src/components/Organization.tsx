import { useState, useEffect } from 'react';
import { useOrgFormInput } from '../hooks/useOrgFormInput';
import { organizationService } from '../services/organizationService';
import { useAuth } from '@clerk/clerk-react';
import type { Role } from '../data';
import './Organization.css';

function Organization() {
  const [roles, setRoles] = useState<Role[]>([]);
  const { getToken } = useAuth();

  const firstName = useOrgFormInput('');
  const lastName = useOrgFormInput('');
  const roleName = useOrgFormInput('');

  useEffect(() => {
    async function loadRoles() {
      const data: Role[] = await organizationService.getRoles();
      setRoles(data);
    }
    loadRoles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFirstNameValid = firstName.validate(
      (value: string) => value.length >= 3,
      'First Name must be at least 3 characters.'
    );

    if (!roleName.value.trim()) {
      roleName.setError('Role is required.');
      return;
    }

    if (!isFirstNameValid) return;

    const fullName = `${firstName.value} ${lastName.value}`.trim();

    // Get Clerk token before making the request
    const token = await getToken() ?? '';

    const newRole = await organizationService.createRole(fullName, roleName.value.trim(), token);

    if (newRole) {
      setRoles(prev => [...prev, newRole]);
      firstName.reset();
      lastName.reset();
      roleName.reset();
    } else {
      firstName.setError('Error creating role — check the backend is running.');
    }
  };

  return (
    <section className="organization">
      <h2>Leadership and Management</h2>

      {roles.map((role, index) => (
        <div key={index} className="organization-row">
          <span className="person-name">
            {role.employee ? `${role.employee.firstName} ${role.employee.lastName ?? ''}`.trim() : 'Unknown'}
          </span>
          <span className="person-role">{role.title}</span>
        </div>
      ))}

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