import { getData } from "../actions";
import SendData from "./components/SendData";
import DataComp from "./components/DataComp";

export default async function Page() {
  const data = await getData();
  return (
    <div className="w-screen h-screen bg-slate-600 flex flex-col gap-5 items-center justify-center">
      <SendData />
      <DataComp data={data}/>
    </div>
  );
}
