import Link from "next/link";
import Image from "next/image";
import MainImage from "../../../../public/assets/hero-image.svg";
import Wave from "../../../../public/assets/wave.svg";

const Button = ({ title }) => {
  return (
    <button className="bg-purple-900 text-white-100 font-josefin px-5 py-2.5 text-sm rounded-[13px] z-10 shadow-lg active:scale-95 hover:bg-white hover:text-purple-900 transition-transform duration-300 transform hover:scale-110">
      {title}
    </button>
  );
};

export default function Hero() {
  return (
    <main className="bg-purple-200 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row mx-auto max-w-[1000px] lg:max-w-[1150px] space-x-0 lg:space-x-20 xl:space-x-32 mt-28 xl:mt-36 px-4 sm:px-10">
          <div className="md:max-w-[750px] lg:max-w-[600px] text-center lg:text-left flex flex-col gap-5 lg:gap-4 justify-center">
            <h1 className="text-white-100 text-[30px] md:text-[32px] lg:text-[36px] xl:text-[42px] font-semibold leading-normal xl:leading-snug">
              Cari dan Ajukan Event untuk Seluruh Mahasiswa FT UGM
            </h1>
            <p className="text-white-100 text-[15px] md:text-[16px]">
              Temukan dan daftarkan event-event di lingkungan Fakultas Teknik
              UGM dengan mudah dan terintegrasi!
            </p>
            <div className="relative flex flex-row lg:justify-start justify-center gap-4">
              <Link href="/search">
                <Button title={"Cari Event"} />
              </Link>
              <Link href="/addEvent">
                <Button title={"Ajukan Event"}/>
              </Link>
            </div>
          </div>
          <div className="justify-center lg:justify-end mx-auto flex">
            <div className="relative hidden sm:block sm:h-[350px] lg:h-96 aspect-square xl:scale-110">
              <Image
                src={MainImage}
                alt="Hero image"
                fill
                className="lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 sm:-mt-20 xl:-mt-12 2xl:-mt-28">
        <Image
          src={Wave}
          alt="Wave element"
          className="bg-center bg-cover w-screen"
        />
      </div>
    </main>
  );
}
