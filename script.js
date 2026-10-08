/* ============ EDIT YOUR DETAILS HERE ============ */
const CONFIG = {
  whatsapp: "918903228888",                       // digits only with country code, e.g. "919876543210"
  whatsappDisplay: "+91 8903228888",
  phone: "+91 8903228888",            // e.g. "+91 98765 43210"
  email: "[EMAIL]",
  address: "5/2A-6MAIN ROAD, KANYAKUMARI",
  upi: "trbresidency@tmb",                    // e.g. "trbresidency@upi"
  mapsLink:  "https://share.google/4wNvzQgiV8j2HxlIr",                       // paste your Google Maps share link
};

const ROOMS = [
  { name: "Deluxe Room", img: "image/Minimalist Bedroom with Window and Fan.png", desc: "A bright, quiet room with a plush bed and a work desk.", amenities: ["Free Wi-Fi", "NON-AC", "Smart TV"], guests: "2 guests, 1 child", price: "[1100]" },
  { name: "Premium Room", img:  "image/Minimalist Bedroom with Window and Fan.png", desc: "Extra space, warm lighting and a sitting corner.", amenities: ["Free Wi-Fi", "AC", "Smart TV"], guests: "2 adults, 1 child", price: "[1400]" },
  { name: "Family Suite", img: "image/Bright Modern Twin-Bed Residency Room.png", desc: "Two comfortable beds and room to relax together.", amenities: ["Free Wi-Fi", "AC", "Smart TV"], guests: "4 guests", price: "[1800]" },
 { name: "Four Bed", img: "image/four-bed.png", desc: "Two comfortable beds and room to relax together.", amenities: ["Free Wi-Fi", "AC", "Smart TV"], guests: "4 guests", price: "[2200]" },
];
const GALLERY = [
  ["image/Minimalist Bedroom with Window and Fan.png", "Bedroom"], ["image/IMG20261005122013.jpg", "Bathroom"], ["image/IMG20261005121948.jpg", "Bed details"],
  ["image/Sunlit Modern Corridor with Palm Views.png", "Room interior"], ["image/Bright Modern Twin-Bed Residency Room.png", "Room amenities"], ["image/four-bed.png", "Room view"],
];
const PLACES = [
  {
    name: "Muttom Beach",
    img: "image/image-1.png",
    desc: "Kanyakumari's beautiful coastal beach",
    dist: "[X] km",
    time: "30 min",
    maps: "Muttom Beach, Kanyakumari, Tamil Nadu"
  },
  {
    name: "Sunrise Point",
    img: "image/image-2.png",
    desc: "Best-known spot to watch sunrise",
    dist: "[X] km",
    time: "10 min",
    maps: "Sunrise Point, Kanyakumari, Tamil Nadu"
  },
  {
    name: "Thirparappu Waterfalls",
    img: "image/image-3.png",
    desc: "A scenic waterfall surrounded by the Western Ghats",
    dist: "[X] km",
    time: "45 min",
    maps: "Thirparappu Waterfalls, Kanyakumari, Tamil Nadu"
  },
  {
    name: "Echo Park",
    img: "image/image-4.png",
    desc: "A peaceful nature destination near Kanyakumari",
    dist: "[X] km",
    time: "15 min",
    maps: "Echo Park, Kanyakumari, Tamil Nadu"
  },
  {
    name: "Mathoor Aqueduct",
    img: "image/image-34.png",
    desc: "Mathur Aqueduct in Kanniyakumari district",
    dist: "[X] km",
    time: "45 min",
    maps: "Mathoor Aqueduct, Kanyakumari, Tamil Nadu"
  },
  {
    name: "Thanumalayan Temple",
    img: "image/image-35.png",
    desc: "Historic temple in Suchindram",
    dist: "[X] km",
    time: "20 min",
    maps: "Thanumalayan Temple, Suchindram, Tamil Nadu"
  },
  {
    name: "Padmanabhapuram Palace",
    img: "image/image-36.jpg",
    desc: "Historic palace near Kanyakumari",
    dist: "[X] km",
    time: "50 min",
    maps: "Padmanabhapuram Palace, Tamil Nadu"
  },
  {
    name: "Sothavilai Beach",
    img: "image/img-32.png",
    desc: "A scenic long coastal beach in Kanyakumari district",
    dist: "[X] km",
    time: "40 min",
    maps: "Sothavilai Beach, Kanyakumari, Tamil Nadu"
  }
];
const BLOGS = [
  ["Places", "Best Places to Visit Nearby", "A short list of sights worth your first day."],
  ["Guide", "Travel Guide", "Getting here, getting around and what to pack."],
  ["Activities", "Things to Do", "Morning walks, evening spots and rainy-day ideas."],
  ["Food", "Local Food Guide", "Where to eat well and what to order."],
  ["Family", "Family Travel Guide", "Easy plans for travelling with children."],
  ["Tips", "Hotel & Travel Tips", "Small things that make a stay smoother."],
].map((b, i) => ({ cat: b[0], title: b[1], text: b[2], img: `image/blog-${i + 1}.png`, date: "[DATE]" }));
/* ================================================ */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const ENQUIRY = "Hello TRB Residency, I would like to enquire about room availability and booking.";
const img = (src, alt, lazy = true) => `<img src="${src}" alt="${alt}" ${lazy ? 'loading="lazy"' : ""}>`;

