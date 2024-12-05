"use server";

import Note from "@/model/Note";
const mongoose = require("mongoose");

async function handler(data) {
  try {
    const { title, age } = data;
    await mongoose
      .connect("mongodb://localhost:27017/next", {
        useNewUrlParser: true,
      })
      .then(() => console.log("connected to DB"));
    let newNote = new Note({ title, age });
    await newNote.save();
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}

export async function getProps() {
  const mongoose = require("mongoose");
  const Note = require("@/model/Note");
  await mongoose
    .connect("mongodb://localhost:27017/next", {
      useNewUrlParser: true,
    })
    .then(() => console.log("connected"));
  const notes = await Note.find();

  const json = JSON.stringify(notes);
  return JSON.parse(json);
}

export async function handleDelete(id) {
  const mongoose = require("mongoose");
  const Note = require("@/model/Note");
  await mongoose
    .connect("mongodb://localhost:27017/next", {
      useNewUrlParser: true,
    })
    .then(() => console.log("connected"));
  await Note.deleteOne({ _id: id });
}

export async function handleUpdate(id, data) {
  const mongoose = require("mongoose");
  const Note = require("@/model/Note");
  await mongoose
    .connect("mongodb://localhost:27017/next", {
      useNewUrlParser: true,
    })
    .then(() => console.log("connected"));
  await Note.findByIdAndUpdate(id, { title: data.title, age: data.age });
}

export default handler;
