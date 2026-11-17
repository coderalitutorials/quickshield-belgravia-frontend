// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1200 }) { // Duration thoda optimized kiya
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const hasAnimated = useRef(false);

//   const isFraction = value.includes("/");
//   const numericString = value.replace(/[^0-9]/g, "");
//   const numericValue = parseInt(numericString, 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           let startTime = null;
//           let lastUpdate = 0;

//           const animateCount = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
            
//             // FIX: Throttle state updates to save main-thread frame rates (approx 60fps cap)
//             if (timestamp - lastUpdate > 16 || progress === 1) {
//               const currentValue = Math.round(progress * numericValue);
//               setCount(currentValue);
//               lastUpdate = timestamp;
//             }

//             if (progress < 1) {
//               requestAnimationFrame(animateCount);
//             }
//           };

//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.1 } // Optimized threshold to trigger early and smoothly
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [numericValue, duration]);

//   if (isFraction) {
//     return (
//       <span ref={ref} className="inline-flex items-center transform-gpu">
//         <span>{count}</span>
//         <span className="text-[#0A2240]/30 mx-1">/</span>
//         <span>{value.split("/")[1]}</span>
//       </span>
//     );
//   }

//   return (
//     <span ref={ref} className="inline-flex transform-gpu">
//       <span>{count}</span>
//       {suffix}
//     </span>
//   );
// }

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   const stats = [
//     {
//       number: "15+",
//       label: "Years Premium Depth",
//       desc: "Rapid emergency response across high-end West London sectors.",
//     },
//     {
//       number: "5/5",
//       label: "Client Trust Score",
//       desc: "Top ratings for seamless eradication and zero-trace execution.",
//     },
//     {
//       number: "100%",
//       label: "Eradication Rate",
//       desc: "Comprehensive protection warranties securing luxury estates.",
//     },
//     {
//       number: "3K+",
//       label: "Properties Shielded",
//       desc: "Successful active proofing setups deployed across Mayfair.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Premium Linear Accents */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Monolithic Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#0A2240]/10">
//           <div className="space-y-4 text-left">
//             <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0A2240]/60 block">
//               // Performance Index
//             </span>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//               Mayfair Track Record
//             </h2>
//           </div>
          
//           <div className="text-left md:text-right">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="inline-flex items-center gap-8 bg-[#0A2240] text-white rounded-full pl-6 pr-2 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-[#0A2240]/90 active:scale-[0.98] group/btn shadow-xl shadow-[#0A2240]/10"
//             >
//               <span>Schedule Eradication</span>
//               <div className="w-10 h-10 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
//                 <ArrowRight className="w-4 h-4 text-[#0A2240]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* LINEAR HORIZON TIMELINE STREAM */}
//         <div className="mt-12 divide-y divide-[#0A2240]/10">
//           {stats.map((stat, idx) => (
//             <div 
//               key={idx} 
//               // FIX: Replaced transition-all with specific property transitions to avoid re-paints
//               className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left group transition-colors duration-300 relative transform-gpu will-change-transform"
//             >
//               {/* Invisible background glow */}
//               <div className="absolute inset-y-0 -inset-x-4 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none transform-gpu" />

//               {/* Index Column */}
//               <div className="md:col-span-1 hidden md:block relative z-10">
//                 <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200">
//                   0{idx + 1}
//                 </span>
//               </div>

//               {/* Big Counter Column */}
//               <div className="md:col-span-3 relative z-10">
//                 {/* FIX: Removed text scaling on hover to completely remove text jittering on scroll */}
//                 <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#0A2240] font-sans flex items-center transform-gpu">
//                   <AnimatedCounter value={stat.number} />
//                 </div>
//               </div>

//               {/* Label/Title Column */}
//               <div className="md:col-span-3 relative z-10">
//                 <h4 className="text-sm font-black tracking-wider uppercase text-[#0A2240] group-hover:text-white transition-colors duration-200">
//                   {stat.label}
//                 </h4>
//               </div>

//               {/* Description Context Column */}
//               <div className="md:col-span-5 relative z-10">
//                 <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//                   {stat.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }













// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useSpring, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // Helper component for animating numbers
// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   // Extract numeric part (e.g., "15+" -> 15, "3K+" -> 3000)
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000; // 2 seconds animation
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

// const navigate = useNavigate();

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}{suffix}
//     </span>
//   );
// }

// const stats = [
//   { value: "15+", label: "Years of Elite Service", desc: "Decades of mastery in discreet pest eradication for luxury estates." },
//   { value: "5/5", label: "Trust Rating", desc: "Perfect client satisfaction scores for our precision protocols." },
//   { value: "100%", label: "Eradication Success", desc: "Zero-tolerance policy for pests with lifetime proofing warranties." },
//   { value: "3000+", label: "Estates Secured", desc: "Successfully protected premier properties across Mayfair." },
// ];

