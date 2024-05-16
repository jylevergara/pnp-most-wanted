import Person from "@/app/(models)/Person";
import { NextResponse } from "next/server";


// creating person data
export async function POST(req) {
  try {
    const body = await req.json();
    const personData = body.formData;
    await Person.create(personData);

    return NextResponse.json(
      { message: "Person Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const persons = await Person.find();
    return NextResponse.json({ persons }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
