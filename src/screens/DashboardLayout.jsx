
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
            <nav >
              <ul className="flex items-center gap-4 font-bold text-lg text-gray-300">
                <li className="px-2"><NavLink to="overview" className={({ isActive }) => (isActive ? "text-red-200" : "text-gray-300")}>Active</NavLink></li>
                <li className="px-2"><NavLink to="settings" className={({ isActive }) => (isActive ? "text-red-200" : "text-gray-300")}>Previous</NavLink></li>
              </ul>
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
