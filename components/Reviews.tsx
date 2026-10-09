"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { h2 } from "./ui";

const SAMPLES = [
    "Placeholder: a short customer comment about the styling experience will appear here.",
    "Placeholder: a short customer comment about the makeup service will appear here.",
    "Placeholder: a short customer comment about the salon atmosphere will appear here.",
];

export default function Reviews() {
    const [i, setI] = useState(0);
    const go = (d: number) => setI((n) => (n + d + SAMPLES.length) % SAMPLES.length);
    return (
        <section id="reviews" className="bg-ink px-5 py-24 text-ivory sm:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className={h2}>Customer Reviews</h2>
                <div className="mt-6 flex items-center justify-center gap-3" aria-label="Rated 4.9 out of 5">
                    <span className="flex text-gold">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="size-5 fill-current" />)}</span>
                    <span className="font-serif text-3xl">4.9</span>
                </div>
                <p className="mt-2 text-sm text-ivory/60">Rating as supplied in the salon&apos;s business information. Review count not available.</p>

                <div className="mt-12 min-h-44">
                    <AnimatePresence mode="wait">
                        <motion.blockquote key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}
                            className="font-serif text-2xl italic leading-snug sm:text-3xl">
                            {SAMPLES[i]}
                            <footer className="mt-5 font-sans text-xs not-italic text-gold">Placeholder demo content, not a real customer review</footer>
                        </motion.blockquote>
                    </AnimatePresence>
                </div>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button aria-label="Previous review" onClick={() => go(-1)} className="grid size-12 place-items-center border border-gold/50 hover:bg-gold hover:text-ink"><ChevronLeft /></button>
                    <span className="text-sm text-ivory/60" aria-live="polite">{i + 1} / {SAMPLES.length}</span>
                    <button aria-label="Next review" onClick={() => go(1)} className="grid size-12 place-items-center border border-gold/50 hover:bg-gold hover:text-ink"><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
}