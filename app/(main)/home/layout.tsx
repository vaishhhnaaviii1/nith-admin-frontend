'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/app/sidebar/page';

const homeLinks = [
  { label: 'Hero Section', href: '/home/hero' },
  { label: 'About Us', href: '/home/about' },
  { label: 'Events', href: '/home/events' },
  { label: 'Admissions', href: '/home/admissions' },
  { label: 'News', href: '/home/news' },
  { label: 'Achievements', href: '/home/achievements' },
  { label: 'Gallery', href: '/home/gallery' },
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
