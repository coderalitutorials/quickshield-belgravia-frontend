// import React from "react";
// import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

// const authenticReviews = [
//   {
//     id: 1,
//     name: "Sir Alistair Vance",
//     role: "Mayfair Property Resident",
//     image: "/images/reviews/user1.webp",
//     text: "Absolutely fantastic response from PrimeShield. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently. Very clean work.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 2,
//     name: "Marcus Thorne",
//     role: "Director, Thorne Hospitality",
//     image: "/images/reviews/user2.webp",
//     text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and full transparency.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 3,
//     name: "Lord Dominic West",
//     role: "Belgravia Estate Landlord",
//     image: "/images/reviews/user6.webp",
//     text: "Had a highly persistent bed bug outbreak across two flat layouts. PrimeShield resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 4,
//     name: "Lady Eleanor Sterling",
//     role: "Head of Operations, Sterling Logistics",
//     image: "/images/reviews/user3.webp",
//     text: "Outstanding commercial contract execution. PrimeShield setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind for our management.",
//     rating: "5.0 Verified",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section className="relative py-24 md:py-32 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 isolate">
      
//       {/* Lightweight performance-friendly background layer */}
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none opacity-[0.03]" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Header Block */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
//           <div className="space-y-4 max-w-xl text-left">
//             <div className="inline-flex items-center gap-2 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-md">
//               <MessageSquare className="w-3.5 h-3.5 text-[#C5A86B]" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Client Testimonials
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A2240] uppercase leading-none">
//               RELIABILITY <br />
//               <span className="text-white bg-[#0A2240] px-3.5 py-1 rounded-xl inline-block mt-2 shadow-lg">
//                 WITHOUT COMPROMISE
//               </span>
//             </h2>
//           </div>

//           <div className="max-w-sm text-left md:text-right">
//             <p className="text-[#0A2240]/90 text-sm leading-relaxed font-bold">
//               Read verified client reports from premium residential quarters and commercial hubs across London.
//             </p>
//           </div>
//         </div>

//         {/* Stable Masonry Grid - Transforms removed to stop layout shaking */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
//           {/* Column 1 */}
//           <div className="grid grid-cols-1 gap-6 w-full">
//             {authenticReviews.filter((_, i) => i % 2 === 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//           {/* Column 2 - translate-y hata kar clean padding lga di hai taake height rigid rahe */}
//           <div className="grid grid-cols-1 gap-6 w-full md:pt-12">
//             {authenticReviews.filter((_, i) => i % 2 !== 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// function ReviewCard({ review }) {
//   return (
//     // will-change-transform hata diya hai aur shadows ko light weight rakha hai
//     <div className="w-full bg-[#0A2240] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between shadow-lg relative overflow-hidden group transition-transform duration-300 ease-out hover:-translate-y-1 backface-hidden">
      
//       <Quote className="absolute right-6 top-6 w-24 h-24 text-white/[0.015] pointer-events-none select-none" strokeWidth={1} />

//       <div>
//         {/* Card Header: Stars Line */}
//         <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="w-4 h-4 fill-[#C5A86B] text-[#C5A86B]"
//                 strokeWidth={0}
//               />
//             ))}
//           </div>

//           <span className="text-[10px] font-mono font-black tracking-wider text-[#C5A86B] bg-white/5 border border-white/10 px-3 py-0.5 rounded-md">
//             {review.rating}
//           </span>
//         </div>

//         {/* Real Text Review Block */}
//         <div className="relative text-left mb-8 z-10">
//           <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
//             "{review.text}"
//           </p>
//         </div>
//       </div>

//       {/* Profile Signature Line */}
//       <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
//         <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-0.5 shrink-0">
//           <img
//             src={review.image}
//             alt={review.name}
//             className="w-full h-full object-cover rounded-lg grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-300"
//             loading="lazy"
//           />
//         </div>

//         <div className="text-left min-w-0 flex-grow">
//           <div className="flex items-center gap-1.5">
//             <h4 className="text-sm font-black text-white uppercase tracking-wider truncate">
//               {review.name}
//             </h4>
//             <ShieldCheck className="w-4 h-4 text-[#C5A86B] shrink-0" />
//           </div>

