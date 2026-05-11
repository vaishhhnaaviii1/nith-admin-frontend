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
} from 'lucide-react';

interface KeyHighlight {
  text: string;
}

interface SemesterCalendar {
  title: string;
  description: string;
  pdfUrl: string;
  viewUrl: string;
}

interface AcademicCalendarData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  relevanceTitle: string;
  relevanceDescription: string;
  keyHighlightsTitle: string;
  keyHighlights: KeyHighlight[];
  calendarAccessHeading: string;
  calendarAccessDescription: string;
  semesterCalendars: SemesterCalendar[];
  notAvailableMessage: string;
}

type TabType = 'hero' | 'overview' | 'calendars';

export default function AcademicCalendarPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [calendarData, setCalendarData] = useState<AcademicCalendarData>({
    heroHeading: 'Academic Calendar',
    heroDescription:
      'The official academic schedule of the Institute outlining semester dates, registration windows, examinations, breaks, and result declaration timelines.',
    overviewHeading: 'Academic Calendar Overview',
    relevanceTitle: 'Relevance & Importance',
    relevanceDescription:
      'The Academic Calendar is a definitive roadmap for students, faculty, and administration. It ensures coordinated planning, transparency in academic operations, and helps maintain discipline by providing clear timelines for teaching, assessments, and administrative milestones.',
    keyHighlightsTitle: 'Key Highlights',
    keyHighlights: [
      { text: 'Semester timelines (start & end dates)' },
      { text: 'Registration and add/drop periods' },
      { text: 'Examinations and evaluation schedules' },
      { text: 'Breaks and vacation windows' },
      { text: 'Result declaration and grade submission deadlines' },
    ],
    calendarAccessHeading: 'Academic Calendar Access',
    calendarAccessDescription:
      'Select the semester calendar to view or download the official PDF.',
    semesterCalendars: [
      {
        title: 'Odd Semester 2025–26',
        description:
          'Covers the autumn/winter semester including classes, exams and holidays.',
        pdfUrl: '#',
        viewUrl: '#',
      },
      {
        title: 'Even Semester 2025–26',
        description:
          'Covers the spring/summer semester with exam schedules and official breaks.',
        pdfUrl: '#',
        viewUrl: '#',
      },
    ],
    notAvailableMessage:
      "If a calendar PDF is not yet available, please contact the Registrar's office for the latest schedule.",
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'overview' as TabType,
      label: 'Overview',
      icon: <Info size={18} />,
    },
    {
      id: 'calendars' as TabType,
      label: 'Semester Calendars',
      icon: <Download size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(calendarData);
  };

  const updateKeyHighlight = (index: number, value: string) => {
    const updated = [...calendarData.keyHighlights];
    updated[index] = { text: value };
    setCalendarData({ ...calendarData, keyHighlights: updated });
  };

  const addKeyHighlight = () => {
    setCalendarData({
      ...calendarData,
      keyHighlights: [...calendarData.keyHighlights, { text: '' }],
    });
  };

  const removeKeyHighlight = (index: number) => {
    setCalendarData({
      ...calendarData,
      keyHighlights: calendarData.keyHighlights.filter((_, i) => i !== index),
    });
  };

  const updateSemesterCalendar = (
    index: number,
    field: keyof SemesterCalendar,
    value: string
  ) => {
    const updated = [...calendarData.semesterCalendars];
    updated[index] = { ...updated[index], [field]: value };
    setCalendarData({ ...calendarData, semesterCalendars: updated });
  };

  const addSemesterCalendar = () => {
    setCalendarData({
      ...calendarData,
      semesterCalendars: [
        ...calendarData.semesterCalendars,
        {
          title: '',
          description: '',
          pdfUrl: '#',
          viewUrl: '#',
        },
      ],
    });
  };

  const removeSemesterCalendar = (index: number) => {
    setCalendarData({
      ...calendarData,
      semesterCalendars: calendarData.semesterCalendars.filter(
        (_, i) => i !== index
      ),
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
                Academic Calendar Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit academic calendar information and semester schedules
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
                    value={calendarData.heroHeading}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Academic Calendar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={calendarData.heroDescription}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
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
                    {calendarData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {calendarData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overview Section */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Overview Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Overview Heading
                  </label>
                  <input
                    type="text"
                    value={calendarData.overviewHeading}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
                        overviewHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Academic Calendar Overview"
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Relevance & Importance
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={calendarData.relevanceTitle}
                        onChange={(e) =>
                          setCalendarData({
                            ...calendarData,
                            relevanceTitle: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Relevance & Importance"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        value={calendarData.relevanceDescription}
                        onChange={(e) =>
                          setCalendarData({
                            ...calendarData,
                            relevanceDescription: e.target.value,
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
                    Key Highlights
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={calendarData.keyHighlightsTitle}
                        onChange={(e) =>
                          setCalendarData({
                            ...calendarData,
                            keyHighlightsTitle: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Key Highlights"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Highlight Items
                      </label>
                      <div className="space-y-2">
                        {calendarData.keyHighlights.map((highlight, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={highlight.text}
                              onChange={(e) =>
                                updateKeyHighlight(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Highlight text"
                            />
                            <button
                              onClick={() => removeKeyHighlight(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={addKeyHighlight}
                          className="flex items-center gap-2 px-3 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm"
                        >
                          <Plus size={16} />
                          Add Highlight
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <h3 className="text-2xl font-bold text-[#171717]">
                    {calendarData.overviewHeading}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#171717] mb-2">
                        {calendarData.relevanceTitle}
                      </h4>
                      <p className="text-sm text-[#171717]/70">
                        {calendarData.relevanceDescription}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#171717] mb-2">
                        {calendarData.keyHighlightsTitle}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {calendarData.keyHighlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-[#171717]/70">
                            {highlight.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester Calendars */}
          {activeTab === 'calendars' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Download className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Semester Calendars
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Calendar Access Heading
                  </label>
                  <input
                    type="text"
                    value={calendarData.calendarAccessHeading}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
                        calendarAccessHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Academic Calendar Access"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Calendar Access Description
                  </label>
                  <textarea
                    rows={2}
                    value={calendarData.calendarAccessDescription}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
                        calendarAccessDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Semester Calendar Items
                  </label>
                  <div className="space-y-3">
                    {calendarData.semesterCalendars.map((calendar, index) => (
                      <div
                        key={index}
                        className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Calendar {index + 1}
                          </span>
                          <button
                            onClick={() => removeSemesterCalendar(index)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Title
                            </label>
                            <input
                              type="text"
                              value={calendar.title}
                              onChange={(e) =>
                                updateSemesterCalendar(
                                  index,
                                  'title',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Odd Semester 2025–26"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Description
                            </label>
                            <textarea
                              rows={2}
                              value={calendar.description}
                              onChange={(e) =>
                                updateSemesterCalendar(
                                  index,
                                  'description',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Description"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              PDF URL
                            </label>
                            <input
                              type="text"
                              value={calendar.pdfUrl}
                              onChange={(e) =>
                                updateSemesterCalendar(
                                  index,
                                  'pdfUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="https://..."
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              View URL
                            </label>
                            <input
                              type="text"
                              value={calendar.viewUrl}
                              onChange={(e) =>
                                updateSemesterCalendar(
                                  index,
                                  'viewUrl',
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
                    <button
                      onClick={addSemesterCalendar}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
                      Add Semester Calendar
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Not Available Message
                  </label>
                  <textarea
                    rows={2}
                    value={calendarData.notAvailableMessage}
                    onChange={(e) =>
                      setCalendarData({
                        ...calendarData,
                        notAvailableMessage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="If a calendar PDF is not yet available..."
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] mb-2">
                      {calendarData.calendarAccessHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70">
                      {calendarData.calendarAccessDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {calendarData.semesterCalendars.map((calendar, index) => (
                      <div
                        key={index}
                        className="border border-[#171717]/20 rounded-lg p-6 hover:border-[#631012]/50 transition-colors"
                      >
                        <h4 className="text-xl font-bold text-[#171717] mb-2">
                          {calendar.title}
                        </h4>
                        <p className="text-sm text-[#171717]/70 mb-4">
                          {calendar.description}
                        </p>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors text-sm">
                            <Download size={16} />
                            Download PDF
                          </button>
                          <button className="px-4 py-2 border border-[#631012] text-[#631012] rounded-lg hover:bg-[#631012]/10 transition-colors text-sm">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-[#F9F9F9] border border-[#171717]/20 rounded-lg">
                    <p className="text-sm text-[#171717]/70 italic">
                      {calendarData.notAvailableMessage}
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
