import React, { useState } from "react";
import { Mail, Lock, CheckCircle, Badge } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
  const [role, setRole] = useState("student"); // Default role is student
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${API_URL}/login`,
        { identifier, password, role },
        { withCredentials: true }
      );
      alert("Login success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("hero-bg.jpg")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around relative z-20 p-4 gap-8">
        {/* Responsive Image */}
        <img
          src="../../public/solar-wind.png"
          alt="Solar Wind"
          className="h-64 w-64 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px] object-contain"
        />

        {/* Login Form */}
        <div className="w-full max-w-sm p-8 rounded-2xl text-center border border-white/50 backdrop-blur-lg shadow-2xl">
          <h2 className="text-3xl font-ovo text-white mb-3">
            Welcome Back...
          </h2>
          <p className="pb-3 text-gray-400">
            Please enter your {role === "faculty" ? "Employee ID" : "email"} and password
          </p>

          {/* Role Selection Dropdown */}
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-transparent border border-gray-400 text-white py-2 px-3 rounded-lg outline-none focus:border-white transition-all"
            >
              <option value="student" className="text-black">Login as Student</option>
              <option value="faculty" className="text-black">Login as Faculty</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Identifier Input (Email or Employee ID) */}
            <div className="relative">
              {role === "faculty" ? (
                <Badge
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                  size={20}
                />
              ) : (
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                  size={20}
                />
              )}
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                placeholder={role === "faculty" ? "Enter your Employee ID" : "Enter your email"}
                className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-white text-sm flex-wrap gap-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-white mr-2"
                />
                <span className="flex items-center gap-1">
                  <CheckCircle size={16} /> Remember me
                </span>
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all shadow-md"
            >
              Log In
            </button>

            {/* Continue with Google Button (Hidden for Faculty) */}
            {role === "student" && (
              <button
                type="button"
                className="flex items-center justify-center gap-3 border border-gray-400 text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
                onClick={() =>
                  (window.location.href = `${API_URL}/auth/google`)
                }
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>
            )}

            {/* Register Link */}
            <div className="text-white text-sm">
              <p>
                Don't have an account?{" "}
                <a href="/signup" className="underline hover:text-gray-300">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
