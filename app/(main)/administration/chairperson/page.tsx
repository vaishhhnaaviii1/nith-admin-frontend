'use client';

import React, { useState } from 'react';
import { Save, User, Plus, Trash2, FileText, Users, Award } from 'lucide-react';

interface PositionHeld {
  title: string;
}

interface FormerChairperson {
  name: string;
  tenure: string;
}

interface ChairpersonData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // Current Chairperson
  currentName: string;
  currentDesignation: string;
  currentOrganization: string;
  currentInstitute: string;
  // Message
  messageHeading: string;
  messageParagraphs: string[];
  messageClosing: string;
  messageSignature: string;
  // Positions Held
  positionsHeading: string;
  positions: PositionHeld[];
  // Former Chairpersons NIT
  formerNITHeading: string;
  formerNITSubheading: string;
  formerNITChairpersons: FormerChairperson[];
  // Former Chairpersons REC
  formerRECHeading: string;
  formerRECChairpersons: FormerChairperson[];
}

// Tab Types
type TabType = 'current' | 'message' | 'positions' | 'formerNIT' | 'formerREC';

export default function ChairpersonPage() {
  const [activeTab, setActiveTab] = useState<TabType>('current');

  const [chairpersonData, setChairpersonData] = useState<ChairpersonData>({
    // Hero Section
    heroHeading: 'Chairperson',
    heroSubheading: 'Board of Governors, NIT Hamirpur',
    // Current Chairperson
    currentName: 'Shri Sanjay Gupta',
    currentDesignation: 'Chairman',
    currentOrganization: 'Board of Governors',
    currentInstitute: 'NIT Hamirpur',
    // Message
    messageHeading: 'Message from the Chairperson',
    messageParagraphs: [
      'Dear Students, Faculty, and Staff,',
      'It gives me immense pleasure to welcome you to the National Institute of Technology, Hamirpur. As the Chairperson of the Board of Governors, I am honored to be associated with an institution that has consistently demonstrated excellence in technical education and research.',
      "NIT Hamirpur has been at the forefront of nurturing young minds and transforming them into competent engineers and responsible citizens. The institute's commitment to academic excellence, innovation, and holistic development is truly commendable.",
      'Our vision is to create an environment that fosters creativity, critical thinking, and entrepreneurship. We strive to provide our students with world-class infrastructure, experienced faculty, and opportunities for overall development that prepare them for the challenges of tomorrow.',
      'I encourage all students to make the most of the resources and opportunities available at this prestigious institution. Work hard, stay curious, and always aim for excellence in whatever you do.',
    ],
    messageClosing: 'Best wishes for your future endeavors.',
    messageSignature: 'Shri Sanjay Gupta',
    // Positions Held
    positionsHeading: 'Positions held:',
    positions: [
      { title: 'Editor-in-Chief of Dainik Jagran – New Delhi' },
      { title: 'Chairman, IIM Amritsar – Punjab' },
      { title: 'Chairman, NIT Hamirpur – Himachal Pradesh' },
    ],
    // Former Chairpersons NIT
    formerNITHeading: 'Former Chairpersons, NIT Hamirpur',
    formerNITSubheading: 'Honoring our distinguished leaders',
    formerNITChairpersons: [
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
    ],
    // Former Chairpersons REC
    formerRECHeading: 'Former Chairman, REC Hamirpur',
    formerRECChairpersons: [
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
      { name: 'Name TBD', tenure: '—' },
    ],
  });

  // Tabs Configuration
  const tabs = [
    {
      id: 'current' as TabType,
      label: 'Current Chairperson',
      icon: <User size={18} />,
    },
    {
      id: 'message' as TabType,
      label: 'Message',
      icon: <FileText size={18} />,
    },
    {
      id: 'positions' as TabType,
      label: 'Positions Held',
      icon: <Award size={18} />,
    },
    {
      id: 'formerNIT' as TabType,
      label: 'Former (NIT)',
      icon: <Users size={18} />,
    },
    {
      id: 'formerREC' as TabType,
      label: 'Former (REC)',
      icon: <Users size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(chairpersonData);
  };

  // Position handlers
  const updatePosition = (index: number, value: string) => {
    const updated = [...chairpersonData.positions];
    updated[index] = { title: value };
    setChairpersonData({ ...chairpersonData, positions: updated });
  };

  const addPosition = () => {
    setChairpersonData({
      ...chairpersonData,
      positions: [...chairpersonData.positions, { title: '' }],
    });
  };

  const removePosition = (index: number) => {
    setChairpersonData({
      ...chairpersonData,
      positions: chairpersonData.positions.filter((_, i) => i !== index),
    });
  };

  // Message paragraph handlers
  const updateParagraph = (index: number, value: string) => {
    const updated = [...chairpersonData.messageParagraphs];
    updated[index] = value;
    setChairpersonData({ ...chairpersonData, messageParagraphs: updated });
  };

  const addParagraph = () => {
    setChairpersonData({
      ...chairpersonData,
      messageParagraphs: [...chairpersonData.messageParagraphs, ''],
    });
  };

  const removeParagraph = (index: number) => {
    setChairpersonData({
      ...chairpersonData,
      messageParagraphs: chairpersonData.messageParagraphs.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Former NIT Chairperson handlers
  const updateFormerNIT = (
    index: number,
    field: keyof FormerChairperson,
    value: string
  ) => {
    const updated = [...chairpersonData.formerNITChairpersons];
    updated[index] = { ...updated[index], [field]: value };
    setChairpersonData({ ...chairpersonData, formerNITChairpersons: updated });
  };

  const addFormerNIT = () => {
    setChairpersonData({
      ...chairpersonData,
      formerNITChairpersons: [
        ...chairpersonData.formerNITChairpersons,
        { name: '', tenure: '' },
      ],
    });
  };

  const removeFormerNIT = (index: number) => {
    setChairpersonData({
      ...chairpersonData,
      formerNITChairpersons: chairpersonData.formerNITChairpersons.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Former REC Chairperson handlers
  const updateFormerREC = (
    index: number,
    field: keyof FormerChairperson,
    value: string
  ) => {
    const updated = [...chairpersonData.formerRECChairpersons];
    updated[index] = { ...updated[index], [field]: value };
    setChairpersonData({ ...chairpersonData, formerRECChairpersons: updated });
  };

  const addFormerREC = () => {
    setChairpersonData({
      ...chairpersonData,
      formerRECChairpersons: [
        ...chairpersonData.formerRECChairpersons,
        { name: '', tenure: '' },
      ],
    });
  };

  const removeFormerREC = (index: number) => {
    setChairpersonData({
      ...chairpersonData,
      formerRECChairpersons: chairpersonData.formerRECChairpersons.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <User className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Chairperson
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Chairperson section content
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <User className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Chairperson Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Chairperson content
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

      {/* Tabs Container */}
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
          {/* Current Chairperson Tab */}
          {activeTab === 'current' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <User className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Current Chairperson
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Page Heading
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.heroHeading}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          heroHeading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Chairperson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Page Subheading
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.heroSubheading}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          heroSubheading: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Board of Governors, NIT Hamirpur"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.currentName}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          currentName: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Shri Sanjay Gupta"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.currentDesignation}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          currentDesignation: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Chairman"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.currentOrganization}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          currentOrganization: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Board of Governors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Institute
                    </label>
                    <input
                      type="text"
                      value={chairpersonData.currentInstitute}
                      onChange={(e) =>
                        setChairpersonData({
                          ...chairpersonData,
                          currentInstitute: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="NIT Hamirpur"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-[#171717]">
                    {chairpersonData.heroHeading}
                  </h2>
                  <p className="text-sm text-[#171717]/60 mb-4">
                    {chairpersonData.heroSubheading}
                  </p>
                  <h3 className="text-xl font-bold text-[#631012]">
                    {chairpersonData.currentName}
                  </h3>
                  <p className="text-sm text-[#171717]">
                    {chairpersonData.currentDesignation}
                  </p>
                  <p className="text-sm text-[#171717]/60">
                    {chairpersonData.currentOrganization}
                  </p>
                  <p className="text-sm text-[#171717]/60">
                    {chairpersonData.currentInstitute}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Message Tab */}
          {activeTab === 'message' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Chairperson Message
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Message Heading
                </label>
                <input
                  type="text"
                  value={chairpersonData.messageHeading}
                  onChange={(e) =>
                    setChairpersonData({
                      ...chairpersonData,
                      messageHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Message from the Chairperson"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-[#171717]">
                  Message Paragraphs
                </label>
                {chairpersonData.messageParagraphs.map((para, index) => (
                  <div key={index} className="flex gap-2">
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => updateParagraph(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                      placeholder={`Paragraph ${index + 1}`}
                    />
                    <button
                      onClick={() => removeParagraph(index)}
                      className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors self-start"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addParagraph}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Paragraph
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Closing Line
                  </label>
                  <input
                    type="text"
                    value={chairpersonData.messageClosing}
                    onChange={(e) =>
                      setChairpersonData({
                        ...chairpersonData,
                        messageClosing: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Best wishes..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Signature
                  </label>
                  <input
                    type="text"
                    value={chairpersonData.messageSignature}
                    onChange={(e) =>
                      setChairpersonData({
                        ...chairpersonData,
                        messageSignature: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {chairpersonData.messageHeading}
                  </h3>
                  <div className="space-y-3">
                    {chairpersonData.messageParagraphs.map((para, index) => (
                      <p key={index} className="text-sm text-[#171717]/80">
                        {para}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-[#171717]/80 mt-4">
                    {chairpersonData.messageClosing}
                  </p>
                  <p className="text-sm font-semibold text-[#631012] mt-2">
                    {chairpersonData.messageSignature}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Positions Held Tab */}
          {activeTab === 'positions' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Award className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Positions Held
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={chairpersonData.positionsHeading}
                  onChange={(e) =>
                    setChairpersonData({
                      ...chairpersonData,
                      positionsHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Positions held:"
                />
              </div>

              <div className="space-y-3">
                {chairpersonData.positions.map((position, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Position {index + 1}
                      </span>
                      <button
                        onClick={() => removePosition(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={position.title}
                      onChange={(e) => updatePosition(index, e.target.value)}
                      className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                      placeholder="Position title"
                    />
                  </div>
                ))}
                <button
                  onClick={addPosition}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Position
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#171717] mb-3">
                    {chairpersonData.positionsHeading}
                  </h3>
                  <ul className="space-y-2">
                    {chairpersonData.positions.map((position, index) => (
                      <li
                        key={index}
                        className="text-sm text-[#171717]/80 flex items-start gap-2"
                      >
                        <span className="text-[#631012]">•</span>
                        {position.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Former NIT Chairpersons Tab */}
          {activeTab === 'formerNIT' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Former Chairpersons (NIT)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={chairpersonData.formerNITHeading}
                    onChange={(e) =>
                      setChairpersonData({
                        ...chairpersonData,
                        formerNITHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Former Chairpersons, NIT Hamirpur"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subheading
                  </label>
                  <input
                    type="text"
                    value={chairpersonData.formerNITSubheading}
                    onChange={(e) =>
                      setChairpersonData({
                        ...chairpersonData,
                        formerNITSubheading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Honoring our distinguished leaders"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {chairpersonData.formerNITChairpersons.map((person, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Person {index + 1}
                      </span>
                      <button
                        onClick={() => removeFormerNIT(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          updateFormerNIT(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={person.tenure}
                        onChange={(e) =>
                          updateFormerNIT(index, 'tenure', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Tenure (e.g., 2015-2020)"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addFormerNIT}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Former Chairperson
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-1">
                    {chairpersonData.formerNITHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/60 mb-4">
                    {chairpersonData.formerNITSubheading}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {chairpersonData.formerNITChairpersons.map(
                      (person, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-[#F9F9F9] rounded-lg"
                        >
                          <p className="text-sm font-semibold text-[#171717]">
                            {person.name}
                          </p>
                          <p className="text-xs text-[#171717]/60">
                            {person.tenure}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Former REC Chairpersons Tab */}
          {activeTab === 'formerREC' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Users className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Former Chairpersons (REC)
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={chairpersonData.formerRECHeading}
                  onChange={(e) =>
                    setChairpersonData({
                      ...chairpersonData,
                      formerRECHeading: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                  placeholder="Former Chairman, REC Hamirpur"
                />
              </div>

              <div className="space-y-3">
                {chairpersonData.formerRECChairpersons.map((person, index) => (
                  <div
                    key={index}
                    className="p-3 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Person {index + 1}
                      </span>
                      <button
                        onClick={() => removeFormerREC(index)}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          updateFormerREC(index, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={person.tenure}
                        onChange={(e) =>
                          updateFormerREC(index, 'tenure', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Tenure (e.g., 1985-1990)"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addFormerREC}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Former Chairman
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#171717] mb-4">
                    {chairpersonData.formerRECHeading}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {chairpersonData.formerRECChairpersons.map(
                      (person, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-[#F9F9F9] rounded-lg"
                        >
                          <p className="text-sm font-semibold text-[#171717]">
                            {person.name}
                          </p>
                          <p className="text-xs text-[#171717]/60">
                            {person.tenure}
                          </p>
                        </div>
                      )
                    )}
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
