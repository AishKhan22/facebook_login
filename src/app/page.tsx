
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center m-auto">
      {/* Main Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-10">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mr-6">
          <h1 className="text-blue-600 text-5xl font-bold mb-4">Facebook</h1>
          <p className="text-gray-900 text-3xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <form>
            <input
              type="email" required
              placeholder="Email or phone number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password" required
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700"
            >
              Log In
            </button>
          </form>
          <a
            href="#"
            className="block text-center text-blue-600 mt-4 hover:underline"
          >
            Forgotten password?
          </a>
          <hr className="my-6 border-gray-300" />
          <button
            className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
