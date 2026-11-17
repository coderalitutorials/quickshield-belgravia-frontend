

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 15 }, // Kam displacement taake render tree freeze na ho
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     // backface-hidden aur isolate se paint cycles bach jate hain
//     <div className="relative min-h-screen bg-[#C5A86B] text-[#0A2240] overflow-hidden font-sans pt-24 md:pt-32 pb-16 isolate backface-hidden">
      
//       {/* ==================== HERO BACKGROUND IMAGE LAYER ==================== */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         {/* Aap apni image ka path niche 'src' mein daal dena. 
//             Object-cover aur center se image perfectly scale ho jayegi */}
//         <img 
//           src="/images/herohome.webp" // <-- APNI IMAGE KA LINK YA PATH YAHAN LAGAYEIN
//           alt="Premium Luxury Estate Asset Background" 
//           className="w-full h-full object-cover object-center transform-gpu scale-105"
//           onError={(e) => { e.target.style.display = 'none'; }} // Fallback agar image crash ho jaye
//         />
        
//         {/* Premium Overlay Mask: Yeh image ko mask karega taake dark blue luxury text perfectly read ho sake */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/80 via-[#C5A86B]/70 to-[#C5A86B]/90 mix-blend-multiply opacity-90" />
//         <div className="absolute inset-0 bg-[#0A2240]/10 mix-blend-color-burn" />
//       </div>

//       {/* Decorative Vector Flair - Kept for depth scale over image */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10 transform-gpu">
//         <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] border-[50px] border-[#0A2240]/10 rounded-full" />
//         <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-[#0A2240]/10 rounded-full" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="flex flex-col items-center justify-center text-center transform-gpu"
//         >
          
//           {/* Visual Badge */}
//           <motion.div variants={fadeInUp} className="mb-8">
//             <div className="relative p-6 rounded-full bg-white/40 border border-white/60 shadow-lg inline-block">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#0A2240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <span className="absolute bottom-1 right-1 flex h-4 w-4">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A2240] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0A2240]"></span>
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A2240] uppercase max-w-4xl"
//           >
//             Mayfair's Premium Pest <span className="text-white drop-shadow">Eradication</span> Service
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mt-6 mb-10"
//           >
//             At Pesbye Services, we provide unmatched discrete protection for London's luxury assets. From premium residential estates to corporate spaces in Mayfair, we utilize advanced, eco-smart technology for permanent structural secureness.
//           </motion.p>

//           {/* Call To Action Buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2"
//           >
//             <Link
//               to="/contact-us"
//               className="w-full sm:w-auto relative overflow-hidden bg-white text-[#0A2240] font-extrabold text-sm uppercase tracking-widest px-12 py-4.5 rounded-xl transition-all duration-200 active:scale-95 shadow-xl hover:bg-white/90 group"
//             >
//               <span className="relative z-10 inline-flex items-center gap-2.5">
//                 Book Inspection
//                 <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-lg">➔</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/20 border border-white/40">
//               <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-900 font-bold">24/7 Mayfair:</span>
//               <a href="tel:07424520697" className="text-xl sm:text-2xl font-black text-white hover:text-[#0A2240] transition-colors tracking-tight">
//                 07424 520697
//               </a>
//             </div>
//           </motion.div>

