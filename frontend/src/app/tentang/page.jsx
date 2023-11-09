export default function Tentang(){
    return(
      <main id="tentang">
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
          <h3 className="bg-purple-200 px-5 py-2.5 text-md text-white-100 font-semibold rounded-md text-center w-fit">Tentang</h3>
          <div className="gap-4 text-center">
            <h1 className="text-black-900 text-2xl font-semibold">Apa itu TeknoVibe?</h1>
            <p className="text-black-900 text-sm">
              TeknoVibe adalah platform yang mengintegrasikan seluruh informasi event mahasiswa di lingkungan Fakultas Teknik UGM.
              <br />
              Platform ini digunakan untuk mencari dan mengajukan event agar seluruh mahasiswa FT UGM mengetahui event apa saja yang ada di fakultasnya dan dapat mendaftarkan dirinya.
            </p>
          </div>
        </div> 
      </main>
    );
  }