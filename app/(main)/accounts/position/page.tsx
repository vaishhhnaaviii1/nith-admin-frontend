'use client';

import React, { useState } from 'react';

// Mock data: Sorted by priority_number to show hierarchy
const MOCK_ROLES = [
  { id: 1, title: 'Dean', priority_number: 1 },
  { id: 2, title: 'Head of Department (HOD)', priority_number: 2 },
  { id: 3, title: 'Professor', priority_number: 3 },
  { id: 4, title: 'Assistant Professor', priority_number: 4 },
];

export default function RolePositionPage() {
  const [formData, setFormData] = useState({
    title: '',
    priority_number: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    setTimeout(() => {
      console.log('Submitting:', formData);
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ title: '', priority_number: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          {/* Badge/ID Icon */}
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" x2="20" y1="8" y2="14" />
            <line x1="23" x2="17" y1="11" y2="11" />
          </svg>
          <h1 className="text-2xl sm:text-3xl font-bold">Role Positions</h1>
        </div>
        <p className="text-white/90">
          Define faculty hierarchy and sorting order.
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
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                Add New Role
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row: Title & Priority */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Title Input */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-[#171717] mb-2"
                  >
                    Role Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="title"
                      required
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="e.g. Dean of Students"
                      className="w-full pl-4 pr-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Priority Number Input */}
                <div className="md:col-span-1">
                  <label
                    htmlFor="priority"
                    className="flex items-center gap-1 text-sm font-semibold text-[#171717] mb-2"
                  >
                    Priority # <span className="text-red-500">*</span>
                    <span className="text-[#171717]/40 text-xs font-normal">
                      (Low = High Rank)
                    </span>
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
                        <line x1="12" x2="12" y1="20" y2="10" />
                        <line x1="18" x2="18" y1="20" y2="4" />
                        <line x1="6" x2="6" y1="20" y2="16" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="priority"
                      required
                      min="1"
                      value={formData.priority_number}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          priority_number: e.target.value,
                        })
                      }
                      placeholder="1"
                      className="w-full pl-9 pr-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Helper Info Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="16" y2="12" />
                  <line x1="12" x2="12.01" y1="8" y2="8" />
                </svg>
                <p className="text-sm text-blue-800">
                  <strong>Priority Logic:</strong> The &quot;Priority
                  Number&quot; determines the display order on the faculty page.
                  Lower numbers (e.g., 1) appear at the top.
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ title: '', priority_number: '' })
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
                  {isSubmitting ? 'Saving...' : 'Save Role'}
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
                  <span>Role created successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 3. Existing Roles List (Right - 1/3) */}
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
                  <path d="M3 6h18" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                Current Hierarchy
              </h3>
            </div>

            <div className="divide-y divide-[#171717]/10">
              {MOCK_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    {/* Priority Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#631012] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {role.priority_number}
                    </div>
                    <div>
                      <span className="font-semibold text-[#171717] block">
                        {role.title}
                      </span>
                      <span className="text-xs text-[#171717]/50">
                        ID: {role.id}
                      </span>
                    </div>
                  </div>

                  {/* Delete Action (Hidden until hover) */}
                  <button className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-2">
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
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
