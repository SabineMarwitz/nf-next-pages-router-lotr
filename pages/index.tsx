import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { introduction } from "../lib/data";
import Link from "next/link";
import Volumes from "../components/Volumes";
import Button from "../components/Button";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Lord of the Rings</h1>
        <p>{ introduction }</p>
        
        <h2>All Volumes</h2>
        < Volumes />
        < Button />
      </main>
    </div>
  );
}
