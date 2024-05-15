'use client'
import { deleteTodo } from "../../actions";

export default function DataComp({ data }) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <div key={item.id} className="flex flex-row justify-between items-center gap-5">
          <p>{item.title}</p>
          <button onClick={()=>{deleteTodo(item.id)}} className="px-3 py-2 bg-slate-500">Sil</button>
        </div>
      ))}
    </div>
  );
}
