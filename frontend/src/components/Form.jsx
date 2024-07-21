import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [generatedReferenceCodes, setGeneratedReferenceCodes] = useState([]);
  const [copy, setCopy] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      console.log(response.data);
      setGeneratedReferenceCodes(response.data.user.generatedReferenceCodes);
      reset();
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user");
    }
  };
  const copyToClipboard = () => {
    const codes = generatedReferenceCodes
      .map((codeObj) => codeObj.code)
      .join("\n");
    navigator.clipboard.writeText(codes).then(() => {
      setCopy(true);
    });
  };
  return (
    <div className="max-w-[600px] mx-auto p-6 form-bg shadow-md rounded-md my-20 text-white">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black text-black"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Telephone
          </label>
          <input
            type="tel"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("telephone", { required: "Telephone is required" })}
          />
          {errors.telephone && (
            <span className="text-red-500 text-sm">
              {errors.telephone.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Instagram ID
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("instagramId", {
              required: "Instagram ID is required",
            })}
          />
          {errors.instagramId && (
            <span className="text-red-500 text-sm">
              {errors.instagramId.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Date of Birth
          </label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("dob", { required: "Date of Birth is required" })}
          />
          {errors.dob && (
            <span className="text-red-500 text-sm">{errors.dob.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Gender</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Reference Code
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            {...register("referenceCode", {
              required: "Reference Code is required",
            })}
          />
          {errors.referenceCode && (
            <span className="text-red-500 text-sm">
              {errors.referenceCode.message}
            </span>
          )}
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="bg-[rgb(205,85,33)] text-white w-full mt-3 block hover:bg-[rgb(228,174,99)] hover:text-black transition font-semibold py-2 w-[150px] text-[13px] rounded-lg"
          >
            Register
          </button>
        </div>
      </form>

      {generatedReferenceCodes.length > 0 && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-2">
            Generated Reference Codes
          </h3>
          <ul>
            {generatedReferenceCodes.map((codeObj, index) => (
              <li key={index} className="text-white">
                {codeObj.code}
              </li>
            ))}
          </ul>
          <button
            onClick={copyToClipboard}
            className="mt-4 bg-[rgb(205,85,33)] text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            {copy ? "Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
