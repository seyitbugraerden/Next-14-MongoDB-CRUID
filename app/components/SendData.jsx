"use client";

import { createTodo } from "../../actions";
import { useState } from "react";

export default function SendData() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          await createTodo(value);
          setValue("")
        }}
        className="px-3 py-2 bg-slate-500 my-3"
      >
        Veri ekle
      </button>
    </div>
  );
}
