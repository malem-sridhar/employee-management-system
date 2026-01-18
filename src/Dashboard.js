import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [editEmp, setEditEmp] = useState(null);
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const save = (data) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const addEmployee = (emp) => {
    save([...employees, emp]);
  };

  const updateEmployee = (emp) => {
    save(employees.map((e) => (e.id === emp.id ? emp : e)));
    setEditEmp(null);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete employee?")) {
      save(employees.filter((e) => e.id !== id));
      setEditEmp(null);
    }
  };

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (genderFilter ? e.gender === genderFilter : true) &&
      (statusFilter ? e.active === (statusFilter === "active") : true),
  );

  const activeCount = employees.filter((e) => e.active).length;

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <h2>Employee Dashboard</h2>

        <div className="summary">
          <div className="card">Total: {employees.length}</div>
          <div className="card">Active: {activeCount}</div>
          <div className="card">Inactive: {employees.length - activeCount}</div>
        </div>

        <div className="filters">
          <input
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All Genders</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {filteredEmployees.length === 0 ? (
          <p className="empty">No employees found</p>
        ) : (
          <EmployeeTable
            employees={filteredEmployees}
            onEdit={setEditEmp}
            onDelete={deleteEmployee}
          />
        )}
        <button
          className="no-print"
          onClick={() => window.print()}
          style={{
            width: "60px",
            marginTop: "10px",
            backgroundColor: "#1976d2",
          }}
        >
          Print
        </button>
      </div>

      <div className="dashboard-right">
        <EmployeeForm
          addEmployee={addEmployee}
          editEmp={editEmp}
          updateEmployee={updateEmployee}
        />
      </div>
    </div>
  );
}

export default Dashboard;
