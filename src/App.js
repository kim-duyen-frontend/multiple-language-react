import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

const languages = {
  en: { nativeName: 'English' },
  vi: { nativeName: 'Vietnamese' }
};
function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(languages).map((lng) => (
            <button className={`language ${i18n.resolvedLanguage === lng ? "active" : ""}`} key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {languages[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="description.part2">
            Learn React
          </Trans>
        </a>
      </header>
    </div>
  );
}

export default App;