/* fill editable details */
$$("[data-cfg]").forEach((el) => (el.textContent = CONFIG[el.dataset.cfg]));
$$("[data-wa]").forEach((a) => (a.href = wa(ENQUIRY)));
$$("[data-cfg-tel]").forEach((a) => (a.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "")));
$$("[data-cfg-mail]").forEach((a) => (a.href = "mailto:" + CONFIG.email));
$$("[data-cfg-map]").forEach((a) => { if (CONFIG.mapsLink) { a.href = CONFIG.mapsLink; a.textContent = "Open in Google Maps"; } });
$("#yr").textContent = new Date().getFullYear();

/* render rooms, gallery, places, blog */
$("#roomGrid").innerHTML = ROOMS.map((r) => `
  <article class="tile"><div class="ph">${img(r.img, r.name)}</div><div class="bd">
    <h3>${r.name}</h3><p>${r.desc}</p>
    <div class="chips">${r.amenities.map((a) => `<span>${a}</span>`).join("")}</div>
    <p class="meta">Sleeps ${r.guests}</p><p class="price">${r.price}</p>
    <div class="row"><a class="btn outline" href="${r.img}" data-view>View Room</a>
    <a class="btn gold" href="#book" data-room="${r.name}">Book Now</a></div></div></article>`).join("");
