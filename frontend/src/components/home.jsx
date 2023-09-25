import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-w-full grid justify-items-center relative mx-auto py-10 px-28">
      <div className="grid justify-items-end justify-self-end">
        <Link
          to="/register"
          className="text-base font-normal bg-white hover:bg-blue-100 px-3 py-1 rounded-xl"
        >
          Sign Up
        </Link>
      </div>
      <h1 className="pt-14 font-bold text-2xl text-center text-white">
        Welcome to TeknoVibe
      </h1>
    </div>
  );
}

export default Home;
