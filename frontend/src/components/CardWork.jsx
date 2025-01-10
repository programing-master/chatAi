import React from "react";
import { AiFillEdit } from "react-icons/ai";
import Button from "./Button";
export default function CardWork({ props }) {
  return (
    <div className="w-[100%] sm:w-[100%] lg:w-[100%] min-h-[30vh] pb-4   rounded border border-gray-700 mt-2">
      <div className="bg-light-primary w-full h-[12%] text-sm flex items-center justify-between p-1">
        <div className="px-1">{props.name}</div>
      </div>
      <div className=" h-[88%]">
        <p className="text-sm p-4 text-gray-400">{props.description}</p>
        <section className="text-sm p-4 text-gray-300 flex flex-col gap-2 ">
          <div> Location: {props.place}</div>
          <div> Prize: ${props.salary}.00</div>
        </section>
        <div className="px-2  w-[100%]  text-center flex flex-col md:flex-row gap-2">
            <button onClick={()=>navigate("/new-job")} className="border-2 p-4 flex items-center justify-center w-full border-dark-primaryContainer transition hover:scale-x-[1]  hover:shadow hover:shadow-green-200 hover:s hover:border-dark-onPrimary text-dark-onPrimaryContainer rounded-full h-10">
              Apply
            </button>
            <Button onClick={()=>navigate("/new-job")} >
              More
            </Button>
          </div>
      </div>
    </div>
  );
}
