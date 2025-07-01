// import { getTranslations } from 'next-intl/server'
import LinkedinIcon from '@/assets/svg/LinkedinIcon'
import { Link } from '@/i18n/navigation'
import GithubIcon from '@/assets/svg/GithubIcon'
import LeetCodeIcon from '@/assets/svg/LeetCodeIcon'
import FacebookIcon from '@/assets/svg/FacebookIcon'
import InstagramIcon from '@/assets/svg/InstagramIcon'
import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

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
    name: 'LeetCode',
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

export default function Hero({ ref }: { ref?: any }) {
  // const t = await getTranslations('HomePage')
  const t = useTranslations('HomePage')
  return (
    <section
      className='flex flex-col items-center gap-4 md:flex-row md:gap-8 bg-(--background)'
      ref={ref}>
      <Image
        src='/profile_image.jpg'
        alt='profile-image'
        className='rounded-full md:hidden'
        width={250}
        height={250}
      />
      <Image
        src='/profile_image.jpg'
        alt='profile-image'
        className='rounded-full hidden md:block'
        width={300}
        height={300}
      />
      <div>
        <p className='text-4xl font-bold'>
          {t('hi')}, {t("i'm")}{' '}
        </p>
        <p className='text-5xl font-bold text-primary'>{t('name')}</p>
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
      </div>
    </section>
  )
}
