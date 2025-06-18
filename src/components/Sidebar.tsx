import React from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'semantic-html', label: 'Semantic HTML' },
  { id: 'keyboard-navigation', label: 'Keyboard Navigation' },
  { id: 'aria-labels', label: 'ARIA Labels' },
  { id: 'color-contrast', label: 'Color & Contrast' },
  { id: 'forms', label: 'Forms' },
  { id: 'images', label: 'Images & Media' },
  { id: 'focus-management', label: 'Focus Management' },
  { id: 'error-handling', label: 'Error Handling' },
  { id: 'responsive-design', label: 'Responsive Design' },
  { id: 'testing', label: 'Testing' },
  { id: 'checklist', label: 'Final Checklist' },
];

type SidebarProps = {
  activeSection: string;
  onSectionChange: (id: string) => void;
};

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <h1 className="text-xl font-bold mb-6 px-5">ADA Compliance Guide</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`nav-item w-full text-left px-5 py-3 ${activeSection === section.id ? 'active' : ''}`}
              aria-current={activeSection === section.id ? 'page' : undefined}
              aria-selected={activeSection === section.id}
              onClick={() => onSectionChange(section.id)}
              id={`nav-${section.id}`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 