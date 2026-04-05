const API = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api';

export const employeeService = {

  async getDepartments() {
    const res = await fetch(`${API}/departments`);
    const json = await res.json();
    // Backend returns { success: true, data: [...] } — unwrap it
    return json.data ?? [];
  },

  async createEmployee(departmentName: string, employee: { firstName: string; lastName?: string }) {
    const res = await fetch(`${API}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ departmentName, employee }),
    });
    const json = await res.json();
    // Backend returns updated departments list inside data
    return json.data ?? null;
  }

};