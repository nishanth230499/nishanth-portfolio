'use client'

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'

interface ThemeProviderProps extends NextThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>
}
