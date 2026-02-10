// "use client";
// import { RxCrossCircled } from "react-icons/rx";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     question: "What makes Next.js great for modern web development?",
//     answer:
//       "Next.js combines React with server-side rendering, static generation, and API routes — giving your website fast loading, better SEO, and exceptional scalability.",
//   },
//   {
//     question: "Why choose Next.js for frontend development?",
//     answer:
//       "It simplifies performance optimization, routing, and deployment. Your site runs faster, smoother, and more efficiently across devices.",
//   },
//   {
//     question: "How does responsive design work in your projects?",
//     answer:
//       "Using Tailwind CSS and fluid grids, I ensure your site looks perfect on every screen — from phones to large displays.",
//   },
//   {
//     question: "Can you integrate animations in my website?",
//     answer:
//       "Absolutely! I use Framer Motion and modern CSS transitions to create smooth, elegant animations that enhance UX without slowing performance.",
//   },
//   {
//     question: "How secure are websites built with Next.js?",
//     answer:
//       "Next.js provides server-side rendering and API security by default, reducing vulnerabilities and protecting your data.",
//   },
//   {
//     question: "Do you design from scratch or use templates?",
//     answer:
//       "Every design is custom-built for your brand. I use Tailwind and Shadcn UI for flexibility and unique layouts.",
//   },
//   {
//     question: "Can you connect my site to a database or CMS?",
//     answer:
//       "Yes — I can connect Next.js sites with MongoDB, Supabase, or Sanity CMS for dynamic content and real-time updates.",
//   },
//   {
//     question: "What’s the performance advantage of Next.js?",
//     answer:
//       "Next.js pre-renders pages for speed and uses smart code splitting — ensuring lightning-fast load times even on slower networks.",
//   },
//   {
//     question: "Do you also offer maintenance and updates?",
//     answer:
//       "Yes, I provide ongoing support, updates, and improvements so your website stays fast, secure, and modern.",
//   },
//   {
//     question: "How can I get started with you on a new project?",
//     answer:
//       "Just visit my contact page or use the message form — I’ll get back to you quickly to discuss your goals and start planning your project.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const refs = useRef([]);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//     setTimeout(() => {
//       refs.current[index]?.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }, 300);
//   };

//   return (
//     <section className="relative py-30 px-6 bg-linear-to-t from-black/10 via-blue-950/5 to-black text-gray-200">
//       {/* Subtle Gradient Light */}
//       <div className="absolute inset-0 bg-linear-to-tr from-indigo-400/30 via-purple-600/10 to-cyan-500/10 blur-3xl opacity-30 -z-10" />

//       <div className="max-w-5xl mx-auto">
//         {/* Section Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.09 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-6 mt-15 bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-blue-600 to-purple-500"
//         >
//           Frequently Asked Questions
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.04, duration: 0.07 }}
//           className="text-center text-gray-300 mb-16 text-lg max-w-3xl mx-auto"
//         >
//           Here are some of the most common questions from my clients about
//           Next.js frontend development and design.
//         </motion.p>

//         {/* Accordion List */}
//         <div className="space-y-5">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               ref={(el) => (refs.current[index] = el)}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.02 }}
//               className="bg-slate-900/35 border border-gray-800 hover:border-gray-600 rounded-sm shadow-md overflow-hidden transition-all cursor-pointer"
//             >
//               {/* Accordion Header */}
//               <button
//                 onClick={() => handleToggle(index)}
//                 className="w-full flex justify-between items-center pl-6 pr-7 py-4 text-left cursor-pointer focus:outline-none"
//               >
//                 <div className="flex items-center gap-5">
//                   <HelpCircle size={22} className="text-gray-500 shrink-0" />
//                   <span className="font-medium text-gray-300 text-sm cursor-pointer md:text-base ">
//                     {faq.question}
//                   </span>
//                 </div>
//                 {openIndex === index ? (
//                   <RxCrossCircled size={24} className="text-blue-500" />
//                 ) : (
//                   <ChevronDown size={22} className="text-blue-300" />
//                 )}
//               </button>

//               {/* Accordion Content */}
//               <AnimatePresence initial={false}>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.03, ease: "easeInOut" }}
//                     className="overflow-hidden pl-14 pr-5 pb-6 text-slate-300"
//                   >
//                     <p className="border border-gray-700 bg-gray-800/40 mt-3 py-3 px-5  rounded-sm text-base leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What makes Next.js great for modern web development?",
    answer:
      "Next.js combines React with server-side rendering, static generation, and API routes — giving your website fast loading, better SEO, and exceptional scalability.",
  },
  {
    question: "Why choose Next.js for frontend development?",
    answer:
      "It simplifies performance optimization, routing, and deployment. Your site runs faster, smoother, and more efficiently across devices.",
  },
  {
    question: "How does responsive design work in your projects?",
    answer:
      "Using Tailwind CSS and fluid grids, I ensure your site looks perfect on every screen — from phones to large displays.",
  },
  {
    question: "Can you integrate animations in my website?",
    answer:
      "Absolutely! I use Framer Motion and modern CSS transitions to create smooth, elegant animations that enhance UX without slowing performance.",
  },
  {
    question: "How secure are websites built with Next.js?",
    answer:
      "Next.js provides server-side rendering and API security by default, reducing vulnerabilities and protecting your data.",
  },
  {
    question: "Do you design from scratch or use templates?",
    answer:
      "Every design is custom-built for your brand. I use Tailwind and Shadcn UI for flexibility and unique layouts.",
  },
  {
    question: "Can you connect my site to a database or CMS?",
    answer:
      "Yes — I can connect Next.js sites with MongoDB, Supabase, or Sanity CMS for dynamic content and real-time updates.",
  },
  {
    question: "What’s the performance advantage of Next.js?",
    answer:
      "Next.js pre-renders pages for speed and uses smart code splitting — ensuring lightning-fast load times even on slower networks.",
  },
  {
    question: "Do you also offer maintenance and updates?",
    answer:
      "Yes, I provide ongoing support, updates, and improvements so your website stays fast, secure, and modern.",
  },
  {
    question: "How can I get started with you on a new project?",
    answer:
      "Just visit my contact page or use the message form — I’ll get back to you quickly to discuss your goals and start planning your project.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));

    setTimeout(() => {
      refs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 350);
  };

  return (
    <section className="relative py-28 px-6 bg-linear-to-t from-black/10 via-blue-950/5 to-black text-gray-200">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-400/30 via-purple-600/10 to-cyan-500/10 blur-3xl opacity-30 -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 mt-14 bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-blue-600 to-purple-500"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-16 text-lg max-w-3xl mx-auto"
        >
          Here are some of the most common questions from my clients about
          Next.js frontend development and design.
        </motion.p>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 border border-gray-800 hover:border-gray-600 rounded-md shadow-md overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center pl-6 pr-7 py-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <HelpCircle size={22} className="text-gray-500 shrink-0" />
                  <span className="font-medium text-gray-300 text-sm md:text-base">
                    {faq.question}
                  </span>
                </div>

                {/* Rotating Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <ChevronDown
                    size={23}
                    className={
                      openIndex === index ? "text-blue-600" : "text-blue-400"
                    }
                  />
                </motion.div>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden pl-14 pr-6 pb-6 text-slate-300"
                  >
                    <motion.p
                      layout
                      className="border border-gray-700 bg-gray-800/40 mt-3 py-4 px-6 rounded-md text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
