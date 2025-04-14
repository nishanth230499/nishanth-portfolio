'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

const LocaleSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChange = (e: { target: { value: string } }) => {
    const newLocale = e.target.value
    router.push(pathname, { locale: newLocale })
  }

  return (
    <select value={locale} onChange={handleChange}>
      <option value='en'>English</option>
      <option value='kn-IN'>ಕನ್ನಡ</option>
    </select>
  )
}

export default LocaleSelector
