







// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// // ─── COUNTER COMPONENT ───
// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//       <div className="text-4xl font-black mb-1">{count}+</div>
//       <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* HEADER */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// About Quick Shield</span>
//           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
//             QuickShield <br/> 
//             <span className="text-[#0A2240] text-3xl md:text-5xl block mt-2 tracking-normal font-medium italic">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6">
          
//           <div className="md:col-span-7 h-[500px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-2xl">
//             {/* <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">
//             <img src="images/shieldteam.webp" alt=""  className="object-cover object-center"/>
//             </div> */}

// <div className="md:col-span-7 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
//   <img
//     src="/images/shieldteam.webp"
//     alt="QuickShield Team"
//     className="w-full h-full object-cover object-center"
//   />
// </div>


//           </div>

//           <div className="md:col-span-5 bg-white/40 p-10 rounded-[2rem] flex flex-col justify-center border border-white/50">
//             <h2 className="text-4xl font-black uppercase mb-6">Securing Your Property.</h2>
//             <p className="text-lg font-medium leading-relaxed opacity-90">
//               At Quick Shield, we understand that a pest-free environment is essential for peace of mind. We provide rapid, discreet, and effective pest control solutions tailored for the unique needs of our local community.
//             </p>
//           </div>

//           {/* ─── UPDATED STATS SECTION WITH ANIMATION ─── */}
//           <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//             <Counter end={1200} label="Homes Cleared" />
//             {/* Special case for non-numeric stats */}
//             <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//               <div className="text-4xl font-black mb-1">24/7</div>
//               <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
//             </div>
//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods (%)" />
//           </div>

//           {/* <div className="md:col-span-5 h-[400px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_2</div>
//           </div> */}


//           <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
//   <img
//     src="/images/image2.webp"
//     alt="QuickShield Pest Control Team"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
//   />

//   {/* Optional Dark Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/20 via-transparent to-transparent"></div>
// </div>

//           <div className="md:col-span-7 bg-white/40 p-12 rounded-[2rem] border border-white/50 flex flex-col justify-center">
//             <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 font-bold text-lg">
//                   <CheckCircle2 className="text-[#0A2240]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* <div className="md:col-span-4 h-[350px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_3</div>
//           </div> */}


// <div className="md:col-span-4 h-[350px] rounded-[2rem] overflow-hidden relative shadow-xl group">
//   <img
//     src="/images/image3.webp"
//     alt="QuickShield Pest Control Service"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//   />

//   {/* Optional Premium Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/25 via-transparent to-transparent"></div>
// </div>


//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex items-center justify-between">
//             <div>
//               <h3 className="text-3xl font-black uppercase mb-4">Need Emergency Support?</h3>
//               <p className="text-white/70">Our dispatch team is ready to respond to your call immediately.</p>
//             </div>
//             <button className="bg-[#b99547] text-[#0A2240] px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     let timer;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);

//           observer.disconnect();
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//       if (timer) clearInterval(timer);
//     };
//   }, [end]);

//   return (
//     <div
//       ref={ref}
//       className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center w-full"
//     >
//       <div className="text-xl md:text-3xl font-black">{count}+</div>
//       <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] mt-1 break-words">
//         {label}
//       </div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 text-[#0A2240] py-6 w-full overflow-x-hidden">
//       <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 box-border overflow-hidden">
        
//         {/* HEADER */}
//         <div className="mb-6 min-w-0">
//           <span className="text-[#0A2240]/60 font-mono text-[9px] uppercase tracking-[0.2em] block break-words">
//             // About Quick Shield
//           </span>

//           <h1 className="text-2xl md:text-5xl font-black uppercase text-white mt-1 break-words">
//             QuickShield
//             <span className="text-[#0A2240] text-sm md:text-3xl block font-medium italic break-words">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         {/* CONTENT GRID */}
//         <div className="grid grid-cols-1 gap-4 w-full min-w-0">
          
//           {/* Main Hero Image */}
//           <div className="w-full max-w-full h-56 md:h-[500px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl min-w-0">
//             <img
//               src="/images/shieldteam.webp"
//               alt="Team"
//               className="block w-full max-w-full h-full object-cover object-top"
//             />
//           </div>

//           {/* About Text */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-10 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h2 className="text-lg md:text-4xl font-black uppercase mb-2 break-words">
//               Securing Your Property.
//             </h2>
//             <p className="text-xs md:text-lg font-medium leading-relaxed opacity-90 break-words">
//               At Quick Shield, we provide rapid, discreet, and effective pest
//               control solutions tailored for the unique needs of our local
//               community.
//             </p>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 gap-2 w-full min-w-0">
//             <Counter end={1200} label="Homes Cleared" />

//             <div className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center flex flex-col justify-center">
//               <div className="text-xl md:text-3xl font-black">24/7</div>
//               <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] break-words">
//                 Availability
//               </div>
//             </div>

//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods" />
//           </div>

