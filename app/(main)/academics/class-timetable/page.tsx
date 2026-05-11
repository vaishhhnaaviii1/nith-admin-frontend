'use client';

import React, { useState } from 'react';
import {
  Save,
  Calendar,
  Plus,
  Trash2,
  FileText,
  Info,
  Download,
  Eye,
  Search,
  Filter,
} from 'lucide-react';

interface Timetable {
  id: number;
  programme: string;
  department: string;
  semester: string;
  session: string;
  viewUrl: string;
  downloadUrl: string;
}

interface TimetableData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  overviewDescription: string;
  timetableInfoHeading: string;
  timetableInfoDescription: string;
  importantHeading: string;
  importantNotice: string;
  timetables: Timetable[];
  bottomNote: string;
}

type TabType = 'hero' | 'overview' | 'timetables' | 'settings';

export default function ClassTimetablePage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [timetableData, setTimetableData] = useState<TimetableData>({
    heroHeading: 'Class Timetable',
    heroDescription:
      'Official class timetables for various academic programmes and semesters.',
    overviewHeading: 'Overview',
    overviewDescription:
      'The Class Timetable provides a consolidated schedule for lectures, tutorials, and practical sessions across academic programmes. It helps students and faculty plan their academic commitments and ensures smooth conduct of instructional activities.',
    timetableInfoHeading: 'Timetable Information',
    timetableInfoDescription:
      'Timetables are prepared and approved by the Institute and are applicable to Undergraduate (UG), Postgraduate (PG), and Ph.D programmes. Timetables are subject to revision and any changes will be notified through official channels.',
    importantHeading: 'Important',
    importantNotice:
      'Timetables are subject to change. Students should regularly check this page and official notifications for updates.',
    timetables: [
      {
        id: 1,
        programme: 'B.Tech. (CSE)',
        department: 'Computer Science & Engineering',
        semester: 'Even Semester (2025)',
        session: '2025-26',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 2,
        programme: 'M.Tech. (ECE)',
        department: 'Electronics & Communication Engineering',
        semester: 'Even Semester (2025)',
        session: '2025-26',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 3,
        programme: 'Ph.D.',
        department: 'Mechanical Engineering',
        semester: 'Ongoing',
        session: '2025-26',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
    bottomNote:
      "Note: Timetables are subject to change. Any revisions will be notified through the Institute's official channels. For the latest information, always refer to the document's last updated date and official notifications.",
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'overview' as TabType,
      label: 'Overview & Info',
      icon: <Info size={18} />,
    },
    {
      id: 'timetables' as TabType,
      label: 'Timetable List',
      icon: <Calendar size={18} />,
    },
    {
      id: 'settings' as TabType,
      label: 'Settings & Note',
      icon: <FileText size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(timetableData);
  };

  const updateTimetable = (
    id: number,
    field: keyof Timetable,
    value: string
  ) => {
    setTimetableData({
      ...timetableData,
      timetables: timetableData.timetables.map((tt) =>
        tt.id === id ? { ...tt, [field]: value } : tt
      ),
    });
  };

  const addTimetable = () => {
    const newId =
      timetableData.timetables.length > 0
        ? Math.max(...timetableData.timetables.map((tt) => tt.id)) + 1
        : 1;
    setTimetableData({
      ...timetableData,
      timetables: [
        ...timetableData.timetables,
        {
          id: newId,
          programme: '',
          department: '',
          semester: '',
          session: '',
          viewUrl: '#',
          downloadUrl: '#',
        },
      ],
    });
  };

  const removeTimetable = (id: number) => {
    setTimetableData({
      ...timetableData,
      timetables: timetableData.timetables.filter((tt) => tt.id !== id),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Class Timetable Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage class timetables and schedules
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-[#171717]/10">
          <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#631012]/30 scrollbar-track-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'bg-[#631012] text-white border-b-2 border-[#631012]'
                      : 'text-[#171717]/70 hover:bg-[#F9F9F9] hover:text-[#171717]'
                  }
                `}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {/* Hero Section */}
          {activeTab === 'hero' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={timetableData.heroHeading}
                    onChange={(e) =>
                      setTimetableData({
                        ...timetableData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Class Timetable"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={timetableData.heroDescription}
                    onChange={(e) =>
                      setTimetableData({
                        ...timetableData,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-3">
                    {timetableData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {timetableData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overview & Info Section */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Overview & Information
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Overview Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={timetableData.overviewHeading}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            overviewHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Overview"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        value={timetableData.overviewDescription}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            overviewDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Timetable Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={timetableData.timetableInfoHeading}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            timetableInfoHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Timetable Information"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        value={timetableData.timetableInfoDescription}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            timetableInfoDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Important Notice
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={timetableData.importantHeading}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            importantHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Important"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Notice Text
                      </label>
                      <textarea
                        rows={3}
                        value={timetableData.importantNotice}
                        onChange={(e) =>
                          setTimetableData({
                            ...timetableData,
                            importantNotice: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Important notice"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] mb-3">
                      {timetableData.overviewHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70">
                      {timetableData.overviewDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#171717] mb-2">
                      {timetableData.timetableInfoHeading}
                    </h4>
                    <p className="text-sm text-[#171717]/70">
                      {timetableData.timetableInfoDescription}
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                    <h5 className="text-base font-semibold text-amber-900 mb-1">
                      {timetableData.importantHeading}
                    </h5>
                    <p className="text-sm text-amber-800">
                      {timetableData.importantNotice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timetable List */}
          {activeTab === 'timetables' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Timetable List ({timetableData.timetables.length})
                  </h2>
                </div>
                <button
                  onClick={addTimetable}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Timetable
                </button>
              </div>

              <div className="space-y-3">
                {timetableData.timetables.map((timetable, index) => (
                  <div
                    key={timetable.id}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Timetable #{index + 1}
                      </span>
                      <button
                        onClick={() => removeTimetable(timetable.id)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Programme
                        </label>
                        <input
                          type="text"
                          value={timetable.programme}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'programme',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="B.Tech. (CSE)"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Department
                        </label>
                        <input
                          type="text"
                          value={timetable.department}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'department',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Computer Science & Engineering"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Semester
                        </label>
                        <input
                          type="text"
                          value={timetable.semester}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'semester',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Even Semester (2025)"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Academic Session
                        </label>
                        <input
                          type="text"
                          value={timetable.session}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'session',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="2025-26"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          View URL
                        </label>
                        <input
                          type="text"
                          value={timetable.viewUrl}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'viewUrl',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Download URL
                        </label>
                        <input
                          type="text"
                          value={timetable.downloadUrl}
                          onChange={(e) =>
                            updateTimetable(
                              timetable.id,
                              'downloadUrl',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                    <p className="text-sm text-[#171717]/60">
                      Showing {timetableData.timetables.length} timetable(s)
                    </p>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <div className="relative flex-1 sm:flex-initial">
                        <Search
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#171717]/40"
                          size={16}
                        />
                        <input
                          type="text"
                          placeholder="Search timetables..."
                          className="w-full sm:w-64 pl-10 pr-3 py-2 border border-[#171717]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#631012]"
                        />
                      </div>
                      <button className="flex items-center gap-2 px-3 py-2 border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9] transition-colors text-sm">
                        <Filter size={16} />
                        All Programmes
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Sl. No.
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Programme / Department
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Semester
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Academic Session
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Timetable Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {timetableData.timetables.map((timetable, index) => (
                          <tr
                            key={timetable.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {index + 1}
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-[#171717]">
                                {timetable.programme}
                              </div>
                              <div className="text-xs text-[#171717]/60">
                                {timetable.department}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {timetable.semester}
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {timetable.session}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1 text-xs bg-[#631012] text-white rounded hover:bg-[#7a1214] transition-colors">
                                  <Eye size={14} />
                                  View
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1 text-xs border border-[#631012] text-[#631012] rounded hover:bg-[#631012]/10 transition-colors">
                                  <Download size={14} />
                                  Download
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {timetableData.timetables.length === 0 && (
                    <div className="text-center py-8 text-[#171717]/60">
                      No timetables found. Add some timetables to get started.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Settings & Note */}
          {activeTab === 'settings' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Settings & Bottom Note
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Bottom Note
                  </label>
                  <textarea
                    rows={4}
                    value={timetableData.bottomNote}
                    onChange={(e) =>
                      setTimetableData({
                        ...timetableData,
                        bottomNote: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Note text displayed below the timetable table"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm text-blue-900">
                      {timetableData.bottomNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
