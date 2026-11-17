



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   Initiate <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE - Increased opacity to 0.4 for better visibility */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   // Ref map for scrolling
//   const serviceRefs = useRef({});

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   // Scroll to service effect
//   useEffect(() => {
//     if (location.state?.scrollToService) {
//       setSelectedCategory("All");
//       setTimeout(() => {
//         const target = serviceRefs.current[location.state.scrollToService];
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id}
//               ref={(el) => (serviceRefs.current[s.title] = el)}
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }



























// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ArrowUpRight, ArrowDown, ArrowRight, Phone, MapPin, Check, Sparkles } from "lucide-react";

// const NAVY = "#0A2240";
// const GOLD = "#B99547";
// const PHONE = "+44 7417 502611";
// const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

// const servicesData = [
//   { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", kicker: "Small pests. Serious attention.", details: "Targeted ant control for London homes and workplaces, with attention to trails, potential nesting areas and appropriate treatment options." },
//   { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", kicker: "Take back your comfort.", details: "Bed bug inspections and treatment options for affected bedrooms, furniture and surrounding areas." },
//   { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", kicker: "Care for the details.", details: "Carpet moth assessment and treatment considerations for vulnerable carpets, rugs and textiles." },
//   { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", kicker: "Protect your interiors.", details: "Carpet beetle identification and control for affected fabrics, storage areas and interior spaces." },
//   { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", kicker: "A cleaner way forward.", details: "Cockroach management for kitchens and other affected spaces, informed by activity and property conditions." },
//   { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", kicker: "Find the source.", details: "Rodent control with attention to activity, entry points and practical property proofing measures." },
//   { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", kicker: "Restore peace of mind.", details: "Flea control options for affected indoor areas, including advice on preparation and follow-up precautions." },
//   { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", kicker: "Address the nest.", details: "Wasp nest assessment and suitable control options for homes, gardens and business premises." },
//   { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", kicker: "A considered response.", details: "Assessment of bee activity and guidance on appropriate specialist assistance or relocation where suitable." },
//   { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", kicker: "Look beyond the loft.", details: "Squirrel activity assessment and property proofing considerations for roof spaces and possible access points." },
//   { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", kicker: "Prevention matters.", details: "Pest-related hygiene and prevention support, considering affected areas and potential contamination concerns." },
//   { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", kicker: "Respect the architecture.", details: "Bird deterrent and proofing options, including netting for appropriate building features and affected areas." },
// ];

// const aliases = {
//   "Bed Bugs Heat Treatment": "Bed Bugs", "Bed Bug Treatment": "Bed Bugs",
//   "Rat & Mice Control": "Rats & Mice", "Rats and Mice": "Rats & Mice", "Rodent Control": "Rats & Mice",
//   "Wasp Control": "Wasp Removal", "Wasp Nest Removal": "Wasp Removal",
//   "Carpet Moth Treatment": "Moth Treatment", "Carpet Moth Control": "Moth Treatment",
//   "Cockroach Control": "Cockroach", "Flea Treatment": "Flea Eradication",
//   "Bird Proofing": "Bird Netting", "Bee Control": "Bee Relocation", "Squirrel Control": "Squirrels",
//   "Ants": "Ant Control", "Ants Control": "Ant Control", "Carpet Beetle": "Beetle Removal",
// };

// function Eyebrow({ children, light = false }) {
//   return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-[#E8D5AE]" : "text-[#8B6C36]"}`}><span className={`h-px w-9 ${light ? "bg-[#E8D5AE]" : "bg-[#B99547]"}`} />{children}</div>;
// }