//           {/* Image 2 */}
//           <div className="w-full max-w-full h-56 md:h-[400px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-xl min-w-0">
//             <img
//               src="/images/image2.webp"
//               alt="Services"
//               className="block w-full max-w-full h-full object-[center_5%]"
//             />
//           </div>

//           {/* Technical Approach */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-12 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h3 className="text-base md:text-3xl font-black uppercase mb-3 break-words">
//               Our Technical Approach
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-0">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-2 font-bold text-[11px] md:text-lg min-w-0 break-words"
//                 >
//                   <CheckCircle2
//                     size={16}
//                     className="text-[#0A2240] shrink-0 mt-[1px]"
//                   />
//                   <span className="min-w-0 break-words">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer Call to Action */}
//           <div className="w-full max-w-full bg-[#0A2240] text-white p-5 md:p-12 rounded-2xl md:rounded-[1.5rem] text-center box-border min-w-0">
//             <h3 className="text-lg md:text-3xl font-black uppercase mb-2 break-words">
//               Need Emergency Support?
//             </h3>

//             <p className="text-white/70 text-[10px] md:text-base mb-4 break-words">
//               Our dispatch team is ready to respond to your call immediately.
//             </p>

//             <button className="bg-[#b99547] text-[#0A2240] w-full md:w-auto px-6 md:px-10 py-3 font-black uppercase tracking-widest rounded-xl text-xs md:text-base hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


















// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Building2,
//   Check,
//   ChevronDown,
// } from "lucide-react";

// const PHONE = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// const SERVICES = [
//   "Rats & Mice Control",
//   "Bed Bug Treatment",
//   "Cockroach Control",
//   "Wasp Control",
//   "Carpet Moth Treatment",
//   "Commercial Pest Control",
// ];

// const PRINCIPLES = [
//   {
//     number: "01",
//     title: "Understand",
//     description:
//       "We begin by understanding the pest concern, the signs of activity and the property involved.",
//     icon: Search,
//   },
//   {
//     number: "02",
//     title: "Respond",
//     description:
//       "Different pest problems require different approaches. We consider suitable treatment and management options.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "03",
//     title: "Protect",
//     description:
//       "Where appropriate, we consider access points and practical prevention measures to help reduce future pest activity.",
//     icon: Building2,
//   },
// ];

// /*
//   Safe reveal animation:
//   Content stays visible unless IntersectionObserver
//   is supported and has been successfully initialised.
// */
// function Reveal({ children, className = "", delay = 0 }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(true);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const element = ref.current;

//     if (!element) return;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (
//       prefersReducedMotion ||
//       !("IntersectionObserver" in window)
//     ) {
//       return;
//     }

//     const rect = element.getBoundingClientRect();

//     if (rect.top < window.innerHeight) {
//       return;
//     }

//     setVisible(false);
//     setAnimate(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px 80px 0px",
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={
//         className +
//         (animate
//           ? " transition-all duration-700 ease-out"
//           : "")
//       }
//       style={
//         animate
//           ? {
//               opacity: visible ? 1 : 0,
//               transform: visible
//                 ? "translateY(0)"
//                 : "translateY(28px)",
//               transitionDelay: visible ? `${delay}ms` : "0ms",
//             }
//           : undefined
//       }
//     >
//       {children}
//     </div>
//   );
// }

// export default function AboutUsPage() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F6F4EF] text-[#0A2240]">
//       {/* ============================= */}
//       {/* 01 — CINEMATIC HERO */}
//       {/* ============================= */}

//       <section
//         aria-labelledby="about-hero-title"
//         className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#0A2240] pt-36 pb-20 sm:min-h-[850px] lg:min-h-[900px]"
//       >
//         {/* FULL BACKGROUND IMAGE */}
//         <div className="absolute inset-0 -z-20">
//           <img
//             src="/images/shieldteam.webp"
//             alt=""
//             aria-hidden="true"
//             className="h-full w-full object-cover object-center"
//             fetchPriority="high"
//           />
//         </div>

//         {/* CINEMATIC GRADIENT OVERLAY */}
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,34,0.96)_0%,rgba(6,24,45,0.89)_37%,rgba(7,27,50,0.56)_68%,rgba(7,27,50,0.30)_100%)]" />

//         <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#06172B]/85 via-transparent to-[#06172B]/20" />

//         {/* Decorative Grid */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, white 1px, transparent 1px)",
//             backgroundSize: "25% 100%",
//           }}
//         />

//         <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           {/* BREADCRUMB */}
//           <div className="mb-14 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:mb-20">
//             <Link
//               to="/"
//               className="text-white/55 transition-colors hover:text-[#D9B976]"
//             >
//               Home
//             </Link>

//             <span className="h-px w-5 bg-[#B99547]" />

//             <span className="text-[#E5C98D]">
//               About QuickShield
//             </span>
//           </div>

//           <div className="max-w-[1000px]">
//             {/* EYEBROW */}
//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-[#D5AE62]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E5C98D] sm:text-xs">
//                 QuickShield Services Notting Hill
//               </span>
//             </div>

