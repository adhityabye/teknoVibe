import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Tentang from "./tentang/page";
import Panduan from "./panduan/page";

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