// function ServiceFeature({ service, index, onEnquire, setRef }) {
//   const reverse = index % 2 === 1;
//   return (
//     <article ref={setRef} className="group scroll-mt-32 border-t border-[#0A2240]/15 py-9 sm:py-12 lg:py-16">
//       <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${reverse ? "" : ""}`}>
//         <div className={`relative min-w-0 overflow-hidden bg-[#D9D4C9] lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
//           <div className="relative h-[350px] overflow-hidden sm:h-[480px] lg:h-[570px]">
//             <img src={service.img} alt={`${service.title} pest control`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.055]" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/55 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">QuickShield / Notting Hill</span>
//               <span className="font-serif text-4xl italic text-[#E8D5AE]">{String(service.id).padStart(2, "0")}</span>
//             </div>
//           </div>
//         </div>
//         <div className={`flex min-w-0 flex-col justify-center py-3 lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
//           <Eyebrow>{service.cat}</Eyebrow>
//           <p className="mt-9 font-serif text-xl italic text-[#9D7C42] sm:text-2xl">{service.kicker}</p>
//           <h3 className="mt-3 text-[clamp(3rem,5.4vw,6.6rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">{service.title}</h3>
//           <p className="mt-7 max-w-md text-[15px] leading-8 text-[#5E6975]">{service.details}</p>
//           <div className="mt-10 border-t border-[#0A2240]/20 pt-7">
//             <button type="button" onClick={() => onEnquire(service.title)} className="group/btn inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240]">
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2240] text-white transition-all duration-300 group-hover/btn:bg-[#B99547] group-hover/btn:text-[#0A2240]"><ArrowUpRight size={19} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /></span>
//               Enquire about this service
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const refs = useRef({});
//   const scrollRequest = useRef(null);
//   const collectionRef = useRef(null);

//   const filtered = useMemo(() => selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory), [selectedCategory]);

//   useEffect(() => {
//     const requested = location.state?.scrollToService;
//     if (!requested) return;
//     scrollRequest.current = aliases[requested] || requested;
//     setSelectedCategory("All");
//     const timer = window.setTimeout(() => {
//       const element = refs.current[scrollRequest.current];
//       if (element) { element.scrollIntoView({ behavior: "smooth", block: "start" }); scrollRequest.current = null; }
//     }, 350);
//     return () => window.clearTimeout(timer);
//   }, [location.key, location.state?.scrollToService]);

//   const changeCategory = (category) => {
//     setSelectedCategory(category);
//     window.requestAnimationFrame(() => collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
//   };

//   const onEnquire = (service) => navigate("/contact-us", { state: { selectedService: service } });

//   return (
//     <main className="overflow-x-hidden bg-[#F7F5EF] text-[#0A2240]">
//       {/* CINEMATIC COVER */}
//       <section className="relative isolate min-h-[760px] overflow-hidden bg-[#0A2240] text-white sm:min-h-[850px] lg:min-h-[900px]">
//         <div className="absolute inset-0 -z-20"><img src="/images/shieldteam.webp" alt="" aria-hidden="true" fetchPriority="high" className="h-full w-full object-cover object-center" /></div>
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,39,0.97)_0%,rgba(5,20,39,0.87)_43%,rgba(5,20,39,0.34)_100%)]" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182D]/80 via-transparent to-[#06182D]/20" />
//         <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-36 sm:min-h-[850px] sm:px-10 sm:pt-44 lg:min-h-[900px] lg:px-16 lg:pt-48">
//           <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"><Link to="/" className="transition-colors hover:text-white">Home</Link><span className="h-px w-7 bg-[#B99547]" /><span className="text-[#E8D5AE]">Services</span></div>
//           <div className="max-w-[1100px] pb-10 lg:pb-16">
//             <Eyebrow light>Property care, thoughtfully delivered</Eyebrow>
//             <h1 className="mt-8 text-[clamp(4.3rem,10vw,11rem)] font-medium leading-[0.84] tracking-[-0.085em]">THE ART OF<br /><span className="font-serif font-normal italic text-[#E8D5AE]">protection.</span></h1>
//             <div className="mt-10 flex max-w-3xl flex-col gap-8 border-t border-white/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
//               <p className="max-w-lg text-base leading-8 text-white/80">Considered pest control services for the spaces you value. From insects and rodents to bird proofing, discover our approach in Notting Hill, London.</p>
//               <a href="#service-collection" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#E8D5AE] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8D5AE] transition-colors hover:bg-[#E8D5AE] hover:text-[#0A2240]">Explore services <ArrowDown size={17} /></a>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60"><span>QuickShield Services Notting Hill</span><span>London · United Kingdom</span></div>
//         </div>
//       </section>

//       {/* EDITORIAL INTRO */}
//       <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.36fr_1fr] lg:gap-20 lg:px-16 lg:py-40">
//         <div><Eyebrow>01 / What we do</Eyebrow></div>
//         <div><h2 className="max-w-[1080px] text-[clamp(3rem,6.3vw,7rem)] font-medium leading-[1.04] tracking-[-0.07em]">Different challenges.<br /><span className="font-serif font-normal italic text-[#B99547]">One considered</span> approach.</h2><div className="mt-10 grid gap-8 border-t border-[#0A2240]/20 pt-8 md:grid-cols-2 md:gap-12"><p className="text-xl font-medium leading-9 tracking-[-0.025em]">Pest control should respond to the property, not follow a one-size-fits-all formula.</p><p className="text-[15px] leading-8 text-[#5E6975]">Explore pest control services for residential and commercial properties. Each concern calls for attention to the pest, the environment and appropriate management options.</p></div></div>
//       </section>

