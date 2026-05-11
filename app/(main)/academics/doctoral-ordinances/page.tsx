'use client';

import React, { useState } from 'react';
import {
  Save,
  BookOpen,
  Plus,
  Trash2,
  FileText,
  Info,
  AlertCircle,
  Eye,
  Download,
} from 'lucide-react';

interface WorkingPoint {
  text: string;
}

interface Ordinance {
  id: number;
  title: string;
  effectiveFrom: string;
  viewUrl: string;
  downloadUrl: string;
}

interface OrdinanceData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutContent: string;
  howItWorksHeading: string;
  howItWorksPoints: WorkingPoint[];
  ordinancesTableHeading: string;
  ordinances: Ordinance[];
  notesHeading: string;
  notes: string[];
}

type TabType = 'hero' | 'about' | 'ordinances' | 'notes';

export default function DoctoralOrdinancesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [ordinanceData, setOrdinanceData] = useState<OrdinanceData>({
    heroHeading: 'Doctoral Ordinances',
    heroDescription:
      'Academic rules and regulations governing doctoral and research programmes at the Institute.',
    aboutHeading: 'About Doctoral Ordinances',
    aboutContent:
      "Doctoral Ordinances set out the regulations governing doctoral (Ph.D.) and research degree programmes at NIT Hamirpur. These documents detail admission criteria, supervision norms, coursework requirements, minimum residency, thesis submission, viva-voce, and award of degree. Ordinances are approved by the Institute's statutory academic bodies and are periodically revised.",
    howItWorksHeading: 'How Doctoral Ordinances Work',
    howItWorksPoints: [
      {
        text: 'Ordinances are applicable from a specified academic session and are effective from the date indicated in the ordinance.',
      },
      {
        text: 'They are implemented after approval by the competent academic authorities and governing bodies.',
      },
      {
        text: 'Ordinances are updated periodically to align with national policies and research best practices.',
      },
      {
        text: 'Students and research scholars are governed by the ordinance applicable to their year of admission unless otherwise specified.',
      },
    ],
    ordinancesTableHeading: 'Doctoral Ordinances Documents',
    ordinances: [
      {
        id: 1,
        title: 'Doctoral Ordinances',
        effectiveFrom: 'w.e.f. 2023',
        viewUrl: '/documents/doctoral-ordinances-2023',
        downloadUrl: '/documents/doctoral-ordinances-2023.pdf',
      },
      {
        id: 2,
        title: 'Doctoral Ordinances (Research & Thesis)',
        effectiveFrom: 'w.e.f. 2019',
        viewUrl: '/documents/doctoral-ordinances-2019',
        downloadUrl: '/documents/doctoral-ordinances-2019.pdf',
      },
      {
        id: 3,
        title: 'Doctoral Ordinances (Ph.D. Regulations)',
        effectiveFrom: 'w.e.f. 2016',
        viewUrl: '/documents/doctoral-ordinances-2016',
        downloadUrl: '/documents/doctoral-ordinances-2016.pdf',
      },
    ],
    notesHeading: 'Important Notes',
    notes: [
      'Research scholars must follow the ordinance applicable to their admission year.',
      'Amendments, if any, will be notified separately.',
      'Ordinances are subject to revision as per Institute n',
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
      label: 'About & How It Works',
      icon: <Info size={18} />,
    },
    {
      id: 'ordinances' as TabType,
      label: 'Ordinances',
      icon: <BookOpen size={18} />,
    },
    {
      id: 'notes' as TabType,
      label: 'Notes',
      icon: <AlertCircle size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(ordinanceData);
  };

  // How It Works Points
  const updateWorkingPoint = (index: number, value: string) => {
    const updated = [...ordinanceData.howItWorksPoints];
    updated[index] = { text: value };
    setOrdinanceData({ ...ordinanceData, howItWorksPoints: updated });
  };

  const addWorkingPoint = () => {
    setOrdinanceData({
      ...ordinanceData,
      howItWorksPoints: [...ordinanceData.howItWorksPoints, { text: '' }],
    });
  };

  const removeWorkingPoint = (index: number) => {
    setOrdinanceData({
      ...ordinanceData,
      howItWorksPoints: ordinanceData.howItWorksPoints.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Ordinances
  const updateOrdinance = (
    id: number,
    field: keyof Ordinance,
    value: string
  ) => {
    setOrdinanceData({
      ...ordinanceData,
      ordinances: ordinanceData.ordinances.map((ord) =>
        ord.id === id ? { ...ord, [field]: value } : ord
      ),
    });
  };

  const addOrdinance = () => {
    const newId =
      ordinanceData.ordinances.length > 0
        ? Math.max(...ordinanceData.ordinances.map((o) => o.id)) + 1
        : 1;
    setOrdinanceData({
      ...ordinanceData,
      ordinances: [
        ...ordinanceData.ordinances,
        {
          id: newId,
          title: '',
          effectiveFrom: '',
          viewUrl: '',
          downloadUrl: '',
        },
      ],
    });
  };

  const removeOrdinance = (id: number) => {
    setOrdinanceData({
      ...ordinanceData,
      ordinances: ordinanceData.ordinances.filter((o) => o.id !== id),
    });
  };

  // Notes
  const updateNote = (index: number, value: string) => {
    const updated = [...ordinanceData.notes];
    updated[index] = value;
    setOrdinanceData({ ...ordinanceData, notes: updated });
  };

  const addNote = () => {
    setOrdinanceData({
      ...ordinanceData,
      notes: [...ordinanceData.notes, ''],
    });
  };

  const removeNote = (index: number) => {
    setOrdinanceData({
      ...ordinanceData,
      notes: ordinanceData.notes.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Doctoral Ordinances Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage doctoral and research programme ordinances
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
                    value={ordinanceData.heroHeading}
                    onChange={(e) =>
                      setOrdinanceData({
                        ...ordinanceData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Doctoral Ordinances"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={ordinanceData.heroDescription}
                    onChange={(e) =>
                      setOrdinanceData({
                        ...ordinanceData,
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
                    {ordinanceData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {ordinanceData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* About & How It Works */}
          {activeTab === 'about' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About & How It Works
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    About Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        About Heading
                      </label>
                      <input
                        type="text"
                        value={ordinanceData.aboutHeading}
                        onChange={(e) =>
                          setOrdinanceData({
                            ...ordinanceData,
                            aboutHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="About Doctoral Ordinances"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        About Content
                      </label>
                      <textarea
                        rows={6}
                        value={ordinanceData.aboutContent}
                        onChange={(e) =>
                          setOrdinanceData({
                            ...ordinanceData,
                            aboutContent: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Enter about content"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    How It Works
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Section Heading
                      </label>
                      <input
                        type="text"
                        value={ordinanceData.howItWorksHeading}
                        onChange={(e) =>
                          setOrdinanceData({
                            ...ordinanceData,
                            howItWorksHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="How Doctoral Ordinances Work"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Working Points
                        </label>
                        <button
                          onClick={addWorkingPoint}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Point
                        </button>
                      </div>
                      <div className="space-y-2">
                        {ordinanceData.howItWorksPoints.map((point, index) => (
                          <div key={index} className="flex gap-2">
                            <textarea
                              rows={2}
                              value={point.text}
                              onChange={(e) =>
                                updateWorkingPoint(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Point ${index + 1}`}
                            />
                            <button
                              onClick={() => removeWorkingPoint(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors self-start"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
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
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {ordinanceData.aboutHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70 leading-relaxed">
                      {ordinanceData.aboutContent}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {ordinanceData.howItWorksHeading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {ordinanceData.howItWorksPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-[#171717]/70">
                          {point.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ordinances Table */}
          {activeTab === 'ordinances' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Ordinances Documents
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Table Heading
                  </label>
                  <input
                    type="text"
                    value={ordinanceData.ordinancesTableHeading}
                    onChange={(e) =>
                      setOrdinanceData({
                        ...ordinanceData,
                        ordinancesTableHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Doctoral Ordinances Documents"
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Ordinances ({ordinanceData.ordinances.length})
                    </h3>
                    <button
                      onClick={addOrdinance}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Ordinance
                    </button>
                  </div>

                  <div className="space-y-3">
                    {ordinanceData.ordinances.map((ordinance, index) => (
                      <div
                        key={ordinance.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Ordinance {index + 1}
                          </span>
                          <button
                            onClick={() => removeOrdinance(ordinance.id)}
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
                              value={ordinance.title}
                              onChange={(e) =>
                                updateOrdinance(
                                  ordinance.id,
                                  'title',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Doctoral Ordinances"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Effective From
                            </label>
                            <input
                              type="text"
                              value={ordinance.effectiveFrom}
                              onChange={(e) =>
                                updateOrdinance(
                                  ordinance.id,
                                  'effectiveFrom',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="w.e.f. 2023"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              View URL
                            </label>
                            <input
                              type="text"
                              value={ordinance.viewUrl}
                              onChange={(e) =>
                                updateOrdinance(
                                  ordinance.id,
                                  'viewUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/ordinance"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Download URL
                            </label>
                            <input
                              type="text"
                              value={ordinance.downloadUrl}
                              onChange={(e) =>
                                updateOrdinance(
                                  ordinance.id,
                                  'downloadUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/ordinance.pdf"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Sl. No.
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Effective From
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Document Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {ordinanceData.ordinances.map((ordinance, index) => (
                          <tr
                            key={ordinance.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {index + 1}
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {ordinance.title}
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {ordinance.effectiveFrom}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors">
                                  <Eye size={14} />
                                  View
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
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

          {/* Important Notes */}
          {activeTab === 'notes' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <AlertCircle className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Important Notes
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Notes Heading
                  </label>
                  <input
                    type="text"
                    value={ordinanceData.notesHeading}
                    onChange={(e) =>
                      setOrdinanceData({
                        ...ordinanceData,
                        notesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Notes"
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Notes ({ordinanceData.notes.length})
                    </h3>
                    <button
                      onClick={addNote}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Note
                    </button>
                  </div>

                  <div className="space-y-2">
                    {ordinanceData.notes.map((note, index) => (
                      <div key={index} className="flex gap-2">
                        <textarea
                          rows={2}
                          value={note}
                          onChange={(e) => updateNote(index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder={`Note ${index + 1}`}
                        />
                        <button
                          onClick={() => removeNote(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors self-start"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">
                      {ordinanceData.notesHeading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {ordinanceData.notes.map((note, idx) => (
                        <li key={idx} className="text-sm text-amber-800">
                          {note}
                        </li>
                      ))}
                    </ul>
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
