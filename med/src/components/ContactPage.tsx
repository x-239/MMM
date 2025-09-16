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
    // منع أي شيء غير رقم في حقل الهاتف
    if (e.target.name === "phone") {
      const value = e.target.value.replace(/\D/g, "");
      setFormData({ ...formData, phone: value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
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

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Error response:", errorData);
        alert("Something went wrong, please try again.");
        return;
      }

      alert("Your request has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        otpMethod: "email",
      });
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Error sending your request. Check your internet connection.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 lg:p-10">
        {/* Left side title */}
        <div className="w-full lg:w-1/3 flex items-start mb-6 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-600">
            Contact Us
          </h1>
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 lg:pl-10 flex flex-col"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

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
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />

          {/* OTP Method */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
            <label className="mr-4 mb-2 sm:mb-0">
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
