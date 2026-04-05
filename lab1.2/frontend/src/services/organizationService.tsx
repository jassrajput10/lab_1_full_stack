const API = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api';

export const organizationService = {

  async getRoles() {
    const res = await fetch(`${API}/roles`);
    const json = await res.json();
    // Backend returns { success: true, data: [...] } — unwrap it
    return json.data ?? [];
  },

  async createRole(person: string, role: string) {
    const res = await fetch(`${API}/roles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ person, role }),
    });
    const json = await res.json();
    return json.data ?? null;
  }

};