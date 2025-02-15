
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
 
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">My Submissions </h1>
          <div>
            <nav >
              <ul className="flex items-center gap-4 font-bold text-lg text-gray-300">
                <li className="px-2"><NavLink to="/dashboard" end className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-gray-300"}>Overview</NavLink></li>
                <li className="px-2"><NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-gray-300"}>Settings</NavLink></li>
              </ul>
            </nav>
            <div>
              <Outlet /> {/* This is where nested routes will be displayed */}
            </div>
          </div>
        
        </div>
      </div>
    
  );
};

export default DashboardLayout;
