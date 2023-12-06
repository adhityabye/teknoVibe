'use client';
import { useState, useEffect } from 'react';
import Navbar from "../../../components/Navbar";
import axios from 'axios';

export default function ViewParticipant() {
  const pathname = window.location.pathname;
  const segoGoreng = window.location.pathname.split('/')
  const eventId = segoGoreng[segoGoreng.length - 2]

  const [participants, setParticipants] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const shortenText = (text) => {
    const maxLength = 50;
    return showFullText ? text : text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleGoBack = () => {
    window.history.back(); // Menggunakan fungsi dari window.history untuk kembali ke halaman sebelumnya
  };

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/event/${eventId}/participants`);
        if (Array.isArray(response.data.participants)) {
          console.log(response.data.participants)
          setParticipants(response.data.participants);
        } else {
          console.error('Participants data is not an array:', response.data.participants);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchParticipants();
  }, []);

  const labels = [
    'No',
    'Nama Lengkap',
    'NIM',
    'Email UGM',
    'Program Studi',
    'Angkatan',
    'ID Line',
    'Pilihan Divisi',
    'Alasan',
    'Link (.Pdf)',
  ];

  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div className="mx-4 md:mx-10 lg:mx-20 mt-10">
          <h1 className="text-2xl font-bold text-center mb-6 mt-10">Daftar Pendaftar</h1>
            <div className="flex justify-between w-full mb-4">
            <button onClick={handleGoBack} className="text-blue-500 hover:text-blue-600 px-4 py-2 rounded">
            Kembali
            </button>
            <div></div>
          </div>
          <table className="mx-auto">
            <thead>
              <tr>
                {labels.map((label, index) => (
                  <th key={index} className="py-2 px-4 text-center">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {participants.map((participantData, pIndex) => (
                <tr key={pIndex} className="text-center">
                  <td className="py-2 px-4">{pIndex + 1}</td>
                  <td className="py-2 px-4">{shortenText(participantData.namaLengkap)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.nim)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.emailUGM)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.programStudi)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.angkatan)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.idLine)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.pilihanDivisi)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.alasan)}</td>
                  <td className="py-2 px-4">{shortenText(participantData.uploadCV)}</td>
                  <td className="py-2 px-4">
                    {participantData.alasan.length > 50 && (
                      <span
                        onClick={toggleText}
                        className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        {showFullText ? 'Less' : 'More'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
