"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "KR" | "ENG";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "KR",
  setLang: () => {},
  toggleLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("KR");

  useEffect(() => {
    const saved = localStorage.getItem("bfpi_lang") as Language;
    if (saved && (saved === "KR" || saved === "ENG")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("bfpi_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "KR" ? "ENG" : "KR");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
