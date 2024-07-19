import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../dark-mode";

export default function Sidenav() {
    const isLoggedIn: boolean = false;
    return (
        <div className="flex h-screen w-full overflow-hidden dark:bg-gray-900/70 ">
            <div className="flex flex-col bg-background border-r border-border pr-2 justify-between">
                <div className="flex items-center h-16 px-4 border-b border-border">
                    <Link
                        href="#"
                        className="flex items-center gap-2 font-semibold"
                        prefetch={false}
                    >
                        <div className="w-16 h-16 relative">
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
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-auto">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 bg-background">
                        <nav className="flex flex-col gap-1 px-4 py-6 justify-between">
                            <div>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <HomeIcon />
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <InfoIcon className="h-5 w-5" />
                                    About
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/80"
                                    prefetch={false}
                                >
                                    <PackageIcon className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <MailIcon className="h-5 w-5" />
                                    Contact
                                </Link>
                            </div>
                            <div className="flex flex-col items-center gap-4 mt-auto">
                                <ModeToggle />
                                {isLoggedIn ? (
                                    <>
                                        <Link
                                            href="/profile"
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                size="defaultval"
                                                className="w-full"
                                            >
                                                Profile
                                            </Button>
                                        </Link>
                                        <Button
                                            size="defaultval"
                                            className="w-full"
                                            onClick={() => {
                                                /* Handle Logout */
                                            }}
                                        >
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="w-full">
                                            <Button
                                                variant="outline"
                                                size="defaultval"
                                                className="w-full"
                                            >
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link href="/signup" className="w-full">
                                            <Button
                                                size="defaultval"
                                                className="w-full"
                                            >
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

function InfoIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    );
}

function MailIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
