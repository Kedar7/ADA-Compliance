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
  { id: 'language-declaration', label: 'Language Declaration' },
  { id: 'captions-video', label: 'Captions for Video' },
  { id: 'audio-description', label: 'Audio Description' },
  { id: 'data-tables', label: 'Data Tables' },
  { id: 'status-messages', label: 'Status Messages' },
  { id: 'target-size', label: 'Target Size' },
  { id: 'input-purpose', label: 'Input Purpose' },
  { id: 'testing', label: 'Testing' },
  { id: 'checklist', label: 'Final Checklist' },
];

type SidebarProps = {
  activeSection: string;
  onSectionChange: (id: string) => void;
};

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
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
      <style jsx>{`
        .skip-link {
          position: absolute;
          left: -999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: 100;
        }
        .skip-link:focus {
          left: 0;
          top: 0;
          width: auto;
          height: auto;
          padding: 1rem;
          background: #000;
          color: #fff;
          font-size: 1rem;
        }
        .nav-item:focus {
          outline: 3px solid #005fcc;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
} 