// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Leaf,
//   Zap,
// } from "lucide-react";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();
//   const [activeFeature, setActiveFeature] = useState(null);

//   const features = [
//     {
//       id: "01",
//       title: "Certified Team",
//       desc: "Client-oriented, fully trained and certified local pest experts operating with strict premium standards.",
//       icon: ShieldCheck,
//     },
//     {
//       id: "02",
//       title: "Eco Formulations",
//       desc: "Premium, target-specific and completely safe treatment compounds safe for families and properties.",
//       icon: Leaf,
//     },
//     {
//       id: "03",
//       title: "Total Safety",
//       desc: "Complete long-term property protection, restriction protocols, and total clinical peace of mind.",
//       icon: Zap,
//     },
//   ];

//   return (
//     <section className="relative py-24 md:py-36 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 group/section isolate backface-hidden">
      
//       {/* Background Image Layer — Hardware accelerated */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         <img
//           src="/images/moth-control.webp"
//           alt="Professional treatment context background"
//           className="w-full h-full object-cover object-center opacity-100 contrast-[1.05] brightness-[0.85]"
//           loading="lazy"
//         />
//         {/* Precise fading gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#C5A86B] via-[#C5A86B]/60 to-transparent w-full lg:w-[60%]" />
//       </div>

//       {/* Luxury Minimalist Pattern Overlay */}
//       <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#0A2240_1px,transparent_1px),linear-gradient(to_bottom,#0A2240_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* LEFT SIDE: Luxury Copywriting Block */}
//           {/* FIX: Removed complex nested classes from sticky wrapper to ensure low paint complexity */}
//           <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-12 transform-gpu">
//             <div className="inline-flex items-center gap-2.5 bg-[#0A2240] border border-white/10 px-4 py-1.5 rounded-md shadow-md">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//               <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//                 Operational Quality
//               </span>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2240] uppercase leading-none drop-shadow-sm">
//                 Complete <br /> Eradication <br />
//                 <span className="text-white bg-[#0A2240] px-4 py-1.5 rounded-xl inline-block mt-2">
//                   Guaranteed
//                 </span>
//               </h2>

//               <p className="text-[#0A2240] text-sm md:text-base leading-relaxed font-bold max-w-md drop-shadow-sm">
//                 Our specialized London technicians deploy targeted eco-certified 
//                 systems to neutralize pests permanently. We focus on long-term preventive 
//                 restriction protocols so your property remains immaculate.
//               </p>
//             </div>

//             {/* CTA Button Link */}
//             <div className="pt-4">
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center gap-5 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/20"
//               >
//                 <span>Secure Protection Hub</span>
//                 <div className="w-5 h-5 rounded-md bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                   <ArrowRight className="w-3 h-3 text-[#0A2240]" strokeWidth={3} />
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Premium Deep Navy Asymmetric Feature Stack */}
//           <div className="lg:col-span-7 space-y-4 w-full transform-gpu">
//             {features.map((feat, idx) => {
//               const FeatIcon = feat.icon;
//               const isSelected = activeFeature === idx;

//               return (
//                 <div
//                   key={feat.id}
//                   onMouseEnter={() => setActiveFeature(idx)}
//                   onMouseLeave={() => setActiveFeature(null)}
//                   // FIX: Replaced transition-all with explicit transform/colors. Replaced backdrop-blur with full opaque solid to protect framerate.
//                   className={`group/item relative p-8 rounded-[24px] border transition-[transform,background-color,border-color,shadow] duration-300 cursor-default flex flex-col sm:flex-row sm:items-center justify-between gap-6 transform-gpu will-change-transform ${
//                     isSelected 
//                       ? "bg-[#0A2240] border-[#C5A86B] shadow-2xl shadow-black/40 translate-x-1.5" 
//                       : "bg-[#0A2240]/98 border-transparent shadow-xl"
//                   }`}
//                 >
//                   <div className="flex items-start gap-6 relative z-10 max-w-xl">
//                     {/* Icon Dynamic Frame */}
//                     <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-300 shrink-0 ${
//                       isSelected 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent scale-105" 
//                         : "bg-white/5 text-[#C5A86B] border-white/10"
//                     }`}>
//                       <FeatIcon className="w-6 h-6" strokeWidth={1.8} />
//                     </div>

