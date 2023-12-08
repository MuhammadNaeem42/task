'use client';
import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ShareIcon, LightBulbIcon, ChatBubbleOvalLeftIcon, BookOpenIcon, FolderOpenIcon } from '@heroicons/react/24/solid';
import Chat from '../dashboard/Chat';
import DraggableComponent from './DraggableComponent';
import Usecase from '../dashboard/Usecase';

function Hero() {
  const [selectedTab, setSelectedTab] = useState('chat');

  const renderContent = () => {
    switch (selectedTab) {
      case 'articulym':
        return <div>Articulym content here</div>;
      case 'usecase':
        return <Usecase />;
      case 'chat':
        return <Chat />;
      case 'library':
        return <div>Library content here</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className='px-4 py-5 sm:px-6 w-full bg-[#131619]'>
      <div className=' bg-[#0D0F10] text-[#9B9C9E] p-5 rounded-lg'>
        <div className='flex space-x-3'>
          <div className='min-w-0 flex-1'>
            <p className='text-sm font-semibold text-white'>Problem</p>
            <p className='text-sm '>Articulate your problem</p>
          </div>
          <div className='flex flex-shrink-0 self-center gap-4'>
            <a
              href='#'
              className='flex items-center hover:text-gray-600'>
              <ShareIcon
                className='h-5 w-5 mr-1'
                aria-hidden='true'
              />
              <span>Share</span>
            </a>

            <button className=' rounded-lg p-2 bg-[#1A1D21] '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'>
                <path
                  d='M16.6668 15.833H10.4168M3.3335 13.2097V15.6663C3.3335 15.7584 3.40812 15.833 3.50016 15.833H5.95677C6.00097 15.833 6.04336 15.8154 6.07462 15.7842L14.8823 6.97647C14.9474 6.91139 14.9474 6.80586 14.8823 6.74077L12.4257 4.28417C12.3606 4.21908 12.2551 4.21908 12.19 4.28417L3.38231 13.0919C3.35106 13.1231 3.3335 13.1655 3.3335 13.2097Z'
                  stroke='#CDCECF'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='tabs mt-9 '>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${selectedTab === 'articulym' ? 'tab-active text-success' : ''}`}
            onClick={() => setSelectedTab('articulym')}>
            <LightBulbIcon className='h-5 w-5 mr-1 inline-block' />
            Artificiym
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${selectedTab === 'chat' ? 'tab-active text-success' : ''}`}
            onClick={() => setSelectedTab('chat')}>
            <ChatBubbleOvalLeftIcon className='h-5 w-5 mr-1 inline-block' />
            Chat
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${selectedTab === 'library' ? 'tab-active text-success' : ''}`}
            onClick={() => setSelectedTab('library')}>
            <FolderOpenIcon className='h-5 w-5 mr-1 inline-block' />
            Library
          </a>
          <a
            className={`tab tab-bordered text-[#9B9C9E] ${selectedTab === 'usecase' ? 'tab-active text-success' : ''}`}
            onClick={() => setSelectedTab('usecase')}>
            <FolderOpenIcon className='h-5 w-5 mr-1 inline-block' />
            Usecase
          </a>
        </div>
      </div>
      <div className='mt-4'>{renderContent()}</div>
    </div>
  );
}

export default Hero;
