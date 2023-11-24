'use client'
import { useState } from "react";
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wave2 from '../../../public/assets/wave2.svg'
import pp from '../../../public/assets/profile-placeholder.svg'

export default function addEvent(){
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [eventProfileUrl, setEventProfileUrl] = useState('');
  const [date, setDate] = useState(Date.now());
  const [divisions, setDivisions] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [tnc, setTnc] = useState('');
  const [open, setOpen] = useState(true);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:9090/event/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          eventName,
          eventDescription,
          department,
          eventProfileUrl,
          date,
          divisions,
          deadlineDate,
          tnc,
          open
        }),
      });

      console.log(JSON.stringify({
        eventName,
        eventDescription,
        department,
        eventProfileUrl,
        date,
        divisions,
        deadlineDate,
        tnc,
        open
      }),)
  
      const {msg, success} = await res.json();
      setError(msg);
      setSuccess(success);
  
      setEventName("");
      setEventDescription("");
      setDepartment("");
      setEventProfileUrl("");
      setDate("");
      setDivisions("");
      setDeadlineDate("");
      setTnc("");
      setOpen("");
    } catch(err){
      console.error(err);
    }
  }
  
  const getBase64 =( fileInput, callback )=> {
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        callback(base64Image);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  const handleChangeee=(e)=>{
  getBase64(e.target, (e)=>{
    setEventProfileUrl(e)
  })
  }

  return (
    <main className="flex flex-col justify-between w-full">
        <Navbar />

        <div className='relative w-full '>

          <div className='absolute -z-10 min-w-full h-screen'>
            <Image src={wave2} alt='' className=' min-w-full '/>
          </div>
          <form onSubmit={handleSubmit}>
            
          <div className='max-w-screen-xl mx-auto p-4 py-10 text-white-100 mb-30 mt-10 bg-transparent'>
            
            <h1 className='font-bold text-4xl py-10'>
              About Your Event!
            </h1>

            <div className='flex flex-row place-items-center'>

              <label className='w-2/12 m-3 ' htmlFor='files'>
                <input 
                  type='file'
                  className='mt-6 items-center justify-center rounded-xl border-none absolute hidden ' 
                  id='files' 
                  accept='image/png, image/gif, image/jpeg' 
                  onChange={handleChangeee}
                />
                <Image src={pp} alt='' className='w-full cursor-pointer'/>
              </label>

              <div className='basis-2/6 ml-8'>

                <p className='mb-2'>
                  Nama Event
                </p>
                <div className="w-full mb-6">
                  <input 
                    type="text"
                    color = "#EAEAEA"
                    placeholder="Nama Event"
                    onChange={(e)=>setEventName(e.target.value)}
                    value={eventName}
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black" 
                  />
                </div>

                <p className='mb-2'>
                  Lingkup Event
                </p>
                <div className="w-full mb-6">
                  <select 
                    onChange={e => setDepartment(e.target.value)}
                    value={department}
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black"
                                        
                    >
                    <option>TEKNIK</option>
                    <option>DTETI</option>
                    <option>DTMI</option>
                    <option>DTK</option>
                    <option>DTAP</option>
                    <option>DTGD</option>
                    <option>DTSL</option>
                    <option>DTGL</option>
                    <option>DTNTF</option>
                  </select>
                </div>
              </div>

            </div>
            <p className='m-3'>
              Deskripsi Event
            </p>
            <div className="w-full px-3  ">
              <textarea
              type="text"
                placeholder="Deskripsi"
                onChange={(e)=>setEventDescription(e.target.value)}
                value={eventDescription}
                className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black h-40"
              />
            </div>
  
            <div className="w-full mt-60 mb-20 text-black">

              <h1 className='font-bold text-4xl'>
                About Your Open Recruitment!
              </h1>

              <div className='w-1/4 mt-8'>
                <p className='mb-2'>
                  Penutupan Open Recruitment
                </p>
                <div className="w-full mb-6">
                <input  
                  name="requested_order_ship_date"  
                  type="date" 
                  datatype="Date"
                  onChange={e => setDeadlineDate(e.target.value)}
                  value={deadlineDate}
                  className='p-2 bg-gray-input border border-gray-200 rounded w-2/3 text-black'
                />
                </div>
              </div>

              <div className='w-1/2'>
                <p className='mb-2'>
                  Pilihan Divisi Terbuka
                </p>
                <div className="w-full mb-6">
                  <input 
                    type="text"
                    color = "#EAEAEA"
                    placeholder="Divisi"
                    onChange={e => setDivisions(e.target.value)}
                    value={divisions}
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black" 
                  />
                </div>
              </div>

              <p className='mb-3'>
                Syarat dan Ketentuan
              </p>
              <div className="w-full mt-25 ">
                <textarea
                  type="text"
                  placeholder="Syarat dan Ketentuan"
                  onChange={e => setTnc(e.target.value)}
                  value={tnc}
                  className="p-2 bg-gray-input border border-gray-200 rounded w-full h-60"
                />
              </div>

              <div className="w-full mb-10 mt-5 flex justify-end items-end">
                <button
                  className="bg-button-dark text-white py-2 px-4 rounded hover:bg-purple-200"
                >
                  Ajukan Event
                </button>
              </div>

            </div>


          </div>
          </form>

        </div>

        <Footer/>
    </main>
  );
}