'use client';

import React, { useState, useEffect } from 'react';
import {
  Save,
  History as HistoryIcon,
  Plus,
  Trash2,
  Calendar,
  FileText,
  Award,
  Loader2,
} from 'lucide-react';

// --- Interfaces ---
interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  subtitle?: string;
  event_date: string; // Matches SQL column
  description: string;
}

interface HistoryData {
  // Hero (Mapped to description1)
  heading: string;
  subtitle: string;

  // Intro (Mapped to description2)
  introText: string;
  initialDepartments: string[];

  // Timeline (Separate Table)
  timelineSectionTitle: string;
  timelineSectionSubtitle: string;
  timelineEvents: TimelineEvent[];

  // Legacy (Mapped to legacy)
  legacyTitle: string;
  legacyText: string;
}

type TabType = 'hero' | 'intro' | 'timeline' | 'legacy';

const FALLBACK_HISTORY_DATA: HistoryData = {
  heading: 'About NIT Hamirpur',
  subtitle: 'A legacy of learning, research, and service',
  introText:
    'NIT Hamirpur has grown into a leading institute with strong academic programs and a vibrant campus culture.',
  initialDepartments: ['Civil Engineering', 'Electrical Engineering', 'Computer Science'],
  timelineSectionTitle: 'Timeline',
  timelineSectionSubtitle: 'Key milestones in our journey',
  timelineEvents: [
    {
      id: 1,
      year: '1986',
      title: 'Institute established',
      subtitle: '',
      event_date: '1986-08-15',
      description: 'NIT Hamirpur began its journey as a center for technical education.',
    },
  ],
  legacyTitle: 'Our Legacy',
  legacyText:
    'The institute continues to build on decades of academic excellence and public service.',
};

