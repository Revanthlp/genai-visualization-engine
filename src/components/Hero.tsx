"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center grid-bg pt-40"
    >

      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >

          <p className="text-green-400 mb-6 text-xl font-semibold">
            AI Powered Content Automation
          </p>

          <h1 className="title">
            Build Stunning <br />

            <span className="gradient-text">
              AI Product Visuals
            </span>

            <br />

            From CAD Models
          </h1>

          <p className="subtitle mt-10 max-w-4xl">
            Generate photorealistic renders,
            cinematic advertisements,
            omnichannel assets,
            AR experiences,
            and AI-powered product campaigns
            in seconds.
          </p>

          {/* BUTTONS */}

          <div className="flex gap-8 mt-16">

            <button className="btn">
              Generate Content
            </button>

            <button className="px-10 py-4 rounded-2xl border border-gray-700 hover:border-purple-500 transition text-lg">
              View Workflow
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}