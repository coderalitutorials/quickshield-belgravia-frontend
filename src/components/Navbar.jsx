



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fixed: Base text is now your logo's exact Navy Blue (#0A2240) and switches to Gold on active/hover
//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-[#C5A86B] font-bold" 
//         : "text-[#0A2240] hover:text-[#C5A86B]"
//     }`;

//   // Luxury Mobile Styling: Adjusted to match light background theme cleanly
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/5 hover:text-[#C5A86B]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-amber-100 ${
//         isScrolled
//           ? "shadow-xl border-b border-[#C5A86B]/30"
//           : "border-b border-[#C5A86B]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo (Renders original brand colors directly on amber layout) */}
//           <Link to="/" className="flex items-center h-full py-3" onClick={() => setOpen(false)}>
//             <img 
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services Logo" 
//               className="h-12 md:h-16 w-auto object-contain" 
//             />
//           </Link>

//           {/* Desktop Navigation Link Stack */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink 
//                   key={item} 
//                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C5A86B]" />}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location Badge - Dynamic Navy Context Alignment */}
//             <div className="flex items-center gap-2 text-[#0A2240]/70 font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#C5A86B]/30 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Mayfair, London</span>
//             </div>
//           </div>

//           {/* Mobile Toggle Trigger */}
//           <button 
//             onClick={() => setOpen(!open)} 
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/5 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Popout Panel Grid */}
//       {open && (
//         <div className="md:hidden bg-amber-100 border-t border-[#C5A86B]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//            <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-white font-bold"
//         : "text-[#0A2240] hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/10 hover:text-white"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-[#b99547] ${
//         isScrolled
//           ? "shadow-xl border-b border-[#0A2240]/20"
//           : "border-b border-[#0A2240]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center h-full py-3"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink
//                   key={item}
//                   to={
//                     item === "Home"
//                       ? "/"
//                       : `/${item.toLowerCase().replace(" ", "-")}`
//                   }
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && (
//                         <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0A2240]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 text-[#0A2240] font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#0A2240]/20 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                 />
//               </svg>

//               <span>purley, London</span>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/10 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#b99547] border-t border-[#0A2240]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/"
//             className={mobileNavClass}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/services"
//             className={mobileNavClass}
//           >
//             Services
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/about-us"
//             className={mobileNavClass}
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/contact-us"
//             className={mobileNavClass}
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }














import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   PREMIUM LUXURY NAVIGATION
============================================ */

const COMPANY = "QuickShield Services Belgravia";

const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];

/* ============================================
   PAGE TITLES — SEO / BROWSER TAB FIX
============================================ */

const PAGE_TITLES = {
  "/":
    "Pest Control Belgravia | QuickShield Services Belgravia",

  "/services":
    "Pest Control Services Belgravia | QuickShield Services",

  "/about-us":
    "About Us | QuickShield Services Belgravia",

  "/contact-us":
    "Contact Us | QuickShield Services Belgravia",
};

