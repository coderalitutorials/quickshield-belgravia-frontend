




// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Mail, PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control", "Bed Bugs Heat Treatment", "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment", "Rats & Mice Proofing", "Flea Eradication",
//     "Wasp & Bee Removal", "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization", "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     { question: "How quickly can your team arrive?", answer: "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately." },
//     { question: "Are your treatments safe for pets?", answer: "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations." },
//     { question: "Do you offer a guarantee?", answer: "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed." },
//     { question: "Do you serve commercial businesses?", answer: "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation." }
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const loaderToast = toast.loading("Processing your request...");
//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       toast.success(res.data.message || "Request received successfully!", { id: loaderToast });
//       setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", { id: loaderToast });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* HERO */}
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">QuickShield<br />Emergency Intake</h1>
//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">Secure your premises with London's leading rapid response pest control team.</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
          
//           {/* FORM COLUMN */}
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">Initiate Protocol</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//                 <input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               </div>
//               <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <select name="service" onChange={handleChange} value={formData.service} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white">
//                 <option value="" className="text-black">Select Service Required...</option>
//                 {services.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
//               </select>
//               <textarea name="message" rows="4" placeholder="Briefly describe the infestation..." onChange={handleChange} value={formData.message} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <button disabled={loading} className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all">
//                 {loading ? "Transmitting..." : "Dispatch Request"} <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           {/* RIGHT INFO & MAP */}
//           <div className="space-y-8">
//             {/* MAP SECTION - Purley, London */}
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe 
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
//               </iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">QuickShield Operational Data</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4"><MapPin className="text-[#0A2240]" /> <span className="font-bold">Purley & Greater London</span></div>
//                 <div className="flex items-center gap-4"><PhoneCall className="text-[#0A2240]" /> <span className="font-bold">07405 025488</span></div>
//                 <div className="flex items-center gap-4"><Clock className="text-[#0A2240]" /> <span className="font-bold">24/7 Emergency Deployment</span></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* GOOGLE SECTION */}
//         {/* <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified 5-Star Service</div>
//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">Trusted in Purley & London</h3>
//           </div>
//           <a href="#" target="_blank" className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547]">Visit Google Profile</a>
//         </section> */}


//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//   <div className="space-y-4">
//     <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//       Verified 5-Star Service
//     </div>

//     <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//       Trusted in Purley & London
//     </h3>
//   </div>

//   <a
//     href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//   >
//     Visit Google Profile
//   </a>
// </section>

//         {/* FAQ SECTION */}
//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div key={idx} className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]">
//                   {faq.question} <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>
//                 {activeFaq === idx && <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">{faq.answer}</div>}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive?",
//       answer:
//         "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately.",
//     },
//     {
//       question: "Are your treatments safe for pets?",
//       answer:
//         "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations.",
//     },
//     {
//       question: "Do you offer a guarantee?",
//       answer:
//         "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed.",
//     },
//     {
//       question: "Do you serve commercial businesses?",
//       answer:
//         "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Processing your request...");

//     try {
//       const res = await axios.post(
//         "https://quickshield-backend.vercel.app/api/contact",
//         formData
//       );

//       toast.success(res.data.message || "Request received successfully!", {
//         id: loaderToast,
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loaderToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />

//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">
//             QuickShield
//             <br />
//             Emergency Intake
//           </h1>

//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">
//             Secure your premises with London&apos;s leading rapid response pest
//             control team.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">
//               Initiate Protocol
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   value={formData.name}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   value={formData.phone}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   value={formData.email}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="postcode"
//                   placeholder="Postcode"
//                   onChange={handleChange}
//                   value={formData.postcode}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <select
//                 name="service"
//                 onChange={handleChange}
//                 value={formData.service}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white"
//               >
//                 <option value="" className="text-black">
//                   Select Service Required...
//                 </option>

