import Image from "next/image";
import { ArrowUp, Clock, Heart, CalendarCheck, MapPin, MessageCircle, Phone, Scissors, Sparkles, Camera } from "lucide-react";
import Reveal from "@/components/Reveal";
import { btnGold, btnLine, h2 } from "@/components/ui";
import { ADDRESS, GALLERY, IMG, MAPS_EMBED, MAPS_SEARCH, NAV, PHONE_DISPLAY, PHONE_TEL, SERVICES, WA_LINK } from "@/lib/data";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";

export function Highlights() {
    const items = [
        { Icon: Heart, t: "Personalized Beauty Services", d: "Services planned around what you want." },
        { Icon: Scissors, t: "Professional Styling Experience", d: "Careful work on hair, makeup and grooming." },
        { Icon: Sparkles, t: "Modern Salon Environment", d: "A clean, comfortable space in Citi Housing." },
        { Icon: CalendarCheck, t: "Convenient Appointment Booking", d: "Book through the form or WhatsApp." },
    ];

    return (
        <section id="highlights" className="bg-ivory py-12 lg:py-16">
            <div className={`${wrap} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
                {items.map(({ Icon, t, d }, i) => (
                    <Reveal key={t} delay={i * 0.08} className="group relative bg-white/50 border border-gold/10 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5">
                        <Icon className="size-7 text-gold-deep transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-gold" strokeWidth={1.3} />
                        <h3 className="mt-4 font-serif text-xl leading-tight transition-colors duration-300 group-hover:text-gold-deep">{t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/65">{d}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function Services() {
    return (
        <section id="services" className="bg-ink py-14 lg:py-20 text-ivory">
            <div className={wrap}>
                <Reveal>
                    <h2 className={`${h2} max-w-2xl`}>Services for hair, makeup and skin</h2>
                    <p className="mt-3 text-ivory/60 text-sm">Contact the salon for pricing.</p>
                </Reveal>

                <div className="mt-8 grid gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.title} delay={(i % 4) * 0.07}>
                            <article className="group h-full border border-white/10 bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                                <div className="relative aspect-4/3 overflow-hidden bg-white/5">
                                    <Image
                                        src={s.img}
                                        alt={`${s.title} at Glamour Salon`}
                                        fill
                                        loading="lazy"
                                        sizes="(min-width:1280px) 25vw, (min-width:480px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-serif text-xl transition-colors duration-300 group-hover:text-gold">{s.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">{s.text}</p>
                                    <a href="#booking" className="mt-4 inline-block text-sm font-medium text-gold underline-offset-4 transition-all duration-300 hover:underline">
                                        Explore Service &rarr;
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function About() {
    return (
        <section id="about" className="bg-beige py-14 lg:py-20">
            <div className={`${wrap} grid items-center gap-8 lg:grid-cols-2 lg:gap-12`}>
                <Reveal>
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg shadow-md">
                        <Image
                            src={IMG.interior}
                            alt="Comfortable seating inside the salon"
                            fill
                            loading="lazy"
                            sizes="(min-width:1024px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-4 border border-gold/60 rounded-md" />
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h2 className={h2}>Beauty Is Personal. Your Experience Should Be Too.</h2>
                    <p className="mt-4 max-w-lg leading-relaxed text-ink/75">
                        Glamour Salon provides beauty and personal grooming services in Citi Housing Phase 1, Gujranwala. Come in with an idea or a question, and we will work out the look together.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-medium text-gold-deep">
                        <MapPin className="size-4" /> 24 Plaza, Block AA, Phase 1, Citi Housing
                    </p>
                    <a href="#contact" className="mt-6 inline-flex min-h-11 items-center bg-ink px-6 text-sm font-medium text-ivory rounded-md transition-all duration-300 hover:bg-gold-deep hover:shadow-lg">
                        Discover Our Salon
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

export function WhyUs() {
    const rows = [
        { t: "Personalized service", d: "Your hair, skin and occasion come first, so each visit starts with what you want.", img: IMG.styling },
        { t: "Attention to styling details", d: "The small finishing touches get the same care as the main service.", img: IMG.makeup2 },
        { t: "A comfortable salon experience", d: "A relaxed space where you can take your time.", img: IMG.interior },
        { t: "Convenient booking and communication", d: "Reach the salon by phone, WhatsApp or the booking form.", img: IMG.brush },
    ];

    return (
        <section className="bg-ivory py-14 lg:py-20">
            <div className={`${wrap} space-y-10 lg:space-y-14`}>
                <Reveal>
                    <h2 className={`${h2} max-w-2xl`}>Why people choose Glamour</h2>
                </Reveal>

                {rows.map((r, i) => (
                    <div key={r.t} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                        <Reveal className={i % 2 ? "md:order-2" : ""}>
                            <div className="relative aspect-3/2 overflow-hidden bg-beige rounded-lg shadow-sm">
                                <Image
                                    src={r.img}
                                    alt={r.t}
                                    fill
                                    loading="lazy"
                                    sizes="(min-width:768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h3 className="font-serif text-2xl sm:text-3xl transition-colors duration-300 hover:text-gold-deep">{r.t}</h3>
                            <p className="mt-3 max-w-md leading-relaxed text-ink/70">{r.d}</p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="bg-beige py-14 lg:py-20">
            <div className={`${wrap} grid gap-8 lg:grid-cols-2`}>
                <Reveal>
                    <h2 className={h2}>Visit Glamour Salon Gujranwala</h2>

                    <div className="mt-6 space-y-4">
                        <address className="flex gap-3 not-italic leading-relaxed text-ink/80">
                            <MapPin className="mt-1 size-5 shrink-0 text-gold-deep" />
                            {ADDRESS}
                        </address>

                        <p className="flex gap-3 text-ink/80">
                            <Clock className="mt-1 size-5 shrink-0 text-gold-deep" />
                            <span>Listed as open until 1:00 AM. Please confirm operating hours with the salon.</span>
                        </p>

                        <a href={PHONE_TEL} className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-gold-deep">
                            <Phone className="size-5 text-gold-deep" />
                            {PHONE_DISPLAY}
                        </a>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#1f7a4d] px-6 text-sm font-medium text-white rounded-md transition-all duration-300 hover:bg-[#186540] hover:shadow-md">
                            <MessageCircle className="size-4" /> WhatsApp
                        </a>
                        <a href={MAPS_SEARCH} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-ink px-6 text-sm font-medium rounded-md transition-all duration-300 hover:bg-ink hover:text-ivory">
                            Get directions
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="h-64 overflow-hidden rounded-lg border border-gold/20 shadow-sm lg:h-full lg:min-h-80">
                        <iframe
                            title="Map showing Glamour Salon Gujranwala"
                            src={MAPS_EMBED}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function Social() {
    return (
        <section className="bg-ivory py-14 lg:py-20">
            <div className={wrap}>
                <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className={h2}>Follow the Glamour</h2>
                        <p className="mt-2 text-sm text-ink/60">Instagram profile link to be added once the salon shares its account.</p>
                    </div>
                    <a href="#" aria-disabled="true" className="inline-flex min-h-11 items-center gap-2 border border-ink px-6 text-sm font-medium rounded-md transition-all duration-300 hover:bg-ink hover:text-ivory">
                        <Camera className="size-4" /> Follow on Instagram
                    </a>
                </Reveal>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {GALLERY.slice(0, 6).map((g) => (
                        <div key={g.src} className="group relative aspect-square overflow-hidden bg-beige rounded-lg">
                            <Image
                                src={g.src}
                                alt={g.alt}
                                fill
                                loading="lazy"
                                sizes="(min-width:1024px) 16vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-ink text-ivory">
            <div className={`${wrap} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4`}>
                <div>
                    <p className="font-serif text-2xl">Glamour <span className="text-gold italic">Salon</span></p>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/60">Beauty and personal grooming services in Citi Housing Phase 1, Gujranwala.</p>
                </div>

                <nav aria-label="Footer">
                    <h3 className="font-serif text-lg text-gold">Explore</h3>
                    <ul className="mt-3 space-y-2 text-sm text-ivory/70">
                        {NAV.map(([id, l]) => (
                            <li key={id}>
                                <a href={`#${id}`} className="transition-colors duration-200 hover:text-gold">{l}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="font-serif text-lg text-gold">Services</h3>
                    <ul className="mt-3 space-y-2 text-sm text-ivory/70">
                        {SERVICES.slice(0, 5).map((s) => (
                            <li key={s.title}>
                                <a href="#services" className="transition-colors duration-200 hover:text-gold">{s.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif text-lg text-gold">Contact</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">24 Plaza, Block AA, Phase 1, Citi Housing Society, Gujranwala</p>
                    <div className="mt-3 flex flex-col gap-2 text-sm">
                        <a href={PHONE_TEL} className="transition-colors duration-200 hover:text-gold">{PHONE_DISPLAY}</a>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-gold">Message on WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className={`${wrap} flex items-center justify-between border-t border-gold/20 py-5 text-xs text-ivory/50`}>
                {/* Hardcoded 2026 to fix the Next.js prerendering error */}
                <p>© 2026 Glamour Salon Gujranwala. Demo website.</p>
                <a href="#home" aria-label="Back to top" className="grid size-9 place-items-center border border-gold/50 text-gold rounded-full transition-all duration-300 hover:bg-gold hover:text-ink hover:border-gold">
                    <ArrowUp className="size-3.5" />
                </a>
            </div>
        </footer>
    );
}