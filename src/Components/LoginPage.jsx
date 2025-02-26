import React, { useState } from "react";
import { Mail, Lock, User, CheckCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import LoginNavBar from "./LoginNavBar";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result =
        role === "student"
          ? await axios.post(`${API_URL}/student/login`, { email, password }, {
              withCredentials: true,
            })
          : await axios.post(`${API_URL}/faculty/login`, { employeeId, password }, {
              withCredentials: true,
            });
  
      alert("Login successful");
      if(role!="student"){
        localStorage.setItem("role","faculty");
        navigate("/faculty");
      }
      // Check if the email belongs to an admin
      else if (email.includes("@admin.in")) {
        // Store admin identifier in local storage
        localStorage.setItem("role", "admin");
        // Navigate to the admin page
        navigate("/admin");
      } else {
        // Navigate to the student page
        navigate("/student");
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("hero-bg.jpg")' }}
    >
      <LoginNavBar/>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around relative z-20 p-4 gap-8">
        {/* Responsive Image */}
        <img
          src="../../public/solar-wind.png"
          alt="Solar Wind"
          className="h-64 w-64 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px] object-contain"
        />

        {/* Login Form */}
        <div className="w-full max-w-sm p-8 rounded-2xl text-center border border-white/50 backdrop-blur-lg shadow-2xl">
          <h2 className="text-3xl font-ovo text-white mb-3">Welcome Back...</h2>
          <p className="pb-3 text-gray-400">Please enter your credentials</p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Role Selection Dropdown */}
            <div className="relative w-full mb-4">
              <label className="block text-gray-300 text-sm mb-2 text-left">
                Select Role
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/30 backdrop-blur-lg border border-gray-400 text-white py-3 px-4 rounded-lg outline-none focus:border-blue-400 transition-all appearance-none"
                >
                  <option value="student" className="text-black">🎓 Login as Student</option>
                  <option value="faculty" className="text-black">👨‍🏫 Login as Faculty</option>
                </select>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>
            </div>

            {/* Conditional Input Field */}
            {role === "student" ? (
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                  size={20}
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                />
              </div>
            ) : (
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                  size={20}
                />
                <input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                  placeholder="Enter your Employee ID"
                  className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                />
              </div>
            )}

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

            {/* Continue with Google Button - Only for Students */}
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
