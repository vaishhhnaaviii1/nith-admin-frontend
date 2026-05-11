'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/app/sidebar/page';
const homeLinks = [
  { label: 'Add faculty', href: '/accounts/faculty' },
  { label: 'Assign Role', href: '/accounts/role' },
  { label: 'Assign position', href: '/accounts/position' },
  { label: 'Assign category', href: '/accounts/category' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar
        heading="Home"
        links={homeLinks}
        downlink="Back to Home"
        downlinkHref="/admin"
        activeLink={pathname}
      />
      <div className="w-[80%] bg-[#F9F9F9]">{children}</div>
    </div>
  );
}
