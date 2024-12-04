"use server";

import Note from "@/model/Note";
const mongoose = require("mongoose");

async function handler(data) {
  try {
    const { title } = data;
    await mongoose
      .connect("mongodb://localhost:27017/next", {
        useNewUrlParser: true,
      })
      .then(() => console.log("connected to DB"));
    let newNote = new Note({ title });
    await newNote.save();
  } catch (error) {
    console.log(errors);
    res.status(500).json({ error: "che shod ?" });
  } finally {
    mongoose.connection.close();
  }
}

export default handler;
