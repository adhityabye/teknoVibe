import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-full grid justify-items-center relative mx-auto py-10 px-28">
      <div className="grid justify-items-end justify-self-end">
        <Link
          href="#!"
          className="text-base font-normal text-white-100 bg-black-900 px-5 py-1 rounded-xl"
        >
          Sign Up
        </Link>
      </div>
      <h1 className="pt-14 font-bold text-2xl text-center text-black-900">
        Welcome to TeknoVibe
      </h1>
    </main>
  );
}
