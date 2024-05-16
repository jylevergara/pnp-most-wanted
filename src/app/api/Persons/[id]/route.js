import Person from "@/app/(models)/Person";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const person = await Person.findOne({ _id: id});
    return NextResponse.json(person, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
