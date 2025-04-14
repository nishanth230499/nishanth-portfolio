import { getTranslations } from 'next-intl/server'

export default async function Hero() {
  const t = await getTranslations('HomePage')
  return (
    <section>
      <p className='text-6xl font-bold'>
        {t('hi')}, {t("i'm")}{' '}
      </p>
      <p className='text-6xl font-bold text-primary'>{t('name')}</p>
      <p className='mt-2 text-xl'>{t('tagline')}</p>
    </section>
  )
}
