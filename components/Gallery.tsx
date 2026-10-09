"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { h2 } from "./ui";

export default function Gallery() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    // Sab images ko bina filter ke le liya
    const items = GALLERY;

    // Duplicate items 3 times to ensure seamless infinite scroll
    const marqueeItems = [...items, ...items, ...items];

    const moveLightbox = useCallback((d: number) => {
        setLightboxIdx((i) => (i === null ? i : (i + d + items.length) % items.length));
    }, [items.length]);

    useEffect(() => {
        if (lightboxIdx === null) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxIdx(null);
            if (e.key === "ArrowRight") moveLightbox(1);
            if (e.key === "ArrowLeft") moveLightbox(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [lightboxIdx, moveLightbox]);

    const current = lightboxIdx !== null ? items[lightboxIdx] : null;

    return (
        <section id="gallery" className="bg-ink py-20 lg:py-28 text-ivory overflow-hidden">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Clean Header (No Filters) */}
                <div className="mb-12">
                    <h2 className={`${h2} text-ivory`}>Our Work & Space</h2>
                    <p className="mt-2 text-ivory/60 text-sm">Explore our latest styles and salon ambiance.</p>
                </div>

                {/* Marquee Carousel Section */}
                <div className="space-y-6">
                    {/* Row 1: Right to Left */}
                    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <motion.div
                            className="flex gap-4 shrink-0 pr-4"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                        >
                            {marqueeItems.map((g, i) => (
                                <button
                                    key={`${g.src}-${i}`}
                                    onClick={() => setLightboxIdx(i % items.length)}
                                    className="group/card relative shrink-0 w-72 aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-gold/50 hover:scale-[1.02]"
                                >
                                    <Image
                                        src={g.src}
                                        alt={g.alt}
                                        fill
                                        sizes="300px"
                                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-ink/0 group-hover/card:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                                        <ZoomIn className="size-8 text-ivory opacity-0 scale-50 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300" />
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Left to Right (Reverse Direction) */}
                    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <motion.div
                            className="flex gap-4 shrink-0 pr-4"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                        >
                            {marqueeItems.map((g, i) => (
                                <button
                                    key={`${g.src}-rev-${i}`}
                                    onClick={() => setLightboxIdx(i % items.length)}
                                    className="group/card relative shrink-0 w-72 aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-gold/50 hover:scale-[1.02]"
                                >
                                    <Image
                                        src={g.src}
                                        alt={g.alt}
                                        fill
                                        sizes="300px"
                                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-ink/0 group-hover/card:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                                        <ZoomIn className="size-8 text-ivory opacity-0 scale-50 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300" />
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Cinematic Lightbox Modal */}
            <AnimatePresence>
                {current && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={current.alt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4"
                        onClick={() => setLightboxIdx(null)}
                    >
                        <button
                            ref={closeRef}
                            aria-label="Close"
                            onClick={() => setLightboxIdx(null)}
                            className="absolute right-4 top-4 z-20 grid size-12 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition-colors"
                        >
                            <X className="size-6" />
                        </button>

                        <button
                            aria-label="Previous image"
                            onClick={(e) => { e.stopPropagation(); moveLightbox(-1); }}
                            className="absolute left-4 z-20 grid size-12 place-items-center rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-ink transition-all sm:left-8"
                        >
                            <ChevronLeft className="size-6" />
                        </button>

                        <motion.div
                            key={current.src}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative h-[80svh] w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                sizes="90vw"
                                className="object-contain bg-ink"
                            />
                        </motion.div>

                        <button
                            aria-label="Next image"
                            onClick={(e) => { e.stopPropagation(); moveLightbox(1); }}
                            className="absolute right-4 z-20 grid size-12 place-items-center rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-ink transition-all sm:right-8"
                        >
                            <ChevronRight className="size-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}