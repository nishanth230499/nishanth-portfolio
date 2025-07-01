'use client'

import AppFooter from '@/components/AppFooter/AppFooter'
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import useWindowDimensions from '@/hooks/useWindowDimaensions'
import HTMLFlipBook from 'react-pageflip'

export default function Home() {
  const { width, height } = useWindowDimensions()
  return (
    <>
      {/* <AppHeader /> */}
      <main>
        <HTMLFlipBook
          height={height ?? 0}
          width={width ?? 0}
          showCover
          disableFlipByClick
          // Dummy params
        >
          {/* <div className='lg:w-4xl xl:w-6xl mx-4 lg:mx-auto flex flex-col gap-16'> */}
          <Hero />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          {/* </div> */}
        </HTMLFlipBook>
      </main>
      <AppFooter />
    </>
  )
}
