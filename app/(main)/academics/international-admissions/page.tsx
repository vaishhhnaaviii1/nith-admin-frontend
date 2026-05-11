'use client';

import React, { useState } from 'react';
import {
  Save,
  Globe,
  Plus,
  Trash2,
  FileText,
  Info,
  Download,
  Eye,
  MapPin,
  Mail,
} from 'lucide-react';

interface Highlight {
  title: string;
  description: string;
}

interface QuickFactItem {
  label: string;
  value: string;
}

interface Notice {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  viewUrl: string;
  downloadUrl: string;
}

interface InternationalAdmissionsData {
  heroHeading: string;
  heroDescription: string;
  welcomeHeading: string;
  welcomeDescription: string;
  highlights: Highlight[];
  quickFactsHeading: string;
  quickFacts: QuickFactItem[];
  noticesHeading: string;
  notices: Notice[];
}

type TabType = 'hero' | 'introduction' | 'notices';

export default function InternationalAdmissionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [admissionsData, setAdmissionsData] =
    useState<InternationalAdmissionsData>({
      heroHeading: 'International Admissions',
      heroDescription:
        'Opportunities for international students to study at National Institute of Technology Hamirpur, India',
      welcomeHeading:
        'Welcome to National Institute of Technology (NIT) Hamirpur',
      welcomeDescription:
        "Welcome to National Institute of Technology (NIT) Hamirpur in Himachal Pradesh, India! We're thrilled to have international students join our prestigious institute for their educational journey. NIT Hamirpur is renowned for its outstanding academic programs, dedication to research, and commitment to nurturing innovation and talent. Our institute offers a rich learning environment that encourages academic excellence while fostering a dynamic multicultural community. With a strong legacy of achievement and a forward-looking approach, NIT Hamirpur is the perfect place for you to pursue your academic and personal goals. Explore our diverse academic disciplines, engage with our experienced faculty, and become a part of the vibrant campus life that makes NIT Hamirpur a unique place to learn and grow.",
      highlights: [
        {
          title: 'Academic Strength',
          description:
            'Strong engineering and science programmes with research-led teaching.',
        },
        {
          title: 'International Community',
          description:
            'A growing community of students from neighbouring countries and beyond.',
        },
      ],
      quickFactsHeading: 'Quick Facts',
      quickFacts: [
        { label: 'Location', value: 'Hamirpur, Himachal Pradesh' },
        { label: 'Programs', value: 'UG, PG, Ph.D.' },
        {
          label: 'International Office',
          value: 'International Admission Office, Office of Dean Academic',
        },
        { label: 'Contact', value: 'iao_nith@nith.ac.in' },
      ],
      noticesHeading: 'International Admissions Notices',
      notices: [
        {
          id: 1,
          title: 'International Admissions – Application Open',
          description:
            'Application start date and instructions for international applicants.',
          category: 'Application',
          date: '01-12-2025',
          viewUrl: '#',
          downloadUrl: '#',
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
      id: 'introduction' as TabType,
      label: 'Introduction & Highlights',
      icon: <Info size={18} />,
    },
    {
      id: 'notices' as TabType,
      label: 'Admissions Notices',
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

  const updateQuickFact = (
    index: number,
    field: 'label' | 'value',
    value: string
  ) => {
    const updated = [...admissionsData.quickFacts];
    updated[index] = { ...updated[index], [field]: value };
    setAdmissionsData({ ...admissionsData, quickFacts: updated });
  };

  const addQuickFact = () => {
    setAdmissionsData({
      ...admissionsData,
      quickFacts: [...admissionsData.quickFacts, { label: '', value: '' }],
    });
  };

  const removeQuickFact = (index: number) => {
    setAdmissionsData({
      ...admissionsData,
      quickFacts: admissionsData.quickFacts.filter((_, i) => i !== index),
    });
  };

  const updateNotice = (id: number, field: keyof Notice, value: string) => {
    setAdmissionsData({
      ...admissionsData,
      notices: admissionsData.notices.map((notice) =>
        notice.id === id ? { ...notice, [field]: value } : notice
      ),
    });
  };

  const addNotice = () => {
    const newId =
      admissionsData.notices.length > 0
        ? Math.max(...admissionsData.notices.map((n) => n.id)) + 1
        : 1;
    setAdmissionsData({
      ...admissionsData,
      notices: [
        ...admissionsData.notices,
        {
          id: newId,
          title: '',
          description: '',
          category: 'Application',
          date: '',
          viewUrl: '#',
          downloadUrl: '#',
        },
      ],
    });
  };

  const removeNotice = (id: number) => {
    setAdmissionsData({
      ...admissionsData,
      notices: admissionsData.notices.filter((n) => n.id !== id),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                International Admissions Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage international admissions information
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
                    placeholder="International Admissions"
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

          {/* Introduction & Highlights */}
          {activeTab === 'introduction' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Introduction & Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Welcome Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={admissionsData.welcomeHeading}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            welcomeHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Welcome to NIT Hamirpur"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={8}
                        value={admissionsData.welcomeDescription}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            welcomeDescription: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Welcome message"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Highlights ({admissionsData.highlights.length})
                    </h3>
                    <button
                      onClick={addHighlight}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Highlight
                    </button>
                  </div>
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
                              updateHighlight(index, 'title', e.target.value)
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
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Quick Facts
                    </h3>
                    <button
                      onClick={addQuickFact}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Fact
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Section Heading
                      </label>
                      <input
                        type="text"
                        value={admissionsData.quickFactsHeading}
                        onChange={(e) =>
                          setAdmissionsData({
                            ...admissionsData,
                            quickFactsHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Quick Facts"
                      />
                    </div>
                    <div className="space-y-2">
                      {admissionsData.quickFacts.map((fact, index) => (
                        <div
                          key={index}
                          className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-[#171717]/60">
                              Fact {index + 1}
                            </span>
                            <button
                              onClick={() => removeQuickFact(index)}
                              className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Label
                              </label>
                              <input
                                type="text"
                                value={fact.label}
                                onChange={(e) =>
                                  updateQuickFact(
                                    index,
                                    'label',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Location"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Value
                              </label>
                              <input
                                type="text"
                                value={fact.value}
                                onChange={(e) =>
                                  updateQuickFact(
                                    index,
                                    'value',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="Hamirpur, HP"
                              />
                            </div>
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
                      {admissionsData.welcomeHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70">
                      {admissionsData.welcomeDescription}
                    </p>
                  </div>

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

                  <div className="p-4 bg-[#631012]/5 rounded-lg border border-[#631012]/20">
                    <h4 className="text-lg font-semibold text-[#171717] mb-3">
                      {admissionsData.quickFactsHeading}
                    </h4>
                    <div className="space-y-2">
                      {admissionsData.quickFacts.map((fact, index) => (
                        <div key={index} className="flex gap-2">
                          <span className="text-sm font-medium text-[#171717]">
                            {fact.label}:
                          </span>
                          <span className="text-sm text-[#171717]/70">
                            {fact.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Admissions Notices */}
          {activeTab === 'notices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Admissions Notices ({admissionsData.notices.length})
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
                    value={admissionsData.noticesHeading}
                    onChange={(e) =>
                      setAdmissionsData({
                        ...admissionsData,
                        noticesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="International Admissions Notices"
                  />
                </div>

                <div className="space-y-3">
                  {admissionsData.notices.map((notice, index) => (
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
                            Category
                          </label>
                          <input
                            type="text"
                            value={notice.category}
                            onChange={(e) =>
                              updateNotice(
                                notice.id,
                                'category',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Application"
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
                            placeholder="01-12-2025"
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
                  <h3 className="text-2xl font-bold text-[#171717] mb-4">
                    {admissionsData.noticesHeading}
                  </h3>

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
                            Category
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
                        {admissionsData.notices.map((notice, index) => (
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
                                {notice.category}
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
        </div>
      </div>
    </div>
  );
}
