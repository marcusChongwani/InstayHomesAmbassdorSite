import React from 'react';

const Pending = () => (
  <div className="shadow-md border border-gray-100 p-4 rounded-lg">
    {/* Image */}
    <div className="w-full h-40 overflow-hidden rounded-lg">
      <img 
        className="w-full h-full object-cover" 
        src="https://plus.unsplash.com/premium_photo-1682377521552-49d35c2c9704?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjB3aXRoJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Boarding House" 
      />
    </div>

    {/* Details */}
    <div className="pt-4">
      {/* Status Badge */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700">
          In Review
        </span>

        <div className="flex items-center justify-end gap-1">
          <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            <span className="sr-only">Quick look</span>
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
              <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Landlord Info */}
      <p className="text-lg font-semibold text-gray-900">Mr. John Doe</p>
      <p className="text-sm text-gray-700">📍 Cavendish, Lusaka</p>
      <p className="text-sm text-gray-700">📞 +260 97 123 4567</p>
    </div>
  </div>
);

export default Pending;