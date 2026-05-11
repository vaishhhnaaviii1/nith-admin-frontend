'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/app/sidebar/page';

const aboutNithLinks = [
  { label: 'download for students', href: '/downloads/students' },
  { label: 'download for faculty', href: '/downloads/faculty' },
  { label: 'miscellaneous downloads', href: '/downloads/miscellaneous' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar
        heading="About NITH"
        links={aboutNithLinks}
        downlink="Back to Home"
        downlinkHref="/admin"
        activeLink={pathname}
      />
      <div className="w-[80%] bg-[#F9F9F9]">{children}</div>
    </div>
  );
}
