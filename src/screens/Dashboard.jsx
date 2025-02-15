
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API or database
    // setData(fetchedData);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistics</h2>
              <p className="text-gray-600">Your dashboard stats will appear here</p>
            </div>

            {/* Activity Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
              <p className="text-gray-600">Your recent activities will appear here</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
              <p className="text-gray-600">Your profile information will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
