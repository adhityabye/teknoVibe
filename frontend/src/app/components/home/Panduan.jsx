export default function Panduan() {
  return (
    <main id="panduan">
      <div className="mx-auto max-w-[1000px] lg:max-w-[1150px] flex flex-col gap-4 items-center justify-center pb-28 px-4 sm:px-10">
        <h3 className="bg-purple-200 font-josefin px-7 pb-1.5 pt-2 text-[14px] text-white-100 font-semibold rounded-md text-center w-fit">
          PANDUAN
        </h3>
        <div className="gap-4 text-center">
          <h1 className="text-black-900 text-[26px] font-bold pb-4 font-inter">
            Ikuti Panduan untuk Mencari dan Mengajukan Event
          </h1>
          <p className="text-black-900 text-base">
            Langkah-langkah untuk mencari dan mengajukan event di lingkungan FT
            UGM cukup mudah dilakukan hanya dengan beberapa langkah saja.
          </p>
        </div>
        <div className="flex flex-col gap-9 p-5 lg:py-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
            <div className="w-full md:max-w-[300px] lg:max-w-[380px] 2xl:max-w-[400px]">
              <h1 className="text-black-900 font-semibold font-inter  text-center md:text-left">
                Panduan untuk mencari event dan mendaftarkan diri pada suatu
                event:
              </h1>
            </div>
            <div className="text-black-900 md:w-1/2">
              <ol className="list-outside list-decimal ml-5">
                <li>
                  Masuk ke akun Anda atau registrasi akun jika belum memiliki
                  akun.
                </li>
                <li>
                  Klik “Cari Event” pada bagian navbar atau pada landing page.
                </li>
                <li>
                  Seluruh event yang telah diajukan pada platform ini akan
                  muncul. Anda juga bisa menggunakan fitur search untuk melihat
                  event berdasarkan kata kunci yang Anda diberikan.
                </li>
                <li>
                  Jika ingin mendaftar pada suatu event, klik salah satu event
                  kemudian klik tombol “Daftar”. Anda juga bisa melihat
                  informasi detail event tersebut.
                </li>
                <li>
                  Isi form yang tersedia dan klik tombol “Kirim” untuk
                  mengumpulkan form.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
            <div className="w-full md:max-w-[300px] lg:max-w-[380px] 2xl:max-w-[400px]">
              <h1 className="text-black-900 font-inter font-semibold text-center md:text-left">
                Panduan untuk mengajukan suatu event:
              </h1>
            </div>
            <div className="text-black-900 md:w-1/2">
              <ol className="list-outside list-decimal  ml-5">
                <li>
                  Masuk ke akun Anda atau registrasi akun jika belum memiliki
                  akun.
                </li>
                <li>
                  Klik “Ajukan Event” pada bagian navbar atau pada landing page.
                </li>
                <li>
                  Isi form yang tersedia kemudian klik tombol “Ajukan” untuk
                  mengajukan event.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
