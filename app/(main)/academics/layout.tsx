'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/app/sidebar/page';

const academicsLinks = [
  { label: 'Activities', href: '/academics/activities' },
  { label: 'Functionaries', href: '/academics/functionaries' },
  { label: 'Academic Calender', href: '/academics/academic-calender' },
  { label: 'Academic Notices', href: '/academics/academic-notices' },
  { label: 'NAD Cell', href: '/academics/nad-cell' },
  { label: 'Fee Structure', href: '/academics/fee-structure' },
  { label: 'Class Timetable', href: '/academics/class-timetable' },
  {
    label: 'Admissions & Registrations',
    href: '/academics/admissions-registrations',
  },
  { label: 'Admissions 2025-26', href: '/academics/admissions-2025-26' },
  { label: 'Registration 2025-26', href: '/academics/registration-2025-26' },
  {
    label: 'International Admissions',
    href: '/academics/international-admissions',
  },
  {
    label: 'Examinations & Evaluation',
    href: '/academics/examinations-evaluation',
  },
  {
    label: 'Results & Certificates',
    href: '/academics/results-certificates',
  },
  { label: 'Results', href: '/academics/results' },
  {
    label: 'Guidelines for Certificates Issuance',
    href: '/academics/guidelines-certificates-issuance',
  },
  {
    label: 'Guidelines for Certificates Verification',
    href: '/academics/guidelines-certificates-verification',
  },
  {
    label: 'Contact for Certification matters',
    href: '/academics/contact-certification-matters',
  },
  { label: 'Bachelor Programmes', href: '/academics/bachelor-programmes' },
  { label: 'Bachelor Ordinances', href: '/academics/bachelor-ordinances' },
  {
    label: 'Bachelor Course Structure & Syllabus',
    href: '/academics/bachelor-course-structure-syllabus',
  },
  { label: 'Master Programmes', href: '/academics/master-programmes' },
  { label: 'Master Ordinances', href: '/academics/master-ordinances' },
  {
    label: 'Master Course Structure & Syllabus',
    href: '/academics/master-course-structure-syllabus',
  },
  { label: 'Doctoral Programmes', href: '/academics/doctoral-programmes' },
  { label: 'Doctoral Ordinances', href: '/academics/doctoral-ordinances' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar
        heading="Academics"
        links={academicsLinks}
        downlink="Back to Main Admin Panel"
        downlinkHref="/admin"
        activeLink={pathname}
      />
      <div className="w-[80%] bg-[#F9F9F9]">{children}</div>
    </div>
  );
}
