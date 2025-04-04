"use client";

import React from "react";
import Link from "next/link";
import { FloatingBubbles } from "../components/ui/floating-bubbles";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Homepage() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <FloatingBubbles />
      <div className="absolute inset-0 flex items-center flex-col justify-center px-4 md:px-10 w-full h-full z-10">
        <h2 className="text-black text-2xl md:text-6xl font-bold text-center">
          The Color Theory
        </h2>
        <p className="text-black text-sm md:text-2xl max-w-xl mt-6 text-center">
          Who are you talking to, how can you improve, what should you say?
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {/* 
          <button
            className="px-6 py-2 text-sm font-medium rounded-md bg-black text-white border border-black transition-colors hover:bg-transparent hover:text-black hover:border-black"
          >
            Sync Omi
          </button>
          */}
          <Link href="/memories">
            <button className="px-6 py-2 text-sm font-medium text-black bg-transparent border border-black rounded-md transition-colors hover:bg-black hover:text-white hover:border-transparent">
              Memories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
