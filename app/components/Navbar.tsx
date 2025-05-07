'use client';

import Link from 'next/link';

export default function Navbar() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Red', path: '/red' },
    { name: 'Blue', path: '/blue' },
    { name: 'Green', path: '/green' },
    { name: 'Yellow', path: '/yellow' },
    { name: 'Purple', path: '/purple' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className="hover:text-gray-300 transition-colors"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
} 