import classNames from 'classnames'
import { ReactNode, Ref } from 'react'

export default function Page({
  children,
  ref,
  onPreviousPage,
  title,
  dualPage,
  type = 'left',
}: {
  children: ReactNode
  ref?: Ref<HTMLElement>
  onPreviousPage: () => void
  title?: string
  dualPage?: boolean
  type?: 'left' | 'right'
}) {
  return (
    <section
      ref={ref}
      className={classNames(
        // 'relative h-full w-full shadow-lg bg-(--background)',
        'relative h-full w-full shadow-lg bg-[url(/paper-light.webp)] dark:bg-[url(/paper-dark.jpg)] bg-cover bg-center',
        {
          'rounded-r-2xl rounded-l-md': type === 'right',
          'rounded-l-2xl rounded-r-md': type === 'left',
        }
      )}>
      <div className='flex flex-col h-full px-4 md:px-12 pb-12'>
        <div className='pt-4 md:pt-8 z-10'>
          {title && (
            <>
              <h2 className='text-3xl font-bold text-center mb-2 tracking-wide'>
                {title}
              </h2>
              <hr className='border-t' />
            </>
          )}
        </div>
        <div className='overflow-y-auto pt-4'>{children}</div>
        {/* Fixed footer with navigation buttons */}
        <div className='absolute bottom-0 left-0 right-0 flex justify-between py-4 px-4 md:px-12 z-10 rounded-2xl'>
          {dualPage ? (
            type === 'left' ? (
              <button onClick={onPreviousPage}>Previous</button>
            ) : (
              <>
                <div />
                <div>Next</div>
              </>
            )
          ) : (
            <>
              <button onClick={onPreviousPage}>Previous</button>
              <div>Next</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
