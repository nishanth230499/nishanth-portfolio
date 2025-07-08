import AppFooter from '@/components/AppFooter/AppFooter'
import AppHeader from '@/components/AppHeader/AppHeader'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import AboutMe from '@/components/AboutMe/AboutMe'
import Section from '@/components/Section/Section'

export default function Home() {
  return (
    <>
      <AppHeader />
      <main>
        <div className='lg:w-4xl xl:w-6xl mx-4 lg:mx-auto flex flex-col gap-16'>
          <Section>
            <Hero />
          </Section>
          <Section title='About Me'>
            <AboutMe />
          </Section>
          <Section title='Skills'>
            <Skills />
          </Section>
        </div>
      </main>
      <AppFooter />
    </>
  )
}
