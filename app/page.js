"use client";

import handler from "@/api/newNote";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState();
  const handleSubmit = () => {
    console.log(state);
    const obj = { title: state };
    handler(obj);
  };
  return (
    <div className="w-full flex justify-around">
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        className="shadow-lg"
      />
      <input type="button" value="send" onClick={handleSubmit} />
    </div>
  );
}
