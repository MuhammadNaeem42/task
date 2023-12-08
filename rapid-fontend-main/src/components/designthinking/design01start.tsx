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
  FolderOpenIcon
} from "@heroicons/react/24/solid";

const Design = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-2">
        {"Ready to create? Let's start something exciting..."}
      </h2>
      <h2 className="border-[#0D0F10] border-dotted text-center text-xl text-muted text-[#404240] mt-8">
        Give your idea a name and watch it come to life
      </h2>
      <input
        className="border-b-2 border-[#404240] bg-[#0D0F10] text-center text-xl w-full mt-8"
        autoFocus
        type="text"
      />
    </div>
  );
};

export default Design;
