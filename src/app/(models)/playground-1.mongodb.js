/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("PersonsDB");

// Insert a few documents into the persons collection.
db.getCollection("persons").insertMany([
  {
    name: "TEJERO, Bobby Novero",
    offenses: "Robbery; Grave Coercion; Murder (3 counts); Arson",
    issuingCourt: "RTC 11th JR, Br 28, Lianga, Surigao del Sur",
    alias: null,
    reward: 1200000,
    dilgMcNo: "2015-136",
    criminalCaseNo: "L-2854, L-2855, L-2856, L-2857, L-2858 & L-2859",
    region: "13",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "FAJARDO, Harold Lumbres",
    offenses: "KFR; Violation of RA 6539 (Anti Carnapping Act)",
    issuingCourt: "RTC Br 89, Bacoor Cavite",
    alias: "Harold",
    reward: 1000000,
    dilgMcNo: "2004-12",
    criminalCaseNo: "B-2002-198; B-2002-199",
    region: "4A",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "ARTUZ, Joselito Adea",
    offenses: "Violation of RA 9165 (Sale of Dangerous Drugs)",
    issuingCourt: "RTC 1st JR, Br 33, Bauang, La Union",
    alias: "George Cordero/ Joey",
    reward: 1000000,
    dilgMcNo: "2017-51",
    criminalCaseNo: "3662-BG",
    region: "1",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "DE GUZMAN, Cesar",
    offenses: "Double Murder; Frustrated Murder",
    issuingCourt: "RTC, 1st JR, Br 57 & 56, San Carlos City, Pangasinan",
    alias: "Cabesa",
    reward: 1000000,
    dilgMcNo: "2008-09",
    criminalCaseNo: "4887; 4907",
    region: "1",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "DICKPUS, Corey",
    offenses: "Murder",
    issuingCourt: "RTC Br 25, Tabuk, Kalinga",
    alias: null,
    reward: null,
    dilgMcNo: null,
    criminalCaseNo: "26-97",
    region: null,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "IRAN, Eduardo",
    offenses:
      "Robbery/Hold-up/Kidnapping with Murder/Frustrated Murder/Attempted Murder",
    issuingCourt:
      "RTC Br1, Kalibo, Aklan; RTC Br 12, San Jose, Antique; MCTC Br 1, Gen Santos City",
    alias: "Boy Muslim/Israel Iran",
    reward: 1000000,
    dilgMcNo: "93-56",
    criminalCaseNo:
      "2402; 32801; 30323; 30373; 3032; 3355; 3354; 3352; 3351; 3350",
    region: "6",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]);

// db.getCollection("persons").find()

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