//       {/* CATEGORY INDEX AND SERVICE FEATURES */}
//       <section id="service-collection" ref={collectionRef} className="scroll-mt-20 bg-[#F7F5EF] pb-24 sm:pb-32 lg:pb-40">
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
//           <div className="sticky top-0 z-30 -mx-6 border-y border-[#0A2240]/15 bg-[#F7F5EF]/95 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-4"><span className="text-[11px] font-bold uppercase tracking-[0.17em]">Explore the collection</span><span className="rounded-full bg-[#0A2240] px-3 py-1 text-xs text-white">{filtered.length.toString().padStart(2, "0")}</span></div>
//               <div className="flex flex-wrap gap-x-6 gap-y-3">{categories.map(category => <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => changeCategory(category)} className={`border-b-2 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${selectedCategory === category ? "border-[#B99547] text-[#0A2240]" : "border-transparent text-[#0A2240]/45 hover:text-[#0A2240]"}`}>{category}</button>)}</div>
//             </div>
//           </div>
//           <div className="pt-3">{filtered.map((service, index) => <ServiceFeature key={service.id} service={service} index={index} setRef={el => { refs.current[service.title] = el; }} onEnquire={onEnquire} />)}</div>
//           <div className="flex flex-col gap-4 border-t border-[#0A2240]/20 pt-7 text-sm text-[#5E6975] sm:flex-row sm:items-center sm:justify-between"><span>Showing {filtered.length} of {servicesData.length} services</span><Link to="/contact-us" className="inline-flex items-center gap-2 font-semibold text-[#0A2240] hover:text-[#98763B]">Not sure which service you need? <ArrowUpRight size={18} /></Link></div>
//         </div>
//       </section>

//       {/* MIDNIGHT BRAND STATEMENT */}
//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-[#B99547]/15" />
//         <div className="relative mx-auto grid max-w-[1500px] gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-16">
//           <div><Eyebrow light>02 / The QuickShield perspective</Eyebrow><h2 className="mt-8 text-[clamp(3.2rem,6.5vw,7.6rem)] font-medium leading-[1.01] tracking-[-0.075em]">Look closer.<br /><span className="font-serif font-normal italic text-[#E8D5AE]">Think further.</span></h2></div>
//           <div className="space-y-8"><p className="max-w-lg text-base leading-8 text-white/70">Effective pest management starts with understanding what is happening and why. We focus on practical options appropriate to the property and the issue.</p><div className="grid gap-5 border-t border-white/20 pt-8 sm:grid-cols-2"><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Residential and commercial enquiries</span></div><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Treatment and prevention considerations</span></div></div></div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-[#E8D5AE] py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16"><Eyebrow>03 / Your next step</Eyebrow><div className="mt-9 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.95] tracking-[-0.08em]">LET'S MAKE<br /><span className="font-serif font-normal italic text-[#96723C]">a plan.</span></h2><p className="mt-8 max-w-xl text-base leading-8 text-[#0A2240]/75">Tell us what you have noticed. Contact QuickShield Services Notting Hill to discuss suitable next steps for your property.</p></div><div className="flex flex-col gap-3"><Link to="/contact-us" className="group inline-flex items-center justify-between gap-8 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]">Send an enquiry <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><a href="tel:+447417502611" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0A2240]/35 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white"><Phone size={17} />{PHONE}<ArrowRight size={17} /></a></div></div><div className="mt-20 flex items-center gap-3 border-t border-[#0A2240]/20 pt-6 text-xs text-[#0A2240]/70"><MapPin size={17} />3A Denbigh Rd, London W11 2SJ, United Kingdom</div></div></section>
//     </main>
//   );
// }




















import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Phone,
  MapPin,
  Check,
  SlidersHorizontal,
} from "lucide-react";

/* ==========================================
   QUICKSHIELD SERVICES BELGRAVIA
   LUXURY EDITORIAL SERVICES PAGE
========================================== */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const CATEGORIES = [
  "All",
  "Insects",
  "Rodents & Wildlife",
  "Birds & Prevention",
];

/* ==========================================
   SERVICES DATA
   ORIGINAL IMAGE PATHS PRESERVED
========================================== */

