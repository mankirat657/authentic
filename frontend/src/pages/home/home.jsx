import React, { useState, useEffect } from 'react';
import NoteCard from '../../components/cards/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modall from '../../components/Modall';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {user} = useUser()
  console.log(user);
  

  return (
    <>
      <div className='w-full pl-9'>
        <h1 className='font-semibold text-3xl pt-8'>Welcome <span className='text-blue-200'>{user.name}</span></h1>
        <p>Start creating some notes</p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard 
            title="Meeting on 11th October" 
            date="3rd April 2025" 
            content="Meeting on 11th October" 
            tags="#meetings" 
            isPinned={true} 
            onEdit={() => {}} 
            onDelete={() => {}} 
            onPinNote={() => {}} 
          />
        </div>
      </div>

      <button 
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
        onClick={() => setIsModalOpen(true)} 
      >
        <MdAdd className='text-[32px] text-white' />
      </button>

      <Modall 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <AddEditNotes />
      </Modall>
    </>
  );
};

export default Home;
