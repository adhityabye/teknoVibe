import Image from "next/image";
import Link from "next/link";
import illust1 from "../../../../public/assets/illust1.png";
import illust2 from "../../../../public/assets/illust2.png";
import illust3 from "../../../../public/assets/illust3.png";

export default function AjukanEvent() {
  return (
    <main id="AjukanEvent">
      <div className="flex flex-col items-center justify-center">
        <h3 className="bg-purple-200 font-josefin px-7 pb-1.5 pt-2 text-[14px] text-white-100 font-semibold rounded-md text-center w-fit">
          AJUKAN
        </h3>
        <div className="my-5 mx-5 text-center">
          <h1 className="text-black-900 text-[26px] font-bold pb-4 font-inter">
            Ajukan Event Agar Seluruh Mahasiswa Bisa Melihat dan Mendaftar
          </h1>
        </div>
        <div className="flex flex-wrap mt-2 w-3/4 mb-8 items-center justify-center">
          <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
            <div className="h-3/6 mb-3 mt-3 ">
              <Image src={illust2} alt="" className="h-full w-auto" />
            </div>
            <div className="h-1/6 text-sm sm:text-md">
              Reach out to more applicants
            </div>
            <div className="rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 " />
          </div>

          <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
            <div className="h-3/6 mb-3 mt-3 ">
              <Image src={illust1} alt="" className="h-full w-auto" />
            </div>
            <div className="h-1/6 text-sm sm:text-md">Get benefits for you</div>
            <div className="rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 " />
          </div>
          <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl h-40 items-center justify-center m-3">
            <div className="h-3/6 mb-3 mt-3 ">
              <Image src={illust3} alt="" className="h-full w-auto" />
            </div>
            <div className="h-1/6 text-sm sm:text-md">
              View applicants for your event
            </div>
            <div className="rounded-xl bg-purple-200 h-1/6 w-11/12 m-3 " />
          </div>
        </div>
        <div className="w-full mb-20 flex justify-center items-center">
          <Link href="/addEvent">
            <button className="bg-button-dark text-white py-2 px-6 rounded-2xl hover:bg-purple-200 text-base shadow-lg transition-transform duration-300 transform hover:scale-110 active:scale-95">
              Ajukan Event Sekarang
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