//                     {/* Typography Content */}
//                     <div className="space-y-1.5">
//                       <h3 className="text-lg font-black text-white uppercase tracking-wide">
//                         {feat.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors duration-200">
//                         {feat.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Index Number Asset */}
//                   <div className="relative z-10 flex items-center justify-end shrink-0 self-end sm:self-center">
//                     <span className={`font-mono text-xs font-black tracking-widest transition-[transform,color] duration-300 ${
//                       isSelected ? "text-[#C5A86B] scale-105" : "text-white/40"
//                     }`}>
//                       [{feat.id}]
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-32 px-6 lg:px-20 relative overflow-hidden">
//       {/* Background Graphic Element */}
//       <div className="absolute top-0 right-0 w-[800px] h-full bg-[#0A2240] -skew-x-12 translate-x-1/2 opacity-10" />

//       <div className="max-w-[1600px] mx-auto relative z-10">
        
//         {/* Top Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
//           <div className="max-w-2xl">
//             <h4 className="text-[#0A2240] font-black uppercase tracking-[0.3em] text-sm mb-6 underline underline-offset-8">The QuickShield Doctrine</h4>
//             <h2 className="text-[5rem] lg:text-[8rem] font-black text-white uppercase leading-[0.8] tracking-tighter">
//               Elite <span className="text-[#0A2240]">Tactical</span> <br/> Defense
//             </h2>
//           </div>
//           <div className="md:w-1/3">
//             <p className="text-[#0A2240] font-bold text-lg leading-relaxed border-l-2 border-[#0A2240] pl-8">
//               We do not just eliminate threats; we architect environments that are inherently impenetrable. Clinical, calculated, and absolute.
//             </p>
//           </div>
//         </div>

//         {/* The Unique "Sectional Strip" Layout */}
//         <div className="flex flex-col lg:flex-row gap-0 border-t border-[#0A2240]">
          
//           {/* Item 01 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">01</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Bio-Secure Barrier</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">High-density sealing protocols that harden your infrastructure against all biological incursions.</p>
//           </div>

//           {/* Item 02 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">02</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Surgical Neutralization</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Direct-action measures that isolate and eradicate colonies at the microscopic source level.</p>
//           </div>

//           {/* Item 03 */}
//           <div className="flex-1 p-12 group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">03</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Dynamic Vigilance</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Constant, automated oversight systems ensuring zero-gap protection for your high-value assets.</p>
//           </div>

//         </div>

//         {/* Bottom CTA Action */}
//         <div className="mt-20">
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="px-12 py-6 bg-[#0A2240] text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all duration-500"
//           >
//             Initiate Security Consultation
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
  ShieldCheck,
  House,
  PhoneCall,
  MapPin,
  Check,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   LUXURY EDITORIAL — WHY CHOOSE QUICKSHIELD
