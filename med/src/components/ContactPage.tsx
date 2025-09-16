"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otpMethod: "email",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Your request has been sent successfully!");
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending your request.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg p-10">
        {/* Left side title */}
        <div className="w-1/3 flex items-start">
          <h1 className="text-5xl font-bold text-sky-600">Contact Us</h1>
        </div>

        {/* Right side form */}
        <form onSubmit={handleSubmit} className="w-2/3 pl-10">
          <h2 className="text-2xl font-semibold mb-6 p-4">Get in Touch</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name / Company Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* OTP Method */}
          <div className="mb-6">
            <label className="mr-4">
              <input
                type="radio"
                name="otpMethod"
                value="email"
                checked={formData.otpMethod === "email"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              OTP via Email
            </label>
            <label>
              <input
                type="radio"
                name="otpMethod"
                value="phone"
                checked={formData.otpMethod === "phone"}
                onChange={handleChange}
                className="mr-2"
              />
              OTP via Phone
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 text-lg font-medium"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
