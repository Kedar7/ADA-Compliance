"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8 bg-white">
        <Content activeSection={activeSection} />
      </main>
    </div>
  );
}
