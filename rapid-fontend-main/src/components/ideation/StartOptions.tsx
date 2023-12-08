import React from "react";

type Props = {};

const StartOptions = (props: Props) => {
  return (
    <div className="w-full min-h-full bg-[#131619] flex justify-center items-center">
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[#0d0f10] py-12 px-4 font-semibold flex items-center justify-center rounded-md text-xl">
            1. Start with a problem
          </div>
          <div className="bg-[#0d0f10] py-12 font-semibold px-4 flex items-center justify-center rounded-md text-xl">
            2. Insert design thinking artifacts
          </div>
          <div className="bg-[#0d0f10] py-12 font-semibold px-4 flex items-center justify-center rounded-md text-xl">
            3. Input data of a problem
          </div>
          <div className="bg-[#0d0f10] py-12 font-semibold px-4 flex items-center justify-center rounded-md text-xl">
            4. Start with a solution
          </div>
          <div className="bg-[#0d0f10] py-12 font-semibold px-4 flex items-center justify-center rounded-md text-xl">
            5. Forcasting
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartOptions;
