'use client';

import React from 'react';
import {
  Download,
  GraduationCap,
  Users,
  FolderOpen,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function DownloadsHub() {
  const downloadLinks = [
    {
      label: 'Downloads for Students',
      href: '/downloads/students',
      description:
        'Academic calendars, syllabus, anti-ragging affidavits, and hostel forms.',
      icon: <GraduationCap size={40} />,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      label: 'Downloads for Faculty',
      href: '/downloads/faculty',
      description:
        'CPDA forms, leave applications, event proposals, and administrative docs.',
      icon: <Users size={40} />,
      color: 'bg-green-50 text-green-600 border-green-100',
    },
    {
      label: 'Miscellaneous Downloads',
      href: '/downloads/miscellaneous',
      description:
        'Annual reports, newsletters, telephone directory, and guest house rules.',
      icon: <FolderOpen size={40} />,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* --- Page Header --- */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-[#631012]/10 rounded-full text-[#631012] mb-4">
          <Download size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
          Downloads Section
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Select a category below to access relevant forms, documents, and
          resources.
        </p>
      </div>

      {/* --- Navigation Cards --- */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {downloadLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 block"
          >
            {/* Icon Container */}
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors ${link.color}`}
            >
              {link.icon}
            </div>

            {/* Content */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#631012] transition-colors">
              {link.label}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {link.description}
            </p>

            {/* Action Arrow */}
            <div className="flex items-center text-sm font-bold text-[#631012] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
              Browse Files <ArrowRight size={16} className="ml-2" />
            </div>
          </Link>
        ))}
      </div>

      {/* --- Quick Help Footer --- */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          Can&apos;t find what you&apos;re looking for? Visit the{' '}
          <a
            href="/contact"
            className="text-[#631012] font-semibold hover:underline"
          >
            Contact Us
          </a>{' '}
          page for assistance.
        </p>
      </div>
    </div>
  );
}
