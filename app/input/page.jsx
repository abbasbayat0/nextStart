/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/button";
import { save } from "@/lib/action";
import Image from "next/image";
import { useRef, useState } from "react";
function page() {
  const [state, changeState] = useState(null);
  const ref = useRef();
  const click = () => {
    ref.current.click();
  };

  async function change(e) {
    const file = e.target.files[0];
    if (!file) {
      changeState(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => changeState(fileReader.result);
    fileReader.readAsDataURL(file);

    // save image in public
    console.log("hey");
    save(file);
  }
  return (
    <form
      action={setTimeout(() => {
        console.log("hello");
      }, 2000)}
    >
      <input
        type="file"
        accept="image/jpg"
        className="hidden"
        ref={ref}
        onChange={change}
      />
      <input
        type="button"
        value="pick an image"
        className="bg-slate-300 cursor-pointer"
        onClick={click}
      />
      <div className="w-[500px] h-[250px] overflow-hidden bg-red-300">
        {state && <Image src={state} alt="hello" width={500} height={250} />}
      </div>

      <Button />
    </form>
  );
}

export default page;
