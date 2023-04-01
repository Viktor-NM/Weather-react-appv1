import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { WeatherProvider } from './components/WeatherContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
)
