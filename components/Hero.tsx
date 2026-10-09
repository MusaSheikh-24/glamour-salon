"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";
import { IMG } from "@/lib/data";
import { btnGold, btnLine } from "./ui";

const line = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

    return (
        <section id="home" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory">
            <motion.div style={{ y }} className="absolute inset-0 -top-10 -bottom-10">
                <Image src={IMG.hero} alt="Interior of Glamour Salon with styling chairs" fill priority sizes="100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/65 to-ink/30" />
            <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8">
                <motion.p variants={line} className="mb-6 flex items-center gap-3 text-sm text-gold">
                    <motion.span initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 0.6, duration: 0.8 }} className="h-px bg-gold" />
                    <MapPin className="size-4" /> Citi Housing Phase 1, Gujranwala
                </motion.p>
                <motion.h1 variants={line} className="max-w-3xl font-serif text-[clamp(2.6rem,8vw,6rem)] font-medium leading-[0.98]">
                    Your Beauty. Your Style. Your Glamour.
                </motion.h1>
                <motion.p variants={line} className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                    Discover your signature look with expert styling, modern beauty treatments, and personalized care at Glamour Salon Gujranwala.
                </motion.p>
                <motion.div variants={line} className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <a href="#booking" className={btnGold}>Book Your Appointment</a>
                    <a href="#services" className={btnLine}>Explore Our Services</a>
                </motion.div>
            </motion.div>
            <a href="#highlights" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold">
                <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="block"><ChevronDown /></motion.span>
            </a>
        </section>
    );
}