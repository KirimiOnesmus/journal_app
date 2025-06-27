import React,{useState}from 'react'
import EntriesView from './EntriesView'
import EntriesForm from './EntriesForm'

const Entries = () => {
  const [showForm, setShowForm] = useState(false);
    const [editingEntry, setEditingEntry] = useState(null);
    const [refreshSignal, setRefreshSignal] = useState(false);

    const handleNewEntry =()=>{
      setEditingEntry(null);
      setShowForm(true);
    };
    const handleEditEntry=(entry)=>{
      setEditingEntry(entry);
      setShowForm(true);
    };
    const handleSubmitSuccess=()=>{
      setShowForm(false);
      setRefreshSignal(prev => !prev)
    }
  return (
    <div>
       <div className="header flex justify-between p-4">
        <h3 className='text-xl font-bold'>Your Journal Entries</h3>
         <button 
         className='bg-blue-500 p-2 rounded-md text-white hover:bg-white hover:text-blue-400 hover:border-blue-400 border hover:cursor-pointer transition duration-300'
         onClick={handleNewEntry}
         >+ New Entry</button>
       </div>
        <div className="entries-list px-4">
            <EntriesView onEdit={handleEditEntry} refreshSignal={refreshSignal} />

        </div>
          {showForm && (
                <div className="fixed inset-0 bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <EntriesForm
                          initialData={editingEntry || {}}
                          onClose={() => setShowForm(false)}
                          onSubmit={handleSubmitSuccess}
                         />
                        <button 
                            className='mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
                            onClick={
                              () => setShowForm(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            
    </div>
  )
}

export default Entries