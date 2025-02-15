import React, { useState } from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";


function SignUpForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}

    >
    <div className="w-screen bg-white font-sans text-gray-700  py-10 px-12 ">
      <div className="mb-8 font-bold text-center text-gray-600 text-2xl">
        <p>Sign up to access your Dashboard😊</p>
      </div>
      <div className=" md:w-2/3 mx-auto w-full pb-16 md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen">
     
        <form className=" mb-4 rounded-lg  ">
        <div className="flex items-center justify-between gap-4">
          <div className="mb-4">
            <input
              className=" w-full cursor-text appearance-none border-b-2 border-red-500 py-2 leading-tight outline-none rounded-none"
              type="text"
              placeholder="First Name"
              
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full cursor-text appearance-none border-b-2 border-red-500 py-2 leading-tight outline-none rounded-none"
              
              type="text"
              placeholder="Last Name"
              
            />
          </div>
        </div>
          <div className="mb-4">
            <input
              className="w-full cursor-text appearance-none border-b-2 border-red-500 py-2 leading-tight outline-none rounded-none"
              id="email"
              type="email"
              placeholder="Email"
              
              
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full cursor-text appearance-none border-b-2 border-red-500 py-2 leading-tight outline-none rounded-none"
              id="phone"
              type="tel"
              placeholder="Phone"
              
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full cursor-text appearance-none border-b-2 border-red-500 py-2 leading-tight outline-none rounded-none"
              id="password"
              type="password"
              placeholder="Passsword"
              
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" htmlFor="password">
              Your school
            </label>
          <select>
            <option>Select school</option>
            <option>Cavendish university</option>
            <option>university of lusaka</option>
            <option>university of lusaka</option>
            
          </select>
          </div>
          <div className="mt-6">
            <button type="button" class="relative inline-block text-lg group w-full">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white w-full">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-full h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-600 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Sign Up</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button>
            </div>
        </form>
        <p className="mt-8">Already have an account? <Link to="/login" className="text-red-500 underline">Login</Link></p>
      </div>
    </div>
      </motion.div>
  );
}

export default SignUpForm;