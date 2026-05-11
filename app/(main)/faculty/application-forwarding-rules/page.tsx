'use client';

import React, { useState } from 'react';
import {
  Save,
  FileCheck,
  Plus,
  Trash2,
  FileText,
  Filter,
  Calendar,
  Download,
  Eye,
} from 'lucide-react';

interface Rule {
  id: number;
  title: string;
  description: string;
  category: string;
  effectiveDate: string;
  applicableTo: string;
  viewUrl: string;
  downloadUrl: string;
}

interface RulesData {
  heroHeading: string;
  heroDescription: string;
  filterHeading: string;
  categories: string[];
  rulesTableHeading: string;
  rules: Rule[];
}

type TabType = 'hero' | 'rules';

export default function ApplicationForwardingRulesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [rulesData, setRulesData] = useState<RulesData>({
    heroHeading: 'Application Forwarding Rules',
    heroDescription:
      'Comprehensive guidelines and procedures for forwarding faculty applications and requests through proper channels.',
    filterHeading: 'Filter by Category:',
    categories: [
      'All',
      'Leave Applications',
      'Conference Proposals',
      'Research Grants',
      'Administrative Requests',
    ],
    rulesTableHeading: 'Application Forwarding Rules',
    rules: [
      {
        id: 1,
        title: 'Leave Application Forwarding Protocol',
        description:
          'Guidelines for forwarding leave applications through departmental hierarchy and obtaining necessary approvals.',
        category: 'Leave Applications',
        effectiveDate: 'January 1, 2024',
        applicableTo: 'All Faculty Members',
        viewUrl: '/documents/leave-forwarding-protocol',
        downloadUrl: '/documents/leave-forwarding-protocol.pdf',
      },
      {
        id: 2,
        title: 'Conference Participation Approval Process',
        description:
          'Procedures for forwarding conference participation requests including registration, travel, and accommodation approvals.',
        category: 'Conference Proposals',
        effectiveDate: 'July 1, 2023',
        applicableTo: 'Teaching & Research Faculty',
        viewUrl: '/documents/conference-approval-process',
        downloadUrl: '/documents/conference-approval-process.pdf',
      },
      {
        id: 3,
        title: 'Research Grant Application Submission',
        description:
          'Step-by-step process for submitting research grant applications through institutional channels with required endorsements.',
        category: 'Research Grants',
        effectiveDate: 'August 15, 2023',
        applicableTo: 'Research Faculty',
        viewUrl: '/documents/research-grant-submission',
        downloadUrl: '/documents/research-grant-submission.pdf',
      },
      {
        id: 4,
        title: 'Administrative Request Forwarding Guidelines',
        description:
          'General guidelines for forwarding administrative requests including infrastructure, equipment, and resource allocation.',
        category: 'Administrative Requests',
        effectiveDate: 'September 1, 2023',
        applicableTo: 'All Faculty Members',
        viewUrl: '/documents/admin-request-guidelines',
        downloadUrl: '/documents/admin-request-guidelines.pdf',
      },
      {
        id: 5,
        title: 'Sabbatical Leave Application Process',
        description:
          'Detailed procedures for applying and forwarding sabbatical leave requests with documentation requirements.',
        category: 'Leave Applications',
        effectiveDate: 'June 1, 2023',
        applicableTo: 'Permanent Faculty',
        viewUrl: '/documents/sabbatical-leave-process',
        downloadUrl: '/documents/sabbatical-leave-process.pdf',
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
      label: 'Rules',
      icon: <FileCheck size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(rulesData);
  };

  // Rules
  const updateRule = (id: number, field: keyof Rule, value: string) => {
    setRulesData({
      ...rulesData,
      rules: rulesData.rules.map((rule) =>
        rule.id === id ? { ...rule, [field]: value } : rule
      ),
    });
  };

  const addRule = () => {
    const newId =
      rulesData.rules.length > 0
        ? Math.max(...rulesData.rules.map((r) => r.id)) + 1
        : 1;
    setRulesData({
      ...rulesData,
      rules: [
        ...rulesData.rules,
        {
          id: newId,
          title: '',
          description: '',
          category: 'Leave Applications',
          effectiveDate: '',
          applicableTo: '',
          viewUrl: '',
          downloadUrl: '',
        },
      ],
    });
  };

  const removeRule = (id: number) => {
    setRulesData({
      ...rulesData,
      rules: rulesData.rules.filter((r) => r.id !== id),
    });
  };

  // Categories
  const updateCategory = (index: number, value: string) => {
    const updated = [...rulesData.categories];
    updated[index] = value;
    setRulesData({ ...rulesData, categories: updated });
  };

  const addCategory = () => {
    setRulesData({
      ...rulesData,
      categories: [...rulesData.categories, ''],
    });
  };

  const removeCategory = (index: number) => {
    setRulesData({
      ...rulesData,
      categories: rulesData.categories.filter((_, i) => i !== index),
    });
  };

  // Filter rules
  const filteredRules =
    selectedCategory === 'All'
      ? rulesData.rules
      : rulesData.rules.filter((rule) => rule.category === selectedCategory);

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <FileCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Application Forwarding Rules Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage application forwarding procedures and guidelines
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
                    value={rulesData.heroHeading}
                    onChange={(e) =>
                      setRulesData({
                        ...rulesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Application Forwarding Rules"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={rulesData.heroDescription}
                    onChange={(e) =>
                      setRulesData({
                        ...rulesData,
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
                    {rulesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {rulesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rules */}
          {activeTab === 'rules' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileCheck className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Rules Management
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
                        value={rulesData.filterHeading}
                        onChange={(e) =>
                          setRulesData({
                            ...rulesData,
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
                        {rulesData.categories.map((category, index) => (
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
                      Rules ({rulesData.rules.length})
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
                    {rulesData.rules.map((rule, index) => (
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
                              {rulesData.categories
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
                              Effective Date
                            </label>
                            <input
                              type="text"
                              value={rule.effectiveDate}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'effectiveDate',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="January 1, 2024"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Applicable To
                            </label>
                            <input
                              type="text"
                              value={rule.applicableTo}
                              onChange={(e) =>
                                updateRule(
                                  rule.id,
                                  'applicableTo',
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
                      {rulesData.filterHeading}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {rulesData.categories.map((category, idx) => (
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
                    Showing {filteredRules.length} of {rulesData.rules.length}{' '}
                    rules
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
                            Effective Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Rule Title
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Applicable To
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
                            <td className="px-4 py-3 text-sm text-[#171717] font-medium">
                              <div className="flex items-center gap-2">
                                <Calendar
                                  size={14}
                                  className="text-[#631012]"
                                />
                                {rule.effectiveDate}
                              </div>
                            </td>
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
                              {rule.applicableTo}
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
