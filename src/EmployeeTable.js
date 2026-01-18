function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th className="no-print">Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>
              {emp.image && <img src={emp.image} alt="Employee" width="40" />}
            </td>
            <td>{emp.name}</td>
            <td>{emp.gender}</td>
            <td>{emp.dob}</td>
            <td>{emp.state}</td>
            <td>{emp.active ? "Active" : "Inactive"}</td>
            <td className="no-print">
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