//             {/* MAIN HERO TITLE — ALWAYS VISIBLE */}
//             <h1
//               id="about-hero-title"
//               className="text-[clamp(3.8rem,8.5vw,9.5rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-white"
//             >
//               WE PROTECT
//               <span className="mt-2 block font-serif font-normal italic tracking-[-0.075em] text-[#E5C98D]">
//                 what matters.
//               </span>
//             </h1>

//             <div className="mt-10 grid max-w-[780px] gap-8 border-t border-white/25 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
//               <p className="max-w-[530px] text-base leading-8 text-white/80 sm:text-lg">
//                 Professional pest control in Notting Hill,
//                 London. A considered approach to protecting
//                 homes, workplaces and the spaces that matter
//                 to you.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex w-fit items-center gap-5 rounded-full border border-[#E5C98D] bg-[#B99547] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//               >
//                 Get in Touch

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM HERO DETAILS */}
//         <div className="absolute bottom-8 left-6 right-6 z-10 hidden items-center justify-between border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:flex sm:left-10 sm:right-10 lg:left-16 lg:right-16">
//           <span>Notting Hill · London · United Kingdom</span>

//           <a
//             href="#our-story"
//             className="flex items-center gap-3 transition-colors hover:text-white"
//           >
//             Discover Our Story
//             <ChevronDown size={17} className="text-[#E5C98D]" />
//           </a>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 02 — EDITORIAL INTRODUCTION */}
//       {/* ============================= */}

//       <section
//         id="our-story"
//         className="relative bg-[#F6F4EF] py-24 sm:py-32 lg:py-40"
//       >
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
//             <Reveal>
//               <div className="flex items-center gap-4 lg:pt-4">
//                 <span className="h-px w-9 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   01 / Our Story
//                 </span>
//               </div>
//             </Reveal>

//             <div>
//               <Reveal>
//                 <h2 className="max-w-[1050px] text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[1.08] tracking-[-0.065em]">
//                   Pest control is
//                   <span className="font-serif font-normal italic text-[#B99547]">
//                     {" "}more than{" "}
//                   </span>
//                   removing the problem.
//                 </h2>
//               </Reveal>

//               <div className="mt-12 grid gap-10 border-t border-[#0A2240]/15 pt-10 md:grid-cols-2 md:gap-16">
//                 <Reveal delay={80}>
//                   <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-[#0A2240]">
//                     It's about understanding your property,
//                     identifying concerns and finding the
//                     right way forward.
//                   </p>
//                 </Reveal>

//                 <Reveal delay={160}>
//                   <div className="space-y-5 text-[15px] leading-8 text-[#566273]">
//                     <p>
//                       QuickShield Services Notting Hill
//                       provides pest control assistance for
//                       residential and commercial properties
//                       in Notting Hill, London.
//                     </p>

//                     <p>
//                       Whether you're dealing with rats,
//                       mice, bed bugs, cockroaches or wasps,
//                       our focus is on understanding the
//                       situation and discussing appropriate
//                       management options.
//                     </p>
//                   </div>
//                 </Reveal>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 03 — PHOTOGRAPHIC STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240]">
//         <div className="grid min-h-[650px] lg:grid-cols-2">
//           {/* IMAGE */}
//           <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[700px]">
//             <img
//               src="/images/image2.webp"
//               alt="Pest control service and property inspection"
//               loading="lazy"
//               className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#06182D]/45 to-transparent" />

//             <div className="absolute bottom-8 left-8 border-l-2 border-[#D9B976] pl-5 text-xs font-semibold uppercase tracking-[0.17em] text-white sm:bottom-12 sm:left-12">
//               A property-first perspective
//             </div>
//           </div>

//           {/* TEXT */}
//           <div className="relative flex items-center overflow-hidden px-7 py-20 text-white sm:px-12 lg:px-16 lg:py-28">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/15"
//             />

//             <Reveal className="relative z-10 max-w-[620px]">
//               <div className="mb-9 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                   What Defines Us
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3rem,5.2vw,6rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//                 Every property
//                 <br />
//                 has its own
//                 <br />
//                 <span className="font-serif font-normal italic text-[#E5C98D]">
//                   story.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-lg text-base leading-8 text-white/65">
//                 A pest issue in a London townhouse may
//                 require different considerations from one
//                 affecting a commercial premises. That's why
//                 understanding the environment matters.
//               </p>

//               <Link
//                 to="/services"
//                 className="group mt-10 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#E5C98D]"
//               >
//                 Discover Our Services

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 04 — EDITORIAL APPROACH */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//             {/* LEFT STICKY HEADING */}
//             <div>
//               <Reveal>
//                 <div className="lg:sticky lg:top-32">
//                   <div className="mb-8 flex items-center gap-4">
//                     <span className="h-px w-10 bg-[#B99547]" />

//                     <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                       02 / Our Approach
//                     </span>
//                   </div>

