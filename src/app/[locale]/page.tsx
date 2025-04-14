import AppFooter from '@/components/AppFooter/AppFooter'
import AppHeader from '@/components/AppHeader/AppHeader'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <>
      <AppHeader />
      <main>
        <div className='md:w-2xl lg:w-4xl xl:w-6xl mx-4 md:mx-auto'>
          <Hero />
        </div>
      </main>
      <AppFooter />
    </>
  )
}
