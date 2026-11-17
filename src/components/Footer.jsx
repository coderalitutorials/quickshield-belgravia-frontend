




// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/swiftpeslogo.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones in worcester.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 worcester, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Direct call us
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors duration-200">
//                 07438 164691
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#76C7C0]" />
//           </a>

//           <a
//             href="mailto:info@pestcontrolworcester.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Secure Inbound Relay
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors duration-200 truncate">
//                 info@pestcontrolworcester.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#4FA3A5]" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-400">swiftpes Services</span>. All
//             rights engineered.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//             <span>swiftpes System Core Architecture v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0A2240] text-white overflow-hidden border-t border-[#C5A86B]/20 z-30 font-sans">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(#C5A86B_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.03] pointer-events-none" />
//       
//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#C5A86B]/10">
//           
//           {/* Logo & Intro */}
//           <div className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services"
//               className="h-20 w-auto object-contain  " 
//               loading="lazy"
//             />
//             <p className="text-slate-300/70 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
//               Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#C5A86B]/10 border border-[#C5A86B]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#C5A86B]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-[#C5A86B] uppercase font-bold">
//                 Certified London Standard
//               </span>
//             </div>
//           </div>

//           {/* Links Grid */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Corporate Directory
//               </h4>
//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link key={link.name} to={link.path} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
//                     <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Active Deployments
//               </h4>
//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "Rat & Mice Control", state: { scrollToService: "Rats & Mice Control" } },
//                   { name: "Bed Bugs Thermal Heat", state: { scrollToService: "Bed Bugs Control" } },
//                   { name: "Carpet Moth Eradication", state: { scrollToService: "Carpet Moth Control Treatment" } },
//                   { name: "Safe Pest Removal Matrix", state: { scrollToService: null } },
//                 ].map((service) => (
//                   <Link key={service.name} to="/services" state={service.state} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
//                     <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Bar */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#C5A86B]/10">
//           <div className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <MapPin className="w-5 h-5" /> </div>
//             <div>
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Operational Base</span>
//               <span className="text-sm font-semibold text-white">Mayfair, London, UK</span>
//             </div>
//           </div>

//           <a href="tel:07424520697" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Phone className="w-5 h-5" /> </div>
//             <div className="flex-grow">
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Direct Call</span>
//               <span className="text-sm font-semibold text-white group-hover:text-[#C5A86B]">07424 520697</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>

//           <a href="mailto:info@pestcontrolmayfair.uk" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
//             <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Mail className="w-5 h-5" /> </div>
//             <div className="flex-grow truncate">
//               <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Secure Inbound</span>
//               <span className="text-sm font-semibold text-white truncate group-hover:text-[#C5A86B]">info@pestcontrolmayfair.uk</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-400">
//           <p className="tracking-wide">Copyright © {new Date().getFullYear()} Pesbye Services. All rights reserved.</p>
//           <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-mono text-[#C5A86B] bg-[#C5A86B]/5 border border-[#C5A86B]/10">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse" />
//             <span>PESBYE SYSTEM CORE v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 













// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#b99547] text-[#0A2240] overflow-hidden border-t border-[#0A2240]/20 z-30 font-sans">
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.04] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#0A2240]/15">
//           <div className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//             />