//                 {services.map((s) => (
//                   <option key={s} value={s} className="text-black">
//                     {s}
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Briefly describe the infestation..."
//                 onChange={handleChange}
//                 value={formData.message}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-60"
//               >
//                 {loading ? "Transmitting..." : "Dispatch Request"}
//                 <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">
//                 QuickShield Operational Data
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <MapPin className="text-[#0A2240]" />
//                   <span className="font-bold">Purley & Greater London</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <PhoneCall className="text-[#0A2240]" />
//                   <span className="font-bold">07405 025488</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Clock className="text-[#0A2240]" />
//                   <span className="font-bold">24/7 Emergency Deployment</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//               Verified 5-Star Service
//             </div>

//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//               Trusted in Purley & London
//             </h3>
//           </div>

//           <a
//             href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//           >
//             Visit Google Profile
//           </a>
//         </section>

//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]"
//                 >
//                   {faq.question}
//                   <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>

//                 {activeFaq === idx && (
//                   <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;























import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  Plus,
  Minus,
  Send,
  ShieldCheck,
  CheckCircle2,
  MessageSquareText,
  Building2,
  SearchCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

/* ==========================================
   QUICKSHIELD SERVICES BELGRAVIA
   PREMIUM CONTACT PAGE
========================================== */

const COMPANY = "QuickShield Services Belgravia";
const PHONE = "+44 7466 501280";
const PHONE_LINK = "tel:+447466501280";

const ADDRESS =
  "35a Eaton Pl, London SW1X 8BY, United Kingdom";

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const API_URL =
  "https://quickshield-belgravia-backend-j1kk.vercel.app/api/contact";

const SERVICES = [
  "Ants Control",
  "Bed Bugs Heat Treatment",
  "Carpet Moth & Beetle Treatment",
  "Cockroach Gel Treatment",
  "Rats & Mice Proofing",
  "Flea Eradication",
  "Wasp & Bee Removal",
  "Squirrel Exclusion & Proofing",
  "Commercial Kitchen Deep Sanitization",
  "Bird Netting & Spikes Installation",
];