//           {/* Feature Grid with Solid/Semi-Transparent Contrast Stack */}
//           <motion.div
//             variants={fadeInUp}
//             className="mt-20 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/40 border border-white/70 shadow-xl transform-gpu"
//           >
//             {[
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                   </svg>
//                 ), 
//                 label: 'Unmarked Vehicles', 
//                 desc: 'Discreet operations' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ), 
//                 label: '2-Hr Dispatch', 
//                 desc: 'Mayfair Priority' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 ), 
//                 label: 'Eco-Smart Safe', 
//                 desc: 'Advanced Protocols' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-1.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08M17.15 3.836c.376.023.75.05 1.124.08m-1.124-.08c.383 1.237 1.277 2.23 2.455 2.682m-13.43-.08c1.178-.452 2.072-1.445 2.455-2.682m-2.455.08c-.373.025-.746.053-1.119.086m1.119-.086c-.383 1.237-1.277 2.23-2.455 2.682m13.43.08c-.373.025-.746.053-1.119.086m-1.119-.086c.383 1.237 1.277 2.23 2.455 2.682M4.15 6.414a11.952 11.952 0 00-1.118 1.408m1.118-1.408c.383 1.237 1.277 2.23 2.455 2.682m10.975-2.682c.413 1.332 1.43 2.374 2.748 2.766m-17.3 1.326A11.954 11.954 0 003 12c0 5.089 3.177 9.434 7.636 11.187a.75.75 0 00.514-.047l7.5-3.75a.75.75 0 00.384-.537l1.5-7.5a.75.75 0 00-.223-.687l-2.25-2.25a.75.75 0 00-.62-.212z" />
//                   </svg>
//                 ), 
//                 label: 'BPCA Accredited', 
//                 desc: 'Certified Techs' 
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center justify-center text-center p-5 rounded-xl bg-white/60 border border-white/20 hover:border-[#0A2240]/20 transition-transform duration-200 group transform-gpu">
//                 <div className="mb-3.5 group-hover:scale-105 transition-transform bg-white/40 p-2.5 rounded-full border border-white/40 shadow-sm">
//                   {item.svg}
//                 </div>
//                 <h4 className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-[#0A2240] mb-0.5">{item.label}</h4>
//                 <p className="text-[11px] md:text-xs text-slate-900 font-semibold">{item.desc}</p>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={fadeInUp} className="mt-8 text-xs tracking-widest uppercase font-bold text-slate-900">
//               Pesbye Services Mayfair — <span className="text-white">Secure✔</span>
//           </motion.div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }












// import React from "react";
// import { ShieldCheck, Target, Clock, Zap, Award, Search, CheckCircle2 } from "lucide-react";

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* ─── PREMIUM HEADER ─── */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// Operational Profile</span>
//           <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-white">
//             Quick <br/> <span className="text-[#0A2240]">Shield</span>
//           </h1>
//         </div>

//         {/* ─── BENTO GRID LAYOUT ─── */}
//         <div className="grid md:grid-cols-12 gap-6">
          
//           {/* Main Mission Card */}
//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex flex-col justify-center">
//             <h2 className="text-4xl font-black uppercase mb-6">Expertise in Every Corner.</h2>
//             <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
//               We don't just eliminate pests; we secure your environment. Quick Shield combines years of local experience with professional-grade protocols to ensure your property remains a sanctuary. From rapid response dispatches to long-term prevention, we are the industry standard for reliable pest management.
//             </p>
//           </div>

//           {/* Stats Card */}
//           <div className="md:col-span-4 bg-white/40 border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between">
//             <h3 className="text-xl font-black uppercase mb-8">Performance Metrics</h3>
//             <div className="space-y-6">
//               {[
//                 { label: "Homes Secured", val: "1,200+" },
//                 { label: "Response Time", val: "2 Hours" },
//                 { label: "Success Rate", val: "99%" },
//               ].map((stat, i) => (
//                 <div key={i} className="border-b border-[#0A2240]/10 pb-4">
//                   <div className="text-3xl font-black">{stat.val}</div>
//                   <div className="text-xs uppercase font-bold tracking-widest opacity-60">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Cards */}
//           <div className="md:col-span-12 grid md:grid-cols-3 gap-6">
//             {[
//               { icon: <Search />, title: "Precision Inspection", text: "Identifying root causes using advanced methodology." },
//               { icon: <Target />, title: "Targeted Action", text: "Removing infestations with extreme clinical accuracy." },
//               { icon: <ShieldCheck />, title: "Structural Defense", text: "Fortifying your property to prevent future returns." },
//             ].map((item, i) => (
//               <div key={i} className="bg-white/20 p-8 rounded-[2rem] border border-white/30 backdrop-blur-sm">
//                 <div className="mb-6 bg-[#0A2240] text-white w-14 h-14 rounded-2xl flex items-center justify-center">
//                   {React.cloneElement(item.icon, { size: 28 })}
//                 </div>
//                 <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
//                 <p className="text-[#0A2240]/80 font-medium">{item.text}</p>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* ─── WHY CHOOSE SECTION ─── */}
//         <div className="mt-24 bg-[#0A2240] text-white p-16 rounded-[2rem] grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-black uppercase mb-8 tracking-tight">The Quick Shield <br/><span className="text-[#b99547]">Advantage</span></h2>
//             <div className="space-y-4">
//               {[
//                 "Licensed & Bonded Professionals",
//                 "Advanced Eco-Safe Solutions",
//                 "Total Transparency in Pricing",
//                 "Rapid Local Deployment"
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-4 text-lg font-bold">
//                   <CheckCircle2 className="text-[#b99547]" /> {point}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="h-[300px] bg-white/10 rounded-3xl flex items-center justify-center font-black opacity-30 italic">
//             IMAGE_PLACEMENT_TECHNICAL_DETAIL
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }










// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85vh] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact-us" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }











import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  MapPin,
  Check,
  MoveDown,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   THE BELGRAVIA SIGNATURE — HOME HERO
============================================ */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";
const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const services = [
  "Rodent Control",
  "Bed Bug Treatment",
  "Cockroach Control",
  "Bird Proofing",
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="belgravia-hero-title"
      className="qsb-hero relative isolate overflow-hidden bg-[#0A2240] text-[#F8F1E4]"
    >
      <style>{`
        @keyframes qsbReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes qsbImageReveal {
          from {
            opacity: 0;
            transform: scale(1.07);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes qsbLineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes qsbSlowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .qsb-reveal {
          animation: qsbReveal .9s cubic-bezier(.2,.8,.2,1) both;
        }

        .qsb-delay-1 { animation-delay: .12s; }
        .qsb-delay-2 { animation-delay: .25s; }
        .qsb-delay-3 { animation-delay: .38s; }
        .qsb-delay-4 { animation-delay: .52s; }

        .qsb-image-reveal {
          animation: qsbImageReveal 1.3s cubic-bezier(.2,.8,.2,1) both;
        }

        .qsb-line {
          transform-origin: left;
          animation: qsbLineGrow 1.1s ease both;
          animation-delay: .4s;
        }

        .qsb-float {
          animation: qsbSlowFloat 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsb-reveal,
          .qsb-image-reveal,
          .qsb-line,
          .qsb-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
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
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #B99547 1px, transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="absolute -right-40 -top-48 h-[650px] w-[650px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -right-20 -top-28 h-[500px] w-[500px] rounded-full border border-[#B99547]/10" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#B99547]/20" />
      </div>

      {/* ======================================
          MAIN HERO CONTENT
      ====================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:px-16 lg:pb-28 lg:pt-44">

        {/* TOP EDITORIAL LABEL */}

        <div className="qsb-reveal flex flex-wrap items-center justify-between gap-5 border-b border-[#F8F1E4]/15 pb-7">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#B99547]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F8F1E4]/75">
              London Pest Control Specialists
            </span>
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B99547]">
            Belgravia · SW1X
          </span>
        </div>

        {/* TWO COLUMN HERO */}

        <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:pt-20">

          {/* ======================================
              LEFT CONTENT
          ====================================== */}

          <div className="relative z-10">

            <div className="qsb-reveal qsb-delay-1 mb-8 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B99547]">
                QuickShield Services
              </span>

              <span className="h-px w-12 bg-[#B99547]/50" />

              <span className="text-xs uppercase tracking-[0.14em] text-[#F8F1E4]/55">
                Belgravia
              </span>
            </div>

            {/* MAIN SEO H1 */}

            <h1
              id="belgravia-hero-title"
              className="qsb-reveal qsb-delay-2 text-[clamp(3.2rem,6.4vw,7.4rem)] font-semibold leading-[1.035] tracking-[-0.065em]"
            >
              Pest Control
              <br />

              <span className="font-light italic text-[#B99547]">
                with a
              </span>

              <br />

              Higher
              <br />
              Standard<span className="text-[#B99547]">.</span>
            </h1>

            <div className="qsb-reveal qsb-delay-3 mt-9 max-w-xl border-l-2 border-[#B99547] pl-6">
              <p className="text-base leading-8 text-[#F8F1E4]/75 sm:text-lg">
                Professional pest control services
                in Belgravia, London, for homes
                and commercial properties.
                From rats and mice to bed bugs,
                cockroaches, wasps and bird proofing,
                explore solutions for your property.
              </p>
            </div>

            {/* ACTIONS */}

            <div className="qsb-reveal qsb-delay-4 mt-11 flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex min-h-[60px] items-center justify-center gap-6 bg-[#B99547] px-8 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F1E4]"
              >
                Request a Quote

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/services"
                className="group inline-flex min-h-[60px] items-center justify-center gap-5 border border-[#F8F1E4]/30 px-8 text-xs font-bold uppercase tracking-[0.13em] text-[#F8F1E4] transition-all duration-300 hover:border-[#B99547] hover:text-[#B99547]"
              >
                Explore Services

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* TRUST STRIP */}

            <div className="qsb-reveal qsb-delay-4 mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#F8F1E4]/15 pt-7">
              {[
                "Residential Properties",
                "Commercial Premises",
                "Property Protection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <Check
                    size={16}
                    className="text-[#B99547]"
                  />

                  <span className="text-xs font-medium text-[#F8F1E4]/70 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================
              RIGHT LUXURY VISUAL
          ====================================== */}

          <div className="qsb-image-reveal relative mx-auto w-full max-w-[620px] pb-12 pl-5 pr-5 pt-6 sm:pl-9 sm:pr-8 lg:pb-16">

            {/* OUTER ARCHITECTURAL FRAME */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-20 left-0 right-12 top-0 border border-[#B99547]/60"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 right-0 top-14 w-[83%] bg-[#B99547]/10"
            />

            {/* MAIN PROPERTY IMAGE */}

            <div className="group relative overflow-hidden border border-[#B99547]/30 bg-[#0A2240]">
              <img
                src="/images/image2.webp"
                alt="Elegant London residential property representing pest control services in Belgravia"
                fetchPriority="high"
                className="block aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045] motion-reduce:transform-none"
              />

              {/* PHOTO GRADIENT */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/80 via-[#0A2240]/10 to-transparent" />

              {/* IMAGE CAPTION */}

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
                <div className="mb-4 h-[2px] w-12 bg-[#B99547]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                  Property Protection
                </p>

                <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#F8F1E4] sm:text-3xl">
                  Care for the spaces
                  <br />
                  that matter.
                </p>
              </div>
            </div>

            {/* FLOATING LOCATION PLAQUE */}

            <div className="qsb-float absolute -bottom-1 left-0 z-10 bg-[#B99547] px-6 py-6 text-[#0A2240] shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:-left-3 sm:px-9 sm:py-8">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em]">
                Serving
              </span>

              <span className="mt-2 block text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                Belgravia
              </span>

              <span className="mt-3 block border-t border-[#0A2240]/25 pt-3 text-[10px] font-bold uppercase tracking-[0.13em]">
                London · SW1X
              </span>
            </div>

            {/* CORNER ACCENT */}

            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-11 w-11 border-r-2 border-t-2 border-[#B99547]"
            />
          </div>
        </div>

        {/* ======================================
            SERVICE TICKER / EDITORIAL FOOTER
        ====================================== */}

        <div className="qsb-reveal qsb-delay-4 mt-20 border-t border-[#F8F1E4]/15 pt-8 lg:mt-28">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                Our Expertise
              </span>

              <span className="hidden h-px w-8 bg-[#F8F1E4]/25 sm:block" />

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {services.map((service, index) => (
                  <React.Fragment key={service}>
                    <span className="text-xs text-[#F8F1E4]/65">
                      {service}
                    </span>

                    {index !== services.length - 1 && (
                      <span className="hidden text-[#B99547]/60 sm:inline">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#B99547] transition-colors hover:text-[#F8F1E4]"
            >
              View All Services

              <ArrowDownRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================
          BOTTOM CONTACT / LOCATION BAR
      ====================================== */}

      <div className="relative border-t border-[#0A2240]/15 bg-[#B99547] text-[#0A2240]">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-5 px-5 py-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">

          <div className="flex items-start gap-3">
            <MapPin
              size={19}
              className="mt-0.5 shrink-0"
            />

            <span className="text-xs font-semibold leading-6 sm:text-sm">
              {ADDRESS}
            </span>
          </div>

          <a
            href={PHONE_LINK}
            className="group inline-flex items-center gap-3 text-sm font-bold transition-colors hover:text-[#F8F1E4]"
          >
            <Phone size={18} />

            {PHONE}

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <span className="text-xs font-semibold text-[#0A2240]/70">
            {COMPANY}
          </span>
        </div>
      </div>
    </section>
  );
}

