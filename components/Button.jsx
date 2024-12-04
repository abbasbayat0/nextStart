"use client";

import { useFormState } from "react-dom";

export const Button = () => {
  const { pending } = useFormState();
  return <button disabled={pending}>{pending ? "hello" : "bye"}</button>;
};
