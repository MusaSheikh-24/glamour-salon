const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHONE_DISPLAY = "0311 8900073";
export const PHONE_TEL = "tel:+923118900073";
export const WA_MESSAGE = "Assalam-o-Alaikum, I would like to book an appointment at Glamour Salon Gujranwala. Please share your available timings.";
export const WA_LINK = `https://wa.me/923118900073?text=${encodeURIComponent(WA_MESSAGE)}`;
export const ADDRESS = "AA, Glamour Salon, 24 Plaza, Block AA, Phase 1, Citi Housing Society, Gujranwala, Pakistan";
export const MAPS_SEARCH = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Glamour Salon " + ADDRESS)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("Glamour Salon " + ADDRESS)}&output=embed`;

export const NAV = [
    ["home", "Home"], ["services", "Services"], ["about", "About"],
    ["gallery", "Gallery"], ["reviews", "Reviews"], ["contact", "Contact"],
] as const;

export const IMG = {
    hero: u("photo-1560066984-138dadb4c035", 2000),
    interior: u("photo-1521590832167-7bcbfaa6381f", 1200),
    styling: u("photo-1522337360788-8b13dee7a37e", 1200),
    color: u("photo-1562322140-8baeececf3df", 1200),
    makeup: u("photo-1487412947147-5cebf100ffc2", 1200),
    makeup2: u("photo-1596462502278-27bfdc403348", 1200),
    facial: u("photo-1570172619644-dfd03ed5d881", 1200),
    nails: u("photo-1604654894610-df63bc536371", 1200),
    groom: u("photo-1503951914875-452162b0f3f1", 1200),
    brush: u("photo-1516975080664-ed2fc6a32937", 1200),
};

export const SERVICES = [
    { title: "Haircut & Styling", text: "Cuts and finishes shaped around your face, hair type and routine.", img: IMG.styling },
    { title: "Hair Coloring", text: "From soft tones to bold changes, with care for your hair's condition.", img: IMG.color },
    { title: "Hair Treatments", text: "Restorative treatments for dry, dull or damaged hair.", img: IMG.interior },
    { title: "Bridal Makeup", text: "A considered look for your wedding day, planned with you in advance.", img: IMG.makeup },
    { title: "Party Makeup", text: "Event-ready makeup that suits your outfit and your style.", img: IMG.makeup2 },
    { title: "Facial & Skincare", text: "Cleansing and skin treatments to leave your face fresh.", img: IMG.facial },
    { title: "Manicure & Pedicure", text: "Neat, polished hands and feet in a relaxed setting.", img: IMG.nails },
    { title: "Grooming Services", text: "Clean, precise grooming and finishing touches.", img: IMG.groom },
] as const;

export type Cat = "Hair" | "Makeup" | "Salon";
export const GALLERY: { src: string; alt: string; cat: Cat; ratio: string }[] = [
    { src: IMG.hero, alt: "Salon interior with styling chairs and mirrors", cat: "Salon", ratio: "aspect-4/5" },
    { src: IMG.styling, alt: "Stylist working on long hair", cat: "Hair", ratio: "aspect-square" },
    { src: IMG.makeup, alt: "Makeup application close-up", cat: "Makeup", ratio: "aspect-4/5" },
    { src: IMG.color, alt: "Hair coloring in progress", cat: "Hair", ratio: "aspect-3/4" },
    { src: IMG.interior, alt: "Bright salon seating area", cat: "Salon", ratio: "aspect-square" },
    { src: IMG.makeup2, alt: "Finished party makeup look", cat: "Makeup", ratio: "aspect-4/5" },
    { src: IMG.brush, alt: "Makeup brushes and palette", cat: "Makeup", ratio: "aspect-square" },
    { src: IMG.groom, alt: "Grooming and precision haircut", cat: "Hair", ratio: "aspect-3/4" },
];