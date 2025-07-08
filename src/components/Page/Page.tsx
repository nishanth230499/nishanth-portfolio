import { ReactNode, Ref } from 'react'

export default function Page({
  children,
  ref,
  onNextPage,
  onPreviousPage,
  title,
  dualPage,
  type = 'left',
}: {
  children: ReactNode
  ref?: Ref<HTMLElement>
  onNextPage: () => void
  onPreviousPage: () => void
  title?: string
  dualPage?: boolean
  type?: 'left' | 'right'
}) {
  return (
    <section
      ref={ref}
      className='relative h-full w-full rounded-lg shadow-lg px-8 py-6 bg-(--background)'>
      {title && (
        <>
          <h2 className='text-4xl font-bold text-center mb-2 tracking-wide'>
            {title}
          </h2>
          <hr className='border-t mb-4' />
        </>
      )}
      <div className='flex flex-col justify-center'>{children}</div>
      {/* Fixed footer with navigation buttons */}
      <div className='fixed left-0 right-0 bottom-0 w-full flex justify-between px-8 py-4 z-10 bg-(--background)'>
        {dualPage ? (
          type === 'left' ? (
            <button onClick={onPreviousPage}>Previous</button>
          ) : (
            <>
              <div />
              <button onClick={onNextPage}>Next</button>
            </>
          )
        ) : (
          <>
            <button onClick={onPreviousPage}>Previous</button>
            <button onClick={onNextPage}>Next</button>
          </>
        )}
      </div>
    </section>
  )
}