const FAQS = [
  {
    question: "How do I request pest control in Belgravia?",
    answer:
      "Complete our online enquiry form or call QuickShield Services Belgravia. Share your property location, the pest activity you have noticed and your preferred contact details so we can discuss the next steps.",
  },
  {
    question: "What information should I include?",
    answer:
      "Please include your postcode, the type of pest, where you have noticed activity and when the issue began. The more relevant detail you provide, the easier it is to understand your enquiry.",
  },
  {
    question: "Can you assist with commercial properties?",
    answer:
      "We welcome enquiries concerning offices, shops, restaurants and other commercial premises in Belgravia and across London. Suitable pest control options depend on the property and circumstances.",
  },
  {
    question: "Can I enquire about rats and mice?",
    answer:
      "Yes. You can contact us about signs of rats or mice, suspected access points and possible property proofing requirements.",
  },
  {
    question: "What about treatment safety?",
    answer:
      "Safety considerations vary according to the pest, treatment method and property. Tell us about children, pets and any other relevant concerns so appropriate precautions can be discussed.",
  },
  {
    question: "Do you cover other London neighbourhoods?",
    answer:
      "QuickShield Services Belgravia welcomes enquiries from Belgravia, surrounding neighbourhoods and across London. Contact us with your postcode to discuss coverage.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Describe the Concern",
    description:
      "Tell us what you have noticed, where the activity is happening and how long it has been affecting your property.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Share Your Details",
    description:
      "Provide your postcode and contact information so our team can understand your location and requirements.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Explore the Next Step",
    description:
      "We can review your enquiry and discuss suitable pest control options for your particular circumstances.",
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  service: "",
  message: "",
};

/* ==========================================
   SCROLL REVEAL
========================================== */

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === "undefined") return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight + 80) {
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
      ref={elementRef}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0)"
          : "translate3d(0,25px,0)",
        transition: "opacity 700ms ease, transform 700ms ease",
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
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#F8F1E4]/70" : "text-[#0A2240]/70"
      }`}
    >
      <span className="h-[2px] w-9 shrink-0 bg-[#B99547]" />
      {children}
    </div>
  );
}

/* ==========================================
   FORM INPUT
========================================== */

const inputClass =
  "w-full min-w-0 border-0 border-b border-[#0A2240]/20 bg-transparent px-0 py-4 text-base text-[#0A2240] outline-none transition-colors duration-300 placeholder:text-[#0A2240]/35 focus:border-[#B99547] focus:ring-0";

const labelClass =
  "block text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240]/75";

/* ==========================================
   FAQ ITEM
========================================== */

function FAQItem({ item, index, open, onToggle }) {
  return (
    <div className="border-b border-[#0A2240]/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`contact-faq-${index}`}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-5 py-7 text-left"
      >
        <span className="flex items-start gap-4">
          <span className="mt-1 text-xs font-bold text-[#B99547]">
            0{index + 1}
          </span>

          <span className="text-lg font-semibold leading-snug transition-colors group-hover:text-[#B99547] sm:text-xl">
            {item.question}
          </span>
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
            open
              ? "border-[#B99547] bg-[#B99547]"
              : "border-[#0A2240]/20"
          }`}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        id={`contact-faq-${index}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-8 pl-8 text-sm leading-8 text-[#0A2240]/70 sm:pl-10 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   MAIN CONTACT PAGE
========================================== */

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    document.title =
      "Contact QuickShield Services Belgravia | Pest Control London";
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* KEEP ORIGINAL BACKEND & PAYLOAD */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const loaderToast = toast.loading("Sending your enquiry...");

    try {
      const response = await axios.post(API_URL, formData);

      toast.success(
        response.data?.message ||
          "Your enquiry has been sent successfully.",
        { id: loaderToast }
      );

      setFormData({ ...INITIAL_FORM });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to send your enquiry. Please try again or call us.",
        { id: loaderToast }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#F8F1E4] font-sans text-[#0A2240]">
      <Toaster position="top-right" />

      {/* =====================================
          SECTION 1 — EDITORIAL HERO
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#B99547]/20"
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

            <span>Contact Us</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="pb-10 lg:pb-28">
              <Reveal>
                <Eyebrow light>
                  QuickShield Services Belgravia
                </Eyebrow>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-9 text-[clamp(3.7rem,7vw,8rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                  Let's
                  <br />
                  Start a
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    Conversation.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-10 max-w-xl border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#F8F1E4]/75 sm:text-lg">
                  Looking for pest control in Belgravia
                  or London? Tell us about your property
                  and the concern you're experiencing.
                  We're here to discuss the next steps.
                </p>
              </Reveal>

              <Reveal delay={190}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-6 bg-[#B99547] px-7 py-5 text-xs font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-colors hover:bg-[#F8F1E4]"
                  >
                    Send an Enquiry

                    <ArrowUpRight
                      size={19}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center gap-3 border border-[#F8F1E4]/25 px-7 py-5 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[#B99547] hover:text-[#B99547]"
                  >
                    <Phone size={18} />
                    Call Our Team
                  </a>
                </div>
              </Reveal>
            </div>

            {/* HERO CONTACT COMPOSITION */}

            <Reveal delay={100}>
              <div className="relative mx-auto w-full max-w-[570px] pb-16 pt-6 lg:pb-24">
                <div
                  aria-hidden="true"
                  className="absolute -right-4 top-0 h-[85%] w-[88%] border border-[#B99547]/50 sm:-right-6"
                />

                <div className="relative mr-5 border border-[#B99547]/50 bg-[#F8F1E4] p-7 text-[#0A2240] sm:mr-9 sm:p-11 lg:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center bg-[#0A2240] text-[#B99547]">
                      <MessageSquareText size={26} />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B99547]">
                      SW1X
                    </span>
                  </div>

                  <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99547]">
                    Your Enquiry Matters
                  </p>

                  <h2 className="mt-5 text-[clamp(2.1rem,3.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.045em]">
                    Tell us
                    <br />
                    what you've
                    <br />
                    <span className="font-light italic">
                      noticed.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-sm text-sm leading-8 text-[#0A2240]/70 sm:text-base">
                    Whether it's rodents, insects or
                    another pest concern, a little
                    information helps us understand
                    your situation.
                  </p>

                  <div className="mt-10 border-t border-[#0A2240]/15 pt-7">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A2240]/60">
                      Prefer to speak directly?
                    </span>

                    <a
                      href={PHONE_LINK}
                      className="mt-4 flex items-center gap-3 text-xl font-semibold transition-colors hover:text-[#B99547] sm:text-2xl"
                    >
                      <Phone size={20} className="text-[#B99547]" />
                      {PHONE}
                    </a>
                  </div>
                </div>

                <div className="relative -mt-1 ml-auto mr-0 flex w-fit items-center gap-4 bg-[#B99547] px-6 py-5 text-[#0A2240] sm:mr-0 sm:px-9">
                  <Building2 size={22} strokeWidth={1.5} />

                  <span className="text-xs font-bold uppercase tracking-[0.16em]">
                    Belgravia, London
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#F8F1E4]/15 py-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8F1E4]/55">
              Belgravia · London · United Kingdom
            </span>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B99547] hover:text-[#F8F1E4]"
            >
              Complete the Form
              <ChevronDown size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2 — CONTACT & FORM
      ===================================== */}

      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#F8F1E4] py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>01 / Make an Enquiry</Eyebrow>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <Reveal>
              <h2 className="text-[clamp(2.7rem,5vw,5.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                A simple first
                <br />
                <span className="font-light italic text-[#B99547]">
                  step towards clarity.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-md text-base leading-8 text-[#0A2240]/70">
                Share the details of your pest control
                enquiry using the form below. Our team
                can then respond to discuss your
                requirements.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            {/* LEFT — CONTACT DETAILS */}

            <Reveal>
              <div className="flex h-full flex-col bg-[#0A2240] p-8 text-[#F8F1E4] sm:p-11 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center border border-[#B99547] text-[#B99547]">
                  <Headphones size={27} strokeWidth={1.5} />
                </div>

                <h3 className="mt-12 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Reach Out.
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    We're Listening.
                  </span>
                </h3>

                <p className="mt-6 max-w-sm text-base leading-8 text-[#F8F1E4]/65">
                  Contact QuickShield Services Belgravia
                  about pest concerns affecting your
                  home or commercial property.
                </p>

                <div className="mt-12 space-y-0">
                  <a
                    href={PHONE_LINK}
                    className="group flex items-start gap-4 border-t border-[#F8F1E4]/20 py-8"
                  >
                    <Phone
                      size={22}
                      className="mt-1 shrink-0 text-[#B99547]"
                    />

                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#F8F1E4]/55">
                        Telephone
                      </span>

                      <span className="mt-3 block text-lg font-semibold transition-colors group-hover:text-[#B99547] sm:text-xl">
                        {PHONE}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto mt-1 shrink-0 text-[#B99547]"
                    />
                  </a>

                  <div className="flex items-start gap-4 border-t border-[#F8F1E4]/20 py-8">
                    <MapPin
                      size={22}
                      className="mt-1 shrink-0 text-[#B99547]"
                    />

                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#F8F1E4]/55">
                        Our Address
                      </span>

                      <address className="mt-3 text-base not-italic leading-8">
                        35a Eaton Pl
                        <br />
                        London SW1X 8BY
                        <br />
                        United Kingdom
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-y border-[#F8F1E4]/20 py-8">
                    <Mail
                      size={22}
                      className="mt-1 shrink-0 text-[#B99547]"
                    />

                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#F8F1E4]/55">
                        Online Enquiries
                      </span>

                      <p className="mt-3 text-sm leading-8 text-[#F8F1E4]/80">
                        Complete the enquiry form to
                        contact our team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <div className="flex items-start gap-4 border-l-2 border-[#B99547] bg-[#F8F1E4]/[0.06] p-6">
                    <ShieldCheck
                      size={23}
                      className="shrink-0 text-[#B99547]"
                    />

                    <p className="text-sm leading-7 text-[#F8F1E4]/75">
                      Include your property postcode
                      and a description of the pest
                      activity to help us understand
                      your enquiry.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — ENQUIRY FORM */}

            <Reveal delay={100}>
              <div className="relative h-full border border-[#0A2240]/15 bg-[#F8F1E4] p-6 sm:p-10 lg:p-12">
                <div className="absolute left-0 top-0 h-1 w-32 bg-[#B99547]" />

                <div className="mb-12 flex items-start justify-between gap-5 border-b border-[#0A2240]/15 pb-9">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                      Private Enquiry Form
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      How can we help?
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#0A2240]/60">
                      Please complete the fields below.
                      Fields marked * are required.
                    </p>
                  </div>

                  <Send
                    size={29}
                    strokeWidth={1.3}
                    className="hidden shrink-0 text-[#B99547] sm:block"
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-9">
                  <div className="grid gap-9 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={labelClass}
                      >
                        Full Name *
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className={labelClass}
                      >
                        Phone Number *
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        autoComplete="tel"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-9 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className={labelClass}
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-postcode"
                        className={labelClass}
                      >
                        Property Postcode *
                      </label>

                      <input
                        id="contact-postcode"
                        name="postcode"
                        type="text"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="e.g. SW1X 8BY"
                        autoComplete="postal-code"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className={labelClass}
                    >
                      Service Required *
                    </label>

                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none pr-12`}
                      >
                        <option value="">
                          Select a pest control service
                        </option>

                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#B99547]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className={labelClass}
                    >
                      Tell Us About the Problem *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the pest activity, affected areas and any other relevant details..."
                      required
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <div className="border-t border-[#0A2240]/15 pt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-between gap-5 bg-[#0A2240] px-7 py-5 text-left text-xs font-bold uppercase tracking-[0.14em] text-[#F8F1E4] transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>
                        {loading
                          ? "Sending Your Enquiry..."
                          : "Send Your Enquiry"}
                      </span>

                      <ArrowUpRight
                        size={21}
                        className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>

                    <div className="mt-6 flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#B99547]"
                      />

                      <p className="text-xs leading-7 text-[#0A2240]/65">
                        Your information will be used
                        to respond to your pest control
                        enquiry.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 3 — GOOGLE MAP
          NO EXTERNAL MAP BUTTON
      ===================================== */}

      <section className="bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <Reveal>
              <Eyebrow light>
                02 / Our Belgravia Location
              </Eyebrow>

              <h2 className="mt-9 text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[1.08] tracking-[-0.05em]">
                Rooted in
                <br />
                <span className="font-light italic text-[#B99547]">
                  Belgravia.
                </span>
                <br />
                Serving London.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-lg lg:ml-auto">
                <p className="text-base leading-8 text-[#F8F1E4]/70">
                  QuickShield Services Belgravia is
                  located at 35a Eaton Pl, London
                  SW1X 8BY. We welcome enquiries
                  about pest control for residential
                  and commercial properties in
                  Belgravia and across London.
                </p>

                <div className="mt-8 flex items-start gap-4 border-t border-[#F8F1E4]/20 pt-7">
                  <MapPin
                    size={23}
                    className="mt-1 shrink-0 text-[#B99547]"
                  />

                  <address className="text-base not-italic leading-8 text-[#F8F1E4]">
                    {ADDRESS}
                  </address>
                </div>
              </div>
            </Reveal>
          </div>

          {/* EMBEDDED MAP */}

          <Reveal className="mt-14">
            <div className="relative border border-[#B99547]/45 bg-[#B99547] p-2 sm:p-3">
              <iframe
                title="QuickShield Services Belgravia location map"
                src={MAP_EMBED}
                className="block h-[360px] w-full border-0 sm:h-[470px] lg:h-[550px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-col gap-5 border-t border-[#F8F1E4]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#B99547]"
                />

                <span className="text-sm leading-7 text-[#F8F1E4]/80">
                  {ADDRESS}
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B99547]">
                Belgravia · SW1X
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          SECTION 4 — GETTING STARTED
      ===================================== */}

      <section className="bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>03 / The Enquiry Process</Eyebrow>

            <h2 className="mt-9 max-w-4xl text-[clamp(2.8rem,5vw,5.7rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Three simple steps.
              <br />
              <span className="font-light italic text-[#F8F1E4]">
                One clear starting point.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 80}>
                  <div className="group flex h-full flex-col border border-[#0A2240]/15 bg-[#F8F1E4] p-8 transition-[background-color,color,transform] duration-300 hover:-translate-y-2 hover:bg-[#0A2240] hover:text-[#F8F1E4] sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em] text-[#B99547]">
                        {step.number}
                      </span>

                      <Icon
                        size={29}
                        strokeWidth={1.5}
                        className="text-[#B99547]"
                      />
                    </div>

                    <h3 className="mt-20 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-[#0A2240]/70 group-hover:text-[#F8F1E4]/75">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 5 — FAQ
      ===================================== */}

      <section className="bg-[#F8F1E4] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow>04 / Common Questions</Eyebrow>

                <h2 className="mt-9 text-[clamp(2.8rem,4.8vw,5.3rem)] font-semibold leading-[1.12] tracking-[-0.05em]">
                  Questions
                  <br />
                  before you
                  <br />
                  <span className="font-light italic text-[#B99547]">
                    get in touch?
                  </span>
                </h2>

                <p className="mt-8 max-w-sm text-base leading-8 text-[#0A2240]/70">
                  Explore answers to common enquiries
                  about contacting QuickShield Services
                  Belgravia and discussing pest
                  control assistance.
                </p>

                <a
                  href={PHONE_LINK}
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#B99547] pb-3 text-xs font-bold uppercase tracking-[0.13em] transition-colors hover:text-[#B99547]"
                >
                  <Phone size={18} />
                  Speak to Our Team

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-t border-[#0A2240]/15">
                {FAQS.map((item, index) => (
                  <FAQItem
                    key={item.question}
                    item={item}
                    index={index}
                    open={activeFaq === index}
                    onToggle={() =>
                      setActiveFaq(
                        activeFaq === index ? null : index
                      )
                    }
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 6 — FINAL CTA
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full border border-[#B99547]/15"
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow light>
              QuickShield Services Belgravia
            </Eyebrow>

            <h2 className="mt-10 max-w-[1100px] text-[clamp(3.1rem,6.5vw,7.5rem)] font-semibold leading-[1.05] tracking-[-0.06em]">
              Let's Find
              <br />
              <span className="font-light italic text-[#B99547]">
                the Right
              </span>
              <br />
              Next Step.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 flex flex-col gap-10 border-t border-[#F8F1E4]/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-8 text-[#F8F1E4]/70">
                From rats and mice to bed bugs,
                cockroaches and other pest concerns,
                contact QuickShield Services Belgravia
                to discuss your home or business
                pest control requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_LINK}
                  className="group inline-flex items-center gap-4 bg-[#B99547] px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0A2240] transition-colors hover:bg-[#F8F1E4]"
                >
                  <Phone size={18} />
                  Call {PHONE}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-4 border border-[#F8F1E4]/30 px-7 py-5 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#B99547] hover:text-[#B99547]"
                >
                  Send an Enquiry

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
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

