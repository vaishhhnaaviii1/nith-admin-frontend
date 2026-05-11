'use client';

import React, { useState } from 'react';
import { Save, Users, Plus, Trash2, FileText, UserCircle } from 'lucide-react';

interface FunctionaryMember {
  slNo: string;
  name: string;
  responsibility: string;
  phoneNo: string;
  email: string;
}

interface FunctionarySection {
  title: string;
  members: FunctionaryMember[];
}

interface FunctionariesData {
  heroHeading: string;
  heroDescription: string;
  sections: FunctionarySection[];
}

type TabType = 'hero' | 'sections';

export default function FunctionariesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [functionariesData, setFunctionariesData] = useState<FunctionariesData>(
    {
      heroHeading: 'Functionaries',
      heroDescription:
        'Key academic administrative authorities and supporting staff of the Institute.',
      sections: [
        {
          title: 'Office of the Dean (Academics)',
          members: [
            {
              slNo: '1',
              name: 'Dr. Siddhartha Sharma',
              responsibility: 'Dean (Academics)',
              phoneNo: '254006',
              email: 'dac@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Ravinder Nath Sharma',
              responsibility: 'Associate Dean (UG-PG Establishment)',
              phoneNo: '254532',
              email: 'nath@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Dr. Rohit Dhiman',
              responsibility: 'Associate Dean (Examination & Evaluation)',
              phoneNo: '254601',
              email: 'ad-ee@nith.ac.in',
            },
            {
              slNo: '4',
              name: 'Dr. Amit Kaul',
              responsibility: 'Associate Dean (Admission & Registration)',
              phoneNo: '254544',
              email: 'ad-ar@nith.ac.in, amitkaul@nith.ac.in',
            },
          ],
        },
        {
          title: 'Chairpersons – Senate Programme Committees',
          members: [
            {
              slNo: '1',
              name: 'Dr. U.K. Pandey',
              responsibility: 'Chairperson (SDPC)',
              phoneNo: '254342',
              email: 'ukp@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Gargi Khanna',
              responsibility: 'Chairperson (SMPC)',
              phoneNo: '254634',
              email: 'gargi@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Dr. Rajeevan Chandel',
              responsibility: 'Chairperson (SBPC)',
              phoneNo: '254624',
              email: 'rchandel@nith.ac.in',
            },
          ],
        },
        {
          title: 'Admission, Registration & Automation',
          members: [
            {
              slNo: '1',
              name: 'Dr. Jiwanjot Singh',
              responsibility: 'Faculty Incharge (Registration)',
              phoneNo: '254501',
              email: 'jiwanjot@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Ajoy Debbarma',
              responsibility: 'Faculty Incharge (Admission & Automation)',
              phoneNo: '254702',
              email: 'adebbarma@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Dr. Nitin Gupta',
              responsibility: 'Admission Incharge / Coordinator (DASA)',
              phoneNo: '254416',
              email: 'nitin@nith.ac.in',
            },
            {
              slNo: '4',
              name: 'Dr. Khalid Mohamad Pandit',
              responsibility:
                'Assistant Faculty Incharge (Admission & Automation)',
              phoneNo: '254402',
              email: 'mkhalid@nith.ac.in',
            },
          ],
        },
        {
          title: 'Institute Time Table',
          members: [
            {
              slNo: '1',
              name: 'Dr. Chandra Shekhar Prasad',
              responsibility: 'Faculty Incharge',
              phoneNo: '254601',
              email: 'csprasad@nith.ac.in',
            },
          ],
        },
        {
          title: 'National Education Policy (NEP)',
          members: [
            {
              slNo: '1',
              name: 'Dr. Om Prakash Yadav',
              responsibility: 'Faculty Incharge',
              phoneNo: '254101',
              email: 'opyadav@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Katam Nishanth',
              responsibility: 'Faculty Incharge',
              phoneNo: '254501',
              email: 'katam@nith.ac.in',
            },
          ],
        },
        {
          title: 'Result Processing',
          members: [
            {
              slNo: '1',
              name: 'Dr. Jyoti Srivasatava',
              responsibility: 'Faculty Incharge',
              phoneNo: '254401',
              email: 'jyoti.s@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Preeti Soni',
              responsibility: 'Assistant Faculty Incharge',
              phoneNo: '254402',
              email: 'preeti@nith.ac.in',
            },
          ],
        },
        {
          title: 'Examination & Evaluation',
          members: [
            {
              slNo: '1',
              name: 'Dr. Rajeev Kumar',
              responsibility: 'Faculty Incharge',
              phoneNo: '254434',
              email: 'rajeev@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Suket Kumar',
              responsibility: 'Faculty Incharge (Examination)',
              phoneNo: '–',
              email: 'suket@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Dr. Shampy Kamboj',
              responsibility: 'Assistant Faculty Incharge',
              phoneNo: '254150',
              email: 'shampy@nith.ac.in',
            },
            {
              slNo: '4',
              name: 'Dr. Sandeep Kumar Singh',
              responsibility: 'Assistant Faculty Incharge (Evaluation)',
              phoneNo: '254601',
              email: 'sksingh@nith.ac.in',
            },
          ],
        },
        {
          title: 'National Academic Depository (NAD)',
          members: [
            {
              slNo: '1',
              name: 'Dr. Siddhartha Sharma',
              responsibility: 'Nodal Officer',
              phoneNo: '254006',
              email: 'nad@nith.ac.in',
            },
            {
              slNo: '2',
              name: 'Dr. Nitin Gupta',
              responsibility: 'Assistant Nodal Officer',
              phoneNo: '254416',
              email: 'nitin@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Dr. Priyanka',
              responsibility: 'Assistant Nodal Officer',
              phoneNo: '254401',
              email: 'dr.priyanka@nith.ac.in',
            },
            {
              slNo: '4',
              name: 'Dr. Arun Kumar Yadav',
              responsibility: 'Faculty Incharge (NAD-Uploading)',
              phoneNo: '254402',
              email: 'ayadav@nith.ac.in',
            },
            {
              slNo: '5',
              name: 'Dr. Manender Singh',
              responsibility: 'Faculty Incharge (NAD-Verification)',
              phoneNo: '254301',
              email: 'manendra@nith.ac.in',
            },
            {
              slNo: '6',
              name: 'Dr. Ram Prakash Sharma',
              responsibility: 'Faculty Incharge (NAD-Verification)',
              phoneNo: '254402',
              email: 'ram.sharma@nith.ac.in',
            },
          ],
        },
        {
          title: 'Academic Section Staff',
          members: [
            {
              slNo: '1',
              name: 'Sh. Satish Chander Sharma',
              responsibility: 'Deputy Registrar (All General Academic Matters)',
              phoneNo: '254026',
              email: 'dracademic@nith.ac.in',
            },
            {
              slNo: '2',
              name: '–',
              responsibility: '–',
              phoneNo: '–',
              email: 'ar-acad@nith.ac.in',
            },
            {
              slNo: '3',
              name: 'Sh. Gulab Singh Thakur',
              responsibility: 'Senior PA (Certification Matters)',
              phoneNo: '–',
              email: 'certificate-acad@nith.ac.in',
            },
            {
              slNo: '4',
              name: 'Sh. Vinod Kumar',
              responsibility: 'Stenographer SG-II (UG/PG Results)',
              phoneNo: '–',
              email: 'result-acad@nith.ac.in',
            },
            {
              slNo: '5',
              name: 'Sh. Abhishek',
              responsibility: 'Superintendent (Examination/Evaluation)',
              phoneNo: '–',
              email: 'exam-acad@nith.ac.in',
            },
            {
              slNo: '6',
              name: 'Smt. Pushpa Devi',
              responsibility: 'Stenographer SG-I / PA (RTI, Hindi, Statistics)',
              phoneNo: '–',
              email: 'pushpa@nith.ac.in',
            },
            {
              slNo: '7',
              name: 'Smt. Meera Devi',
              responsibility: 'Assistant SG-II (UG Programmes)',
              phoneNo: '–',
              email: 'ug-acad@nith.ac.in',
            },
            {
              slNo: '8',
              name: 'Sh. Shashi Kant Ratnakar',
              responsibility: 'Sr. Assistant (PhD Programmes)',
              phoneNo: '254073',
              email: 'phd-acad@nith.ac.in',
            },
            {
              slNo: '9',
              name: 'Sh. Lav Sharma',
              responsibility: 'Sr. Assistant (Senate & Convocation)',
              phoneNo: '–',
              email: 'senate-acad@nith.ac.in',
            },
            {
              slNo: '10',
              name: 'Ms. Sonia Yadav',
              responsibility: 'Jr. Assistant (PG Programmes)',
              phoneNo: '254018',
              email: 'pg-acad@nith.ac.in',
            },
            {
              slNo: '11',
              name: 'Sh. Suresh Chand',
              responsibility: 'Office Attendant SG-I',
              phoneNo: '–',
              email: '–',
            },
            {
              slNo: '12',
              name: 'Sh. Balwant Singh',
              responsibility: 'Office Attendant SG-II',
              phoneNo: '–',
              email: '–',
            },
          ],
        },
      ],
    }
  );

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'sections' as TabType,
      label: 'Functionary Sections',
      icon: <UserCircle size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(functionariesData);
  };

  const updateSection = (index: number, field: 'title', value: string) => {
    const updated = [...functionariesData.sections];
    updated[index] = { ...updated[index], [field]: value };
    setFunctionariesData({ ...functionariesData, sections: updated });
  };

  const addSection = () => {
    setFunctionariesData({
      ...functionariesData,
      sections: [...functionariesData.sections, { title: '', members: [] }],
    });
  };

  const removeSection = (index: number) => {
    setFunctionariesData({
      ...functionariesData,
      sections: functionariesData.sections.filter((_, i) => i !== index),
    });
  };

  const updateMember = (
    sectionIndex: number,
    memberIndex: number,
    field: keyof FunctionaryMember,
    value: string
  ) => {
    const updated = [...functionariesData.sections];
    updated[sectionIndex].members[memberIndex] = {
      ...updated[sectionIndex].members[memberIndex],
      [field]: value,
    };
    setFunctionariesData({ ...functionariesData, sections: updated });
  };

  const addMember = (sectionIndex: number) => {
    const updated = [...functionariesData.sections];
    updated[sectionIndex].members.push({
      slNo: String(updated[sectionIndex].members.length + 1),
      name: '',
      responsibility: '',
      phoneNo: '',
      email: '',
    });
    setFunctionariesData({ ...functionariesData, sections: updated });
  };

  const removeMember = (sectionIndex: number, memberIndex: number) => {
    const updated = [...functionariesData.sections];
    updated[sectionIndex].members = updated[sectionIndex].members.filter(
      (_, i) => i !== memberIndex
    );
    setFunctionariesData({ ...functionariesData, sections: updated });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Functionaries Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Edit academic functionaries and administrative staff information
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
                    value={functionariesData.heroHeading}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Functionaries"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={functionariesData.heroDescription}
                    onChange={(e) =>
                      setFunctionariesData({
                        ...functionariesData,
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
                    {functionariesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {functionariesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Functionary Sections */}
          {activeTab === 'sections' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <UserCircle className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Functionary Sections
                </h2>
              </div>

              <div className="space-y-6">
                {functionariesData.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="p-4 border-2 border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex-1 mr-4">
                        <label className="block text-sm font-medium text-[#171717] mb-2">
                          Section Title
                        </label>
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) =>
                            updateSection(sectionIndex, 'title', e.target.value)
                          }
                          className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                          placeholder="Section title"
                        />
                      </div>
                      <button
                        onClick={() => removeSection(sectionIndex)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors self-end"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-[#171717]">
                        Members
                      </label>
                      {section.members.map((member, memberIndex) => (
                        <div
                          key={memberIndex}
                          className="p-3 bg-white rounded-lg border border-[#171717]/10 space-y-2"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium text-[#171717]/60">
                              Member {memberIndex + 1}
                            </span>
                            <button
                              onClick={() =>
                                removeMember(sectionIndex, memberIndex)
                              }
                              className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Sl. No.
                              </label>
                              <input
                                type="text"
                                value={member.slNo}
                                onChange={(e) =>
                                  updateMember(
                                    sectionIndex,
                                    memberIndex,
                                    'slNo',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2 py-1.5 border border-[#171717]/20 rounded focus:outline-none focus:ring-1 focus:ring-[#631012] text-black text-xs"
                                placeholder="1"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Name
                              </label>
                              <input
                                type="text"
                                value={member.name}
                                onChange={(e) =>
                                  updateMember(
                                    sectionIndex,
                                    memberIndex,
                                    'name',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2 py-1.5 border border-[#171717]/20 rounded focus:outline-none focus:ring-1 focus:ring-[#631012] text-black text-xs"
                                placeholder="Name"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Responsibility
                              </label>
                              <input
                                type="text"
                                value={member.responsibility}
                                onChange={(e) =>
                                  updateMember(
                                    sectionIndex,
                                    memberIndex,
                                    'responsibility',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2 py-1.5 border border-[#171717]/20 rounded focus:outline-none focus:ring-1 focus:ring-[#631012] text-black text-xs"
                                placeholder="Responsibility"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Phone No.
                              </label>
                              <input
                                type="text"
                                value={member.phoneNo}
                                onChange={(e) =>
                                  updateMember(
                                    sectionIndex,
                                    memberIndex,
                                    'phoneNo',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2 py-1.5 border border-[#171717]/20 rounded focus:outline-none focus:ring-1 focus:ring-[#631012] text-black text-xs"
                                placeholder="Phone"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Email
                              </label>
                              <input
                                type="text"
                                value={member.email}
                                onChange={(e) =>
                                  updateMember(
                                    sectionIndex,
                                    memberIndex,
                                    'email',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2 py-1.5 border border-[#171717]/20 rounded focus:outline-none focus:ring-1 focus:ring-[#631012] text-black text-xs"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addMember(sectionIndex)}
                        className="flex items-center gap-2 px-3 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm"
                      >
                        <Plus size={16} />
                        Add Member
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addSection}
                  className="flex items-center gap-2 px-4 py-2 text-[#631012] hover:bg-[#631012]/10 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Section
                </button>
              </div>

              <div className="mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-8">
                  {functionariesData.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-3">
                      <h3 className="text-lg font-bold text-[#171717] border-b-2 border-[#631012] pb-2">
                        {section.title}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-[#F9F9F9]">
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                                Sl. No.
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                                Name
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                                Responsibility
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                                Phone No.
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-semibold text-[#171717] border border-[#171717]/20">
                                Email
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.members.map((member, memberIndex) => (
                              <tr
                                key={memberIndex}
                                className="hover:bg-[#F9F9F9]/50"
                              >
                                <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                                  {member.slNo}
                                </td>
                                <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                                  {member.name}
                                </td>
                                <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                                  {member.responsibility}
                                </td>
                                <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                                  {member.phoneNo}
                                </td>
                                <td className="px-3 py-2 text-xs text-[#171717] border border-[#171717]/20">
                                  {member.email}
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
          )}
        </div>
      </div>
    </div>
  );
}