//                   <h2 className="text-[clamp(3.2rem,5.5vw,6.5rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                     Thoughtful
//                     <br />
//                     from the
//                     <br />
//                     <span className="font-serif font-normal italic text-[#B99547]">
//                       first step.
//                     </span>
//                   </h2>

//                   <p className="mt-8 max-w-sm text-base leading-8 text-[#566273]">
//                     A clear, practical approach to pest
//                     management, with attention to the
//                     details of each situation.
//                   </p>
//                 </div>
//               </Reveal>
//             </div>

//             {/* RIGHT PROCESS ROWS */}
//             <div className="border-t border-[#0A2240]/20">
//               {PRINCIPLES.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <Reveal key={item.number} delay={index * 80}>
//                     <div className="group grid gap-5 border-b border-[#0A2240]/20 py-10 transition-colors duration-300 hover:bg-[#0A2240]/[0.025] sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-12">
//                       <span className="font-serif text-3xl italic text-[#B99547]">
//                         {item.number}
//                       </span>

//                       <div>
//                         <div className="flex items-start justify-between gap-5">
//                           <h3 className="text-[clamp(2.3rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.06em]">
//                             {item.title}
//                           </h3>

//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0A2240]/15 transition-all duration-300 group-hover:rotate-12 group-hover:border-[#B99547] group-hover:bg-[#B99547]">
//                             <Icon size={21} strokeWidth={1.5} />
//                           </div>
//                         </div>

//                         <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#566273]">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </Reveal>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 05 — SERVICES STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#0A2240]/10"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-9 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#0A2240]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/75">
//                 03 / What We Do
//               </span>
//             </div>

//             <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//               <h2 className="max-w-[1000px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">
//                 Different pests.
//                 <br />
//                 <span className="font-serif font-normal italic text-[#F7F2E7]">
//                   One clear focus.
//                 </span>
//               </h2>

//               <p className="max-w-[300px] text-base leading-8 text-[#0A2240]/80">
//                 Helping customers explore appropriate
//                 pest control solutions for their homes
//                 and businesses.
//               </p>
//             </div>
//           </Reveal>

//           {/* SERVICE INDEX */}
//           <div className="mt-16 grid border-t border-[#0A2240]/25 md:grid-cols-2 lg:mt-20">
//             {SERVICES.map((service, index) => (
//               <Reveal key={service} delay={(index % 2) * 80}>
//                 <Link
//                   to="/services"
//                   className={
//                     "group flex min-h-[110px] items-center justify-between gap-6 border-b border-[#0A2240]/25 py-6 transition-all duration-300 hover:pl-3 " +
//                     (index % 2 === 0
//                       ? "md:pr-10"
//                       : "md:border-l md:border-[#0A2240]/25 md:pl-10 md:hover:pl-12")
//                   }
//                 >
//                   <div className="flex items-center gap-5">
//                     <span className="text-xs font-bold text-[#0A2240]/55">
//                       0{index + 1}
//                     </span>

//                     <span className="text-xl font-medium tracking-[-0.035em] text-[#0A2240] sm:text-2xl">
//                       {service}
//                     </span>
//                   </div>

//                   <ArrowUpRight
//                     size={23}
//                     className="shrink-0 text-[#0A2240] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </Reveal>
//             ))}
//           </div>

//           <div className="mt-12">
//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#0A2240]"
//             >
//               View All Services

//               <ArrowUpRight
//                 size={19}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 06 — LOCAL PRESENCE */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-16">
//           <Reveal>
//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   04 / Our Location
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3.5rem,6vw,7rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                 Rooted in
//                 <br />
//                 <span className="font-serif font-normal italic text-[#B99547]">
//                   Notting Hill.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-base leading-8 text-[#566273]">
//                 Based in Notting Hill, London,
//                 QuickShield Services is a local point
//                 of contact for pest control enquiries
//                 concerning residential and commercial
//                 properties.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={100}>
//             <div className="border-l-2 border-[#B99547] bg-[#EDE9E0] px-8 py-12 sm:px-12 sm:py-14">
//               <MapPin
//                 size={33}
//                 strokeWidth={1.4}
//                 className="text-[#B99547]"
//               />

//               <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                 QuickShield Services Notting Hill
//               </p>

//               <address className="mt-5 text-2xl font-medium not-italic leading-[1.45] tracking-[-0.035em] sm:text-3xl">
//                 3A Denbigh Rd
//                 <br />
//                 London W11 2SJ
//                 <br />
//                 United Kingdom
//               </address>

//               <div className="mt-9 h-px bg-[#0A2240]/15" />

//               <a
//                 href={PHONE_LINK}
//                 className="group mt-7 inline-flex items-center gap-4 text-lg font-semibold transition-colors hover:text-[#9A793F]"
//               >
//                 <Phone size={19} className="text-[#B99547]" />

//                 {PHONE}

