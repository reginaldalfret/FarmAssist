import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LANGUAGES, useLanguage } from '../context/LanguageContext';

const LanguageSelector = ({ variant = 'header' }) => {
  const { language, setLanguage, currentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium 
          text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 
          border border-gray-200 hover:border-primary/30"
        title="Select Language"
      >
        <Globe size={16} className="text-primary" />
        <span className="hidden sm:block">{currentLang.nativeLabel}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl 
          border border-gray-200 overflow-hidden z-50">
          <div className="px-3 py-2 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Select Language
            </p>
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm 
                  hover:bg-primary/5 transition-colors ${
                  language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-medium">{lang.nativeLabel}</div>
                    <div className="text-xs text-gray-500">{lang.label}</div>
                  </div>
                </div>
                {language === lang.code && <Check size={16} className="text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
