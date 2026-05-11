'use client';

import React, { useState } from 'react';

// --- MOCK DATA FOR DROPDOWNS ---
// In a real app, these would come from your API
const FACULTY_OPTIONS = [
  { id: 1, name: 'Dr. Sarah Wilson', dept: 'Computer Science' },
  { id: 2, name: 'Prof. James Miller', dept: 'Mechanical Eng.' },
  { id: 3, name: 'Dr. Emily Chen', dept: 'Electrical Eng.' },
];

const ROLE_OPTIONS = [
  { id: 1, title: 'Dean' },
  { id: 2, title: 'Head of Department' },
  { id: 3, title: 'Faculty Advisor' },
];

const CATEGORY_OPTIONS = [
  { id: 1, name: 'Academic' },
  { id: 2, name: 'Administrative' },
  { id: 3, name: 'Student Affairs' },
];

// --- MOCK DATA FOR LIST VIEW ---
const ASSIGNMENTS = [
  {
    id: 1,
    faculty_name: 'Dr. Sarah Wilson',
    role: 'Dean',
    category: 'Academic',
    start_date: '2024-01-01',
    is_active: true,
  },
  {
    id: 2,
    faculty_name: 'Prof. James Miller',
    role: 'Head of Department',
    category: 'Administrative',
    start_date: '2023-08-15',
    is_active: true,
  },
];

export default function RoleAssignmentPage() {
  const [formData, setFormData] = useState({
    faculty_id: '',
    position_id: '',
    category_id: '',
    start_date: '',
    end_date: '',
    role_email: '',
    role_phone: '',
    is_active: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    setTimeout(() => {
      console.log('Submitting Assignment:', formData);
      setIsSubmitting(false);
      setStatus('success');
      // Reset form (keeping is_active true by default)
      setFormData({
        faculty_id: '',
        position_id: '',
        category_id: '',
        start_date: '',
        end_date: '',
        role_email: '',
        role_phone: '',
        is_active: true,
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          {/* Assignment/Link Icon */}
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <h1 className="text-2xl sm:text-3xl font-bold">Role Assignments</h1>
        </div>
        <p className="text-white/90">
          Assign specific responsibilities and tenures to faculty members.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Main Form (Left - 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 border border-[#171717]/5 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4">
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
                  <line x1="17" x2="23" y1="11" y2="11" />
                </svg>
                New Assignment
              </h2>
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-[#171717]">
                  Status:
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, is_active: !formData.is_active })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.is_active ? 'bg-[#631012]' : 'bg-gray-300'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.is_active ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
                <span
                  className={`text-xs font-medium ${formData.is_active ? 'text-[#631012]' : 'text-gray-500'}`}
                >
                  {formData.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            {/* SECTION 1: RELATIONSHIPS (The 3 Foreign Keys) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Faculty Select */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Select Faculty Member <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.faculty_id}
                    onChange={(e) =>
                      setFormData({ ...formData, faculty_id: e.target.value })
                    }
                    className="w-full pl-4 pr-10 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent bg-[#F9F9F9] appearance-none"
                  >
                    <option value="" disabled>
                      Choose a faculty member...
                    </option>
                    {FACULTY_OPTIONS.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.name} ({f.dept})
                      </option>
                    ))}
                  </select>
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

              {/* Position Select */}
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Assign Role/Position <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.position_id}
                    onChange={(e) =>
                      setFormData({ ...formData, position_id: e.target.value })
                    }
                    className="w-full pl-4 pr-10 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent bg-[#F9F9F9] appearance-none"
                  >
                    <option value="" disabled>
                      Select Position...
                    </option>
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.title}
                      </option>
                    ))}
                  </select>
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

              {/* Category Select */}
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Assignment Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.category_id}
                    onChange={(e) =>
                      setFormData({ ...formData, category_id: e.target.value })
                    }
                    className="w-full pl-4 pr-10 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent bg-[#F9F9F9] appearance-none"
                  >
                    <option value="" disabled>
                      Select Category...
                    </option>
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
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
            </div>

            <hr className="border-[#171717]/10" />

            {/* SECTION 2: TENURE & CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Dates */}
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.start_date}
                  onChange={(e) =>
                    setFormData({ ...formData, start_date: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] bg-[#F9F9F9]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  End Date{' '}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="date"
                  value={formData.end_date}
                  onChange={(e) =>
                    setFormData({ ...formData, end_date: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] bg-[#F9F9F9]"
                />
              </div>

              {/* Role Contact Info */}
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Role Specific Email
                </label>
                <input
                  type="email"
                  placeholder="dean.students@univ.edu"
                  value={formData.role_email}
                  onChange={(e) =>
                    setFormData({ ...formData, role_email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] bg-[#F9F9F9]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Role Phone / Ext
                </label>
                <input
                  type="text"
                  placeholder="Ext: 4055"
                  value={formData.role_phone}
                  onChange={(e) =>
                    setFormData({ ...formData, role_phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] bg-[#F9F9F9]"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    faculty_id: '',
                    position_id: '',
                    category_id: '',
                    start_date: '',
                    end_date: '',
                    role_email: '',
                    role_phone: '',
                    is_active: true,
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
                {isSubmitting ? 'Processing...' : 'Assign Role'}
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
                <span>Role assigned successfully!</span>
              </div>
            )}
          </form>
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Current Assignments
              </h3>
            </div>

            <div className="divide-y divide-[#171717]/10">
              {ASSIGNMENTS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs bg-[#631012]/10 text-[#631012] px-2 py-0.5 rounded-full font-semibold">
                      {item.role}
                    </span>
                    {item.is_active ? (
                      <span className="text-[10px] text-green-600 font-bold border border-green-200 bg-green-50 px-1.5 rounded">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-500 font-bold border border-gray-200 bg-gray-50 px-1.5 rounded">
                        ENDED
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-[#171717]">
                    {item.faculty_name}
                  </h4>
                  <p className="text-sm text-[#171717]/60 mb-2">
                    {item.category}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#171717]/50 mt-2 pt-2 border-t border-dashed border-gray-200">
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Since: {item.start_date}
                  </div>
                </div>
              ))}

              <div className="p-3 text-center border-t border-[#171717]/10">
                <button className="text-sm text-[#631012] font-medium hover:underline w-full">
                  View All Assignments
                </button>
              </div>
            </div>
          </div>

          {/* Helper Card */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-bold text-blue-800 text-sm mb-1">Tip:</h4>
            <p className="text-xs text-blue-700">
              When a faculty member changes roles, you can either edit the
              existing assignment or mark it inactive and create a new one to
              preserve history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
