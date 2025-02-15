import React, { useState } from "react";

const Create = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Step 1: Personal Info</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Step 2: Contact Info</h2>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Step 3: Confirm Details</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded">
              Back
            </button>
            <button className="bg-green-500 text-white p-2 rounded">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;