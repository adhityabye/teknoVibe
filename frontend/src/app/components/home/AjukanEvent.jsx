import Image from 'next/image';
import Link from "next/link";
import illust1 from '../../../../public/assets/illust1.png'
import illust2 from '../../../../public/assets/illust2.png'
import illust3 from '../../../../public/assets/illust3.png'


export default function AjukanEvent() {
    return (
      <main id="AjukanEvent">
        <div className="flex flex-col items-center justify-center">

          <h3 className="bg-purple-200 px-5 py-2.5 text-md text-white-100 font-semibold rounded-md text-center w-fit mb-5">
            AJUKAN
          </h3>
          <div className="mb-5 text-center">
            <h1 className="text-black-900 text-2xl font-bold">
              Ajukan Event Agar Seluruh Mahasiswa Bisa Melihat dan Mendaftar
            </h1>

          </div>
          <div className="flex flex-wrap mt-2 w-2/3 mb-8 items-center justify-center">
        
            <div className="flex flex-col w-1/4 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
              <div className='h-3/6 mb-3 mt-3 '>
                <Image src={illust1} alt='' className='h-full w-auto'/>
              </div>
              <div className='h-1/6 '>
                Get benefits for you
              </div>
              <div className='rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 '/>
            </div>

            <div className="flex flex-col w-1/4 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
              <div className='h-3/6 mb-3 mt-3 '>
                <Image src={illust2} alt='' className='h-full w-auto'/>
              </div>
              <div className='h-1/6 '>
                Reach out to more applicants
              </div>
              <div className='rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 '/>
            </div>

            <div className="flex flex-col w-1/4 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
              <div className='h-3/6 mb-3 mt-3 '>
                <Image src={illust3} alt='' className='h-full w-auto'/>
              </div>
              <div className='h-1/6 '>
                View applicants for your event
              </div>
              <div className='rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 '/>
            </div>

          </div>

          <div className="w-full mt-2 flex justify-center items-center">
            <Link href="/addEvent">
              <button
                className="bg-button-dark text-white py-2 px-6 rounded-2xl hover:bg-purple-200"
              >
                Ajukan Event Sekarang
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
  