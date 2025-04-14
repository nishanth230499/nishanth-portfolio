'use client'

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'

interface ThemeProviderProps extends NextThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
