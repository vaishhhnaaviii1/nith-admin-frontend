'use client';

import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

interface Mou {
  slNo: string;
  mou: string;
}

interface MouData {
  heroHeading: string;
  heroSubheading: string;
  mousHeading: string;
  mous: Mou[];
}

export default function AlumniRelatedMouPage() {
  const [mouData, setMouData] = useState<MouData>({
    heroHeading: 'Alumni Related MoU',
    heroSubheading:
      'Information about Memorandums of Understanding (MoUs) involving alumni and the institute.',
    mousHeading: 'MoUs',
    mous: [
      {
        slNo: '1',
        mou: 'MoU between EPACK Durable limited and NIT Hamirpur (H.P.)',
      },
    ],
  });

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(mouData);
  };

  const updateMou = (index: number, field: keyof Mou, value: string) => {
    const updated = [...mouData.mous];
    updated[index] = { ...updated[index], [field]: value };
    setMouData({ ...mouData, mous: updated });
  };

  const addMou = () => {
    setMouData({
      ...mouData,
      mous: [...mouData.mous, { slNo: '', mou: '' }],
    });
  };

  const removeMou = (index: number) => {
    setMouData({
      ...mouData,
      mous: mouData.mous.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {mouData.heroHeading}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          {mouData.heroSubheading}
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
              MoU Editor
            </h1>
            <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
              Edit MoU content
            </p>
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
              value={mouData.heroHeading}
              onChange={(e) =>
                setMouData({ ...mouData, heroHeading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Alumni Related MoU"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Page Subheading
            </label>
            <input
              type="text"
              value={mouData.heroSubheading}
              onChange={(e) =>
                setMouData({ ...mouData, heroSubheading: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
              placeholder="Information about Memorandums of Understanding (MoUs) involving alumni and the institute."
            />
          </div>
        </div>
      </div>

      {/* MoUs Editor */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
            MoUs List
          </h2>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Section Heading
          </label>
          <input
            type="text"
            value={mouData.mousHeading}
            onChange={(e) =>
              setMouData({ ...mouData, mousHeading: e.target.value })
            }
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base mb-4"
            placeholder="MoUs"
          />
        </div>
        <div className="space-y-3">
          {mouData.mous.map((mou, index) => (
            <div
              key={index}
              className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-[#171717]/60">
                  MoU {index + 1}
                </span>
                <button
                  onClick={() => removeMou(index)}
                  className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <input
                  type="text"
                  value={mou.slNo}
                  onChange={(e) => updateMou(index, 'slNo', e.target.value)}
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                  placeholder="Sl. No."
                />
                <input
                  type="text"
                  value={mou.mou}
                  onChange={(e) => updateMou(index, 'mou', e.target.value)}
                  className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm md:col-span-4"
                  placeholder="MoU"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addMou}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Plus size={18} />
            Add MoU
          </button>
        </div>

        {/* Preview */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
          <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
            Preview:
          </p>
          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#171717] mb-1">
                {mouData.heroHeading}
              </h2>
              <p className="text-sm text-[#171717]/60">
                {mouData.heroSubheading}
              </p>
            </div>
            <h3 className="text-xl font-bold text-[#171717] mb-4">
              {mouData.mousHeading}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#631012] text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">Sl. No.</th>
                    <th className="px-3 py-2 text-left">MoU</th>
                  </tr>
                </thead>
                <tbody>
                  {mouData.mous.map((mou, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-3 py-2">{mou.slNo}</td>
                      <td className="px-3 py-2 font-semibold text-[#171717]">
                        {mou.mou}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