/* ============================================
   MAIN NAVBAR
============================================ */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  /* ======================================
     AUTOMATIC PAGE TITLE FIX
  ====================================== */

  useEffect(() => {
    const pathname =
      location.pathname.replace(/\/+$/, "") || "/";

    document.title =
      PAGE_TITLES[pathname] ||
      "QuickShield Services Belgravia | Pest Control London";
  }, [location.pathname]);

  /* ======================================
     SCROLL DETECTION
  ====================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ======================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ====================================== */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ======================================
     ESCAPE KEY + BODY SCROLL LOCK
  ====================================== */

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  /* ======================================
     JSX
  ====================================== */

  return (
    <>
      {/* ======================================
          MAIN FIXED NAVBAR
      ====================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "shadow-[0_12px_40px_rgba(10,34,64,0.12)]"
            : ""
        }`}
      >
        {/* THIN GOLD TOP LINE */}

        <div className="h-[3px] bg-[#B99547]" />

        <nav
          aria-label="Main navigation"
          className={`relative border-b border-[#0A2240]/10 bg-[#F8F1E4]/95 backdrop-blur-xl transition-all duration-500 ${
            isScrolled
              ? "h-[72px] lg:h-[82px]"
              : "h-[82px] lg:h-[100px]"
          }`}
        >
          <div className="mx-auto flex h-full max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-10 lg:px-16">

            {/* ==================================
                LOGO
            ================================== */}

            <Link
              to="/"
              aria-label={`${COMPANY} - Home`}
              onClick={() => setOpen(false)}
              className="relative z-10 flex h-full shrink-0 items-center"
            >
              <img
                src="/images/quick1.webp"
                alt={`${COMPANY} logo`}
                className={`w-auto max-w-[150px] object-contain transition-all duration-500 sm:max-w-[185px] lg:max-w-[205px] ${
                  isScrolled
                    ? "h-[61px] lg:h-[72px]"
                    : "h-[70px] lg:h-[88px]"
                }`}
              />
            </Link>

            {/* ==================================
                DESKTOP NAVIGATION
            ================================== */}

            <div className="hidden items-center gap-1 lg:flex xl:gap-5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative inline-flex min-h-[52px] items-center px-3 text-[13px] font-semibold tracking-[0.025em] transition-colors duration-300 xl:px-4 ${
                      isActive
                        ? "text-[#947331]"
                        : "text-[#0A2240] hover:text-[#947331]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">
                        {item.label}
                      </span>

                      <span
                        className={`absolute bottom-[6px] left-3 right-3 h-[2px] origin-left bg-[#B99547] transition-transform duration-300 xl:left-4 xl:right-4 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ==================================
                DESKTOP CALL BUTTON
            ================================== */}

            <div className="hidden shrink-0 lg:flex">
              <a
                href={PHONE_LINK}
                aria-label={`Call ${COMPANY} at ${PHONE}`}
                className="group inline-flex min-h-[54px] items-center gap-4 bg-[#0A2240] px-6 text-xs font-bold uppercase tracking-[0.09em] text-[#F8F1E4] transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
              >
                <Phone size={17} />

                <span>Call Us Now</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* ==================================
                MOBILE ACTIONS
            ================================== */}

            <div className="flex shrink-0 items-center gap-3 lg:hidden">

              {/* MOBILE CALL */}

              <a
                href={PHONE_LINK}
                aria-label={`Call ${COMPANY}`}
                className="flex h-11 w-11 items-center justify-center border border-[#0A2240]/25 text-[#0A2240] transition-colors duration-300 hover:border-[#B99547] hover:bg-[#B99547]"
              >
                <Phone size={19} />
              </a>

              {/* MENU TOGGLE */}

              <button
                type="button"
                onClick={() =>
                  setOpen((current) => !current)
                }
                aria-label={
                  open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
                aria-controls="belgravia-mobile-menu"
                className="flex h-11 w-11 items-center justify-center bg-[#0A2240] text-[#F8F1E4] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
              >
                {open ? (
                  <X size={23} />
                ) : (
                  <Menu size={23} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ======================================
          MOBILE OVERLAY
      ====================================== */}

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-[#07182D]/70 backdrop-blur-[4px] transition-opacity duration-500 lg:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* ======================================
          MOBILE LUXURY DRAWER
      ====================================== */}

      <aside
        id="belgravia-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[60] flex w-[min(90vw,420px)] flex-col overflow-y-auto bg-[#0A2240] text-[#F8F1E4] shadow-[-20px_0_70px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-in-out lg:hidden ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* ==================================
            DRAWER HEADER
        ================================== */}

        <div className="flex items-center justify-between border-b border-[#F8F1E4]/15 px-6 py-7 sm:px-8">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              QuickShield Services
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
              BELGRAVIA
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border border-[#B99547]/50 text-[#B99547] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
          >
            <X size={22} />
          </button>
        </div>

        {/* ==================================
            MOBILE NAVIGATION
        ================================== */}

        <div className="flex-1 px-6 py-10 sm:px-8">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#B99547]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Explore Our Website
            </span>
          </div>

          <div className="border-t border-[#F8F1E4]/15">
            {NAV_ITEMS.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between gap-5 border-b border-[#F8F1E4]/15 py-6 transition-colors duration-300 ${
                    isActive
                      ? "text-[#B99547]"
                      : "text-[#F8F1E4] hover:text-[#B99547]"
                  }`
                }
              >
                <div className="flex items-center gap-5">

                  <span className="text-xs font-bold text-[#B99547]">
                    0{index + 1}
                  </span>

                  <span className="text-[clamp(1.6rem,5vw,2.1rem)] font-semibold tracking-[-0.04em]">
                    {item.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </NavLink>
            ))}
          </div>

          {/* ==================================
              CONTACT INFORMATION
          ================================== */}

          <div className="mt-12 border-t border-[#B99547]/40 pt-8">

            <div className="flex items-center gap-3">
              <ShieldCheck
                size={20}
                className="text-[#B99547]"
              />

              <h3 className="text-sm font-semibold">
                Contact QuickShield
              </h3>
            </div>

            <div className="mt-7 flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#B99547]"
              />

              <p className="text-sm leading-7 text-[#F8F1E4]/65">
                {ADDRESS}
              </p>
            </div>

            <a
              href={PHONE_LINK}
              className="group mt-8 flex min-h-[56px] items-center justify-between gap-4 bg-[#B99547] px-6 text-sm font-semibold text-[#0A2240] transition-colors duration-300 hover:bg-[#F8F1E4]"
            >
              <span className="flex items-center gap-3">
                <Phone size={18} />

                {PHONE}
              </span>

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* ==================================
            DRAWER FOOTER
        ================================== */}

        <div className="border-t border-[#F8F1E4]/15 px-6 py-6 sm:px-8">
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-[#B99547] transition-colors hover:text-[#F8F1E4]"
          >
            Request a Callback

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
