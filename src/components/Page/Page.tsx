import { ReactNode, Ref } from 'react'

export default function Page({
  children,
  ref,
  onNextPage,
  onPreviousPage,
}: {
  children: ReactNode
  ref?: Ref<HTMLElement>
  onNextPage: () => void
  onPreviousPage: () => void
}) {
  return (
    <section ref={ref}>
      <button onClick={onPreviousPage}>Previous</button>
      <p className='text-4xl font-bold text-primary text-center mb-4'>Skills</p>
      <button onClick={onNextPage}>Next</button>
      {children}
    </section>
  )
}