//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 07 — FINAL STATEMENT CTA */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/15"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-10 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                 Your Property. Our Conversation.
//               </span>
//             </div>

//             <h2 className="max-w-[1100px] text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.98] tracking-[-0.075em]">
//               Let's make
//               <br />
//               <span className="font-serif font-normal italic text-[#E5C98D]">
//                 the next move.
//               </span>
//             </h2>

//             <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
//               <p className="max-w-xl text-base leading-8 text-white/65">
//                 Tell us about your pest concern.
//                 Contact QuickShield Services Notting Hill
//                 to discuss the situation and suitable
//                 next steps.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//                 >
//                   Contact QuickShield

//                   <ArrowUpRight
//                     size={19}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>

//                 <a
//                   href={PHONE_LINK}
//                   className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#E5C98D]"
//                 >
//                   <Phone size={17} />
//                   Call Now
//                   <ArrowRight size={17} />
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }






import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Phone,
  Building2,
  Home,
  ChevronDown,
  ScanSearch,
  Navigation,
} from "lucide-react";

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";
const ADDRESS = "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const process = [
  {
    number: "01",
    title: "Listen",
    description:
      "We begin by understanding what you have noticed, where the activity is occurring and how it is affecting your property.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "A closer assessment helps identify signs of pest activity, possible access points and areas that may need attention.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "We consider suitable pest control options according to the pest, property and circumstances.",
  },
  {
    number: "04",
    title: "Prevent",
    description:
      "Where appropriate, we discuss proofing, housekeeping and prevention measures to help reduce future concerns.",
  },
];

const questions = [
  {
    question: "What types of properties do you assist?",
    answer:
      "QuickShield Services Belgravia provides pest control assistance for residential and commercial properties, including houses, flats, offices and other premises across Belgravia and London.",
  },
  {
    question: "Which pests can you help with?",
    answer:
      "Common concerns include rats, mice, bed bugs, cockroaches, ants, wasps, carpet moths and other pests. Contact our team to discuss your particular situation.",
  },
  {
    question: "Do you provide pest prevention advice?",
    answer:
      "Depending on the circumstances, we can discuss potential entry points, property proofing and practical prevention measures alongside pest control options.",
  },
  {
    question: "Do you cover areas outside Belgravia?",
    answer:
      "We serve Belgravia, nearby areas and customers across London. Contact us with your postcode to discuss service coverage.",
  },
];

const coverage = [
  {
    number: "01",
    title: "Belgravia",
    text: "Pest control support for properties in our local neighbourhood.",
  },
  {
    number: "02",
    title: "Nearby Areas",
    text: "Assistance for customers in surrounding London neighbourhoods.",
  },
  {
    number: "03",
    title: "Across London",
    text: "Residential and commercial pest control enquiries throughout London.",
  },
];

/* =========================================
   SCROLL REVEAL
========================================= */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight + 80) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 90px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0)"
          : "translate3d(0,24px,0)",
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${
        light ? "text-[#F8F1E4]/75" : "text-[#0A2240]/70"
      }`}
    >
      <span className="h-[2px] w-8 shrink-0 bg-[#B99547]" />
      {children}
    </div>
  );
}

function ActionLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center justify-between gap-7 bg-[#B99547] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F8F1E4]"
    >
      {children}
      <ArrowUpRight
        size={19}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

function FAQItem({ item, index, active, setActive }) {
  const opened = active === index;
  const contentId = `belgravia-faq-${index}`;

  return (
    <div className="border-b border-[#0A2240]/15">
      <button
        type="button"
        aria-expanded={opened}
        aria-controls={contentId}
        onClick={() => setActive(opened ? null : index)}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="flex items-start gap-5">
          <span className="mt-1 text-xs font-bold text-[#B99547]">
            0{index + 1}
          </span>
          <span className="text-lg font-semibold leading-snug sm:text-xl">
            {item.question}
          </span>
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center border border-[#0A2240]/20 transition-[background-color,transform] duration-300 ${
            opened ? "rotate-180 bg-[#B99547]" : ""
          }`}
        >
          <ChevronDown size={19} />
        </span>
      </button>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          opened
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-8 pl-9 text-sm leading-8 text-[#0A2240]/75 sm:pl-11 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   NEW HERO IMAGE DESIGN
   LUXURY EDITORIAL GALLERY
========================================= */

function EditorialHeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[650px] px-3 pb-16 pt-6 sm:px-10 sm:pb-20 lg:px-8 lg:pb-24">
      {/* Outer architectural frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-8 top-0 bottom-24 border border-[#B99547]/55 sm:left-4 sm:right-14"
      />

      {/* Offset gold panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 top-12 w-[88%] bg-[#B99547]/15 sm:right-3"
      />

      {/* Main image gallery */}
      <div className="group relative ml-auto w-[96%] border border-[#B99547]/65 bg-[#F8F1E4] p-2 sm:w-[94%] sm:p-3">
        <div className="relative overflow-hidden bg-[#F8F1E4]">
          <img
            src="/images/shieldteam.webp"
            alt="QuickShield Services Belgravia pest control team"
            fetchPriority="high"
            className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transform-none"
          />
        </div>
      </div>

      {/* Separate location plaque, not over the photo */}
      <div className="relative z-10 -mt-1 ml-0 w-[210px] bg-[#B99547] px-6 py-5 text-[#0A2240] shadow-[12px_12px_0_0_rgba(10,34,64,1)] sm:-mt-8 sm:-ml-3 sm:w-[245px] sm:px-8 sm:py-7">
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em]">
          Belgravia · London
        </span>

        <span className="mt-2 block text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none tracking-[-0.07em]">
          SW1X
        </span>

        <div className="mt-4 h-px w-full bg-[#0A2240]/30" />

        <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.14em]">
          Property Protection
        </span>
      </div>

      {/* Vertical brand label */}
      <span
        className="absolute right-0 top-12 hidden text-[10px] font-bold uppercase tracking-[0.28em] text-[#B99547] sm:block"
        style={{ writingMode: "vertical-rl" }}
      >
        QUICKSHIELD SERVICES
      </span>

      {/* Architectural corner accents */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[#B99547]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 h-10 w-10 border-b-2 border-r-2 border-[#B99547]"
      />
    </div>
  );
}

