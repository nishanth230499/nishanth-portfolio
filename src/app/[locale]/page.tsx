import AppFooter from '@/components/AppFooter/AppFooter'
import AppHeader from '@/components/AppHeader/AppHeader'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'

export default function Home() {
  return (
    <>
      <AppHeader />
      <main>
        <div className='lg:w-4xl xl:w-6xl mx-4 lg:mx-auto flex flex-col gap-16'>
          <Hero />
          <Skills />
        </div>
      </main>
      <AppFooter />
    </>
  )
}
