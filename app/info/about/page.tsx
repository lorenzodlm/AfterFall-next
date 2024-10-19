import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/app/components/ui/button";
import { ModeToggle } from "@/app/components/mode-toggle";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
        <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
            <div className="container h-14 flex items-center">
            <Link
                href="/"
                className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
            >
                <span className="font-bold">AfterFall</span>
                <span className="sr-only">AfterFall</span>
            </Link>
            <nav className="ml-auto flex items-center gap-2">
                <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 bg-background"
                asChild
                >
                <Link href="https://github.com/lorenzodlm/AfterFall-next">
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
                </Link>
                </Button>
                <ModeToggle />
            </nav>
            </div>
        </header>
        <main className="min-h-[calc(100vh-57px-97px)] flex-1">
            <div className="container relative pb-10">
            <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                About Us
                </h1>
                <span className="max-w-[750px] text-center text-lg font-dark text-foreground">
                    Problem Statement
                </span>
                <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
                <p className="text-center text-lg font-light text-foreground">
                    We at AfterFall believe that real-time face recognition for attendance systems project addresses the inefficiencies and inaccuracies of traditional attendance methods such as manual sign-ins or ID-based systems. These methods are often time-consuming, prone to errors, and can be easily manipulated.
                </p>
                </div>
                <span className="max-w-[750px] text-center text-lg font-dark text-foreground">
                    Our Solution
                </span>
                <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
                <p className="text-center text-lg font-light text-foreground">
                    By implementing an automated face recognition system, we streamline the attendance process, ensuring greater accuracy, security, and convenience. The system eliminates the need for physical interaction, making it ideal for large-scale environments like schools, workplaces, or events. It not only saves time but also enhances data management, reduces fraudulent attendance, and provides a seamless, touchless experience, which is especially beneficial in today’s health-conscious world.
                </p>
                </div>
            </section>
            </div>
        </main>
        <footer className="py-6 md:py-0 border-t border-border/40">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
                <a href="/info/about" className="text-black dark:text-gray-200 hover:underline"> About Us </a> |
                <a href="/info/contact" className="text-black dark:text-gray-200 hover:underline"> Contact </a> | 
                <a href="/info/privacy" className="text-black dark:text-gray-200 hover:underline"> Privacy Policy </a> | 
                <a href="/info/terms" className="text-black dark:text-gray-200 hover:underline"> Terms of Service </a>
            </p>
            </div>
        </footer>
        </div>
    );
}
