import { Link } from '@/i18n/navigation'
import ThemeSelector from '../ThemeSelector/ThemeSelector'
import LocaleSelector from '../LocaleSelector/LocaleSelector'

export default function AppHeader() {
  return (
    <header className='flex items-center justify-around px-4'>
      <nav className='w-full md:w-2xl lg:w-4xl xl:w-6xl flex items-center justify-between py-4'>
        <div>
          <Link href='/' className='font-bold text-2xl text-primary'>
            NPK.
          </Link>
        </div>
        <div className='flex gap-2'>
          <ThemeSelector />
          <LocaleSelector />
        </div>
      </nav>
    </header>
  )
}
