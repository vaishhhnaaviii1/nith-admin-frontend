'use client';
import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

interface Row {
  slNo: string;
  name: string;
  responsibility: string;
  phone: string;
  email: string;
}

interface Section {
  title: string;
  rows: Row[];
}

interface FunctionariesData {
  heroHeading: string;
  heroSubheading: string;
  sections: Section[];
}

const initialData: FunctionariesData = {
  heroHeading: 'Functionaries',
  heroSubheading:
    'Dean, Associate Dean, Alumni Association, Resource Generation, Staff',
  sections: [
    {
      title: 'Dean and Associate Dean (Alumni & Resources)',
      rows: [
        {
          slNo: '1',
          name: 'Prof. Ashwani Kumar Chandel',
          responsibility: 'Dean',
          phone: '254054',
          email: 'dar@nith.ac.in',
        },
        {
          slNo: '2',
          name: 'Dr. Gargi Sharma',
          responsibility: 'Associate Dean',
          phone: '254536',
          email: 'gargi@nith.ac.in',
        },
        {
          slNo: '3',
          name: 'Dr. Somesh Kumar Sharma',
          responsibility:
            'Associate Dean (Resource Generation & Industrialization)',
          phone: '254732',
          email: 'somesh@nith.ac.in',
        },
      ],
    },
    {
      title: 'Alumni Association',
      rows: [
        {
          slNo: '1',
          name: 'Dr. Jyoti Srivastava',
          responsibility: 'Faculty Incharge',
          phone: '254401',
          email: 'jyoti.s@nith.ac.in',
        },
        {
          slNo: '2',
          name: 'Dr. Vandana Sharma',
          responsibility: 'Faculty Incharge',
          phone: '254920',
          email: 'vandna@nith.ac.in',
        },
      ],
    },
    {
      title: 'Resource Generation',
      rows: [
        {
          slNo: '1',
          name: 'Dr. Amit Kaul',
          responsibility: 'Faculty Incharge',
          phone: '254544',
          email: 'amitkaul@nith.ac.in',
        },
      ],
    },
    {
      title: 'Staff',
      rows: [
        {
          slNo: '1',
          name: 'Sh. Sanjay Jamwal',
          responsibility: 'Deputy Registrar',
          phone: '--',
          email: '--',
        },
      ],
    },
  ],
};

export default function FunctionariesPage() {
  const [data, setData] = useState<FunctionariesData>(initialData);

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(data);
  };

  // Section and row handlers
  const updateRow = (
    sectionIdx: number,
    rowIdx: number,
    field: keyof Row,
    value: string
  ) => {
    const updatedSections = [...data.sections];
    const updatedRows = [...updatedSections[sectionIdx].rows];
    updatedRows[rowIdx] = { ...updatedRows[rowIdx], [field]: value };
    updatedSections[sectionIdx] = {
      ...updatedSections[sectionIdx],
      rows: updatedRows,
    };
    setData({ ...data, sections: updatedSections });
  };

  const addRow = (sectionIdx: number) => {
    const updatedSections = [...data.sections];
    updatedSections[sectionIdx].rows = [
      ...updatedSections[sectionIdx].rows,
      { slNo: '', name: '', responsibility: '', phone: '', email: '' },
    ];
    setData({ ...data, sections: updatedSections });
  };

  const removeRow = (sectionIdx: number, rowIdx: number) => {
    const updatedSections = [...data.sections];
    updatedSections[sectionIdx].rows = updatedSections[sectionIdx].rows.filter(
      (_, i) => i !== rowIdx
    );
    setData({ ...data, sections: updatedSections });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {data.heroHeading}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          {data.heroSubheading}
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
              Functionaries Editor
            </h1>
            <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
              Edit Functionaries content
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

      {/* Editable Sections */}
      {data.sections.map((section, sectionIdx) => (
        <div
          key={sectionIdx}
          className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#631012] mb-3">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-[#171717]/60">
                    {section.title} {rowIdx + 1}
                  </span>
                  <button
                    onClick={() => removeRow(sectionIdx, rowIdx)}
                    className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <input
                    type="text"
                    value={row.slNo}
                    onChange={(e) =>
                      updateRow(sectionIdx, rowIdx, 'slNo', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Sl. No."
                  />
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) =>
                      updateRow(sectionIdx, rowIdx, 'name', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={row.responsibility}
                    onChange={(e) =>
                      updateRow(
                        sectionIdx,
                        rowIdx,
                        'responsibility',
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Responsibility"
                  />
                  <input
                    type="text"
                    value={row.phone}
                    onChange={(e) =>
                      updateRow(sectionIdx, rowIdx, 'phone', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Phone No."
                  />
                  <input
                    type="text"
                    value={row.email}
                    onChange={(e) =>
                      updateRow(sectionIdx, rowIdx, 'email', e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addRow(sectionIdx)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
            >
              <Plus size={18} />
              Add Row
            </button>
          </div>
        </div>
      ))}

      {/* Preview */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
          Preview:
        </p>
        <div className="bg-white p-4 sm:p-6 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#171717] mb-1">
              {data.heroHeading}
            </h2>
            <p className="text-sm text-[#171717]/60">{data.heroSubheading}</p>
          </div>
          {data.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-8">
              <h3 className="text-xl font-bold text-[#631012] mb-4">
                {section.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#631012] text-white">
                    <tr>
                      <th className="px-3 py-2 text-left">Sl. No.</th>
                      <th className="px-3 py-2 text-left">Name</th>
                      <th className="px-3 py-2 text-left">Responsibility</th>
                      <th className="px-3 py-2 text-left">Phone No.</th>
                      <th className="px-3 py-2 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="border-b">
                        <td className="px-3 py-2">{row.slNo}</td>
                        <td className="px-3 py-2 font-semibold text-[#171717]">
                          {row.name}
                        </td>
                        <td className="px-3 py-2">{row.responsibility}</td>
                        <td className="px-3 py-2">{row.phone}</td>
                        <td className="px-3 py-2 text-[#631012]">
                          {row.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
