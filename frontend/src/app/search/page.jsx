"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CircleBgSearchpg from "@/app/components/circleBgSearchpg";

import React, { useState, useEffect } from "react";

const LoadingIcon = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="mb-10 ">
        <h1 className="text-xl text-black ">
          Loading...
        </h1>     
      </div>
      <div className="loader">
        <div className="loader-circle loader-circle1"/>
        <div className="loader-circle loader-circle2"/>
        <div className="loader-circle loader-circle3"/>
        <div className="loader-circle loader-circle4"/>
      </div>
    </div>
  );
};

export default function SearchEvent() {
  const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [searchString, setSearchString] = useState("");

  const [imageLoaded, setImageLoaded] = useState(null);

  const departments = [
    "TEKNIK",
    "DTETI",
    "DTK",
    "DTMI",
    "DTAP",
    "DTNTF",
    "DTGL",
    "DTSL",
    "DTGD",
  ];

  const handleClick = (buttonIndex) => {
    if (activeButton == buttonIndex) setActiveButton(null);
    else setActiveButton(buttonIndex);
  };

  useEffect(() => {
    let url = "http://localhost:9090/search";

    const params = new URLSearchParams();
    if (searchString !== "") params.append("name", searchString);
    if (activeButton !== null)
      params.append("department", departments[activeButton]);

    if (params.size > 0) url = url + "?" + params.toString();

    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setNewData([]);
        console.log(data);
        setData(data);
        loadImage();
      });

      console.log(data);
      loadImage();
  }, [activeButton, searchString]);

  const loadImage = async () => {

    data.map((each) => {
      let len = data.length;

      // try {
        fetch(`http://localhost:9090/event/${each._id}/getImage`)
        .then((response) => response.json())
        .then((o) => {

      console.log(each._id);
          const check = newData.some(obj => obj._id === each._id);
          console.log(!newData.some(obj => obj._id === each._id));
          if(check == false){
            const image = {
              data: o.data.data,
              contentType: o.contentType
            }
            each.image = image;
            console.log(each.image);

            newData.push(each);
            console.log(newData);
          }

          console.log("new data length", newData.length);
          console.log("data length", data.length);
          if(data.length == newData.length){
            // len--;
            // if(len == 1){
            // console.log(each);
            setImageLoaded("true");
            console.log(imageLoaded);
            console.log("INI", newData);
          }
        });
        
      // } catch (error) {
      //   console.error('Error fetching image data:', error);
      // }
    })
    console.log(data);

  };

  return (
    <div className="flex flex-col h-screen justify-between" onLoad={loadImage()}>
      <Navbar cari={true} />
      <CircleBgSearchpg />
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="text-2xl font-bold mb-5 mt-10">
          Temukan Event Menarik dan Daftarkan Diri Anda!
        </h1>
        <input
          type="text"
          placeholder="Cari event yang anda inginkan"
          className="p-2 border border-gray-200 rounded-md w-1/2"
          onKeyDown={(event) => {
            if (event.key === "Enter") setSearchString(event.target.value);
          }}
        />

        <div className="flex mt-4">
          {departments.map((fakultas, index) => {
            return (
              <button
                className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
                  activeButton === index ? "bg-button-dark text-white" : ""
                }`}
                onClick={() => handleClick(index)}
                key={fakultas}
              >
                {fakultas}
              </button>
            );
          })}
        </div>
      </div>

      {/*non template cards*/}
      <section className="searchEvent flex-wrap flex justify-center items-center mt-5 mb-24">
        {
          !imageLoaded &&
          (
            <LoadingIcon/>
          )
        }
        <div className="grid lg:grid-cols-4 md:grid-cols-2 auto-rows-max gap-8 cursor-pointer">
          {newData.map((rows) => (
              <a href={`/eventDetails/${rows._id}`} key={rows._id} >
                <div
                  className="flex flex-col w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 drop-shadow-[0_20px_10px_rgba(0,0,0,0.25)] hover:shadow-2xl hover:cursor-pointer"
                >
                  <div className="relative h-40 w-full rounded-xl bg-gray-100">
                  {
                    imageLoaded && (
                    <img 
                    id='base64image' 
                    src={`data:${rows.image.contentType};base64,${Buffer.from(rows.image.data).toString('base64')}`} 
                    alt="Uploaded Image"
                    className="object-cover w-full h-full rounded-lg"
                    /> 
                    )
                  } 
                  </div>

                  <div className="p-2">
                    <h2 className="font-bold text-[19px]">{rows.eventName}</h2>

                    <p className="text-sm text-gray-600">
                      {rows.eventDescription.length > 20 ? `${rows.eventDescription.slice(0,20)}...`: rows.eventDescription}
                    </p>
                    <span className="bg-purple-200 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                      {rows.department}
                    </span>
                  </div>

                  <div>
                    <div className="flex space-x-2"></div>
                  </div>
                </div>
              </a>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
