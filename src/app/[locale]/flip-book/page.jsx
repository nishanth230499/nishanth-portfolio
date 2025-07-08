'use client'

import AppFooter from '@/components/AppFooter/AppFooter'
import Hero from '@/components/Hero/Hero'
import Page from '@/components/Page/Page'
import Skills from '@/components/Skills/Skills'
import useWindowDimensions from '@/hooks/useWindowDimaensions'
import { useCallback, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

export default function Home() {
  const bookRef = useRef()
  const { width, height } = useWindowDimensions()
  const onPreviousPage = () => {
    console.log(bookRef.current?.getPageFlip().flipNext)
    bookRef.current?.pageFlip().flipPrev()
  }

  const onNextPage = () => {
    bookRef.current?.pageFlip().flipNext()
  }
  return (
    <>
      {/* <AppHeader /> */}
      <main>
        <HTMLFlipBook
          ref={bookRef}
          height={height ?? 0}
          width={width ?? 0}
          showCover
          disableFlipByClick
          swipeDistance={1000}
          // Dummy params
        >
          {/* <div className='lg:w-4xl xl:w-6xl mx-4 lg:mx-auto flex flex-col gap-16'> */}
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Hero />
          </Page>
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Skills />
          </Page>
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Skills />
          </Page>
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Skills />
          </Page>
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Skills />
          </Page>
          <Page onPreviousPage={onPreviousPage} onNextPage={onNextPage}>
            <Skills />
          </Page>
          {/* </div> */}
        </HTMLFlipBook>
      </main>
      <AppFooter />
    </>
  )
}
