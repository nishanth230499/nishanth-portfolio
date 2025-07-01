import CSSIcon from '@/assets/svg/CSSIcon'
import HTMLIcon from '@/assets/svg/HTMLIcon'
import JavaScriptIcon from '@/assets/svg/JavaScriptIcon'
import NextJSIcon from '@/assets/svg/NextJSIcon'
import NodeJSIcon from '@/assets/svg/NodeJSIcon'
import PythonIcon from '@/assets/svg/PythonIcon'
import ReactIcon from '@/assets/svg/ReactIcon'
import ReduxLogo from '@/assets/svg/ReduxLogo'
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon'
import WebpackLogo from '@/assets/svg/WebpackLogo'
import Link from 'next/link'

const skills = [
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'HTML5', Icon: HTMLIcon },
  { name: 'CSS3', Icon: CSSIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'React Native', Icon: ReactIcon },
  { name: 'Redux', Icon: ReduxLogo },
  { name: 'Node.js', Icon: NodeJSIcon },
  { name: 'Webpack', Icon: WebpackLogo },
  { name: 'Django', Icon: WebpackLogo },
  { name: 'Flask', Icon: WebpackLogo },
  { name: 'FastAPI', Icon: WebpackLogo },
  { name: 'Git', Icon: WebpackLogo },
  { name: 'Jenkins', Icon: WebpackLogo },
  { name: 'Firebase', Icon: WebpackLogo },
  { name: 'AWS', Icon: WebpackLogo },
  { name: 'GraphQL', Icon: WebpackLogo },
  { name: 'Docker', Icon: WebpackLogo },
]

export default async function Skills() {
  return (
    <section>
      <p className='text-4xl font-bold text-primary text-center mb-4'>Skills</p>
      <div className='grid gap-4 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'>
        {skills.map(({ name, Icon }) => (
          <Link
            href='#'
            key={name}
            className='group hover:scale-120 focus:scale-120 transition bg-(--background)'>
            <div className='w-full border-1 rounded-md flex flex-col items-center gap-2 p-2'>
              <Icon />
              <p>{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
