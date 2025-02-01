"use client";

import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginData = () => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/login', values);
        toast.success('Login successful!');
        console.log(response.data);
        // Redirect or save token here
      } catch (error) {
        toast.error(error.response?.data?.message || 'Login failed');
      }
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={form.handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            value={form.values.email}
            onChange={form.handleChange}
          />
          {form.touched.email && form.errors.email && (
            <p className="text-red-500 text-sm">{form.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={form.values.password}
            onChange={form.handleChange}
          />
          {form.touched.password && form.errors.password && (
            <p className="text-red-500 text-sm">{form.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginData;
