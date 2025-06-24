import React from 'react'
import EntriesView from './EntriesView'
import EntriesForm from './EntriesForm'

const Entries = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div>
       <div className="header flex justify-between p-4">
        <h3 className='text-xl font-bold'>Your Journal Entries</h3>
         <button 
         className='bg-blue-500 p-2 rounded-md text-white hover:bg-white hover:text-blue-400 hover:border-blue-400 border hover:cursor-pointer transition duration-300'
         onClick={() => setShowForm(true)}
         >+ New Entry</button>
       </div>
        <div className="entries-list px-4">
            <EntriesView />

        </div>
          {showForm && (
                <div className="fixed inset-0 bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <EntriesForm onClose={() => setShowForm(false)}/>
                        <button 
                            className='mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
                            onClick={() => setShowForm(false)}
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