// export default function PesSaveStatsSection() {
//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">Operational Excellence</span>
//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />
//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">{stat.label}</h4>
//               <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">Ready to secure your property with the QuickShield standard?</p>
//       <button
//   onClick={() => navigate("/contact-us")}
//   className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
// >
//   Get A Private Consultation
// </button>
//         </div>
//       </div>
//     </section>
//   );
// }









// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   {
//     value: "15+",
//     label: "Years of Elite Service",
//     desc: "Decades of mastery in discreet pest eradication for luxury estates.",
//   },
//   {
//     value: "5/5",
//     label: "Trust Rating",
//     desc: "Perfect client satisfaction scores for our precision protocols.",
//   },
//   {
//     value: "100%",
//     label: "Eradication Success",
//     desc: "Zero-tolerance policy for pests with lifetime proofing warranties.",
//   },
//   {
//     value: "3000+",
//     label: "Estates Secured",
//     desc: "Successfully protected premier properties across Mayfair.",
//   },
// ];

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">
//             Operational Excellence
//           </span>

//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />

//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">
//                 {stat.label}
//               </h4>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {stat.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">
//             Ready to secure your property with the QuickShield standard?
//           </p>

//           <button
//             type="button"
//             onClick={() => navigate("/contact-us")}
//             className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
//           >
//             Get A Private Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


















import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  SearchCheck,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   LUXURY ARCHITECTURAL PROCESS TIMELINE
============================================ */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const STEPS = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand the Concern.",
    description:
      "Every pest control enquiry begins with understanding the signs. Tell us what you have noticed, where activity is occurring and how it is affecting your residential or commercial property.",
    detail: "The starting point",
    icon: SearchCheck,
  },
  {
    number: "02",
    label: "ASSESS",
    title: "Look Beyond the Surface.",
    description:
      "An appropriate property assessment can help identify pest activity, possible entry points, harbourage areas and conditions that may require further attention.",
    detail: "A closer examination",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    label: "RESPOND",
    title: "Consider the Right Response.",
    description:
      "The pest species, property environment and extent of activity help inform which control, treatment or management options may be suitable for the situation.",
    detail: "A considered approach",
    icon: ShieldCheck,
  },
  {
    number: "04",
    label: "PREVENT",
    title: "Think Beyond Treatment.",
    description:
      "Where appropriate, property proofing, hygiene considerations and practical prevention measures can help reduce opportunities for future pest access.",
    detail: "Long-term considerations",
    icon: CheckCircle2,
  },
];

/* ============================================
   MAIN COMPONENT
============================================ */

