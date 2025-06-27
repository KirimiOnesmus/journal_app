
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EntriesForm = ({initialData, onSubmit, onClose}) => {
    const safeData = initialData || {};
    const [title, setTitle] = useState("");
    const [mood, setMood] = useState("");
    const [content, setContent] = useState("");

    const user =JSON.parse(localStorage.getItem('user'));
    const userId =user?.id;

    useEffect(()=>{
      if(safeData){
      setTitle(safeData.title || "");
      setMood(safeData.mood || "");
      setContent(safeData.content || "");
      }
    },[safeData])

    const handleSubmit = async (e) => {
    e.preventDefault();



    if(!user?.id) return toast.error('User not loggged in');
    const entryData ={
      user_id:userId,
      title,
      mood,
      content,
    };
    try{
      if(initialData .id){
        const res = await axios.put(
          `http://localhost:5000/api/entries/${safeData.id}`,
          entryData
        );
        toast.success(res.data.message || 'Entry Updated');
      }else{
      const res = await axios.post('http://localhost:5000/api/entries', entryData);
      toast.success(res.data.message || 'Entry Saved Successfully');
      }
      onSubmit?.(); //trigger refresh in parent if passed..
      onClose();
    }catch(error){
      console.error("Failed to save entry:",error);
      toast.error("Failed to save the entry")
    }

     };
  return (
     <div 
     className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-md z-50 flex justify-center items-center p-4"
     >
      <div 
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-xl hover:cursor-pointer">X</button>
        <h2 className="text-xl font-semibold mb-4">{safeData.id ? "Edit Journal Entry" : "New Journal Entry"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full border rounded-md p-2"
            required
          >
            <option value="">Select Mood</option>
            <option value="😊Happy">Happy 😊</option>
            <option value="😔Sad">Sad 😔</option>
            <option value="😐Neutral">Neutral 😐</option>
            <option value="😠Anger">Anger 😠</option>
            <option value="😜Silly">Sarcasm/Silly 😜</option>
            <option value="😕Confused">Confused 😕</option>
            <option value="❤️Love">Full of Love ❤️</option>

          </select>

          <textarea
            placeholder="Write your thoughts..."
            className="w-full border rounded-md p-2 h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline hover:cursor-pointer">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer"> {safeData.id ? "Update" : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EntriesForm