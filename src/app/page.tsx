// "use client";
import Image from "next/image";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
// import userData from "./wanted.json";
import Link from "next/link";
import Nav from "./(components)/Nav";

const getPersons = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Persons", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error("error", error);
  }
};

function handleClick(id: any) {
  console.log("clicked!", id);
}

const Home = async () => {
  const { persons } = await getPersons();
  return (
    <main className="min-h-screen items-center p-24 bg-gray-900 sm: p-6 ">
      <Nav/>
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            PNP MOST WANTED PERSONS WITH REWARD
          </h1>
        </div>
        <ul className="grid grid-cols-3 gap-x-8 gap-y-24 mt-20 sm: grid-cols-2">
          {persons.map(
            (person: {
              id: Key | null | undefined;
              image: string | undefined;
              name: string
              reward:
                | string
                | number
                | bigint
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
              offenses:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            }) => (
              <Link key={person._id} href={`/InfoPage/${person._id}`}>
                <li
                  key={person._id}
                  className="bg-slate-400 px-4 py-4 rounded-2xl bg-gray-800"
                >
                  <img
                    className="h-24 w-24 rounded-full mx-auto"
                    src={person.image}
                    alt={`photo of ${person.name}`}
                  />
                  <h3 className="mt-6 text-lg font-semibold text-white leading-7 text-center">
                    {person.lastName}, {person.firstName}
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    {person.reward ? person.reward : "no reward indicated"}
                  </p>
                  <p className="text-sm text-gray-500 text-center sm: hidden">
                    {person.offenses}
                  </p>
                </li>
              </Link>
            )
          )}
        </ul>
      </div>
    </main>
  );
};

export default Home;
