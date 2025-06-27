import React,{ useCallback, useEffect,useState } from 'react'
import axios from 'axios'
import EntriesForm from './EntriesForm'
import { toast } from 'react-toastify'
import { useSearch } from '../context/SearchContext';




const EntriesView = ({onEdit,refreshSignal}) => {

    const[entries, setEntries] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const[showViewModal, setShowViewModal]=useState(false);
    const [selectedEntry,setSelectedEntry] = useState(null)
 
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;


    const fetchEntries = useCallback(async()=>{
        try{
                const response = await axios.get(`http://localhost:5000/api/entries/user/${userId}`);
               setEntries(response.data); 
            }catch(error){
                console.error("Failed to fetch entries:", error);
            }
    },[userId])

    useEffect(()=>{
        if(userId) fetchEntries();
    },[userId,fetchEntries,refreshSignal]);

    useEffect(() => {
        if(refreshSignal) fetchEntries();

    },[refreshSignal,fetchEntries]);
    
    const handleView=(entry)=>{
        setSelectedEntry(entry);
        setShowViewModal(true);
    };

    
    const handleDelete =async(id)=>{
        if(!window.confirm('Are you sure you want to delete this entry')) return;
        try {

            const res= await axios.delete(`http://localhost:5000/api/entries/${id}`,{
                data: { user_id: userId },
            });

            toast.success(res.data.message || 'Entry deleted successfully');
            setEntries((prev)=>prev.filter((entry)=>entry.id !==id));
            
        } catch (error) {
            console.error('Delete Failed:',error);
            toast.error('Failed to delete entry. Try again later.');
            
        }
    }
    //for search and pagination
    const { searchTerm } = useSearch();
    const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const entriesPerPage = 4;
    const indexOfLast = currentPage * entriesPerPage;
    const indexOfFirst = indexOfLast - entriesPerPage;
    const currentEntries = filteredEntries.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);



  return (
    <div>
        <div className="flex flex-col gap-3">
           {currentEntries.map((entry) => (
                <div key={entry.id} className="bg-white shadow-md rounded-lg p-2 mb-4 hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer hover:shadow-blue-300">
                <div className='flex justify-between items-center'>
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    <div className="mt-2 flex gap-4">
                        <button 
                         onClick={() => handleView(entry)}
                        className="text-blue-600 hover:underline hover:cursor-pointer">View</button>
                        <button 
                        onClick={() => onEdit(entry)}
                        className="text-yellow-600 hover:underline hover:cursor-pointer">Edit</button>
                        <button
                         onClick={() => handleDelete(entry.id)}
                        className="text-red-600 hover:underline hover:cursor-pointer">Delete</button>
                    </div>

                </div>
               
                <p className="text-sm text-gray-500">
                    Mood: {entry.mood} | {new Date(entry.created_at).toLocaleDateString()}
                </p>
       
                </div>
            ))}
        </div>
         <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md hover:cursor-pointer ${
                currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
            >
                {i + 1}
            </button>
            ))}
        </div>
        {showViewModal && selectedEntry && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
                onClick={() => setShowViewModal(false)}
                className="absolute top-3 right-4 text-red-500 hover:text-blue-700 hover:cursor-pointer text-2xl"
            >
               X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedEntry.title}</h2>
            <p className="mb-2 text-gray-600 text-2xl">Mood: {selectedEntry.mood}</p>
            <p className="text-xl text-black">{selectedEntry.content}</p>
            <p className="mt-4 text-xs text-gray-400">
                {new Date(selectedEntry.created_at).toLocaleString()}
            </p>
            </div>
        </div>
        )}
    </div>
  )
}

export default EntriesView