//           <span className="text-[11px] font-semibold text-slate-400 block mt-0.5 truncate">
//             {review.role}
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Quote,
//   ArrowUpRight,
//   ArrowRight,
//   Star,
// } from "lucide-react";

// // Sample testimonials for design preview.
// // Replace with genuine customer reviews before publishing.

// const reviews = [
//   {
//     id: 1,
//     name: "James Mitchell",
//     location: "Notting Hill, London",
//     service: "Rodent Control",
//     text:
//       "We had been hearing noises in our kitchen for several nights. The team took the time to understand the problem, explained the possible entry points and guided us through the next steps. The whole experience felt professional and reassuring.",
//   },
//   {
//     id: 2,
//     name: "Sophie Bennett",
//     location: "West London",
//     service: "Bed Bug Treatment",
//     text:
//       "Discovering signs of bed bugs was incredibly stressful. I appreciated the clear communication and the careful approach to assessing the situation. Everything was explained in a way that made the process much easier to understand.",
//   },
//   {
//     id: 3,
//     name: "Oliver Harrison",
//     location: "London",
//     service: "Wasp Control",
//     text:
//       "We noticed wasps repeatedly entering an area near our roof. The advice was clear, the process was straightforward and our concerns were taken seriously. A very positive experience from the initial enquiry onwards.",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section
//       aria-labelledby="testimonials-heading"
//       className="relative isolate overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/15" />
//         <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#B99547]/10" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Header */}
//         <div className="mb-14 grid items-end gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
//           <div>
//             <div className="mb-6 flex items-center gap-4">
//               <span className="h-px w-11 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#96733B]">
//                 Customer Experiences
//               </span>
//             </div>

//             <h2
//               id="testimonials-heading"
//               className="max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#0A2240]"
//             >
//               Words that
//               <br />
//               <span className="font-serif font-normal italic text-[#B99547]">
//                 speak volumes.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-3">
//             <p className="max-w-md text-base leading-8 text-[#536071]">
//               A selection of example customer experiences illustrating
//               the care, communication and attention we aim to bring
//               to pest control services in Notting Hill and London.
//             </p>
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
//           {reviews.map((review, index) => (
//             <article
//               key={review.id}
//               className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0A2240]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B99547]/50 hover:shadow-[0_20px_50px_rgba(10,34,64,0.08)] sm:rounded-[28px] sm:p-9"
//             >
//               {/* Top gold line */}
//               <div className="absolute inset-x-0 top-0 h-1 bg-[#B99547]" />

//               {/* Quote icon and number */}
//               <div className="mb-9 flex items-start justify-between">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2240] text-[#D8BA7C] transition-colors duration-300 group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
//                   <Quote size={25} strokeWidth={1.5} />
//                 </div>

//                 <span className="font-serif text-3xl italic text-[#B99547]/60">
//                   0{index + 1}
//                 </span>
//               </div>

//               {/* Service label */}
//               <div className="mb-5">
//                 <span className="inline-flex rounded-full border border-[#B99547]/30 bg-[#B99547]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#96733B]">
//                   {review.service}
//                 </span>
//               </div>

//               {/* Review text */}
//               <blockquote className="flex-1">
//                 <p className="text-base font-medium leading-8 text-[#0A2240]/85 sm:text-lg">
//                   “{review.text}”
//                 </p>
//               </blockquote>

