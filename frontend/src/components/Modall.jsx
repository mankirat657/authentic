import React from 'react';

const Modall = ({ isOpen, onClose }) => {
    return (
        <dialog id="my_modal_3"  className={`modal ${isOpen ? 'open' : ''}`} open={isOpen}>
            <div className="modal-box relative p-8 overflow-hidden border border-gray-700   rounded-lg shadow-lg max-w-[600px] w-full">
                <button 
                    onClick={onClose} 
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none" 
                    aria-label="Close"
                >
                    ✕
                </button>

                <h3 className="font-bold text-2xl mb-4">Create a Note</h3>

                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-lg font-semibold">Title</label>
                    <input
                        type="text"
                        className="input input-bordered w-full py-2 px-4 rounded-md shadow-sm focus:ring focus:ring-primary focus:outline-none"
                        placeholder="Enter a title, e.g., Go to gym at 5"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-lg font-semibold">Content</label>
                    <textarea 
                        className="textarea textarea-primary w-full h-32 py-2 px-4 rounded-md resize-none shadow-sm focus:ring focus:ring-primary focus:outline-none" 
                        placeholder="Write your content here"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-lg font-semibold">Tags</label>
                    <input 
                        type="text" 
                        className="input input-bordered w-full py-2 px-4 rounded-md shadow-sm focus:ring focus:ring-primary focus:outline-none" 
                        placeholder="e.g., #meetings #workout"
                    />
                </div>

                <div className="text-right">
                    <button 
                        className="bg-primary hover:bg-primary-dark font-medium text-white w-[120px] rounded-lg py-2 px-4 transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary" 
                        onClick={() => {}}
                    >
                        Add Note
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default Modall;