============================================ */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_TEL = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const FEATURES = [
  {
    number: "01",
    icon: SearchCheck,
    category: "PROPERTY ASSESSMENT",
    title: "Understanding the Problem.",
    description:
      "Every property is different. Understanding the signs of pest activity, possible access points and affected areas helps inform an appropriate response for residential and commercial premises.",
    points: [
      "Signs of pest activity",
      "Potential entry points",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    category: "PEST MANAGEMENT",
    title: "Practical Control Solutions.",
    description:
      "From rodents to insects, suitable pest control measures depend on the species involved, the extent of activity and the conditions of the property. We focus on considering the options appropriate to each concern.",
    points: [
      "Targeted control options",
      "Property-specific considerations",
    ],
  },
  {
    number: "03",
    icon: House,
    category: "LONG-TERM PREVENTION",
    title: "Protecting Your Property.",
    description:
      "Pest management also involves considering future risks. Practical advice on proofing, hygiene and property maintenance may help reduce opportunities for repeat pest access.",
    points: [
      "Property proofing advice",
      "Preventative recommendations",
    ],
  },
];

/* ============================================
   FEATURE ROW
============================================ */

function FeatureRow({ feature, index }) {
  const Icon = feature.icon;

  return (
    <div
      data-belgravia-feature-reveal
      className="belgravia-feature-reveal group relative border-b border-[#F8F1E4]/15 py-12 sm:py-14 lg:py-16"
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Hover background */}

      <div className="pointer-events-none absolute -inset-x-4 inset-y-0 bg-[#F8F1E4]/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-inset-x-8" />

      <div className="relative grid gap-8 lg:grid-cols-[100px_minmax(0,1fr)_minmax(260px,0.75fr)] lg:items-start lg:gap-12">

        {/* ======================================
            NUMBER + ICON
        ====================================== */}

        <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-7">

          <span className="text-[clamp(3rem,4vw,4.5rem)] font-light leading-none tracking-[-0.07em] text-[#B99547]">
            {feature.number}
          </span>

          <div className="flex h-14 w-14 items-center justify-center border border-[#B99547]/40 text-[#B99547] transition-all duration-500 group-hover:border-[#B99547] group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
            <Icon
              size={26}
              strokeWidth={1.4}
            />
          </div>
        </div>

        {/* ======================================
            MAIN FEATURE CONTENT
        ====================================== */}

        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#B99547]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              {feature.category}
            </span>
          </div>

          <h3 className="mt-7 max-w-[650px] text-[clamp(2rem,3.2vw,3.7rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#F8F1E4] transition-colors duration-300 group-hover:text-[#B99547]">
            {feature.title}
          </h3>

          <p className="mt-6 max-w-[610px] text-sm leading-8 text-[#F8F1E4]/65 sm:text-base">
            {feature.description}
          </p>
        </div>

        {/* ======================================
            FEATURE BENEFITS
        ====================================== */}

        <div className="lg:pt-10">
          <div className="border-l border-[#B99547]/50 pl-6">

            <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#F8F1E4]/45">
              Key Considerations
            </span>

            <div className="mt-6 space-y-5">
              {feature.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[#B99547]"
                  />

                  <span className="text-sm font-medium leading-6 text-[#F8F1E4]/80">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center gap-3 pl-6">
            <span className="h-px w-8 bg-[#B99547]/50" />

            <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#B99547]/80">
              QuickShield Belgravia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   MAIN COMPONENT
============================================ */

export default function PesSaveFeatureSection() {
  const sectionRef = useRef(null);

  /* ======================================
     SCROLL REVEAL ANIMATIONS
  ====================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-belgravia-feature-reveal]"
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
          "belgravia-feature-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "belgravia-feature-visible"
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
      aria-labelledby="belgravia-features-heading"
      className="relative isolate overflow-hidden bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40"
    >
      {/* ======================================
          ARCHITECTURAL BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#B99547 1px,transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] bg-[#B99547]/[0.035] blur-[100px]" />
      </div>

      {/* ======================================
          ANIMATION STYLES
      ====================================== */}

      <style>{`
        .belgravia-feature-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 800ms cubic-bezier(.2,.75,.2,1),
            transform 800ms cubic-bezier(.2,.75,.2,1);
        }

        .belgravia-feature-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .belgravia-feature-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================
            SECTION HEADER
        ====================================== */}

        <div
          data-belgravia-feature-reveal
          className="belgravia-feature-reveal grid gap-12 border-b border-[#F8F1E4]/15 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-20"
        >

          {/* LEFT HEADING */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F8F1E4]/65">
                Why Choose QuickShield
              </span>
            </div>

            <h2
              id="belgravia-features-heading"
              className="mt-9 text-[clamp(2.9rem,5.2vw,5.8rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
            >
              More Than
              <br />

              Pest Control.
              <br />

              <span className="font-light italic text-[#B99547]">
                Considered Care.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div className="lg:pb-3">
            <p className="max-w-[510px] border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#F8F1E4]/70 sm:text-lg">
              At {COMPANY}, we focus on
              understanding pest concerns,
              considering suitable solutions
              and supporting property
              protection for residential
              and commercial premises
              in Belgravia, London.
            </p>

            <div className="mt-8 flex items-start gap-3 pl-6">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#B99547]"
              />

              <span className="text-sm leading-7 text-[#F8F1E4]/60">
                {ADDRESS}
              </span>
            </div>
          </div>
        </div>

        {/* ======================================
            THREE EDITORIAL FEATURE ROWS
        ====================================== */}

        <div>
          {FEATURES.map((feature, index) => (
            <FeatureRow
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* ======================================
            BOTTOM CONTACT STRIP
        ====================================== */}

        <div
          data-belgravia-feature-reveal
          className="belgravia-feature-reveal mt-16 flex flex-col gap-10 border-t border-[#F8F1E4]/15 pt-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Speak With QuickShield Services Belgravia
            </p>

            <a
              href={PHONE_TEL}
              className="group mt-4 inline-flex items-center gap-4 text-[clamp(1.5rem,2.8vw,2.6rem)] font-semibold tracking-[-0.04em] transition-colors duration-300 hover:text-[#B99547]"
            >
              <PhoneCall
                size={23}
                className="shrink-0 text-[#B99547]"
              />

              {PHONE}

              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <Link
            to="/contact-us"
            className="group inline-flex min-h-[62px] w-fit items-center justify-center gap-6 bg-[#B99547] px-8 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F8F1E4]"
          >
            Request a Callback

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
