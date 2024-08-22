import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const personSchema = new Schema(
  {
    id: String,
    lastName: String,
    firstName: String,
    offenses: String,
    issuingCourt: String,
    alias: String,
    reward: Number,
    dilgMcNo: String,
    criminalCaseNo: String,
    region: String,
    imageUrl: String,
    active: Boolean,
  },
  { timestamps: true, collection: "persons" }
);

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
export default Person;