/* =========================================
   MAIN ABOUT US PAGE
========================================= */

export default function AboutUsPage() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  useEffect(() => {
    document.title =
      "About QuickShield Services Belgravia | Pest Control London";
  }, []);

  return (
    <main className="overflow-x-clip bg-[#F8F1E4] font-sans text-[#0A2240]">

      {/* =====================================
          SECTION 1 — HERO
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#0A2240] pt-32 text-[#F8F1E4] sm:pt-40 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#B99547 1px,transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8F1E4]/60"
          >
            <Link
              to="/"
              className="transition-colors hover:text-[#B99547]"
            >
              Home
            </Link>
            <span className="h-px w-6 bg-[#B99547]" />
            <span>About Us</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Hero content */}
            <div className="relative z-10 pb-4 lg:pb-24">
              <Reveal>
                <SectionLabel light>
                  About QuickShield Services Belgravia
                </SectionLabel>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-9 max-w-[850px] text-[clamp(3.5rem,6.7vw,7.5rem)] font-semibold leading-[0.99] tracking-[-0.055em]">
                  A Better
                  <br />
                  Standard
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    of Care.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10 max-w-lg border-l-2 border-[#B99547] pl-6">
                  <p className="text-base leading-8 text-[#F8F1E4]/75 sm:text-lg">
                    Considered pest control for the homes,
                    businesses and properties that make
                    Belgravia and London unique.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ActionLink to="/contact-us">
                    Discuss Your Property
                  </ActionLink>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center gap-3 border border-[#F8F1E4]/25 px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#B99547] hover:text-[#B99547]"
                  >
                    <Phone size={17} />
                    Call Our Team
                  </a>
                </div>
              </Reveal>
            </div>

            {/* New editorial image */}
            <Reveal delay={100}>
              <EditorialHeroImage />
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#F8F1E4]/15 py-7 lg:mt-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F8F1E4]/55">
              Belgravia · Greater London · United Kingdom
            </span>

            <a
              href="#our-story"
              className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B99547] transition-colors hover:text-[#F8F1E4]"
            >
              Explore Our Approach
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2 — OUR STORY
      ===================================== */}

      <section
        id="our-story"
        className="scroll-mt-24 bg-[#F8F1E4] py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
            <Reveal>
              <div className="lg:pt-4">
                <SectionLabel>01 / Who We Are</SectionLabel>
                <div className="mt-10 hidden h-px w-full bg-[#0A2240]/20 lg:block" />
                <span className="mt-8 hidden text-[clamp(5rem,10vw,10rem)] font-light leading-none tracking-[-0.08em] text-[#B99547] lg:block">
                  Q.
                </span>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="max-w-[950px] text-[clamp(2.5rem,4.8vw,5.5rem)] font-semibold leading-[1.13] tracking-[-0.045em]">
                  Every property has a story.
                  <span className="block font-light italic text-[#B99547]">
                    Ours begins with protecting it.
                  </span>
                </h2>
              </Reveal>

              <div className="mt-12 grid gap-8 border-t border-[#0A2240]/20 pt-10 md:grid-cols-2 md:gap-12">
                <Reveal delay={70}>
                  <p className="text-lg font-medium leading-9">
                    QuickShield Services Belgravia provides
                    pest control assistance for residential
                    and commercial properties in Belgravia,
                    nearby neighbourhoods and across London.
                  </p>
                </Reveal>

                <Reveal delay={140}>
                  <div className="space-y-5 text-base leading-8 text-[#0A2240]/70">
                    <p>
                      Pest activity can affect comfort,
                      hygiene and the everyday use of a
                      property. Understanding the problem
                      is an important part of finding a
                      suitable way forward.
                    </p>
                    <p>
                      Our approach focuses on identifying
                      concerns, discussing appropriate
                      treatment options and considering
                      practical prevention measures where
                      relevant.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 3 — WHAT WE PROTECT
      ===================================== */}

      <section className="bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
            <Reveal>
              <div>
                <SectionLabel light>
                  02 / Spaces That Matter
                </SectionLabel>
                <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.7rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                  Protection for
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    every environment.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-sm text-base leading-8 text-[#F8F1E4]/65">
                From private residences to professional
                workplaces, pest concerns deserve attention
                suited to the property and its use.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden bg-[#B99547] p-8 sm:min-h-[540px] sm:p-12">
                <img
                  src="/images/image2.webp"
                  alt="Residential pest control and property protection"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/95 via-[#0A2240]/45 to-[#0A2240]/10" />

                <div className="relative z-10">
                  <Home
                    size={35}
                    strokeWidth={1.4}
                    className="mb-8 text-[#B99547]"
                  />

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                    Private Properties
                  </span>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Residential
                    <br />
                    Pest Control
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#F8F1E4]/75 sm:text-base">
                    Pest management assistance for houses,
                    flats and other residential spaces.
                  </p>

                  <Link
                    to="/services"
                    className="mt-8 inline-flex items-center gap-3 border-b border-[#B99547] pb-2 text-xs font-bold uppercase tracking-wider text-[#B99547] transition-colors hover:text-[#F8F1E4]"
                  >
                    Explore Services
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden border border-[#B99547]/40 bg-[#0A2240] p-8 sm:min-h-[540px] sm:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.09]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#B99547 1px,transparent 1px),linear-gradient(90deg,#B99547 1px,transparent 1px)",
                    backgroundSize: "72px 72px",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-[#B99547]/25"
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full border border-[#B99547]/25"
                />

                <div className="relative z-10">
                  <Building2
                    size={35}
                    strokeWidth={1.4}
                    className="mb-8 text-[#B99547]"
                  />

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                    Business Premises
                  </span>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Commercial
                    <br />
                    Pest Control
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#F8F1E4]/75 sm:text-base">
                    Practical pest management support for
                    offices, commercial properties and
                    other working environments.
                  </p>

                  <Link
                    to="/contact-us"
                    className="mt-8 inline-flex items-center gap-3 border-b border-[#B99547] pb-2 text-xs font-bold uppercase tracking-wider text-[#B99547] transition-colors hover:text-[#F8F1E4]"
                  >
                    Discuss Your Premises
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 4 — OUR PROCESS
      ===================================== */}

      <section className="bg-[#F8F1E4] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel>03 / Our Approach</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <Reveal>
              <h2 className="text-[clamp(2.7rem,5vw,5.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                A considered
                <br />
                path from
                <span className="font-light italic text-[#B99547]">
                  {" "}concern to clarity.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-md text-base leading-8 text-[#0A2240]/70">
                Effective pest management is about more
                than responding to visible activity.
                It also involves understanding the
                environment and considering what comes next.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[25px] hidden h-px bg-[#B99547]/50 lg:block"
            />

            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="group relative h-full border-t border-[#0A2240]/20 pt-9 lg:border-t-0 lg:pt-0">
                  <div className="relative z-10 mb-12 hidden h-[51px] items-center lg:flex">
                    <span className="flex h-[51px] w-[51px] items-center justify-center rounded-full border-2 border-[#B99547] bg-[#F8F1E4] text-xs font-bold transition-colors duration-300 group-hover:bg-[#B99547]">
                      {step.number}
                    </span>
                  </div>

                  <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#B99547] lg:hidden">
                    Step {step.number}
                  </span>

                  <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    {step.title}
                    <span className="text-[#B99547]">.</span>
                  </h3>

                  <p className="mt-6 max-w-xs text-sm leading-8 text-[#0A2240]/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 flex flex-col gap-7 border-t border-[#0A2240]/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-base leading-8 text-[#0A2240]/75">
                Have a question about pest activity at
                your property? We can help you explore
                suitable next steps.
              </p>

              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em]"
              >
                Start a Conversation
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B99547] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          SECTION 5 — FAQ
      ===================================== */}

      <section className="bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionLabel>
                  04 / Helpful Information
                </SectionLabel>

                <h2 className="mt-9 text-[clamp(2.8rem,4.8vw,5.5rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                  The right
                  <br />
                  questions.
                  <br />
                  <span className="font-light italic text-[#F8F1E4]">
                    Clearer answers.
                  </span>
                </h2>

                <p className="mt-8 max-w-sm text-base leading-8 text-[#0A2240]/80">
                  Understanding your options is an
                  important part of choosing pest
                  control support for your property.
                </p>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#0A2240] pb-2 text-xs font-bold uppercase tracking-[0.13em] transition-colors hover:text-[#F8F1E4]"
                >
                  Explore Pest Control Services
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-[#F8F1E4] p-6 sm:p-10 lg:p-12">
                <div className="mb-8 flex items-center gap-3 border-b border-[#0A2240]/20 pb-7">
                  <ScanSearch size={23} className="text-[#B99547]" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">
                    Frequently Asked Questions
                  </span>
                </div>

                {questions.map((item, index) => (
                  <FAQItem
                    key={item.question}
                    item={item}
                    index={index}
                    active={activeFAQ}
                    setActive={setActiveFAQ}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 6 — BELGRAVIA SERVICE AREA
          NO MAP
      ===================================== */}

      <section className="relative overflow-hidden bg-[#F8F1E4] py-24 sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-20 h-[500px] w-[500px] rounded-full border border-[#B99547]/20"
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <Reveal>
                <SectionLabel>
                  05 / Our Local Presence
                </SectionLabel>
              </Reveal>

              <Reveal delay={70}>
                <h2 className="mt-10 text-[clamp(3rem,5.8vw,6.5rem)] font-semibold leading-[1.06] tracking-[-0.055em]">
                  Belgravia
                  <br />
                  Is Our
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    Home.
                  </span>
                  <br />
                  London Is
                  <br />
                  Our Reach.
                </h2>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-10 max-w-xl text-base leading-8 text-[#0A2240]/75 sm:text-lg">
                  QuickShield Services Belgravia is based
                  in the heart of Belgravia, providing
                  pest control assistance for local
                  residential and commercial properties,
                  nearby neighbourhoods and customers
                  across London.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <Link
                  to="/contact-us"
                  className="group mt-9 inline-flex items-center gap-4 border-b-2 border-[#B99547] pb-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-[#B99547]"
                >
                  Get in Touch With Our Team
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-full w-full border border-[#B99547] sm:-right-5 sm:-top-5"
                />

                <div className="relative overflow-hidden bg-[#0A2240] p-8 text-[#F8F1E4] sm:p-12 lg:p-14">
                  <div className="flex items-start justify-between gap-5 border-b border-[#F8F1E4]/20 pb-10">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                        QuickShield Services
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                        Belgravia
                        <br />
                        London
                      </h3>
                    </div>
                    <Navigation
                      size={32}
                      strokeWidth={1.3}
                      className="shrink-0 text-[#B99547]"
                    />
                  </div>

                  <div className="mt-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                      Our Address
                    </span>
                    <address className="mt-4 text-lg not-italic leading-9 sm:text-xl">
                      35a Eaton Pl
                      <br />
                      London SW1X 8BY
                      <br />
                      United Kingdom
                    </address>
                  </div>

                  <div className="mt-10 border-t border-[#F8F1E4]/20 pt-9">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                      Speak With Our Team
                    </span>

                    <a
                      href={PHONE_LINK}
                      className="group mt-5 flex flex-wrap items-center gap-4 text-xl font-semibold transition-colors hover:text-[#B99547] sm:text-2xl"
                    >
                      <Phone size={22} className="text-[#B99547]" />
                      {PHONE}
                      <ArrowUpRight
                        size={19}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>

                  <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#F8F1E4]/20 pt-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F8F1E4]/65">
                      Belgravia & London
                    </span>
                    <span className="text-3xl font-light text-[#B99547]">
                      SW1X
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-20 grid gap-7 border-t border-[#0A2240]/20 pt-10 sm:grid-cols-3 lg:mt-28">
              {coverage.map((area) => (
                <div
                  key={area.number}
                  className="border-l-2 border-[#B99547] pl-6"
                >
                  <span className="text-xs font-bold text-[#B99547]">
                    {area.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-[#0A2240]/70">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          SECTION 7 — FINAL CTA
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#B99547]/20 sm:h-[700px] sm:w-[700px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-[#B99547]/15 sm:h-[550px] sm:w-[550px]"
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel light>
              Let's Talk About Your Property
            </SectionLabel>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-10 max-w-[1150px] text-[clamp(3.2rem,7vw,8rem)] font-semibold leading-[1.03] tracking-[-0.06em]">
              Your Property.
              <br />
              Your Peace
              <br />
              <span className="font-light italic text-[#B99547]">
                of Mind.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-14 flex flex-col gap-10 border-t border-[#F8F1E4]/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-lg text-base leading-8 text-[#F8F1E4]/70">
                Whether you are concerned about rodents,
                insects or pest activity at your property,
                contact QuickShield Services Belgravia
                to discuss your requirements and suitable
                next steps.
              </p>

              <div className="flex flex-wrap gap-3">
                <ActionLink to="/contact-us">
                  Send an Enquiry
                </ActionLink>

                <a
                  href={PHONE_LINK}
                  className="group inline-flex items-center gap-4 border border-[#B99547]/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
                >
                  <Phone size={18} />
                  Call Us
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[#F8F1E4]/15 pt-7 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#F8F1E4]/45 sm:flex-row">
            <span>{COMPANY}</span>
            <span>{ADDRESS}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

