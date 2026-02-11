'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    // Raggruppati per sezione
    {
      section: 'Principale',
      items: [
        { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
        { name: 'Nuova Spesa', href: '/dashboard/expenses/new', icon: '➕', highlight: true },
        { name: 'Tutte le Spese', href: '/dashboard/expenses', icon: '📋' },
      ]
    },
    {
      section: 'Kakeibo',
      items: [
        { name: 'Pianificazione', href: '/dashboard/planning', icon: '🎯' },
        { name: '4 Domande', href: '/dashboard/questions', icon: '❓' },
        { name: 'Riflessioni', href: '/dashboard/reflections', icon: '📝' },
      ]
    },
    {
      section: 'Analisi',
      items: [
        { name: 'Report', href: '/dashboard/reports', icon: '📊' },
        { name: 'Storico', href: '/dashboard/history', icon: '📅' },
        { name: 'Obiettivi', href: '/dashboard/goals', icon: '🏆' },
      ]
    },
    {
      section: 'Account',
      items: [
        { name: 'Impostazioni', href: '/dashboard/settings', icon: '⚙️' },
        { name: 'Esci', href: '/auth/logout', icon: '🚪' },
      ]
    }
  ];

  return (
    <aside className={`bg-white border-r h-screen transition-all ${isCollapsed ? 'w-20' : 'w-64'} hidden sm:block`}>
      {/* Logo */}
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && <span className="font-bold text-xl">Kakeibo 📘</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label={isCollapsed ? 'Espandi sidebar' : 'Comprimi sidebar'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-6" role="navigation" aria-label="Sidebar principale">
        {menuItems.map((section) => (
          <div key={section.section}>
            {!isCollapsed && (
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                {section.section}
              </p>
            )}
            
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${isCollapsed ? 'justify-center' : ''}
                      ${item.highlight 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {!isCollapsed && (
                      <>
                        <span className="flex-1">{item.name}</span>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}