$("#roomSel").innerHTML = '<option value="">Any room</option>' + ROOMS.map((r) => `<option>${r.name}</option>`).join("");
$("#gallery").innerHTML = GALLERY.map((g, i) => `<button data-i="${i}" aria-label="Open ${g[1]}">${img(g[0], g[1])}</button>`).join("");
$("#placeGrid").innerHTML = PLACES.map((p) => {

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1` +
    `&origin=${encodeURIComponent(CONFIG.address)}` +
    `&destination=${encodeURIComponent(p.maps)}` +
    `&travelmode=driving`;

  return `
    <article class="tile">
      <div class="ph">
        ${img(p.img, p.name)}
      </div>

      <div class="bd">
        <h3>${p.name}</h3>

        <p>${p.desc}</p>

        <p class="meta">
          ${p.dist} away &middot; about ${p.time}
        </p>

        <div class="row">
          <a
            class="btn outline"
            href="${directionsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to ${p.name}"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </article>
  `;
}).join("");
$("#blogGrid").innerHTML = BLOGS.map((b) => `
  <article class="tile"><div class="ph">${img(b.img, b.title)}</div><div class="bd">
    <p class="meta">${b.cat} &middot; ${b.date}</p><h3>${b.title}</h3><p>${b.text}</p>
    <div class="row"><a class="btn outline" href="#blog">Read More</a></div></div></article>`).join("");

/* hide broken images so the gradient background shows until real photos are added */
document.addEventListener("error", (e) => { if (e.target.tagName === "IMG") e.target.style.visibility = "hidden"; }, true);

/* nav */
const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
const onScroll = () => nav.classList.toggle("solid", scrollY > 60);
onScroll(); addEventListener("scroll", onScroll, { passive: true });
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); nav.classList.add("solid"); };
$$("#menu a").forEach((a) => (a.onclick = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

/* hero slider */
const slides = $$(".slide"), dots = $("#dots");
let cur = 0, timer;
dots.innerHTML = slides.map((_, i) => `<button aria-label="Go to slide ${i + 1}"></button>`).join("");
const dotBtns = $$("button", dots);
function show(n) {
  cur = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("on", i === cur));
  dotBtns.forEach((d, i) => d.classList.toggle("on", i === cur));
}
const play = () => { clearInterval(timer); timer = setInterval(() => show(cur + 1), 6500); };
$(".hero .prev").onclick = () => { show(cur - 1); play(); };
$(".hero .next").onclick = () => { show(cur + 1); play(); };
dotBtns.forEach((d, i) => (d.onclick = () => { show(i); play(); }));
show(0); play();

/* booking form -> WhatsApp */
$$("[data-room]").forEach((a) => a.addEventListener("click", () => ($("#roomSel").value = a.dataset.room)));
$("#bookForm").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const msg = `Hello TRB Residency, I would like to enquire about room availability and booking.\nCheck-in: ${f.in}\nCheck-out: ${f.out}\nGuests: ${f.guests}\nRoom: ${f.room || "Any"}\nRequests: ${f.req || "None"}`;
  open(wa(msg), "_blank", "noopener");
};

/* payment */
$("#payWa").href = wa("Hello TRB Residency, I have made my booking payment. Please confirm.");
$("#copyUpi").onclick = async () => {
  const note = $("#copied");
  try { await navigator.clipboard.writeText(CONFIG.upi); }
  catch { const t = document.createElement("textarea"); t.value = CONFIG.upi; document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); }
  note.textContent = "UPI ID Copied!";
  setTimeout(() => (note.textContent = ""), 2200);
};
/* UPI payment app */
const upiPayBtn = $("#upiPayBtn");

if (upiPayBtn) {
  const upiId = CONFIG.upi;

  const upiUrl =
    `upi://pay?pa=${encodeURIComponent(upiId)}` +
    `&pn=${encodeURIComponent("TRB Residency")}` +
    `&cu=INR`;

  upiPayBtn.href = upiUrl;
}

/* contact form -> WhatsApp */
$("#contactForm").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  open(wa(`Hello TRB Residency, I am ${f.name} (${f.contact}).\n${f.msg}`), "_blank", "noopener");
};

/* lightbox */
const lb = $("#lightbox"), lbImg = $("#lbImg");
let gi = 0;
function openLb(i) { gi = (i + GALLERY.length) % GALLERY.length; lbImg.src = GALLERY[gi][0]; lbImg.alt = GALLERY[gi][1]; lb.hidden = false; $(".lb-close").focus(); }
const closeLb = () => (lb.hidden = true);
$("#gallery").onclick = (e) => { const b = e.target.closest("button"); if (b) openLb(+b.dataset.i); };
$$("[data-view]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); lbImg.src = a.getAttribute("href"); lbImg.alt = "Room photo"; lb.hidden = false; }));
$(".lb-close").onclick = closeLb;
$(".lightbox .prev").onclick = () => openLb(gi - 1);
$(".lightbox .next").onclick = () => openLb(gi + 1);
lb.onclick = (e) => { if (e.target === lb) closeLb(); };
addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") openLb(gi - 1);
  if (e.key === "ArrowRight") openLb(gi + 1);
});
