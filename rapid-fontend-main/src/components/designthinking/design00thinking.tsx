"use client";
import React, { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import  Design  from "./design01start";
import  DesignUser  from "./design02user";
import  DesignImprove  from "./design03improve";
import  DesignStruggles  from "./design04struggles";
import  DesignAnalogy  from "./design05analogy";
import  DesignPerfect  from "./design06perfect";
import  DesignGreat  from "./design07great";

import {
  ShareIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftIcon,
  BookOpenIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";

const DesignThinking = () => {
  //step=useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  const handleClick = async  (e: any) => {
    e.preventDefault();
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
    else{
      setCurrentStep(currentStep -6);
    }
    console.log(currentStep)
  };


  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Design />;
      case 1:
        return <DesignUser />;
      case 2:
          return <DesignImprove />;
      case 3:
          return <DesignStruggles />;
      case 4:
          return <DesignAnalogy />;
      case 5:
          return <DesignPerfect />;
      case 6:
          return <DesignGreat />;
      default:
        return null;
    }
  };

  
return(
  <div className="px-4 py-10 sm:px-6 w-full bg-[#131619]">
    <div className="bg-[#0D0F10] text-[#9B9C9E] p-8 rounded-lg">
      <p className="text-lg font-semibold text-white p-2">Design Thinking</p>
      <div className="flex justify-between mt-2 text-center">
        <div className={"p-4 rounded-l-lg w-1/6 border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 0 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>1</div>
        <div className={"p-4 rounded-none w-1/6 border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 1 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>2</div>
        <div className={"p-4 rounded-none w-1/6  border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 2 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>3</div>
        <div className={"p-4 rounded-none w-1/6  border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 3 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>4</div>
        <div className={"p-4 rounded-none w-1/6  border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 4 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>5</div>
        <div className={"p-4 rounded-r-lg w-1/6  border border-[#404240] ring-3 ring-[#404240] " + (currentStep > 5 ? "text-lg text-[#000] bg-[#32CD32]" : "text-lg")  }>6</div>
      </div>
    </div>
    <div className="mt-0">             
      <section className="h-[500px] w-full bg-[#0D0F10] h-full rounded-lg overflow-auto  p-5 mt-2">
        {renderStep()}
      </section>  
    </div>
    <div className="w-full bg-[#0D0F10] text-[#9B9C9E] p-4 rounded-lg mt-2">
      <div className="self-center" >
      <button onClick={(e) => handleClick(e)} className="object-center flex flex-row border border-[#404240] text-[#404240] rounded-md p-3 transition transform hover:scale-125 hover:bg-[#404240] hover:text-[#FFF] active:text-[#404240] active:scale-100"  type="button">{(currentStep<7?"Next":"Done")}</button>
      
      </div>
    </div>
  </div>
);

}
export default DesignThinking;