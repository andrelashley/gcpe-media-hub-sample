import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </StrictMode>,
)
