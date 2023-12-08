//@ts-nocheck
import EnergyGraph from "@/components/EnergyGraph";


async function getData() {
  const res = await fetch("http://localhost:3000/api/getdata");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const json = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return json;
}

export default async function Monitor() {

 const data = await getData();
//  console.log(data);

  return (
    <div className="md:p-10 p-2 flex justify-center items-center w-max mx-auto">
      <div className="">
        <span className="text-2xl text-center flex justify-center w-full mb-5">
          Energy Graph
        </span>
        <div>
          <EnergyGraph energyData={data} />
        </div>
      </div>
    </div>
  );
}
