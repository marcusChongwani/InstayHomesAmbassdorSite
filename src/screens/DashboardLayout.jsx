import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDashboard, MdPendingActions, MdOutlineVerifiedUser } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

const DashboardLayout = () => {
  useEffect(() => {
    // Fetch data if necessary
  }, []);

  const linkClasses = (isActive) =>
    `pb-2 flex items-center gap-2 border-b-2 ${
      isActive ? "text-red-500 border-red-500" : "text-gray-300 border-gray-300"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">My Submissions</h1>
          <nav className="mb-8">
            <div className="overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-4 text-md text-gray-300">
                <NavLink to="/dashboard" end className={({ isActive }) => linkClasses(isActive)}>
                  <MdDashboard /> Overview
                </NavLink>
                <NavLink to="/dashboard/pending" className={({ isActive }) => linkClasses(isActive)}>
                  <MdPendingActions /> Pending
                </NavLink>
                <NavLink to="/dashboard/verified" className={({ isActive }) => linkClasses(isActive)}>
                  <MdOutlineVerifiedUser /> Verified
                </NavLink>
                <NavLink to="/dashboard/create" className={({ isActive }) => linkClasses(isActive)}>
                  <IoCreateOutline /> Create
                </NavLink>
              </div>
            </div>
          </nav>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;