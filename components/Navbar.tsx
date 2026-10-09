"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";
import { btnGold } from "./ui";

export default function Navbar() {
    const [solid, setSolid] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        const io = new IntersectionObserver(
            (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        NAV.forEach(([id]) => {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            io.disconnect();
        };
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-300 ${solid || open ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"}`}>
            <nav aria-label="Main" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
                <a href="#home" className="font-serif text-2xl tracking-wide">Glamour <span className="text-gold italic">Salon</span></a>

                {/* Desktop Navigation Links Only */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {NAV.map(([id, label]) => (
                        <li key={id} className="relative">
                            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                                className={`py-2 text-sm transition-colors hover:text-gold ${active === id ? "text-gold" : ""}`}>
                                {label}
                            </a>
                            {active === id && <motion.span layoutId="nav-line" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />}
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button - Sirf Mobile Par */}
                <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"
                    onClick={() => setOpen((o) => !o)} className="grid size-11 place-items-center lg:hidden">
                    {open ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu - Jab Open Ho Tabhi Button Dikhega */}
            <AnimatePresence>
                {open && (
                    <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden bg-ink lg:hidden">
                        <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
                            {NAV.map(([id, label]) => (
                                <li key={id}>
                                    <a href={`#${id}`} onClick={() => setOpen(false)}
                                        className={`block border-b border-white/10 py-3 font-serif text-2xl ${active === id ? "text-gold" : ""}`}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                            {/* Book Appointment Button - Sirf Yahan */}
                            <li className="pt-4">
                                <a href="#booking" onClick={() => setOpen(false)} className={`${btnGold} w-full justify-center`}>
                                    Book Appointment
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}