const SERVICES = [
  {
    id: 1,
    cat: "Insects",
    title: "Ant Control",
    img: "/images/ants.webp",
    eyebrow: "Ant Infestation Management",
    headline: "Small intruders. Serious attention.",
    description:
      "Ant activity can develop around kitchens, food preparation areas and access points. Understanding the trails, possible nesting locations and surrounding conditions is an important part of selecting suitable control measures.",
    points: [
      "Ant trail assessment",
      "Potential nesting areas",
      "Treatment considerations",
    ],
  },
  {
    id: 2,
    cat: "Insects",
    title: "Bed Bugs",
    img: "/images/bedbugs.webp",
    eyebrow: "Bed Bug Inspection & Treatment",
    headline: "Comfort begins with a closer look.",
    description:
      "Bed bugs can affect bedrooms, mattresses, furniture and sleeping areas. Careful inspection and an appropriate treatment approach can help address concerns within affected residential and commercial properties.",
    points: [
      "Bedroom inspection",
      "Affected furniture assessment",
      "Treatment preparation guidance",
    ],
  },
  {
    id: 3,
    cat: "Insects",
    title: "Moth Treatment",
    img: "/images/moths.webp",
    eyebrow: "Carpet Moth Control",
    headline: "Care for the details that matter.",
    description:
      "Carpet moth activity may damage natural-fibre carpets, rugs and textiles. Identifying affected materials and understanding the extent of activity can help guide appropriate management and prevention measures.",
    points: [
      "Carpet and rug assessment",
      "Affected textile inspection",
      "Prevention considerations",
    ],
  },
  {
    id: 4,
    cat: "Insects",
    title: "Beetle Removal",
    img: "/images/beetles.webp",
    eyebrow: "Carpet Beetle Management",
    headline: "Protecting more than appearances.",
    description:
      "Carpet beetles can affect natural fabrics, furnishings and stored materials. We discuss identification, areas of concern and suitable pest management measures according to the circumstances.",
    points: [
      "Pest identification",
      "Fabric and furnishing checks",
      "Management options",
    ],
  },
  {
    id: 5,
    cat: "Insects",
    title: "Cockroach",
    img: "/images/roaches.webp",
    eyebrow: "Cockroach Control",
    headline: "A considered response to hidden activity.",
    description:
      "Cockroaches may shelter in concealed spaces around kitchens, appliances and service areas. Addressing a concern involves understanding the environment, identifying potential harbourage and considering suitable treatment measures.",
    points: [
      "Harbourage assessment",
      "Kitchen and service areas",
      "Treatment considerations",
    ],
  },
  {
    id: 6,
    cat: "Rodents & Wildlife",
    title: "Rats & Mice",
    img: "/images/rats.webp",
    eyebrow: "Rodent Control & Proofing",
    headline: "Find the activity. Understand the access.",
    description:
      "Rats and mice can affect residential and commercial properties through concealed access points, roof spaces and service routes. Rodent management may involve assessing signs of activity and considering control and proofing measures.",
    points: [
      "Rodent activity assessment",
      "Possible entry points",
      "Property proofing",
    ],
  },
  {
    id: 7,
    cat: "Insects",
    title: "Flea Eradication",
    img: "/images/fleas.webp",
    eyebrow: "Flea Treatment",
    headline: "Restore comfort to everyday spaces.",
    description:
      "Flea activity can affect carpets, soft furnishings and other indoor areas. Suitable management may involve treatment planning, property preparation and relevant precautions for occupants and pets.",
    points: [
      "Affected area assessment",
      "Treatment preparation",
      "Occupant safety considerations",
    ],
  },
  {
    id: 8,
    cat: "Insects",
    title: "Wasp Removal",
    img: "/images/wasps.webp",
    eyebrow: "Wasp Nest Control",
    headline: "Careful attention where it counts.",
    description:
      "Wasp nests around roofs, gardens, outbuildings and other structures require appropriate assessment. The location, accessibility and level of activity influence suitable control options.",
    points: [
      "Nest location assessment",
      "Property access considerations",
      "Appropriate control options",
    ],
  },
  {
    id: 9,
    cat: "Insects",
    title: "Bee Relocation",
    img: "/images/bees.webp",
    eyebrow: "Bee Activity Assessment",
    headline: "A thoughtful approach to nature.",
    description:
      "Bee activity should be assessed carefully before action is considered. Depending on the species and circumstances, specialist advice or relocation may be more appropriate than conventional pest removal.",
    points: [
      "Bee activity assessment",
      "Species considerations",
      "Specialist relocation guidance",
    ],
  },
  {
    id: 10,
    cat: "Rodents & Wildlife",
    title: "Squirrels",
    img: "/images/squirrels.webp",
    eyebrow: "Squirrel Exclusion & Proofing",
    headline: "Looking beyond the roofline.",
    description:
      "Squirrel activity around lofts and roof spaces may involve property access points and damage to building materials. We discuss assessment, suitable exclusion measures and property proofing considerations.",
    points: [
      "Loft and roof-space assessment",
      "Access point identification",
      "Exclusion and proofing",
    ],
  },
  {
    id: 11,
    cat: "Birds & Prevention",
    title: "Hygiene Proofing",
    img: "/images/hygiene.webp",
    eyebrow: "Pest Prevention & Hygiene",
    headline: "Prevention is part of protection.",
    description:
      "Property hygiene, housekeeping and preventative measures can play an important role in pest management. Relevant recommendations depend on the type of premises and the conditions contributing to pest activity.",
    points: [
      "Property hygiene considerations",
      "Potential risk areas",
      "Preventative measures",
    ],
  },
  {
    id: 12,
    cat: "Birds & Prevention",
    title: "Bird Netting",
    img: "/images/birds.webp",
    eyebrow: "Bird Deterrents & Proofing",
    headline: "Protect the architecture. Respect the environment.",
    description:
      "Bird proofing may involve suitable netting, spikes and other deterrent systems. The right approach depends on the building, site conditions and applicable wildlife protections.",
    points: [
      "Building assessment",
      "Netting and deterrent options",
      "Wildlife protection considerations",
    ],
  },
];

