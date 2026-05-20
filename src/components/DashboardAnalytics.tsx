"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { day: "Mon", renders: 20 },
  { day: "Tue", renders: 45 },
  { day: "Wed", renders: 38 },
  { day: "Thu", renders: 70 },
  { day: "Fri", renders: 52 },
];

export default function DashboardAnalytics() {
  return (
    <section className="section">

      <div className="flex justify-between items-center mb-14">

        <div>

          <h2 className="text-5xl font-bold">
            AI Analytics Dashboard
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Monitor AI renders, campaign performance,
            export metrics, and platform engagement.
          </p>

        </div>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="card text-center">
          <h3 className="text-5xl font-black text-purple-400">
            248
          </h3>

          <p className="mt-4 text-gray-400">
            AI Renders
          </p>
        </div>

        <div className="card text-center">
          <h3 className="text-5xl font-black text-green-400">
            91%
          </h3>

          <p className="mt-4 text-gray-400">
            Campaign Reach
          </p>
        </div>

        <div className="card text-center">
          <h3 className="text-5xl font-black text-pink-400">
            34K
          </h3>

          <p className="mt-4 text-gray-400">
            Engagement
          </p>
        </div>

        <div className="card text-center">
          <h3 className="text-5xl font-black text-cyan-400">
            120
          </h3>

          <p className="mt-4 text-gray-400">
            Exports
          </p>
        </div>

      </div>

      {/* CHART */}

      <div className="card h-[450px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="renders"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
            />

            <Line
              type="monotone"
              dataKey="renders"
              stroke="#22c55e"
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}