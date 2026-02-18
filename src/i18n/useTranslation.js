import { useLanguage } from '../context/LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key, fallback) => {
    const langTranslations = translations[language];
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    // Fallback to English
    const enTranslations = translations['en-IN'];
    if (enTranslations && enTranslations[key]) {
      return enTranslations[key];
    }
    return fallback || key;
  };
  
  return { t };
};
