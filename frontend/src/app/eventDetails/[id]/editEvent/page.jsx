"use client";

import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Navbar from "../../../components/Navbar";

export default function EditEvent() {
  const pathName = window.location.pathname.split("/");
  const eventId = pathName[pathName.length - 2];

  useEffect(() => {
    console.log("Event ID:", eventId);
  }, [eventId]);

  const [formData, setFormData] = useState({
    eventName: "",
    deadlineDate: "",
    eventDescription: "",
    division: "",
    tnc: "",
    divisions: "", // State untuk divisions
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [toastMessage, setToastMessage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `https://tekno-vibe-be.vercel.app/edit/${eventId}`,
        formData
      );
      console.log("Event updated:", response.data);
      // Handle update success, misalnya kembali ke halaman detail event
      if (response.status === 200) {
        setToastMessage("Event updated successfully");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      // Handle update error, misalnya tampilkan pesan kesalahan
      setToastMessage("Failed to update event");
    }
  };

  const handleDelete = async (eventId) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus event ini?");
  
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `https://tekno-vibe-be.vercel.app/delete/${eventId}`
        );
        console.log("Event deleted:", response.data);
        
        if (response.status === 200) {
          setToastMessage("Event deleted successfully");
          
        } else {
          
          setToastMessage("Failed to delete event");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        
        setToastMessage("Failed to delete event");
      }
    }
  };

  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage);
      setToastMessage(null);
    }
  }, [toastMessage]);

  const handleGoBack = () => {
    window.history.back(); // Menggunakan fungsi dari window.history untuk kembali ke halaman sebelumnya
  };

  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div>
          <h1 className="text-2xl font-bold text-center mt-20 mb-10">
            Edit Detail Event
          </h1>
          <ToastContainer />
          <form className="flex flex-wrap -mx-3" onSubmit={handleFormSubmit}>
          <div className="flex justify-between w-full mb-4">
            <button
              onClick={handleGoBack}
              className="text-blue-500 hover:text-blue-600 px-4 py-2 rounded"
            >
              Kembali
            </button>
            <div></div>
          </div>
            <div className="w-full md:w-1/2 px-3 mb-5">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3 mb-5">
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    placeholder="Nama Event"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full"
                  />
                </div>
                <div className="w-full px-3 mb-5">
                  <input
                    type="date"
                    name="deadlineDate"
                    value={formData.deadlineDate}
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
                    <input
                      type="text"
                      placeholder="Divisi1, Divisi2, Divisi3, ..."
                      onChange={(e) =>
                        setFormData({ ...formData, divisions: e.target.value })
                      }
                      value={formData.divisions}
                      className="p-2 bg-gray-input border rounded w-full text-black border-gray-200"
                    />
                  </div>
                <div className="w-full px-3 mb-5">
                  <textarea
                    name="tnc"
                    value={formData.tnc}
                    onChange={handleInputChange}
                    placeholder="Terms & Conditions"
                    className="p-3 bg-gray-input border border-gray-200 rounded w-full"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="w-full px-3 mb-5 flex justify-center items-center">
              <button
                onClick={() => handleFormSubmit(eventId)}
                className="bg-button-dark text-white py-2 px-4 rounded hover:bg-purple-200"
              >
                Save
              </button>

              <button
                onClick={() => handleDelete(eventId)}
                className="bg-button-dark text-white py-2 px-4 rounded ml-4 hover:bg-purple-200"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
