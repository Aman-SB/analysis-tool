import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "../dark-mode";

export default function Navbar() {
    const isLoggedIn : boolean = false;
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-900/70">
            <div className="w-full max-w-full mx-auto px-4 h-20">
                <div className="flex justify-between items-center h-full text-lg">
                    <Link
                        href="#"
                        className="flex items-center"
                        prefetch={false}
                    >
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/img/analysistoollogo-removebg.png"
                                alt="AnalysisTool"
                                width={10}
                                height={10}
                                layout="responsive"
                                quality={75}
                                priority
                            />
                        </div>
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <nav className="hidden md:flex gap-4 ">
                        <Link
                            href="#"
                            className="font-medium flex items-center transition-colors hover:underline"
                            prefetch={false}
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="font-medium flex items-center transition-colors hover:underline"
                            prefetch={false}
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="font-medium flex items-center  transition-colors hover:underline"
                            prefetch={false}
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="font-medium flex items-center transition-colors hover:underline"
                            prefetch={false}
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <ModeToggle/>
                        {isLoggedIn ? (
                            <>
                                <Link href="/profile">
                                    <Button variant="outline" size="defaultval">Profile</Button>
                                </Link>
                                <Button variant="destructive" size="defaultval" onClick={() => {/* Handle Logout */}}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="outline" size="defaultval">Sign In</Button>
                                </Link>
                                <Link href="/signup">
                                    <Button variant="destructive" size="defaultval">Sign Up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
