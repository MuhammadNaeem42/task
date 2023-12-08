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

import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/services/chatManagement";

type Chat = {
  role: string;
  content: string;
};
type Props = {};

const InsightSolution = (props: Props) => {
  const [chatInput, setChatInput] = useState("");

  const [chats, setChats] = useState<Chat[]>([]);

  const [sendMessage] = useSendMessageMutation();

  const handleChatInput = (e: any) => {
    e.preventDefault();
    setChatInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setChats((oldArr) => [...oldArr, { role: "user", content: chatInput }]);

    try {
      const data = await sendMessage(
        JSON.stringify({
          message: chatInput,
        })
      ).unwrap();

      setChatInput("");
      setChats((oldArr) => [
        ...oldArr,
        { role: "assistant", content: data?.response },
      ]);
      return data;
    } catch (error) {
      console.error("rejected", error);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <div className="px-4 py-10 sm:px-6 w-full bg-[#131619]">
      <div className=" bg-[#0D0F10] text-[#9B9C9E] p-5 rounded-lg">
        <div className="flex space-x-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white">Modules</p>
            {/* <p className="text-sm ">Articulate your problem</p> */}
          </div>
          {/* <div className="flex flex-shrink-0 self-center gap-4">
            <a href="#" className="flex items-center hover:text-gray-600">
              <ShareIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              <span>Share</span>
            </a>

            <button className=" rounded-lg p-2 bg-[#1A1D21] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6668 15.833H10.4168M3.3335 13.2097V15.6663C3.3335 15.7584 3.40812 15.833 3.50016 15.833H5.95677C6.00097 15.833 6.04336 15.8154 6.07462 15.7842L14.8823 6.97647C14.9474 6.91139 14.9474 6.80586 14.8823 6.74077L12.4257 4.28417C12.3606 4.21908 12.2551 4.21908 12.19 4.28417L3.38231 13.0919C3.35106 13.1231 3.3335 13.1655 3.3335 13.2097Z"
                  stroke="#CDCECF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="tabs mt-9 ">
          {/* <a
            className={`tab tab-bordered text-[#9B9C9E] ${
              selectedTab === "articulym" ? "tab-active text-success" : ""
            }`}
            onClick={() => setSelectedTab("articulym")}
          >
            <LightBulbIcon className="h-5 w-5 mr-1 inline-block" />
            Artificiym
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${
              selectedTab === "chat" ? "tab-active text-success" : ""
            }`}
            onClick={() => setSelectedTab("chat")}
          >
            <ChatBubbleOvalLeftIcon className="h-5 w-5 mr-1 inline-block" />
            Chat
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${
              selectedTab === "library" ? "tab-active text-success" : ""
            }`}
            onClick={() => setSelectedTab("library")}
          >
            <FolderOpenIcon className="h-5 w-5 mr-1 inline-block" />
            Library
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${
              selectedTab === "usecase" ? "tab-active text-success" : ""
            }`}
            onClick={() => setSelectedTab("usecase")}
          >
            <FolderOpenIcon className="h-5 w-5 mr-1 inline-block" />
            Usecase
          </a> */}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row gap-4 h-screen">
          {/* Left div taking more space */}
          <div className="flex flex-col w-3/4 h-[700px]  gap-2">
            {/* Other content can go here */}
            <section className="bg-[#0D0F10] h-full rounded-xl overflow-auto flex flex-col p-6 ">
              <div>
                {/* {chats.map((message: any, index: any) => {
                  return message.role !== "user" ? (
                    <div key={index} className="chat chat-start">
                      <div className="chat-bubble">{message.content}</div>
                    </div>
                  ) : (
                    <div key={index} className="chat chat-end">
                      <div className="chat-bubble">{message.content}</div>
                    </div>
                  );
                })} */}
                {/* <div>Module one</div>
                <div>Feature One</div>
                <div>Feature Two</div> */}
                <ul className="menu  w-56 rounded-box">
                  <li className="mb-1">
                    <details open>
                      <summary className="bg-slate-600 text-lg">
                        Module One
                      </summary>
                      <ul>
                        <li>
                          <a>Feature One</a>
                        </li>
                        <li>
                          <a>Feature Two</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="mb-1">
                    <details open>
                      <summary className="bg-slate-600 text-lg">
                        Module Two
                      </summary>
                      <ul>
                        <li>
                          <a>Feature One</a>
                        </li>
                        <li>
                          <a>Feature Two</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="mb-1">
                    <details open>
                      <summary className="bg-slate-600 text-lg">
                        Module Three
                      </summary>
                      <ul>
                        <li>
                          <a>Feature One</a>
                        </li>
                        <li>
                          <a>Feature Two</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </section>

            {/* Input at the bottom */}
            {/* <div className="flex items-center mt-auto p-4 bg-[#0D0F10] rounded-xl gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 10V11C6 14.3137 8.68629 17 12 17M18 10V11C18 14.3137 15.3137 17 12 17M12 17V21M12 21H16M12 21H8M12 14C10.3431 14 9 12.6569 9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11C15 12.6569 13.6569 14 12 14Z"
                  stroke="#686B6E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="flex-grow  p-2 mr-1 !outline-none bg-transparent"
                placeholder="Enter your prompt"
                value={chatInput}
                onChange={(e) => handleChatInput(e)}
                onKeyDown={(event) => handleKeyDown(event)}
              />
              <button className=" rounded-r p-2">
                <PaperClipIcon className="h-6 w-6 text-slate-500" />
              </button>
              <button
                className=" rounded-lg p-2 bg-[#1A1D21] "
                onClick={(e) => handleSubmit(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z"
                    stroke="#CDCECF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Right div taking lesser space */}
          <div className="flex flex-col w-1/4 h-[700px] gap-3">
            {/* Content for the right div goes here */}
            <section className="bg-[#0D0F10] h-full rounded-xl p-6">
              <div>
                {/* {chats.map((message: any, index: any) => {
                  return message.role !== "user" ? (
                    <div key={index} className="chat chat-start">
                      <div className="chat-bubble">{message.content}</div>
                    </div>
                  ) : (
                    <div key={index} className="chat chat-end">
                      <div className="chat-bubble">{message.content}</div>
                    </div>
                  );
                })} */}
                <div className="chat chat-start">
                  <div className="chat-bubble">Hello</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-bubble">Hi</div>
                </div>
              </div>
            </section>

            {/* Tabs at the bottom */}
            <div className="tabs bg-[#0D0F10] tabs-boxed mt-auto flex justify-between text-base p-5">
              <a className="tab">Chat</a>
              {/* <a className="tab">Members</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightSolution;
