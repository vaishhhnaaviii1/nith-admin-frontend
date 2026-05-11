'use client';

import React, { useState } from 'react';
import {
  Save,
  ClipboardList,
  Plus,
  Trash2,
  FileText,
  Info,
  BookOpen,
  Download,
  Eye,
} from 'lucide-react';

interface Programme {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

interface Notice {
  id: number;
  title: string;
  description: string;
  programme: string;
  date: string;
  viewUrl: string;
  downloadUrl: string;
}

interface Instruction {
  text: string;
}

interface RegistrationData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  overviewDescription: string;
  programmesHeading: string;
  programmesSubheading: string;
  programmes: Programme[];
  noticesHeading: string;
  noticesSubheading: string;
  noticesViewAllUrl: string;
  notices: Notice[];
  instructionsHeading: string;
  instructions: Instruction[];
}

type TabType = 'hero' | 'overview' | 'notices' | 'instructions';

export default function Registration2025Page() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    heroHeading: 'Registration 2025–26',
    heroDescription:
      'Information and official notices related to student registration for the academic session 2025–26.',
    overviewHeading: 'Overview',
    overviewDescription:
      'Registration procedures are conducted as per Institute rules and academic calendar. Separate registration processes exist for different programmes. Students must follow official notices for timelines and instructions.',
    programmesHeading: 'Programmes Under Registration – 2025–26',
    programmesSubheading:
      'Detailed registration instructions for each programme are issued through official notices.',
    programmes: [
      {
        id: 1,
        title: 'B.Tech / B.Arch / Dual Degree (UG Programmes)',
        subtitle:
          'Undergraduate programmes following institute registration rules.',
        description: 'Detailed instructions issued through notices.',
      },
      {
        id: 2,
        title: 'M.Tech / M.Arch',
        subtitle:
          'Postgraduate programmes with separate registration timelines.',
        description: 'Detailed instructions issued through notices.',
      },
      {
        id: 3,
        title: 'M.Sc',
        subtitle: 'Science postgraduate programmes.',
        description: 'Detailed instructions issued through notices.',
      },
      {
        id: 4,
        title: 'MBA',
        subtitle: 'Management programme registration instructions.',
        description: 'Detailed instructions issued through notices.',
      },
      {
        id: 5,
        title: 'Ph.D',
        subtitle: 'Research scholars registration and coursework requirements.',
        description: 'Detailed instructions issued through notices.',
      },
    ],
    noticesHeading: 'Important Registration Notices',
    noticesSubheading:
      'Latest registration notices appear at the top. Use the Academics Notices page for broader search and filters.',
    noticesViewAllUrl: '#',
    notices: [
      {
        id: 1,
        title: 'Late Registration Policy — Notice',
        description: 'Rules and penalties applicable for late registration.',
        programme: 'Registration',
        date: 'November 20, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 2,
        title: 'Registration Instructions for Semester Enrollment — 2025-26',
        description:
          'Step-by-step guidance for online registration, course enrollment and fee payment.',
        programme: 'Registration',
        date: 'October 12, 2025',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
    instructionsHeading: 'Important Instructions',
    instructions: [
      { text: 'Students must regularly check this page for updates.' },
      {
        text: 'Registration timelines are strictly as per Institute schedule.',
      },
      {
        text: 'Failure to comply may lead to cancellation of registration.',
      },
    ],
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'overview' as TabType,
      label: 'Overview & Programmes',
      icon: <Info size={18} />,
    },
    {
      id: 'notices' as TabType,
      label: 'Registration Notices',
      icon: <BookOpen size={18} />,
    },
    {
      id: 'instructions' as TabType,
      label: 'Instructions',
      icon: <FileText size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(registrationData);
  };

  const updateProgramme = (
    id: number,
    field: keyof Programme,
    value: string
  ) => {
    setRegistrationData({
      ...registrationData,
      programmes: registrationData.programmes.map((prog) =>
        prog.id === id ? { ...prog, [field]: value } : prog
      ),
    });
  };

  const addProgramme = () => {
    const newId =
      registrationData.programmes.length > 0
        ? Math.max(...registrationData.programmes.map((p) => p.id)) + 1
        : 1;
    setRegistrationData({
      ...registrationData,
      programmes: [
        ...registrationData.programmes,
        {
          id: newId,
          title: '',
          subtitle: '',
          description: '',
        },
      ],
    });
  };

  const removeProgramme = (id: number) => {
    setRegistrationData({
      ...registrationData,
      programmes: registrationData.programmes.filter((p) => p.id !== id),
    });
  };

  const updateNotice = (id: number, field: keyof Notice, value: string) => {
    setRegistrationData({
      ...registrationData,
      notices: registrationData.notices.map((notice) =>
        notice.id === id ? { ...notice, [field]: value } : notice
      ),
    });
  };

  const addNotice = () => {
    const newId =
      registrationData.notices.length > 0
        ? Math.max(...registrationData.notices.map((n) => n.id)) + 1
        : 1;
    setRegistrationData({
      ...registrationData,
      notices: [
        ...registrationData.notices,
        {
          id: newId,
          title: '',
          description: '',
          programme: 'Registration',
          date: '',
          viewUrl: '#',
          downloadUrl: '#',
        },
      ],
    });
  };

  const removeNotice = (id: number) => {
    setRegistrationData({
      ...registrationData,
      notices: registrationData.notices.filter((n) => n.id !== id),
    });
  };

  const updateInstruction = (index: number, value: string) => {
    const updated = [...registrationData.instructions];
    updated[index] = { text: value };
    setRegistrationData({ ...registrationData, instructions: updated });
  };

  const addInstruction = () => {
    setRegistrationData({
      ...registrationData,
      instructions: [...registrationData.instructions, { text: '' }],
    });
  };

  const removeInstruction = (index: number) => {
    setRegistrationData({
      ...registrationData,
      instructions: registrationData.instructions.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Registration 2025-26 Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage registration information and notices
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
                    value={registrationData.heroHeading}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Registration 2025–26"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={registrationData.heroDescription}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
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
                    {registrationData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {registrationData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overview & Programmes */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Overview & Programmes
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
                        value={registrationData.overviewHeading}
                        onChange={(e) =>
                          setRegistrationData({
                            ...registrationData,
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
                        value={registrationData.overviewDescription}
                        onChange={(e) =>
                          setRegistrationData({
                            ...registrationData,
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
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Programmes ({registrationData.programmes.length})
                    </h3>
                    <button
                      onClick={addProgramme}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Programme
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Programmes Heading
                      </label>
                      <input
                        type="text"
                        value={registrationData.programmesHeading}
                        onChange={(e) =>
                          setRegistrationData({
                            ...registrationData,
                            programmesHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Programmes Under Registration – 2025–26"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Subheading
                      </label>
                      <input
                        type="text"
                        value={registrationData.programmesSubheading}
                        onChange={(e) =>
                          setRegistrationData({
                            ...registrationData,
                            programmesSubheading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Subheading"
                      />
                    </div>

                    <div className="space-y-2 mt-4">
                      {registrationData.programmes.map((programme, index) => (
                        <div
                          key={programme.id}
                          className="p-3 border border-[#171717]/20 rounded-lg bg-white space-y-2"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-[#171717]/60">
                              Programme {index + 1}
                            </span>
                            <button
                              onClick={() => removeProgramme(programme.id)}
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
                              Subtitle
                            </label>
                            <input
                              type="text"
                              value={programme.subtitle}
                              onChange={(e) =>
                                updateProgramme(
                                  programme.id,
                                  'subtitle',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Subtitle"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Description
                            </label>
                            <input
                              type="text"
                              value={programme.description}
                              onChange={(e) =>
                                updateProgramme(
                                  programme.id,
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
                      {registrationData.overviewHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70">
                      {registrationData.overviewDescription}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] mb-2">
                      {registrationData.programmesHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/60 mb-4">
                      {registrationData.programmesSubheading}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {registrationData.programmes.map((programme) => (
                        <div
                          key={programme.id}
                          className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                        >
                          <h4 className="text-lg font-semibold text-[#171717] mb-1">
                            {programme.title}
                          </h4>
                          <p className="text-sm text-[#171717]/70 mb-2">
                            {programme.subtitle}
                          </p>
                          <p className="text-xs text-[#171717]/60 italic">
                            {programme.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Registration Notices */}
          {activeTab === 'notices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Registration Notices ({registrationData.notices.length})
                  </h2>
                </div>
                <button
                  onClick={addNotice}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Notice
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={registrationData.noticesHeading}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
                        noticesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Registration Notices"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Subheading
                  </label>
                  <textarea
                    rows={2}
                    value={registrationData.noticesSubheading}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
                        noticesSubheading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Subheading"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    View All Notices URL
                  </label>
                  <input
                    type="text"
                    value={registrationData.noticesViewAllUrl}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
                        noticesViewAllUrl: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-3">
                  {registrationData.notices.map((notice, index) => (
                    <div
                      key={notice.id}
                      className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#171717]/60">
                          Notice #{index + 1}
                        </span>
                        <button
                          onClick={() => removeNotice(notice.id)}
                          className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="md:col-span-2">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Notice Title
                          </label>
                          <input
                            type="text"
                            value={notice.title}
                            onChange={(e) =>
                              updateNotice(notice.id, 'title', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Notice title"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={notice.description}
                            onChange={(e) =>
                              updateNotice(
                                notice.id,
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
                            Programme
                          </label>
                          <input
                            type="text"
                            value={notice.programme}
                            onChange={(e) =>
                              updateNotice(
                                notice.id,
                                'programme',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Registration"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Date
                          </label>
                          <input
                            type="text"
                            value={notice.date}
                            onChange={(e) =>
                              updateNotice(notice.id, 'date', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="November 20, 2025"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            View URL
                          </label>
                          <input
                            type="text"
                            value={notice.viewUrl}
                            onChange={(e) =>
                              updateNotice(notice.id, 'viewUrl', e.target.value)
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
                            value={notice.downloadUrl}
                            onChange={(e) =>
                              updateNotice(
                                notice.id,
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
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-[#171717] mb-2">
                        {registrationData.noticesHeading}
                      </h3>
                      <p className="text-sm text-[#171717]/60">
                        {registrationData.noticesSubheading}
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm text-[#631012] border border-[#631012] rounded-lg hover:bg-[#631012]/10 transition-colors">
                      View all notices
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Sl. No.
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Notice Title
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Programme(s)
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {registrationData.notices.map((notice, index) => (
                          <tr
                            key={notice.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {index + 1}
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-[#171717]">
                                {notice.title}
                              </div>
                              <div className="text-xs text-[#171717]/60">
                                {notice.description}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-1 text-xs bg-[#631012]/10 text-[#631012] rounded">
                                {notice.programme}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {notice.date}
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
                </div>
              </div>
            </div>
          )}

          {/* Important Instructions */}
          {activeTab === 'instructions' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Important Instructions
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={registrationData.instructionsHeading}
                    onChange={(e) =>
                      setRegistrationData({
                        ...registrationData,
                        instructionsHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Instructions"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Instruction Items
                  </label>
                  <div className="space-y-2">
                    {registrationData.instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={instruction.text}
                          onChange={(e) =>
                            updateInstruction(index, e.target.value)
                          }
                          className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Instruction text"
                        />
                        <button
                          onClick={() => removeInstruction(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addInstruction}
                      className="flex items-center gap-2 px-3 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm"
                    >
                      <Plus size={16} />
                      Add Instruction
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
                    {registrationData.instructionsHeading}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {registrationData.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm text-[#171717]/70">
                        {instruction.text}
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
