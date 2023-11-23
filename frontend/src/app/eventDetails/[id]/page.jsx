import { Theme } from "@radix-ui/themes";
import Image from 'next/image';
import wave1 from '../../../../public/assets/wave1.svg'
import ev from '../../../../public/assets/event-placeholder.png'
import arrow from '../../../../public/assets/arrow.svg'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ApplicationForm from "./sections/ApplicationForm";

export default function EventDetails({ params }) {
  return (
    <main className="flex flex-col w-full">
      <Navbar/>
      <div className='relative w-full '>
        <div className='absolute -z-10 min-w-full h-screen'>
          <Image src={wave1} alt='' className=' min-w-full '/>
        </div>
      </div>
      <div className="flex bg-white outline-2 p-5 self-center outline-black shadow-md rounded-lg mt-20 w-2/3 mb-40">
        <div className="basis-1/3">
            {/* placeholder */}
          <Image src={ev} alt='' className='w-full m-5 mb-20'/>
        </div>
        <div className="basis-2/3 m-5 mx-16">
          <h1 className=" font-bold text-4xl">
            {/* placeholder */}
            Event Name
          </h1>
          <p className="mt-8 ">
            {/* placeholder */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus ipsum lorem, vulputate varius nisl volutpat at. Maecenas maximus auctor leo, et maximus dui maximus ac. Maecenas dignissim urna id mi tincidunt scelerisque. Suspendisse sit amet eleifend est. Phasellus vehicula augue in porta finibus. Nam vel arcu semper, sollicitudin augue ut, varius turpis. Duis faucibus id ipsum a facilisis. Vestibulum vestibulum metus eu condimentum mollis.
          </p>
          <p className="font-bold mt-8 mb-1">
            Tanggal Pendaftaran
          </p>
          <p>
            28 Oktober 2023 - 7 Desember 2023
          </p>
          <p className="font-bold mt-8 mb-1">
            Divisi yang Dibutuhkan
          </p>
          <div className="flex flex-row">

            {/* placeholder */}
            <div className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2">
              <p>
                Acara
              </p>
            </div>
            <div className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2">
              <p>
                DDD
              </p>
            </div>
            <div className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2">
              <p>
                Humas
              </p>
            </div>
            <div className="rounded-xl bg-purple-200 text-white p-1 px-3 mr-2">
              <p>
                Fundraising
              </p>
            </div>

          </div>
          <div className="mt-40 flex text-purple-200 justify-end self-end">
            <a href="/" className="flex flex-row">
              Edit Detail Event
              <Image src={arrow} alt='' className='ml-2'/>

            </a>
          </div>

        </div>
      </div>

      <Theme>
        <ApplicationForm eventId={params.id} />
      </Theme>
      <Footer/>
    </main>
  );
}
