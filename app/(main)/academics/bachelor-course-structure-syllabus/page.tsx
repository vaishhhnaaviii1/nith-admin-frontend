'use client';

import React, { useState } from 'react';
import {
  Save,
  BookOpen,
  Plus,
  Trash2,
  FileText,
  Info,
  GraduationCap,
  Eye,
  Download,
} from 'lucide-react';

interface WorkingPoint {
  text: string;
}

interface Programme {
  id: number;
  name: string;
  viewUrl: string;
  downloadUrl: string;
}

interface CourseData {
  heroHeading: string;
  heroDescription: string;
  aboutHeading: string;
  aboutContent: string;
  howItWorksHeading: string;
  howItWorksPoints: WorkingPoint[];
  bachelorHeading: string;
  bachelorDescription: string;
  bachelorProgrammes: Programme[];
  bachelorFooterNote: string;
  mastersHeading: string;
  mastersDescription: string;
  mastersProgrammes: Programme[];
  mastersFooterNote: string;
}

type TabType = 'hero' | 'about' | 'bachelor' | 'masters';

export default function BachelorCourseStructureSyllabusPage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [courseData, setCourseData] = useState<CourseData>({
    heroHeading: 'Course Structure & Syllabus',
    heroDescription:
      'Detailed curriculum framework and syllabi for Bachelor-level programmes at NIT Hamirpur.',
    aboutHeading: 'About Course Structure & Syllabus',
    aboutContent:
      "Course Structure & Syllabus define the academic plan of study for each programme including course sequences, contact hours, credit distribution, assessment methods, and learning outcomes. They map programme objectives to measurable learning outcomes and assessments used to evaluate those outcomes. These frameworks apply to B.Tech., B.Arch., and Dual Degree programmes and are periodically revised by the Institute's academic bodies to maintain alignment with the National Education Policy (NEP-2020) and evolving academic standards.",
    howItWorksHeading: 'How the Course Structure & Syllabus Work',
    howItWorksPoints: [
      { text: 'Curriculum is applicable based on the year of admission.' },
      {
        text: 'NEP-2020 based curricula emphasize flexibility, minors, and electives.',
      },
      { text: 'Revisions are notified through official Institute channels.' },
      {
        text: 'Students must follow the curriculum prescribed for their cohort.',
      },
    ],
    bachelorHeading: 'Bachelor Programmes – Course Structure & Syllabus',
    bachelorDescription:
      'Select a section to expand and view downloadable syllabus documents.',
    bachelorProgrammes: [
      {
        id: 1,
        name: 'New Curriculum',
        viewUrl: '/documents/bachelor/new-curriculum',
        downloadUrl: '/documents/bachelor/new-curriculum.pdf',
      },
      {
        id: 2,
        name: 'Curriculum (2019 Onwards)',
        viewUrl: '/documents/bachelor/curriculum-2019',
        downloadUrl: '/documents/bachelor/curriculum-2019.pdf',
      },
      {
        id: 3,
        name: 'Open Elective Courses',
        viewUrl: '/documents/bachelor/open-electives',
        downloadUrl: '/documents/bachelor/open-electives.pdf',
      },
      {
        id: 4,
        name: 'Old Curriculum',
        viewUrl: '/documents/bachelor/old-curriculum',
        downloadUrl: '/documents/bachelor/old-curriculum.pdf',
      },
    ],
    bachelorFooterNote:
      'For any missing syllabus documents or to request updates, please contact the Office of Academic Affairs.',
    mastersHeading: 'Masters Programmes – Course Structure & Syllabus',
    mastersDescription:
      'Select a department to expand and view downloadable syllabus documents for postgraduate programmes.',
    mastersProgrammes: [
      {
        id: 1,
        name: 'Department of Civil Engineering',
        viewUrl: '/documents/masters/civil',
        downloadUrl: '/documents/masters/civil.pdf',
      },
      {
        id: 2,
        name: 'Department of Mechanical Engineering',
        viewUrl: '/documents/masters/mechanical',
        downloadUrl: '/documents/masters/mechanical.pdf',
      },
      {
        id: 3,
        name: 'Department of Material Science & Engineering',
        viewUrl: '/documents/masters/material-science',
        downloadUrl: '/documents/masters/material-science.pdf',
      },
      {
        id: 4,
        name: 'Department of Chemical Engineering',
        viewUrl: '/documents/masters/chemical',
        downloadUrl: '/documents/masters/chemical.pdf',
      },
      {
        id: 5,
        name: 'Department of Electrical Engineering',
        viewUrl: '/documents/masters/electrical',
        downloadUrl: '/documents/masters/electrical.pdf',
      },
      {
        id: 6,
        name: 'Department of Electronics & Communication Engineering',
        viewUrl: '/documents/masters/ece',
        downloadUrl: '/documents/masters/ece.pdf',
      },
      {
        id: 7,
        name: 'Department of Computer Science and Engineering',
        viewUrl: '/documents/masters/cse',
        downloadUrl: '/documents/masters/cse.pdf',
      },
      {
        id: 8,
        name: 'Department of Chemistry',
        viewUrl: '/documents/masters/chemistry',
        downloadUrl: '/documents/masters/chemistry.pdf',
      },
      {
        id: 9,
        name: 'Department of Physics and Photonics Science',
        viewUrl: '/documents/masters/physics',
        downloadUrl: '/documents/masters/physics.pdf',
      },
      {
        id: 10,
        name: 'Department of Mathematics and Scientific Computing',
        viewUrl: '/documents/masters/mathematics',
        downloadUrl: '/documents/masters/mathematics.pdf',
      },
      {
        id: 11,
        name: 'Department of Management Studies',
        viewUrl: '/documents/masters/management',
        downloadUrl: '/documents/masters/management.pdf',
      },
      {
        id: 12,
        name: 'Department of Architecture',
        viewUrl: '/documents/masters/architecture',
        downloadUrl: '/documents/masters/architecture.pdf',
      },
      {
        id: 13,
        name: 'Centre for Energy Studies',
        viewUrl: '/documents/masters/energy-studies',
        downloadUrl: '/documents/masters/energy-studies.pdf',
      },
    ],
    mastersFooterNote:
      'For missing documents or to request updates, please contact the Office of Academic Affairs.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'about' as TabType,
      label: 'About & How It Works',
      icon: <Info size={18} />,
    },
    {
      id: 'bachelor' as TabType,
      label: 'Bachelor Programmes',
      icon: <GraduationCap size={18} />,
    },
    {
      id: 'masters' as TabType,
      label: 'Masters Programmes',
      icon: <BookOpen size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(courseData);
  };

  // How It Works Points
  const updateWorkingPoint = (index: number, value: string) => {
    const updated = [...courseData.howItWorksPoints];
    updated[index] = { text: value };
    setCourseData({ ...courseData, howItWorksPoints: updated });
  };

  const addWorkingPoint = () => {
    setCourseData({
      ...courseData,
      howItWorksPoints: [...courseData.howItWorksPoints, { text: '' }],
    });
  };

  const removeWorkingPoint = (index: number) => {
    setCourseData({
      ...courseData,
      howItWorksPoints: courseData.howItWorksPoints.filter(
        (_, i) => i !== index
      ),
    });
  };

  // Bachelor Programmes
  const updateBachelorProgramme = (
    id: number,
    field: keyof Programme,
    value: string
  ) => {
    setCourseData({
      ...courseData,
      bachelorProgrammes: courseData.bachelorProgrammes.map((prog) =>
        prog.id === id ? { ...prog, [field]: value } : prog
      ),
    });
  };

  const addBachelorProgramme = () => {
    const newId =
      courseData.bachelorProgrammes.length > 0
        ? Math.max(...courseData.bachelorProgrammes.map((p) => p.id)) + 1
        : 1;
    setCourseData({
      ...courseData,
      bachelorProgrammes: [
        ...courseData.bachelorProgrammes,
        { id: newId, name: '', viewUrl: '', downloadUrl: '' },
      ],
    });
  };

  const removeBachelorProgramme = (id: number) => {
    setCourseData({
      ...courseData,
      bachelorProgrammes: courseData.bachelorProgrammes.filter(
        (p) => p.id !== id
      ),
    });
  };

  // Masters Programmes
  const updateMastersProgramme = (
    id: number,
    field: keyof Programme,
    value: string
  ) => {
    setCourseData({
      ...courseData,
      mastersProgrammes: courseData.mastersProgrammes.map((prog) =>
        prog.id === id ? { ...prog, [field]: value } : prog
      ),
    });
  };

  const addMastersProgramme = () => {
    const newId =
      courseData.mastersProgrammes.length > 0
        ? Math.max(...courseData.mastersProgrammes.map((p) => p.id)) + 1
        : 1;
    setCourseData({
      ...courseData,
      mastersProgrammes: [
        ...courseData.mastersProgrammes,
        { id: newId, name: '', viewUrl: '', downloadUrl: '' },
      ],
    });
  };

  const removeMastersProgramme = (id: number) => {
    setCourseData({
      ...courseData,
      mastersProgrammes: courseData.mastersProgrammes.filter(
        (p) => p.id !== id
      ),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Course Structure & Syllabus Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage curriculum and syllabus documents
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
                    value={courseData.heroHeading}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Course Structure & Syllabus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={courseData.heroDescription}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
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
                    {courseData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {courseData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* About & How It Works */}
          {activeTab === 'about' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About & How It Works
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    About Section
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        About Heading
                      </label>
                      <input
                        type="text"
                        value={courseData.aboutHeading}
                        onChange={(e) =>
                          setCourseData({
                            ...courseData,
                            aboutHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="About Course Structure & Syllabus"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        About Content
                      </label>
                      <textarea
                        rows={6}
                        value={courseData.aboutContent}
                        onChange={(e) =>
                          setCourseData({
                            ...courseData,
                            aboutContent: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="Enter about content"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <h3 className="text-lg font-semibold text-[#171717] mb-3">
                    How It Works
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Section Heading
                      </label>
                      <input
                        type="text"
                        value={courseData.howItWorksHeading}
                        onChange={(e) =>
                          setCourseData({
                            ...courseData,
                            howItWorksHeading: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                        placeholder="How the Course Structure & Syllabus Work"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Working Points
                        </label>
                        <button
                          onClick={addWorkingPoint}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Point
                        </button>
                      </div>
                      <div className="space-y-2">
                        {courseData.howItWorksPoints.map((point, index) => (
                          <div key={index} className="flex gap-2">
                            <textarea
                              rows={2}
                              value={point.text}
                              onChange={(e) =>
                                updateWorkingPoint(index, e.target.value)
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Point ${index + 1}`}
                            />
                            <button
                              onClick={() => removeWorkingPoint(index)}
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors self-start"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
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
                  <div>
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {courseData.aboutHeading}
                    </h3>
                    <p className="text-sm text-[#171717]/70 leading-relaxed">
                      {courseData.aboutContent}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#171717] mb-3">
                      {courseData.howItWorksHeading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {courseData.howItWorksPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-[#171717]/70">
                          {point.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bachelor Programmes */}
          {activeTab === 'bachelor' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <GraduationCap className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Bachelor Programmes
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={courseData.bachelorHeading}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        bachelorHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Bachelor Programmes – Course Structure & Syllabus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    value={courseData.bachelorDescription}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        bachelorDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Select a section to expand and view downloadable syllabus documents."
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Programmes ({courseData.bachelorProgrammes.length})
                    </h3>
                    <button
                      onClick={addBachelorProgramme}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Programme
                    </button>
                  </div>

                  <div className="space-y-3">
                    {courseData.bachelorProgrammes.map((programme, index) => (
                      <div
                        key={programme.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Programme {index + 1}
                          </span>
                          <button
                            onClick={() =>
                              removeBachelorProgramme(programme.id)
                            }
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Programme Name
                            </label>
                            <input
                              type="text"
                              value={programme.name}
                              onChange={(e) =>
                                updateBachelorProgramme(
                                  programme.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="New Curriculum"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                View URL
                              </label>
                              <input
                                type="text"
                                value={programme.viewUrl}
                                onChange={(e) =>
                                  updateBachelorProgramme(
                                    programme.id,
                                    'viewUrl',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="/documents/programme"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Download URL
                              </label>
                              <input
                                type="text"
                                value={programme.downloadUrl}
                                onChange={(e) =>
                                  updateBachelorProgramme(
                                    programme.id,
                                    'downloadUrl',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="/documents/programme.pdf"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Footer Note
                  </label>
                  <textarea
                    rows={2}
                    value={courseData.bachelorFooterNote}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        bachelorFooterNote: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Footer note"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-bold text-[#171717]">
                    {courseData.bachelorHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/70">
                    {courseData.bachelorDescription}
                  </p>
                  <div className="space-y-2">
                    {courseData.bachelorProgrammes.map((programme) => (
                      <div
                        key={programme.id}
                        className="flex items-center justify-between p-3 border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9] transition-colors"
                      >
                        <span className="text-sm font-medium text-[#171717]">
                          {programme.name}
                        </span>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 px-3 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors">
                            <Eye size={14} />
                            View
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                            <Download size={14} />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#171717]/60 italic mt-4">
                    {courseData.bachelorFooterNote}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Masters Programmes */}
          {activeTab === 'masters' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Masters Programmes
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={courseData.mastersHeading}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        mastersHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Masters Programmes – Course Structure & Syllabus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    value={courseData.mastersDescription}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        mastersDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Select a department to expand and view downloadable syllabus documents for postgraduate programmes."
                  />
                </div>

                <div className="p-4 bg-[#F9F9F9] rounded-lg border border-[#171717]/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      Departments ({courseData.mastersProgrammes.length})
                    </h3>
                    <button
                      onClick={addMastersProgramme}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#631012] text-white text-sm rounded-lg hover:bg-[#7a1214] transition-colors"
                    >
                      <Plus size={16} />
                      Add Department
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[500px] overflow-y-auto">
                    {courseData.mastersProgrammes.map((programme, index) => (
                      <div
                        key={programme.id}
                        className="p-3 border border-[#171717]/20 rounded-lg bg-white"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[#171717]/60">
                            Department {index + 1}
                          </span>
                          <button
                            onClick={() => removeMastersProgramme(programme.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <label className="block text-xs text-[#171717]/60 mb-1">
                              Department Name
                            </label>
                            <input
                              type="text"
                              value={programme.name}
                              onChange={(e) =>
                                updateMastersProgramme(
                                  programme.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="Department of Civil Engineering"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                View URL
                              </label>
                              <input
                                type="text"
                                value={programme.viewUrl}
                                onChange={(e) =>
                                  updateMastersProgramme(
                                    programme.id,
                                    'viewUrl',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="/documents/department"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#171717]/60 mb-1">
                                Download URL
                              </label>
                              <input
                                type="text"
                                value={programme.downloadUrl}
                                onChange={(e) =>
                                  updateMastersProgramme(
                                    programme.id,
                                    'downloadUrl',
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                                placeholder="/documents/department.pdf"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Footer Note
                  </label>
                  <textarea
                    rows={2}
                    value={courseData.mastersFooterNote}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        mastersFooterNote: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Footer note"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-bold text-[#171717]">
                    {courseData.mastersHeading}
                  </h3>
                  <p className="text-sm text-[#171717]/70">
                    {courseData.mastersDescription}
                  </p>
                  <div className="space-y-2 max-h-[400px] overflow-y-auto">
                    {courseData.mastersProgrammes.map((programme) => (
                      <div
                        key={programme.id}
                        className="flex items-center justify-between p-3 border border-[#171717]/20 rounded-lg hover:bg-[#F9F9F9] transition-colors"
                      >
                        <span className="text-sm font-medium text-[#171717]">
                          {programme.name}
                        </span>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 px-3 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors">
                            <Eye size={14} />
                            View
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                            <Download size={14} />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#171717]/60 italic mt-4">
                    {courseData.mastersFooterNote}
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
