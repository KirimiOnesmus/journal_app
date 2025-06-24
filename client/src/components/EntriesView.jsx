import React,{ useState } from 'react'

  const allEntries = [
    { id: 1, title: "Felt productive today", mood: "😊", date: "2025-06-18" },
    { id: 2, title: "Tough day", mood: "😔", date: "2025-06-17" },
    { id: 3, title: "Grateful moments", mood: "😊", date: "2025-06-16" },
    { id: 4, title: "Feeling low", mood: "😢", date: "2025-06-15" },
    { id: 5, title: "Inspired again", mood: "😃", date: "2025-06-14" },
   
  ];


const EntriesView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 4;
    const indexOfLast = currentPage * entriesPerPage;
    const indexOfFirst = indexOfLast - entriesPerPage;
    const currentEntries = allEntries.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(allEntries.length / entriesPerPage);
  return (
    <div>
        <div className="flex flex-col gap-3">
           {currentEntries.map((entry) => (
                <div key={entry.id} className="bg-white shadow-md rounded-lg p-2 mb-4 hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer hover:shadow-blue-300">
                <div className='flex justify-between items-center'>
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    <div className="mt-2 flex gap-4">
                        <button className="text-blue-600 hover:underline hover:cursor-pointer">View</button>
                        <button className="text-yellow-600 hover:underline hover:cursor-pointer">Edit</button>
                        <button className="text-red-600 hover:underline hover:cursor-pointer">Delete</button>
                    </div>

                </div>
               
                <p className="text-sm text-gray-500">
                    Mood: {entry.mood} | {entry.date}
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
    </div>
  )
}

export default EntriesView