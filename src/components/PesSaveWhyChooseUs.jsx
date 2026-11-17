// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PhoneCall, Calendar, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       step: "01",
//       title: "Assessment",
//       icon: Calendar,
//       bullets: [
//         "Instant Online Slot Booking",
//         "Thermal Inspection & Detection",
//         "Risk Mapping Report Ready"
//       ]
//     },
//     {
//       step: "02",
//       title: "Targeted Eradication",
//       icon: ClipboardCheck,
//       bullets: [
//         "Eco-Certified Actives Deployment",
//         "Precision Heat Treatments",
//         "100% Non-Disruptive Clean Injection"
//       ]
//     },
//     {
//       step: "03",
//       title: "Long-term Protection",
//       icon: PhoneCall,
//       bullets: [
//         "Structural Entry Point Sealing",
//         "Premium Hygiene Baseline Clear",
//         "Post-Treatment Monitoring Plan"
//       ]
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-b border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Structural Minimal Tech Grid Lines */}
//       <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0A2240_2px,transparent_2px),linear-gradient(to_bottom,#0A2240_2px,transparent_2px)] bg-[size:5rem_5rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modern Left-Aligned Header Block */}
//         <div className="max-w-3xl mb-24 space-y-6">
//           <div className="inline-flex items-center gap-2.5 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-lg transform-gpu">
//             <span className="w-2 h-2 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//             <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//               Deployment Flow
//             </span>
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-[#0A2240]">
//             3-Stage Property <br />
//             <span className="text-white bg-[#0A2240] px-4 py-1 rounded-xl inline-block mt-2 shadow-xl">
//               Sanctuary Protocol
//             </span>
//           </h2>
//         </div>

//         {/* HIGH-END INTERACTIVE TIMELINE ELEMENT */}
//         <div className="relative transform-gpu">
          
//           {/* Background Connecting Vector Line (Desktop Only) */}
//           <div className="absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#0A2240]/10 hidden md:block z-0" />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
//             {steps.map((item, idx) => {
//               const Icon = item.icon;
//               const isActive = activeStep === idx;

//               return (
//                 <div 
//                   key={item.step}
//                   onMouseEnter={() => setActiveStep(idx)}
//                   className="group/step relative space-y-8 cursor-pointer transform-gpu"
//                 >
//                   {/* Timeline Header Badge & Progress Hub */}
//                   <div className="flex items-center md:flex-col md:items-start gap-6 relative">
                    
//                     {/* Glowing Sequential Indicator */}
//                     {/* FIX: Handled scale and layout translation safely using explicit transform rules */}
//                     <div className={`w-20 h-20 rounded-[24px] border-2 flex items-center justify-center transition-[transform,background-color,border-color] duration-300 shadow-2xl relative transform-gpu ${
//                       isActive 
//                         ? "bg-[#0A2240] border-[#0A2240] text-[#C5A86B] scale-105 -translate-y-0.5" 
//                         : "bg-[#C5A86B] border-[#0A2240]/20 text-[#0A2240]"
//                     }`}>
//                       <Icon className="w-8 h-8" strokeWidth={1.5} />
                      
//                       {/* Absolute Mini Index Badge */}
//                       <span className="absolute -bottom-2.5 right-2 font-mono text-xs font-black bg-[#0A2240] text-white px-1.5 py-0.5 rounded-md shadow-sm">
//                         {item.step}
//                       </span>
//                     </div>

//                     {/* Stage Header Block */}
//                     {/* FIX: Smoothed typography background injection changes to stop rendering hops */}
//                     <div className="md:pt-4 transition-all duration-300">
//                       <h3 className={`text-xl lg:text-2xl font-black uppercase tracking-tight transition-[colors,background-color] duration-300 px-2.5 py-0.5 rounded-md ${
//                         isActive ? "text-white bg-[#0A2240]" : "text-[#0A2240] bg-transparent"
//                       }`}>
//                         {item.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Bullet Content Chassis */}
//                   {/* FIX: Swapped out performance killing backdrop-blur with hardware-accelerated translucent background solid */}
//                   <div className={`p-6 rounded-[24px] transition-[transform,background-color,shadow] duration-300 border transform-gpu will-change-transform ${
//                     isActive 
//                       ? "bg-[#0A2240] border-[#0A2240] shadow-2xl shadow-black/30 -translate-y-1" 
//                       : "bg-[#0A2240]/5 border-transparent"
//                   }`}>
//                     <ul className="space-y-3.5">
//                       {item.bullets.map((bullet, bIdx) => (
//                         <li key={bIdx} className="flex items-start gap-3">
//                           <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
//                             isActive ? "text-[#C5A86B]" : "text-[#0A2240]"
//                           }`} strokeWidth={2.5} />
//                           <span className={`text-xs font-bold leading-tight transition-colors duration-300 ${
//                             isActive ? "text-slate-200" : "text-[#0A2240]/80"
//                           }`}>
//                             {bullet}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CRISP ULTRA-PREMIUM EMERGENCY PANEL */}
//         <div className="mt-20 bg-[#0A2240] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-2xl group/panel transform-gpu">
          
//           {/* FIX: Reduced blur complexity to ensure high-speed paint cycle on layout changes */}
//           <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-[#C5A86B]/5 rounded-full blur-[60px] pointer-events-none" />
          
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
//             <div className="space-y-4 max-w-2xl">
//               <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-md transform-gpu">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//                 </span>
//                 <span className="text-[9px] font-mono tracking-[0.2em] text-red-400 uppercase font-bold">
//                   Critical Response Grid
//                 </span>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
//                 Dealing with an active emergency pest outbreak?
//               </h3>
//               <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
//                 Our elite rapid London field squads remain on standby 24/7. Immediate dispatch guarantees arrival and deployment initiation within an absolute 2-hour window.
//               </p>
//             </div>

//             <button 
//               onClick={() => navigate("/contact-us")}
//               className="w-full lg:w-auto inline-flex items-center justify-center gap-5 bg-[#C5A86B] hover:bg-[#b39559] text-[#0A2240] font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shrink-0 shadow-lg shadow-[#C5A86B]/10"
//             >
//               <span>Request Urgent Call</span>
//               <div className="w-5 h-5 rounded-md bg-[#0A2240] flex items-center justify-center group-hover/panel:translate-x-1 transition-transform duration-300">
//                 <ArrowRight className="w-3 h-3 text-[#C5A86B]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();

//   const stages = [
//     { num: "01", title: "Site Assessment", text: "Expert inspection to identify hotspots and entry points." },
//     { num: "02", title: "Targeted Treatment", text: "Eco-friendly, precise solutions for fast, effective results." },
//     { num: "03", title: "Prevention Plan", text: "Structural sealing and monitoring to ensure no returns." }
//   ];

//   return (
//     <section className="bg-[#b99547] py-20 text-[#0A2240]">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* Header - Fixed responsive scaling */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
//             Our <br/><span className="text-white">Professional</span> <br/>Process
//           </h2>
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="flex items-center justify-center gap-2 border-2 border-[#0A2240] px-6 py-4 font-black uppercase tracking-[0.1em] hover:bg-[#0A2240] hover:text-white transition-all duration-300 shrink-0 text-sm"
//           >
//             Book Inspection <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Process Pillars - Responsive Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stages.map((stage, idx) => (
//             <div key={idx} className="relative flex flex-col p-8 border border-[#0A2240]/20 hover:bg-[#0A2240] group transition-colors duration-500">
//               <span className="text-6xl font-black text-[#0A2240]/20 group-hover:text-[#b99547]/30 transition-colors mb-8 block">
//                 {stage.num}
//               </span>
//               <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">
//                 {stage.title}
//               </h3>
//               <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed text-sm">
//                 {stage.text}
//               </p>
//               <div className="mt-8 w-full h-[2px] bg-[#0A2240]/20 group-hover:bg-[#b99547] transition-colors" />
//             </div>
//           ))}
//         </div>

//         {/* Emergency Footnote */}
//         <div className="mt-16 p-8 lg:p-12 bg-[#0A2240] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
//           <div className="max-w-xl">
//             <h4 className="text-xl font-black uppercase tracking-tight mb-2">Need Immediate Help?</h4>
//             <p className="text-white/60 text-sm">Our rapid response units are on standby 24/7 for high-priority containment.</p>
            
//             <button 
//                 onClick={() => navigate("/contact-us")}
//                 className="mt-4 flex items-center gap-2 text-[#b99547] font-bold uppercase tracking-widest hover:text-white transition-all text-xs"
//             >
//                 Book Inspection Now <ArrowUpRight className="w-3 h-3" />
//             </button>
//           </div>
          
//           <div className="flex items-center gap-4 border-l border-white/20 pl-8">
//              <div className="text-4xl font-black tracking-tighter">2h</div>
//              <div className="text-sm font-bold text-white/50 uppercase">Response <br/>Time</div>
//           </div>
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
  ClipboardList,
  ScanSearch,
  ShieldCheck,
  Phone,
  Check,
  MapPin,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   THE QUICKSHIELD EXPERIENCE
   LUXURY SPLIT-SCREEN PROCESS SECTION
============================================ */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const STAGES = [
  {
    number: "01",
    label: "INITIAL ENQUIRY",
    title: "Tell Us About Your Pest Concern.",
    description:
      "Noticed scratching sounds, droppings, insect activity or other signs of pests? Contact our Belgravia pest control team and explain what is happening at your property.",
    icon: ClipboardList,
    details: [
      "Describe the signs of pest activity",
      "Provide your property location",
    ],
  },
  {
    number: "02",
    label: "PROPERTY ASSESSMENT",
    title: "Understand the Situation.",
    description:
      "An appropriate assessment can help identify the pest involved, affected areas and possible entry points. These findings help inform suitable pest management options.",
    icon: ScanSearch,
    details: [
      "Identify potential problem areas",
      "Discuss appropriate treatment options",
    ],
  },
  {
    number: "03",
    label: "TREATMENT & PREVENTION",
    title: "Plan the Next Steps.",
    description:
      "Based on the pest concern and property conditions, we can discuss suitable control measures alongside practical prevention and property proofing advice.",
    icon: ShieldCheck,
    details: [
      "Consider targeted pest control",
      "Review practical prevention measures",
    ],
  },
];

/* ============================================
   PROCESS STAGE
============================================ */

function ProcessStage({ stage, index }) {
  const Icon = stage.icon;

  return (
    <article
      data-belgravia-process-reveal
      className="belgravia-process-reveal group relative border-b border-[#0A2240]/15 py-10 first:pt-0 last:border-b-0 last:pb-0 sm:py-12"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="grid gap-6 sm:grid-cols-[85px_1fr] sm:gap-7">

        {/* ======================================
            STEP NUMBER
        ====================================== */}

        <div className="flex items-center justify-between sm:block">
          <span className="block text-[clamp(3.7rem,5vw,5.5rem)] font-light leading-none tracking-[-0.09em] text-[#B99547]">
            {stage.number}
          </span>

          <span className="flex h-12 w-12 items-center justify-center border border-[#B99547]/50 text-[#B99547] sm:mt-8 sm:h-14 sm:w-14">
            <Icon
              size={25}
              strokeWidth={1.5}
            />
          </span>
        </div>

        {/* ======================================
            STAGE CONTENT
        ====================================== */}

        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#B99547]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#947331]">
              {stage.label}
            </span>
          </div>

          <h3 className="mt-5 max-w-[540px] text-[clamp(1.8rem,2.8vw,3rem)] font-semibold leading-[1.14] tracking-[-0.045em] text-[#0A2240] transition-colors duration-300 group-hover:text-[#947331]">
            {stage.title}
          </h3>

          <p className="mt-5 max-w-[580px] text-sm leading-8 text-[#0A2240]/65 sm:text-base">
            {stage.description}
          </p>

          {/* DETAILS */}

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#0A2240]/10 pt-6">
            {stage.details.map((detail) => (
              <div
                key={detail}
                className="flex items-start gap-2.5"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#B99547]"
                />

                <span className="text-xs font-semibold leading-6 text-[#0A2240]/75 sm:text-sm">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================
   MAIN COMPONENT
============================================ */

export default function PesSaveProcessSection() {
  const sectionRef = useRef(null);

  /* ======================================
     SCROLL REVEAL
  ====================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-belgravia-process-reveal]"
    );

    const reducedMotion = window.matchMedia(
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
      id="our-process"
      aria-labelledby="belgravia-process-heading"
      className="relative isolate overflow-hidden bg-[#F8F1E4] py-24 text-[#0A2240] sm:py-32 lg:py-40"
    >
      {/* ======================================
          ANIMATION STYLES
      ====================================== */}

      <style>{`
        .belgravia-process-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 800ms cubic-bezier(.2,.75,.2,1),
            transform 800ms cubic-bezier(.2,.75,.2,1);
        }

        .belgravia-process-visible {
          opacity: 1;
          transform: translateY(0);
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

        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -bottom-44 -left-40 h-[500px] w-[500px] bg-[#B99547]/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================
            SECTION INTRO
        ====================================== */}

        <div
          data-belgravia-process-reveal
          className="belgravia-process-reveal mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20"
        >

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A2240]/65">
                How Our Process Works
              </span>
            </div>

            <h2
              id="belgravia-process-heading"
              className="mt-9 text-[clamp(2.9rem,5.3vw,5.9rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
            >
              A Clear Path
              <br />

              From Concern
              <br />

              <span className="font-light italic text-[#B99547]">
                to Action.
              </span>
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[520px] border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#0A2240]/70 sm:text-lg">
              Our approach to pest control
              in Belgravia focuses on
              understanding your concern,
              assessing the situation and
              discussing suitable next steps
              for your property.
            </p>

            <div className="mt-8 flex items-center gap-3 pl-6">
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

        {/* ======================================
            MAIN SPLIT SCREEN
        ====================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">

          {/* ======================================
              LEFT ARCHITECTURAL IMAGE PANEL
          ====================================== */}

          <div
            data-belgravia-process-reveal
            className="belgravia-process-reveal relative lg:sticky lg:top-28"
          >

            {/* Gold offset frame */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 bottom-6 left-4 border border-[#B99547]/55"
            />

            {/* Main photograph */}

            <div className="group relative overflow-hidden bg-[#0A2240]">
              <img
                src="/images/image2.webp"
                alt="London residential property representing professional pest control services in Belgravia"
                loading="lazy"
                className="block aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045] motion-reduce:transform-none"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/90 via-[#0A2240]/20 to-transparent" />

              {/* Photo overlay */}

              <div className="absolute bottom-9 left-8 right-8 sm:bottom-12 sm:left-11">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                  The QuickShield Experience
                </span>

                <h3 className="mt-5 text-[clamp(2.2rem,3.2vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#F8F1E4]">
                  Your Property.
                  <br />

                  <span className="font-light italic text-[#B99547]">
                    Our Focus.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#F8F1E4]/75">
                  A considered approach to
                  pest concerns in homes
                  and commercial properties.
                </p>

                <Link
                  to="/contact-us"
                  className="group/link mt-8 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#F8F1E4] transition-colors hover:text-[#B99547]"
                >
                  Discuss Your Concern

                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            {/* Location plaque */}

            <div className="relative z-10 -mt-1 flex items-start gap-4 bg-[#0A2240] px-7 py-6 text-[#F8F1E4] sm:px-9">

              <MapPin
                size={21}
                className="mt-0.5 shrink-0 text-[#B99547]"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#B99547]">
                  QuickShield Services Belgravia
                </p>

                <p className="mt-2 text-sm leading-7 text-[#F8F1E4]/70">
                  {ADDRESS}
                </p>
              </div>
            </div>
          </div>

          {/* ======================================
              RIGHT THREE PROCESS STAGES
          ====================================== */}

          <div className="border-t border-[#0A2240]/15">
            {STAGES.map((stage, index) => (
              <ProcessStage
                key={stage.number}
                stage={stage}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ======================================
            BOTTOM CONTACT STRIP
        ====================================== */}

        <div
          data-belgravia-process-reveal
          className="belgravia-process-reveal mt-20 flex flex-col gap-9 border-t border-[#0A2240]/15 pt-10 sm:mt-24 lg:flex-row lg:items-center lg:justify-between"
        >

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Ready to Take the Next Step?
            </span>

            <h3 className="mt-4 text-[clamp(1.7rem,2.7vw,2.8rem)] font-semibold tracking-[-0.04em]">
              Contact our Belgravia pest control team.
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_LINK}
              className="inline-flex min-h-[60px] items-center justify-center gap-3 border border-[#0A2240]/25 px-7 text-sm font-semibold transition-colors duration-300 hover:border-[#B99547] hover:text-[#947331]"
            >
              <Phone size={19} />

              {PHONE}
            </a>

            <Link
              to="/contact-us"
              className="group inline-flex min-h-[60px] items-center justify-center gap-5 bg-[#0A2240] px-8 text-xs font-bold uppercase tracking-[0.13em] text-[#F8F1E4] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              Get in Touch

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
