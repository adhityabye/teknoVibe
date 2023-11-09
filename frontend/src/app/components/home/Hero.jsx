import Image from 'next/image';
import MainImage from '../../../../public/assets/hero-image.svg'
import Wave from '../../../../public/assets/wave.svg'

const Button = ({title}) => {
  return(
    <button className="bg-purple-900 text-white-100 px-5 py-2.5 text-sm rounded-md active:scale-95">{title}</button>
  )
}

export default function Hero(){
    return(
      <main className="bg-purple-200 w-full">
        <div className='flex flex-col items-center'>
          <div className='flex flex-row w-[75rem]'>
            <div className='w-full md:w-1/2 flex flex-col gap-4  justify-center'>
              <h1 className="text-white-100 text-4xl font-semibold">Cari dan Ajukan Event untuk Seluruh Mahasiswa FT UGM</h1>
              <p className="text-white-100 text-sm">Temukan dan daftarkan event-event di lingkungan Fakultas Teknik UGM dengan mudah dan terintegrasi!</p>
              <div className="flex flex-row gap-4">
                <Button title={"Cari Event"}/>
                <Button title={"Ajukan Event"}/>
              </div>
            </div>
            <div className='w-1/2 justify-end hidden md:flex'>
              <div className='relative h-96 aspect-square'>
                <Image src={MainImage} alt='' fill className='object-cover'/>
              </div>
            </div>
          </div>
        </div>
        <div className='-mt-36'>
          <Image src={Wave} alt='' className='w-screen'/>
        </div>
      </main>
    );
  }