/* ==========================================
   HOME PAGE SERVICE ALIASES
========================================== */

const ALIASES = {
  "Bed Bugs Heat Treatment": "Bed Bugs",
  "Bed Bug Treatment": "Bed Bugs",
  "Rat & Mice Control": "Rats & Mice",
  "Rats and Mice": "Rats & Mice",
  "Rats & Mice Control": "Rats & Mice",
  "Rats & Mice Proofing": "Rats & Mice",
  "Rodent Control": "Rats & Mice",
  "Wasp Control": "Wasp Removal",
  "Wasp Nest Removal": "Wasp Removal",
  "Wasp Nest Control": "Wasp Removal",
  "Wasp & Bee Removal": "Wasp Removal",
  "Carpet Moth Treatment": "Moth Treatment",
  "Carpet Moth Control": "Moth Treatment",
  "Carpet Moth & Beetle Treatment": "Moth Treatment",
  "Cockroach Control": "Cockroach",
  "Cockroach Gel Treatment": "Cockroach",
  "Flea Treatment": "Flea Eradication",
  "Bird Proofing": "Bird Netting",
  "Bird Netting & Spikes Installation": "Bird Netting",
  "Bee Control": "Bee Relocation",
  "Squirrel Control": "Squirrels",
  "Squirrel Exclusion & Proofing": "Squirrels",
  Ants: "Ant Control",
  "Ants Control": "Ant Control",
  "Carpet Beetle": "Beetle Removal",
  "Commercial Kitchen Deep Sanitization": "Hygiene Proofing",
};

