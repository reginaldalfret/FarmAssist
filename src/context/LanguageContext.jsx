import React, { createContext, useContext, useState } from 'react';

export const LANGUAGES = [
  { code: 'en-IN', label: 'English',    nativeLabel: 'English',    flag: '🇮🇳' },
  { code: 'hi-IN', label: 'Hindi',      nativeLabel: 'हिंदी',       flag: '🇮🇳' },
  { code: 'gu-IN', label: 'Gujarati',   nativeLabel: 'ગુજરાતી',     flag: '🇮🇳' },
  { code: 'pa-IN', label: 'Punjabi',    nativeLabel: 'ਪੰਜਾਬੀ',      flag: '🇮🇳' },
  { code: 'mr-IN', label: 'Marathi',    nativeLabel: 'मराठी',       flag: '🇮🇳' },
  { code: 'te-IN', label: 'Telugu',     nativeLabel: 'తెలుగు',      flag: '🇮🇳' },
  { code: 'ta-IN', label: 'Tamil',      nativeLabel: 'தமிழ்',       flag: '🇮🇳' },
  { code: 'kn-IN', label: 'Kannada',   nativeLabel: 'ಕನ್ನಡ',       flag: '🇮🇳' },
];

const LanguageContext = createContext({
  language: 'en-IN',
  setLanguage: () => {},
  currentLang: LANGUAGES[0]
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en-IN');
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage?.getItem('agroyield-lang') : null;
    if (savedLang) {
      setLanguage(savedLang);
    }
    setIsHydrated(true);
  }, []);
  
  const handleSetLanguage = (code) => {
    setLanguage(code);
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('agroyield-lang', code);
    }
  };
  
  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, currentLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;
