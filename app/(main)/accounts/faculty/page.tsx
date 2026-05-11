'use client';

import React, { useState } from 'react';

// Mock Data for the sidebar list
const MOCK_FACULTY = [
  {
    id: 1,
    faculty_id: 'FAC-001',
    name: 'Dr. Sarah Wilson',
    email: 'sarah.w@univ.edu',
    department: 'Computer Science',
  },
  {
    id: 2,
    faculty_id: 'FAC-002',
    name: 'Prof. James Miller',
    email: 'j.miller@univ.edu',
    department: 'Mechanical Eng.',
  },
  {
    id: 3,
    faculty_id: 'FAC-003',
    name: 'Dr. Emily Chen',
    email: 'echen@univ.edu',
    department: 'Electrical Eng.',
  },
];

export default function FacultyPage() {
  const [formData, setFormData] = useState({
    faculty_id: '',
    name: '',
    email: '',
    department: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    setTimeout(() => {
      console.log('Submitting Faculty:', formData);
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ faculty_id: '', name: '', email: '', department: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          {/* Users/Faculty Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h1 className="text-2xl sm:text-3xl font-bold">Faculty Directory</h1>
        </div>
        <p className="text-white/90">
          Manage faculty profiles and departmental assignments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Input Form (Left - 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#171717]/5">
            <div className="flex items-center justify-between mb-6 border-b border-[#171717]/10 pb-4">
              <h2 className="text-xl font-bold text-[#171717] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#631012]"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" x2="20" y1="8" y2="14" />
                  <line x1="23" x2="17" y1="11" y2="11" />
                </svg>
                Add Faculty Member
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: ID & Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="faculty_id"
                    className="block text-sm font-semibold text-[#171717] mb-2"
                  >
                    Faculty ID <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#171717]/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="faculty_id"
                      required
                      value={formData.faculty_id}
                      onChange={(e) =>
                        setFormData({ ...formData, faculty_id: e.target.value })
                      }
                      placeholder="e.g. FAC-2024-01"
                      className="w-full pl-10 pr-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white uppercase font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#171717] mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Dr. John Doe"
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#171717] mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#171717]/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john.doe@university.edu"
                    className="w-full pl-10 pr-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-semibold text-[#171717] mb-2"
                >
                  Department
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#171717]/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <line x1="9" y1="22" x2="9" y2="22.01" />
                      <line x1="15" y1="22" x2="15" y2="22.01" />
                      <line x1="12" y1="22" x2="12" y2="22.01" />
                      <line x1="12" y1="2" x2="12" y2="4" />
                    </svg>
                  </div>
                  {/* Using a select for better UX, though backend is VARCHAR */}
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white appearance-none"
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="Computer Science">
                      Computer Science & Engineering
                    </option>
                    <option value="Electronics">
                      Electronics & Communication
                    </option>
                    <option value="Mechanical">Mechanical Engineering</option>
                    <option value="Civil">Civil Engineering</option>
                    <option value="Humanities">Humanities & Science</option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#171717]/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      faculty_id: '',
                      name: '',
                      email: '',
                      department: '',
                    })
                  }
                  className="px-5 py-2.5 text-[#171717]/70 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-8 py-2.5 rounded-lg font-medium shadow-md active:scale-95 transition-all disabled:opacity-70 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    'Saving...'
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <line x1="20" x2="20" y1="8" y2="14" />
                        <line x1="23" x2="17" y1="11" y2="11" />
                      </svg>
                      Add Member
                    </>
                  )}
                </button>
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fadeIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Faculty member added successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 3. Sidebar List (Right - 1/3) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-[#171717]/5 overflow-hidden">
            <div className="p-4 bg-[#F9F9F9] border-b border-[#171717]/10 flex justify-between items-center">
              <h3 className="font-bold text-[#171717] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#631012]"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Recent Additions
              </h3>
            </div>

            <div className="divide-y divide-[#171717]/10">
              {MOCK_FACULTY.map((fac) => (
                <div
                  key={fac.id}
                  className="p-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    {/* Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#631012]/10 text-[#631012] flex items-center justify-center font-bold text-sm shrink-0 border border-[#631012]/20">
                      {fac.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-[#171717] text-sm truncate">
                          {fac.name}
                        </span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono border border-gray-200">
                          {fac.faculty_id}
                        </span>
                      </div>
                      <p className="text-xs text-[#171717]/60 truncate mt-0.5">
                        {fac.department}
                      </p>
                      <a
                        href={`mailto:${fac.email}`}
                        className="text-xs text-[#631012] hover:underline mt-1 inline-flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        {fac.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-3 text-center border-t border-[#171717]/10">
                <button className="text-sm text-[#631012] font-medium hover:underline w-full">
                  View Full Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
