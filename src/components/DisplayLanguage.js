import React from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
  it: 'ITALIANO',
  fr: 'FRANÇAIS',
  en: 'ENGLISH',
  de: 'DEUTSCH',
  es: 'ESPAŅOL'
}

export class DisplayLanguage extends React.Component{
  render(){
    return (
      <LanguageContext.Consumer>
        {(language)=>{
          return <div>{languages[language]}</div>
        }}
      </LanguageContext.Consumer>
    )
  }
}