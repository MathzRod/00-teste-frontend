import { useEffect, useState } from 'react'
import Login from './pages/Login'
import styles from './App.module.scss'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const isDarkTheme = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <button
        type="button"
        className={styles.themeToggle}
        aria-label={isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro'}
        title={isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro'}
        onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      >
        {isDarkTheme ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        )}
      </button>

      <Login />
    </>
  )
}

export default App
