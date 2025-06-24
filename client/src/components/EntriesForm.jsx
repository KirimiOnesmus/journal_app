
import React, { useState } from 'react';

const EntriesForm = ({onClose}) => {
    const [title, setTitle] = useState("");
    const [mood, setMood] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    alert("Entry saved!");
    onClose(); 
     };
  return (
     <div 
     className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-md z-50 flex justify-center items-center p-4"
     >
      <div 
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-xl hover:cursor-pointer">X</button>
        <h2 className="text-xl font-semibold mb-4">New Journal Entry</h2>
        
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
            <option value="😊">Happy</option>
            <option value="😔">Sad</option>
            <option value="😐">Neutral</option>
            <option value="😠">Anger</option>
            <option value="😜">Sarcasm/Silly</option>
            <option value="😕">Confused</option>
            <option value="❤️">Full of Love</option>

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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EntriesForm