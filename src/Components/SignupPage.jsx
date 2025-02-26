import React, { useState } from "react";
import { Mail, Lock, User, Key } from "lucide-react";
import LoginNavBar from "./LoginNavBar";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Handle Email Verification Request
  const handleEmailVerification = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
      },{withCredentials:true});

      if (response.status === 200) {
        alert("Verification email sent. Please check your inbox.");
        setIsOtpSent(true); // Show OTP input field after email verification
      }
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  // Handle OTP Verification Request
  const handleOtpVerification = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/verify-otp`, {
        email,
        otp,
      });

      if (response.status === 200) {
        alert("OTP verified successfully! Account created.");
      }
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <>

      {/* Navbar Positioned at the Top */}
      <LoginNavBar/>
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

          {/* Signup Form */}
          <div className="w-full max-w-sm p-8 rounded-2xl text-center border border-white/50 backdrop-blur-lg shadow-2xl">
            <h2 className="text-3xl font-ovo text-white mb-3">Sign Up</h2>
            <p className="pb-3 text-gray-400">
              {isOtpSent ? "Enter the OTP sent to your email" : "Create a new account"}
            </p>

            <form onSubmit={isOtpSent ? handleOtpVerification : handleEmailVerification} className="flex flex-col space-y-6">
              {/* First Name & Last Name Side by Side */}
              {!isOtpSent && (
                <>
                  <div className="flex gap-4">
                    <div className="relative w-1/2">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                        size={20}
                      />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                        className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                      />
                    </div>

                    <div className="relative w-1/2">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                        size={20}
                      />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                        className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                      size={20}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address"
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
                      placeholder="Password"
                      className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                    />
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                      size={20}
                    />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm Password"
                      className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                    />
                  </div>
                </>
              )}

              {/* OTP Input (Shows after clicking Verify Email) */}
              {isOtpSent && (
                <div className="relative">
                  <Key
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                    size={20}
                  />
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    placeholder="Enter OTP"
                    className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-gray-400 text-white placeholder-gray-400 outline-none focus:border-white transition-all"
                  />
                </div>
              )}

              {/* Buttons */}
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all shadow-md"
              >
                {isOtpSent ? "Verify OTP" : "Verify Email"}
              </button>

              {/* Login Link */}
              <div className="text-white text-sm">
                <p>
                  Already have an account?{" "}
                  <a href="/login" className="underline hover:text-gray-300">
                    Log In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
