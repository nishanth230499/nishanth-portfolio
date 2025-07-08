import { ReactNode } from 'react'

export default function Section({
  children,
  title = '',
}: {
  children: ReactNode
  title?: string
}) {
  return (
    <section>
      <h2 className='text-4xl font-bold text-primary text-center mb-4'>
        {title}
      </h2>
      {children}
    </section>
  )
}
