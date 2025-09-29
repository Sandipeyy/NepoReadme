import React from "react";
import { useNepoStore } from "../mobx/Nepocontext";

export default function CheckBox({ id, title }) {
  const nepoStore = useNepoStore();
  function chk() {
    nepoStore.data.checkbox[id] = document.getElementById(id).checked;
  }
  return (
    <p className="flex w-max items-center my-2">
      <input
        type="checkbox"
        name=""
        id={id}
        defaultChecked={nepoStore.data.checkbox[id]}
        onChange={chk}
        className="w-4 h-4 mr-2 outline-none"
      />
      {title}
    </p>
  );
}