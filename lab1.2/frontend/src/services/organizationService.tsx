const API = "http://localhost:3001/api";

export const organizationService = {

  async getRoles() {

    const res = await fetch(`${API}/roles`);
    return res.json();

  },

  async createRole(person: string, role: string) {

    const res = await fetch(`${API}/roles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person, role })
    });

    return res.json();

  }
};