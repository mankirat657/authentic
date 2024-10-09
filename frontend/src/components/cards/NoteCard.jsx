import React from 'react'
import { MdOutlinePushPin } from 'react-icons/md'
import { MdCreate, MdDelete } from 'react-icons/md'
const NoteCard = ({title,date,content,tags, isPinned, onEdit,onDelete,onPinNote}) => {
  return (
    <div className='border border-gray-700 rounded w-[30vw] p-4 bg-gray-900 hover:shadow-xl transition-all ease-in-out'>
        
        <div className="flex items-center justify-between">
            <div>
                <h6 className='text-sm font-medium'>{title}</h6>
                <span className="text-xs text-slate-500">{date}</span>
            </div>
            <MdOutlinePushPin className={`text-xl text-slate-300 cursor-pointer hover:text-primary ${isPinned ? 'text-primary' :'text-slate-300'}`} onClick={onPinNote} />   
        </div>
        <p className='text-xs text-slate-500'>{content?.slice(0,60)}</p>
        <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-slate-500">{tags}</div>
            <div className="flex items-center gap-2">
                <MdCreate
                    className='icon-btn hover:text-green-600'
                    onClick={onEdit}
                />
                <MdDelete
                    className='icon-btn hover:text-red-600'
                    onClick={onDelete}
                />    
            </div>
        </div>
    </div>
  )
}

export default NoteCard
