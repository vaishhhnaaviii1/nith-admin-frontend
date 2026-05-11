'use client';

import React, { useState } from 'react';
import {
  Save,
  Palette,
  Plus,
  Trash2,
  FileText,
  Info,
  List,
} from 'lucide-react';

interface CulturalItem {
  id: number;
  name: string;
  type: string;
  description: string;
  founded: string;
  status: string;
}

interface IntroData {
  heroHeading: string;
  heroDescription: string;
  introHeading: string;
  introDescription: string;
  introParagraphs: string[];
  listHeading: string;
  listSubtitle: string;
  items: CulturalItem[];
}

type TabType = 'hero' | 'introduction' | 'list';

export default function CulturalIntroductionListPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [introData, setIntroData] = useState<IntroData>({
    heroHeading: 'Cultural Introduction & List',
    heroDescription:
      'A comprehensive overview of cultural activities and organizations at NIT Hamirpur that enrich student life.',
    introHeading: 'Introduction to Cultural Life',
    introDescription:
      'NIT Hamirpur has a vibrant cultural ecosystem that celebrates diversity, creativity, and artistic excellence.',
    introParagraphs: [
      'The cultural wing at NIT Hamirpur operates under the guidance of the Dean of Student Welfare and is managed by the Cultural Council comprising student representatives from each hostel.',
      'Our cultural activities span across five major domains: Music, Dance, Theatre, Fine Arts, and Literary activities. Each domain is represented by dedicated clubs with experienced coordinators.',
      'Throughout the academic year, various cultural events, competitions, and workshops are organized to provide platforms for students to showcase their talents and learn new skills.',
      'The annual cultural festival "Hill\'ffair" is the flagship event that attracts participants from colleges across India and features professional performances, competitions, and exhibitions.',
    ],
    listHeading: 'Cultural Organizations',
    listSubtitle: 'Complete list of cultural bodies and their details',
    items: [
      {
        id: 1,
        name: 'Cultural Council',
        type: 'Governing Body',
        description: 'Central body overseeing all cultural activities',
        founded: '1986',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Dhwani - Music Club',
        type: 'Club',
        description: 'Promotes musical talents and organizes concerts',
        founded: '1995',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Nrityam - Dance Club',
        type: 'Club',
        description: 'Platform for all dance forms',
        founded: '1998',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Rangmanch - Drama Club',
        type: 'Club',
        description: 'Theatre and dramatics activities',
        founded: '1997',
        status: 'Active',
      },
      {
        id: 5,
        name: 'Kala - Fine Arts Club',
        type: 'Club',
        description: 'Visual arts and creative expressions',
        founded: '2000',
        status: 'Active',
      },
      {
        id: 6,
        name: 'Sahitya - Literary Club',
        type: 'Club',
        description: 'Literary activities and publications',
        founded: '1992',
        status: 'Active',
      },
      {
        id: 7,
        name: "Hill'ffair Committee",
        type: 'Event Committee',
        description: 'Organizes annual cultural festival',
        founded: '1990',
        status: 'Active',
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
      label: 'Introduction',
      icon: <Info size={18} />,
    },
    {
      id: 'list' as TabType,
      label: 'Organizations List',
      icon: <List size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(introData);
  };

  const addParagraph = () => {
    setIntroData({
      ...introData,
      introParagraphs: [...introData.introParagraphs, ''],
    });
  };

  const removeParagraph = (index: number) => {
    setIntroData({
      ...introData,
      introParagraphs: introData.introParagraphs.filter((_, i) => i !== index),
    });
  };

  const updateParagraph = (index: number, value: string) => {
    const updated = [...introData.introParagraphs];
    updated[index] = value;
    setIntroData({ ...introData, introParagraphs: updated });
  };

  const addItem = () => {
    const newItem: CulturalItem = {
      id: Date.now(),
      name: '',
      type: 'Club',
      description: '',
      founded: '',
      status: 'Active',
    };
    setIntroData({ ...introData, items: [...introData.items, newItem] });
  };

  const removeItem = (id: number) => {
    setIntroData({
      ...introData,
      items: introData.items.filter((i) => i.id !== id),
    });
  };

  const updateItem = (id: number, field: keyof CulturalItem, value: string) => {
    setIntroData({
      ...introData,
      items: introData.items.map((i) =>
        i.id === id ? { ...i, [field]: value } : i
      ),
    });
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Governing Body': 'bg-[#631012] text-white',
      Club: 'bg-blue-100 text-blue-800',
      'Event Committee': 'bg-purple-100 text-purple-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Palette className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Cultural Introduction Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage cultural introduction and list
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" /> Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-[#171717]/10">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0 ${activeTab === tab.id ? 'bg-[#631012] text-white' : 'text-[#171717]/70 hover:bg-[#F9F9F9]'}`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={introData.heroHeading}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    value={introData.heroDescription}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        heroDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#631012] to-[#8B1538] rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {introData.heroHeading}
                </h3>
                <p className="text-white/80">{introData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'introduction' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Introduction Section
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={introData.introHeading}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        introHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Brief Description
                  </label>
                  <input
                    type="text"
                    value={introData.introDescription}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        introDescription: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-[#171717]">
                    Paragraphs
                  </label>
                  <button
                    onClick={addParagraph}
                    className="text-[#631012] hover:text-[#7a1214] flex items-center gap-1 text-sm"
                  >
                    <Plus size={16} /> Add Paragraph
                  </button>
                </div>
                <div className="space-y-3">
                  {introData.introParagraphs.map((para, index) => (
                    <div key={index} className="flex gap-2">
                      <textarea
                        value={para}
                        onChange={(e) => updateParagraph(index, e.target.value)}
                        rows={2}
                        className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                      />
                      <button
                        onClick={() => removeParagraph(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {introData.introHeading}
                </h3>
                <p className="text-[#631012] font-medium mb-4">
                  {introData.introDescription}
                </p>
                {introData.introParagraphs.map((para, index) => (
                  <p key={index} className="text-[#171717]/70 mb-3">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'list' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <List className="text-[#631012]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Organizations List
                  </h2>
                </div>
                <button
                  onClick={addItem}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Organization
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={introData.listHeading}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        listHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Subtitle
                  </label>
                  <input
                    type="text"
                    value={introData.listSubtitle}
                    onChange={(e) =>
                      setIntroData({
                        ...introData,
                        listSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {introData.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Organization #{index + 1}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) =>
                            updateItem(item.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Type
                        </label>
                        <select
                          value={item.type}
                          onChange={(e) =>
                            updateItem(item.id, 'type', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Governing Body">Governing Body</option>
                          <option value="Club">Club</option>
                          <option value="Event Committee">
                            Event Committee
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Founded
                        </label>
                        <input
                          type="text"
                          value={item.founded}
                          onChange={(e) =>
                            updateItem(item.id, 'founded', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Description
                        </label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) =>
                            updateItem(item.id, 'description', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Status
                        </label>
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateItem(item.id, 'status', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#171717] mb-4">
                  Preview
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#631012] text-white">
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="px-4 py-3 text-left">Founded</th>
                        <th className="px-4 py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {introData.items.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-[#171717]/10 hover:bg-[#F9F9F9]"
                        >
                          <td className="px-4 py-3 font-medium text-[#171717]">
                            {item.name}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}
                            >
                              {item.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#171717]/70 text-sm">
                            {item.description}
                          </td>
                          <td className="px-4 py-3 text-[#171717]/70">
                            {item.founded}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
