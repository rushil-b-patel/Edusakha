import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    role: 'student',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send login data to the server using API calls
    console.log('Login Data:', formData);
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, role: value }));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Select Role:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleRoleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="student">Student</option>
            <option value="university">University</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Additional fields based on role */}
        {/* {formData.role === 'student' && (
          // Render student-specific fields
        )} */}
        {/* {formData.role === 'university' && (
          // Render university-specific fields
        )} */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
