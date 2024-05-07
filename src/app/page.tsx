"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import userData from './wanted.json';


export default function Info() {

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
            <dt className="font-medium text-slate-400 leading-6">Full Name</dt>
            <dd>Margot Foster</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Alias</dt>
            <dd>Margot</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Offense/s</dt>
            <dd>Double Murder; Frustrated Murder</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Reward</dt>
            <dd>1,000,000</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Issuing Court</dt>
            <dd>RTC, 1st JR, Br 57 & 56, San Carlos City, Pangasinan</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">DILG MC No.</dt>
            <dd>2008-09</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Criminal Case No.</dt>
            <dd>4887; 4907</dd>
          </div>
          <div className="py-3 border-t">
            <dt className="font-medium text-slate-400 leading-6">Region</dt>
            <dd>1</dd>
          </div>
        </dl>
       </div>
      </div>
    </main>
  );
}
