import React,{useState} from 'react'
import axios from 'axios'
import { IoIosSend } from "react-icons/io";

const ChatAssistant = ({onClose}) => {
    const[message, setMessage]= useState([]);
    const [input, setInput]= useState('');
    const sendMessage =async()=>{
        if(!input.trim()) return;
        const  userMessage = {
            from : 'user',text:input
        };
        setMessage((prev)=>[...prev,userMessage]);
        setInput('');
        try {
            const res = await axios.post('http://localhost:5000/api/ai/respond', { message: input });
            const aiMessage = {from:'ai', text:res.data.reply};
            setMessage((prev)=>[...prev,aiMessage]);
        } catch (err) {
            setMessage((prev)=>[...prev,{from:'ai',text:'Sorry,something went wrong.'}]);
        }
    }
  return (
   <div className="fixed bottom-24 right-10 w-80 bg-white border rounded-lg shadow-lg z-50 flex flex-col">
      <div className="flex justify-between items-center p-2 border-b bg-blue-100 rounded-t">
        <h3 className="font-semibold text-blue-700">AI Support Assistant</h3>
        <button onClick={onClose} className="text-sm text-red-500 px-2 hover:cursor-pointer">✕</button>
      </div>
      <div className="flex-1 p-2 overflow-y-auto space-y-2 max-h-64">
        {message.map((msg, i) => (
          <div key={i} className={`text-sm ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-2 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow text-sm p-2 border rounded-md outline-none"
          placeholder="How are you feeling?"
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className=" hover:text-white p-2 rounded-full hover:cursor-pointer text-sm hover:bg-gray-100"
        >
         <IoIosSend className='text-2xl text-blue-400 '/>
        </button>
      </div>
    </div>
  )
}

export default ChatAssistant