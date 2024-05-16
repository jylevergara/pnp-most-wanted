import Image from "next/image";
import { useEffect, useState } from "react";

// console.log('congrats, you made it to this page')

const getPersonById = async (id) => {
  // const { id } = params;
  console.log("getPerson page", id);
  const res = await fetch(`http://localhost:3000/api/Persons/${id}`, {
    cache: "no-store",
  });

  return res.json();

  if (!res.ok) {
    throw new Error("Failed to get person");
  }
};

const Info = async ({ params }) => {
  const person = await getPersonById(params.id);

  return (
    <main className="min-h-screen items-center p-24 bg-gray-900 sm: p-6">
      <div>
        <div>
          <h3 className="text-lg">Most Wanted Person Information</h3>
          <p className="mt-1">Personal details</p>
        </div>
        <div className="mt-6">
          <dl className="grid grid-cols-2 sm: grid-cols-1">
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">
                Full Name
              </dt>
              <dd>{person.name}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">Alias</dt>
              <dd>{person.alias}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">
                Offense/s
              </dt>
              <dd>{person.offenses}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">Reward</dt>
              <dd>{person.reward}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">
                Issuing Court
              </dt>
              <dd>{person.issuingCourt}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">
                DILG MC No.
              </dt>
              <dd>{person.dilgMcNo}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">
                Criminal Case No.
              </dt>
              <dd>{person.criminalCaseNo}</dd>
            </div>
            <div className="py-3 border-t">
              <dt className="font-medium text-slate-400 leading-6">Region</dt>
              <dd>{person.region}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
};
// import React from 'react'

// const Info = () => {
//   return (
//     <div>Info</div>
//   )
// }

export default Info;
