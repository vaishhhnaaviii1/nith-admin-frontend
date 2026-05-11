'use client';

import React, { useState } from 'react';
import { Save, Calendar, Plus, Trash2, FileText } from 'lucide-react';

interface EventItem {
  title: string;
  date: string;
  description: string;
  category: string;
}

interface EventsData {
  heading: string;
  subtitle: string;
  events: EventItem[];
  errorMessage: string;
  errorSubtext: string;
}

type TabType = 'content' | 'events';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('content');

  const [eventsData, setEventsData] = useState<EventsData>({
    heading: 'Latest Events',
    subtitle: 'Campus activities and happenings',
    events: [
      {
        title: 'Technical Fest 2024',
        date: '2024-03-15',
        description:
          'Annual technical festival featuring competitions and workshops',
        category: 'Technical',
      },
      {
        title: 'Cultural Night',
        date: '2024-03-20',
        description: 'Evening of music, dance and cultural performances',
        category: 'Cultural',
      },
    ],
    errorMessage: 'Database connection failed',
    errorSubtext:
      'Please check back later or contact support if this persists.',
  });

  const tabs = [
    {
      id: 'content' as TabType,
      label: 'Section Content',
      icon: <FileText size={18} />,
    },
    {
      id: 'events' as TabType,
      label: 'Events List',
      icon: <Calendar size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(eventsData);
  };

  const updateEvent = (
    index: number,
    field: keyof EventItem,
    value: string
  ) => {
    const updated = [...eventsData.events];
    updated[index] = { ...updated[index], [field]: value };
    setEventsData({ ...eventsData, events: updated });
  };

  const addEvent = () => {
    setEventsData({
      ...eventsData,
      events: [
        ...eventsData.events,
        { title: '', date: '', description: '', category: '' },
      ],
    });
  };

  const removeEvent = (index: number) => {
    setEventsData({
      ...eventsData,
      events: eventsData.events.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Events</h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage events section content
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Events Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit events content
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
          {/* Section Content */}
          {activeTab === 'content' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={eventsData.heading}
                    onChange={(e) =>
                      setEventsData({ ...eventsData, heading: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Latest Events"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={eventsData.subtitle}
                    onChange={(e) =>
                      setEventsData({ ...eventsData, subtitle: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Campus activities"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">
                    {eventsData.heading}
                  </h3>
                  <p className="text-sm text-[#171717]/60">
                    {eventsData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Events List */}
          {activeTab === 'events' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Calendar className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Events List
                </h2>
              </div>

              <div className="space-y-3">
                {eventsData.events.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#171717]/60">
                        Event {index + 1}
                      </span>
                      <button
                        onClick={() => removeEvent(index)}
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
                          value={event.title}
                          onChange={(e) =>
                            updateEvent(index, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Event title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#171717]/60 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={event.date}
                          onChange={(e) =>
                            updateEvent(index, 'date', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-[#171717]/60 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        value={event.category}
                        onChange={(e) =>
                          updateEvent(index, 'category', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Technical, Cultural, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#171717]/60 mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={event.description}
                        onChange={(e) =>
                          updateEvent(index, 'description', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Event description"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addEvent}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Event
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventsData.events.map((event, index) => (
                      <div
                        key={index}
                        className="bg-[#F9F9F9] p-4 rounded-lg border border-[#171717]/10"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base font-semibold text-[#171717]">
                            {event.title}
                          </h4>
                          <span className="text-xs bg-[#631012]/10 text-[#631012] px-2 py-1 rounded">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#171717]/60 mb-2">
                          {event.date}
                        </p>
                        <p className="text-sm text-[#171717]/70">
                          {event.description}
                        </p>
                      </div>
                    ))}
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
