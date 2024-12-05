"use client";

import handler, { getProps, handleDelete, handleUpdate } from "@/lib/action";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState();
  const [stateAge, setStateAge] = useState();
  const [result, setResult] = useState();
  const handleSubmit = () => {
    console.log(state);
    const obj = { title: state, age: stateAge };
    handler(obj);
  };

  useEffect(() => {
    const func = async () => {
      try {
        const res = await getProps();
        setResult(res);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  return (
    <div className="w-full flex flex-col justify-around">
      <div className="flex">
        <input
          type="text"
          onChange={(e) => setState(e.target.value)}
          className="shadow-lg"
        />
        <input
          type="text"
          onChange={(e) => setStateAge(e.target.value)}
          className="shadow-lg"
        />
        <input type="button" value="send" onClick={handleSubmit} />
      </div>
      <div>
        {result?.map((res) => (
          <div key={res._id}>
            <p>{res.title}</p>
            <p onClick={() => handleDelete(res._id)}>delete</p>
            <p onClick={() => handleUpdate(res._id, { title: "ha", age: 8 })}>
              update
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
