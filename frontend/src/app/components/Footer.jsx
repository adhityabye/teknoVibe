'use client';

import Logo from "../../../public/assets/logo-white.svg";
import Github from "../../../public/assets/Github.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-purple-200 footer footer-center p-10 bg-primary text-primary-content flex flex-col items-center">
        <aside className="text-center">
          <div className="flex flex-col items-center">
            <Link className="flex items-center gap-4 m-4" href="/">
              <Image src={Logo} className="h-8 w-min" alt="TeknoVibe Logo" />
              <span className="text-3xl font-bold text-white-100">TeknoVibe</span>
            </Link>
            <p className="text-white">
              Platform yang mengintegrasikan seluruh informasi event mahasiswa di lingkungan Fakultas Teknik UGM
            </p>
            <p className="text-white">
              Mulai exkplorasi kegiatanmu dengan lebih mudah
            </p>
            <div className="flex items-center">
                <p className="text-white"><strong>Support Us:</strong></p>
                <div className="flex items-center gap-2 m-6">
                    <a href="https://github.com/adhityabye/teknoVibe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Image src={Github} className="h-8 w-min" alt="Github Logo" />
                        <span className="text-sm text-white-100">TeknoVibe</span>
                    </a>
                </div>
                </div>
            </div>
            <p className="text-white">
              TeknoVibe by Kelompok 5 PAW
            </p>
        </aside>
      </footer>
      
    );
  }
  