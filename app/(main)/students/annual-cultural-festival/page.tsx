'use client';

import React, { useState } from 'react';
import {
  Save,
  Sparkles,
  Plus,
  Trash2,
  FileText,
  Calendar,
  Star,
  Trophy,
} from 'lucide-react';

interface FestivalEvent {
  id: number;
  name: string;
  category: string;
  description: string;
  prize: string;
  venue: string;
}

interface FestivalData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutDescription: string;
  highlights: string[];
  eventsHeading: string;
  eventsSubtitle: string;
  events: FestivalEvent[];
  scheduleHeading: string;
  scheduleDescription: string;
  dates: string;
}

type TabType = 'hero' | 'about' | 'events' | 'schedule';

export default function AnnualCulturalFestivalPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [festivalData, setFestivalData] = useState<FestivalData>({
    heroHeading: "Annual Cultural Festival - Hill'ffair",
    heroDescription:
      "Hill'ffair is the annual cultural extravaganza of NIT Hamirpur - three days of music, dance, drama, art, and unforgettable memories in the lap of the Himalayas.",
    aboutHeading: "About Hill'ffair",
    aboutDescription:
      "Hill'ffair, the annual cultural festival of NIT Hamirpur, is one of the most anticipated events in the North Indian college circuit. Since its inception, it has grown to become a spectacular celebration of art, culture, and youth.",
    highlights: [
      'Star Night performances by renowned artists',
      '50+ competitions across various categories',
      'Pro-nights featuring famous bands and performers',
      'Workshops by industry professionals',
      'Art exhibitions and installations',
      '10,000+ footfall from colleges across India',
    ],
    eventsHeading: 'Festival Events',
    eventsSubtitle:
      'Participate in our diverse range of competitions and events',
    events: [
      {
        id: 1,
        name: 'Battle of Bands',
        category: 'Music',
        description: 'Rock, Pop, and Fusion band competition',
        prize: '₹50,000',
        venue: 'Main Stage',
      },
      {
        id: 2,
        name: 'Nritya - Dance Competition',
        category: 'Dance',
        description: 'Classical, Western, and Folk dance competition',
        prize: '₹40,000',
        venue: 'Open Air Theatre',
      },
      {
        id: 3,
        name: 'Nukkad Natak',
        category: 'Theatre',
        description: 'Street play competition on social themes',
        prize: '₹30,000',
        venue: 'Campus Grounds',
      },
      {
        id: 4,
        name: 'Canvas Carnival',
        category: 'Art',
        description: 'Painting and sketching competition',
        prize: '₹15,000',
        venue: 'Art Gallery',
      },
      {
        id: 5,
        name: 'Fashion Show',
        category: 'Fashion',
        description: 'Theme-based fashion parade',
        prize: '₹35,000',
        venue: 'Main Auditorium',
      },
      {
        id: 6,
        name: 'Quiz Masters',
        category: 'Literary',
        description: 'General knowledge and entertainment quiz',
        prize: '₹20,000',
        venue: 'Seminar Hall',
      },
    ],
    scheduleHeading: 'Festival Schedule',
    scheduleDescription:
      'Mark your calendars for the biggest cultural event of the year!',
    dates: 'October 15-17, 2025',
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
      icon: <Star size={18} />,
    },
    { id: 'events' as TabType, label: 'Events', icon: <Trophy size={18} /> },
    {
      id: 'schedule' as TabType,
      label: 'Schedule',
      icon: <Calendar size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(festivalData);
  };

  const addEvent = () => {
    const newEvent: FestivalEvent = {
      id: Date.now(),
      name: '',
      category: 'Music',
      description: '',
      prize: '',
      venue: '',
    };
    setFestivalData({
      ...festivalData,
      events: [...festivalData.events, newEvent],
    });
  };

  const removeEvent = (id: number) => {
    setFestivalData({
      ...festivalData,
      events: festivalData.events.filter((e) => e.id !== id),
    });
  };

  const updateEvent = (
    id: number,
    field: keyof FestivalEvent,
    value: string
  ) => {
    setFestivalData({
      ...festivalData,
      events: festivalData.events.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  const addHighlight = () => {
    setFestivalData({
      ...festivalData,
      highlights: [...festivalData.highlights, ''],
    });
  };

  const removeHighlight = (index: number) => {
    setFestivalData({
      ...festivalData,
      highlights: festivalData.highlights.filter((_, i) => i !== index),
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const updated = [...festivalData.highlights];
    updated[index] = value;
    setFestivalData({ ...festivalData, highlights: updated });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Music: 'bg-purple-100 text-purple-800',
      Dance: 'bg-pink-100 text-pink-800',
      Theatre: 'bg-amber-100 text-amber-800',
      Art: 'bg-blue-100 text-blue-800',
      Fashion: 'bg-rose-100 text-rose-800',
      Literary: 'bg-green-100 text-green-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Hill&apos;ffair Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage annual cultural festival content
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
                    value={festivalData.heroHeading}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
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
                    value={festivalData.heroDescription}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
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
                  {festivalData.heroHeading}
                </h3>
                <p className="text-white/80">{festivalData.heroDescription}</p>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About & Highlights
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Heading
                  </label>
                  <input
                    type="text"
                    value={festivalData.aboutHeading}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        aboutHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    About Description
                  </label>
                  <textarea
                    value={festivalData.aboutDescription}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        aboutDescription: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-[#171717]">
                    Highlights
                  </label>
                  <button
                    onClick={addHighlight}
                    className="text-[#631012] hover:text-[#7a1214] flex items-center gap-1 text-sm"
                  >
                    <Plus size={16} /> Add Highlight
                  </button>
                </div>
                <div className="space-y-2">
                  {festivalData.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => updateHighlight(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                      />
                      <button
                        onClick={() => removeHighlight(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#F9F9F9] rounded-xl border border-[#171717]/10">
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {festivalData.aboutHeading}
                </h3>
                <p className="text-[#171717]/70 mb-4">
                  {festivalData.aboutDescription}
                </p>
                <h4 className="font-semibold text-[#631012] mb-2">
                  Festival Highlights:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {festivalData.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[#171717]/70"
                    >
                      <Star size={14} className="text-[#631012]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="text-[#631012]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Festival Events
                  </h2>
                </div>
                <button
                  onClick={addEvent}
                  className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus size={18} /> Add Event
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={festivalData.eventsHeading}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        eventsHeading: e.target.value,
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
                    value={festivalData.eventsSubtitle}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        eventsSubtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="space-y-4">
                {festivalData.events.map((event, index) => (
                  <div
                    key={event.id}
                    className="border border-[#171717]/20 rounded-lg p-4 bg-[#F9F9F9]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-[#631012]">
                        Event #{index + 1}
                      </span>
                      <button
                        onClick={() => removeEvent(event.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Event Name
                        </label>
                        <input
                          type="text"
                          value={event.name}
                          onChange={(e) =>
                            updateEvent(event.id, 'name', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Category
                        </label>
                        <select
                          value={event.category}
                          onChange={(e) =>
                            updateEvent(event.id, 'category', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        >
                          <option value="Music">Music</option>
                          <option value="Dance">Dance</option>
                          <option value="Theatre">Theatre</option>
                          <option value="Art">Art</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Literary">Literary</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Prize
                        </label>
                        <input
                          type="text"
                          value={event.prize}
                          onChange={(e) =>
                            updateEvent(event.id, 'prize', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#171717] mb-1">
                          Venue
                        </label>
                        <input
                          type="text"
                          value={event.venue}
                          onChange={(e) =>
                            updateEvent(event.id, 'venue', e.target.value)
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
                          value={event.description}
                          onChange={(e) =>
                            updateEvent(event.id, 'description', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg text-black"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#171717] mb-4">
                  Preview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {festivalData.events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white border border-[#171717]/10 rounded-lg p-4 shadow-sm"
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
                      >
                        {event.category}
                      </span>
                      <h4 className="font-semibold text-[#171717] mt-2">
                        {event.name}
                      </h4>
                      <p className="text-sm text-[#171717]/70 mb-2">
                        {event.description}
                      </p>
                      <div className="flex justify-between text-xs text-[#171717]/60">
                        <span>🏆 {event.prize}</span>
                        <span>📍 {event.venue}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-[#631012]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Festival Schedule
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Schedule Heading
                  </label>
                  <input
                    type="text"
                    value={festivalData.scheduleHeading}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        scheduleHeading: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Schedule Description
                  </label>
                  <textarea
                    value={festivalData.scheduleDescription}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        scheduleDescription: e.target.value,
                      })
                    }
                    rows={2}
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Festival Dates
                  </label>
                  <input
                    type="text"
                    value={festivalData.dates}
                    onChange={(e) =>
                      setFestivalData({
                        ...festivalData,
                        dates: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#171717]/20 rounded-lg focus:ring-2 focus:ring-[#631012] text-black"
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  {festivalData.scheduleHeading}
                </h3>
                <p className="text-white/80 mb-4">
                  {festivalData.scheduleDescription}
                </p>
                <div className="inline-block bg-white/20 px-6 py-3 rounded-lg">
                  <p className="text-2xl font-bold">{festivalData.dates}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
