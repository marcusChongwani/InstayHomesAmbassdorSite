
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import {NavLink} from 'react-router-dom';

const DashboardLayout = () => {
  

  useEffect(() => {
    // Fetch data from API or database
    // setData(fetchedData);
  }, []);

  const activelink = {
    color: 'red'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}

    >
    <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">My Submissions </h1>
          <div>
            <nav className="mb-8 ">
              <div className="flex items-center gap-4 font-bold text-lg text-gray-300 " >
                
                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "text-red-500 font-bold border-b-4 border-red-500 pb-2" : "text-gray-300 font-bold border-b-4 border-gray-300 pb-2"}>Overview</NavLink>
                <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? "text-red-500 font-bold border-b-4 border-red-500 pb-2" : "text-gray-300 font-bold border-b-4 border-gray-300 pb-2"}>Settings</NavLink>
              </div>
            </nav>
            <div>
              <Outlet /> {/* This is where nested routes will be displayed */}
            </div>
          </div>
        
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
