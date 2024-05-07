"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import userData from './wanted.json';


export default function Home() {

  return (
    <main className="min-h-screen items-center p-24 bg-gray-900 sm: p-6 ">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">PNP MOST WANTED PERSONS WITH REWARD</h1>
        </div>
        <ul className="grid grid-cols-3 gap-x-8 gap-y-24 mt-20 sm: grid-cols-2">
          {userData.map((person) => (
            <li key={person.id} className="bg-slate-400 px-4 py-4 rounded-2xl bg-gray-800">
              <img className="h-24 w-24 rounded-full mx-auto" src={person.image} alt={`photo of ${person.name}`} />
              <h3 className="mt-6 text-lg font-semibold text-white leading-7 text-center">{person.name}</h3>
              <p className="text-sm text-gray-300 text-center">{person.reward ? person.reward : 'no reward indicated'}</p>
              <p className="text-sm text-gray-500 text-center sm: hidden">{person.offenses}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