//             <p className="text-[#0A2240]/80 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#0A2240]/5 border border-[#0A2240]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-[#0A2240] uppercase font-bold">
//                 Certified London Standard
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#0A2240] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-[#0A2240] text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: { scrollToService: "Rats & Mice Control" },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: { scrollToService: "Bed Bugs Control" },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#0A2240]/40" />
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#0A2240]/15">
//           <div className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl text-left">
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div>
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240]">
//                 Purley, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405025488"
//             className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left"
//           >
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="flex-grow">
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Direct Call
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240] group-hover:text-white">
//                 07405 025488
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-[#0A2240] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>

//           <a
//             href="mailto:info@pestcontrolpurley.uk"
//             className="flex items-center gap-4 bg-white/20 border border-[#0A2240]/15 p-5 rounded-xl group hover:border-[#0A2240]/40 transition-all text-left"
//           >
//             <div className="p-3 rounded-lg bg-[#0A2240]/10 text-[#0A2240]">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="flex-grow truncate">
//               <span className="block text-[10px] font-mono text-[#0A2240]/70 uppercase tracking-wider">
//                 Secure Inbound
//               </span>
//               <span className="text-sm font-semibold text-[#0A2240] truncate group-hover:text-white">
//                 info@pestcontrolpurley.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-[#0A2240] opacity-0 group-hover:opacity-100 transition-all" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-[#0A2240]/80">
//           <p className="tracking-wide">
//             Copyright © {new Date().getFullYear()} QuickShield Services. All rights
//             reserved.
//           </p>

//           <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-mono text-[#0A2240] bg-[#0A2240]/5 border border-[#0A2240]/20">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse" />
//             <span>Quickshield Services CORE v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   LUXURY ARCHITECTURAL FOOTER
============================================ */

const COMPANY = "QuickShield Services Belgravia";

const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const NAVIGATION_LINKS = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const SERVICE_LINKS = [
  {
    label: "Rats & Mice Control",
    service: "Rats & Mice",
  },
  {
    label: "Bed Bug Treatment",
    service: "Bed Bugs",
  },
  {
    label: "Wasp Nest Removal",
    service: "Wasps",
  },
  {
    label: "Carpet Moth Treatment",
    service: "Moth Treatment",
  },
];

/* ============================================
   MAIN FOOTER COMPONENT
============================================ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  /* ======================================
     BACK TO TOP
  ====================================== */

  const scrollToTop = (event) => {
    event.preventDefault();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#0A2240] text-[#F8F1E4]">

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
              "linear-gradient(90deg,#B99547 1px,transparent 1px)",
            backgroundSize: "20% 100%",
          }}
        />

        <div className="absolute -right-48 top-20 h-[650px] w-[650px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -right-28 top-40 h-[450px] w-[450px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] bg-[#B99547]/[0.035] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================
            PREMIUM EDITORIAL CTA
        ====================================== */}

        <div className="grid gap-12 border-b border-[#F8F1E4]/15 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20 lg:pb-24 lg:pt-36">

          {/* LEFT HEADING */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                QuickShield Services Belgravia
              </span>
            </div>

            <h2 className="mt-9 text-[clamp(3.2rem,6.5vw,7.5rem)] font-semibold leading-[1.03] tracking-[-0.065em]">
              Let's Protect
              <br />

              What
              <span className="font-light italic text-[#B99547]">
                {" "}Matters.
              </span>
            </h2>

            <p className="mt-8 max-w-[580px] text-base leading-8 text-[#F8F1E4]/65 sm:text-lg">
              Professional pest control enquiries
              for residential and commercial
              properties in Belgravia and London.
              Tell us about your concern and
              discuss the next steps with our team.
            </p>
          </div>

          {/* RIGHT CONTACT ACTIONS */}

          <div className="lg:pb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B99547]">
              Start a Conversation
            </span>

            <Link
              to="/contact-us"
              className="group mt-7 flex min-h-[76px] items-center justify-between gap-6 border border-[#B99547] bg-[#B99547] px-7 text-sm font-bold uppercase tracking-[0.1em] text-[#0A2240] transition-all duration-300 hover:bg-[#F8F1E4] hover:border-[#F8F1E4] sm:px-9"
            >
              Request a Callback

              <ArrowUpRight
                size={24}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href={PHONE_LINK}
              className="group mt-4 flex min-h-[76px] items-center justify-between gap-6 border border-[#F8F1E4]/25 px-7 text-sm font-bold uppercase tracking-[0.1em] text-[#F8F1E4] transition-colors duration-300 hover:border-[#B99547] hover:text-[#B99547] sm:px-9"
            >
              <span className="flex items-center gap-3">
                <Phone size={19} />

                Call Our Team
              </span>

              <ArrowUpRight
                size={23}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* ======================================
            BRAND + NAVIGATION GRID
        ====================================== */}

        <div className="grid gap-14 border-b border-[#F8F1E4]/15 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.65fr_0.85fr_1fr] lg:gap-10">

          {/* ==================================
              BRAND COLUMN
          ================================== */}

          <div className="lg:pr-7">
            <Link
              to="/"
              aria-label={`${COMPANY} Home`}
              className="inline-block"
            >
              <span className="block text-[clamp(2.2rem,3.2vw,3.4rem)] font-semibold leading-none tracking-[-0.065em]">
                QUICK
                <span className="text-[#B99547]">
                  SHIELD
                </span>
              </span>

              <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.19em] text-[#B99547]">
                Services Belgravia
              </span>
            </Link>

            <p className="mt-8 max-w-[310px] text-sm leading-8 text-[#F8F1E4]/60">
              {COMPANY} provides pest control
              services for residential and
              commercial properties in
              Belgravia, London.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#F8F1E4]/15 pt-6">
              <ShieldCheck
                size={20}
                className="shrink-0 text-[#B99547]"
              />

              <span className="text-xs font-semibold leading-6 text-[#F8F1E4]/65">
                A considered approach to
                pest management.
              </span>
            </div>
          </div>

          {/* ==================================
              QUICK LINKS
          ================================== */}

          <div>
            <h3 className="mb-8 text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-5"
            >
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-[#F8F1E4]/70 transition-colors duration-300 hover:text-[#B99547]"
                >
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#B99547] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================================
              SERVICE LINKS
          ================================== */}

          <div>
            <h3 className="mb-8 text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Our Services
            </h3>

            <nav
              aria-label="Pest control services"
              className="flex flex-col gap-5"
            >
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to="/services"
                  state={{
                    scrollToService: item.service,
                  }}
                  className="group inline-flex w-fit items-center gap-3 text-sm font-medium leading-6 text-[#F8F1E4]/70 transition-colors duration-300 hover:text-[#B99547]"
                >
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#B99547] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#B99547]/60 pb-2 text-xs font-bold uppercase tracking-[0.11em] text-[#B99547] transition-colors duration-300 hover:text-[#F8F1E4]"
            >
              View All Services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* ==================================
              CONTACT DETAILS
          ================================== */}

          <div>
            <h3 className="mb-8 text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              Get in Touch
            </h3>

            <div className="space-y-7">

              {/* ADDRESS */}

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#B99547]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#F8F1E4]">
                    Our Location
                  </p>

                  <address className="mt-2 text-sm not-italic leading-7 text-[#F8F1E4]/65">
                    {ADDRESS}
                  </address>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#B99547]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#F8F1E4]">
                    Phone
                  </p>

                  <a
                    href={PHONE_LINK}
                    className="mt-2 block text-sm text-[#F8F1E4]/65 transition-colors duration-300 hover:text-[#B99547]"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* ONLINE ENQUIRIES */}

              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#B99547]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#F8F1E4]">
                    Online Enquiries
                  </p>

                  <Link
                    to="/contact-us"
                    className="group mt-2 inline-flex items-center gap-2 text-sm text-[#F8F1E4]/65 transition-colors duration-300 hover:text-[#B99547]"
                  >
                    Contact Form

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================
            LARGE BRAND SIGNATURE
        ====================================== */}

        <div
          aria-hidden="true"
          className="overflow-hidden border-b border-[#F8F1E4]/15 py-9 sm:py-12"
        >
          <span className="block whitespace-nowrap text-center text-[clamp(3.8rem,10.3vw,11rem)] font-bold leading-none tracking-[-0.085em] text-[#F8F1E4]/[0.075]">
            QUICKSHIELD
          </span>
        </div>

        {/* ======================================
            COPYRIGHT BAR
        ====================================== */}

        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">

          <p className="text-xs leading-6 text-[#F8F1E4]/50">
            © {currentYear} {COMPANY}.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#F8F1E4]/55">

            <span>Belgravia, London</span>

            <span className="h-1 w-1 rounded-full bg-[#B99547]" />

            <Link
              to="/contact-us"
              className="transition-colors duration-300 hover:text-[#B99547]"
            >
              Contact Us
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#B99547]" />

            <a
              href="#top"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#B99547]"
            >
              Back to Top

              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
