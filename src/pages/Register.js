import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      username: '',
      email: '',
      password: ''
    });
    toast.success("Thank you for registering!");
  };


  return (
    <div className='w-full h-screen' style={{backgroundImage: `url(${'https://i.pinimg.com/564x/20/eb/55/20eb557e5508f8a5b8a4c40d405d55d2.jpg'})`}}>
  <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <button type="submit" className="bg-brown text-white py-2 px-4 rounded-md hover:bg-slate-600 transition-colors duration-500">Register</button>
        </form>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
}

export default Register;
