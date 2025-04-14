import { getTranslations } from 'next-intl/server'
import LinkedinIcon from '@/assets/svg/LinkedinIcon'
import { Link } from '@/i18n/navigation'
import GithubIcon from '@/assets/svg/GithubIcon'
import LeetCodeIcon from '@/assets/svg/LeetCodeIcon'
import FacebookIcon from '@/assets/svg/FacebookIcon'
import InstagramIcon from '@/assets/svg/InstagramIcon'
import classNames from 'classnames'

const heroLinks = [
  {
    name: 'Linkedin',
    Icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/nishanth-prasanna-kumar/',
    expandOnHover: true,
  },
  {
    name: 'GitHub',
    Icon: GithubIcon,
    href: 'https://github.com/nishanth230499',
    expandOnHover: true,
  },
  {
    name: 'GitHub',
    Icon: LeetCodeIcon,
    href: 'https://leetcode.com/u/nishanth230499/',
    expandOnHover: true,
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    href: 'https://www.facebook.com/nishanth.nish.503/',
    expandOnHover: true,
  },
  {
    name: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/nishanth_palasamudram/',
  },
]

export default async function Hero() {
  const t = await getTranslations('HomePage')
  return (
    <section>
      <p className='text-6xl font-bold'>
        {t('hi')}, {t("i'm")}{' '}
      </p>
      <p className='text-6xl font-bold text-primary'>{t('name')}</p>
      <p className='my-4 text-xl'>{t('tagline')}</p>
      <div className='flex gap-4 items-center'>
        {heroLinks.map(({ Icon, name, href, expandOnHover }) => (
          <Link
            href={href}
            key={name}
            title={name}
            target='_blank'
            className={classNames('group', {
              'hover:scale-150 focus:scale-150 transition': expandOnHover,
            })}>
            <Icon />
          </Link>
        ))}
      </div>
    </section>
  )
}
