'use client';

import React, { useState } from 'react';
import {
  Save,
  GraduationCap,
  Plus,
  Trash2,
  FileText,
  Info,
  BookOpen,
  Filter,
} from 'lucide-react';

interface Highlight {
  title: string;
  description: string;
}

interface AcademicProgramme {
  id: number;
  title: string;
  category: 'UG' | 'PG' | 'PhD';
  description: string;
  viewUrl: string;
}

interface ImportantNote {
  text: string;
}

interface AdmissionsData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutDescription: string;
  highlightsHeading: string;
  highlights: Highlight[];
  programmesHeading: string;
  programmes: AcademicProgramme[];
  notesHeading: string;
  importantNotes: ImportantNote[];
}

type TabType = 'hero' | 'about' | 'programmes' | 'notes';

export default function Admissions2025Page() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [admissionsData, setAdmissionsData] = useState<AdmissionsData>({
    heroHeading: 'Admissions 2025–26',
    heroDescription:
      'Overview of admission opportunities for various academic programmes offered by the Institute for the academic session 2025–26.',
    aboutHeading: 'About Admissions',
    aboutDescription:
      'Admissions to different programmes at NIT Hamirpur are conducted in accordance with Institute norms, national policies, and statutory regulations. Separate admission processes apply to different programmes — please refer to the programme-specific pages for detailed eligibility criteria, application procedures, and schedules.\n\nOfficial announcements, schedule updates, and notifications are published on the Institute website and the Admissions Desk. Candidates are advised to rely only on official notices for application timelines and instructions.',
    highlightsHeading: 'Highlights',
    highlights: [
      {
        title: 'Statutory & National Compliance',
        description:
          'Admissions adhere to Institute norms, national policies, reservation rules, and statutory regulations.',
      },
      {
        title: 'Programme-specific Processes',
        description:
          'Separate processes and eligibility apply for UG, PG, and PhD programmes; always consult the programme page.',
      },
      {
        title: 'Important Dates & Schedule',
        description:
          'Refer to programme pages and the Admissions Desk for exact timelines and application windows.',
      },
      {
        title: 'Scholarships & Fellowships',
        description:
          'Details of financial assistance and scholarships are provided on the programme pages and through official notices.',
      },
      {
        title: 'Contact & Support',
        description:
          'Contact the Admissions Desk for clarifications; official notices take precedence over drafts.',
      },
    ],
    programmesHeading: 'Academic Programmes – Admissions 2025–26',
    programmes: [
      {
        id: 1,
        title: 'B.Tech / B.Arch / Dual Degree (UG Programmes)',
        category: 'UG',
        description:
          'Undergraduate programmes offered in engineering, architecture, and integrated dual-degree formats.',
        viewUrl: '#',
      },
      {
        id: 2,
        title: 'M.Tech / M.Arch',
        category: 'PG',
        description:
          'Postgraduate programmes focusing on advanced technical and architectural education.',
        viewUrl: '#',
      },
      {
        id: 3,
        title: 'M.Sc',
        category: 'PG',
        description:
          'Postgraduate science programmes with emphasis on theoretical and applied research.',
        viewUrl: '#',
      },
      {
        id: 4,
        title: 'MBA',
        category: 'PG',
        description:
          'Management programme designed to develop leadership and managerial skills.',
        viewUrl: '#',
      },
      {
        id: 5,
        title: 'Ph.D.',
        category: 'PhD',
        description:
          'Doctoral programmes aimed at advanced research and innovation.',
        viewUrl: '#',
      },
    ],
    notesHeading: 'Important Notes',
    importantNotes: [
      {
        text: 'Follow the specific programme page for eligibility and schedule.',
      },
      {
        text: 'Admissions are subject to Institute rules and statutory regulations.',
      },
      { text: 'Official notices from the Institute take precedence.' },
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'about' as TabType,
      label: 'About & Highlights',
      icon: <Info size={18} />,
    },
    {
      id: 'programmes' as TabType,
      label: 'Programmes',
      icon: <BookOpen size={18} />,
    },
    {
      id: 'notes' as TabType,
      label: 'Important Notes',
      icon: <FileText size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(admissionsData);
  };

  const updateHighlight = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    const updated = [...admissionsData.highlights];
    updated[index] = { ...updated[index], [field]: value };
    setAdmissionsData({ ...admissionsData, highlights: updated });
  };

  const addHighlight = () => {
    setAdmissionsData({
      ...admissionsData,
      highlights: [
        ...admissionsData.highlights,
        { title: '', description: '' },
      ],
    });
  };

  const removeHighlight = (index: number) => {
    setAdmissionsData({
      ...admissionsData,
      highlights: admissionsData.highlights.filter((_, i) => i !== index),
    });
  };

  const updateProgramme = (
    id: number,
    field: keyof AcademicProgramme,
    value: string
  ) => {
    setAdmissionsData({
      ...admissionsData,
      programmes: admissionsData.programmes.map((prog) =>
        prog.id === id ? { ...prog, [field]: value } : prog
      ),
    });
  };

  const addProgramme = () => {
    const newId =
      admissionsData.programmes.length > 0
        ? Math.max(...admissionsData.programmes.map((p) => p.id)) + 1
        : 1;
    setAdmissionsData({
      ...admissionsData,
      programmes: [
        ...admissionsData.programmes,
        {
          id: newId,
          title: '',
          category: 'UG',
          description: '',
          viewUrl: '#',
        },
      ],
    });
  };

  const removeProgramme = (id: number) => {
    setAdmissionsData({
      ...admissionsData,
      programmes: admissionsData.programmes.filter((p) => p.id !== id),
    });
  };

  const updateImportantNote = (index: number, value: string) => {
    const updated = [...admissionsData.importantNotes];
    updated[index] = { text: value };
    setAdmissionsData({ ...admissionsData, importantNotes: updated });
  };

  const addImportantNote = () => {
    setAdmissionsData({
      ...admissionsData,
      importantNotes: [...admissionsData.importantNotes, { text: '' }],
    });
  };

  const removeImportantNote = (index: number) => {
    setAdmissionsData({
      ...admissionsData,
      importantNotes: admissionsData.importantNotes.filter(
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
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Admissions 2025-26 Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage admissions information and programmes
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
                    value={admissionsData.heroHeading}
                    onChange={(e) =>
                      setAdmissionsData({
                        ...admissionsData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Admissions 2025–26"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={admissionsData.heroDescription}
                    onChange={(e) =>
                      setAdmissionsData({
                        ...admissionsData,
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
                    {admissionsData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {admissionsData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* About & Highlights */}
          {activeTab === 'about' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About & Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    About Admissions
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={admissionsData.aboutHeading}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            aboutHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="About Admissions"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={6}
                        value={admissionsData.aboutDescription}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            aboutDescription: e.target.value,
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
                    Highlights
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={admissionsData.highlightsHeading}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            highlightsHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Highlights"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Highlight Items
                      </label>
                      <div className="space-y-3">
                        {admissionsData.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="p-3 border border-[#171717]/20 rounded-lg bg-white space-y-2"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-[#171717]/60">
                                Highlight {index + 1}
                              </span>
                              <button
                                onClick={() => removeHighlight(index)}
                                className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Title
                              </label>
                              <input
                                type="text"
                                value={highlight.title}
                                onChange={(e) =>
                                  updateHighlight(
                                    index,
                                    'title',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Title"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Description
                              </label>
                              <textarea
                                rows={2}
                                value={highlight.description}
                                onChange={(e) =>
                                  updateHighlight(
                                    index,
                                    'description',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Description"
                              />
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={addHighlight}
                          className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                        >
                          <Plus size={18} />
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
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] mb-3">
                      {admissionsData.aboutHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70 whitespace-pre-line">
                      {admissionsData.aboutDescription}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] mb-4">
                      {admissionsData.highlightsHeading}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {admissionsData.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10"
                        >
                          <h5 className="text-base font-semibold text-[#171717] mb-2">
                            {highlight.title}
                          </h5>
                          <p className="text-sm text-[#171717]/70">
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Academic Programmes */}
          {activeTab === 'programmes' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Academic Programmes ({admissionsData.programmes.length})
                  </h2>
                </div>
                <button
                  onClick={addProgramme}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Programme
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={admissionsData.programmesHeading}
                  onChange={(e) =>
                    setAdmissionsData({
                      ...admissionsData,
                      programmesHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Academic Programmes – Admissions 2025–26"
                />
              </div>

              <div className="space-y-3">
                {admissionsData.programmes.map((programme, index) => (
                  <div
                    key={programme.id}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Programme #{index + 1}
                      </span>
                      <button
                        onClick={() => removeProgramme(programme.id)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={programme.title}
                          onChange={(e) =>
                            updateProgramme(
                              programme.id,
                              'title',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="B.Tech / B.Arch / Dual Degree"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Category
                        </label>
                        <select
                          value={programme.category}
                          onChange={(e) =>
                            updateProgramme(
                              programme.id,
                              'category',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        >
                          <option value="UG">UG</option>
                          <option value="PG">PG</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={programme.description}
                          onChange={(e) =>
                            updateProgramme(
                              programme.id,
                              'description',
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Programme description"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          View URL
                        </label>
                        <input
                          type="text"
                          value={programme.viewUrl}
                          onChange={(e) =>
                            updateProgramme(
                              programme.id,
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
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-[#171717]">
                      {admissionsData.programmesHeading}
                    </h3>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm bg-[#631012] text-white rounded-lg">
                        All
                      </button>
                      <button className="px-3 py-1 text-sm border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9]">
                        UG
                      </button>
                      <button className="px-3 py-1 text-sm border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9]">
                        PG
                      </button>
                      <button className="px-3 py-1 text-sm border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9]">
                        PhD
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {admissionsData.programmes.map((programme) => (
                      <div
                        key={programme.id}
                        className="p-4 border border-[#171717]/20 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-[#171717]">
                            {programme.title}
                          </h4>
                          <span className="px-2 py-1 text-xs bg-[#631012]/10 text-[#631012] rounded">
                            {programme.category}
                          </span>
                        </div>
                        <p className="text-sm text-[#171717]/70 mb-3">
                          {programme.description}
                        </p>
                        <button className="text-sm text-[#631012] hover:underline font-medium">
                          View {programme.category} Admissions →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Important Notes */}
          {activeTab === 'notes' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Important Notes
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={admissionsData.notesHeading}
                    onChange={(e) =>
                      setAdmissionsData({
                        ...admissionsData,
                        notesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Notes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Note Items
                  </label>
                  <div className="space-y-2">
                    {admissionsData.importantNotes.map((note, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={note.text}
                          onChange={(e) =>
                            updateImportantNote(index, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Note text"
                        />
                        <button
                          onClick={() => removeImportantNote(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addImportantNote}
                      className="flex items-center gap-2 px-3 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm"
                    >
                      <Plus size={16} />
                      Add Note
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <h3 className="text-2xl font-bold text-[#171717]">
                    {admissionsData.notesHeading}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {admissionsData.importantNotes.map((note, index) => (
                      <li key={index} className="text-sm text-[#171717]/70">
                        {note.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
