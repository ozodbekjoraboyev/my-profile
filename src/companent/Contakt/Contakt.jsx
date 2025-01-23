import React from "react";

function Concat() {
  return (
    <div>
      <div className=" container text-center pt-52">
        <div className="flex items-center gap-4 justify-center">
          <h1 className=" font-bold text-3xl ">Telefon:</h1>
          <h1 className=" font-semibold text-2xl cursor-pointer">
            +998 97 056 79 85
          </h1>
        </div>{" "}
        <div className="flex items-center gap-4 justify-center  pb-[401px]">
          <h1 className=" font-bold text-3xl ">Telegram:</h1>
          <h1 className=" font-semibold text-2xl cursor-pointer">
            <a href="https://t.me/developerOzodbek"> Ozodbek..
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Concat;
