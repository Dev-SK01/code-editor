// components/SidebarLanguageButtons.tsx
import React from 'react';

interface SidebarLanguageButtonsProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const SidebarLanguageButtons: React.FC<SidebarLanguageButtonsProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const languages = ['python', 'javascript', 'typescript', 'go', 'php', 'swift', 'rust', 'c++'];

  return (
    <div>
      {languages.map((lang) => (
        <button
          key={lang}
          className={`bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mb-2 flex items-center ${
            lang === selectedLanguage ? 'bg-gray-600' : ''
          }`}
          onClick={() => onLanguageChange(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default SidebarLanguageButtons;