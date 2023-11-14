import Navbar from '../components/Navbar';

export default function EditEvent() {

  return (
    
    <div>
      <Navbar/>
      <main className="flex justify-center">

      {/* className="bg-white p-8 rounded-lg shadow-md w-3/4" */}
      <div>

        <h1 className="text-2xl font-bold text-center mb-10">Edit Event</h1>

        <form className="flex flex-wrap -mx-3">
        
          <div className="w-full md:w-1/2 px-3 mb-5">
            <input 
              type="text" 
              placeholder="Event Name"
              className="p-3 border border-gray-200 rounded w-full" 
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-5">  
            <input
              type="text"
              placeholder="Event Closing"
              className="p-3 border border-gray-200 rounded w-full" 
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-5">
            <select className="p-3 border border-gray-200 rounded w-full">
              <option>Pilihan Divisi</option>
              <option>Acara</option>
              <option>Perlengkapan</option>
            </select>
          </div>

          <div className="w-full px-3 mb-5">
            <textarea
              placeholder="Event Description"
              className="p-3 border border-gray-200 rounded w-full"
            ></textarea>
          </div>

          <div className="w-full px-3 mb-5">
            <textarea
              placeholder="Terms & Conditions"
              className="p-3 border border-gray-200 rounded w-full"
            ></textarea>  
          </div>

          <div className="w-full px-3 mb-5 flex justify-center items-center">
              <button
                className="bg-button-dark text-white py-2 px-4 rounded hover:bg-purple-200"
              >
                Save
              </button>

              <button
                className="bg-button-dark text-white py-2 px-4 rounded ml-4 hover:bg-purple-200"
              >
                Delete
              </button>
          </div>

        </form>     
      </div>

    </main>
    </div>
  )

}