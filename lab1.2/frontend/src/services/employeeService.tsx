const API = "http://localhost:3001/api";

export const employeeService = {

  async getDepartments() {
    const res = await fetch(`${API}/departments`);
    return res.json();
  },

  async createEmployee(departmentName: string, employee: any) {

    const res = await fetch(`${API}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ departmentName, employee })
    });

    return res.json();
  }
};