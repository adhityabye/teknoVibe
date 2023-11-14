import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Tentang from "./components/home/Tentang";
import Panduan from "./components/home/Panduan";

export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Tentang />
      <Panduan />
    </main>
  );
}