'use client';

import React, { useState } from 'react';
import {
  Save,
  Presentation,
  Plus,
  Trash2,
  FileText,
  Filter,
  Calendar,
  Download,
  Eye,
  Users,
} from 'lucide-react';

interface WorkshopRule {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  participantLimit: string;
  viewUrl: string;
  downloadUrl: string;
}

interface WorkshopData {
  heroHeading: string;
  heroDescription: string;
  filterHeading: string;
  categories: string[];
  rulesTableHeading: string;
  rules: WorkshopRule[];
}

type TabType = 'hero' | 'rules';

export default function RulesConductingWorkshopsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [workshopData, setWorkshopData] = useState<WorkshopData>({
    heroHeading: 'Rules for Conducting Workshops',
    heroDescription:
      'Comprehensive guidelines and regulations for organizing and conducting workshops, seminars, and training programs at the Institute.',
    filterHeading: 'Filter by Category:',
    categories: [
      'All',
      'Technical Workshops',
      'Faculty Development Programs',
      'Student Training',
      'Industry Collaboration',
      'International Workshops',
    ],
    rulesTableHeading: 'Workshop Conducting Rules',
    rules: [
      {
        id: 1,
        title: 'Technical Workshop Organization Guidelines',
        description:
          'Guidelines for organizing technical workshops including venue booking, equipment requirements, and participant registration procedures.',
        category: 'Technical Workshops',
        duration: '1-5 days',
        participantLimit: '30-50 participants',
        viewUrl: '/documents/technical-workshop-guidelines',
        downloadUrl: '/documents/technical-workshop-guidelines.pdf',
      },
      {
        id: 2,
        title: 'Faculty Development Program Framework',
        description:
          'Framework for conducting FDPs including resource person selection, content planning, and certificate issuance protocols.',
        category: 'Faculty Development Programs',
        duration: '1-2 weeks',
        participantLimit: '20-40 faculty members',
        viewUrl: '/documents/fdp-framework',
        downloadUrl: '/documents/fdp-framework.pdf',
      },
      {
        id: 3,
        title: 'Student Training Workshop Procedures',
        description:
          'Procedures for student-focused training workshops covering soft skills, technical training, and career development programs.',
        category: 'Student Training',
        duration: '2-7 days',
        participantLimit: '50-100 students',
        viewUrl: '/documents/student-training-procedures',
        downloadUrl: '/documents/student-training-procedures.pdf',
      },
      {
        id: 4,
        title: 'Industry Collaboration Workshop Guidelines',
        description:
          'Guidelines for workshops conducted in collaboration with industry partners including MoU requirements and sponsorship protocols.',
        category: 'Industry Collaboration',
        duration: '1-3 days',
        participantLimit: '25-60 participants',
        viewUrl: '/documents/industry-workshop-guidelines',
        downloadUrl: '/documents/industry-workshop-guidelines.pdf',
      },
      {
        id: 5,
        title: 'International Workshop Hosting Rules',
        description:
          'Rules and procedures for hosting international workshops including visa facilitation, accommodation, and foreign expert invitations.',
        category: 'International Workshops',
        duration: '3-10 days',
        participantLimit: '30-80 participants',
        viewUrl: '/documents/international-workshop-rules',
        downloadUrl: '/documents/international-workshop-rules.pdf',
      },
      {
        id: 6,
        title: 'Budget and Financial Guidelines',
        description:
          'Financial guidelines for workshop budgeting, fund allocation, registration fees, and expense reimbursement procedures.',
        category: 'Technical Workshops',
        duration: 'Applicable to all workshops',
        participantLimit: 'Variable',
        viewUrl: '/documents/workshop-budget-guidelines',
        downloadUrl: '/documents/workshop-budget-guidelines.pdf',
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
      id: 'rules' as TabType,
      label: 'Workshop Rules',
      icon: <Presentation size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(workshopData);
  };

  // Rules
  const updateRule = (id: number, field: keyof WorkshopRule, value: string) => {
    setWorkshopData({
      ...workshopData,
      rules: workshopData.rules.map((rule) =>
        rule.id === id ? { ...rule, [field]: value } : rule
      ),
    });
  };

  const addRule = () => {
    const newId =
      workshopData.rules.length > 0
        ? Math.max(...workshopData.rules.map((r) => r.id)) + 1
        : 1;
    setWorkshopData({
      ...workshopData,
      rules: [
        ...workshopData.rules,
        {
          id: newId,
          title: '',
          description: '',
          category: 'Technical Workshops',
          duration: '',
          participantLimit: '',
          viewUrl: '',
          downloadUrl: '',
        },
      ],
    });
  };

  const removeRule = (id: number) => {
    setWorkshopData({
      ...workshopData,
      rules: workshopData.rules.filter((r) => r.id !== id),
    });
  };

  // Categories
  const updateCategory = (index: number, value: string) => {
    const updated = [...workshopData.categories];
    updated[index] = value;
    setWorkshopData({ ...workshopData, categories: updated });
  };

  const addCategory = () => {
    setWorkshopData({
      ...workshopData,
      categories: [...workshopData.categories, ''],
    });
  };

  const removeCategory = (index: number) => {
    setWorkshopData({
      ...workshopData,
      categories: workshopData.categories.filter((_, i) => i !== index),
    });
  };

  // Filter rules
  const filteredRules =
    selectedCategory === 'All'
      ? workshopData.rules
      : workshopData.rules.filter((rule) => rule.category === selectedCategory);

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Presentation className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Workshop Rules Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage workshop conducting guidelines and regulations
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
                    value={workshopData.heroHeading}
                    onChange={(e) =>
                      setWorkshopData({
                        ...workshopData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Rules for Conducting Workshops"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={workshopData.heroDescription}
                    onChange={(e) =>
                      setWorkshopData({
                        ...workshopData,
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
                    {workshopData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {workshopData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rules */}
          {activeTab === 'rules' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Presentation className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Workshop Rules Management
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Filter Categories
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Filter Heading
                      </label>
                      <input
                        type="text"
                        value={workshopData.filterHeading}
                        onChange={(e) =>
                          setWorkshopData({
                            ...workshopData,
                            filterHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Filter by Category:"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Categories
                        </label>
                        <button
                          onClick={addCategory}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Category
                        </button>
                      </div>
                      <div className="space-y-2">
                        {workshopData.categories.map((category, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={category}
                              onChange={(e) =>
                                updateCategory(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Category ${index + 1}`}
                            />
                            {index > 0 && (
                              <button
                                onClick={() => removeCategory(index)}
                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Rules ({workshopData.rules.length})
                    </h3>
                    <button
                      onClick={addRule}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Rule
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {workshopData.rules.map((rule, index) => (
                      <div
                        key={rule.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Rule {index + 1}
                          </span>
                          <button
                            onClick={() => removeRule(rule.id)}
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
                              value={rule.title}
                              onChange={(e) =>
                                updateRule(rule.id, 'title', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Rule Title"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Description
                            </label>
                            <textarea
                              rows={2}
                              value={rule.description}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'description',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Rule description"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Category
                            </label>
                            <select
                              value={rule.category}
                              onChange={(e) =>
                                updateRule(rule.id, 'category', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            >
                              {workshopData.categories
                                .filter((cat) => cat !== 'All')
                                .map((cat, idx) => (
                                  <option key={idx} value={cat}>
                                    {cat}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Duration
                            </label>
                            <input
                              type="text"
                              value={rule.duration}
                              onChange={(e) =>
                                updateRule(rule.id, 'duration', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="1-5 days"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Participant Limit
                            </label>
                            <input
                              type="text"
                              value={rule.participantLimit}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'participantLimit',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="30-50 participants"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              View URL
                            </label>
                            <input
                              type="text"
                              value={rule.viewUrl}
                              onChange={(e) =>
                                updateRule(rule.id, 'viewUrl', e.target.value)
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/rule"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Download URL
                            </label>
                            <input
                              type="text"
                              value={rule.downloadUrl}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'downloadUrl',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="/documents/rule.pdf"
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
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  {/* Filter Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="text-[#631012] w-5 h-5" />
                    <h3 className="text-lg font-semibold text-[#171717]">
                      {workshopData.filterHeading}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {workshopData.categories.map((category, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#631012] text-white'
                            : 'bg-[#F9F9F9] text-[#171717] hover:bg-[#631012]/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="text-sm text-[#171717]/60 mb-2">
                    Showing {filteredRules.length} of{' '}
                    {workshopData.rules.length} rules
                  </div>

                  <div className="text-base font-semibold text-[#171717] mb-3">
                    Total: {filteredRules.length} rules
                  </div>

                  {/* Rules Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Rule Title
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Duration
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Participant Limit
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {filteredRules.map((rule) => (
                          <tr
                            key={rule.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3">
                              <div className="text-sm font-semibold text-[#171717]">
                                {rule.title}
                              </div>
                              <div className="text-xs text-[#171717]/60 mt-1">
                                {rule.description}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              <span className="inline-flex px-2 py-1 rounded bg-[#631012]/10 text-[#631012] font-medium text-xs">
                                {rule.category}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              <div className="flex items-center gap-1">
                                <Calendar
                                  size={14}
                                  className="text-[#631012]"
                                />
                                {rule.duration}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              <div className="flex items-center gap-1">
                                <Users size={14} className="text-[#631012]" />
                                {rule.participantLimit}
                              </div>
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
        </div>
      </div>
    </div>
  );
}
