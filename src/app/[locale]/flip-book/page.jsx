'use client'

import AppFooter from '@/components/AppFooter/AppFooter'
import Hero from '@/components/Hero/Hero'
import Page from '@/components/Page/Page'
import Skills from '@/components/Skills/Skills'
import AboutMe from '@/components/AboutMe/AboutMe'
import useWindowDimensions from '@/hooks/useWindowDimaensions'
import { useMemo, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

export default function Home() {
  const bookRef = useRef()
  const { width, height } = useWindowDimensions()
  const onPreviousPage = () => {
    bookRef.current?.pageFlip().flipPrev()
  }

  const onNextPage = () => {
    bookRef.current?.pageFlip().flipNext()
  }

  const pageHeight = useMemo(() => height ?? 0, [height])

  const pageWidth = useMemo(
    () => (width ? (width <= 768 ? width : width / 2) : 0),
    [width]
  )

  const dualPage = useMemo(() => width > 768, [width])
  return (
    <>
      <main>
        <HTMLFlipBook
          ref={bookRef}
          height={pageHeight}
          width={pageWidth}
          showCover
          disableFlipByClick
          swipeDistance={1000}
          // Dummy params
        >
          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            dualPage={dualPage}
            type='right'>
            <Hero />
          </Page>
          {dualPage && (
            <Page
              onPreviousPage={onPreviousPage}
              onNextPage={onNextPage}
              dualPage={dualPage}
              type='left'></Page>
          )}
          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            title='About Me'
            dualPage={dualPage}
            type='right'>
            <AboutMe />
          </Page>

          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            title='Skills'
            dualPage={dualPage}
            type='left'>
            <Skills />
          </Page>

          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            title='Skills'
            dualPage={dualPage}
            type='right'>
            <Skills />
          </Page>

          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            title='Skills'
            dualPage={dualPage}
            type='left'>
            <Skills />
          </Page>

          <Page
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            title='Skills'
            dualPage={dualPage}
            type='right'>
            <Skills />
          </Page>
        </HTMLFlipBook>
      </main>
      <AppFooter />
    </>
  )
}
