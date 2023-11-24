'use client'
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wave2 from '../../../public/assets/wave2.svg'
import pp from '../../../public/assets/profile-placeholder.svg'
// import CustomDatePicker from '../components/DatePicker';


export default function addEvent(){
  const handleChange=(e)=>{
  // TODO: COnvert image to base 64
  // getBase64(event.target.files[0]).then(file =>
  //   this.setState({ image: file })
  }
  return (
    <main className="flex flex-col justify-between w-full">
        <Navbar />

        <div className='relative w-full '>

          <div className='absolute -z-10 min-w-full h-screen'>
            <Image src={wave2} alt='' className=' min-w-full '/>
          </div>

          <div className='max-w-screen-xl mx-auto p-4 py-10 text-white-100 mb-30 bg-transparent'>
            
            <h1 className='font-bold text-4xl py-10'>
              About Your Event!
            </h1>

            <div className='flex flex-row place-items-center'>

              <div className='w-2/12 m-3 '>
                <Image src={pp} alt='' className='w-full'/>
                <input type='file'className='mt-6 items-center justify-center rounded-xl' accept='image/png, image/gif, image/jpeg' onChange={handleChange}/>
              </div>

              <div className='basis-2/6 ml-8'>

                <p className='mb-2'>
                  Nama Event
                </p>
                <div className="w-full mb-6">
                  <input 
                    type="text"
                    color = "#EAEAEA"
                    placeholder="Nama Event"
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black" 
                  />
                </div>

                <p className='mb-2'>
                  Lingkup Event
                </p>
                <div className="w-full mb-16">
                  <select className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black">
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
                placeholder="Deskripsi"
                className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black h-40"
              ></textarea>
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
                <input  name="requested_order_ship_date"  type="date" className='p-2 bg-gray-input border border-gray-200 rounded w-2/3 text-black'/>

                  {/* <input 
                    type="text"
                    color = "#EAEAEA"
                    placeholder="Date"
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black" 
                  /> */}
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
                    className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black" 
                  />
                </div>
              </div>

              <p className='mb-3'>
                Syarat dan Ketentuan
              </p>
              <div className="w-full mt-25 ">
                <textarea
                  placeholder="Syarat dan Ketentuan"
                  className="p-2 bg-gray-input border border-gray-200 rounded w-full text-black h-60"
                ></textarea>
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
        </div>

        <Footer/>
    </main>
  );
}