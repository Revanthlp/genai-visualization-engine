"use client";

import { motion } from "framer-motion";

export default function Workflow() {

  const steps = [
    "CAD Upload",
    "AI Processing",
    "Scene Generation",
    "Rendering",
    "Export"
  ];

  return (
    <section
      id="workflow"
      className="section"
    >

      <h2 className="text-5xl font-bold mb-16">
        Workflow Pipeline
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {steps.map((step,index)=>(
          <motion.div
            key={index}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:index * 0.2 }}
            className="card text-center"
          >

            <h3 className="text-2xl font-bold">
              {step}
            </h3>

          </motion.div>
        ))}

      </div>

    </section>
  );
}