export default function PesSaveStatsSection() {
  const sectionRef = useRef(null);

  /* ======================================
     SCROLL REVEAL OBSERVER
  ====================================== */

  useEffect(() => {
    const root = sectionRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-belgravia-reveal]"
    );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add(
          "belgravia-process-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "belgravia-process-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="belgravia-process-heading"
      className="relative isolate overflow-hidden bg-[#F8F1E4] text-[#0A2240]"
    >
      {/* ======================================
          ANIMATION STYLES
      ====================================== */}

      <style>{`
        .belgravia-process-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 800ms cubic-bezier(.2,.75,.2,1),
            transform 800ms cubic-bezier(.2,.75,.2,1);
        }

        .belgravia-process-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .belgravia-process-line {
          transition: height 1s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .belgravia-process-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ======================================
          ARCHITECTURAL BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#0A2240 1px,transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="absolute -right-52 -top-52 h-[620px] w-[620px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] bg-[#B99547]/[0.04] blur-[100px]" />
      </div>

      {/* ======================================
          INTRODUCTION
      ====================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 pb-16 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-40">

        <div
          data-belgravia-reveal
          className="belgravia-process-reveal grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20"
        >

          {/* LEFT HEADING */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A2240]/70">
                Our Approach / Belgravia
              </span>
            </div>

            <h2
              id="belgravia-process-heading"
              className="mt-9 text-[clamp(2.9rem,5.3vw,6rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
            >
              A Thoughtful
              <br />

              Approach to
              <br />

              <span className="font-light italic text-[#B99547]">
                Pest Control.
              </span>
            </h2>
          </div>

          {/* RIGHT INTRO */}

          <div className="lg:pb-3">
            <p className="max-w-[500px] border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#0A2240]/70 sm:text-lg">
              Effective pest management begins
              with understanding the concern.
              Our approach to pest control in
              Belgravia focuses on identifying
              activity, considering suitable
              treatment options and exploring
              practical prevention measures.
            </p>

            <div className="mt-9 flex items-center gap-3 pl-6">
              <MapPin
                size={19}
                className="text-[#B99547]"
              />

              <span className="text-sm font-semibold text-[#0A2240]/70">
                Belgravia · London SW1X
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          ARCHITECTURAL TIMELINE
      ====================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">

        {/* Top line */}

        <div className="h-px w-full bg-[#0A2240]/15" />

        {/* Vertical gold timeline */}

        <div
          aria-hidden="true"
          className="absolute bottom-24 left-[39px] top-0 w-px bg-[#B99547]/40 sm:left-[74px] lg:left-1/2 lg:-translate-x-1/2"
        />

        <div className="relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const reverse = index % 2 === 1;

            return (
              <div
                key={step.number}
                data-belgravia-reveal
                className={`belgravia-process-reveal relative grid gap-8 border-b border-[#0A2240]/10 py-14 pl-12 sm:pl-16 lg:grid-cols-2 lg:gap-20 lg:py-20 lg:pl-0`}
                style={{
                  transitionDelay: `${index * 90}ms`,
                }}
              >

                {/* Timeline node */}

                <div
                  aria-hidden="true"
                  className="absolute left-[10px] top-[78px] z-10 flex h-3 w-3 items-center justify-center rounded-full border-[3px] border-[#B99547] bg-[#F8F1E4] sm:left-[11px] lg:left-1/2 lg:top-[104px] lg:-translate-x-1/2"
                />

                {/* ======================================
                    LEFT / RIGHT MAIN CONTENT
                ====================================== */}

                <div
                  className={`relative ${
                    reverse
                      ? "lg:order-2 lg:pl-12"
                      : "lg:order-1 lg:pr-12"
                  }`}
                >
                  {/* Oversized step number */}

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-9 right-0 select-none text-[clamp(7rem,13vw,12rem)] font-semibold leading-none tracking-[-0.1em] text-[#0A2240]/[0.045]"
                  >
                    {step.number}
                  </span>

                  <div className="relative z-10">

                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B99547]">
                        Step {step.number}
                      </span>

                      <span className="h-px w-10 bg-[#B99547]/50" />

                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A2240]/55">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-[540px] text-[clamp(2.2rem,3.6vw,4rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
                      {step.title}
                    </h3>

                    <p className="mt-7 max-w-[500px] text-sm leading-8 text-[#0A2240]/70 sm:text-base">
                      {step.description}
                    </p>

                    <div className="mt-9 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#B99547]" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#0A2240]/55">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ======================================
                    OPPOSITE SIDE VISUAL PANEL
                ====================================== */}

                <div
                  className={`relative flex items-center ${
                    reverse
                      ? "lg:order-1 lg:justify-end lg:pr-12"
                      : "lg:order-2 lg:justify-start lg:pl-12"
                  }`}
                >
                  <div className="group relative flex w-full max-w-[480px] items-center justify-between gap-6 overflow-hidden border border-[#0A2240]/10 bg-[#0A2240] px-7 py-9 text-[#F8F1E4] transition-all duration-500 hover:border-[#B99547] sm:px-10 sm:py-12">

                    {/* Panel background */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#B99547]/20"
                    />

                    <div className="relative z-10">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                        The QuickShield Process
                      </span>

                      <span className="mt-4 block text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                        {step.label}
                      </span>

                      <span className="mt-4 block text-xs text-[#F8F1E4]/60">
                        Belgravia · London
                      </span>
                    </div>

                    <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center border border-[#B99547]/45 text-[#B99547] transition-transform duration-500 group-hover:-translate-y-1 sm:h-24 sm:w-24">
                      <Icon
                        size={38}
                        strokeWidth={1.3}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-16 bg-[#B99547] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================
          FINAL EDITORIAL CTA
      ====================================== */}

      <div className="relative bg-[#0A2240] text-[#F8F1E4]">

        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 lg:px-16 lg:py-28">

          {/* CTA TEXT */}

          <div
            data-belgravia-reveal
            className="belgravia-process-reveal"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#F8F1E4]/65">
                Your Next Step
              </span>
            </div>

            <h3 className="mt-9 text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[1.08] tracking-[-0.05em]">
              Let's Discuss
              <br />

              <span className="font-light italic text-[#B99547]">
                Your Property.
              </span>
            </h3>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#F8F1E4]/65">
              Contact {COMPANY} to discuss
              pest activity at your home
              or commercial premises and
              explore suitable next steps.
            </p>
          </div>

          {/* CTA ACTIONS */}

          <div
            data-belgravia-reveal
            className="belgravia-process-reveal flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
          >
            <Link
              to="/contact-us"
              className="group inline-flex min-h-[62px] w-full items-center justify-between gap-8 bg-[#B99547] px-7 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F8F1E4] sm:w-auto lg:min-w-[300px]"
            >
              Request a Callback

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href={PHONE_LINK}
              className="group inline-flex min-h-[62px] w-full items-center justify-between gap-6 border border-[#F8F1E4]/25 px-7 text-sm font-semibold transition-colors duration-300 hover:border-[#B99547] hover:text-[#B99547] sm:w-auto lg:min-w-[300px]"
            >
              <span className="flex items-center gap-3">
                <Phone size={19} />
                {PHONE}
              </span>

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



















