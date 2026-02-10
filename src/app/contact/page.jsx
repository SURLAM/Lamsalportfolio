
"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiUser,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("success");
      e.target.reset();
       if (result.success) {
         router.push("/"); // Redirect to home page
       }
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-900/10 via-gray-800/20 to-blue-900/10 backdrop-blur-xl pt-28 pb-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 "
      >
        {/* LEFT — CONTACT DETAILS */}
        <div className="bg-linear-to-b from-blue-800/10 via-indigo-950/10 to-blue-800/10 backdrop-blur-2xl  rounded-sm p-15 shadow-xl ">
          <h2 className="text-4xl font-semi text-blue-200 mb-6">
            Contact <span className="text-blue-400">Details</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I am available for freelance work, collaborations, or full frontend
            projects using
            <span className="text-blue-400 font-medium">
              {" "}
              Next.js, React.js, and Tailwind CSS
            </span>
            . Feel free to reach out anytime.
          </p>

          <div className="space-y-6 mt-8">
            {/* EMAIL */}
            <div className="flex items-center gap-4 text-stone-300">
              <FiMail size={24} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium">info@sureshlamsal.com</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 text-stone-300">
              <FiPhone size={24} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-medium">+1 416 876 4277</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 text-stone-300">
              <FiMapPin size={24} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg font-medium">
                  Vancouver, British Columbia, Canada
                </p>
              </div>
            </div>

            {/* WEBSITE */}
            <div className="flex items-center gap-4 text-stone-300">
              <FiGlobe size={24} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Website</p>
                <p className="text-lg font-medium">www.sureshlamsal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="bg-linear-to-b from-blue-900/20 via-indigo-900/10 to-blue-900/20 backdrop-blur-2xl  rounded-sm p-8 ">
          <h2 className="text-4xl font-semi text-blue-200 mb-6 pt-6 pb-2">
            Send Me a <span className="text-blue-400 ">Message</span>
          </h2>

          {status === "success" && (
            <p className="mb-5 p-4 rounded-sm text-green-400 bg-green-800/40 border border-green-600">
              ✔ Congratulations ! Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="mb-4 p-3 rounded-xl text-red-400 bg-red-900/30 border border-red-700">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden Web3Forms values */}
            <input
              type="hidden"
              name="apikey"
              value="bd525eab-3319-4d09-80ce-7b638d25b013"
            />
            <input
              type="hidden"
              name="subject"
              value="New Message from sureshlamsal.com"
            />

            {/* NAME */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-sm bg-linear-to-b from-blue-950/10 via-gray-900/10 to-slate-950 border border-gray-600">
              <FiUser className="text-gray-400" size={20} />
              <input
                name="name"
                required
                placeholder="Your Name"
                className="bg-transparent outline-none w-full text-blue-200"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-sm bg-linear-to-b from-blue-950/10 via-indigo-900/10 to-slate-950 border border-gray-600">
              <FiMail className="text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="bg-transparent outline-none w-full text-blue-200"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex gap-3 px-4 py-3 rounded-sm bg-linear-to-b from-blue-900/10 via-gray-900/10 to-slate-950 border border-gray-600">
              <FiMessageCircle className="text-gray-400 mt-1" size={20} />
              <textarea
                name="message"
                rows="8"
                required
                placeholder="Your Message..."
                className="pb-2 bg-transparent outline-none w-full text-blue-200 resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-sm bg-linear-to-r from-blue-700/60 to-blue-700/70 text-blue-200 font-semibold flex justify-center items-center gap-2 shadow-lg "
              disabled={status === "loading"}
            >
              <FiSend />
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}



