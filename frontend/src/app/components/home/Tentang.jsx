export default function Tentang() {
  return (
    <section id="tentang">
      <div className="mx-auto max-w-[1000px] lg:max-w-[1150px] flex flex-col gap-4 items-center justify-center pt-14 pb-28 px-4 sm:px-10">
        <h3 className="bg-purple-200 font-josefin px-7 pb-1.5 pt-2 text-[14px] text-white-100 font-semibold rounded-md text-center w-fit">
          TENTANG
        </h3>
        <div className="gap-4 text-center">
          <h1 className="text-black-900 text-[26px] font-bold pb-4 font-inter">
            Apa itu TeknoVibe?
          </h1>
          <p className="text-black-900 text-base">
            TeknoVibe adalah platform yang mengintegrasikan seluruh informasi
            event mahasiswa di lingkungan Fakultas Teknik UGM. Platform ini
            digunakan untuk mencari dan mengajukan event agar seluruh mahasiswa
            FT UGM mengetahui event apa saja yang ada di fakultasnya dan dapat
            mendaftarkan dirinya.
          </p>
        </div>
      </div>
    </section>
  );
}
