"use client";
import React, { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  ShareIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftIcon,
  BookOpenIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";


const DesignPerfect = () => {
  return (
    <div>
    <h2 className="text-center text-3xl mt-8">In a perfect world, we would be able to...</h2>
    
    <input className="border-b-2 border-[#404240] bg-[#0D0F10] text-center text-xl w-full mt-8" autoFocus type="text" />
  </div>
  );
};

export default DesignPerfect;
