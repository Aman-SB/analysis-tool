import Image from "next/image";
import { ModeToggle } from '../custom/dark-mode';
import Navbar from "@/custom/Navbar/navbar";
import Sidenav from "@/custom/Navbar/sidenav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Sidenav />
        <ModeToggle/>
    </main>
  );
}
