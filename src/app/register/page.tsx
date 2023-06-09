"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

async function getAuth(user: string) {
  try {
    let res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Something went Wrong!");
    }
    return res.json();
  } catch (error) {
    return error;
  }
}

const Register = () => {
  let router = useRouter();
  const [user, setUser] = useState({ clientName: "", clientEmail: "" });

  function handleChange(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    let data = await getAuth(JSON.stringify(user));
    if (data.error) {
      alert(data.error);
    } else {
      localStorage.setItem("authToken", data.accessToken);
      router.back();
    }
  }
  return (
    <>
      <h1 className="mt-8 mb-4 py-2 text-3xl font-semibold text-center">
        Register
      </h1>
      <form className="flex flex-col md:w-1/4 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="clientName">Name:</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          placeholder="name..."
          className="p-1 rounded-md mt-1 mb-2"
          value={user.clientName}
          onChange={handleChange}
          required
        />
        <label htmlFor="clientEmail">Email:</label>
        <input
          type="email"
          id="clientEmail"
          name="clientEmail"
          placeholder="email..."
          className="p-1 rounded-md mt-1 mb-2"
          value={user.clientEmail}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white bg-gray-800 px-3 py-2 my-4 w-1/2 mx-auto rounded-md border hover:bg-gray-900"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
