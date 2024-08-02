"use client";

import { useState } from "react";
import Nav from "../(components)/Nav";

const Add = () => {
  const [values, setValues] = useState({
    lastName: "",
    firstName: "",
    alias: "",
    offenses: "",
    reward: 0,
    issuingCourt: "",
    dilgMcNo: "",
    criminalCaseNo: "",
    region: "",
  });

  function handleTextChange(event) {
    const value = event.target.value;
    console.log("value", value);
    console.log("event.target.name", event.target.name);
    setValues((prev) => {
      console.log("prev", prev);
      return {
        ...prev,
        [event.target.name]: value,
      };
    });
  }

  return (
    <main className="min-h-screen items-center p-24 bg-gray-900 sm: p-6 ">
      <Nav />
      <div className="max-w-2xl ml-auto mr-auto">
        <form>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="pb-3 col-span-2">
              <label>Last Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.lastName}
                  name="lastName"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>First Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.firstName}
                  name="firstName"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>Alias</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.alias}
                  name="alias"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-4">
              <label>Offense/s</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.offenses}
                  name="offenses"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-3">
              <label>Reward</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.reward}
                  name="reward"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>Issuing Court</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.issuingCourt}
                  name="issuingCourt"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>DILG MC No.</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.dilgMcNo}
                  name="dilgMcNo"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>Criminal Case No.</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.criminalCaseNo}
                  name="criminalCaseNo"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-2">
              <label>Region</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={values.region}
                  name="region"
                  onChange={handleTextChange}
                  className="ring-white ring-inset shadow-sm w-full py-1.5 rounded-md ring-offset-white bg-[rgba(255,255,255,0.05)] sm:leading-6 text-sm"
                />
              </div>
            </div>
            <div className="pb-3 col-span-4">
              <label>Photo</label>
              <div className="flex flex-row mt-2 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-12 w-12"
                  //   class="np rs axx"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <button className="leading-5 py-2 bg-[rgba(255,255,255,0.05)] font-semibold px-3 rounded-md">
                  Change
                </button>
              </div>
             
            </div>
          </div>
          <div className="border-t pt-6 mt-6 flex justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
        </form>
      </div>
    </main>
  );
};

export default Add;
