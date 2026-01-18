import { useEffect, useRef, useState } from "react";

function EmployeeForm({ addEmployee, editEmp, updateEmployee }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    image: "",
    active: true,
  });

  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  /* Populate form for Edit */
  useEffect(() => {
    if (editEmp) {
      setForm(editEmp);
    } else {
      resetForm();
    }
    setErrors({});
  }, [editEmp]);

  /* Handle input change (clears that field error) */
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  /* Image handler */
  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      handleChange("image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  /* Validation */
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.dob) newErrors.dob = "Date of Birth is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* Reset form */
  const resetForm = () => {
    setForm({
      name: "",
      gender: "",
      dob: "",
      state: "",
      image: "",
      active: true,
    });
    setErrors({});
    if (fileRef.current) fileRef.current.value = "";
  };

  /* Submit */
  const submit = () => {
    if (!validate()) return;

    const emp = {
      ...form,
      id: editEmp ? editEmp.id : Date.now(),
    };

    editEmp ? updateEmployee(emp) : addEmployee(emp);
    resetForm();
  };

  return (
    <div className="employee-form">
      <h3>{editEmp ? "Update Employee" : "Add Employee"}</h3>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {errors.name && <small className="error">{errors.name}</small>}

      <select
        value={form.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      >
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      {errors.gender && <small className="error">{errors.gender}</small>}

      <input
        type="date"
        value={form.dob}
        onChange={(e) => handleChange("dob", e.target.value)}
      />
      {errors.dob && <small className="error">{errors.dob}</small>}

      <select
        value={form.state}
        onChange={(e) => handleChange("state", e.target.value)}
      >
        <option value="">State</option>
        <option>Telangana</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Tamil Nadu</option>
      </select>
      {errors.state && <small className="error">{errors.state}</small>}

      <input type="file" ref={fileRef} onChange={imageHandler} />
      {form.image && <img src={form.image} alt="Preview" width="60" />}
      {errors.image && <small className="error">{errors.image}</small>}

      <label>
        <input
          type="checkbox"
          checked={form.active}
          onChange={() => handleChange("active", !form.active)}
        />
        Active
      </label>
      <button onClick={submit}>Save</button>
    </div>
  );
}

export default EmployeeForm;
