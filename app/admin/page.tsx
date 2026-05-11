'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Layout,
  PanelBottom,
  LogOut,
  ArrowRight,
  Users,
  BookOpen,
  Info,
  Shield,
  Briefcase,
} from 'lucide-react';

interface PageOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const pageOptions: PageOption[] = [
  {
    id: 'accounts',
    title: 'Accounts',
    description: 'You can mange accounts here',
    icon: <Home size={22} />,
    href: '/accounts',
  },
  {
    id: 'home',
    title: 'Home Page',
    description:
      'Manage homepage hero, highlights, placements, and director message',
    icon: <Home size={22} />,
    href: '/home',
  },
  {
    id: 'about-nith',
    title: 'About NITH',
    description:
      'Manage institute overview: mission, vision, history, core values',
    icon: <Info size={22} />,
    href: '/about-nith',
  },
  {
    id: 'authorities',
    title: 'Authorities',
    description: 'Manage BOG, Senate, FC, BWC members and meeting minutes',
    icon: <Shield size={22} />,
    href: '/authorities',
  },
  {
    id: 'administration',
    title: 'Administration',
    description: 'Manage leadership: Director, Deans, Registrar, and officers',
    icon: <Briefcase size={22} />,
    href: '/administration',
  },
  {
    id: 'departments',
    title: 'Departments',
    description: 'Browse and manage academic departments and programs',
    icon: <Users size={22} />,
    href: '/departments',
  },
  {
    id: 'academics',
    title: 'Academics',
    description: 'Manage curriculum, programs, courses, and academic schedule',
    icon: <BookOpen size={22} />,
    href: '/academics',
  },
  {
    id: 'Student',
    title: 'Student',
    description: 'Manage student services, resources, and information',
    icon: <Users size={22} />,
    href: '/students',
  },
  {
    id: 'Faculty',
    title: 'Faculty',
    description: 'Manage faculty profiles, roles, and publications',
    icon: <Users size={22} />,
    href: '/faculty',
  },
  {
    id: 'Alumini',
    title: 'Alumini',
    description: 'Manage alumni network, achievements, and outreach',
    icon: <Users size={22} />,
    href: '/alumini',
  },
  {
    id: 'downloads',
    title: 'Downloads',
    description: 'Manage alumni network, achievements, and outreach',
    icon: <Users size={22} />,
    href: '/downloads',
  },
  {
    id: 'footer',
    title: 'Footer Content',
    description: 'Manage footer links, contact info, and social media',
    icon: <PanelBottom size={22} />,
    href: '/footer-content',
  },
];

export default function PageSelectorPage() {
  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#171717] border-b border-[#171717]/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center h-20 relative">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#631012] rounded-lg flex items-center justify-center">
                <Layout size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-base font-semibold text-[#F9F9F9] tracking-tight">
                  NIT Hamirpur
                </h1>
                <p className="text-xs text-[#F9F9F9]/50">
                  Content Management System
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="absolute right-0 flex items-center gap-2 px-4 py-2 text-[#F9F9F9]/70 hover:text-[#F9F9F9] transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline text-sm">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        {/* Welcome Section */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] mb-2 tracking-tight">
            Admin Dashboard
          </h2>
          <p className="text-[#171717]/50 text-sm">
            Select a section below to manage (edit, update & publish) content
            across various parts of the NIT Hamirpur website.
          </p>
        </div>

        {/* Page Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {pageOptions.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              className="group bg-white rounded-lg border border-[#171717]/10 p-6 hover:border-[#631012] transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#631012]/5 flex items-center justify-center text-[#631012] group-hover:bg-[#631012] group-hover:text-white transition-colors duration-200">
                  {option.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#631012] transition-colors">
                  {option.title}
                </h3>
                <p className="text-[#171717]/50 text-xs leading-relaxed mb-4">
                  {option.description}
                </p>

                {/* Action */}
                <div className="flex items-center justify-center text-[#631012] text-xs font-medium">
                  <span>Manage</span>
                  <ArrowRight
                    size={14}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-[#171717]/30 text-xs">NIT Hamirpur Portal</p>
        </div>
      </main>
    </div>
  );
}
