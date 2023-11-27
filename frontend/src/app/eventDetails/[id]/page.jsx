"use client";
import { Theme } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import wave1 from '../../../../public/assets/wave1.svg';
import arrow from '../../../../public/assets/arrow.svg';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ApplicationForm from "./sections/ApplicationForm";

export default function EventDetails({ params }) {
  const currentURL = window.location.href;
  const Id = currentURL.split('/').pop();
  // const router = useRouter();
  // const Id = router.query?._id;
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [divisionList, setDivisionList] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try{
      if(loaded!=true){
        const param = new URLSearchParams();
        param.append("id", Id);
        fetch("http://localhost:9090/search?" + param.toString())
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
            setLoaded(true);
      });
        setLoaded(true);
        seperateDivisions();
      } 
    }catch(err){
      window.location.href = "https://localhost:3000";
      console.error(err);
    }
    seperateDivisions();
    const AdminId = data.map((e) => (e.adminId)).toString();

    if(user._id == AdminId){
      setIsAdmin(true);
    }


  }, []);
    
  const getMonth = (monthNum) => {
    if(monthNum == '01'){
      return 'Januari';
    }else if(monthNum == '02'){
      return 'Februari';
    }else if(monthNum == '03'){
      return 'Maret';
    }else if(monthNum == '04'){
      return 'April';
    }else if(monthNum == '05'){
      return 'Mei';
    }else if(monthNum == '06'){
      return 'Juni';
    }else if(monthNum == '07'){
      return 'Juli';
    }else if(monthNum == '08'){
      return 'Agustus';
    }else if(monthNum == '09'){
      return 'September';
    }else if(monthNum == '10'){
      return 'Oktober';
    }else if(monthNum == '11'){
      return 'November';
    }else if(monthNum == '12'){
      return 'Desember';
    }
  }

  const seperateDivisions = () => {
    // useEffect(() => {
      const arr = data.map((e) => (e.divisions)).toString().split(', ');
      setDivisionList(arr);
      // console.log(divisionList);
      return;
    // }, []);
  }

  return (
    <main className="flex flex-col w-full" >
      <Navbar/>
      <div className='relative w-full '>
        <div className='absolute -z-10 min-w-full h-screen'>
          <Image src={wave1} alt='' className=' min-w-full '/>
        </div>
      </div>

      <div 
        className="flex bg-white outline-2 p-5 self-center outline-black shadow-2xl rounded-lg mt-36 mb-24 w-2/3 mb-40 " 
        onLoad={() => seperateDivisions()}>
        <div className="basis-1/3">
            <div className="relative rounded-lg w-full h-5/6 m-5 mb-20 bg-center" >
              <img 
                id='base64image' 
                src={data.map((e) => (e.eventProfileUrl))} 
                alt=''
                className="object-cover w-full h-full rounded-lg"
                
                />
            </div>
        </div>
        <div className="basis-2/3 m-5 mx-16">
          <h1 className=" font-bold text-4xl">
            {data.map((e) => (e.eventName))}
          </h1>
          <p className="mt-7 ">
            {data.map((e) => (e.eventDescription))}
          </p>
          <p className="font-bold mt-8 mb-1">
            Tanggal Pendaftaran
          </p>
          <p>
          {data.map((e) => (e.date)).toString().substring(8, 10)}
          { ' ' }
          {getMonth(data.map((e) => (e.date)).toString().substring(5, 7))}
          { ' ' }
          {data.map((e) => (e.date)).toString().substring(0, 4)}
          { ' s/d ' }
          {data.map((e) => (e.deadlineDate)).toString().substring(8, 10)}
          { ' ' }
          {getMonth(data.map((e) => (e.deadlineDate)).toString().substring(5, 7))}
          { ' ' }
          {data.map((e) => (e.deadlineDate)).toString().substring(0, 4)}
          </p>
          <p className="font-bold mt-8 mb-1" >
            Divisi yang Dibutuhkan
          </p>
          <div className="flex flex-row" >
            {divisionList.map((points) => (
                          <div key={points} className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2">
                          <p>
                            {points}
                          </p>
                        </div>
            ))}
          </div>
          <div className="mt-40">
            <div className={`flex text-purple-200 justify-end self-end ${
              isAdmin? 'block' : 'hidden'
            }`}>
              <a href="/editEvent" className="flex flex-row">
                Edit Detail Event
                <Image src={arrow} alt='' className='ml-2'/>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col self-center mx-60 mb-28">
        <h1 className="font-bold text-4xl self-center mb-8">
          Syarat dan Ketentuan
        </h1>
        <p className="text-justify self-center" onload={() => seperateDivisions()}>
          {data.map((e) => (e.tnc))}
        </p>
      </div>

      <Theme>
        <ApplicationForm eventId={params.id} />
      </Theme>
      <Footer/>
    </main>
  );
}
