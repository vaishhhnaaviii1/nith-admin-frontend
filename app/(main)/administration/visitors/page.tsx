'use client';

import React, { useState } from 'react';
import { Save, User, ExternalLink, Plus, Trash2 } from 'lucide-react';

interface Visitor {
  name: string;
  title: string;
  description: string;
  websiteLabel: string;
  websiteUrl: string;
}

interface VisitorData {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  // Visitors
  visitors: Visitor[];
}

export default function VisitorPage() {
  const [visitorData, setVisitorData] = useState<VisitorData>({
    // Hero Section
    heroHeading: 'Visitor',
    heroSubheading: 'President of India',
    // Visitors
    visitors: [
      {
        name: 'Smt. Droupadi Murmu',
        title: 'Her Excellency Honourable',
        description:
          'Her Excellency Honourable Smt. Droupadi Murmu, The President of India, is the ex-officio visitor of the Institute.',
        websiteLabel: 'Official Website of Visitor',
        websiteUrl: 'https://presidentofindia.nic.in/',
      },
    ],
  });

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(visitorData);
  };

  // Visitor handlers
  const updateVisitor = (
    index: number,
    field: keyof Visitor,
    value: string
  ) => {
    const updated = [...visitorData.visitors];
    updated[index] = { ...updated[index], [field]: value };
    setVisitorData({ ...visitorData, visitors: updated });
  };

  const addVisitor = () => {
    setVisitorData({
      ...visitorData,
      visitors: [
        ...visitorData.visitors,
        {
          name: '',
          title: '',
          description: '',
          websiteLabel: '',
          websiteUrl: '',
        },
      ],
    });
  };

  const removeVisitor = (index: number) => {
    setVisitorData({
      ...visitorData,
      visitors: visitorData.visitors.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <User className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Visitor</h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage Visitor section content
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
                Visitor Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit Visitor content
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

      {/* Page Header Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-[#171717] mb-4">
          Page Header
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Heading
            </label>
            <input
              type="text"
              value={visitorData.heroHeading}
              onChange={(e) =>
                setVisitorData({ ...visitorData, heroHeading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Visitor"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              value={visitorData.heroSubheading}
              onChange={(e) =>
                setVisitorData({
                  ...visitorData,
                  heroSubheading: e.target.value,
                })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="President of India"
            />
          </div>
        </div>
      </div>

      {/* Visitors List Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <User className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
              Visitors
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {visitorData.visitors.map((visitor, index) => (
            <div
              key={index}
              className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-[#171717]/60">
                  Visitor {index + 1}
                </span>
                <button
                  onClick={() => removeVisitor(index)}
                  className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={visitor.title}
                  onChange={(e) =>
                    updateVisitor(index, 'title', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Title (e.g., Her Excellency Honourable)"
                />
                <input
                  type="text"
                  value={visitor.name}
                  onChange={(e) => updateVisitor(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Name"
                />
              </div>
              <div className="mt-3">
                <textarea
                  rows={2}
                  value={visitor.description}
                  onChange={(e) =>
                    updateVisitor(index, 'description', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Description"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  value={visitor.websiteLabel}
                  onChange={(e) =>
                    updateVisitor(index, 'websiteLabel', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Website Label"
                />
                <input
                  type="text"
                  value={visitor.websiteUrl}
                  onChange={(e) =>
                    updateVisitor(index, 'websiteUrl', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Website URL"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addVisitor}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Plus size={18} />
            Add Visitor
          </button>
        </div>

        {/* Preview */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
          <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
            Preview:
          </p>
          <div className="bg-white p-6 sm:p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] mb-1">
                {visitorData.heroHeading}
              </h2>
              <p className="text-sm sm:text-base text-[#171717]/60">
                {visitorData.heroSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitorData.visitors.map((visitor, index) => (
                <div
                  key={index}
                  className="text-center p-4 border border-[#171717]/10 rounded-lg"
                >
                  <div className="w-24 h-24 mx-auto bg-[#631012]/10 rounded-full flex items-center justify-center mb-3">
                    <User className="w-12 h-12 text-[#631012]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#631012] mb-1">
                    {visitor.name}
                  </h3>
                  <p className="text-xs text-[#171717]/60 mb-2">
                    {visitor.title}
                  </p>
                  <p className="text-sm text-[#171717]/80 mb-3">
                    {visitor.description}
                  </p>
                  {visitor.websiteUrl && (
                    <a
                      href={visitor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-[#631012] text-white text-xs rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      {visitor.websiteLabel || 'Visit Website'}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
