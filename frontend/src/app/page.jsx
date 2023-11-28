import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Tentang from "./components/home/Tentang";
import Panduan from "./components/home/Panduan";
import Footer from "./components/Footer";
import AjukanEvent from "./components/home/AjukanEvent";

export default function Home(){
  return (
    <main>
      <div className="flex flex-col gap-28 overflow-hidden">
        <Navbar />
        <Hero />
        <Tentang />
        <Panduan />
        <AjukanEvent/>
        <Footer/>
      </div>
    </main>
  );
}