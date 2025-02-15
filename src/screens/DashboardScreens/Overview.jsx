import React from 'react';
import {Link} from 'react-router-dom';;


import EarningsChart from '../../Components/EarningsChat';

export default function Overview(){


  const earningsData = [20, 30, 60, 50, 20, 40, 30, 70, 20, 50, 30, 40];
  const totalEarnings = 27956;
  const growthRate = 31;
  
  return (
    <div>
      <div className="flex items-center justify-center mb-2 border border-gray-100 rounded-md">
        <EarningsChart earnings={earningsData} total={totalEarnings} growth={growthRate} />
      </div>
     <div>
       <div className="bg-white shadow-md rounded-lg p-6 max-w-md border border-gray-200">
         <h2 className="text-xl font-bold text-gray-600">Submit your boarding house infomation🏡</h2>
         <p className="text-gray-500 mt-2">Submit it when you're ready.</p>
         <div className="mt-4">
        <div className="mt-6">
             <Link to="/dashboard/create" class="relative inline-block text-lg group">
                 <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                     <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                     <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
                     <span class="relative">Start submission</span>
                 </span>
                 <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
             </Link>
             </div>
         </div>
       </div>
     </div>
    </div>
  );
}