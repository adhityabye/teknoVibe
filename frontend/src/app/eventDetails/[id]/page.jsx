"use client";

import { Theme } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import wave1 from '../../../../public/assets/wave1.svg';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ApplicationForm from "./sections/ApplicationForm";

export default function EventDetails({ params }) {
  const [eventData, setEventData] = useState([]);
  const [divisionList, setDivisionList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const monthList = {
    "01" : "Januari",
    "02" : "Fabruari",
    "03" : "Maret",
    "04" : "April",
    "05" : "Mei",
    "06" : "Juni",
    "07" : "Juli",
    "08" : "Agustus",
    "09" : "September",
    "10" : "Oktober",
    "11" : "November",
    "12" : "Desember"
  };

  useEffect(() => {
    // Execute on load
    const load = async () =>{
      try{
        // Get id from url
        const currentURL = window.location.href;
        const Id = currentURL.split('/').pop();

        // Create url to access API
        let url = "http://localhost:9090/search";
        const param = new URLSearchParams();
        param.append("id", Id);
        url = url + "?" + param.toString();
        console.log(url);

        // Fetch data from API
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // Set data to some variables
            console.log(data);
            setEventData(data);
            setDivisionList(data[0]["divisions"].split(", "));
            loadAdmin(data);
        });
      }catch(err){
        window.location.href = "https://localhost:3000/404";
        console.error(err);
      }
    }
    load();
  }, []);

  // Function to decide if user's an admin for the event
  const loadAdmin = (o) =>{
    const AdminId = o.map((e) => (e.adminId)).toString();
    const token = localStorage.getItem("user").slice(1, -1);
    
    // Fetch to API using POST
    fetch("http://localhost:9090/event/compareId", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        token,
        AdminId
      }),
    })
    .then(response => response.json())
    .then((response) => {
      // Decide whether user's an admin or not
      if(response.isAdmin == true){
        setIsAdmin(true);
      }
    })
    .catch(error => {
      console.error("couldn't get admin: ", error);
    });
  };

  return (
    <main className="flex flex-col w-full" >
      <Navbar/>

      <div className='relative w-full '>
        <div className='absolute -z-10 min-w-full h-screen'>
          <Image src={wave1} alt='' className=' min-w-full '/>
        </div>
      </div>

      <div 
        className="flex flex-col lg:flex-row bg-white outline-2 p-5 self-center outline-black shadow-2xl rounded-lg mt-36 mb-24 w-2/3 mb-40 ">
        <div className="basis-5/12 flex">
          <div className="w-full mb-0 lg:mb-20">
            <div type="card" className="relative rounded-lg m-5 bg-center" >
              <img 
                id='base64image' 
                src={eventData.map((e) => (e.eventProfileUrl))} 
                alt=''
                className="object-cover w-full h-full rounded-lg"
                />
            </div>
          </div>
        </div>

        <div className="basis-2/3 m-5 mx-7 flex flex-col">
          <h1 className=" font-bold text-4xl">
            {eventData.map((e) => (e.eventName))}
          </h1>
          <p className="mt-7 ">
            {eventData.map((e) => (e.eventDescription))}
          </p>
          <p className="font-bold mt-8 mb-1">
            Tanggal Pendaftaran
          </p>
          <p>
          {eventData.map((e) => (e.date)).toString().substring(8, 10)}
          { ' ' }
          {monthList[eventData.map((e) => (e.date)).toString().substring(5, 7)]}
          { ' ' }
          {eventData.map((e) => (e.date)).toString().substring(0, 4)}
          { ' s/d ' }
          {eventData.map((e) => (e.deadlineDate)).toString().substring(8, 10)}
          { ' ' }
          {monthList[eventData.map((e) => (e.deadlineDate)).toString().substring(5, 7)]}
          { ' ' }
          {eventData.map((e) => (e.deadlineDate)).toString().substring(0, 4)}
          </p>
          <p className="font-bold mt-8 mb-1" >
            Divisi yang Dibutuhkan
          </p>
          <div className="flex flex-row flex-wrap" >
            {divisionList.map((points) => (
              <div key={points} className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2 mb-1.5">
              <p>
                {points}
              </p>
            </div>
            ))}
          </div>

          <div className="mt-20 flex-shrink-0 lg:mt-auto" >
            <div className={`flex text-purple-200 justify-end self-end mt-0 lg:mt-20 ${
              isAdmin? 'block' : 'hidden'
            }`}>

              {/*buat sementara*/}
              <a href="/viewParticipants"> 
                Lihat Data Pendaftar
              </a>
              <a href="/editEvent" className="ml-14"> 
                Edit Detail Event
              </a>

              {/* kalau page editEvent perlu diarahin ke idnya, ^atas hapus aja & vganti sama yang bawah. tinggal hapus comment :D */}

              {/* <a href={`/viewParticipants/${eventData.map((e) => (e._id)).toString()}`}> 
                Lihat Data Pendaftar
              </a>
              <a href={`/editEvent/${eventData.map((e) => (e._id)).toString()}`} className="ml-14">
                Edit Detail Event
              </a> */}

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col self-center mx-60 mb-28">
        <h1 className="font-bold text-4xl self-center mb-8">
          Syarat dan Ketentuan
        </h1>
        <p className="text-justify self-center" >
          {eventData.map((e) => (e.tnc))}
        </p>
      </div>

      <Theme>
        <ApplicationForm eventId={params.id} />
      </Theme>

      <Footer/>
    </main>
  );
}
