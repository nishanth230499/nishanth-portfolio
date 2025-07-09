'use client'

import AppFooter from '@/components/AppFooter/AppFooter'
import Hero from '@/components/Hero/Hero'
import Page from '@/components/Page/Page'
import Skills from '@/components/Skills/Skills'
import AboutMe from '@/components/AboutMe/AboutMe'
import useWindowDimensions from '@/hooks/useWindowDimaensions'
import { useMemo, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

const getPages = (dualPage) => {
  return [
    {
      component: Hero,
      type: 'right',
    },
    ...(dualPage
      ? [
          {
            component: () => <div />,
            type: 'left',
          },
        ]
      : []),
    {
      title: 'About Me',
      component: AboutMe,
      type: 'right',
    },
    {
      title: 'Skills',
      component: Skills,
      type: 'left',
    },
    {
      title: 'Skills',
      component: Skills,
      type: 'right',
    },
  ]
}

export default function Home() {
  const bookRef = useRef()
  const { width, height } = useWindowDimensions()
  const onPreviousPage = () => {
    bookRef.current?.pageFlip().flipPrev()
  }

  const onNextPage = () => {
    bookRef.current?.pageFlip().flipNext()
  }

  const pageHeight = useMemo(() => (height ? height - 48 : 0), [height])

  const pageWidth = useMemo(
    () => (width ? (width < 1024 ? width - 48 : width / 2 - 24) : 0),
    [width]
  )

  const dualPage = useMemo(() => (width ? width >= 1024 : true), [width])
  return (
    <>
      <main className='p-6 bg-black dark:bg-white bg-[url(/wood-bg.jpg)] bg-cover bg-center overflow-hidden'>
        <HTMLFlipBook
          ref={bookRef}
          height={pageHeight}
          width={pageWidth}
          showCover
          disableFlipByClick
          swipeDistance={1000}
          // Dummy params
        >
          {getPages(dualPage).map((page, index) => (
            <Page
              key={index}
              onPreviousPage={onPreviousPage}
              onNextPage={onNextPage}
              dualPage={dualPage}
              title={page.title}
              type={page.type}>
              <page.component dualPage={dualPage} />
            </Page>
          ))}
        </HTMLFlipBook>
      </main>
      <AppFooter />
    </>
  )
}
