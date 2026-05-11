'use client';

import React, { useState } from 'react';
import {
  Save,
  DollarSign,
  Plus,
  Trash2,
  FileText,
  Info,
  Download,
} from 'lucide-react';

interface KeyComponent {
  text: string;
}

interface ImportantNote {
  title: string;
  description: string;
}

interface FeeStructureData {
  heroHeading: string;
  heroDescription: string;
  overviewHeading: string;
  relevanceTitle: string;
  relevanceDescription: string;
  keyComponentsTitle: string;
  keyComponents: KeyComponent[];
  notesHeading: string;
  importantNotes: ImportantNote[];
  downloadMessage: string;
  pdfViewUrl: string;
  pdfDownloadUrl: string;
  contactMessage: string;
}

type TabType = 'hero' | 'overview' | 'notes' | 'download';

export default function FeeStructurePage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [feeData, setFeeData] = useState<FeeStructureData>({
    heroHeading: 'Fee Structure',
    heroDescription:
      'Comprehensive details of academic fees applicable to UG, PG, PhD and other programmes, including payment guidelines and access to the official fee document.',
    overviewHeading: 'Fee Structure Overview',
    relevanceTitle: 'Relevance & Purpose',
    relevanceDescription:
      'The Fee Structure provides a transparent summary of charges payable by students enrolled in UG, PG, PhD and other programmes of the Institute. It is prepared in accordance with Institute regulations and approved by the competent authorities.',
    keyComponentsTitle: 'Key Components',
    keyComponents: [
      { text: 'Tuition fees' },
      { text: 'Registration & examination fees' },
      { text: 'Hostel & mess charges' },
      { text: 'One-time admission fees' },
      { text: 'Caution money / security deposits' },
      { text: 'Other incidental fees (library, lab, medical)' },
    ],
    notesHeading: 'Important Notes & Guidelines',
    importantNotes: [
      {
        title: 'Category-wise Applicability',
        description:
          'Fees may vary by category (General / OBC / SC / ST / PwD) in accordance with Institute policies.',
      },
      {
        title: 'Semester-wise Payment',
        description:
          'Fees are generally payable per semester as per the academic calendar.',
      },
      {
        title: 'Refund Rules',
        description:
          'Refunds are processed as per the Institute refund policy and applicable regulations.',
      },
      {
        title: 'Mode of Payment',
        description:
          'Payments should be made via modes notified by the Institute (online gateway, bank transfer, etc.).',
      },
      {
        title: 'Revision of Fees',
        description:
          'Fees are subject to revision by Institute authorities; the official PDF is authoritative.',
      },
    ],
    downloadMessage:
      'For complete details, download the official fee structure document.',
    pdfViewUrl: '#',
    pdfDownloadUrl: '#',
    contactMessage:
      'If the link does not work, please contact the Office of Academic Affairs.',
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
      id: 'notes' as TabType,
      label: 'Important Notes',
      icon: <FileText size={18} />,
    },
    {
      id: 'download' as TabType,
      label: 'Download Section',
      icon: <Download size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(feeData);
  };

  const updateKeyComponent = (index: number, value: string) => {
    const updated = [...feeData.keyComponents];
    updated[index] = { text: value };
    setFeeData({ ...feeData, keyComponents: updated });
  };

  const addKeyComponent = () => {
    setFeeData({
      ...feeData,
      keyComponents: [...feeData.keyComponents, { text: '' }],
    });
  };

  const removeKeyComponent = (index: number) => {
    setFeeData({
      ...feeData,
      keyComponents: feeData.keyComponents.filter((_, i) => i !== index),
    });
  };

  const updateImportantNote = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    const updated = [...feeData.importantNotes];
    updated[index] = { ...updated[index], [field]: value };
    setFeeData({ ...feeData, importantNotes: updated });
  };

  const addImportantNote = () => {
    setFeeData({
      ...feeData,
      importantNotes: [
        ...feeData.importantNotes,
        { title: '', description: '' },
      ],
    });
  };

  const removeImportantNote = (index: number) => {
    setFeeData({
      ...feeData,
      importantNotes: feeData.importantNotes.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Fee Structure Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit fee structure information and guidelines
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
                    value={feeData.heroHeading}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Fee Structure"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={feeData.heroDescription}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
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
                    {feeData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {feeData.heroDescription}
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
                    value={feeData.overviewHeading}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
                        overviewHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Fee Structure Overview"
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    Relevance & Purpose
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={feeData.relevanceTitle}
                        onChange={(e) =>
                          setFeeData({
                            ...feeData,
                            relevanceTitle: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Relevance & Purpose"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        value={feeData.relevanceDescription}
                        onChange={(e) =>
                          setFeeData({
                            ...feeData,
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
                    Key Components
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={feeData.keyComponentsTitle}
                        onChange={(e) =>
                          setFeeData({
                            ...feeData,
                            keyComponentsTitle: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Key Components"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Component Items
                      </label>
                      <div className="space-y-2">
                        {feeData.keyComponents.map((component, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={component.text}
                              onChange={(e) =>
                                updateKeyComponent(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Component text"
                            />
                            <button
                              onClick={() => removeKeyComponent(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={addKeyComponent}
                          className="flex items-center gap-2 px-3 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm"
                        >
                          <Plus size={16} />
                          Add Component
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
                    {feeData.overviewHeading}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#171717] mb-2">
                        {feeData.relevanceTitle}
                      </h4>
                      <p className="text-sm text-[#171717]/70">
                        {feeData.relevanceDescription}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#171717] mb-2">
                        {feeData.keyComponentsTitle}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {feeData.keyComponents.map((component, index) => (
                          <li key={index} className="text-sm text-[#171717]/70">
                            {component.text}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  Important Notes & Guidelines
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Notes Heading
                  </label>
                  <input
                    type="text"
                    value={feeData.notesHeading}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
                        notesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Notes & Guidelines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Note Items
                  </label>
                  <div className="space-y-3">
                    {feeData.importantNotes.map((note, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-2"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Note {index + 1}
                          </span>
                          <button
                            onClick={() => removeImportantNote(index)}
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
                            value={note.title}
                            onChange={(e) =>
                              updateImportantNote(
                                index,
                                'title',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Note title"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={note.description}
                            onChange={(e) =>
                              updateImportantNote(
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
                      onClick={addImportantNote}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      <Plus size={18} />
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
                  <h3 className="text-2xl font-bold text-[#171717] mb-4">
                    {feeData.notesHeading}
                  </h3>
                  <div className="space-y-4">
                    {feeData.importantNotes.map((note, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10"
                      >
                        <h5 className="text-base font-semibold text-[#171717] mb-2">
                          {note.title}
                        </h5>
                        <p className="text-sm text-[#171717]/70">
                          {note.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Download Section */}
          {activeTab === 'download' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Download className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Download Section
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Download Message
                  </label>
                  <textarea
                    rows={2}
                    value={feeData.downloadMessage}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
                        downloadMessage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="For complete details..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      PDF View URL
                    </label>
                    <input
                      type="text"
                      value={feeData.pdfViewUrl}
                      onChange={(e) =>
                        setFeeData({
                          ...feeData,
                          pdfViewUrl: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      PDF Download URL
                    </label>
                    <input
                      type="text"
                      value={feeData.pdfDownloadUrl}
                      onChange={(e) =>
                        setFeeData({
                          ...feeData,
                          pdfDownloadUrl: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Contact Message
                  </label>
                  <textarea
                    rows={2}
                    value={feeData.contactMessage}
                    onChange={(e) =>
                      setFeeData({
                        ...feeData,
                        contactMessage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="If the link does not work..."
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-[#171717]/70 mb-4">
                      {feeData.downloadMessage}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors">
                        <Download size={18} />
                        View Fee Structure (PDF)
                      </button>
                      <button className="flex items-center justify-center gap-2 px-6 py-3 border border-[#631012] text-[#631012] rounded-lg hover:bg-[#631012]/10 transition-colors">
                        <Download size={18} />
                        Download Fee Structure (PDF)
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F9F9F9] border border-[#171717]/20 rounded-lg text-center">
                    <p className="text-sm text-[#171717]/70 italic">
                      {feeData.contactMessage}
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
