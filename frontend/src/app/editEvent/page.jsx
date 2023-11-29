'use client'; 
import Navbar from '../components/Navbar';
import { useState } from 'react';
import axios from 'axios';

export default function EditEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    closingDate: '',
    eventDescription: '',
    division: '',
    termsAndConditions: '',
  });

  const [customDivision, setCustomDivision] = useState('');
  const [showCustomDivisionInput, setShowCustomDivisionInput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setShowCustomDivisionInput(true);
    } else {
      setShowCustomDivisionInput(false);
      setFormData({ ...formData, division: value });
    }
  };

  const handleCustomDivisionChange = (e) => {
    setCustomDivision(e.target.value);
  };

  const handleAddCustomDivision = () => {
    setFormData({ ...formData, division: customDivision });
    setShowCustomDivisionInput(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/edit/${eventId}`, formData);
      console.log('Event updated:', response.data);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/edit/${eventId}`); // Replace eventId with the actual event ID
      console.log('Event deleted:', response.data);
      // Handle deletion success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error deleting event:', error);
      // Handle deletion error, e.g., show an error message
    }
  };

  return (
    <div>
      <Navbar/>
      <main className="flex justify-center">
        <div>
          <h1 className="text-2xl font-bold text-center mt-20 mb-10">Edit Detail Event</h1>
          <form className="flex flex-wrap -mx-3" onSubmit={handleFormSubmit}>
            <div className="w-full md:w-1/2 px-3 mb-5">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3 mb-5">
                  <input 
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    color = "#EAEAEA"
                    placeholder="Nama Event"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full" 
                  />
                </div>
                <div className="w-full px-3 mb-5">
                  <input
                    type="text"
                    name="closingDate"
                    value={formData.closingDate}
                    onChange={handleInputChange}
                    placeholder="Tanggal Penutupan Pendaftaran"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full" 
                  />
                </div>
                <div className="w-full px-3 mb-5">
                  <textarea
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleInputChange}
                    placeholder="Event Description"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-5">
              <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-5">
                <select
                  name="division"
                  value={showCustomDivisionInput ? 'custom' : formData.division}
                  onChange={handleSelectChange}
                  className="p-3 bg-gray-input border border-gray-200 rounded w-full"
                >
                  <option value="">Pilihan Divisi</option>
                  <option value="Acara">Acara</option>
                  <option value="Perlengkapan">Perlengkapan</option>
                  <option value="custom">Tambah Divisi Baru</option>
                </select>
                {showCustomDivisionInput && (
                  <div>
                    <input
                      type="text"
                      value={customDivision}
                      onChange={handleCustomDivisionChange}
                      placeholder="Nama Divisi Baru"
                      className="p-3 bg-gray-input border border-gray-200 rounded w-full mt-3"
                    />
                    <button onClick={handleAddCustomDivision} className="bg-button-dark text-white py-2 px-4 rounded mt-3">
                      Tambah
                    </button>
                  </div>
                )}
              </div>
                <div className="w-full px-3 mb-5">
                  <textarea
                    name="termsAndConditions"
                    value={formData.termsAndConditions}
                    onChange={handleInputChange}
                    placeholder="Terms & Conditions"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full"
                  ></textarea>  
                </div>
              </div>
            </div>

            <div className="w-full px-3 mb-5 flex justify-center items-center">
              <button
                className="bg-button-dark text-white py-2 px-4 rounded hover:bg-purple-200"
              >
                Save
              </button>

              <button
                onClick={handleDelete}
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