/* ==========================================
   SCROLL REVEAL
========================================== */

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof window === "undefined") {
      return;
    }

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (
      element.getBoundingClientRect().top <
      window.innerHeight + 80
    ) {
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
        transition:
          "opacity 700ms ease, transform 700ms ease",
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${
        light
          ? "text-[#F8F1E4]/70"
          : "text-[#0A2240]/70"
      }`}
    >
      <span className="h-[2px] w-9 shrink-0 bg-[#B99547]" />
      {children}
    </div>
  );
}

/* ==========================================
   HERO GALLERY
   APPROVED DESIGN PRESERVED
========================================== */

function HeroGallery() {
  return (
    <div className="relative mx-auto w-full max-w-[660px] pb-16 pt-8 sm:px-8 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 right-12 top-0 border border-[#B99547]/45"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 top-14 w-[85%] bg-[#B99547]/15"
      />

      <div className="group relative ml-auto w-[96%] border border-[#B99547]/60 bg-[#F8F1E4] p-2 sm:w-[94%] sm:p-3">
        <img
          src="/images/shieldteam.webp"
          alt="QuickShield Services Belgravia pest control team"
          fetchPriority="high"
          className="block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none"
        />
      </div>

      <div className="relative z-10 -mt-1 ml-0 w-fit bg-[#B99547] px-6 py-5 text-[#0A2240] sm:-ml-3 sm:-mt-8 sm:px-9 sm:py-7">
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em]">
          Our Service Collection
        </span>

        <span className="mt-2 block text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
          12 Services
        </span>

        <span className="mt-3 block border-t border-[#0A2240]/25 pt-3 text-[10px] font-bold uppercase tracking-[0.14em]">
          Belgravia & London
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[#B99547]"
      />
    </div>
  );
}

/* ==========================================
   FULLY CLICKABLE EDITORIAL SERVICE
========================================== */

function EditorialService({
  service,
  index,
  setRef,
}) {
  const reverse = index % 2 === 1;

  const dark =
    index % 4 === 1 ||
    index % 4 === 2;

  const number = String(service.id).padStart(2, "0");

  return (
    <article
      ref={setRef}
      id={`service-${service.id}`}
      className={`relative scroll-mt-36 overflow-hidden border-b ${
        dark
          ? "border-[#B99547]/25 bg-[#0A2240] text-[#F8F1E4]"
          : "border-[#0A2240]/10 bg-[#F8F1E4] text-[#0A2240]"
      }`}
    >
      {/* 
        ENTIRE SERVICE SECTION IS A LINK.
        Clicking anywhere navigates to /contact-us.
      */}

      <Link
        to="/contact-us"
        state={{
          selectedService: service.title,
        }}
        aria-label={`Enquire about ${service.title} pest control in Belgravia`}
        className="group/service block w-full cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#B99547]"
      >
        <div className="mx-auto max-w-[1480px] px-5 py-16 transition-[padding] duration-500 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

            {/* IMAGE COMPOSITION */}

            <Reveal
              className={
                reverse
                  ? "lg:order-2"
                  : "lg:order-1"
              }
            >
              <div className="relative">
                {/* Offset gold frame */}

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute h-full w-full border border-[#B99547]/65 transition-transform duration-500 group-hover/service:translate-x-1 group-hover/service:-translate-y-1 ${
                    reverse
                      ? "-right-3 -top-3 sm:-right-6 sm:-top-6"
                      : "-left-3 -top-3 sm:-left-6 sm:-top-6"
                  }`}
                />

                {/* Photograph */}

                <div className="relative overflow-hidden bg-[#B99547]/15">
                  <img
                    src={service.img}
                    alt={`${service.title} pest control in Belgravia, London`}
                    loading="lazy"
                    className="block aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out group-hover/service:scale-[1.055] motion-reduce:transform-none"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 border-l-2 border-[#B99547] pl-4 sm:bottom-8 sm:left-8">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#F8F1E4]">
                      QuickShield Services
                    </span>

                    <span className="mt-2 block text-xs font-semibold text-[#F8F1E4]/80">
                      Belgravia · London
                    </span>
                  </div>
                </div>

                {/* Floating number */}

                <div
                  className={`absolute -bottom-5 flex h-20 w-20 items-center justify-center bg-[#B99547] text-[#0A2240] transition-transform duration-500 group-hover/service:-translate-y-2 sm:-bottom-8 sm:h-28 sm:w-28 ${
                    reverse
                      ? "left-5 sm:left-8"
                      : "right-5 sm:right-8"
                  }`}
                >
                  <span className="text-4xl font-light tracking-[-0.08em] sm:text-6xl">
                    {number}
                  </span>
                </div>

                {/* Architectural corner */}

                <div
                  aria-hidden="true"
                  className={`absolute -top-3 h-8 w-8 border-t-2 border-[#B99547] ${
                    reverse
                      ? "-right-3 border-r-2 sm:-right-6 sm:-top-6"
                      : "-left-3 border-l-2 sm:-left-6 sm:-top-6"
                  }`}
                />
              </div>
            </Reveal>

            {/* EDITORIAL CONTENT */}

            <Reveal
              delay={100}
              className={
                reverse
                  ? "lg:order-1"
                  : "lg:order-2"
              }
            >
              <div className="relative pt-8 lg:pt-0">

                {/* Background number */}

                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-12 right-0 select-none text-[clamp(7rem,15vw,15rem)] font-semibold leading-none tracking-[-0.1em] ${
                    dark
                      ? "text-[#F8F1E4]/[0.035]"
                      : "text-[#0A2240]/[0.035]"
                  }`}
                >
                  {number}
                </span>

                <div className="relative z-10">

                  {/* Service metadata */}

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B99547]">
                      Service {number} / 12
                    </span>

                    <span
                      className={`h-px w-10 ${
                        dark
                          ? "bg-[#F8F1E4]/25"
                          : "bg-[#0A2240]/20"
                      }`}
                    />

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                        dark
                          ? "text-[#F8F1E4]/55"
                          : "text-[#0A2240]/55"
                      }`}
                    >
                      {service.cat}
                    </span>
                  </div>

                  {/* Service title */}

                  <h3 className="mt-8 text-[clamp(2.8rem,4.8vw,5.6rem)] font-semibold leading-[1.06] tracking-[-0.055em]">
                    {service.title}
                    <span className="text-[#B99547]">
                      .
                    </span>
                  </h3>

                  {/* Editorial headline */}

                  <p className="mt-6 max-w-xl text-xl font-light italic leading-snug text-[#B99547] sm:text-2xl">
                    {service.headline}
                  </p>

                  <div className="mt-9 h-px w-full max-w-lg bg-[#B99547]/45" />

                  {/* Description */}

                  <p
                    className={`mt-8 max-w-xl text-sm leading-8 sm:text-base ${
                      dark
                        ? "text-[#F8F1E4]/70"
                        : "text-[#0A2240]/70"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Service features */}

                  <div className="mt-9 grid gap-4">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-4"
                      >
                        <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center border border-[#B99547] text-[#B99547]">
                          <Check
                            size={12}
                            strokeWidth={2}
                          />
                        </span>

                        <span
                          className={`text-sm leading-7 ${
                            dark
                              ? "text-[#F8F1E4]/80"
                              : "text-[#0A2240]/80"
                          }`}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Visual CTA — part of parent link */}

                  <div className="mt-12">
                    <div className="inline-flex items-center gap-6 border-b-2 border-[#B99547] pb-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors group-hover/service:text-[#B99547]">
                      Enquire About {service.title}

                      <span className="flex h-11 w-11 items-center justify-center bg-[#B99547] text-[#0A2240] transition-transform duration-300 group-hover/service:translate-x-2 group-hover/service:-translate-y-1">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </Link>
    </article>
  );
}

/* ==========================================
   MAIN SERVICES PAGE
========================================== */

export default function ServicesPage() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const refs = useRef({});
  const collectionRef = useRef(null);

  useEffect(() => {
    document.title =
      "Pest Control Services Belgravia | QuickShield Services London";
  }, []);

  /* =====================================
     CATEGORY FILTERING ONLY
     NO SEARCH FUNCTIONALITY
  ===================================== */

  const filtered = useMemo(() => {
    if (selectedCategory === "All") {
      return SERVICES;
    }

    return SERVICES.filter(
      (service) =>
        service.cat === selectedCategory
    );
  }, [selectedCategory]);

  /* =====================================
     SCROLL TO SERVICE FROM HOME
  ===================================== */

  useEffect(() => {
    const requested =
      location.state?.scrollToService;

    if (!requested) return;

    const target =
      ALIASES[requested] || requested;

    setSelectedCategory("All");

    const timer = window.setTimeout(() => {
      const element = refs.current[target];

      if (!element) return;

      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      element.scrollIntoView({
        behavior: reducedMotion
          ? "auto"
          : "smooth",
        block: "start",
      });
    }, 350);

    return () => window.clearTimeout(timer);
  }, [
    location.key,
    location.state?.scrollToService,
  ]);

  /* =====================================
     CATEGORY CHANGE
  ===================================== */

  const changeCategory = (category) => {
    setSelectedCategory(category);

    window.requestAnimationFrame(() => {
      collectionRef.current?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#F8F1E4] font-sans text-[#0A2240]">

      {/* =====================================
          SECTION 1 — APPROVED HERO
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#0A2240] pt-32 text-[#F8F1E4] sm:pt-40 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#B99547 1px,transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

          {/* Breadcrumb */}

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

            <span>Our Services</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* Hero text */}

            <div className="pb-8 lg:pb-24">
              <Reveal>
                <Eyebrow light>
                  QuickShield Services Belgravia
                </Eyebrow>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-9 text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
                  Pest Control
                  <br />

                  <span className="font-light italic text-[#B99547]">
                    Services
                  </span>

                  <br />
                  in Belgravia.
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-10 max-w-xl border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#F8F1E4]/75 sm:text-lg">
                  Explore pest control services for
                  homes and commercial properties
                  in Belgravia and across London.
                  From insects and rodents to
                  wildlife concerns and bird proofing.
                </p>
              </Reveal>

              <Reveal delay={190}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#service-collection"
                    className="group inline-flex items-center gap-5 bg-[#B99547] px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0A2240] transition-colors hover:bg-[#F8F1E4]"
                  >
                    Explore Our Services

                    <ArrowDown
                      size={19}
                      className="transition-transform group-hover:translate-y-1"
                    />
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center gap-3 border border-[#F8F1E4]/25 px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#B99547] hover:text-[#B99547]"
                  >
                    <Phone size={18} />
                    Call Our Team
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Hero image */}

            <Reveal delay={100}>
              <HeroGallery />
            </Reveal>

          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#F8F1E4]/15 py-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8F1E4]/55">
              Belgravia · London · United Kingdom
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B99547]">
              Residential & Commercial Pest Control
            </span>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2 — INTRODUCTION
      ===================================== */}

      <section className="bg-[#F8F1E4] py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>
              01 / Our Expertise
            </Eyebrow>
          </Reveal>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <h2 className="text-[clamp(2.7rem,5vw,5.5rem)] font-semibold leading-[1.12] tracking-[-0.05em]">
                The right
                <br />
                attention for
                <br />

                <span className="font-light italic text-[#B99547]">
                  every concern.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="lg:pt-5">
                <p className="text-xl font-semibold leading-9">
                  Every pest problem brings its own
                  set of circumstances.
                </p>

                <p className="mt-6 text-base leading-8 text-[#0A2240]/70">
                  QuickShield Services Belgravia
                  welcomes enquiries involving common
                  household pests, commercial pest
                  management and property protection
                  measures.
                </p>

                <p className="mt-5 text-base leading-8 text-[#0A2240]/70">
                  Browse the collection below to
                  explore our services and learn
                  about the pest activity and
                  property considerations associated
                  with each one.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 3 — SERVICE COLLECTION
      ===================================== */}

      <section
        id="service-collection"
        ref={collectionRef}
        className="scroll-mt-24 border-t border-[#0A2240]/10 bg-[#F8F1E4]"
      >
        {/* Collection introduction */}

        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="py-16 sm:py-20">
            <Reveal>
              <Eyebrow>
                02 / Explore the Collection
              </Eyebrow>
            </Reveal>

            <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <Reveal>
                <h2 className="text-[clamp(2.6rem,4.5vw,5rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                  Our Services.
                  <br />

                  <span className="font-light italic text-[#B99547]">
                    In Detail.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="max-w-sm text-base leading-8 text-[#0A2240]/70">
                  Explore our pest control services
                  and select a service to contact
                  our Belgravia team.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* =====================================
            CATEGORY FILTERS ONLY
            SEARCH COMPLETELY REMOVED
        ===================================== */}

        <div className="sticky top-0 z-30 border-y border-[#0A2240]/15 bg-[#F8F1E4]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1480px] flex-wrap items-center gap-4 px-5 py-5 sm:px-10 lg:px-16">

            <SlidersHorizontal
              size={19}
              className="shrink-0 text-[#B99547]"
            />

            <span className="mr-2 text-xs font-bold uppercase tracking-[0.13em]">
              Categories
            </span>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const active =
                  selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      changeCategory(category)
                    }
                    className={`border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
                      active
                        ? "border-[#B99547] bg-[#B99547] text-[#0A2240]"
                        : "border-[#0A2240]/15 text-[#0A2240]/70 hover:border-[#B99547]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <span className="ml-auto text-xs font-semibold uppercase tracking-[0.1em] text-[#0A2240]/60">
              {filtered.length} Services
            </span>
          </div>
        </div>

        {/* =====================================
            FULLY CLICKABLE SERVICE SECTIONS
        ===================================== */}

        <div>
          {filtered.map((service, index) => (
            <EditorialService
              key={service.id}
              service={service}
              index={index}
              setRef={(element) => {
                refs.current[service.title] =
                  element;
              }}
            />
          ))}
        </div>

        {/* Directory footer */}

        <div className="bg-[#F8F1E4]">
          <div className="mx-auto flex max-w-[1480px] flex-col gap-7 px-5 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
            <p className="text-base leading-8 text-[#0A2240]/70">
              Not sure which pest control service
              matches your concern?
            </p>

            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-4 border-b-2 border-[#B99547] pb-3 text-xs font-bold uppercase tracking-[0.13em]"
            >
              Discuss Your Property

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 4 — APPROACH
      ===================================== */}

      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/20"
        />

        <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20 lg:px-16">
          <Reveal>
            <Eyebrow light>
              03 / Our Perspective
            </Eyebrow>

            <h2 className="mt-9 text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Understand
              <br />
              the problem.
              <br />

              <span className="font-light italic text-[#B99547]">
                Consider what follows.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="max-w-lg text-base leading-8 text-[#F8F1E4]/70">
                Pest management starts with
                understanding the activity,
                the affected environment and
                the property's particular
                requirements.
              </p>

              <div className="mt-10 grid gap-7 border-t border-[#F8F1E4]/20 pt-9 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="mt-1 shrink-0 text-[#B99547]"
                  />

                  <span className="text-sm leading-7 text-[#F8F1E4]/80">
                    Residential and commercial
                    pest control enquiries
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="mt-1 shrink-0 text-[#B99547]"
                  />

                  <span className="text-sm leading-7 text-[#F8F1E4]/80">
                    Treatment, proofing and
                    prevention considerations
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          SECTION 5 — FINAL CTA
      ===================================== */}

      <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>
              04 / Speak With Us
            </Eyebrow>

            <h2 className="mt-10 text-[clamp(3.2rem,6vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
              Need Pest
              <br />
              Control?
              <br />

              <span className="font-light italic text-[#F8F1E4]">
                Let's Discuss It.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 flex flex-col gap-10 border-t border-[#0A2240]/25 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-8 text-[#0A2240]/80">
                Contact QuickShield Services Belgravia
                to discuss pest activity affecting
                your home or commercial property
                in Belgravia and across London.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-4 bg-[#0A2240] px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#F8F1E4] transition-colors hover:bg-[#F8F1E4] hover:text-[#0A2240]"
                >
                  Send an Enquiry

                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 border border-[#0A2240]/40 px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#0A2240] hover:text-[#F8F1E4]"
                >
                  <Phone size={18} />
                  {PHONE}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 flex items-start gap-3 border-t border-[#0A2240]/20 pt-7 text-sm text-[#0A2240]/75">
            <MapPin
              size={18}
              className="mt-1 shrink-0"
            />

            <span>
              {COMPANY} · {ADDRESS}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}


