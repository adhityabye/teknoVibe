'use client'
import { useState } from "react";
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/modalAddEvent";
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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [errorEventName, seterrorEventName] = useState('');
  const [errorEventDescription, seterrorEventDescription] = useState('');
  const [errorDepartment, seterrorDepartment] = useState('');
  const [errorEventProfileUrl, seterrorEventProfileUrl] = useState('');
  const [errorDivisions, seterrorDivisions] = useState('');
  const [errorDeadlineDate, seterrorDeadlineDate] = useState('');
  const [errorTnc, seterrorTnc] = useState('');

  const [hasEventProfileUrl, setHasEventProfileUrl] = useState(false);
  const [thisEventProfileUrl, setThisEventProfileUrl] = useState(pp);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if(!eventName){
      hasError = true;
      seterrorEventName('error');
    }else seterrorEventName('');

    if(!eventDescription){
      hasError = true;
      seterrorEventDescription('error');
    }else seterrorEventDescription('');

    if(!department){
      hasError = true;
      seterrorDepartment('error');
    }else seterrorDepartment('');

    if(!eventProfileUrl){
      hasError = true;
      seterrorEventProfileUrl('error');
    }else seterrorEventProfileUrl('');

    if(!divisions){
      hasError = true;
      seterrorDivisions('error');
    }else seterrorDivisions('');

    if(!deadlineDate){
      hasError = true;
      seterrorDeadlineDate('error');
    }else seterrorDeadlineDate('');

    if(!tnc){
      hasError = true;
      seterrorTnc('error');
    }else seterrorTnc('');

    if(hasError){
      setError('All fields are required');
      return;
    } 

    
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
      console.log(error);
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
      setThisEventProfileUrl(pp);

      setIsModalOpen(true);

    } catch(err){
      console.error(err);
      setError(err);
      console.log(error);
    }
  }
  
  const getBase64 =( fileInput, callback )=> {
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        callback(base64Image);
        setThisEventProfileUrl(base64Image);
  };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  const handleChangeee=(e)=>{
    getBase64(e.target, (e)=>{
      setEventProfileUrl(e)
    });
    console.log(thisEventProfileUrl);
    setHasEventProfileUrl(true);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col justify-between w-full">
        <Navbar ajukan='true'/>

        <div className='relative w-full '>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <p>Your data has been succesfully inserted</p>
          </Modal>
          <div className='absolute -z-10 bg-purple-200 w-screen h-[30rem] place-items-center block md:hidden'/>

          <div className='absolute -z-10 w-screen h-screen place-items-center md:mt-0 mt-24 py-96 md:py-0'>
            <Image src={wave2} alt='' className=' md:w-screen items-center '/>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='max-w-screen-xl mx-auto p-4 py-10 text-white-100 mb-30 mt-10 bg-transparent'>
              
              <h1 className='font-bold text-4xl py-10'>
                About Your Event!
              </h1>

              <div className='flex flex-row place-items-center'>

                <label className='w-4/12 md:w-2/12 m-3 ' htmlFor='files'>
                  <input 
                    type='file'
                    className='mt-6 items-center justify-center rounded-xl border-none absolute hidden ' 
                    id='files' 
                    accept='image/png, image/gif, image/jpeg' 
                    onChange={handleChangeee}
                  />
                  <div type='circle' className={`relative w-full cursor-pointer  rounded-full ${
                      errorEventProfileUrl? 'p-1 bg-red-400': 'p-0 bg-transparent'
                      }`}>
                    <Image 
                      id="true"
                      src={thisEventProfileUrl} 
                      width={30}
                      height={30}
                      alt='' 
                      className={`object-cover h-full w-full cursor-pointer rounded-full border border-black ${
                        hasEventProfileUrl? 'hidden' : 'block'
                      }`}
                          />
                    <Image 
                      id='base64image' 
                      src={thisEventProfileUrl} 
                      height={30}
                      width={30}
                      alt=''
                      className={`object-cover h-full w-full cursor-pointer rounded-full border border-black ${
                        hasEventProfileUrl? 'block' : 'hidden'
                      }`}
                    />
                  </div>
                </label>

                <div className='basis-3/6 md:basis-2/6 ml-8'>

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
                      className={`p-2 bg-gray-input border border-gray-200 rounded w-full text-black ${
                        errorEventName? "border-red-600" : "border-gray-200" 
                      }`} 
                    />
                  </div>

                  <p className='mb-2'>
                    Lingkup Event
                  </p>
                  <div className="w-full mb-6">
                    <select 
                      onChange={e => setDepartment(e.target.value)}
                      value={department}
                      className={`p-2 bg-gray-input border border-gray-200 rounded w-full text-black ${
                        errorDepartment? "border-red-600" : "border-gray-200" 
                      } `}
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
                  className={`p-2 bg-gray-input border border-gray-200 rounded w-full text-black h-40 ${
                    errorEventDescription? "border-red-600" : "border-gray-200" 
                  }`}
                />
              </div>
    
              <div className="w-full mt-60 mb-20 text-black">

                <h1 className='font-bold text-4xl'>
                  About Your Open Recruitment!
                </h1>

                <div className='w-1/2 md:w-1/4 mt-8'>
                  <p className='mb-2'>
                    Penutupan Open Recruitment
                  </p>
                  <div className="w-full mb-6">
                  <input  
                    type="date" 
                    datatype="Date"
                    onChange={e => setDeadlineDate(e.target.value)}
                    value={deadlineDate}
                    className={`p-2 bg-gray-input border border-gray-200 rounded w-2/3 text-black hover:cursor-pointer ${
                      errorDeadlineDate? "border-red-600" : "border-gray-200" 
                    }`}
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
                      placeholder="Divisi1, Divisi2, Divisi3, ..."
                      onChange={e => setDivisions(e.target.value)}
                      value={divisions}
                      className={` p-2 bg-gray-input border rounded w-full text-black ${
                          errorDivisions? "border-red-600" : "border-gray-200" 
                        } `} 
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
                    className={`p-2 bg-gray-input border border-gray-200 rounded w-full h-60 ${
                      errorTnc? "border-red-600" : "border-gray-200" 
                    }`}
                  />
                </div>

                <div className="flex flex-col w-full mb-10 mt-5 flex justify-end items-end">
                  {
                    error &&
                      // error.map((e) => (
                        <p className={'text-red-600 text-lb mb-2'}>
                          {error.toString()}
                        </p>
                      // ))
                  }

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