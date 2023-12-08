import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useGetMessagesQuery, useSendMessageMutation } from '@/services/chatManagement';

type Chat = {
  role: string;
  content: string;
};

function Chat() {
  const [chatInput, setChatInput] = useState('');

  const [chats, setChats] = useState<Chat[]>([]);

  const [sendMessage] = useSendMessageMutation();

  const handleChatInput = (e: any) => {
    e.preventDefault();
    setChatInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setChats((oldArr) => [...oldArr, { role: 'user', content: chatInput }]);

    try {
      const data = await sendMessage(
        JSON.stringify({
          message: chatInput,
        }),
      ).unwrap();

      setChatInput('');
      setChats((oldArr) => [...oldArr, { role: 'assistant', content: data?.response }]);
      return data;
    } catch (error) {
      console.error('rejected', error);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className='flex flex-row h-screen'>
      {/* Left div taking more space */}
      <div className='flex flex-col w-3/4 h-[700px]  gap-2 mx-3 '>
        {/* Other content can go here */}
        <section className='bg-gray-400 h-full rounded-xl overflow-auto flex flex-col-reverse p-6 '>
          <div>
            {chats.map((message: any, index: any) => {
              return message.role !== 'user' ? (
                <div
                  key={index}
                  className='chat chat-start'>
                  <div className='chat-bubble'>{message.content}</div>
                </div>
              ) : (
                <div
                  key={index}
                  className='chat chat-end'>
                  <div className='chat-bubble'>{message.content}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Input at the bottom */}
        <div className='flex items-center mt-auto p-4 bg-[#0D0F10] rounded-xl gap-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M6 10V11C6 14.3137 8.68629 17 12 17M18 10V11C18 14.3137 15.3137 17 12 17M12 17V21M12 21H16M12 21H8M12 14C10.3431 14 9 12.6569 9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11C15 12.6569 13.6569 14 12 14Z'
              stroke='#686B6E'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <input
            type='text'
            className='flex-grow  p-2 mr-1 !outline-none bg-transparent'
            placeholder='Enter your prompt'
            value={chatInput}
            onChange={(e) => handleChatInput(e)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
          <button className=' rounded-r p-2'>
            <PaperClipIcon className='h-6 w-6 text-slate-500' />
          </button>
          <button
            className=' rounded-lg p-2 bg-[#1A1D21] '
            onClick={(e) => handleSubmit(e)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'>
              <path
                d='M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z'
                stroke='#CDCECF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right div taking lesser space */}
      <div className='flex flex-col w-1/4 h-[700px] gap-3'>
        {/* Content for the right div goes here */}
        <section className='bg-gray-400 h-full rounded-xl '></section>

        {/* Tabs at the bottom */}
        <div className='tabs tabs-boxed mt-auto border-t flex justify-between text-base p-5'>
          <a className='tab'>Chats</a>
          <a className='tab'>Members</a>
        </div>
      </div>
    </div>
  );
}

export default Chat;
