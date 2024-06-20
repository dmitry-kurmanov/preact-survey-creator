import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';
import 'survey-core/survey.i18n.js';
import 'survey-creator-core/survey-creator-core.i18n.js';
import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';

export function App() {
  const [count, setCount] = useState(0);

  const options = {
    showLogicTab: true,
  };
  const creator = new SurveyCreator(options);
  window.creator = creator;

  return (
    <>
      <SurveyCreatorComponent creator={creator} />
    </>
  );
}
