"use client";
import { useEffect, useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";
import { SERVICES, WA_LINK } from "@/lib/data";
import { h2 } from "./ui";

type Errors = Partial<Record<"name" | "phone" | "service" | "date" | "time", string>>;
const PK_PHONE = /^(?:\+?92|0)3\d{2}[-\s]?\d{7}$/;
const field = "mt-2 min-h-12 w-full border border-ink/20 bg-white px-4 text-base outline-none transition focus:border-gold-deep";

export default function Booking() {
    const [today, setToday] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

    useEffect(() => {
        const d = new Date();
        setToday(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
    }, []);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const v = (k: string) => String(f.get(k) ?? "").trim();
        const next: Errors = {};
        if (v("name").length < 2) next.name = "Enter your full name.";
        if (!PK_PHONE.test(v("phone"))) next.phone = "Enter a Pakistani mobile number, e.g. 0311 8900073.";
        if (!v("service")) next.service = "Choose a service.";
        if (!v("date")) next.date = "Choose a date.";
        else if (v("date") < today) next.date = "Choose today or a future date.";
        if (!v("time")) next.time = "Choose a time.";
        setErrors(next);
        if (Object.keys(next).length) return;
        setStatus("loading");
        setTimeout(() => setStatus("done"), 900); // demo only: nothing is sent or stored
    }

    const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-red-700">{errors[k]}</p>;
    const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

    return (
        <section id="booking" className="bg-beige px-5 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
                <div>
                    <h2 className={h2}>Book your visit</h2>
                    <p className="mt-5 max-w-md leading-relaxed text-ink/70">Tell us what you need and when. The quickest way to confirm a time is to message the salon on WhatsApp.</p>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                        className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#1f7a4d] px-7 text-sm font-medium text-white transition hover:bg-[#186540]">
                        <MessageCircle className="size-5" /> Book on WhatsApp
                    </a>
                </div>
                <form onSubmit={onSubmit} noValidate className="bg-ivory p-6 shadow-xl shadow-black/5 sm:p-10">
                    {status === "done" ? (
                        <div role="status" className="py-8">
                            <p className="font-serif text-3xl">Demo request received</p>
                            <p className="mt-3 leading-relaxed text-ink/70">This demo form does not send or save anything, so no appointment has been booked. To book, message the salon on WhatsApp.</p>
                            <button type="button" onClick={() => setStatus("idle")} className="mt-6 min-h-11 border border-ink px-6 text-sm">Fill the form again</button>
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="sm:col-span-2">Full name
                                <input name="name" autoComplete="name" required className={field} {...aria("name")} />{err("name")}</label>
                            <label>Phone number
                                <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="03XX XXXXXXX" required className={field} {...aria("phone")} />{err("phone")}</label>
                            <label>Service
                                <select name="service" defaultValue="" required className={field} {...aria("service")}>
                                    <option value="" disabled>Select a service</option>
                                    {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                                </select>{err("service")}</label>
                            <label>Preferred date
                                <input name="date" type="date" min={today} required className={field} {...aria("date")} />{err("date")}</label>
                            <label>Preferred time
                                <input name="time" type="time" required className={field} {...aria("time")} />{err("time")}</label>
                            <label className="sm:col-span-2">Message (optional)
                                <textarea name="message" rows={3} className={`${field} py-3`} /></label>
                            <button type="submit" disabled={status === "loading"}
                                className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-8 text-sm font-medium text-ivory transition hover:bg-gold-deep disabled:opacity-70 sm:col-span-2">
                                {status === "loading" ? <><Loader2 className="size-4 animate-spin" /> Sending demo request</> : "Request appointment (demo)"}
                            </button>
                            <p className="text-xs text-ink/60 sm:col-span-2">Demo form: validated in your browser only. Nothing is stored or sent.</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}