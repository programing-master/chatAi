import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
    const navigate = useNavigate();

  return (
    <div className="p-2 fixed bg-dark-onPrimary/70 backdrop-blur-xl w-full ">
      <div className="w-[99%] flex justify-between  mt-1 rounded p-4  h-12 items-center ">
        <Link to={"/"} className="flex w-[10%] items-center gap-2 h-10 p-2">
          <img
            width={23}
            height={24}
            className=""
            src="https://th.bing.com/th/id/R.ff7bb8889e59d2efffc9a69a3173ca7a?rik=LOuG%2f8LTwTgY9Q&pid=ImgRaw&r=0"
            alt="photo of logo"
          />
          <span>AngelicaVibes</span>
        </Link>
        
        

       
      </div>

      <div className="text-sm w-full flex items-center justify-start px-4 ">
        {" "}
      Created by  <span className="text-dark-surfaceTint/50"> Javier Ernesto Valladares Alonso</span>
      </div>
    </div>
  );
}