export default function HistoryPage() {
  const API_BASE = 'http://localhost:4000/history';

  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [historyData, setHistoryData] = useState<HistoryData>({
    ...FALLBACK_HISTORY_DATA,
  });

  // --- 1. Fetch Data with Smart Fallback ---
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // A. Fetch Main Content
      const mainRes = await fetch(API_BASE);
      if (!mainRes.ok) throw new Error('Failed to connect to backend');
      const mainData = await mainRes.json();

      // --- SMART PARSING LOGIC ---
      // If DB has plain text, we use it directly. If JSON, we parse it.

      // 1. Hero Data
      let heroData = { heading: '', subtitle: '' };
      try {
        heroData = JSON.parse(mainData.description1);
      } catch {
        // Fallback for plain text in DB
        heroData = {
          heading: 'About NIT Hamirpur',
          subtitle: mainData.description1 || '',
        };
      }

      // 2. Intro Data
      let introData: { text: string; departments: string[] } = {
        text: '',
        departments: [],
      };
      try {
        introData = JSON.parse(mainData.description2);
      } catch {
        // Fallback for plain text
        introData = {
          text: mainData.description2 || '',
          departments: ['Civil Engineering', 'Electrical Engineering'],
        };
      }

      // 3. Legacy Data
      let legacyData = { title: '', text: '' };
      try {
        legacyData = JSON.parse(mainData.legacy);
      } catch {
        // Fallback for plain text
        legacyData = { title: 'Our Legacy', text: mainData.legacy || '' };
      }

      // B. Fetch Timeline Events
      const timeRes = await fetch(`${API_BASE}/timeline`);
      const timeData = await timeRes.json();

      setHistoryData({
        heading: heroData.heading || '',
        subtitle: heroData.subtitle || '',
        introText: introData.text || '',
        initialDepartments: introData.departments || [],
        timelineSectionTitle: 'Timeline',
        timelineSectionSubtitle: 'Key milestones',
        timelineEvents: Array.isArray(timeData)
          ? timeData.map(
              (ev: {
                id: number;
                year: number | string;
                title: string;
                event_date: string;
                description: string;
              }) => ({
                id: ev.id,
                year: ev.year ? ev.year.toString() : '',
                title: ev.title || '',
                event_date: ev.event_date
                  ? new Date(ev.event_date).toISOString().split('T')[0]
                  : '',
                description: ev.description || '',
              })
            )
          : [],
        legacyTitle: legacyData.title || '',
        legacyText: legacyData.text || '',
      });
    } catch (err) {
      console.error('Error fetching history data:', err);
      setHistoryData(FALLBACK_HISTORY_DATA);
    } finally {
      setLoading(false);
    }
  };

  // --- 2. Save Main Content ---
  const handleSaveMain = async () => {
    try {
      setSaving(true);

      // Convert state back to JSON strings for the DB
      const body = {
        description1: JSON.stringify({
          heading: historyData.heading,
          subtitle: historyData.subtitle,
        }),
        description2: JSON.stringify({
          text: historyData.introText,
          departments: historyData.initialDepartments,
        }),
        legacy: JSON.stringify({
          title: historyData.legacyTitle,
          text: historyData.legacyText,
        }),
      };

      const res = await fetch(API_BASE, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Failed to save');

      await fetchData(); // Refresh data to confirm save
      alert('Main content saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  // --- 3. Timeline Operations ---
  const addTimelineEvent = async () => {
    const newEvent = {
      year: new Date().getFullYear(),
      title: 'New Event',
      subtitle: '',
      event_date: new Date().toISOString().split('T')[0],
      description: 'Event description',
    };

    try {
      const res = await fetch(`${API_BASE}/timeline`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });
      if (res.ok) {
        const savedEvent = await res.json();
        setHistoryData((prev) => ({
          ...prev,
          timelineEvents: [
            ...prev.timelineEvents,
            {
              id: savedEvent.id,
              year: savedEvent.year ? savedEvent.year.toString() : '',
              title: savedEvent.title,
              event_date: savedEvent.event_date
                ? new Date(savedEvent.event_date).toISOString().split('T')[0]
                : '',
              description: savedEvent.description,
            },
          ],
        }));
      }
    } catch {
      alert('Failed to add event');
    }
  };

  const removeTimelineEvent = async (id: number) => {
    if (!confirm('Delete this event?')) return;
    try {
      await fetch(`${API_BASE}/timeline/${id}`, { method: 'DELETE' });
      setHistoryData((prev) => ({
        ...prev,
        timelineEvents: prev.timelineEvents.filter((e) => e.id !== id),
      }));
    } catch {
      alert('Failed to delete event');
    }
  };

  // Update local state for input fields
  const updateTimelineLocal = (id: number, field: string, value: string) => {
    setHistoryData((prev) => ({
      ...prev,
      timelineEvents: prev.timelineEvents.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    }));
  };

  // Save specific timeline event to DB
  const saveTimelineEvent = async (id: number) => {
    const event = historyData.timelineEvents.find((e) => e.id === id);
    if (!event) return;
    try {
      const res = await fetch(`${API_BASE}/timeline/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: parseInt(event.year) || 0,
          title: event.title,
          subtitle: '',
          event_date: event.event_date,
          description: event.description,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      alert('Event updated!');
    } catch {
      alert('Failed to update event');
    }
  };

  // --- Helpers ---
  const addDepartment = () => {
    setHistoryData((prev) => ({
      ...prev,
      initialDepartments: [...prev.initialDepartments, 'New Dept'],
    }));
  };

  const updateDepartment = (index: number, val: string) => {
    const newDepts = [...historyData.initialDepartments];
    newDepts[index] = val;
    setHistoryData((prev) => ({ ...prev, initialDepartments: newDepts }));
  };

  const removeDepartment = (index: number) => {
    setHistoryData((prev) => ({
      ...prev,
      initialDepartments: prev.initialDepartments.filter((_, i) => i !== index),
    }));
  };

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'intro' as TabType,
      label: 'Introduction',
      icon: <FileText size={18} />,
    },
    {
      id: 'timeline' as TabType,
      label: 'Timeline',
      icon: <Calendar size={18} />,
    },
    { id: 'legacy' as TabType, label: 'Legacy', icon: <Award size={18} /> },
  ];

  if (loading)
    return (
      <div className="p-10 text-center flex flex-col items-center justify-center h-64 text-gray-500">
        <Loader2 className="animate-spin mb-2" />
        Loading history data...
      </div>
    );

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Top Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <HistoryIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717]">
                History Section Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit history content and sections
              </p>
            </div>
          </div>

          {activeTab !== 'timeline' && (
            <button
              onClick={handleSaveMain}
              disabled={saving}
              className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center text-sm sm:text-base disabled:opacity-70"
            >
              {saving ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Save className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              {saving ? 'Saving...' : 'Save Main Content'}
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Tab Navigation */}
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
          {/* --- HERO TAB --- */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#631012] w-5 h-5" />
                <h2 className="text-xl font-bold text-[#171717]">
                  Hero Content
                </h2>
              </div>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={historyData.heading}
                    onChange={(e) =>
                      setHistoryData({
                        ...historyData,
                        heading: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                    placeholder="e.g. Our History"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={historyData.subtitle}
                    onChange={(e) =>
                      setHistoryData({
                        ...historyData,
                        subtitle: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                    placeholder="e.g. From establishment to National Importance..."
                  />
                </div>
              </div>

              {/* LIVE PREVIEW HERO */}
              <div className="mt-6 p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs font-medium text-[#171717]/60 mb-3 uppercase tracking-wide">
                  Live Preview
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-bold text-[#171717] mb-3">
                    {historyData.heading || 'Heading'}
                  </h3>
                  <p className="text-lg text-[#171717]/70">
                    {historyData.subtitle || 'Subtitle will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* --- INTRO TAB --- */}
          {activeTab === 'intro' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#631012] w-5 h-5" />
                <h2 className="text-xl font-bold text-[#171717]">
                  Intro Content
                </h2>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Introduction Text
                </label>
                <textarea
                  rows={4}
                  value={historyData.introText}
                  onChange={(e) =>
                    setHistoryData({
                      ...historyData,
                      introText: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Initial Departments
                </label>
                {historyData.initialDepartments.map((dept, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={dept}
                      onChange={(e) => updateDepartment(idx, e.target.value)}
                      className="flex-1 p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                    />
                    <button
                      onClick={() => removeDepartment(idx)}
                      className="text-red-500 p-2 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addDepartment}
                  className="text-[#631012] flex items-center gap-1 text-sm font-bold mt-2 hover:bg-[#631012]/5 p-2 rounded"
                >
                  <Plus size={16} /> Add Department
                </button>
              </div>

              {/* LIVE PREVIEW INTRO */}
              <div className="mt-6 p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs font-medium text-[#171717]/60 mb-3 uppercase tracking-wide">
                  Live Preview
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-800 mb-4">
                    {historyData.introText || 'Intro text...'}
                  </p>
                  {historyData.initialDepartments.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-semibold mb-2 text-sm text-gray-700">
                        Departments at Inception:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {historyData.initialDepartments.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* --- TIMELINE TAB --- */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#631012] w-5 h-5" />
                  <h2 className="text-xl font-bold text-[#171717]">
                    Timeline Events
                  </h2>
                </div>
                <button
                  onClick={addTimelineEvent}
                  className="bg-[#631012] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-[#7a1214] transition-colors"
                >
                  <Plus size={16} /> Add Event
                </button>
              </div>

              <div className="space-y-4">
                {historyData.timelineEvents.length === 0 && (
                  <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500">No timeline events found.</p>
                    <p className="text-sm text-gray-400">
                      Click &quot;Add Event&quot; to start your timeline.
                    </p>
                  </div>
                )}

                {historyData.timelineEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 p-4 rounded-lg bg-white relative group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => saveTimelineEvent(event.id)}
                        className="text-green-600 hover:bg-green-50 p-2 rounded transition-colors"
                        title="Save Changes"
                      >
                        <Save size={18} />
                      </button>
                      <button
                        onClick={() => removeTimelineEvent(event.id)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                        title="Delete Event"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 pr-20">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                          Year
                        </label>
                        <input
                          type="number"
                          value={event.year}
                          onChange={(e) =>
                            updateTimelineLocal(
                              event.id,
                              'year',
                              e.target.value
                            )
                          }
                          className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-[#631012] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                          Date
                        </label>
                        <input
                          type="date"
                          value={event.event_date}
                          onChange={(e) =>
                            updateTimelineLocal(
                              event.id,
                              'event_date',
                              e.target.value
                            )
                          }
                          className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-[#631012] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                          Title
                        </label>
                        <input
                          type="text"
                          value={event.title}
                          onChange={(e) =>
                            updateTimelineLocal(
                              event.id,
                              'title',
                              e.target.value
                            )
                          }
                          className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-[#631012] outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={event.description}
                        onChange={(e) =>
                          updateTimelineLocal(
                            event.id,
                            'description',
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-[#631012] outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- LEGACY TAB --- */}
          {activeTab === 'legacy' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-[#631012] w-5 h-5" />
                <h2 className="text-xl font-bold text-[#171717]">
                  Legacy Content
                </h2>
              </div>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Legacy Title
                  </label>
                  <input
                    type="text"
                    value={historyData.legacyTitle}
                    onChange={(e) =>
                      setHistoryData({
                        ...historyData,
                        legacyTitle: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Legacy Text
                  </label>
                  <textarea
                    rows={6}
                    value={historyData.legacyText}
                    onChange={(e) =>
                      setHistoryData({
                        ...historyData,
                        legacyText: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#631012] outline-none"
                  />
                </div>
              </div>

              {/* LIVE PREVIEW LEGACY */}
              <div className="mt-6 p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs font-medium text-[#171717]/60 mb-3 uppercase tracking-wide">
                  Live Preview
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#171717] mb-3">
                    {historyData.legacyTitle || 'Legacy Title'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {historyData.legacyText || 'Legacy content goes here...'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
