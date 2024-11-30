"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('./CodeEditor'), {
  ssr: false,
});

const SidebarLanguageButtons = dynamic(
  () => import('./SidebarLanguageButtons'),
  {
    ssr: false,
  }
);

const OutputPanel = dynamic(() => import('./OutputPanel'), {
  ssr: false,
});

const IndexPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>('print("Hello World")');

  useEffect(() => {
    setTheme(theme || 'dark');
  }, [setTheme, theme]);

  return (
    <div className="flex h-screen">
      <div className="sidebar bg-gray-800 text-white h-full p-4 flex flex-col">
        <SidebarLanguageButtons
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mt-auto"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="flex-1 flex flex-col">
        <CodeEditor
          language={selectedLanguage}
          value={code}
          onChange={setCode}
          className="flex-1 bg-gray-900 text-white p-4"
        />
        <OutputPanel className="bg-gray-800 text-white p-4" />
      </div>
    </div>
  );
};
export default IndexPage;