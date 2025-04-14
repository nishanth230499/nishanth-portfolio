'use client'

import classNames from 'classnames'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const themes = [
  { name: 'light', icon: <Sun strokeWidth={2.5} size={16} /> },
  { name: 'system', icon: <Monitor strokeWidth={2.5} size={16} /> },
  { name: 'dark', icon: <Moon strokeWidth={2.5} size={16} /> },
]
export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return <div />
  }
  return (
    <div
      role='radiogroup'
      className='border border-border-color rounded-full p-1'>
      {themes.map(({ name, icon }) => (
        <button
          key={name}
          aria-checked={theme === name}
          aria-label={`Switch to ${name} theme`}
          data-active={theme === name}
          data-theme-switcher='true'
          role='radio'
          type='button'
          className={classNames(
            'p-2 rounded-full opacity-50 hover:opacity-100 focus:opacity-100',
            { 'opacity-100 bg-selected-background': theme === name }
          )}
          onClick={() => setTheme(name)}>
          {icon}
        </button>
      ))}
    </div>
  )
}
