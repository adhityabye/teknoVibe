import Link from "next/link";
import CircleBackground from "./components/circleBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative mx-auto grid justify-items-center items-center px-6 overflow-hidden">
      <div className="z-30 space-y-2 text-center">
        <h1 className="font-bold text-2xl sm:text-[28px]">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="font-normal text-base sm:text-lg">
          Halaman yang Anda cari tidak ada. Silahkan kembali ke Beranda
        </p>
        <Link href="/">
          <button className="font-josefin px-6 py-1.5 mt-4 bg-purple-900 text-white-100 text-sm rounded-2xl">
            Beranda
          </button>
        </Link>
        <CircleBackground />
      </div>
    </div>
  );
}
