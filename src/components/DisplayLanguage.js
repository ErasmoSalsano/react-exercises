import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  const languages = {
    it: 'ITALIANO',
    fr: 'FRANÇAIS',
    en: 'ENGLISH',
    de: 'DEUTSCH',
    es: 'ESPAŅOL'
  }

  return <h1>{languages[language]}</h1>
}