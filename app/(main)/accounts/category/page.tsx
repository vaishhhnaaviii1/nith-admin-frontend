'use client';

import React, { useState } from 'react';

// Mock data to display in the "Recent Categories" table below the form
const MOCK_CATEGORIES = [
  {
    id: 1,
    name: 'Academic',
    description: 'Courses, exams, and curriculum related updates.',
  },
  {
    id: 2,
    name: 'Research',
    description: 'Research grants, publications, and lab news.',
  },
  {
    id: 3,
    name: 'Infrastructure',
    description: 'Campus facilities, hostels, and maintenance.',
  },
];

export default function AddCategoryPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Simulate API Call
    setTimeout(() => {
      console.log('Submitting Data:', formData);
      setIsSubmitting(false);
      setStatus('success');
      // Reset form after success
      setFormData({ name: '', description: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          {/* Plus/Add Icon */}
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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="12" x2="12" y1="8" y2="16" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
          <h1 className="text-2xl sm:text-3xl font-bold">Category Manager</h1>
        </div>
        <p className="text-white/90">
          Add new categories to organize faculty and event data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Input Form Card (Left Side - 2/3 width) */}
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
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Create New Category
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#171717] mb-2"
                >
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Technical Events"
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white"
                />
              </div>

              {/* Description Input */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-[#171717] mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter a brief description of what this category covers..."
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all bg-[#F9F9F9] focus:bg-white resize-none"
                />
                <p className="text-xs text-[#171717]/50 mt-1 text-right">
                  {formData.description.length} characters
                </p>
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', description: '' })}
                  className="px-5 py-2.5 text-[#171717]/70 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-8 py-2.5 rounded-lg font-medium shadow-md active:scale-95 transition-all disabled:opacity-70 disabled:cursor-wait flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </>
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
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                      Save Category
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Category added successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 3. Recent Entries Preview (Right Side - 1/3 width) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md border border-[#171717]/5 overflow-hidden">
            <div className="p-4 bg-[#F9F9F9] border-b border-[#171717]/10">
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
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                Existing Categories
              </h3>
            </div>

            <div className="divide-y divide-[#171717]/10">
              {MOCK_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#171717]">
                      {cat.name}
                    </span>
                    <span className="text-[10px] bg-[#631012]/10 text-[#631012] px-1.5 py-0.5 rounded font-mono">
                      ID: {cat.id}
                    </span>
                  </div>
                  <p className="text-sm text-[#171717]/60 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              ))}

              <div className="p-3 text-center border-t border-[#171717]/10">
                <button className="text-sm text-[#631012] font-medium hover:underline flex items-center justify-center gap-1 w-full">
                  View All
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
