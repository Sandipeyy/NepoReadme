import React, { useEffect, useState } from "react";
import { useNepoStore } from "../../mobx/Nepocontext";

export default function TextInputWithIcon({
  id,
  children,
  placeholder,
  viewBox = "-0.5 0 20 16",
}) {
  const nepoStore = useNepoStore();
  const [input, setInput] = useState(nepoStore.data.socials[id]);
  useEffect(() => {
    nepoStore.data.socials[id] = input;
  }, [input]);
  return (
    <div className="flex w-full md:w-5/12 my-2">
      <input
        type="text"
        id={id}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full h-16 p-4 border-b-2 bg-transparent outline-none border-green-300 focus:border-green-200 focus:z-10"
      />

      <label htmlFor={id} className="p-5">
        <span className="sr-only"> {id} </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={viewBox}
          stroke="currentColor"
          aria-hidden="true"
          className="w-8 h-8 text-green-300 opacity-75"
        >
          {children}
        </svg>
      </label>
    </div>
  );
}