//               {/* Customer details */}
//               <div className="mt-10 border-t border-[#0A2240]/10 pt-7">
//                 <div className="flex items-center gap-4">
//                   {/* Initials avatar */}
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0E8D8] text-sm font-bold text-[#0A2240]">
//                     {review.name
//                       .split(" ")
//                       .map((word) => word[0])
//                       .slice(0, 2)
//                       .join("")}
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-bold tracking-tight text-[#0A2240]">
//                       {review.name}
//                     </h3>

//                     <p className="mt-1 text-xs text-[#647080]">
//                       {review.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 flex flex-col gap-7 border-t border-[#0A2240]/15 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
//           <div>
//             <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#96733B]">
//               QuickShield Services Notting Hill
//             </span>

//             <p className="mt-2 text-xl font-semibold tracking-tight text-[#0A2240] sm:text-2xl">
//               Need professional pest control assistance?
//             </p>
//           </div>

//           <Link
//             to="/contact-us"
//             className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0A2240] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
//           >
//             Contact QuickShield

//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



















import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Quote,
  ArrowUpRight,
  ArrowRight,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";

/* ============================================
   QUICKSHIELD SERVICES BELGRAVIA
   LUXURY EDITORIAL TESTIMONIALS SHOWCASE
============================================ */

/*
  DESIGN PREVIEW ONLY

  These are fictional example testimonials.
  Replace them with genuine customer reviews
  and obtain permission before publishing
  identifiable customer information.
*/

const REVIEWS = [
  {
    id: 1,
    name: "James Mitchell",
    location: "Belgravia, London",
    service: "Rodent Control",
    text:
      "We had been hearing noises in our kitchen for several nights. The team took the time to understand the problem, explained the possible entry points and guided us through the next steps. The whole experience felt professional and reassuring.",
  },
  {
    id: 2,
    name: "Sophie Bennett",
    location: "Central London",
    service: "Bed Bug Treatment",
    text:
      "Discovering signs of bed bugs was incredibly stressful. I appreciated the clear communication and the careful approach to assessing the situation. Everything was explained in a way that made the process much easier to understand.",
  },
  {
    id: 3,
    name: "Oliver Harrison",
    location: "London",
    service: "Wasp Control",
    text:
      "We noticed wasps repeatedly entering an area near our roof. The advice was clear, the process was straightforward and our concerns were taken seriously. A very positive experience from the initial enquiry onwards.",
  },
];

/* ============================================
   SMALL EDITORIAL REVIEW
============================================ */

function EditorialReview({ review, index }) {
  return (
    <article
      data-belgravia-testimonial-reveal
      className="belgravia-testimonial-reveal group relative border-b border-[#F8F1E4]/15 py-9 first:pt-0 last:border-b-0 last:pb-0 sm:py-11"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
          {review.service}
        </span>

        <span className="font-serif text-3xl italic leading-none text-[#B99547]/45">
          0{index + 1}
        </span>
      </div>

      <blockquote className="mt-7">
        <p className="max-w-[570px] text-[clamp(1.15rem,1.7vw,1.55rem)] font-normal leading-[1.65] tracking-[-0.015em] text-[#F8F1E4]/85">
          “{review.text}”
        </p>
      </blockquote>

      <div className="mt-8 flex items-center gap-4">
        <span className="h-px w-8 bg-[#B99547]" />

        <div>
          <p className="text-sm font-semibold text-[#F8F1E4]">
            {review.name}
          </p>

          <p className="mt-1 text-xs text-[#F8F1E4]/45">
            {review.location}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ============================================
   MAIN COMPONENT
============================================ */

export default function PesSaveTestimonials() {
  const sectionRef = useRef(null);

  /* ======================================
     SCROLL REVEAL
  ====================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-belgravia-testimonial-reveal]"
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
          "belgravia-testimonial-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "belgravia-testimonial-visible"
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
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#0A2240] py-24 text-[#F8F1E4] sm:py-32 lg:py-40"
    >
      {/* ======================================
          ANIMATION STYLES
      ====================================== */}

      <style>{`
        .belgravia-testimonial-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 800ms cubic-bezier(.2,.75,.2,1),
            transform 800ms cubic-bezier(.2,.75,.2,1);
        }

        .belgravia-testimonial-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .belgravia-testimonial-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ======================================
          BACKGROUND ARCHITECTURAL DETAILS
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

        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -right-28 -top-28 h-[430px] w-[430px] rounded-full border border-[#B99547]/10" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] bg-[#B99547]/[0.035] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <div
          data-belgravia-testimonial-reveal
          className="belgravia-testimonial-reveal mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                Customer Experiences
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="mt-9 text-[clamp(3rem,5.6vw,6.2rem)] font-semibold leading-[1.07] tracking-[-0.055em]"
            >
              The Value
              <br />

              of Being
              <br />

              <span className="font-light italic text-[#B99547]">
                Understood.
              </span>
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[500px] border-l-2 border-[#B99547] pl-6 text-base leading-8 text-[#F8F1E4]/65 sm:text-lg">
              Clear communication, careful
              consideration and a professional
              approach are important parts
              of the pest control experience
              we aim to provide across
              Belgravia and London.
            </p>

            <div className="mt-8 flex items-center gap-3 pl-6">
              <ShieldCheck
                size={19}
                className="text-[#B99547]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F8F1E4]/55">
                QuickShield Services Belgravia
              </span>
            </div>
          </div>
        </div>

        {/* ======================================
            EDITORIAL TESTIMONIAL LAYOUT
        ====================================== */}

        <div className="grid gap-14 border-t border-[#F8F1E4]/15 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-20">

          {/* ==================================
              LEFT FEATURED QUOTE PANEL
          ================================== */}

          <div
            data-belgravia-testimonial-reveal
            className="belgravia-testimonial-reveal relative lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative border border-[#B99547]/35 p-8 sm:p-11 lg:p-12">

              {/* Decorative corner accents */}

              <span className="absolute -left-px -top-px h-16 w-16 border-l-2 border-t-2 border-[#B99547]" />

              <span className="absolute -bottom-px -right-px h-16 w-16 border-b-2 border-r-2 border-[#B99547]" />

              <Quote
                size={55}
                strokeWidth={1}
                className="text-[#B99547]"
              />

              <span className="mt-10 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#B99547]">
                Our Approach
              </span>

              <p className="mt-6 max-w-[470px] font-serif text-[clamp(1.8rem,3vw,3.2rem)] italic leading-[1.3] tracking-[-0.035em] text-[#F8F1E4]">
                “Good service begins with
                listening, understanding
                and communicating clearly.”
              </p>

              <div className="mt-10 border-t border-[#F8F1E4]/15 pt-7">
                <span className="text-sm font-semibold text-[#F8F1E4]">
                  { "QuickShield Services Belgravia" }
                </span>

                <p className="mt-2 text-xs uppercase tracking-[0.13em] text-[#B99547]">
                  Our Service Philosophy
                </p>
              </div>
            </div>

            {/* Decorative caption */}

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B99547]/60" />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#F8F1E4]/40">
                A Considered Approach
              </span>
            </div>
          </div>

          {/* ==================================
              RIGHT CUSTOMER EXPERIENCE LIST
          ================================== */}

          <div>
            <div className="mb-8 flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <MessageSquareQuote
                  size={20}
                  className="text-[#B99547]"
                />

                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F8F1E4]">
                  Experience Examples
                </h3>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#B99547]">
                Design Preview
              </span>
            </div>

            <div className="border-t border-[#F8F1E4]/15 pt-10">
              {REVIEWS.map((review, index) => (
                <EditorialReview
                  key={review.id}
                  review={review}
                  index={index}
                />
              ))}
            </div>

            <p className="mt-10 border-l border-[#B99547]/50 pl-5 text-xs leading-6 text-[#F8F1E4]/45">
              The experiences shown above are fictional
              examples for design preview purposes only,
              not verified customer testimonials.
              Replace them with genuine reviews
              before publishing this section.
            </p>
          </div>
        </div>

        {/* ======================================
            BOTTOM CONTACT STRIP
        ====================================== */}

        <div
          data-belgravia-testimonial-reveal
          className="belgravia-testimonial-reveal mt-20 flex flex-col gap-9 border-t border-[#F8F1E4]/15 pt-10 lg:mt-24 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B99547]">
              QuickShield Services Belgravia
            </span>

            <h3 className="mt-4 text-[clamp(1.7rem,2.7vw,2.8rem)] font-semibold tracking-[-0.04em]">
              Need professional pest control assistance?
            </h3>
          </div>

          <Link
            to="/contact-us"
            className="group inline-flex min-h-[62px] w-fit items-center justify-center gap-5 bg-[#B99547] px-8 text-xs font-bold uppercase tracking-[0.13em] text-[#0A2240] transition-colors duration-300 hover:bg-[#F8F1E4]"
          >
            Contact QuickShield

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
