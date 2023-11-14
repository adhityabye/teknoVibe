export default function Panduan() {
  return (
    <main id="panduan">
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <h3 className="bg-purple-200 px-5 py-2.5 text-md text-white-100 font-semibold rounded-md text-center w-fit">
          Panduan
        </h3>
        <div className="gap-4 text-center">
          <h1 className="text-black-900 text-2xl font-semibold">
            Ikuti Panduan untuk Mencari dan Mengajukan Event
          </h1>
          <p className="text-black-900 text-sm">
            Langkah-langkah untuk mencari dan mengajukan event di lingkungan FT
            UGM cukup mudah dilakukan hanya dengan beberapa langkah saja untuk
            mencari seluruh event atau mengajukan event.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <h1 className="text-black-900 font-semibold">
            Panduan untuk mencari event dan mendaftarkan diri pada suatu event:
          </h1>
          <p className="text-black-900">
            1. Masuk ke akun Anda atau registrasi akun jika belum memiliki akun.
            <br />
            2. Klik “Cari Event” pada bagian navbar atau pada landing page.
            <br />
            3. Seluruh event yang telah diajukan pada platform ini akan muncul.
            Anda juga bisa menggunakan fitur search untuk melihat event
            berdasarkan kata kunci yang Anda diberikan.
            <br />
            4. Jika ingin mendaftar pada suatu event,klik salah satu event
            kemudian klik tombol “Daftar”. Anda juga bisa melihat informasi
            detail event tersebut.
            <br />
            5. Isi form yang tersedia dan klik tombol “Daftar” untuk
            mengumpulkan form.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <h1 className="text-black-900 font-semibold">
            Panduan untuk mengajukan suatu event:
          </h1>
          <p className="text-black-900">
            1. Masuk ke akun Anda atau registrasi akun jika belum memiliki akun.
            <br />
            2. Klik “Ajukan Event” pada bagian navbar atau pada landing page.
            <br />
            3. Isi form yang tersedia kemudian klik tombol “Ajukan” untuk
            mengajukan event.
          </p>
        </div>
      </div>
    </main>
  );
}
