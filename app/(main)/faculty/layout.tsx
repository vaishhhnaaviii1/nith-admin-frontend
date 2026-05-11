'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/app/sidebar/page';

const facultyLinks = [
  { label: 'Activities', href: '/faculty/activities' },
  { label: 'Functionaries', href: '/faculty/functionaries' },
  { label: 'CPDA Rules', href: '/faculty/cpda-rules' },
  {
    label: 'Application Forwarding Rules',
    href: '/faculty/application-forwarding-rules',
  },
  { label: 'Deputation Rules', href: '/faculty/deputation-rules' },
  {
    label: 'Rules for Conducting Workshops',
    href: '/faculty/rules-conducting-workshops',
  },
  {
    label: 'Faculty Related Notices',
    href: '/faculty/faculty-related-notices',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar
        heading="Faculty"
        links={facultyLinks}
        downlink="Back to Main Admin Panel"
        downlinkHref="/admin"
        activeLink={pathname}
      />
      <div className="w-[80%] bg-[#F9F9F9]">{children}</div>
    </div>
  );
}
