  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import "./App.css"; // Ensure you have styling

  const App = () => {
    const initialFormState = {
      Id: "",
      Name: "",
      MobileNo: "",
      DOB: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      Class: "",
      College: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [employees, setEmployees] = useState([]);
    const [errors, setErrors] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/user/", { type_: 4 });
        if (response.data.success) {
          setEmployees(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const validateForm = () => {
      let newErrors = {};
      if (!formData.Name) newErrors.Name = "Name is required";
      if (!formData.MobileNo || !/^\d{10}$/.test(formData.MobileNo))
        newErrors.MobileNo = "Enter a valid 10-digit number";
      if (!formData.DOB) newErrors.DOB = "Date of Birth is required";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      try {
        await axios.post("http://127.0.0.1:8000/user/", { ...formData, type_: 1 });
        alert("Employee Added Successfully!");
        setFormData(initialFormState);
        fetchEmployees();
      } catch (error) {
        console.error("Error saving employee:", error);
      }
    };

    const handleEdit = (employee) => {
      setFormData(employee);
    };

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this employee?")) return;

      try {
        await axios.post("http://127.0.0.1:8000/user/", { type_: 3, Id: id });
        alert("Employee Deleted Successfully!");
        fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    };

    const getFilteredEmployees = () => {
      return employees.filter((emp) =>
        emp.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };

    return (
      <div className="container">
        <h1>Employee Management</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form">
          {Object.keys(formData).map((field) => (
            <div key={field} className="form-group">
              <label>{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="input-field"
              />
              {errors[field] && <p className="error">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="submit-btn">
            {formData.Id ? "Update Employee" : "Add Employee"}
          </button>
        </form>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Find Employee by Name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="input-field"
          />
        </div>

        {/* Employee List */}
        <h2>Employee List</h2>
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredEmployees().map((emp) => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.MobileNo}</td>
                <td>{emp.City}</td>
                <td>{emp.State}</td>
                <td>{emp.Country}</td>
                <td>
                  <button onClick={() => handleEdit(emp)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(emp.Id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default App;
