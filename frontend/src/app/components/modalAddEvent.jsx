import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" ></div>
      <div className="flex flex-col shadow-2xl bg-white p-5 px-10 z-10 place-items-center rounded-lg ">
        <p className='font-bold text-purple-200 text-2xl mb-4'>
          Notice  
        </p>
        {children}
        <button className="mt-10 p-2 px-4 bg-purple-200 text-white rounded-2xl" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default Modal;
