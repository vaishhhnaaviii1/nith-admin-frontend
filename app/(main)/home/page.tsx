'use client';

import React from 'react';
import { Home } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Home className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Home Page Editor
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Start editing by selecting a sidebar option to manage different
          sections of the home page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-[#171717] mb-4">
          Available Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Hero Section</h3>
            <p className="text-sm text-[#171717]/60">Main header and tagline</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">About Us</h3>
            <p className="text-sm text-[#171717]/60">About content and stats</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Events</h3>
            <p className="text-sm text-[#171717]/60">Latest events listings</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Placements</h3>
            <p className="text-sm text-[#171717]/60">Placement statistics</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Admissions</h3>
            <p className="text-sm text-[#171717]/60">Admission programs</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">News</h3>
            <p className="text-sm text-[#171717]/60">Latest news items</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Achievements</h3>
            <p className="text-sm text-[#171717]/60">Milestones and awards</p>
          </div>
          <div className="p-4 border border-[#171717]/20 rounded-lg hover:border-[#631012] transition-colors">
            <h3 className="font-semibold text-[#171717]">Gallery</h3>
            <p className="text-sm text-[#171717]/60">Image gallery content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
