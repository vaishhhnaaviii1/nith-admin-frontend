'use client';

import React, { useState } from 'react';
import {
  Save,
  Briefcase,
  Plus,
  Trash2,
  FileText,
  Filter,
  Calendar,
  Download,
  Eye,
  Globe,
} from 'lucide-react';

interface DeputationRule {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  eligibility: string;
  viewUrl: string;
  downloadUrl: string;
}

interface DeputationData {
  heroHeading: string;
  heroDescription: string;
  filterHeading: string;
  categories: string[];
  rulesTableHeading: string;
  rules: DeputationRule[];
}

type TabType = 'hero' | 'rules';

export default function DeputationRulesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [deputationData, setDeputationData] = useState<DeputationData>({
    heroHeading: 'Deputation Rules',
    heroDescription:
      'Comprehensive guidelines for faculty deputation to other institutions, government organizations, and international bodies.',
    filterHeading: 'Filter by Category:',
    categories: [
      'All',
      'Short-term Deputation',
      'Long-term Deputation',
      'Foreign Deputation',
      'Government Deputation',
      'Industry Collaboration',
    ],
    rulesTableHeading: 'Deputation Rules & Guidelines',
    rules: [
      {
        id: 1,
        title: 'Short-term Deputation Guidelines',
        description:
          'Rules and procedures for faculty deputation up to 6 months to academic institutions and research organizations.',
        category: 'Short-term Deputation',
        duration: 'Up to 6 months',
        eligibility: 'Permanent Faculty with 3+ years service',
        viewUrl: '/documents/short-term-deputation',
        downloadUrl: '/documents/short-term-deputation.pdf',
      },
      {
        id: 2,
        title: 'Long-term Deputation Policy',
        description:
          'Guidelines for extended deputation periods exceeding 6 months, including sabbatical provisions and return conditions.',
        category: 'Long-term Deputation',
        duration: '6 months to 3 years',
        eligibility: 'Permanent Faculty with 5+ years service',
        viewUrl: '/documents/long-term-deputation',
        downloadUrl: '/documents/long-term-deputation.pdf',
      },
      {
        id: 3,
        title: 'Foreign Deputation Procedures',
        description:
          'Comprehensive procedures for international deputation including NOC requirements, visa processing, and foreign allowances.',
        category: 'Foreign Deputation',
        duration: 'Variable (3 months to 2 years)',
        eligibility: 'Faculty with international collaboration',
        viewUrl: '/documents/foreign-deputation',
        downloadUrl: '/documents/foreign-deputation.pdf',
      },
      {
        id: 4,
        title: 'Government Deputation Framework',
        description:
          'Framework for faculty deputation to central/state government bodies, regulatory agencies, and public sector organizations.',
        category: 'Government Deputation',
        duration: 'As per government orders',
        eligibility: 'All Faculty members',
        viewUrl: '/documents/government-deputation',
        downloadUrl: '/documents/government-deputation.pdf',
      },
      {
        id: 5,
        title: 'Industry Collaboration Deputation',
        description:
          'Guidelines for faculty deputation to industry partners for collaborative research, consultancy, and knowledge transfer programs.',
        category: 'Industry Collaboration',
        duration: '3 months to 1 year',
        eligibility: 'Faculty with industry research projects',
        viewUrl: '/documents/industry-deputation',
        downloadUrl: '/documents/industry-deputation.pdf',
      },
      {
        id: 6,
        title: 'Lien and Pay Protection Rules',
        description:
          'Rules regarding lien retention, pay protection, and service continuity during deputation period for all categories.',
        category: 'Long-term Deputation',
        duration: 'Applicable to all durations',
        eligibility: 'All Faculty on deputation',
        viewUrl: '/documents/lien-pay-protection',
        downloadUrl: '/documents/lien-pay-protection.pdf',
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
      label: 'Deputation Rules',
      icon: <Briefcase size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(deputationData);
  };

  // Rules
  const updateRule = (
    id: number,
    field: keyof DeputationRule,
    value: string
  ) => {
    setDeputationData({
      ...deputationData,
      rules: deputationData.rules.map((rule) =>
        rule.id === id ? { ...rule, [field]: value } : rule
      ),
    });
  };

  const addRule = () => {
    const newId =
      deputationData.rules.length > 0
        ? Math.max(...deputationData.rules.map((r) => r.id)) + 1
        : 1;
    setDeputationData({
      ...deputationData,
      rules: [
        ...deputationData.rules,
        {
          id: newId,
          title: '',
          description: '',
          category: 'Short-term Deputation',
          duration: '',
          eligibility: '',
          viewUrl: '',
          downloadUrl: '',
        },
      ],
    });
  };

  const removeRule = (id: number) => {
    setDeputationData({
      ...deputationData,
      rules: deputationData.rules.filter((r) => r.id !== id),
    });
  };

  // Categories
  const updateCategory = (index: number, value: string) => {
    const updated = [...deputationData.categories];
    updated[index] = value;
    setDeputationData({ ...deputationData, categories: updated });
  };

  const addCategory = () => {
    setDeputationData({
      ...deputationData,
      categories: [...deputationData.categories, ''],
    });
  };

  const removeCategory = (index: number) => {
    setDeputationData({
      ...deputationData,
      categories: deputationData.categories.filter((_, i) => i !== index),
    });
  };

  // Filter rules
  const filteredRules =
    selectedCategory === 'All'
      ? deputationData.rules
      : deputationData.rules.filter(
          (rule) => rule.category === selectedCategory
        );

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Deputation Rules Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage faculty deputation policies and guidelines
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
                    value={deputationData.heroHeading}
                    onChange={(e) =>
                      setDeputationData({
                        ...deputationData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Deputation Rules"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={deputationData.heroDescription}
                    onChange={(e) =>
                      setDeputationData({
                        ...deputationData,
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
                    {deputationData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {deputationData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rules */}
          {activeTab === 'rules' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Briefcase className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Deputation Rules Management
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
                        value={deputationData.filterHeading}
                        onChange={(e) =>
                          setDeputationData({
                            ...deputationData,
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
                        {deputationData.categories.map((category, index) => (
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
                      Rules ({deputationData.rules.length})
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
                    {deputationData.rules.map((rule, index) => (
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
                              {deputationData.categories
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
                              placeholder="Up to 6 months"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Eligibility
                            </label>
                            <input
                              type="text"
                              value={rule.eligibility}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'eligibility',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="All Faculty Members"
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
                      {deputationData.filterHeading}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {deputationData.categories.map((category, idx) => (
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
                    {deputationData.rules.length} rules
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
                            Eligibility
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
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#631012]/10 text-[#631012] font-medium text-xs">
                                {rule.category.includes('Foreign') && (
                                  <Globe size={12} />
                                )}
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
                              {rule.eligibility}
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
