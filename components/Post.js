import { useState } from 'react'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export default function Post() {
  const [theme, setTheme] = useState(LIGHT_THEME)
  const switchTheme = () => {
    if (!document.documentElement.classList.contains(DARK_THEME)) {
      document.documentElement.classList.add(DARK_THEME)
      setTheme(DARK_THEME)
    } else {
      document.documentElement.classList.remove(DARK_THEME)
      setTheme(LIGHT_THEME)
    }
  }

  return (
    <div>
          <button
          onClick={switchTheme}
          className="float-right px-6 py-2.5 bg-gray-800 dark:bg-white text-gray-200 dark:text-gray-800 rounded-full capitalize">
          {theme} Mode
        </button>
    </div>
  )
};