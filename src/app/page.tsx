"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadSection from "@/components/UploadSection";
import Workflow from "@/components/Workflow";
import Architecture from "@/sections/Architecture";
import Platforms from "@/sections/Platforms";
import Footer from "@/components/Footer";
import GeneratedContent from "@/components/GeneratedContent";

import DashboardAnalytics from "@/components/DashboardAnalytics";
import AIChat from "@/components/AIChat";
import ThreeViewer from "@/components/ThreeViewer";
import ExportPanel from "@/components/ExportPanel";

export default function Home() {

  const [generated,setGenerated] = useState(false);

  const [preview,setPreview] = useState("");

  return (
    <main>

      <Navbar />

      <Hero />

      <UploadSection
        setGenerated={setGenerated}
        setPreview={setPreview}
      />

      <GeneratedContent
        generated={generated}
        preview={preview}
      />

      <DashboardAnalytics />

      <ThreeViewer />

      <AIChat />

      <ExportPanel />

      <Workflow />

      <Architecture />

      <Platforms />

      <Footer />

    </main>
  );
}