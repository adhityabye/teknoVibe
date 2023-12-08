import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Tentang from "./components/home/Tentang";
import Panduan from "./components/home/Panduan";
import Search from "./components/home/Search";
import Footer from "./components/Footer";
import AjukanEvent from "./components/home/AjukanEvent";

export default function Home(){
  console.log(Search);
  return (
    <main>
      <div className="flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
        <Tentang />
        <Panduan />
        <Search/>
        <AjukanEvent/>
        <Footer/>
      </div>
    </main>
  );
}