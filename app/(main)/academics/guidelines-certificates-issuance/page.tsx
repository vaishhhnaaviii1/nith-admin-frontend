'use client';

import React, { useState } from 'react';
import {
  Save,
  FileCheck,
  Plus,
  Trash2,
  FileText,
  Info,
  DollarSign,
} from 'lucide-react';

interface ProcedureStep {
  text: string;
}

interface Procedure {
  id: number;
  title: string;
  steps: ProcedureStep[];
  contactEmails: string[];
}

interface CertificateCharge {
  id: number;
  name: string;
  fee: string;
}

interface GuidelinesData {
  heroHeading: string;
  heroDescription: string;
  procedures: Procedure[];
  chargesHeading: string;
  charges: CertificateCharge[];
  importantNoteHeading: string;
  importantNoteText: string;
}

type TabType = 'hero' | 'procedures' | 'charges' | 'note';

export default function GuidelinesCertificatesIssuancePage() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [guidelinesData, setGuidelinesData] = useState<GuidelinesData>({
    heroHeading: 'Guidelines for Certificate Issuance',
    heroDescription:
      'This page provides procedures and charges for issuance of various certificates and documents.',
    procedures: [
      {
        id: 1,
        title: 'Procedure for Issue of Duplicate Degree Certificate',
        steps: [
          {
            text: 'Register an F.I.R. for loss of Detailed Marks Card / Semester Grade Report / Degree.',
          },
          {
            text: 'After waiting 15 days, advertise the loss in a National daily newspaper.',
          },
          { text: 'Apply with a copy of the newspaper cutting to:' },
          {
            text: 'Submit an affidavit on Non-Judicial stamp paper of Rs.10/-.',
          },
          {
            text: 'Deposit/remit the requisite fee in cash to the Cashier or via Bank Draft in favour of Registrar, NIT Hamirpur (HP).',
          },
          {
            text: 'Duplicate Degree Certificate will be issued by the Registrar (or Director-cum-Chairman, Senate in absence).',
          },
          {
            text: 'Duplicate degree will be prepared like the original, with "Sd/-" in place of signature.',
          },
        ],
        contactEmails: ['ar-acad@nith.ac.in', 'certificate-acad@nith.ac.in'],
      },
      {
        id: 2,
        title:
          'Procedure for Issue of Duplicate Detailed Marks Cards / Semester Grade Reports',
        steps: [
          { text: 'Issued by the Academic Section.' },
          { text: 'Submission of F.I.R. copy in case of loss.' },
          { text: 'Payment of requisite fee.' },
          { text: 'Apply to:' },
        ],
        contactEmails: ['ar-acad@nith.ac.in', 'certificate-acad@nith.ac.in'],
      },
      {
        id: 3,
        title: 'Procedure for Issue of Migration Certificate',
        steps: [
          { text: 'Issued by the Academic Section.' },
          { text: 'Submission of application along with requisite fee.' },
          { text: 'Apply to:' },
        ],
        contactEmails: ['ar-acad@nith.ac.in', 'certificate-acad@nith.ac.in'],
      },
    ],
    chargesHeading: 'Charges for Issue of Certificates / Documents',
    charges: [
      { id: 1, name: 'Bonafide Certificate', fee: 'Rs. 500' },
      { id: 2, name: 'Character Certificate', fee: 'Rs. 500' },
      { id: 3, name: 'Migration Certificate', fee: 'Rs. 2000' },
      { id: 4, name: 'Transcript (within India)', fee: 'Rs. 2000 per copy' },
      { id: 5, name: 'Transcript (outside India)', fee: 'Rs. 5000 per copy' },
      {
        id: 6,
        name: 'Misc. (Backlog, Rank, Verification/Attestation of DMC/Degree, etc.)',
        fee: 'Rs. 500 each',
      },
      {
        id: 7,
        name: 'Duplicate Grade Card / Duplicate Provisional Degree Certificate / Degree Certificate',
        fee: 'Rs. 1000 each',
      },
      { id: 8, name: 'Medium of Instruction Certificate', fee: 'Rs. 500' },
      { id: 9, name: 'Verification of Degree (within India)', fee: 'Rs. 1000' },
      { id: 10, name: 'Verification of Degree (outside India)', fee: '$100' },
      {
        id: 11,
        name: 'Verification through Govt./Govt.-Aided Institutions',
        fee: 'No Charges',
      },
    ],
    importantNoteHeading: 'Important Note',
    importantNoteText:
      'However, these formalities are not required in case one is applying for the aforesaid documents on account of mutilation of document. Then he/she is required to attach mutilated certificate/document with his application and requisite fee.',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <FileText size={18} />,
    },
    {
      id: 'procedures' as TabType,
      label: 'Procedures',
      icon: <FileCheck size={18} />,
    },
    {
      id: 'charges' as TabType,
      label: 'Charges',
      icon: <DollarSign size={18} />,
    },
    {
      id: 'note' as TabType,
      label: 'Important Note',
      icon: <Info size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log(guidelinesData);
  };

  const updateProcedure = (
    id: number,
    field: keyof Procedure,
    value: string | ProcedureStep[] | string[]
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === id ? { ...proc, [field]: value } : proc
      ),
    });
  };

  const updateProcedureStep = (
    procId: number,
    stepIndex: number,
    value: string
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? {
              ...proc,
              steps: proc.steps.map((step, idx) =>
                idx === stepIndex ? { text: value } : step
              ),
            }
          : proc
      ),
    });
  };

  const addProcedureStep = (procId: number) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? { ...proc, steps: [...proc.steps, { text: '' }] }
          : proc
      ),
    });
  };

  const removeProcedureStep = (procId: number, stepIndex: number) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? { ...proc, steps: proc.steps.filter((_, idx) => idx !== stepIndex) }
          : proc
      ),
    });
  };

  const updateContactEmail = (
    procId: number,
    emailIndex: number,
    value: string
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? {
              ...proc,
              contactEmails: proc.contactEmails.map((email, idx) =>
                idx === emailIndex ? value : email
              ),
            }
          : proc
      ),
    });
  };

  const addContactEmail = (procId: number) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? { ...proc, contactEmails: [...proc.contactEmails, ''] }
          : proc
      ),
    });
  };

  const removeContactEmail = (procId: number, emailIndex: number) => {
    setGuidelinesData({
      ...guidelinesData,
      procedures: guidelinesData.procedures.map((proc) =>
        proc.id === procId
          ? {
              ...proc,
              contactEmails: proc.contactEmails.filter(
                (_, idx) => idx !== emailIndex
              ),
            }
          : proc
      ),
    });
  };

  const updateCharge = (
    id: number,
    field: keyof CertificateCharge,
    value: string
  ) => {
    setGuidelinesData({
      ...guidelinesData,
      charges: guidelinesData.charges.map((charge) =>
        charge.id === id ? { ...charge, [field]: value } : charge
      ),
    });
  };

  const addCharge = () => {
    const newId =
      guidelinesData.charges.length > 0
        ? Math.max(...guidelinesData.charges.map((c) => c.id)) + 1
        : 1;
    setGuidelinesData({
      ...guidelinesData,
      charges: [
        ...guidelinesData.charges,
        {
          id: newId,
          name: '',
          fee: '',
        },
      ],
    });
  };

  const removeCharge = (id: number) => {
    setGuidelinesData({
      ...guidelinesData,
      charges: guidelinesData.charges.filter((c) => c.id !== id),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <FileCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Certificate Issuance Guidelines Editor
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage certificate issuance procedures and charges
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
                    value={guidelinesData.heroHeading}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
                        heroHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Guidelines for Certificate Issuance"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={guidelinesData.heroDescription}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
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
                    {guidelinesData.heroHeading}
                  </h3>
                  <p className="text-base sm:text-lg text-[#171717]/70">
                    {guidelinesData.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Procedures */}
          {activeTab === 'procedures' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileCheck className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Procedures ({guidelinesData.procedures.length})
                </h2>
              </div>

              <div className="space-y-4">
                {guidelinesData.procedures.map((procedure, procIndex) => (
                  <div
                    key={procedure.id}
                    className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9]"
                  >
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-[#171717] mb-2">
                        Procedure {procIndex + 1} - Title
                      </label>
                      <input
                        type="text"
                        value={procedure.title}
                        onChange={(e) =>
                          updateProcedure(procedure.id, 'title', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                        placeholder="Procedure title"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Steps
                        </label>
                        <button
                          onClick={() => addProcedureStep(procedure.id)}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Step
                        </button>
                      </div>
                      <div className="space-y-2">
                        {procedure.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex gap-2">
                            <input
                              type="text"
                              value={step.text}
                              onChange={(e) =>
                                updateProcedureStep(
                                  procedure.id,
                                  stepIndex,
                                  e.target.value
                                )
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder={`Step ${stepIndex + 1}`}
                            />
                            <button
                              onClick={() =>
                                removeProcedureStep(procedure.id, stepIndex)
                              }
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-[#171717]">
                          Contact Emails
                        </label>
                        <button
                          onClick={() => addContactEmail(procedure.id)}
                          className="flex items-center gap-1 px-2 py-1 bg-[#631012] text-white text-xs rounded hover:bg-[#7a1214] transition-colors"
                        >
                          <Plus size={14} />
                          Add Email
                        </button>
                      </div>
                      <div className="space-y-2">
                        {procedure.contactEmails.map((email, emailIndex) => (
                          <div key={emailIndex} className="flex gap-2">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) =>
                                updateContactEmail(
                                  procedure.id,
                                  emailIndex,
                                  e.target.value
                                )
                              }
                              className="flex-1 px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                              placeholder="email@nith.ac.in"
                            />
                            <button
                              onClick={() =>
                                removeContactEmail(procedure.id, emailIndex)
                              }
                              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-6">
                  {guidelinesData.procedures.map((procedure) => (
                    <div key={procedure.id} className="space-y-3">
                      <h3 className="text-xl font-bold text-[#171717]">
                        {procedure.title}
                      </h3>
                      <ol className="list-decimal list-inside space-y-2">
                        {procedure.steps.map((step, idx) => (
                          <li key={idx} className="text-sm text-[#171717]/70">
                            {step.text}
                          </li>
                        ))}
                      </ol>
                      {procedure.contactEmails.length > 0 && (
                        <div className="p-3 bg-[#F9F9F9] rounded border border-[#171717]/10">
                          <p className="text-xs font-medium text-[#171717]/60 mb-2">
                            Apply to:
                          </p>
                          {procedure.contactEmails.map((email, idx) => (
                            <div key={idx} className="text-sm text-[#631012]">
                              {idx === 0 ? 'To: ' : 'CC: '}
                              {email}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Charges */}
          {activeTab === 'charges' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    Charges ({guidelinesData.charges.length})
                  </h2>
                </div>
                <button
                  onClick={addCharge}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors text-sm sm:text-base"
                >
                  <Plus size={18} />
                  Add Charge
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={guidelinesData.chargesHeading}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
                        chargesHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Charges for Issue of Certificates / Documents"
                  />
                </div>

                <div className="space-y-3">
                  {guidelinesData.charges.map((charge, index) => (
                    <div
                      key={charge.id}
                      className="p-4 border border-[#171717]/20 rounded-lg bg-[#F9F9F9] space-y-3"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#171717]/60">
                          Charge #{index + 1}
                        </span>
                        <button
                          onClick={() => removeCharge(charge.id)}
                          className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="md:col-span-1">
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Certificate / Document Name
                          </label>
                          <input
                            type="text"
                            value={charge.name}
                            onChange={(e) =>
                              updateCharge(charge.id, 'name', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Certificate name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#171717]/60 mb-1">
                            Fee
                          </label>
                          <input
                            type="text"
                            value={charge.fee}
                            onChange={(e) =>
                              updateCharge(charge.id, 'fee', e.target.value)
                            }
                            className="w-full px-3 py-2 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm"
                            placeholder="Rs. 500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg space-y-4">
                  <h3 className="text-2xl font-bold text-[#171717] mb-4">
                    {guidelinesData.chargesHeading}
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] border-b border-[#171717]/10">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Sl. No.
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Name of Certificate / Document
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-[#171717] uppercase tracking-wider">
                            Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#171717]/10">
                        {guidelinesData.charges.map((charge, index) => (
                          <tr
                            key={charge.id}
                            className="hover:bg-[#F9F9F9] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {index + 1}
                            </td>
                            <td className="px-4 py-3 text-sm text-[#171717]">
                              {charge.name}
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-[#631012]">
                              {charge.fee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Important Note */}
          {activeTab === 'note' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Important Note
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={guidelinesData.importantNoteHeading}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
                        importantNoteHeading: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important Note"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Note Text
                  </label>
                  <textarea
                    rows={5}
                    value={guidelinesData.importantNoteText}
                    onChange={(e) =>
                      setGuidelinesData({
                        ...guidelinesData,
                        importantNoteText: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Important note text"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                    <h4 className="text-lg font-semibold text-amber-900 mb-2">
                      {guidelinesData.importantNoteHeading}
                    </h4>
                    <p className="text-sm text-amber-800">
                      {guidelinesData.importantNoteText}
                    </p>
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
